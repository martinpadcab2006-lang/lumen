import type { Metadata } from "next";
import Link from "next/link";
import { EpisodeRail } from "@/components/episode-rail";
import { PillCard } from "@/components/pill-card";
import { seasons, totalEpisodes } from "@/content/seasons";
import { pills } from "@/content/pills";

export const metadata: Metadata = {
  title: "Descubre",
  description: "La historia del cristianismo contada como una serie, curiosidades para compartir y un quiz rápido.",
};

export default function DiscoverPage() {
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
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/descubre/historia/los-origenes"
              className="rounded-sm bg-alba px-6 py-3 font-bold text-[#2b1a17] transition-transform active:scale-[0.97]"
            >
              Empezar la serie
            </Link>
            <Link href="/descubre/historia" className="rounded-sm border border-current px-6 py-3 font-bold transition-transform active:scale-[0.97]">
              Ver las {seasons.length} temporadas
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section aria-labelledby="la-serie" className="pt-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">La serie</p>
          <h2 id="la-serie" className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
            {seasons.length} temporadas, {totalEpisodes} episodios
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

        <section aria-labelledby="mas" className="pt-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">Y además</p>
          <h2 id="mas" className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
            Más para descubrir
          </h2>
          <ul className="mt-8 grid gap-px bg-linea sm:grid-cols-3">
            {[
              { href: "/descubre/papas", title: "Los papas", text: "Los 267, de san Pedro a León XIV, y qué hizo cada uno." },
              { href: "/arte", title: "El arte cristiano", text: "De las catacumbas al Barroco: estilos, obras y lugares." },
              { href: "/comparador", title: "Las iglesias, frente a frente", text: "Católicos, ortodoxos, protestantes…: en qué se parecen y en qué no." },
            ].map((item) => (
              <li key={item.href} className="bg-niebla">
                <Link href={item.href} className="group block px-5 py-7">
                  <span className="font-display text-2xl font-bold text-oro group-hover:underline">{item.title} →</span>
                  <span className="mt-2 block text-piedra">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
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
