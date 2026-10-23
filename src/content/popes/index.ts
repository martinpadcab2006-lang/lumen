import { altaEdadMedia } from "./alta-edad-media";
import { antiguedad } from "./antiguedad";
import { modernos } from "./modernos";
import { plenaEdadMedia } from "./plena-edad-media";
import type { Pope } from "./types";

export type { Pope } from "./types";

/** Los 267 papas, de san Pedro a León XIV, en orden. */
export const popes: readonly Pope[] = [...antiguedad, ...altaEdadMedia, ...plenaEdadMedia, ...modernos];

export type PopeEra = { slug: string; title: string; from: number; to: number; season: string };

export const popeEras: readonly PopeEra[] = [
  { slug: "antiguedad", title: "Los primeros siglos", from: 1, to: 63, season: "perseguidos" },
  { slug: "alta-edad-media", title: "La Alta Edad Media", from: 64, to: 158, season: "la-edad-media" },
  { slug: "plena-edad-media", title: "De las cruzadas al Renacimiento", from: 159, to: 214, season: "la-edad-media" },
  { slug: "edad-moderna", title: "La Edad Moderna", from: 215, to: 254, season: "la-edad-moderna" },
  { slug: "contemporanea", title: "Los papas de hoy", from: 255, to: 267, season: "el-cristianismo-hoy" },
];

/** Papas de Aviñón (1309 – 1377). */
export const isAvignon = (pope: Pope): boolean => pope.number >= 195 && pope.number <= 201;

export const formatPontificate = (pope: Pope): string => {
  const prefix = pope.approximate ? "c. " : "";
  if (pope.end === null) return `${pope.start} – hoy`;
  return pope.end === pope.start ? `${prefix}${pope.start}` : `${prefix}${pope.start} – ${prefix}${pope.end}`;
};

/** Récords y datos curiosos, comprobados en las fuentes de la página. */
export const popeRecords: readonly { value: string; label: string }[] = [
  { value: "13 días", label: "El pontificado más corto: Urbano VII (1590)." },
  { value: "31 años", label: "El más largo después del de Pedro: Pío IX (1846-1878)." },
  { value: "3 veces", label: "Benedicto IX fue papa tres veces en el siglo XI." },
  { value: "455 años", label: "Sin un papa no italiano, de Adriano VI (1523) a Juan Pablo II (1978)." },
  { value: "2", label: "Papas valencianos: Calixto III y Alejandro VI, tío y sobrino, de la familia Borja." },
  { value: "1294 y 2013", label: "Las renuncias más famosas: Celestino V y Benedicto XVI." },
];
