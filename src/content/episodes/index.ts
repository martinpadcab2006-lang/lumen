import type { Chapter } from "../chapter-types";
import { episodePath, findSeason, seasons, type EpisodeSummary, type Season } from "../seasons";
import { queEsElCristianismo } from "./s1/01-que-es-el-cristianismo";
import { elMundoDeJesus } from "./s1/02-el-mundo-de-jesus";
import { elJudaismo } from "./s1/03-el-judaismo";
import { elImperioRomano } from "./s1/04-el-imperio-romano";
import { laEsperanzaDeIsrael } from "./s1/05-la-esperanza-de-israel";
import { lasFuentesSobreJesus } from "./s1/06-las-fuentes-sobre-jesus";
import { elNacimientoDeJesus } from "./s1/07-el-nacimiento-de-jesus";
import { laInfanciaDeJesus } from "./s1/08-la-infancia-de-jesus";
import { juanElBautista } from "./s1/09-juan-el-bautista";
import { elReinoDeDios } from "./s1/10-el-reino-de-dios";

/** Un episodio escrito: su sitio en la serie y su contenido (con el mismo formato que los capítulos). */
export type Episode = { season: string; slug: string; content: Chapter };

const inSeason = (season: string, contents: readonly Chapter[]): Episode[] =>
  contents.map((content) => ({ season, slug: content.slug, content }));

const written: readonly Episode[] = [
  ...inSeason("los-origenes", [
    queEsElCristianismo,
    elMundoDeJesus,
    elJudaismo,
    elImperioRomano,
    laEsperanzaDeIsrael,
    lasFuentesSobreJesus,
    elNacimientoDeJesus,
    laInfanciaDeJesus,
    juanElBautista,
    elReinoDeDios,
  ]),
];

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
