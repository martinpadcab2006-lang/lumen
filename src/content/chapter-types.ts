import type { QuizQuestion } from "./quiz";

/** Los ciclos de Colegios, como en el currículo: Primaria en tres, ESO en dos y Bachillerato. */
export type SchoolAudience = "primaria-1" | "primaria-2" | "primaria-3" | "eso-1" | "eso-2" | "bachillerato";

/** Los capítulos de historia se leen en Descubre y en Universidad; en Colegios van dentro de los temas. */
export type ChapterAudience = "descubre" | "universidad";

/** Todos los públicos, para marcar a quién sirve cada vídeo o podcast. */
export type Audience = ChapterAudience | SchoolAudience;

export const audienceName: Readonly<Record<Audience, string>> = {
  descubre: "Descubre",
  universidad: "Universidad",
  "primaria-1": "Primaria 1.º–2.º",
  "primaria-2": "Primaria 3.º–4.º",
  "primaria-3": "Primaria 5.º–6.º",
  "eso-1": "ESO 1.º–2.º",
  "eso-2": "ESO 3.º–4.º",
  bachillerato: "Bachillerato",
};

/** Ruta de un capítulo de historia. */
export const chapterPath = (audience: ChapterAudience, slug: string): string =>
  audience === "descubre" ? `/descubre/historia/${slug}` : `/universidad/historia/${slug}`;

export const temaPath = (level: SchoolAudience, slug: string): string => `/colegios/${level}/${slug}`;

export const teacherGuidePath = (level: SchoolAudience, slug: string): string => `/profesores/${level}/${slug}`;

/** Un lugar del mapa de la época. */
export type Place = { name: string; lat: number; lon: number };

/** Una parada del recorrido: al leer esa parte, el mapa y la fecha se mueven aquí. */
export type Stop = { id: string; year: string; place: string };

/** Foto o documento de Wikimedia Commons. */
export type PhotoImage = {
  kind: "foto";
  commonsFile: string;
  alt: string;
  caption: string;
  credit: string;
};

/** Obra de arte de dominio público: se muestra como en un museo. */
export type ArtImage = {
  kind: "arte";
  commonsFile: string;
  alt: string;
  title: string;
  artist: string;
  date: string;
  museum: string;
  /** Qué tiene que ver con lo que se cuenta. */
  caption: string;
};

export type ChapterImage = PhotoImage | ArtImage;

/**
 * Ilustración hecha para Lumen (por ejemplo, con Canva). Mientras no exista el archivo,
 * la página muestra un hueco con la descripción de lo que irá.
 */
export type Illustration = {
  description: string;
  alt: string;
  /** Ruta dentro de /public cuando la ilustración ya existe. */
  src?: string;
};

export type Character = {
  name: string;
  role: string;
  dates: string;
  text: string;
  image?: string;
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

/** Las piezas con las que se construye cada parte de un capítulo. */
export type Block =
  | { type: "p"; text: string }
  | { type: "image"; id: string }
  | { type: "illustration"; id: string }
  | { type: "fact"; label: string; text: string }
  | { type: "character"; id: string }
  | { type: "numbers"; title: string; items: readonly { value: string; label: string }[] }
  | { type: "quote"; text: string; source: string }
  | { type: "words"; items: readonly { term: string; meaning: string }[] }
  | { type: "narrator"; text: string }
  | { type: "story"; title: string; paragraphs: readonly string[] }
  /** Mapa de la tierra de Jesús con un lugar destacado. */
  | { type: "map"; place?: string };

export type Section = { stop: string; heading: string; blocks: readonly Block[] };

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
  quiz?: readonly QuizQuestion[];
  /** Curiosidades relacionadas (identificadores de pills.ts). */
  relatedPills?: readonly string[];
  /** El gancho del final, que invita al siguiente capítulo. */
  next: string;
};

/** Imágenes, dibujos y personajes que pueden citar los bloques de un capítulo o de un tema. */
export type Library = {
  images: Readonly<Record<string, ChapterImage>>;
  illustrations: Readonly<Record<string, Illustration>>;
  characters: Readonly<Record<string, Character>>;
  places?: Readonly<Record<string, Place>>;
};

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  period: string;
  places: Readonly<Record<string, Place>>;
  stops: readonly Stop[];
  images: Readonly<Record<string, ChapterImage>>;
  illustrations: Readonly<Record<string, Illustration>>;
  characters: Readonly<Record<string, Character>>;
  media: readonly Media[];
  versions: Readonly<Record<ChapterAudience, ChapterVersion>>;
};

/** Ficha corta de un capítulo para los índices, esté escrito o no. */
export type ChapterSummary = {
  number: number;
  slug: string;
  title: string;
  period: string;
  teaser: string;
  /** Cuadro de portada en Wikimedia Commons (nombre del archivo). */
  cover?: string;
};
