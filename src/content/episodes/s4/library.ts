import type { Chapter, Library, Place } from "../../chapter-types";
import { characters as s3Characters, images as s3Images, library as s3Library, med as s3Med } from "../s3/library";

export const med = {
  ...s3Med,
  cartago: { name: "Cartago", lat: 36.85, lon: 10.33 },
  esmirna: { name: "Esmirna", lat: 38.42, lon: 27.14 },
  milan: { name: "Milán", lat: 45.46, lon: 9.19 },
  nicea: { name: "Nicea", lat: 40.43, lon: 29.72 },
  constantinopla: { name: "Constantinopla", lat: 41.01, lon: 28.98 },
  ravena: { name: "Rávena", lat: 44.42, lon: 12.2 },
  hipona: { name: "Hipona", lat: 36.88, lon: 7.75 },
  tarragona: { name: "Tarraco (Tarragona)", lat: 41.12, lon: 1.25 },
  merida: { name: "Emerita (Mérida)", lat: 38.92, lon: -6.34 },
  zaragoza: { name: "Caesaraugusta (Zaragoza)", lat: 41.65, lon: -0.88 },
  cordoba: { name: "Corduba (Córdoba)", lat: 37.88, lon: -4.78 },
  coca: { name: "Cauca (Coca, Segovia)", lat: 41.22, lon: -4.52 },
  treveris: { name: "Tréveris", lat: 49.75, lon: 6.64 },
} satisfies Record<string, Place>;

export const pick = <K extends keyof typeof med>(...keys: K[]): Record<K, Place> =>
  Object.fromEntries(keys.map((key) => [key, med[key]])) as Record<K, Place>;

const art = (commonsFile: string, title: string, artist: string, date: string, museum: string, alt: string, caption: string) =>
  ({ kind: "arte", commonsFile, title, artist, date, museum, alt, caption }) as const;

const photo = (commonsFile: string, alt: string, caption: string) =>
  ({ kind: "foto", commonsFile, alt, caption, credit: "Wikimedia Commons" }) as const;

export const images: Chapter["images"] = {
  ...s3Images,
  antorchas: art(
    "Henryk Siemiradzki - Pochodnie Nerona.jpg",
    "Las antorchas de Nerón",
    "Henryk Siemiradzki",
    "1876",
    "Museo Nacional de Cracovia",
    "Gran pintura de una fiesta romana con multitud de invitados; al fondo, postes con personas atadas a punto de ser quemadas.",
    "Tácito cuenta que Nerón usó a cristianos como antorchas humanas en sus jardines. El pintor lo imaginó en plena fiesta.",
  ),
  martires: art(
    "Jean-Léon Gérôme - The Christian Martyrs' Last Prayer - Walters 37113.jpg",
    "La última oración de los mártires cristianos",
    "Jean-Léon Gérôme",
    "1863-1883",
    "Museo de Arte Walters, Baltimore",
    "Pintura de un grupo de personas arrodilladas en la arena de un circo romano mientras un león sale de una jaula.",
    "Una imagen del siglo XIX que fijó la idea de los mártires en el circo. La realidad era a menudo menos espectacular y más burocrática.",
  ),
  cripta: photo(
    "Rom, Calixtus-Katakomben, Krypta der Päpste.jpg",
    "Pequeña sala subterránea con nichos en las paredes y lápidas con inscripciones.",
    "La cripta de los papas, en las catacumbas de San Calixto (Roma). Aquí se enterró a varios obispos de Roma del siglo III.",
  ),
  libelo: photo(
    "Libellus-Mich-Decian-250AD-sm.jpg",
    "Pequeño papiro antiguo escrito en griego.",
    "Un «libelo» del año 250: el certificado que demostraba que alguien había ofrecido sacrificio a los dioses durante la persecución de Decio.",
  ),
  puenteMilvio: art(
    "Giulio Romano - The Battle of the Milvian Bridge.jpg",
    "La batalla del puente Milvio",
    "Giulio Romano (taller de Rafael)",
    "1520-1524",
    "Sala de Constantino, Museos Vaticanos",
    "Gran fresco de una batalla con caballos, soldados y un río lleno de combatientes.",
    "La victoria de Constantino sobre Majencio en el año 312, a las puertas de Roma.",
  ),
  arcoConstantino: photo(
    "The Arch of Constantine, Roman Forum, Rome.jpg",
    "Gran arco triunfal romano de tres vanos junto al Coliseo.",
    "El arco de Constantino, junto al Coliseo de Roma, levantado para celebrar su victoria en el puente Milvio.",
  ),
  nicea: art(
    "First Council of Nicea (icon).jpg",
    "El Concilio de Nicea",
    "Icono ortodoxo",
    "Época posbizantina",
    "Wikimedia Commons",
    "Icono de un emperador coronado rodeado de obispos que sostienen un texto; abajo, una figura caída.",
    "Los iconos ortodoxos representan a Constantino entre los obispos con el texto del Credo. Abajo, Arrio, derrotado.",
  ),
  missorium: photo(
    "Disco o Missorium Teodosio MPLdC.jpg",
    "Gran bandeja redonda de plata con un emperador sentado en el centro entre dos figuras y soldados.",
    "El Missorium de Teodosio, una gran bandeja de plata del año 388 hallada en Almendralejo (Badajoz). El original está en la Real Academia de la Historia, en Madrid.",
  ),
  ambrosio: art(
    "Anthony van Dyck - Emperor Theodosius Forbidden by St Ambrose To Enter Milan Cathedral - WGA07437.jpg",
    "San Ambrosio impide a Teodosio entrar en la catedral",
    "Anton van Dyck",
    "hacia 1620",
    "National Gallery, Londres",
    "Pintura de un obispo con mitra que detiene con la mano a un emperador en la puerta de una iglesia.",
    "El obispo de Milán exige penitencia al emperador por una matanza en Tesalónica. Un emperador que se somete a un obispo: algo nuevo.",
  ),
  saqueo: art(
    "Sack of Rome by the Visigoths on 24 August 410 by JN Sylvestre 1890.jpg",
    "El saqueo de Roma por los visigodos",
    "Joseph-Noël Sylvestre",
    "1890",
    "Wikimedia Commons",
    "Pintura de guerreros bárbaros derribando con cuerdas una estatua romana de mármol.",
    "El 24 de agosto de 410, los visigodos de Alarico saquearon Roma. El mundo entero se estremeció.",
  ),
};

export const characters: Chapter["characters"] = {
  ...s3Characters,
  constantino: {
    name: "Constantino I",
    role: "Emperador romano",
    dates: "c. 272 – 337",
    text: "Proclamado emperador por sus tropas en Britania en el 306. Venció a sus rivales, legalizó el cristianismo, convocó el Concilio de Nicea y fundó Constantinopla. Se bautizó poco antes de morir.",
    image: "arcoConstantino",
  },
  teodosio: {
    name: "Teodosio I el Grande",
    role: "Emperador romano",
    dates: "347 – 395",
    text: "Nacido en Hispania, probablemente en Cauca (Coca, Segovia). Hizo del cristianismo niceno la religión oficial del Imperio y prohibió los cultos paganos. Fue el último emperador que gobernó todo el Imperio, de Oriente a Occidente.",
    image: "missorium",
  },
  agustin: {
    name: "Agustín de Hipona",
    role: "Obispo y pensador",
    dates: "354 – 430",
    text: "Africano, profesor de retórica, tuvo una juventud agitada que contó en sus «Confesiones». Se convirtió en Milán y fue obispo de Hipona. Escribió «La ciudad de Dios» tras el saqueo de Roma. Es uno de los pensadores más influyentes de la historia.",
  },
  perpetua: {
    name: "Perpetua y Felicidad",
    role: "Mártires de Cartago",
    dates: "† 203",
    text: "Perpetua, una joven noble de 22 años que acababa de ser madre, y Felicidad, una esclava embarazada, murieron juntas en el anfiteatro de Cartago. Perpetua escribió en la cárcel un diario que se conserva.",
  },
};

export const library: Library = { ...s3Library, images, characters, places: med };
