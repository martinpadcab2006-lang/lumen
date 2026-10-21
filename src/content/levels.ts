import type { SchoolAudience } from "./chapter-types";

export type LevelSlug = SchoolAudience;

export type Trimester = 1 | 2 | 3;

/** Un tema de la programación, esté escrito o no. */
export type TemaSummary = {
  slug: string;
  number: number;
  trimester: Trimester;
  title: string;
  summary: string;
  /** Capítulo de la serie de historia que va dentro del tema. */
  history?: string;
  /** Bloques de saberes (Primaria y ESO) o competencias específicas (Bachillerato). */
  curriculum: string;
};

export type Level = {
  slug: LevelSlug;
  name: string;
  ages: string;
  intro: string;
  programme: readonly TemaSummary[];
  tools: readonly { href: string; title: string; howTo: string }[];
};

const tema = (
  number: number,
  trimester: Trimester,
  slug: string,
  title: string,
  summary: string,
  curriculum: string,
  history?: string,
): TemaSummary => ({ number, trimester, slug, title, summary, curriculum, history });

/**
 * La sección de colegios se cuenta desde la fe católica, como la asignatura de Religión.
 * Sigue el currículo de Religión Católica (Resolución de 21 de junio de 2022, BOE 24-6-2022):
 * Primaria en tres ciclos, ESO en dos y Bachillerato. Tres temas por trimestre (cinco en Bachillerato).
 */
export const levels: readonly Level[] = [
  {
    slug: "primaria-1",
    name: "Primaria 1.º–2.º",
    ages: "De 6 a 8 años",
    intro: "Descubrir que Dios nos quiere, conocer a Jesús, a María y a José y cómo vivían, de la mano de Natán, un niño de Nazaret.",
    programme: [
      tema(1, 1, "nos-conocemos", "Nos conocemos: Dios nos regala el mundo", "Presentarnos, sentirnos queridos, todos distintos e iguales; la creación y cuidar la naturaleza.", "A, C"),
      tema(2, 1, "el-pueblo-de-jesus", "El pueblo de Jesús", "La familia de Nazaret: casa, trabajo, comida y oración.", "A, B", "el-mundo-de-jesus"),
      tema(3, 1, "esperamos-la-navidad", "Esperamos la Navidad", "Adviento, María y José, Belén, pastores y magos; el belén en casa.", "B"),
      tema(4, 2, "jesus-crece-y-tiene-amigos", "Jesús crece y tiene amigos", "Jesús niño, su bautismo y los doce amigos que eligió.", "B", "jesus-de-nazaret"),
      tema(5, 2, "querernos-y-perdonar", "Jesús nos enseña a querernos y a perdonar", "La oveja perdida, el buen samaritano, los milagros y cómo hacer las paces.", "A, C"),
      tema(6, 2, "cuaresma-y-semana-santa", "Cuaresma y Semana Santa", "Ramos, Última Cena y cruz; las procesiones de mi pueblo.", "B"),
      tema(7, 3, "jesus-ha-resucitado", "¡Jesús ha resucitado!", "La alegría de la Pascua y sus signos: la luz y el agua.", "B"),
      tema(8, 3, "la-iglesia-nuestra-familia", "La Iglesia, nuestra gran familia", "El bautismo, la parroquia, el domingo y el Padrenuestro.", "A, B"),
      tema(9, 3, "maria-madre-de-jesus", "María, madre de Jesús", "Mayo y la Virgen en las fiestas de España y de mi pueblo.", "B, C"),
    ],
    tools: [{ href: "/quiz", title: "Quiz", howTo: "Para jugar todos juntos con el proyector, leyendo las preguntas en voz alta." }],
  },
  {
    slug: "primaria-2",
    name: "Primaria 3.º–4.º",
    ages: "De 8 a 10 años",
    intro: "Leer la Biblia por primera vez, conocer el país de Jesús y vivir el año de la Iglesia, sus fiestas y sus sacramentos.",
    programme: [
      tema(1, 1, "llamados-por-nuestro-nombre", "Llamados por nuestro nombre", "Vocación y alianza: Abraham, Moisés, Samuel, los reyes y los profetas.", "A, B"),
      tema(2, 1, "el-pais-donde-vivio-jesus", "El país donde vivió Jesús", "Roma, Herodes, el Templo, la sinagoga y la espera del Mesías.", "B", "el-mundo-de-jesus"),
      tema(3, 1, "adviento-y-navidad", "El año de la Iglesia: Adviento y Navidad", "El calendario litúrgico y sus colores; la Navidad en los evangelios.", "B"),
      tema(4, 2, "jesus-y-el-reino-de-dios", "Jesús y el Reino de Dios", "Su vida, el bautismo, los apóstoles y el anuncio del Reino.", "B", "jesus-de-nazaret"),
      tema(5, 2, "jesus-perdona", "Jesús perdona y nos enseña a cuidar", "El hijo pródigo, la reconciliación y el cuidado de la casa común.", "B, C"),
      tema(6, 2, "semana-santa-en-el-arte", "Semana Santa en el arte", "Pasión y muerte de Jesús; imaginería y procesiones.", "B"),
      tema(7, 3, "los-primeros-cristianos", "Los primeros cristianos", "Pentecostés, Pedro y Pablo y las primeras comunidades.", "B", "los-primeros-cristianos"),
      tema(8, 3, "eucaristia-y-oracion", "La Eucaristía y la oración", "La misa parte a parte; alabar, pedir, dar gracias; los salmos.", "A, B"),
      tema(9, 3, "maria-y-mi-diocesis", "María y el patrimonio de mi diócesis", "María, Madre de la Iglesia; iglesias, ermitas y fiestas cercanas.", "B"),
    ],
    tools: [
      { href: "/mapa", title: "Mapa con línea del tiempo", howTo: "Para ver en la pizarra digital cómo se extiende el cristianismo." },
      { href: "/quiz", title: "Quiz", howTo: "Para jugar por equipos al final del tema." },
    ],
  },
  {
    slug: "primaria-3",
    name: "Primaria 5.º–6.º",
    ages: "De 10 a 12 años",
    intro: "Pensar la dignidad de las personas, conocer otras religiones y entender qué creen y celebran los cristianos.",
    programme: [
      tema(1, 1, "iguales-en-dignidad", "Iguales en dignidad", "Dignidad y derechos humanos, también en las redes; las grandes preguntas, la ciencia y la fe.", "A, C"),
      tema(2, 1, "creyentes-en-un-mundo-diverso", "Creyentes en un mundo diverso", "Otras religiones, sus ritos de nacimiento, boda y muerte, y cómo convivir.", "B, C"),
      tema(3, 1, "navidad-dios-se-hace-hombre", "Navidad: Dios se hace hombre", "La encarnación y la Navidad en el arte de distintas épocas.", "B"),
      tema(4, 2, "jesus-y-los-ultimos", "Jesús y los últimos", "Quién fue Jesús, su preferencia por los excluidos y las bienaventuranzas.", "B, C", "jesus-de-nazaret"),
      tema(5, 2, "la-iglesia-que-ayuda", "La Iglesia que ayuda", "Cáritas, Manos Unidas y otros proyectos de compromiso social.", "C"),
      tema(6, 2, "muerte-y-resurreccion", "Muerte y resurrección", "La Pascua en los evangelios y en las tradiciones de España.", "B"),
      tema(7, 3, "de-los-apostoles-a-los-martires", "De los apóstoles a los mártires", "Las primeras comunidades y las persecuciones.", "B", "los-primeros-cristianos"),
      tema(8, 3, "el-credo-y-los-sacramentos", "Creemos: el Credo y los sacramentos", "Dios Padre, Hijo y Espíritu Santo; los siete sacramentos y sus signos.", "B"),
      tema(9, 3, "mujeres-de-la-biblia", "Mujeres de la Biblia y de la Iglesia", "María, modelo de creyente, y otras mujeres de ayer y de hoy.", "B"),
    ],
    tools: [
      { href: "/mapa", title: "Mapa con línea del tiempo", howTo: "Para situar dónde y cuándo llegó el cristianismo a cada lugar." },
      { href: "/comparador", title: "Comparador de iglesias", howTo: "Para ver en qué se parecen y se diferencian las iglesias cristianas." },
    ],
  },
  {
    slug: "eso-1",
    name: "ESO 1.º–2.º",
    ages: "De 12 a 14 años",
    intro: "Conocer a Jesús de Nazaret en su mundo, su mensaje y cómo nació la Iglesia, de Galilea al Imperio romano.",
    programme: [
      tema(1, 1, "quien-soy-y-que-busco", "Quién soy y qué busco", "Identidad, grandes preguntas, el hecho religioso y cómo leer la Biblia.", "A, B"),
      tema(2, 1, "el-mundo-en-el-que-nacio-jesus", "El mundo en el que nació Jesús", "Roma, Herodes, el Templo, Galilea y los grupos religiosos.", "B", "el-mundo-de-jesus"),
      tema(3, 1, "jesus-de-nazaret", "Jesús de Nazaret", "Quién fue, qué dicen los evangelios y qué sabe la historia; la Navidad.", "B", "jesus-de-nazaret"),
      tema(4, 2, "el-reino-de-dios", "El Reino de Dios", "Parábolas, bienaventuranzas y milagros.", "B, C"),
      tema(5, 2, "muerte-y-resurreccion", "Muerte y resurrección", "La Pascua en los evangelios y en el arte.", "B"),
      tema(6, 2, "primeros-cristianos-y-martires", "Los primeros cristianos y los mártires", "Pentecostés, Pedro y Pablo, Nerón y la libertad religiosa hoy.", "B, C", "los-primeros-cristianos"),
      tema(7, 3, "religion-del-imperio", "De perseguidos a religión del Imperio", "Constantino, Nicea y el Credo, Teodosio, san Agustín.", "B", "religion-del-imperio"),
      tema(8, 3, "la-iglesia-comunidad-que-cuida", "La Iglesia, comunidad que cuida", "Cómo se organiza la Iglesia, sus sacramentos y sus proyectos solidarios y ecológicos.", "B, C"),
      tema(9, 3, "el-arte-cristiano-de-mi-ciudad", "El arte cristiano de mi ciudad", "Románico, gótico y barroco cerca de casa; tarea final: una ruta guiada.", "B"),
    ],
    tools: [
      { href: "/mapa", title: "Mapa con línea del tiempo", howTo: "Para ver cómo se extiende el cristianismo desde Jerusalén." },
      { href: "/comparador", title: "Comparador de iglesias", howTo: "Para trabajar por parejas en qué se parecen y en qué se diferencian." },
      { href: "/quiz", title: "Quiz", howTo: "Para repasar al final de un tema." },
    ],
  },
  {
    slug: "eso-2",
    name: "ESO 3.º–4.º",
    ages: "De 14 a 16 años",
    intro: "Recorrer la historia del cristianismo de la Edad Media a hoy y pensar la dignidad, la conciencia y el propio proyecto de vida.",
    programme: [
      tema(1, 1, "dignidad-humana-y-libertad", "Dignidad humana y libertad", "La visión cristiana de la persona y los derechos humanos.", "A"),
      tema(2, 1, "la-edad-media-cristiana", "La Edad Media cristiana", "San Benito y los monasterios, catedrales, universidades, cruzadas y el Cisma de Oriente.", "B", "la-edad-media"),
      tema(3, 1, "reforma-y-contrarreforma", "Reforma y Contrarreforma", "Lutero, Trento y la mística española: Teresa de Jesús y Juan de la Cruz.", "B", "reforma-y-contrarreforma"),
      tema(4, 2, "hasta-los-confines-del-mundo", "Hasta los confines del mundo", "Las misiones en América y Asia; Bartolomé de las Casas.", "B, C", "hasta-los-confines"),
      tema(5, 2, "fe-razon-y-cuestion-social", "Fe, razón y cuestión social", "Galileo, la Ilustración, la Rerum novarum y la Doctrina Social de la Iglesia.", "A, C", "razones-y-revoluciones"),
      tema(6, 2, "el-siglo-xx", "El siglo XX", "Guerras, totalitarismos, mártires y el Concilio Vaticano II.", "B", "el-siglo-xx"),
      tema(7, 3, "el-cristianismo-hoy", "El cristianismo hoy en el mundo", "África, América Latina y Asia; las iglesias cristianas y el ecumenismo.", "B", "el-cristianismo-hoy"),
      tema(8, 3, "elegir-bien-en-la-era-digital", "Elegir bien en la era digital", "Conciencia y moral cristiana; redes, tecnología e IA.", "A, C"),
      tema(9, 3, "mi-proyecto-de-vida", "Mi proyecto de vida", "Vocación, compromiso social y santos jóvenes de hoy.", "A"),
    ],
    tools: [
      { href: "/mapa", title: "Mapa con línea del tiempo", howTo: "Para situar concilios, cismas y misiones." },
      { href: "/comparador", title: "Comparador de iglesias", howTo: "Para el tema de la Reforma y el del cristianismo hoy." },
    ],
  },
  {
    slug: "bachillerato",
    name: "Bachillerato",
    ages: "De 16 a 18 años",
    intro: "Pensar las grandes preguntas desde la fe cristiana: el sentido, la relación entre fe y razón, la ética y el compromiso con la sociedad.",
    programme: [
      tema(1, 1, "la-pregunta-por-el-sentido", "La pregunta por el sentido", "Qué es la experiencia religiosa y por qué el ser humano se pregunta por Dios.", "1, 5"),
      tema(2, 1, "que-es-el-ser-humano", "¿Qué es el ser humano?", "Antropología cristiana: dignidad, libertad y relaciones.", "1, 2"),
      tema(3, 1, "las-religiones-del-mundo", "Las religiones del mundo", "Qué tiene de propio el cristianismo y cómo dialogar con otras creencias.", "5"),
      tema(4, 1, "jesus-historia-y-fe", "Jesús de Nazaret: historia y fe", "El contexto, las fuentes y la fe de la Iglesia en Cristo.", "6", "el-mundo-de-jesus"),
      tema(5, 1, "el-nacimiento-de-la-iglesia", "El nacimiento de la Iglesia", "Primeras comunidades, mártires, Nicea y el Credo.", "4, 6", "los-primeros-cristianos"),
      tema(6, 2, "fe-y-razon", "Fe y razón", "En qué se diferencian los métodos de la teología y de la ciencia.", "6"),
      tema(7, 2, "fe-y-ciencia-en-la-historia", "Fe y ciencia en la historia", "Galileo, Darwin y Lemaître, el sacerdote del Big Bang.", "6", "razones-y-revoluciones"),
      tema(8, 2, "fe-y-arte", "Fe y arte", "Leer cuadros, templos y música sobre la Biblia y la vida de Jesús.", "4"),
      tema(9, 2, "iglesia-y-poder", "Iglesia y poder en la historia", "De Constantino a la Reforma; Iglesia y Estado, laicidad.", "3", "religion-del-imperio"),
      tema(10, 2, "doctrina-social-de-la-iglesia", "Doctrina Social de la Iglesia", "Trabajo, economía, bien común y pobreza.", "3"),
      tema(11, 3, "iglesia-y-democracia", "Iglesia y democracia", "El Vaticano II, la libertad religiosa y la Iglesia en la sociedad plural.", "3", "el-siglo-xx"),
      tema(12, 3, "bioetica", "Bioética y dignidad de la vida", "Grandes debates de hoy desde la visión cristiana.", "1, 3"),
      tema(13, 3, "ecologia-integral", "Ecología integral", "La encíclica Laudato si' y el cuidado de la casa común.", "3"),
      tema(14, 3, "cristianismo-en-el-siglo-xxi", "El cristianismo en el siglo XXI", "Secularización, nuevas comunidades y un cristianismo cada vez más del Sur.", "4, 5", "el-cristianismo-hoy"),
      tema(15, 3, "mi-proyecto-de-vida", "Mi proyecto de vida", "Vocación, compromiso y sentido; tarea final del curso.", "1, 2"),
    ],
    tools: [
      { href: "/comparador", title: "Comparador de iglesias", howTo: "Para el tema de las religiones y el del cristianismo hoy." },
      { href: "/mapa", title: "Mapa con línea del tiempo", howTo: "Para situar concilios, cismas y misiones." },
    ],
  },
];

export const findLevel = (slug: string): Level | undefined => levels.find((level) => level.slug === slug);

export type Unit = { title: string; summary: string };

/** La sección universitaria es histórica y cultural. */
export const universityUnits: readonly Unit[] = [
  { title: "El Jesús histórico", summary: "Qué podemos saber de Jesús con los métodos de la historia, y con qué fuentes." },
  { title: "Cómo se formó la Biblia", summary: "Manuscritos, traducciones y por qué cada iglesia tiene un canon distinto." },
  { title: "Concilios y credos", summary: "De Nicea (325) al Vaticano II (1962-1965): cómo se fijaron las doctrinas." },
  { title: "Los grandes cismas", summary: "Calcedonia (451), el Gran Cisma (1054) y la Reforma (1517)." },
  { title: "Cristianismo y arte", summary: "Del arte de las catacumbas al barroco: cómo leer una imagen religiosa." },
  { title: "El cristianismo en la historia de España", summary: "De la Hispania romana a la España actual, pasando por al-Ándalus y la Inquisición." },
];
