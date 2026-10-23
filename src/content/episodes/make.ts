import type { Chapter, ChapterVersion, Library, Media, Place, Stop } from "../chapter-types";

type EpisodeInput = {
  slug: string;
  title: string;
  period: string;
  cover?: string;
  mapRegion?: Chapter["mapRegion"];
  places: Readonly<Record<string, Place>>;
  stops: readonly Stop[];
  library: Library;
  media?: readonly Media[];
  version: ChapterVersion;
};

/**
 * Los episodios usan el mismo formato que los capítulos para reutilizar la página.
 * Solo tienen la versión de Descubre; la de Universidad repite la misma hasta que exista.
 */
export const makeEpisode = (input: EpisodeInput): Chapter => ({
  slug: input.slug,
  number: 0,
  title: input.title,
  period: input.period,
  cover: input.cover,
  mapRegion: input.mapRegion,
  places: input.places,
  stops: input.stops,
  images: input.library.images,
  illustrations: input.library.illustrations,
  characters: input.library.characters,
  media: input.media ?? [],
  versions: { descubre: input.version, universidad: input.version },
});

/** Pregunta de quiz con las opciones en orden (a, b, c, d). */
export const question = (id: string, prompt: string, texts: readonly string[], correct: number, explanation: string) => ({
  id,
  prompt,
  options: texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text })),
  correctId: String.fromCharCode(97 + correct),
  explanation,
});
