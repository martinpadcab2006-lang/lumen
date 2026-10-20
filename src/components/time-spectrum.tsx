"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { religions } from "@/content/religions";
import { milestones } from "@/content/milestones";
import {
  TIMELINE_END,
  TIMELINE_START,
  formatMilestoneYear,
  formatYear,
  yearToRatio,
} from "@/lib/years";

const AXIS_TICKS = [-2000, -1500, -1000, -500, 1, 500, 1000, 1500, 2000] as const;
const SWEEP_DURATION_MS = 2600;
const BAND_HEIGHT_BY_WEIGHT = ["", "h-3", "h-4", "h-5", "h-6", "h-7"] as const;

const religionsByOrigin = [...religions].sort((a, b) => a.originYear - b.originYear);

const latestMilestoneUntil = (year: number) =>
  milestones
    .filter((milestone) => milestone.year <= year)
    .reduce<(typeof milestones)[number] | undefined>(
      (latest, milestone) => (!latest || milestone.year >= latest.year ? milestone : latest),
      undefined,
    );

const tickAlignment = (index: number): string => {
  if (index === 0) return "";
  if (index === AXIS_TICKS.length - 1) return "-translate-x-full";
  return "-translate-x-1/2";
};

const easeOutCubic = (t: number): number => 1 - (1 - t) ** 3;

const useOpeningSweep = (setYear: (year: number) => void) => {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

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

export const TimeSpectrum = () => {
  const [year, setYear] = useState<number>(TIMELINE_END);
  const stopSweep = useOpeningSweep(setYear);
  const cursorRatio = yearToRatio(year);

  const alive = religions.filter((religion) => religion.originYear <= year);
  const milestone = useMemo(() => latestMilestoneUntil(year), [year]);
  const milestoneReligion = religions.find((religion) => religion.slug === milestone?.religion);

  return (
    <div className="space-y-6">
      <div className="relative select-none">
        <div className="space-y-1 py-2">
          {religionsByOrigin.map((religion) => {
            const startRatio = yearToRatio(religion.originYear);
            const litShare = Math.max(0, Math.min(1, (cursorRatio - startRatio) / (1 - startRatio)));
            const labelAtEnd = startRatio > 0.7;

            return (
              <div key={religion.slug} className="relative h-12">
                <div
                  className={`absolute bottom-1 ${BAND_HEIGHT_BY_WEIGHT[religion.weight]} right-0 rounded-l-full`}
                  style={{ left: `${startRatio * 100}%` }}
                >
                  <div
                    className="absolute inset-0 rounded-l-full opacity-15"
                    style={{ background: religion.color }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 rounded-l-full"
                    style={{
                      width: `${litShare * 100}%`,
                      background: `linear-gradient(to right, color-mix(in oklab, ${religion.color} 20%, transparent), ${religion.color} 12%)`,
                    }}
                  />
                </div>
                <Link
                  href={`/religiones/${religion.slug}`}
                  className={`absolute top-0 z-10 whitespace-nowrap text-sm font-bold transition-opacity hover:underline ${
                    religion.originYear <= year ? "opacity-100" : "opacity-45"
                  }`}
                  style={labelAtEnd ? { right: 0 } : { left: `${startRatio * 100}%` }}
                >
                  {religion.name}
                </Link>
              </div>
            );
          })}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -inset-y-2 w-0.5 -translate-x-1/2 bg-alba shadow-[0_0_14px_3px_var(--alba)]"
          style={{ left: `${cursorRatio * 100}%` }}
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
        <p className="font-display text-4xl font-bold tabular-nums tracking-tight sm:text-5xl">
          {formatYear(year)}
        </p>
        <div className="max-w-2xl space-y-1">
          <p className="text-piedra">
            {alive.length === 0
              ? "Todavía no existe ninguna de las tradiciones de esta línea."
              : `${alive.length} de ${religions.length} tradiciones ya existen.`}
          </p>
          {milestone && milestoneReligion && (
            <p>
              <span className="font-bold" style={{ color: milestoneReligion.color }}>
                {milestone.place}, {formatMilestoneYear(milestone.year, milestone.approximate)}.
              </span>{" "}
              {milestone.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
