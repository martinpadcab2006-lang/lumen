import type { Metadata } from "next";
import { JourneyMap } from "@/components/journey-map";
import { MapExplorer } from "@/components/map-explorer";
import { buildMapGeometry } from "@/lib/map-geometry";

export const metadata: Metadata = {
  title: "Mapa de la expansión del cristianismo",
  description: "Un viaje guiado desde Jerusalén hasta todos los continentes: dos mil años de cristianismo en un mapa.",
};

export default function MapPage() {
  const geometry = buildMapGeometry();

  return (
    <>
      <section className="banda">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-alba">El mapa</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">De Jerusalén al mundo</h1>
          <p className="mt-4 max-w-[52ch] text-lg opacity-90">
            Catorce paradas para ver cómo el cristianismo salió de una ciudad y llegó a todos los continentes.
          </p>
          <p className="mt-8 animate-bounce font-bold text-oro-claro">Desliza para empezar el viaje ↓</p>
        </div>
      </section>

      <JourneyMap />

      <section aria-labelledby="explora-tu" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">Modo libre</p>
        <h2 id="explora-tu" className="mt-1 text-4xl font-bold tracking-tight">
          Explóralo tú
        </h2>
        <p className="mt-3 max-w-[60ch] text-piedra">
          Mueve el año, pulsa «Reproducir» o elige qué iglesias ver. Cada color es una de las grandes iglesias.
        </p>
        <div className="mt-10">
          <MapExplorer geometry={geometry} />
        </div>
        <p className="mt-10 max-w-[70ch] text-sm text-piedra">
          Cada punto marca un momento destacado, no el único. Antes de 1054, los hitos van en el color de los primeros
          siglos, que todas las iglesias consideran parte de su historia. Las fechas con «c.» son aproximadas o siguen la
          tradición.
        </p>
      </section>
    </>
  );
}
