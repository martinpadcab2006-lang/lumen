import type { QuizQuestion } from "./quiz";

/** Las cinco formas de contar cada tema. */
export type Audience = "descubre" | "primaria" | "eso" | "bachillerato" | "universidad";

export const audienceName: Readonly<Record<Audience, string>> = {
  descubre: "Descubre",
  primaria: "Primaria",
  eso: "ESO",
  bachillerato: "Bachillerato",
  universidad: "Universidad",
};

/** Ruta de un capítulo de historia para cada público. */
export const chapterPath = (audience: Audience, slug: string): string => {
  switch (audience) {
    case "descubre":
      return `/descubre/historia/${slug}`;
    case "universidad":
      return `/universidad/historia/${slug}`;
    case "primaria":
    case "eso":
    case "bachillerato":
      return `/colegios/${audience}/historia/${slug}`;
  }
};

/** Un lugar del mapa de la época. */
export type Place = { name: string; lat: number; lon: number };

/** Una parada del recorrido: al leer esa parte, el mapa y la fecha se mueven aquí. */
export type Stop = { id: string; year: string; place: string };

export type ChapterImage = {
  /** Nombre del archivo en Wikimedia Commons. */
  commonsFile: string;
  alt: string;
  caption: string;
  credit: string;
};

export type MediaKind = "video" | "podcast" | "entrevista" | "pelicula" | "serie";

export type Media = {
  kind: MediaKind;
  title: string;
  /** Canal, programa, director o productora. */
  by: string;
  url: string;
  /** Identificador del vídeo de YouTube, para verlo dentro de la página. */
  youtubeId?: string;
  /** Segundo en el que empieza el trozo que interesa. */
  startAt?: number;
  /** Para películas y series: tráiler en YouTube y búsqueda de dónde verla. */
  trailerYoutubeId?: string;
  whereToWatch?: string;
  note: string;
  audiences: readonly Audience[];
  /** Martín ha comprobado que el recurso existe y dice lo que esperamos. */
  reviewed: boolean;
};

export type Section = {
  stop: string;
  heading: string;
  body: readonly string[];
  image?: string;
  /** Un dato o una cita destacada al lado del texto. */
  aside?: { label: string; text: string };
};

export type Source = { text: string; url?: string };

export type ChapterVersion = {
  title: string;
  /** Resumen de un minuto, arriba del todo. */
  inAMinute: readonly string[];
  intro: string;
  sections: readonly Section[];
  activities?: readonly string[];
  debates?: readonly { question: string; positions: string }[];
  sources?: readonly Source[];
  quiz: readonly QuizQuestion[];
  /** El gancho del final, que invita al siguiente capítulo. */
  next: string;
};

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  period: string;
  places: Readonly<Record<string, Place>>;
  stops: readonly Stop[];
  images: Readonly<Record<string, ChapterImage>>;
  media: readonly Media[];
  versions: Readonly<Record<Audience, ChapterVersion>>;
};

/** Ficha corta de un capítulo para los índices, esté escrito o no. */
export type ChapterSummary = { number: number; slug: string; title: string; period: string; teaser: string };
