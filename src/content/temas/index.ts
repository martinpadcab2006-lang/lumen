import type { SchoolAudience } from "../chapter-types";
import { findLevel, type Level, type TemaSummary } from "../levels";
import type { Tema } from "../tema-types";
import { elPuebloDeJesus } from "./primaria-1/el-pueblo-de-jesus";
import { esperamosLaNavidad } from "./primaria-1/esperamos-la-navidad";
import { nosConocemos } from "./primaria-1/nos-conocemos";

/** Los temas ya escritos. */
export const temas: readonly Tema[] = [nosConocemos, elPuebloDeJesus, esperamosLaNavidad];

export const findTema = (level: string, slug: string): Tema | undefined =>
  temas.find((tema) => tema.level === level && tema.slug === slug);

export const isTemaWritten = (level: SchoolAudience, slug: string): boolean => findTema(level, slug) !== undefined;

/** El tema escrito junto con su ficha de la programación (número, trimestre, título…). */
export const findTemaWithSummary = (
  levelSlug: string,
  slug: string,
): { level: Level; summary: TemaSummary; tema: Tema } | undefined => {
  const level = findLevel(levelSlug);
  const summary = level?.programme.find((item) => item.slug === slug);
  const tema = findTema(levelSlug, slug);
  return level && summary && tema ? { level, summary, tema } : undefined;
};
