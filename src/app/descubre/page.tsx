import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PillCard } from "@/components/pill-card";
import { chapterPath } from "@/content/chapter-types";
import { chapters, series } from "@/content/history";
import { pills } from "@/content/pills";

export const metadata: Metadata = {
  title: "Descubre",
  description: "La historia del cristianismo contada como una serie, curiosidades para compartir y un quiz rápido.",
};

export default function DiscoverPage() {
  const firstChapter = chapters.at(0);
  const firstVersion = firstChapter?.versions.descubre;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Descubre"
        lead="Dos mil años de cristianismo contados de forma amena, desde la historia y la cultura. Sin necesidad de saber nada antes."
      />

      {firstChapter && firstVersion && (
        <section aria-labelledby="la-serie" className="mt-12 grid gap-8 rounded-3xl bg-tinta p-7 text-niebla sm:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 id="la-serie" className="font-bold opacity-70">
              La historia, como una serie
            </h2>
            <p className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Capítulo {firstChapter.number}: {firstVersion.title}
            </p>
            <p className="mt-4 text-lg opacity-85">{firstVersion.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={chapterPath("descubre", firstChapter.slug)}
                className="rounded-full bg-alba px-6 py-3 font-bold text-[#17203a] transition-transform active:scale-[0.97]"
              >
                Empezar el capítulo {firstChapter.number}
              </Link>
              <Link
                href="/descubre/historia"
                className="rounded-full border-2 border-current px-6 py-2.5 font-bold transition-transform active:scale-[0.97]"
              >
                Ver los {series.length} capítulos
              </Link>
            </div>
          </div>
          <ul className="space-y-2 self-end text-lg">
            {series.slice(0, 6).map((chapter) => (
              <li key={chapter.slug} className="flex gap-4">
                <span className="w-6 font-display font-bold tabular-nums opacity-60">{chapter.number}</span>
                <span className={chapter.number === firstChapter.number ? "font-bold" : "opacity-80"}>{chapter.title}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="curiosidades" className="mt-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="curiosidades" className="text-3xl font-bold tracking-tight">
            Curiosidades de un minuto
          </h2>
          <Link href="/descubre/curiosidades" className="font-bold hover:underline">
            Ver las {pills.length} curiosidades
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pills.slice(0, 6).map((pill) => (
            <PillCard key={pill.slug} pill={pill} />
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 rounded-3xl bg-lapis-suave p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">¿Cuánto sabes del cristianismo?</h2>
          <p className="mt-2 max-w-[52ch]">Cinco preguntas rápidas. Al final puedes retar a tus amigos a superarte.</p>
        </div>
        <Link
          href="/descubre/quiz"
          className="self-start rounded-full bg-tinta px-6 py-3 font-bold text-niebla transition-transform active:scale-[0.97] md:self-auto"
        >
          Hacer el quiz
        </Link>
      </section>
    </div>
  );
}
