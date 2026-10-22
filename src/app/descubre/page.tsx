import type { Metadata } from "next";
import Link from "next/link";
import { EpisodeRail } from "@/components/episode-rail";
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

  return (
    <>
      <section className="banda">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-alba">Para todos</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">Descubre</h1>
          <p className="mt-4 max-w-[52ch] text-lg opacity-90">
            Dos mil años de cristianismo contados de forma amena, desde la historia y la cultura. Sin necesidad de saber nada
            antes.
          </p>
          {firstChapter && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={chapterPath("descubre", firstChapter.slug)}
                className="rounded-sm bg-alba px-6 py-3 font-bold text-[#2b1a17] transition-transform active:scale-[0.97]"
              >
                Empezar el capítulo {firstChapter.number}
              </Link>
              <Link href="/descubre/historia" className="rounded-sm border border-current px-6 py-3 font-bold transition-transform active:scale-[0.97]">
                Ver los {series.length} capítulos
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section aria-labelledby="la-serie" className="pt-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">La serie</p>
          <h2 id="la-serie" className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
            La historia, capítulo a capítulo
          </h2>
          <div className="mt-8">
            <EpisodeRail />
          </div>
        </section>

        <section aria-labelledby="curiosidades" className="pt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">En un minuto</p>
              <h2 id="curiosidades" className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
                Curiosidades
              </h2>
            </div>
            <Link href="/descubre/curiosidades" className="font-bold text-lapis hover:underline">
              Las {pills.length} curiosidades →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {pills.slice(0, 8).map((pill) => (
              <PillCard key={pill.slug} pill={pill} />
            ))}
          </div>
        </section>

        <section className="banda mt-20 grid gap-6 px-6 py-10 sm:px-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Cuánto sabes del cristianismo?</h2>
            <p className="mt-2 max-w-[52ch] opacity-90">Cinco preguntas rápidas. Al final puedes retar a tus amigos a superarte.</p>
          </div>
          <Link
            href="/descubre/quiz"
            className="self-start rounded-sm bg-alba px-6 py-3 font-bold text-[#2b1a17] transition-transform active:scale-[0.97] md:self-auto"
          >
            Hacer el quiz
          </Link>
        </section>
      </div>
    </>
  );
}
