/**
 * El viaje guiado del mapa: cada parada mueve la cámara, enciende unos lugares
 * y, a veces, dibuja una ruta. Los puntos que aparecen son los hitos de
 * milestones.ts cuyo año ya ha llegado.
 */
export type LonLat = readonly [lon: number, lat: number];

export type JourneyView = { center: LonLat; zoom: number };

export type JourneyStop = {
  id: string;
  /** Año que marca el mapa en esta parada. Los negativos son antes de Cristo. */
  year: number;
  kicker: string;
  title: string;
  text: string;
  view: JourneyView;
  /** Lugares de milestones.ts que se encienden en esta parada. */
  places: readonly string[];
  route?: { label: string; points: readonly LonLat[] };
};

export const journey: readonly JourneyStop[] = [
  {
    id: "jerusalen",
    year: 30,
    kicker: "Hacia el año 30",
    title: "Todo empieza en Jerusalén",
    text: "Jesús muere crucificado. Poco después, sus discípulos anuncian que ha resucitado y forman la primera comunidad. Son un puñado de judíos en una ciudad de provincias del Imperio romano.",
    view: { center: [35.3, 31.9], zoom: 22 },
    places: ["Jerusalén"],
  },
  {
    id: "antioquia",
    year: 40,
    kicker: "Hacia el año 40",
    title: "«Cristianos»: un nombre nuevo",
    text: "El mensaje sale de Jerusalén hacia el norte. En Antioquía, una de las grandes ciudades del Imperio, llaman «cristianos» a los seguidores de Jesús por primera vez, según los Hechos de los Apóstoles.",
    view: { center: [35.6, 34.1], zoom: 11 },
    places: ["Jerusalén", "Antioquía"],
    route: { label: "De Jerusalén a Antioquía", points: [[35.23, 31.78], [35.5, 33.89], [36.16, 36.2]] },
  },
  {
    id: "pablo",
    year: 54,
    kicker: "Años 50",
    title: "Los viajes de Pablo",
    text: "Pablo de Tarso recorre Asia Menor y Grecia fundando comunidades en las ciudades. Esta es la ruta de su segundo viaje, hacia el año 50. Después escribirá cartas a esas comunidades, que hoy forman parte del Nuevo Testamento.",
    view: { center: [29.5, 37.6], zoom: 6 },
    places: ["Antioquía", "Corinto", "Éfeso"],
    route: {
      label: "Segundo viaje de Pablo",
      points: [
        [36.16, 36.2],
        [34.89, 36.92],
        [32.5, 37.6],
        [26.16, 39.76],
        [24.29, 41.01],
        [22.94, 40.64],
        [23.73, 37.98],
        [22.88, 37.91],
        [27.34, 37.94],
        [34.9, 32.5],
        [35.23, 31.78],
      ],
    },
  },
  {
    id: "roma",
    year: 64,
    kicker: "Año 64",
    title: "Hasta Roma, el corazón del Imperio",
    text: "Pablo llega a Roma como prisionero, tras un naufragio en Malta. En el año 64, Nerón persigue a los cristianos de la ciudad. Según la tradición, Pedro y Pablo mueren mártires en Roma por esos años.",
    view: { center: [23, 36.5], zoom: 4.2 },
    places: ["Roma"],
    route: {
      label: "Viaje de Pablo a Roma",
      points: [
        [34.9, 32.5],
        [35.37, 33.56],
        [29.98, 36.26],
        [24.8, 34.93],
        [14.4, 35.9],
        [15.29, 37.08],
        [15.65, 38.11],
        [14.12, 40.82],
        [12.5, 41.9],
      ],
    },
  },
  {
    id: "imperio",
    year: 380,
    kicker: "Del año 301 al 380",
    title: "De perseguidos a religión del Imperio",
    text: "Armenia es el primer reino cristiano (301). Con el Edicto de Milán (313), Roma deja de perseguirlos; en Nicea (325) se reúne el primer gran concilio, y en 380 Teodosio hace del cristianismo la religión oficial del Imperio.",
    view: { center: [28, 41], zoom: 3.4 },
    places: ["Armenia", "Milán", "Nicea", "Tesalónica"],
  },
  {
    id: "etiopia",
    year: 380,
    kicker: "Hacia el año 330",
    title: "También en África",
    text: "Mientras tanto, el rey Ezana de Aksum, en la actual Etiopía, se convierte. La iglesia etíope es una de las más antiguas del mundo y sigue viva hoy.",
    view: { center: [36, 22], zoom: 3.6 },
    places: ["Aksum (Etiopía)"],
  },
  {
    id: "oeste",
    year: 597,
    kicker: "Siglos V y VI",
    title: "Hacia los confines de Europa",
    text: "Cae el Imperio de Occidente, pero el cristianismo sigue avanzando: Patricio en Irlanda, el rey visigodo Recaredo en Toledo (589) y el monje Agustín en Inglaterra (597).",
    view: { center: [-3, 48], zoom: 4.2 },
    places: ["Irlanda", "Toledo", "Canterbury"],
  },
  {
    id: "santiago",
    year: 825,
    kicker: "Siglo IX",
    title: "Nace el Camino de Santiago",
    text: "Según la tradición, se descubre en Galicia el sepulcro del apóstol Santiago. Durante siglos, peregrinos de toda Europa cruzarán el norte de España para llegar hasta él.",
    view: { center: [-4.8, 42.7], zoom: 16 },
    places: ["Santiago de Compostela"],
    route: {
      label: "Camino francés",
      points: [
        [-1.32, 43.01],
        [-1.64, 42.81],
        [-2.45, 42.47],
        [-3.7, 42.34],
        [-5.57, 42.6],
        [-6.6, 42.55],
        [-8.54, 42.88],
      ],
    },
  },
  {
    id: "cisma",
    year: 1054,
    kicker: "Años 988 y 1054",
    title: "Oriente y Occidente se separan",
    text: "Vladimiro lleva el cristianismo a la Rus de Kiev (988). En 1054, Roma y Constantinopla se excomulgan: nacen por separado la Iglesia católica y la ortodoxa.",
    view: { center: [22, 46], zoom: 3.4 },
    places: ["Kiev", "Constantinopla"],
  },
  {
    id: "america",
    year: 1524,
    kicker: "Desde 1492",
    title: "Al otro lado del océano",
    text: "Tras el viaje de Colón, misioneros españoles y portugueses cruzan el Atlántico. En 1524 llegan a México los primeros doce franciscanos. Hoy el continente americano reúne a casi la mitad de los católicos del mundo.",
    view: { center: [-60, 25], zoom: 1.6 },
    places: ["Ciudad de México"],
    route: {
      label: "Ruta de las flotas a Nueva España",
      points: [
        [-5.98, 37.39],
        [-15.4, 28.1],
        [-61.0, 15.5],
        [-69.9, 18.47],
        [-82.4, 23.1],
        [-96.13, 19.17],
        [-99.13, 19.43],
      ],
    },
  },
  {
    id: "reforma",
    year: 1545,
    kicker: "Siglo XVI",
    title: "La Reforma divide Europa",
    text: "Lutero publica sus tesis en Wittenberg (1517), Enrique VIII rompe con Roma (1534) y Calvino organiza Ginebra (1541). La respuesta católica llega con el Concilio de Trento (1545).",
    view: { center: [7.5, 48.5], zoom: 7 },
    places: ["Wittenberg", "Londres", "Ginebra", "Trento"],
  },
  {
    id: "asia",
    year: 1601,
    kicker: "Desde 1541",
    title: "Hasta Japón y China",
    text: "El navarro Francisco Javier sale de Lisboa, rodea África y llega a la India, a Malaca y a Japón (1549). Después vendrán Filipinas (1565) y la corte del emperador chino, con Matteo Ricci (1601).",
    view: { center: [62, 8], zoom: 1.3 },
    places: ["Kagoshima (Japón)", "Cebú (Filipinas)", "Pekín"],
    route: {
      label: "Viaje de Francisco Javier",
      points: [
        [-9.14, 38.72],
        [-23.5, 14.9],
        [-5, -15],
        [18.47, -34.6],
        [40.73, -15.03],
        [55, 4],
        [73.8, 15.5],
        [80.5, 6.5],
        [102.25, 2.19],
        [114, 14],
        [130.56, 31.6],
      ],
    },
  },
  {
    id: "norte",
    year: 1794,
    kicker: "Siglos XVII y XVIII",
    title: "Norteamérica y más allá",
    text: "Puritanos ingleses llegan en el Mayflower (1620) buscando libertad religiosa. En Corea, unos laicos fundan la Iglesia católica (1784) y misioneros ortodoxos rusos llegan a Alaska (1794).",
    view: { center: [-160, 45], zoom: 1.5 },
    places: ["Plymouth (Massachusetts)", "Corea", "Kodiak (Alaska)"],
  },
  {
    id: "hoy",
    year: 2025,
    kicker: "Hoy",
    title: "Un cristianismo de todos los continentes",
    text: "Los mártires de Uganda (1886), el pentecostalismo de Los Ángeles (1906), el Concilio Vaticano II (1962)… Hoy hay unos 2.300 millones de cristianos, y el África subsahariana ya es la región donde más viven (Pew Research Center, datos de 2020).",
    view: { center: [15, 15], zoom: 1 },
    places: ["Namugongo (Uganda)", "Los Ángeles", "Ciudad del Vaticano"],
  },
];
