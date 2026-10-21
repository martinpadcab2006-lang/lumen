import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SeriesList } from "@/components/series-list";

export const metadata: Metadata = {
  title: "La historia del cristianismo",
  description: "Dos mil años de historia del cristianismo contados como una serie, en doce capítulos.",
};

export default function HistorySeriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/descubre", label: "Descubre" }}
        title="La historia del cristianismo"
        lead="Dos mil años contados como una serie: doce capítulos de entre 5 y 10 minutos, con mapas, imágenes, vídeos y podcasts. Empieza por el primero."
      />
      <div className="mt-12">
        <SeriesList audience="descubre" />
      </div>
    </div>
  );
}
