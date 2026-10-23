import type { Metadata } from "next";
import Link from "next/link";
import { SeasonCard } from "@/components/season-card";
import { seasons, totalEpisodes } from "@/content/seasons";

export const metadata: Metadata = {
  title: "La historia del cristianismo",
  description: `Dos mil años de historia del cristianismo contados como una serie: ${seasons.length} temporadas y ${totalEpisodes} episodios.`,
};

export default function HistorySeriesPage() {
  const first = seasons[0];
  return (
    <>
      <section className="banda">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 sm:pt-10">
          <Link href="/descubre" className="text-sm opacity-80 hover:underline hover:opacity-100">
            ← Descubre
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-alba">La serie</p>
          <h1 className="mt-3 max-w-[16ch] text-5xl font-extrabold tracking-tight sm:text-7xl">La historia del cristianismo</h1>
          <p className="mt-4 max-w-[56ch] text-lg opacity-90">
            Dos mil años contados como una serie: {seasons.length} temporadas y {totalEpisodes} episodios de unos cinco minutos,
            con mapas, arte y curiosidades. Empieza por el principio o salta a la época que te interese.
          </p>
          <Link
            href={`/descubre/historia/${first.slug}/${first.episodes[0].slug}`}
            className="mt-8 inline-block rounded-sm bg-alba px-6 py-3 font-bold text-[#2b1a17] transition-transform active:scale-[0.97]"
          >
            Empezar por el episodio 1.01
          </Link>
        </div>
      </section>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:gap-5 sm:px-6 lg:grid-cols-4">
        {seasons.map((season) => (
          <SeasonCard key={season.slug} season={season} />
        ))}
      </div>
    </>
  );
}
