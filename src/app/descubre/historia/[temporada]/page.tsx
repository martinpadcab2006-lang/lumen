import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { commonsImageUrl } from "@/components/chapter/chapter-image";
import { SafeImg } from "@/components/chapter/safe-img";
import { isEpisodeWritten } from "@/content/episodes";
import { episodeCode, episodePath, findSeason, seasons } from "@/content/seasons";

export const generateStaticParams = () => seasons.map((season) => ({ temporada: season.slug }));

export const generateMetadata = async ({ params }: PageProps<"/descubre/historia/[temporada]">): Promise<Metadata> => {
  const season = findSeason((await params).temporada);
  if (!season) return {};
  return { title: `Temporada ${season.number}: ${season.title}`, description: season.intro };
};

export default async function SeasonPage({ params }: PageProps<"/descubre/historia/[temporada]">) {
  const season = findSeason((await params).temporada);
  if (!season) notFound();
  const previous = seasons.find((item) => item.number === season.number - 1);
  const following = seasons.find((item) => item.number === season.number + 1);

  return (
    <>
      <header className="banda relative overflow-hidden">
        <figure className="absolute inset-0">
          <SafeImg src={commonsImageUrl(season.cover, 1600)} alt="" className="size-full object-cover opacity-45" />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-granate via-granate/80 to-granate/40" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16">
          <Link href="/descubre/historia" className="text-sm opacity-80 hover:underline hover:opacity-100">
            ← Todas las temporadas
          </Link>
          <p className="mt-16 flex items-baseline gap-4 sm:mt-24">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-alba">Temporada</span>
            <span className="font-display text-7xl font-extrabold leading-none text-oro-claro sm:text-8xl">{season.number}</span>
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">{season.title}</h1>
          <p className="mt-2 font-bold text-alba">{season.period}</p>
          <p className="mt-5 max-w-[60ch] text-xl leading-relaxed opacity-90">{season.intro}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ol className="mt-10 divide-y divide-linea border-y border-linea">
          {season.episodes.map((episode) => {
            const written = isEpisodeWritten(season.slug, episode.slug);
            const body = (
              <>
                <span className="font-display text-2xl font-bold tabular-nums text-oro">{episodeCode(season, episode.slug)}</span>
                <span>
                  <span className={`block font-display text-xl font-semibold ${written ? "group-hover:underline" : ""}`}>{episode.title}</span>
                  <span className="block text-piedra">{episode.teaser}</span>
                </span>
                <span className={`text-sm font-bold sm:text-right ${written ? "text-lapis" : "text-piedra"}`}>
                  {written ? "Ver ahora →" : "Próximamente"}
                </span>
              </>
            );
            const rowClass = "grid gap-1 py-5 sm:grid-cols-[4rem_1fr_8rem] sm:items-baseline sm:gap-6";
            return (
              <li key={episode.slug}>
                {written ? (
                  <Link href={episodePath(season.slug, episode.slug)} className={`group ${rowClass}`}>
                    {body}
                  </Link>
                ) : (
                  <div className={`${rowClass} opacity-75`}>{body}</div>
                )}
              </li>
            );
          })}
        </ol>

        <nav aria-label="Otras temporadas" className="mt-12 flex flex-wrap justify-between gap-4 font-bold text-lapis">
          {previous ? (
            <Link href={`/descubre/historia/${previous.slug}`} className="hover:underline">
              ← Temporada {previous.number}: {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {following && (
            <Link href={`/descubre/historia/${following.slug}`} className="hover:underline">
              Temporada {following.number}: {following.title} →
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
