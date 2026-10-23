import { seasons } from "@/content/seasons";
import { SeasonCard } from "./season-card";

/** Las ocho temporadas en una fila que se desliza con el dedo. */
export const EpisodeRail = () => (
  <ol className="no-scrollbar -mx-4 flex snap-x snap-mandatory [scroll-padding-inline:1rem] gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:[scroll-padding-inline:1.5rem] sm:px-6">
    {seasons.map((season) => (
      <li key={season.slug} className="w-64 shrink-0 snap-start sm:w-72">
        <SeasonCard season={season} />
      </li>
    ))}
  </ol>
);
