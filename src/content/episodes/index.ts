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
import { laVidaPublica } from "./s2/01-la-vida-publica";
import { losApostoles } from "./s2/02-los-apostoles";
import { lasParabolas } from "./s2/03-las-parabolas";
import { losMilagros } from "./s2/04-los-milagros";
import { elSermonDeLaMontana } from "./s2/05-el-sermon-de-la-montana";
import { mujeresPobresYMarginados } from "./s2/06-mujeres-pobres-y-marginados";
import { conflictosConLasAutoridades } from "./s2/07-conflictos-con-las-autoridades";
import { laUltimaCena } from "./s2/08-la-ultima-cena";
import { laPasion } from "./s2/09-la-pasion";
import { laResurreccion } from "./s2/10-la-resurreccion";
import { laAscension } from "./s2/11-la-ascension";
import { quienEsJesucristo } from "./s2/12-quien-es-jesucristo";
import { pentecostes } from "./s3/01-pentecostes";
import { laComunidadDeJerusalen } from "./s3/02-la-comunidad-de-jerusalen";
import { pedro } from "./s3/03-pedro";
import { pablo } from "./s3/04-pablo";
import { losViajesDePablo } from "./s3/05-los-viajes-de-pablo";
import { lasPrimerasCartas } from "./s3/06-las-primeras-cartas";
import { lasPrimerasComunidades } from "./s3/07-las-primeras-comunidades";
import { cristianosYJudios } from "./s3/08-cristianos-y-judios";
import { lasMujeresEnLasComunidades } from "./s3/09-las-mujeres-en-las-comunidades";
import { neron } from "./s4/01-neron";
import { losMartires } from "./s4/02-los-martires";
import { lasCatacumbas } from "./s4/03-las-catacumbas";
import { persecuciones } from "./s4/04-persecuciones";
import { laVidaCotidiana } from "./s4/05-la-vida-cotidiana";
import { constantino } from "./s4/06-constantino";
import { nicea } from "./s4/07-nicea";
import { teodosio } from "./s4/08-teodosio";
import { laCaidaDeRoma } from "./s4/09-la-caida-de-roma";

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
  ...inSeason("jesucristo", [
    laVidaPublica,
    losApostoles,
    lasParabolas,
    losMilagros,
    elSermonDeLaMontana,
    mujeresPobresYMarginados,
    conflictosConLasAutoridades,
    laUltimaCena,
    laPasion,
    laResurreccion,
    laAscension,
    quienEsJesucristo,
  ]),
  ...inSeason("los-primeros-cristianos", [
    pentecostes,
    laComunidadDeJerusalen,
    pedro,
    pablo,
    losViajesDePablo,
    lasPrimerasCartas,
    lasPrimerasComunidades,
    cristianosYJudios,
    lasMujeresEnLasComunidades,
  ]),
  ...inSeason("perseguidos", [neron, losMartires, lasCatacumbas, persecuciones, laVidaCotidiana, constantino, nicea, teodosio, laCaidaDeRoma]),
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
