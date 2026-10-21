import Link from "next/link";
import { chapterPath, type Audience } from "@/content/chapter-types";
import { isWritten, series } from "@/content/history";

/** La serie de doce capítulos. Es una secuencia, por eso va numerada. */
export const SeriesList = ({ audience }: { audience: Audience }) => (
  <ol className="divide-y divide-linea border-y border-linea">
    {series.map((chapter) => {
      const written = isWritten(chapter.slug);
      const content = (
        <>
          <span className="font-display text-3xl font-bold tabular-nums text-piedra">{chapter.number}</span>
          <span>
            <span className={`block font-display text-xl font-semibold ${written ? "group-hover:underline" : ""}`}>
              {chapter.title}
            </span>
            <span className="block text-piedra">{chapter.teaser}</span>
          </span>
          <span className="text-sm text-piedra sm:text-right">
            {chapter.period}
            <span className={`block font-bold ${written ? "text-lapis" : ""}`}>{written ? "Leer ahora" : "Próximamente"}</span>
          </span>
        </>
      );
      const rowClass = "grid gap-1 py-5 sm:grid-cols-[3.5rem_1fr_11rem] sm:items-baseline sm:gap-6";
      return (
        <li key={chapter.slug}>
          {written ? (
            <Link href={chapterPath(audience, chapter.slug)} className={`group ${rowClass}`}>
              {content}
            </Link>
          ) : (
            <div className={`${rowClass} opacity-70`}>{content}</div>
          )}
        </li>
      );
    })}
  </ol>
);
