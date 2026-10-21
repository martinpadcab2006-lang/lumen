import type { Source } from "./chapter-types";

/** La noticia de la semana: una noticia real contada al estilo Lumen, con contexto y fuentes. */
export type WeeklyNews = {
  slug: string;
  /** Fecha de publicación en Lumen (AAAA-MM-DD). */
  date: string;
  title: string;
  lead: string;
  /** Qué ha pasado: solo hechos, con fechas. */
  facts: readonly string[];
  /** Por qué importa. */
  why: readonly string[];
  /** El contexto histórico que aporta Lumen. */
  history: readonly string[];
  /** Preguntas para comentar en clase de Religión. */
  classroom: readonly string[];
  /** Enlaces dentro de Lumen relacionados. */
  related?: readonly { href: string; label: string }[];
  sources: readonly Source[];
};

/** De la más reciente a la más antigua. */
export const weeklyNews: readonly WeeklyNews[] = [
  {
    slug: "leon-xiv-vuelve-a-la-plaza-tras-su-operacion",
    date: "2026-10-21",
    title: "León XIV vuelve a la plaza de San Pedro tras su operación",
    lead:
      "Ocho días después de ser operado de un cáncer de pulmón, el papa León XIV ha presidido su primera audiencia general de los miércoles y ha recorrido la plaza en el papamóvil, bajo la lluvia. Sus médicos confirman que no necesitará más tratamiento.",
    facts: [
      "El 13 de octubre, León XIV fue operado en el Policlínico Gemelli de Roma. Los cirujanos le extirparon el lóbulo inferior del pulmón derecho por un adenocarcinoma, un tipo de cáncer de pulmón.",
      "Salió del hospital el sábado 17 de octubre. Al día siguiente rezó el Ángelus con los fieles y dijo que retomaría «gradualmente» sus actividades.",
      "El miércoles 21 de octubre volvió a la audiencia general: recorrió la plaza en el papamóvil, saludó a los peregrinos y dio las gracias por las oraciones recibidas.",
      "Ese mismo día, sus médicos informaron de que los análisis confirman que el tumor estaba localizado y que no necesita ningún tratamiento adicional, ni quimioterapia.",
      "Sigue en preparación su primer gran viaje a América Latina (Uruguay, Argentina y Perú), previsto a partir del 6 de noviembre, aunque el Vaticano todavía no ha confirmado todos los detalles.",
    ],
    why: [
      "El papa es el obispo de Roma y la cabeza de la Iglesia católica, con unos 1.400 millones de fieles en todo el mundo. Su salud influye en la agenda de toda la Iglesia.",
      "Que el Vaticano informe con detalle sobre la enfermedad de un papa es relativamente reciente. Durante mucho tiempo, la salud de los papas se trataba con gran discreción.",
    ],
    history: [
      "León XIV es Robert Francis Prevost, nacido en Chicago en 1955. Fue elegido el 8 de mayo de 2025, tras la muerte de Francisco. Es el primer papa nacido en Estados Unidos y es fraile agustino.",
      "Pasó muchos años como misionero y obispo en Perú, del que también tiene la nacionalidad. Por eso su viaje a Perú tiene un significado especial.",
      "Al Gemelli se le llama «el hospital de los papas»: allí fueron atendidos Juan Pablo II, tras el atentado de 1981, y Francisco en varias ocasiones.",
    ],
    classroom: [
      "¿Qué es el papa para los católicos? ¿Por qué crees que tanta gente de todo el mundo reza por él cuando está enfermo?",
      "Busca en un mapa Uruguay, Argentina y Perú. ¿Por qué crees que el papa tiene un vínculo especial con Perú?",
      "El papa habla abiertamente de su enfermedad. ¿Qué nos enseña su forma de afrontarla?",
    ],
    related: [{ href: "/comparador", label: "Las iglesias cristianas, comparadas" }],
    sources: [
      { text: "Vatican News, «Exámenes histológicos del Papa: no es necesario ningún tratamiento adicional» (21-10-2026)", url: "https://www.vaticannews.va/es/papa/news/2026-10/papa-leon-comunicacion-medicos-examenes-histologicos-21-oct-2026.html" },
      { text: "Infobae, «El papa León XIV retomó las audiencias y volvió a subirse al papamóvil tras su operación» (21-10-2026)", url: "https://www.infobae.com/america/mundo/2026/10/21/el-papa-leon-xiv-retomo-las-audiencias-y-volvio-a-subirse-al-papamovil-tras-su-operacion/" },
      { text: "Univision, «El Vaticano revela nuevos detalles sobre la salud del papa León XIV» (14-10-2026)", url: "https://www.univision.com/noticias/mundo/el-vaticano-revela-nuevos-detalles-sobre-la-salud-del-papa-leon-xiv-y-que-sigue-para-su-recuperacion" },
      { text: "Vatican News, «Audiencia general: Los agustinos expresan su afecto al Papa» (21-10-2026)", url: "https://www.vaticannews.va/es/papa/news/2026-10/leon-xiv-audiencia-general-peregrinos-agustinos.html" },
    ],
  },
];

export const findWeeklyNews = (slug: string): WeeklyNews | undefined => weeklyNews.find((news) => news.slug === slug);

export const formatNewsDate = (date: string): string =>
  new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
