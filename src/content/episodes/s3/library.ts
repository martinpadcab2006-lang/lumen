import type { Chapter, Library, Place } from "../../chapter-types";
import { characters as s2Characters, holyLand as s2HolyLand, images as s2Images, library as s2Library } from "../s2/library";

export const holyLand = {
  ...s2HolyLand,
  jope: { name: "Jope", lat: 32.05, lon: 34.75 },
  yavne: { name: "Yavne", lat: 31.88, lon: 34.74 },
  pella: { name: "Pella", lat: 32.45, lon: 35.61 },
} satisfies Record<string, Place>;

export const med = {
  jerusalen: { name: "Jerusalén", lat: 31.778, lon: 35.235 },
  damasco: { name: "Damasco", lat: 33.51, lon: 36.29 },
  antioquia: { name: "Antioquía", lat: 36.2, lon: 36.16 },
  tarso: { name: "Tarso", lat: 36.92, lon: 34.89 },
  pafos: { name: "Pafos (Chipre)", lat: 34.77, lon: 32.42 },
  efeso: { name: "Éfeso", lat: 37.94, lon: 27.34 },
  filipos: { name: "Filipos", lat: 41.01, lon: 24.29 },
  tesalonica: { name: "Tesalónica", lat: 40.64, lon: 22.94 },
  atenas: { name: "Atenas", lat: 37.98, lon: 23.73 },
  corinto: { name: "Corinto", lat: 37.91, lon: 22.88 },
  malta: { name: "Malta", lat: 35.9, lon: 14.4 },
  roma: { name: "Roma", lat: 41.9, lon: 12.5 },
  alejandria: { name: "Alejandría", lat: 31.2, lon: 29.92 },
  patmos: { name: "Patmos", lat: 37.31, lon: 26.55 },
  dura: { name: "Dura Europos", lat: 34.75, lon: 40.73 },
  tarraco: { name: "Tarraco (Hispania)", lat: 41.12, lon: 1.25 },
} satisfies Record<string, Place>;

/** Elige unos cuantos lugares del Mediterráneo para un episodio. */
export const pick = <K extends keyof typeof med>(...keys: K[]): Record<K, Place> =>
  Object.fromEntries(keys.map((key) => [key, med[key]])) as Record<K, Place>;

const art = (commonsFile: string, title: string, artist: string, date: string, museum: string, alt: string, caption: string) =>
  ({ kind: "arte", commonsFile, title, artist, date, museum, alt, caption }) as const;

const photo = (commonsFile: string, alt: string, caption: string) =>
  ({ kind: "foto", commonsFile, alt, caption, credit: "Wikimedia Commons" }) as const;

export const images: Chapter["images"] = {
  ...s2Images,
  pentecostesMaino: art(
    "Maino Pentecostés. Lienzo. 285 x 163 cm. Museo del Prado.jpg",
    "Pentecostés",
    "Juan Bautista Maíno",
    "1615-1620",
    "Museo del Prado, Madrid",
    "Pintura de María y los apóstoles reunidos, con llamas sobre sus cabezas y una paloma de luz arriba.",
    "Maíno, pintor y fraile dominico, pintó a María en el centro de los apóstoles. Se cree que uno de ellos, el que mira al espectador, es un autorretrato.",
  ),
  pentecostesGiotto: art(
    "Giotto - Scrovegni - -39- - Pentecost.jpg",
    "Pentecostés",
    "Giotto",
    "hacia 1305",
    "Capilla de los Scrovegni, Padua",
    "Fresco de los apóstoles sentados en una sala, con rayos de luz que bajan sobre sus cabezas.",
    "Los apóstoles reciben el Espíritu Santo, según el relato de los Hechos.",
  ),
  conversion: art(
    "Conversion on the Way to Damascus-Caravaggio (c.1600-1).jpg",
    "La conversión de san Pablo",
    "Caravaggio",
    "1600-1601",
    "Santa Maria del Popolo, Roma",
    "Pintura de un hombre caído de espaldas en el suelo con los brazos abiertos, bajo un enorme caballo.",
    "Saulo, cegado, cae del caballo camino de Damasco. Los Hechos no hablan de ningún caballo: es un invento de los pintores.",
  ),
  crucifixionPedro: art(
    "Crucifixion of Saint Peter-Caravaggio (c.1600).jpg",
    "La crucifixión de san Pedro",
    "Caravaggio",
    "1600-1601",
    "Santa Maria del Popolo, Roma",
    "Pintura de tres hombres que levantan una cruz en la que está clavado un anciano cabeza abajo.",
    "Según la tradición, Pedro pidió ser crucificado cabeza abajo porque no se sentía digno de morir como Jesús.",
  ),
  atenas: art(
    "V&A - Raphael, St Paul Preaching in Athens (1515).jpg",
    "San Pablo predica en Atenas",
    "Rafael",
    "1515",
    "Victoria and Albert Museum, Londres",
    "Dibujo coloreado de un hombre con los brazos alzados que habla ante un grupo de filósofos, con un templo al fondo.",
    "Un boceto a tamaño real para un tapiz de la Capilla Sixtina: Pablo habla a los filósofos en el Areópago.",
  ),
  pabloEscribe: art(
    "Probably Valentin de Boulogne - Saint Paul Writing His Epistles - Google Art Project.jpg",
    "San Pablo escribiendo sus cartas",
    "Probablemente Valentin de Boulogne",
    "hacia 1618-1620",
    "Museo de Bellas Artes de Houston",
    "Pintura de un anciano con barba que escribe en un libro a la luz de una vela.",
    "Pablo solía dictar sus cartas, y a veces añadía al final unas líneas de su puño y letra.",
  ),
  p46: photo(
    "P46.jpg",
    "Hoja de papiro antiguo con dos columnas de texto griego, con bordes rotos.",
    "Una hoja del papiro P46, de hacia el año 200: la copia más antigua que conservamos de las cartas de Pablo.",
  ),
  efeso: photo(
    "Celsus Library, Ephesus.jpg",
    "Fachada de mármol de dos pisos con columnas y estatuas, entre ruinas.",
    "La biblioteca de Celso, en Éfeso, construida poco después de la época de Pablo. La ciudad era una de las más grandes del Imperio.",
  ),
  dura: photo(
    "Dura Europos baptistry overview.jpg",
    "Sala pequeña con una pila bajo un arco y paredes pintadas con escenas.",
    "El baptisterio de la casa-iglesia de Dura Europos (Siria), de hacia el año 240. Es la iglesia cristiana más antigua que se ha identificado.",
  ),
};

export const characters: Chapter["characters"] = {
  ...s2Characters,
  pablo: {
    name: "Pablo de Tarso",
    role: "Apóstol de los gentiles",
    dates: "c. 5 – c. 64-67",
    text: "Judío de la diáspora, fariseo y ciudadano romano, fabricante de tiendas. Persiguió a los cristianos hasta que, según los Hechos, se le apareció Jesús camino de Damasco. Fundó comunidades por todo el Mediterráneo oriental y escribió las cartas más antiguas del Nuevo Testamento. Según la tradición, murió decapitado en Roma.",
    image: "pabloEscribe",
  },
  santiago: {
    name: "Santiago, «el hermano del Señor»",
    role: "Líder de la comunidad de Jerusalén",
    dates: "† 62",
    text: "Pariente de Jesús, quizá su hermano. No era de los Doce, pero fue la gran autoridad de la Iglesia de Jerusalén, fiel a la Ley judía. Flavio Josefo cuenta que el sumo sacerdote lo hizo lapidar en el año 62.",
  },
  esteban: {
    name: "Esteban",
    role: "Diácono y primer mártir",
    dates: "† c. 34-36",
    text: "Uno de los siete encargados de atender a las viudas de la comunidad. Fue apedreado en Jerusalén tras un discurso contra el Templo. Entre los que guardaban los mantos estaba un joven llamado Saulo.",
  },
};

export const library: Library = { ...s2Library, images, characters, places: holyLand };
