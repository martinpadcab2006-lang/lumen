import type { QuizQuestion } from "./quiz";

/** Las formas de contar cada tema. */
export type Audience = "descubre" | "primaria-1" | "primaria-2" | "eso" | "bachillerato" | "universidad";

export type SchoolAudience = Extract<Audience, "primaria-1" | "primaria-2" | "eso" | "bachillerato">;

export const audienceName: Readonly<Record<Audience, string>> = {
  descubre: "Descubre",
  "primaria-1": "Primaria 1.º–3.º",
  "primaria-2": "Primaria 4.º–6.º",
  eso: "ESO",
  bachillerato: "Bachillerato",
  universidad: "Universidad",
};

export const isSchoolAudience = (audience: Audience): audience is SchoolAudience =>
  audience === "primaria-1" || audience === "primaria-2" || audience === "eso" || audience === "bachillerato";

/** Ruta de un capítulo de historia para cada público. */
export const chapterPath = (audience: Audience, slug: string): string => {
  if (audience === "descubre") return `/descubre/historia/${slug}`;
  if (audience === "universidad") return `/universidad/historia/${slug}`;
  return `/colegios/${audience}/historia/${slug}`;
};

export const teacherGuidePath = (audience: SchoolAudience, slug: string): string =>
  `/profesores/${audience}/${slug}`;

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
  | { type: "story"; title: string; paragraphs: readonly string[] };

export type Section = { stop: string; heading: string; blocks: readonly Block[] };

export type Source = { text: string; url?: string };

export type ChapterVersion = {
  title: string;
  /** Resumen de un minuto, arriba del todo. */
  inAMinute: readonly string[];
  intro: string;
  /** Narrador inventado para Primaria. */
  narrator?: { name: string; presentation: string };
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

/** Guía para el profesor: solo se ve en la Zona Profesores. */
export type TeacherGuide = {
  goals: readonly string[];
  duration: string;
  materials: readonly string[];
  session: readonly { minutes: number; title: string; description: string }[];
  dynamics: readonly { title: string; description: string }[];
  answers: readonly string[];
  rubric: readonly { criterion: string; levels: readonly [string, string, string] }[];
  adaptations: { support: string; extension: string };
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
  versions: Readonly<Record<Audience, ChapterVersion>>;
  teacherGuides: Readonly<Record<SchoolAudience, TeacherGuide>>;
};

/** Ficha corta de un capítulo para los índices, esté escrito o no. */
export type ChapterSummary = { number: number; slug: string; title: string; period: string; teaser: string };
