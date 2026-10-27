import type { Chapter, Library, Place } from "../../chapter-types";
import { characters as s7Characters, images as s7Images, library as s7Library, world as s7Places } from "../s7/library";

/** Lugares de los siglos XIX al XXI. */
export const places = {
  ...s7Places,
  compiegne: { name: "Compiègne", lat: 49.42, lon: 2.83 },
  vendee: { name: "La Vendée", lat: 46.67, lon: -1.2 },
  valence: { name: "Valence", lat: 44.93, lon: 4.89 },
  lourdes: { name: "Lourdes", lat: 43.1, lon: -0.05 },
  manchester: { name: "Mánchester", lat: 53.48, lon: -2.24 },
  maguncia: { name: "Maguncia", lat: 50.0, lon: 8.27 },
  munich: { name: "Múnich", lat: 48.14, lon: 11.58 },
  auschwitz: { name: "Auschwitz", lat: 50.03, lon: 19.2 },
  varsovia: { name: "Varsovia", lat: 52.23, lon: 21.01 },
  econe: { name: "Écône", lat: 46.15, lon: 7.17 },
  losAngeles: { name: "Los Ángeles", lat: 34.05, lon: -118.24 },
  saoPaulo: { name: "São Paulo", lat: -23.55, lon: -46.63 },
  lagos: { name: "Lagos", lat: 6.52, lon: 3.38 },
  seul: { name: "Seúl", lat: 37.57, lon: 126.98 },
  namugongo: { name: "Namugongo (Uganda)", lat: 0.38, lon: 32.65 },
  medellin: { name: "Medellín", lat: 6.25, lon: -75.56 },
  sanSalvador: { name: "San Salvador", lat: 13.69, lon: -89.19 },
  manila: { name: "Manila", lat: 14.6, lon: 120.98 },
  barcelona: { name: "Barcelona", lat: 41.39, lon: 2.17 },
  chicago: { name: "Chicago", lat: 41.88, lon: -87.63 },
  chiclayo: { name: "Chiclayo (Perú)", lat: -6.77, lon: -79.84 },
  buenosAires: { name: "Buenos Aires", lat: -34.6, lon: -58.38 },
} satisfies Record<string, Place>;

export const pick = <K extends keyof typeof places>(...keys: K[]): Record<K, Place> =>
  Object.fromEntries(keys.map((key) => [key, places[key]])) as Record<K, Place>;

const art = (commonsFile: string, title: string, artist: string, date: string, museum: string, alt: string, caption: string) =>
  ({ kind: "arte", commonsFile, title, artist, date, museum, alt, caption }) as const;

const photo = (commonsFile: string, alt: string, caption: string) =>
  ({ kind: "foto", commonsFile, alt, caption, credit: "Wikimedia Commons" }) as const;

export const images: Chapter["images"] = {
  ...s7Images,
  serSupremo: photo(
    "Fête de l'Etre suprême 2.jpg",
    "Grabado de una gran fiesta al aire libre con una montaña artificial, un árbol y una multitud.",
    "La fiesta del Ser Supremo en el Campo de Marte de París (8 de junio de 1794), la religión cívica inventada por Robespierre.",
  ),
  napoleon: art(
    "Jacques-Louis David - The Coronation of Napoleon (1805-1807).jpg",
    "La coronación de Napoleón",
    "Jacques-Louis David",
    "1805-1807",
    "Museo del Louvre, París",
    "Enorme pintura de una ceremonia en una catedral: un emperador con manto rojo corona a una mujer arrodillada, ante el papa sentado.",
    "Notre-Dame de París, 1804: el papa Pío VII estaba presente, pero Napoleón se coronó a sí mismo. David pintó el momento en que corona a Josefina.",
  ),
  newman: art(
    "John Henry Newman by Sir John Everett Millais, 1st Bt.jpg",
    "John Henry Newman",
    "John Everett Millais",
    "1881",
    "National Portrait Gallery, Londres",
    "Retrato de un anciano cardenal vestido de rojo, sentado y con expresión pensativa.",
    "El anglicano de Oxford que se hizo católico en 1845 y acabó siendo cardenal. Fue canonizado en 2019.",
  ),
  lourdes: photo(
    "Grotto of Massabielle Lourdes.jpg",
    "Gruta en una roca con una estatua blanca de la Virgen en un hueco y muchas velas encendidas delante.",
    "La gruta de Massabielle, en Lourdes, donde en 1858 Bernadette Soubirous dijo haber visto a la Virgen. Recibe millones de peregrinos al año.",
  ),
  portaPia: art(
    "Breccia di Porta Pia Ademollo.jpg",
    "La brecha de Porta Pia",
    "Carlo Ademollo",
    "1880",
    "Wikimedia Commons",
    "Pintura de soldados que se lanzan al asalto por un hueco abierto en una muralla, entre humo.",
    "El 20 de septiembre de 1870, las tropas italianas entraron en Roma por una brecha en la muralla. Se acababan los Estados Pontificios.",
  ),
  fabrica: art(
    "Adolph Menzel - Eisenwalzwerk - Google Art Project.jpg",
    "La fundición de hierro",
    "Adolph Menzel",
    "1872-1875",
    "Alte Nationalgalerie, Berlín",
    "Pintura del interior oscuro de una fábrica con obreros que manejan una pieza de hierro al rojo vivo.",
    "Obreros en una fábrica alemana del siglo XIX: jornadas de catorce horas, sin descanso ni seguros. Es el mundo al que respondió la «Rerum novarum».",
  ),
  kolbe: photo(
    "Fr.Maximilian Kolbe 1939.jpg",
    "Fotografía en blanco y negro de un fraile con gafas redondas, barba y hábito.",
    "Maximiliano Kolbe en 1939. Dos años después ofreció su vida en Auschwitz a cambio de la de un padre de familia.",
  ),
  concilio: photo(
    "Second Vatican Council by Lothar Wolleh 005.jpg",
    "Fotografía de la nave de San Pedro llena de obispos con mitras blancas sentados en gradas.",
    "Obispos de todo el mundo reunidos en la basílica de San Pedro durante el Concilio Vaticano II (1962-1965). Foto de Lothar Wolleh.",
  ),
  wesley: art(
    "John Wesley by George Romney.jpg",
    "John Wesley",
    "George Romney",
    "1789",
    "Wikimedia Commons",
    "Retrato de un anciano clérigo de pelo blanco largo, vestido de negro con alzacuellos blanco.",
    "John Wesley, fundador del metodismo, que predicó al aire libre por toda Inglaterra durante más de cincuenta años.",
  ),
  azusa: photo(
    "AFM on azusa street.jpg",
    "Fotografía antigua de un edificio de madera sencillo en una calle.",
    "La misión de la calle Azusa, en Los Ángeles, donde en 1906 empezó el movimiento pentecostal.",
  ),
  yamoussoukro: photo(
    "Basilique notre Dame de la Paix de Yamoussoukro 16.jpg",
    "Enorme basílica blanca con una gran cúpula y columnatas, rodeada de palmeras.",
    "La basílica de Nuestra Señora de la Paz, en Yamusukro (Costa de Marfil), consagrada en 1990. Es una de las iglesias más grandes del mundo.",
  ),
  sagradaFamilia: photo(
    "Sagrada Familia, Barcelona (P1170676).jpg",
    "Gran templo con torres altísimas de piedra y grúas de construcción.",
    "La Sagrada Familia de Barcelona, de Antoni Gaudí, en construcción desde 1882. En 2026, centenario de la muerte de Gaudí, el papa León XIV bendijo su torre más alta.",
  ),
};

export const characters: Chapter["characters"] = {
  ...s7Characters,
  leonXIII: {
    name: "León XIII",
    role: "Papa",
    dates: "1810 – 1903",
    text: "Vincenzo Pecci fue elegido papa en 1878, con 67 años, y muchos pensaron que sería un papa de transición. Gobernó la Iglesia 25 años. Su encíclica «Rerum novarum» (1891) inauguró la doctrina social de la Iglesia.",
  },
  kolbe: {
    name: "Maximiliano Kolbe",
    role: "Franciscano, mártir de Auschwitz",
    dates: "1894 – 1941",
    text: "Fraile franciscano polaco, fundó una gran editorial católica y fue misionero en Japón. Detenido por los nazis, en Auschwitz se ofreció a morir en lugar de un padre de familia condenado. Murió en una celda de hambre. Juan Pablo II lo canonizó en 1982.",
    image: "kolbe",
  },
  juanXXIII: {
    name: "Juan XXIII",
    role: "Papa",
    dates: "1881 – 1963",
    text: "Angelo Roncalli, hijo de campesinos del norte de Italia, fue diplomático del Vaticano en Bulgaria, Turquía y Francia, donde ayudó a salvar a judíos durante la guerra. Elegido papa en 1958 con 76 años, convocó el Concilio Vaticano II. Le llamaron «el papa bueno».",
  },
  romero: {
    name: "Óscar Romero",
    role: "Arzobispo de San Salvador",
    dates: "1917 – 1980",
    text: "Considerado un obispo conservador, cambió tras el asesinato de un sacerdote amigo y se convirtió en la voz de los pobres y de las víctimas de la violencia en El Salvador. Fue asesinado mientras celebraba misa el 24 de marzo de 1980. El papa Francisco lo canonizó en 2018.",
  },
};

export const library: Library = { ...s7Library, images, characters, places };
