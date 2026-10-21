"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { branchColor, type BranchSlug } from "@/content/churches";
import { milestones } from "@/content/milestones";
import { TIMELINE_END, TIMELINE_START, formatMilestoneYear, formatYear, yearToRatio } from "@/lib/years";

type Band = { branch: BranchSlug; label: string; start: number; end?: number; href?: string; height: string };

const GREAT_SCHISM = 1054;

const bands: readonly Band[] = [
  { branch: "primer-milenio", label: "Primeros siglos", start: 30, end: GREAT_SCHISM, height: "h-6" },
  { branch: "orientales", label: "Ortodoxas orientales", start: 451, href: "/iglesias/orientales", height: "h-3" },
  { branch: "catolica", label: "Católica", start: GREAT_SCHISM, href: "/iglesias/catolica", height: "h-7" },
  { branch: "ortodoxa", label: "Ortodoxa", start: GREAT_SCHISM, href: "/iglesias/ortodoxa", height: "h-4" },
  { branch: "protestante", label: "Protestantes", start: 1517, href: "/iglesias/protestante", height: "h-6" },
  { branch: "anglicana", label: "Anglicana", start: 1534, href: "/iglesias/anglicana", height: "h-3" },
];

const AXIS_TICKS = [1, 250, 500, 750, 1000, 1250, 1500, 1750, 2025] as const;
const SWEEP_DURATION_MS = 2600;

const tickAlignment = (index: number): string => {
  if (index === 0) return "";
  if (index === AXIS_TICKS.length - 1) return "-translate-x-full";
  return "-translate-x-1/2";
};

const latestMilestoneUntil = (year: number) =>
  milestones
    .filter((milestone) => milestone.year <= year)
    .reduce<(typeof milestones)[number] | undefined>(
      (latest, milestone) => (!latest || milestone.year >= latest.year ? milestone : latest),
      undefined,
    );

const easeOutCubic = (t: number): number => 1 - (1 - t) ** 3;

const useOpeningSweep = (setYear: (year: number) => void) => {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / SWEEP_DURATION_MS);
      setYear(Math.round(TIMELINE_START + easeOutCubic(progress) * (TIMELINE_END - TIMELINE_START)));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [setYear]);

  return () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  };
};

const BandRow = ({ band, year }: { band: Band; year: number }) => {
  const startRatio = yearToRatio(band.start);
  const endRatio = band.end ? yearToRatio(band.end) : 1;
  const litEnd = Math.min(yearToRatio(year), endRatio);
  const litShare = Math.max(0, Math.min(1, (litEnd - startRatio) / (endRatio - startRatio)));
  const exists = band.start <= year;
  const labelAtEnd = startRatio > 0.7;
  const color = branchColor[band.branch];
  const labelClass = `absolute top-0 z-10 whitespace-nowrap text-sm font-bold transition-opacity ${exists ? "opacity-100" : "opacity-45"}`;
  const labelStyle = labelAtEnd ? { right: 0 } : { left: `${startRatio * 100}%` };

  return (
    <div className="relative h-12">
      <div
        className={`absolute bottom-1 ${band.height} ${band.end ? "rounded-full" : "rounded-l-full"}`}
        style={{ left: `${startRatio * 100}%`, right: `${(1 - endRatio) * 100}%` }}
      >
        <div className="absolute inset-0 rounded-[inherit] opacity-15" style={{ background: color }} />
        <div
          className="absolute inset-y-0 left-0 rounded-[inherit]"
          style={{
            width: `${litShare * 100}%`,
            background: `linear-gradient(to right, color-mix(in oklab, ${color} 25%, transparent), ${color} 12%)`,
          }}
        />
      </div>
      {band.href ? (
        <Link href={band.href} className={`${labelClass} hover:underline`} style={labelStyle}>
          {band.label}
        </Link>
      ) : (
        <span className={labelClass} style={labelStyle}>
          {band.label}
        </span>
      )}
    </div>
  );
};

export const TimeSpectrum = () => {
  const [year, setYear] = useState<number>(TIMELINE_END);
  const stopSweep = useOpeningSweep(setYear);
  const milestone = useMemo(() => latestMilestoneUntil(year), [year]);

  return (
    <div className="space-y-6">
      <div className="relative select-none">
        <div className="space-y-1 py-2">
          {bands.map((band) => (
            <BandRow key={band.branch} band={band} year={year} />
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -inset-y-2 w-0.5 -translate-x-1/2 bg-alba shadow-[0_0_14px_3px_var(--alba)]"
          style={{ left: `${yearToRatio(year) * 100}%` }}
        />

        <div aria-hidden className="relative mt-3 h-6 border-t border-linea text-xs text-piedra">
          {AXIS_TICKS.map((tick, index) => (
            <span
              key={tick}
              className={`absolute top-1.5 whitespace-nowrap ${tickAlignment(index)} ${index % 2 === 1 ? "hidden sm:inline" : ""}`}
              style={{ left: `${yearToRatio(tick) * 100}%` }}
            >
              {formatYear(tick)}
            </span>
          ))}
        </div>

        <label className="sr-only" htmlFor="spectrum-year">
          Año de la línea del tiempo
        </label>
        <input
          id="spectrum-year"
          type="range"
          min={TIMELINE_START}
          max={TIMELINE_END}
          step={1}
          value={year}
          aria-valuetext={formatYear(year)}
          onPointerDown={stopSweep}
          onKeyDown={stopSweep}
          onChange={(event) => setYear(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-baseline" aria-live="polite">
        <p className="font-display text-4xl font-bold tabular-nums tracking-tight sm:text-5xl">{formatYear(year)}</p>
        <p className="max-w-2xl">
          {milestone ? (
            <>
              <span className="font-bold" style={{ color: branchColor[milestone.branch] }}>
                {milestone.place}, {formatMilestoneYear(milestone.year, milestone.approximate)}.
              </span>{" "}
              {milestone.text}
            </>
          ) : (
            <span className="text-piedra">Jesús todavía no ha empezado a predicar.</span>
          )}
        </p>
      </div>
    </div>
  );
};
