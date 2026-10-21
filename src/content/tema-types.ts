import type { Block, Library, Media, SchoolAudience } from "./chapter-types";
import type { Trimester } from "./levels";
import type { QuizQuestion } from "./quiz";

/** Una lección: más o menos una semana de clase. */
export type Lesson = {
  title: string;
  blocks: readonly Block[];
  activities: readonly string[];
};

/** La tarea final del tema (la «situación de aprendizaje» de la LOMLOE): un producto de los alumnos. */
export type FinalTask = {
  title: string;
  description: string;
  steps: readonly string[];
  /** Qué se entrega o se expone al final. */
  product: string;
};

/** Una sesión de clase en la guía del profesor. */
export type GuideSession = {
  title: string;
  steps: readonly { minutes: number; title: string; description: string }[];
};

/** Guía del profesor de un tema: solo se ve en la Zona Profesores. */
export type TemaGuide = {
  goals: readonly string[];
  /** Competencias específicas y saberes del currículo de Religión Católica que trabaja. */
  curriculum: { competences: readonly string[]; knowledge: readonly string[] };
  /** Atributos del perfil de la comunidad de aprendizaje del IB que se trabajan, para colegios IB. */
  ibProfile: readonly { attribute: string; how: string }[];
  materials: readonly string[];
  sessions: readonly GuideSession[];
  dynamics: readonly { title: string; description: string }[];
  answers: readonly string[];
  rubric: readonly { criterion: string; levels: readonly [string, string, string] }[];
  adaptations: { support: string; extension: string };
};

export type Tema = Library & {
  level: SchoolAudience;
  slug: string;
  /** La pregunta con la que arranca el tema. */
  question: string;
  /** Lo que el alumno va a aprender, dicho para él. */
  learn: readonly string[];
  intro: string;
  narrator?: { name: string; presentation: string };
  /** El arranque: algo para enganchar antes de la primera lección. */
  opening: readonly Block[];
  lessons: readonly Lesson[];
  finalTask: FinalTask;
  quiz: readonly QuizQuestion[];
  /** Ideas para quien tenga más tiempo o quiera ir más allá. */
  extension: readonly string[];
  media: readonly Media[];
  guide: TemaGuide;
};

export type { Trimester };
