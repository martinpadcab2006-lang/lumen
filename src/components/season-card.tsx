import Link from "next/link";
import { countWritten } from "@/content/episodes";
import type { Season } from "@/content/seasons";
import { commonsImageUrl } from "./chapter/chapter-image";
import { SafeImg } from "./chapter/safe-img";

/** Una temporada de la serie, como la portada de un DVD. */
export const SeasonCard = ({ season }: { season: Season }) => {
  const written = countWritten(season.slug);
  return (
    <Link href={`/descubre/historia/${season.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-granate">
        <figure className="absolute inset-0">
          <SafeImg
            src={commonsImageUrl(season.cover, 700)}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-granate via-granate/50 to-granate/10" />
        <p className="absolute left-4 top-3 text-xs font-bold uppercase tracking-[0.2em] text-papel-claro">
          Temporada <span className="block font-display text-5xl font-extrabold leading-none tracking-tight text-oro-claro sm:text-6xl">{season.number}</span>
        </p>
        <div className="absolute inset-x-3 bottom-3 text-papel-claro sm:inset-x-4 sm:bottom-4">
          <p className="hidden text-sm opacity-80 sm:block">
            {season.period} · {season.episodes.length} episodios
          </p>
          <p className="mt-1 font-display text-lg font-bold leading-tight text-oro-claro group-hover:underline sm:text-2xl">{season.title}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-alba">
            {written === 0 ? "Próximamente" : `${written} ${written === 1 ? "episodio disponible" : "episodios disponibles"}`}
          </p>
        </div>
      </div>
    </Link>
  );
};
