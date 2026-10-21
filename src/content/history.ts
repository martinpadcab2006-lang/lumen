import type { Chapter, ChapterSummary } from "./chapter-types";
import { chapter01 } from "./chapters/01-el-mundo-de-jesus";

/** Los capítulos ya escritos. */
export const chapters: readonly Chapter[] = [chapter01];

/** La serie completa: doce capítulos. Los que aún no están escritos aparecen como «próximamente». */
export const series: readonly ChapterSummary[] = [
  { number: 1, slug: "el-mundo-de-jesus", title: "El mundo en el que nació Jesús", period: "63 a. C. – 70 d. C.", teaser: "Roma, Herodes, el Templo y un pueblo que esperaba al Mesías." },
  { number: 2, slug: "jesus-de-nazaret", title: "Jesús de Nazaret", period: "c. 6 a. C. – c. 30", teaser: "Su vida, su mensaje, su muerte y la fe en su resurrección." },
  { number: 3, slug: "los-primeros-cristianos", title: "Los primeros cristianos", period: "30 – 100", teaser: "Pentecostés, Pedro y Pablo, y las primeras comunidades." },
  { number: 4, slug: "perseguidos", title: "Perseguidos", period: "64 – 313", teaser: "Nerón, los mártires y la Iglesia que crece en la sombra." },
  { number: 5, slug: "religion-del-imperio", title: "De perseguidos a religión del Imperio", period: "313 – 476", teaser: "Constantino, Nicea, Teodosio y san Agustín." },
  { number: 6, slug: "monjes-y-misioneros", title: "Monjes, misioneros y bárbaros", period: "476 – 1000", teaser: "San Benito, la conversión de Europa y Bizancio." },
  { number: 7, slug: "la-edad-media", title: "La Edad Media cristiana", period: "1000 – 1450", teaser: "El Gran Cisma, las cruzadas, las catedrales y las universidades." },
  { number: 8, slug: "reforma-y-contrarreforma", title: "Reforma y Contrarreforma", period: "1450 – 1650", teaser: "La imprenta, Lutero, Trento y las guerras de religión." },
  { number: 9, slug: "hasta-los-confines", title: "Hasta los confines del mundo", period: "1492 – 1800", teaser: "América, Asia y África: misiones y debates." },
  { number: 10, slug: "razones-y-revoluciones", title: "Razones y revoluciones", period: "1650 – 1900", teaser: "La Ilustración, la Revolución francesa y la cuestión social." },
  { number: 11, slug: "el-siglo-xx", title: "El siglo XX", period: "1900 – 2000", teaser: "Guerras, totalitarismos, mártires y el Concilio Vaticano II." },
  { number: 12, slug: "el-cristianismo-hoy", title: "El cristianismo hoy", period: "2000 – hoy", teaser: "Un cristianismo cada vez más africano, latinoamericano y asiático." },
];

export const findChapter = (slug: string): Chapter | undefined => chapters.find((chapter) => chapter.slug === slug);

export const isWritten = (slug: string): boolean => chapters.some((chapter) => chapter.slug === slug);

export const nextInSeries = (number: number): ChapterSummary | undefined =>
  series.find((summary) => summary.number === number + 1);
