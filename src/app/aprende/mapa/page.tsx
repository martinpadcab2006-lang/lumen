import type { Metadata } from "next";
import { MapExplorer } from "@/components/map-explorer";
import { PageIntro } from "@/components/page-intro";
import { buildMapGeometry } from "@/lib/map-geometry";

export const metadata: Metadata = {
  title: "Mapa con línea del tiempo",
  description: "Mira cómo se extienden las grandes religiones por el mundo a lo largo de cuatro mil años.",
};

export default function MapPage() {
  const geometry = buildMapGeometry();

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/aprende", label: "Aprende" }}
        title="Mapa con línea del tiempo"
        lead="Pulsa «Reproducir» y mira cómo cada tradición sale de su lugar de origen y viaja por el mundo. Las líneas discontinuas unen los hitos de una misma religión por orden de fecha."
      />
      <div className="mt-10">
        <MapExplorer geometry={geometry} />
      </div>
      <p className="mt-10 max-w-[70ch] text-sm text-piedra">
        Cada punto marca un momento destacado, no el único. Las fechas con «c.» son aproximadas y algunas
        siguen la cronología tradicional de cada fe. El mapa usa las fronteras actuales como referencia.
      </p>
    </div>
  );
}
