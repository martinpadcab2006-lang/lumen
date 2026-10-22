"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { branchColor, branchName, type BranchSlug } from "@/content/churches";
import type { MapGeometry } from "@/lib/map-geometry";
import { TIMELINE_END, TIMELINE_START, formatMilestoneYear, formatYear } from "@/lib/years";

const PLAY_YEARS_PER_SECOND = 160;

const branches = Object.keys(branchName) as BranchSlug[];

const usePlayback = (year: number, setYear: (update: (current: number) => number) => void) => {
  const [wantsToPlay, setWantsToPlay] = useState(false);
  const playing = wantsToPlay && year < TIMELINE_END;
  const lastFrame = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = lastFrame.current === null ? 0 : (now - lastFrame.current) / 1000;
      lastFrame.current = now;
      setYear((current) => Math.min(TIMELINE_END, current + elapsed * PLAY_YEARS_PER_SECOND));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      lastFrame.current = null;
    };
  }, [playing, setYear]);

  const toggle = () => {
    if (playing) {
      setWantsToPlay(false);
      return;
    }
    if (year >= TIMELINE_END) setYear(() => TIMELINE_START);
    setWantsToPlay(true);
  };

  return { playing, toggle, stop: () => setWantsToPlay(false) };
};

type MapExplorerProps = { geometry: MapGeometry };

export const MapExplorer = ({ geometry }: MapExplorerProps) => {
  const [rawYear, setRawYear] = useState<number>(325);
  const year = Math.round(rawYear);
  const [hidden, setHidden] = useState<ReadonlySet<BranchSlug>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { playing, toggle, stop } = usePlayback(year, setRawYear);

  const visible = useMemo(
    () =>
      geometry.milestones
        .filter((milestone) => milestone.year <= year && !hidden.has(milestone.branch))
        .sort((a, b) => a.year - b.year),
    [geometry.milestones, year, hidden],
  );

  const newest = visible.at(-1);
  const selected = visible.find((milestone) => milestone.id === selectedId) ?? newest;

  const toggleBranch = (slug: BranchSlug) =>
    setHidden((current) => {
      const next = new Set(current);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      <div className="min-w-0 space-y-5">
        <div className="overflow-hidden rounded-sm bg-superficie ring-1 ring-linea">
          <svg
            viewBox={`0 0 ${geometry.width} ${geometry.height}`}
            className="block h-auto w-full"
            role="img"
            aria-label={`Mapa del mundo en el año ${formatYear(year)} con ${visible.length} hitos visibles`}
          >
            <path d={geometry.land} className="fill-tierra" />
            <path d={geometry.borders} className="fill-none stroke-superficie" strokeWidth={0.7} />
            {visible.map((milestone) => {
              const isSelected = milestone.id === selected?.id;
              const age = year - milestone.year;
              const glow = age < 120 ? 20 : 11;
              return (
                <g
                  key={milestone.id}
                  transform={`translate(${milestone.x} ${milestone.y})`}
                  className="cursor-pointer"
                  onClick={() => setSelectedId(milestone.id)}
                >
                  <circle r={glow} fill={branchColor[milestone.branch]} opacity={0.22} />
                  <circle
                    r={isSelected ? 9 : 6.5}
                    fill={branchColor[milestone.branch]}
                    stroke="var(--superficie)"
                    strokeWidth={1.5}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={toggle}
            className="rounded-sm bg-tinta px-5 py-2.5 font-bold text-niebla transition-transform active:scale-[0.97]"
          >
            {playing ? "Pausar" : year >= TIMELINE_END ? "Volver a empezar" : "Reproducir"}
          </button>
          <p className="font-display text-3xl font-bold tabular-nums tracking-tight" aria-live="polite">
            {formatYear(year)}
          </p>
        </div>

        <div>
          <label htmlFor="map-year" className="sr-only">
            Año
          </label>
          <input
            id="map-year"
            type="range"
            min={TIMELINE_START}
            max={TIMELINE_END}
            value={year}
            aria-valuetext={formatYear(year)}
            onChange={(event) => {
              stop();
              setRawYear(Number(event.target.value));
            }}
            className="w-full accent-alba"
          />
          <div aria-hidden className="mt-1 flex justify-between text-xs text-piedra">
            <span>{formatYear(TIMELINE_START)}</span>
            <span>{formatYear(TIMELINE_END)}</span>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 font-bold">Iglesias en el mapa</legend>
          <div className="flex flex-wrap gap-2">
            {branches.map((branch) => {
              const shown = !hidden.has(branch);
              return (
                <button
                  key={branch}
                  type="button"
                  aria-pressed={shown}
                  onClick={() => toggleBranch(branch)}
                  className={`inline-flex items-center gap-2 rounded-sm border px-3.5 py-1.5 text-sm transition-colors ${
                    shown ? "border-tinta" : "border-linea text-piedra line-through"
                  }`}
                >
                  <span aria-hidden className="size-2.5 rounded-full" style={{ background: branchColor[branch] }} />
                  {branchName[branch]}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <aside className="space-y-6">
        {selected ? (
          <div className="rounded-sm bg-superficie p-6 ring-1 ring-linea">
            <p className="font-bold" style={{ color: branchColor[selected.branch] }}>
              {branchName[selected.branch]}
            </p>
            <h2 className="mt-1 text-2xl font-bold">{selected.place}</h2>
            <p className="tabular-nums text-piedra">{formatMilestoneYear(selected.year, selected.approximate)}</p>
            <p className="mt-3">{selected.text}</p>
          </div>
        ) : (
          <p className="rounded-sm bg-superficie p-6 text-piedra ring-1 ring-linea">
            Todavía no hay ningún hito en esta fecha. Pulsa «Reproducir» o mueve el control del año.
          </p>
        )}

        <div>
          <h2 className="font-bold">Hasta {formatYear(year)}</h2>
          <ol className="mt-3 max-h-80 space-y-1 overflow-y-auto pr-1">
            {[...visible].reverse().map((milestone) => (
              <li key={milestone.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(milestone.id)}
                  className={`flex w-full items-baseline gap-3 rounded-lg px-2 py-1.5 text-left hover:bg-niebla-honda ${
                    milestone.id === selected?.id ? "bg-niebla-honda" : ""
                  }`}
                >
                  <span aria-hidden className="size-2 shrink-0 rounded-full" style={{ background: branchColor[milestone.branch] }} />
                  <span className="w-20 shrink-0 text-sm tabular-nums text-piedra">
                    {formatMilestoneYear(milestone.year, milestone.approximate)}
                  </span>
                  <span className="text-sm">{milestone.place}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </div>
  );
};
