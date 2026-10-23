import type { Chapter } from "../chapter-types";
import { chapter01 } from "../chapters/01-el-mundo-de-jesus";
import { episodePath, findSeason, seasons, type EpisodeSummary, type Season } from "../seasons";

/** Un episodio escrito: su sitio en la serie y su contenido (con el mismo formato que los capítulos). */
export type Episode = { season: string; slug: string; content: Chapter };

const written: readonly Episode[] = [{ season: "los-origenes", slug: "el-mundo-de-jesus", content: chapter01 }];

export const writtenEpisodes = written;

export const findEpisode = (season: string, slug: string): Episode | undefined =>
  written.find((episode) => episode.season === season && episode.slug === slug);

export const isEpisodeWritten = (season: string, slug: string): boolean => findEpisode(season, slug) !== undefined;

export const countWritten = (season: string): number => written.filter((episode) => episode.season === season).length;

export type EpisodeLink = { season: Season; episode: EpisodeSummary; href: string; written: boolean };

/** El episodio que viene después, aunque esté en la temporada siguiente. */
export const nextEpisode = (seasonSlug: string, slug: string): EpisodeLink | undefined => {
  const flat = seasons.flatMap((season) => season.episodes.map((episode) => ({ season, episode })));
  const index = flat.findIndex((item) => item.season.slug === seasonSlug && item.episode.slug === slug);
  const next = flat[index + 1];
  if (index < 0 || !next) return undefined;
  return {
    ...next,
    href: episodePath(next.season.slug, next.episode.slug),
    written: isEpisodeWritten(next.season.slug, next.episode.slug),
  };
};

export const seasonOf = (slug: string): Season | undefined => findSeason(slug);
