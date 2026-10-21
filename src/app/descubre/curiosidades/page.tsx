import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PillBrowser } from "@/components/pill-browser";
import { pills } from "@/content/pills";

export const metadata: Metadata = {
  title: "Curiosidades",
  description: "Historias de un minuto sobre el cristianismo: fiestas, símbolos, historia y costumbres. Para leer y compartir.",
};

export default function CuriositiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/descubre", label: "Descubre" }}
        title="Curiosidades"
        lead="Por qué la Navidad es el 25 de diciembre, qué significa INRI o de dónde viene Halloween. Historias de un minuto para leer y compartir."
      />
      <div className="mt-12">
        <PillBrowser pills={pills} />
      </div>
    </div>
  );
}
