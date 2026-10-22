"use client";

import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { useEffect, useRef, useState } from "react";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import land110 from "world-atlas/land-110m.json";
import { branchName, type BranchSlug } from "@/content/churches";
import { journey, type JourneyStop, type LonLat } from "@/content/journey";
import { milestones } from "@/content/milestones";
import { formatYear } from "@/lib/years";

type LandTopology = Topology<{ land: GeometryCollection }>;
type Camera = { lon: number; lat: number; zoom: number };

const toLand = (topology: unknown): GeoPermissibleObjects => {
  // El JSON de world-atlas no trae tipos: lo describimos una sola vez aquí.
  const typed = topology as LandTopology;
  return feature(typed, typed.objects.land);
};

const coarseLand = toLand(land110);
const DETAIL_ZOOM = 3;
const FLIGHT_MS = 1800;
const ROUTE_MS = 2600;

const easeInOut = (t: number): number => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (t: number): number => Math.min(1, Math.max(0, t));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

const cameraOf = (stop: JourneyStop): Camera => ({ lon: stop.view.center[0], lat: stop.view.center[1], zoom: stop.view.zoom });

/** Vuelo entre dos vistas: si están lejos, la cámara se aleja a mitad de camino, como un avión. */
const flyBetween = (from: Camera, to: Camera, t: number): Camera => {
  const e = easeInOut(t);
  const distance = Math.hypot(to.lon - from.lon, to.lat - from.lat);
  const lift = Math.min(0.75, distance / 90) * Math.sin(Math.PI * e);
  const zoom = Math.exp(lerp(Math.log(from.zoom), Math.log(to.zoom), e)) * (1 - lift);
  return { lon: lerp(from.lon, to.lon, e), lat: lerp(from.lat, to.lat, e), zoom: Math.max(0.8, zoom) };
};

const cssVar = (name: string): string => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const branchVar: Readonly<Record<BranchSlug, string>> = {
  "primer-milenio": "--rama-primer-milenio",
  catolica: "--rama-catolica",
  ortodoxa: "--rama-ortodoxa",
  orientales: "--rama-orientales",
  protestante: "--rama-protestante",
  anglicana: "--rama-anglicana",
};

const placeIndex = new Map(milestones.map((milestone) => [milestone.place, milestone]));

const drawRoute = (context: CanvasRenderingContext2D, project: (p: LonLat) => [number, number] | null, points: readonly LonLat[], progress: number) => {
  const screen = points.map(project).filter((p): p is [number, number] => p !== null);
  if (screen.length < 2 || progress <= 0) return null;
  const lengths = screen.slice(1).map((p, i) => Math.hypot(p[0] - screen[i][0], p[1] - screen[i][1]));
  const total = lengths.reduce((sum, length) => sum + length, 0);
  let remaining = total * progress;
  context.beginPath();
  context.moveTo(screen[0][0], screen[0][1]);
  let tip = screen[0];
  for (let i = 0; i < lengths.length && remaining > 0; i++) {
    const [ax, ay] = screen[i];
    const [bx, by] = screen[i + 1];
    const t = Math.min(1, remaining / (lengths[i] || 1));
    tip = [lerp(ax, bx, t), lerp(ay, by, t)];
    context.lineTo(tip[0], tip[1]);
    remaining -= lengths[i];
  }
  context.stroke();
  return tip;
};

export const JourneyMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const stop = journey[active];

  // Estado de la animación, fuera de React para no repintar en cada fotograma.
  const anim = useRef({
    camera: cameraOf(journey[0]),
    from: cameraOf(journey[0]),
    to: cameraOf(journey[0]),
    started: 0,
    active: 0,
    appeared: new Map<string, number>(),
    detail: null as GeoPermissibleObjects | null,
  });

  useEffect(() => {
    let cancelled = false;
    import("world-atlas/land-50m.json").then((module) => {
      if (!cancelled) anim.current.detail = toLand(module.default);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const state = anim.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    state.from = state.camera;
    state.to = cameraOf(journey[active]);
    state.started = reduced ? -Infinity : performance.now();
    state.active = active;
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;

    const draw = (now: number) => {
      const state = anim.current;
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
      }
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const flight = clamp01((now - state.started) / FLIGHT_MS);
      state.camera = flyBetween(state.from, state.to, flight);
      const { lon, lat, zoom } = state.camera;
      const narrow = width < 768;
      const base = (narrow ? width * 1.25 : Math.max(width, height * 0.9)) / (2 * Math.PI);
      const projection = geoMercator()
        .scale(base * zoom)
        .center([lon, lat])
        .translate([narrow ? width / 2 : width * 0.66, narrow ? height * 0.36 : height / 2]);
      const path = geoPath(projection, context);
      const project = (point: LonLat) => projection([point[0], point[1]]) as [number, number] | null;

      context.fillStyle = cssVar("--mar");
      context.fillRect(0, 0, width, height);
      context.beginPath();
      path(zoom > DETAIL_ZOOM && state.detail ? state.detail : coarseLand);
      context.fillStyle = cssVar("--tierra");
      context.fill();
      context.strokeStyle = cssVar("--linea");
      context.lineWidth = 1;
      context.stroke();

      // Rutas: las anteriores quedan como rastro; la actual se dibuja poco a poco.
      const current = journey[state.active];
      const routeProgress = clamp01((now - state.started - FLIGHT_MS * 0.5) / ROUTE_MS);
      context.lineCap = "round";
      context.lineJoin = "round";
      journey.slice(0, state.active).forEach((past) => {
        if (!past.route) return;
        context.strokeStyle = cssVar("--lapis");
        context.globalAlpha = 0.25;
        context.lineWidth = 2;
        context.setLineDash([]);
        drawRoute(context, project, past.route.points, 1);
      });
      context.globalAlpha = 1;
      if (current.route) {
        context.strokeStyle = cssVar("--lapis");
        context.lineWidth = 3.5;
        context.setLineDash([9, 7]);
        context.lineDashOffset = -now / 40;
        const tip = drawRoute(context, project, current.route.points, easeInOut(routeProgress));
        context.setLineDash([]);
        if (tip && routeProgress < 1) {
          context.beginPath();
          context.arc(tip[0], tip[1], 6, 0, Math.PI * 2);
          context.fillStyle = cssVar("--alba");
          context.fill();
        }
      }

      // Los hitos ya ocurridos, cada uno con el color de su iglesia.
      const radius = Math.min(7, 3.5 + Math.log2(zoom + 1));
      milestones.forEach((milestone, index) => {
        if (milestone.year > current.year) return;
        const key = String(index);
        if (!state.appeared.has(key)) state.appeared.set(key, now);
        const age = clamp01((now - (state.appeared.get(key) ?? now)) / 500);
        const point = project([milestone.lon, milestone.lat]);
        if (!point) return;
        const pop = age < 1 ? 1 + 0.8 * Math.sin(age * Math.PI) : 1;
        context.beginPath();
        context.arc(point[0], point[1], radius * pop, 0, Math.PI * 2);
        context.fillStyle = cssVar(branchVar[milestone.branch]);
        context.globalAlpha = 0.35 + 0.65 * age;
        context.fill();
        context.globalAlpha = 1;
        context.strokeStyle = cssVar("--superficie");
        context.lineWidth = 1.5;
        context.stroke();
      });
      milestones.forEach((milestone, index) => {
        if (milestone.year > current.year) state.appeared.delete(String(index));
      });

      // Los lugares de esta parada: un pulso de luz y su nombre.
      context.font = "600 13px 'Lexend Variable', Lexend, sans-serif";
      current.places.forEach((name) => {
        const milestone = placeIndex.get(name);
        const point = milestone && project([milestone.lon, milestone.lat]);
        if (!point) return;
        const pulse = (now / 1400) % 1;
        context.beginPath();
        context.arc(point[0], point[1], radius + 4 + pulse * 22, 0, Math.PI * 2);
        context.strokeStyle = cssVar("--alba");
        context.globalAlpha = 1 - pulse;
        context.lineWidth = 2.5;
        context.stroke();
        context.globalAlpha = 1;
        const label = name;
        const textWidth = context.measureText(label).width;
        const fitsRight = point[0] + radius + 14 + textWidth < width;
        const x = fitsRight ? point[0] + radius + 8 : point[0] - radius - 8 - textWidth;
        const y = point[1] - radius - 8;
        context.fillStyle = cssVar("--granate");
        context.fillRect(x - 6, y - 14, textWidth + 12, 21);
        context.fillStyle = cssVar("--oro-claro");
        context.fillText(label, x, y + 1);
      });

      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  const branchesNow = [...new Set(milestones.filter((m) => m.year <= stop.year).map((m) => m.branch))];

  return (
    <section aria-label="Viaje guiado por el mapa" className="relative">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden />
        <div className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-6">
          <p className="font-display text-5xl font-extrabold tabular-nums tracking-tight text-lapis drop-shadow-[0_1px_0_var(--superficie)] sm:text-6xl">
            {stop.year >= 2025 ? "Hoy" : formatYear(stop.year)}
          </p>
          {stop.route && <p className="mt-1 text-sm font-bold text-tinta">{stop.route.label}</p>}
        </div>
        <ul className="pointer-events-none absolute right-3 top-4 hidden flex-col items-end gap-1 text-xs sm:flex">
          {branchesNow.map((branch) => (
            <li key={branch} className="flex items-center gap-1.5 bg-superficie/85 px-2 py-0.5">
              <span className="size-2.5 rounded-full" style={{ background: `var(${branchVar[branch]})` }} />
              {branchName[branch]}
            </li>
          ))}
        </ul>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-linea">
          <div className="h-full bg-alba transition-[width] duration-700" style={{ width: `${((active + 1) / journey.length) * 100}%` }} />
        </div>
      </div>

      <div className="relative -mt-[100svh]">
        {journey.map((item, index) => (
          <div
            key={item.id}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
            data-index={index}
            className="flex min-h-[100svh] items-end px-4 pb-10 sm:px-6 md:items-center md:pb-0"
          >
            <article
              className={`w-full max-w-md bg-niebla/95 p-6 shadow-[0_20px_50px_rgba(43,26,23,0.25)] backdrop-blur-sm transition-opacity duration-500 sm:p-7 md:ml-[max(0px,calc((100vw-72rem)/2))] ${
                index === active ? "opacity-100" : "opacity-40"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-piedra">
                {index + 1} / {journey.length} · {item.kicker}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">{item.title}</h2>
              <p className="mt-3 leading-relaxed">{item.text}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
