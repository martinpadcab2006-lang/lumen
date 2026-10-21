import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { levels } from "@/content/levels";

export const metadata: Metadata = {
  title: "Colegios",
  description: "Unidades sobre el cristianismo para Primaria, ESO y Bachillerato, contadas desde la fe cristiana.",
};

export default function SchoolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Colegios"
        lead="Unidades para clase de Religión, contadas desde la fe cristiana: lo que comparten las distintas iglesias, y cuando lo viven de otra manera, lo explicamos. Elige tu etapa."
      />

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {levels.map((level) => (
          <li key={level.slug}>
            <Link
              href={`/colegios/${level.slug}`}
              className="group flex h-full flex-col rounded-3xl border-2 border-tinta p-7 transition-colors hover:bg-superficie sm:p-8"
            >
              <span className="text-sm text-piedra">{level.ages}</span>
              <span className="mt-1 font-display text-4xl font-bold tracking-tight group-hover:underline">{level.name}</span>
              <span className="mt-3 flex-1 text-piedra">{level.intro}</span>
              <span className="mt-6 font-bold">{level.units.length} unidades</span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-16 max-w-3xl rounded-3xl bg-lapis-suave p-7 sm:p-9" aria-labelledby="profesorado">
        <h2 id="profesorado" className="text-2xl font-bold">
          Para el profesorado
        </h2>
        <p className="mt-3">
          Cada unidad tendrá explicación para el alumnado, actividades, una ficha imprimible y un quiz. Mientras las
          preparamos, ya puedes usar en clase el mapa, el comparador de iglesias y el quiz.
        </p>
      </section>
    </div>
  );
}
