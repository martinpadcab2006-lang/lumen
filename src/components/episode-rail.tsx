import Link from "next/link";
import { chapterPath } from "@/content/chapter-types";
import { isWritten, series } from "@/content/history";
import { commonsImageUrl } from "./chapter/chapter-image";
import { SafeImg } from "./chapter/safe-img";

const twoDigits = (number: number): string => String(number).padStart(2, "0");

/** Los doce capítulos como episodios de una serie, en una fila que se desliza con el dedo. */
export const EpisodeRail = () => (
  <ol className="no-scrollbar -mx-4 flex snap-x snap-mandatory [scroll-padding-inline:1rem] gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:[scroll-padding-inline:1.5rem] sm:px-6">
    {series.map((chapter) => {
      const written = isWritten(chapter.slug);
      const body = (
        <>
          <div className="relative aspect-[4/5] overflow-hidden bg-granate">
            {chapter.cover && (
              <figure className="absolute inset-0">
                <SafeImg
                  src={commonsImageUrl(chapter.cover, 600)}
                  alt=""
                  loading="lazy"
                  className={`size-full object-cover transition-transform duration-700 ${written ? "group-hover:scale-105" : "opacity-60 grayscale-[40%]"}`}
                />
              </figure>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-granate via-granate/40 to-transparent" />
            <span className="absolute left-4 top-3 font-display text-6xl font-extrabold tabular-nums text-oro-claro/90">
              {twoDigits(chapter.number)}
            </span>
            <span
              className={`absolute right-3 top-4 px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${
                written ? "bg-alba text-[#2b1a17]" : "bg-papel-claro/15 text-papel-claro"
              }`}
            >
              {written ? "Ya disponible" : "Próximamente"}
            </span>
            <div className="absolute inset-x-4 bottom-4 text-papel-claro">
              <p className="text-sm opacity-80">{chapter.period}</p>
              <p className="mt-1 font-display text-2xl font-bold leading-tight text-oro-claro">{chapter.title}</p>
            </div>
          </div>
          <p className="mt-3 text-[0.95rem] text-piedra">{chapter.teaser}</p>
        </>
      );
      return (
        <li key={chapter.slug} className="w-64 shrink-0 snap-start sm:w-72">
          {written ? (
            <Link href={chapterPath("descubre", chapter.slug)} className="group block">
              {body}
            </Link>
          ) : (
            <div>{body}</div>
          )}
        </li>
      );
    })}
  </ol>
);
