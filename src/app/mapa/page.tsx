import type { Metadata } from "next";
import { MapExplorer } from "@/components/map-explorer";
import { PageIntro } from "@/components/page-intro";
import { buildMapGeometry } from "@/lib/map-geometry";

export const metadata: Metadata = {
  title: "Mapa de la expansión del cristianismo",
  description: "Mira cómo se extiende el cristianismo desde Jerusalén a todo el mundo a lo largo de dos mil años.",
};

export default function MapPage() {
  const geometry = buildMapGeometry();

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="De Jerusalén al mundo"
        lead="Pulsa «Reproducir» y mira cómo el cristianismo sale de Jerusalén y llega a todos los continentes. Cada color es una de las grandes iglesias."
      />
      <div className="mt-10">
        <MapExplorer geometry={geometry} />
      </div>
      <p className="mt-10 max-w-[70ch] text-sm text-piedra">
        Cada punto marca un momento destacado, no el único. Antes de 1054, los hitos van en el color de los primeros
        siglos, que todas las iglesias consideran parte de su historia. Las fechas con «c.» son aproximadas o siguen la
        tradición.
      </p>
    </div>
  );
}
