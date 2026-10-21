import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { levels } from "@/content/levels";

export const metadata: Metadata = {
  title: "Colegios",
  description: "El cristianismo para Primaria, ESO y Bachillerato, contado desde la fe católica.",
};

export default function SchoolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Colegios"
        lead="Para la clase de Religión: la historia del cristianismo y sus grandes temas, contados desde la fe católica y adaptados a cada etapa. Elige la tuya."
      />

      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {levels.map((level) => (
          <li key={level.slug}>
            <Link
              href={`/colegios/${level.slug}`}
              className="group flex h-full flex-col rounded-3xl border-2 border-tinta p-7 transition-colors hover:bg-superficie sm:p-8"
            >
              <span className="text-sm text-piedra">{level.ages}</span>
              <span className="mt-1 font-display text-4xl font-bold tracking-tight group-hover:underline">{level.name}</span>
              <span className="mt-3 flex-1 text-piedra">{level.intro}</span>
              <span className="mt-6 font-bold">Historia del cristianismo y {level.units.length} temas</span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-16 max-w-3xl rounded-3xl bg-lapis-suave p-7 sm:p-9" aria-labelledby="profesorado">
        <h2 id="profesorado" className="text-2xl font-bold">
          Para el profesorado
        </h2>
        <p className="mt-3">
          Cada capítulo trae explicación adaptada a la etapa, imágenes, vídeos, actividades y un quiz. Además, cada
          capítulo tiene una guía para el profesor (objetivos, una sesión de 50 minutos paso a paso, dinámicas,
          soluciones y rúbrica), que solo se abre con la contraseña del profesorado.
        </p>
        <p className="mt-5">
          <Link href="/profesores" className="font-bold underline hover:text-lapis">
            Entrar en la Zona Profesores
          </Link>
        </p>
      </section>
    </div>
  );
}
