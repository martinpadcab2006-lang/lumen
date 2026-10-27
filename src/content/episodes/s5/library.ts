import type { Chapter, Library, Place } from "../../chapter-types";
import { characters as s4Characters, images as s4Images, library as s4Library, med as s4Med } from "../s4/library";

export const med = {
  ...s4Med,
  belen: { name: "Belén", lat: 31.705, lon: 35.2 },
  qumran: { name: "Qumrán", lat: 31.741, lon: 35.459 },
  cesarea: { name: "Cesarea Marítima", lat: 32.5, lon: 34.89 },
  lyon: { name: "Lugdunum (Lyon)", lat: 45.76, lon: 4.84 },
  capadocia: { name: "Cesarea de Capadocia", lat: 38.72, lon: 35.49 },
  calcedonia: { name: "Calcedonia", lat: 40.98, lon: 29.03 },
  trento: { name: "Trento", lat: 46.07, lon: 11.12 },
  toledo: { name: "Toledo", lat: 39.86, lon: -4.02 },
  alcala: { name: "Alcalá de Henares", lat: 40.48, lon: -3.36 },
  babilonia: { name: "Babilonia", lat: 32.54, lon: 44.42 },
  sevilla: { name: "Hispalis (Sevilla)", lat: 37.39, lon: -5.98 },
  avila: { name: "Ávila", lat: 40.66, lon: -4.7 },
} satisfies Record<string, Place>;

export const pick = <K extends keyof typeof med>(...keys: K[]): Record<K, Place> =>
  Object.fromEntries(keys.map((key) => [key, med[key]])) as Record<K, Place>;

const art = (commonsFile: string, title: string, artist: string, date: string, museum: string, alt: string, caption: string) =>
  ({ kind: "arte", commonsFile, title, artist, date, museum, alt, caption }) as const;

const photo = (commonsFile: string, alt: string, caption: string) =>
  ({ kind: "foto", commonsFile, alt, caption, credit: "Wikimedia Commons" }) as const;

export const images: Chapter["images"] = {
  ...s4Images,
  rolloIsaias: photo(
    "Great Isaiah Scroll.jpg",
    "Largo rollo de pergamino amarillento desenrollado, con columnas de texto en hebreo.",
    "El gran rollo de Isaías, hallado en Qumrán en 1947. Se copió hacia el año 125 a. C. y es casi idéntico al texto que se usa hoy.",
  ),
  sinaitico: photo(
    "Codex Sinaiticus Matthew 6,4-32.JPG",
    "Página de pergamino con cuatro columnas de letras griegas mayúsculas.",
    "Una página del Códice Sinaítico, del siglo IV: una de las Biblias completas más antiguas del mundo. Está escrita en griego.",
  ),
  gutenberg: photo(
    "Gutenberg Bible WDL4102.jpg",
    "Página de un libro antiguo impreso en dos columnas de letra gótica, con iniciales decoradas a mano.",
    "La Biblia de Gutenberg (Maguncia, hacia 1455), el primer gran libro impreso con tipos móviles en Europa. Era la Vulgata de Jerónimo, en latín.",
  ),
  jeronimo: art(
    "Saint Jerome Writing-Caravaggio (1605-6).jpg",
    "San Jerónimo escribiendo",
    "Caravaggio",
    "1605-1606",
    "Galería Borghese, Roma",
    "Pintura de un anciano calvo y delgado, inclinado sobre un libro, con una calavera sobre la mesa.",
    "Jerónimo tradujo la Biblia al latín en Belén. La calavera recuerda que la vida es breve: un tema muy del gusto del Barroco.",
  ),
  moises: art(
    "Rembrandt - Moses with the Ten Commandments - Google Art Project.jpg",
    "Moisés con las tablas de la Ley",
    "Rembrandt",
    "1659",
    "Gemäldegalerie, Berlín",
    "Pintura de un hombre con barba que levanta sobre su cabeza dos tablas de piedra con letras hebreas.",
    "Moisés con los Diez Mandamientos. La Ley que Dios da a su pueblo en el Sinaí es el corazón del Antiguo Testamento.",
  ),
  muratori: photo(
    "Muratorian Fragment.jpg",
    "Página de pergamino antiguo con texto latino en letra pequeña y apretada.",
    "El fragmento de Muratori, en la Biblioteca Ambrosiana de Milán. Es una de las listas más antiguas de libros del Nuevo Testamento.",
  ),
  agustinBotticelli: art(
    "Sandro Botticelli - St Augustine - WGA02709.jpg",
    "San Agustín en su estudio",
    "Sandro Botticelli",
    "hacia 1480",
    "Iglesia de Ognissanti, Florencia",
    "Fresco de un obispo con barba que mira hacia arriba con la mano en el pecho, rodeado de libros e instrumentos.",
    "Botticelli pintó a Agustín en el momento en que, según una leyenda, tuvo una visión mientras escribía. Es el Padre de la Iglesia más influyente de Occidente.",
  ),
  jerarcas: art(
    "Icoana Sfintii Trei Ierarhi.jpg",
    "Los tres santos jerarcas",
    "Icono ortodoxo",
    "Sin fecha",
    "Wikimedia Commons",
    "Icono de tres obispos con barba y vestiduras con cruces, de pie uno junto a otro y con libros.",
    "Basilio el Grande, Gregorio Nacianceno y Juan Crisóstomo, los tres grandes Padres de la Iglesia de lengua griega.",
  ),
  rublev: art(
    "Angelsatmamre-trinity-rublev-1410.jpg",
    "La Trinidad",
    "Andréi Rubliov",
    "hacia 1411-1425",
    "Galería Tretiakov, Moscú",
    "Icono de tres ángeles sentados alrededor de una mesa con una copa, en tonos dorados y azules.",
    "Los tres ángeles que visitaron a Abraham, leídos como imagen de la Trinidad. Es el icono más famoso de Rusia.",
  ),
  trinidadGreco: art(
    "La Trinidad (El Greco, 1577-1579).jpg",
    "La Trinidad",
    "El Greco",
    "1577-1579",
    "Museo del Prado, Madrid",
    "Pintura de un anciano con mitra que sostiene el cuerpo muerto de Cristo, rodeado de ángeles, con una paloma blanca encima.",
    "El Padre sostiene al Hijo muerto, y sobre ellos vuela el Espíritu Santo en forma de paloma. El Greco la pintó para un convento de Toledo.",
  ),
  masaccio: art(
    "Masaccio - Trinity - Santa Maria Novella.jpg",
    "La Trinidad",
    "Masaccio",
    "1425-1428",
    "Santa Maria Novella, Florencia",
    "Fresco de Cristo crucificado bajo una bóveda pintada en perspectiva, con el Padre detrás y una paloma entre ambos.",
    "Uno de los primeros cuadros con perspectiva matemática de la historia. El Padre sostiene la cruz; entre él y el Hijo, la paloma del Espíritu.",
  ),
  deesis: photo(
    "Christ Pantocrator Deesis mosaic Hagia Sophia.jpg",
    "Mosaico dorado del rostro de Cristo con barba, de mirada serena, que bendice con una mano.",
    "Cristo en el mosaico de la Deesis, en Santa Sofía de Estambul (siglo XIII). Los bizantinos intentaron expresar a la vez su humanidad y su divinidad.",
  ),
  calcedonia: art(
    "Fourth ecumenical council of chalcedon - 1876.jpg",
    "El Concilio de Calcedonia",
    "Vasili Súrikov",
    "1876",
    "Pintado para la catedral de Cristo Salvador, Moscú",
    "Pintura de una gran asamblea de obispos con túnicas, sentados en semicírculo alrededor de un altar.",
    "En el año 451, unos 500 obispos reunidos en Calcedonia definieron que Cristo es una sola persona con dos naturalezas, divina y humana.",
  ),
  vladimir: art(
    "Virgin of Vladimir.jpg",
    "La Virgen de Vladímir",
    "Icono bizantino",
    "hacia 1130",
    "Galería Tretiakov, Moscú",
    "Icono de la Virgen que abraza al Niño, mejilla con mejilla, sobre fondo dorado.",
    "María como Theotókos, «Madre de Dios», el título que defendió el Concilio de Éfeso en el 431.",
  ),
  nagHammadi: photo(
    "Nag Hammadi Codex II.jpg",
    "Libro antiguo abierto con tapas de cuero y hojas de papiro escritas en copto.",
    "Uno de los códices de Nag Hammadi, hallados en Egipto en 1945. Contienen textos gnósticos, como el Evangelio de Tomás.",
  ),
  sacramentos: art(
    "Rogier van der Weyden - Seven Sacraments Altarpiece - WGA25602.jpg",
    "Retablo de los siete sacramentos",
    "Rogier van der Weyden",
    "hacia 1445-1450",
    "Museo Real de Bellas Artes de Amberes",
    "Tríptico del interior de una catedral gótica, con la crucifixión en el centro y escenas de bautizos, bodas y misas a los lados.",
    "Los siete sacramentos dentro de una iglesia: bautismo, confirmación y confesión a la izquierda; la eucaristía en el centro; orden, matrimonio y unción a la derecha.",
  ),
  fractio: photo(
    "Catacombe di Priscilla, Rome - Fresco of a Christian Agape feast - Fractio panis - Greek chapel - 2nd - 4th century.jpg",
    "Pintura antigua y desgastada de varias personas sentadas a una mesa semicircular con panes y peces.",
    "La «fracción del pan», en la catacumba de Priscila (Roma). Una de las imágenes más antiguas de una comida cristiana.",
  ),
  orante: photo(
    "Orante (particolare), catacombe di priscilla, cubicolo della velatio, roma (metà III secolo).jpg",
    "Fresco antiguo de una mujer con velo y túnica, con los brazos abiertos y levantados.",
    "Una orante en la catacumba de Priscila (mediados del siglo III). Los primeros cristianos rezaban de pie, con los brazos abiertos.",
  ),
  santaSofia: photo(
    "Hagia Sophia Interior Dome.jpg",
    "Interior de una enorme cúpula con ventanas en la base y medallones con letras árabes.",
    "La cúpula de Santa Sofía. Cuentan que los enviados del príncipe de Kiev, al asistir allí a la liturgia, dijeron: «No sabíamos si estábamos en el cielo o en la tierra».",
  ),
};

export const characters: Chapter["characters"] = {
  ...s4Characters,
  jeronimo: {
    name: "Jerónimo",
    role: "Traductor de la Biblia",
    dates: "c. 347 – 420",
    text: "Nacido en Estridón, en la actual Eslovenia o Croacia. Estudió en Roma, fue secretario del papa Dámaso y pasó sus últimos 34 años en Belén. Aprendió hebreo para traducir la Biblia al latín: su versión, la Vulgata, se usó en Occidente durante mil años. Tenía fama de genio y de mal carácter.",
    image: "jeronimo",
  },
  ireneo: {
    name: "Ireneo de Lyon",
    role: "Obispo y teólogo",
    dates: "c. 130 – c. 202",
    text: "Nacido en Asia Menor, de niño escuchó a Policarpo, discípulo del apóstol Juan. Fue obispo de Lyon, en la Galia. Escribió «Contra las herejías», contra los gnósticos, y es el primero que defiende que hay cuatro evangelios, ni más ni menos.",
  },
  atanasio: {
    name: "Atanasio de Alejandría",
    role: "Obispo y defensor de Nicea",
    dates: "c. 296 – 373",
    text: "Estuvo en el Concilio de Nicea como joven diácono y fue obispo de Alejandría durante 45 años, de los que pasó 17 en cinco destierros por oponerse a los arrianos. En el año 367 escribió la primera lista que coincide exactamente con los 27 libros del Nuevo Testamento.",
  },
  origenes: {
    name: "Orígenes",
    role: "Teólogo de Alejandría",
    dates: "c. 185 – c. 254",
    text: "El pensador cristiano más prolífico de la Antigüedad: se le atribuyen cientos de obras. Comparó las versiones de la Biblia en seis columnas, la Hexapla. Fue torturado en la persecución de Decio y murió poco después. Algunas de sus ideas se condenaron siglos más tarde.",
  },
  arrio: {
    name: "Arrio",
    role: "Presbítero de Alejandría",
    dates: "c. 256 – 336",
    text: "Predicador muy popular, enseñaba que el Hijo fue creado por el Padre: «hubo un tiempo en que no existía». El Concilio de Nicea lo condenó, pero sus ideas se extendieron durante décadas, sobre todo entre los pueblos germánicos.",
  },
};

export const library: Library = { ...s4Library, images, characters, places: med };
