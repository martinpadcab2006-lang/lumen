"use client";

import { useEffect, useRef, useState } from "react";
import type { ChapterImage as ChapterImageData, Place, Section, Stop } from "@/content/chapter-types";
import type { HolyLandMap } from "@/lib/holy-land-map";
import { ChapterImage } from "./chapter-image";
import { HolyLandMapView } from "./holy-land-map-view";

type ChapterReaderProps = {
  sections: readonly Section[];
  stops: readonly Stop[];
  places: Readonly<Record<string, Place>>;
  images: Readonly<Record<string, ChapterImageData>>;
  map: HolyLandMap;
};

/** Marca como activa la sección que cruza la mitad superior de la pantalla. */
const useActiveSection = (count: number) => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        const first = visible.at(0);
        if (!first) return;
        const index = Number(first.target.getAttribute("data-index"));
        if (Number.isInteger(index)) setActive(index);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    refs.current.slice(0, count).forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, [count]);

  return { active, refs };
};

export const ChapterReader = ({ sections, stops, places, images, map }: ChapterReaderProps) => {
  const { active, refs } = useActiveSection(sections.length);
  const stop = stops.find((candidate) => candidate.id === sections.at(active)?.stop);
  const place = stop ? places[stop.place] : undefined;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <div>
        <div className="sticky top-0 z-20 -mx-4 mb-6 border-b border-linea bg-niebla/95 px-4 py-3 backdrop-blur lg:hidden">
          <p className="font-display text-xl font-bold tabular-nums" aria-live="polite">
            {stop?.year}
            {place && <span className="ml-3 text-base font-normal text-piedra">{place.name}</span>}
          </p>
        </div>

        {sections.map((section, index) => {
          const image = section.image ? images[section.image] : undefined;
          return (
            <section
              key={section.heading}
              ref={(element) => {
                refs.current[index] = element;
              }}
              data-index={index}
              className="scroll-mt-24 border-t border-linea py-10 first:border-t-0 first:pt-0"
            >
              <h2 className="text-3xl font-bold tracking-tight">{section.heading}</h2>
              <div className="mt-5 max-w-[68ch] space-y-4 text-lg leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.aside && (
                <aside className="mt-6 max-w-[60ch] rounded-2xl border-l-4 border-alba bg-superficie px-5 py-4">
                  <p className="font-bold">{section.aside.label}</p>
                  <p className="mt-1">{section.aside.text}</p>
                </aside>
              )}
              {image && <ChapterImage image={image} />}
            </section>
          );
        })}
      </div>

      <aside className="hidden lg:block" aria-label="Dónde y cuándo">
        <div className="sticky top-6 space-y-4">
          <div aria-live="polite">
            <p className="font-display text-4xl font-bold tabular-nums tracking-tight">{stop?.year}</p>
            <p className="text-piedra">{place?.name}</p>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-linea">
            <HolyLandMapView map={map} activePlace={stop?.place ?? null} />
          </div>
        </div>
      </aside>
    </div>
  );
};
