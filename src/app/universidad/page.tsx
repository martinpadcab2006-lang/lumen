import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SeriesList } from "@/components/series-list";
import { UnitList } from "@/components/unit-list";
import { universityUnits } from "@/content/levels";

export const metadata: Metadata = {
  title: "Universidad",
  description: "Historia y cultura del cristianismo para estudiar a fondo: fuentes, concilios, cismas, arte y la historia de España.",
};

const tools: readonly { href: string; title: string; detail: string }[] = [
  { href: "/comparador", title: "Comparador de iglesias", detail: "Cinco grandes familias cristianas, punto por punto." },
  { href: "/mapa", title: "Mapa de la expansión", detail: "Los grandes hitos, de Jerusalén al Concilio Vaticano II." },
  { href: "/#linea-del-tiempo", title: "Línea del tiempo", detail: "Cuándo y cómo se separan las iglesias." },
];

export default function UniversityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Universidad"
        lead="El cristianismo estudiado desde la historia y la cultura: fuentes, debates de los historiadores y bibliografía para tus trabajos."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-14">
          <section aria-labelledby="historia">
            <h2 id="historia" className="text-2xl font-bold">
              Historia del cristianismo
            </h2>
            <div className="mt-5">
              <SeriesList audience="universidad" />
            </div>
          </section>
          <section aria-labelledby="temas">
            <h2 id="temas" className="text-2xl font-bold">
              Temas monográficos
            </h2>
            <div className="mt-5">
              <UnitList units={universityUnits} />
            </div>
          </section>
        </div>

        <aside aria-labelledby="ya-disponible">
          <h2 id="ya-disponible" className="text-2xl font-bold">
            Ya disponible
          </h2>
          <ul className="mt-5 space-y-5">
            {tools.map((tool) => (
              <li key={tool.title}>
                <Link href={tool.href} className="font-display text-xl font-semibold hover:underline">
                  {tool.title}
                </Link>
                <p className="text-piedra">{tool.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
