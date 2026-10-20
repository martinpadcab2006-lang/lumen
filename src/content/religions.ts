export type ReligionSlug =
  | "hinduismo"
  | "judaismo"
  | "budismo"
  | "confucianismo"
  | "taoismo"
  | "cristianismo"
  | "islam"
  | "sijismo";

export type Religion = {
  slug: ReligionSlug;
  name: string;
  color: string;
  /** Año aproximado de origen. Negativo = antes de Cristo. */
  originYear: number;
  originNote: string;
  originPlace: string;
  founder: string;
  divine: string;
  texts: string;
  worship: string;
  festival: string;
  afterlife: string;
  followers: string;
  symbol: string;
  summary: string;
  /** Peso relativo para el grosor de la banda en la línea del tiempo (1–5). */
  weight: number;
};

export const religions: readonly Religion[] = [
  {
    slug: "hinduismo",
    name: "Hinduismo",
    color: "var(--rel-hinduismo)",
    originYear: -1500,
    originNote: "c. 1500 a. C., con los primeros himnos védicos",
    originPlace: "Valle del Indo y Panyab (actual India y Pakistán)",
    founder: "No tiene un fundador: nace de la tradición védica y de muchas corrientes locales.",
    divine:
      "Brahman, la realidad última, que se manifiesta en muchas divinidades como Vishnu, Shiva o Devi.",
    texts: "Vedas, Upanishads, Mahabharata (con la Bhagavad Gita) y Ramayana.",
    worship: "El mandir (templo) y el altar de casa.",
    festival: "Diwali, la fiesta de las luces, y Holi, la fiesta de los colores.",
    afterlife:
      "Reencarnación (samsara) según el karma de cada vida, hasta alcanzar la liberación (moksha).",
    followers: "Unos 1.200 millones",
    symbol: "La sílaba sagrada Om",
    summary:
      "Más que una religión, es una familia de tradiciones con miles de años de historia. Comparte ideas como el karma, el dharma y la reencarnación.",
    weight: 4,
  },
  {
    slug: "judaismo",
    name: "Judaísmo",
    color: "var(--rel-judaismo)",
    originYear: -1800,
    originNote:
      "c. 1800 a. C. según la tradición (Abraham); el monoteísmo se consolida durante el I milenio a. C.",
    originPlace: "Canaán, en el Levante mediterráneo",
    founder: "Abraham como patriarca y Moisés, que recibe la Torá, según la tradición.",
    divine: "Un solo Dios, creador del mundo, que establece una alianza con su pueblo.",
    texts: "El Tanaj (que incluye la Torá) y el Talmud.",
    worship: "La sinagoga y el hogar, sobre todo en el Shabat.",
    festival: "Pésaj (la Pascua judía), Yom Kipur y Janucá.",
    afterlife:
      "Pone el acento en esta vida. Hay creencias variadas sobre el mundo venidero (Olam Haba) y la resurrección.",
    followers: "Unos 15 millones",
    symbol: "La estrella de David y la menorá",
    summary:
      "La religión monoteísta más antigua que sigue viva. De ella nacen, en parte, el cristianismo y el islam.",
    weight: 1,
  },
  {
    slug: "budismo",
    name: "Budismo",
    color: "var(--rel-budismo)",
    originYear: -528,
    originNote:
      "c. 528 a. C. según la cronología tradicional; muchos historiadores lo sitúan hacia el 450 a. C.",
    originPlace: "Bodh Gaya, en el norte de la India",
    founder: "Siddhartha Gautama, el Buda («el despierto»).",
    divine:
      "No gira en torno a un dios creador. Busca el despertar y el fin del sufrimiento (nirvana).",
    texts: "El Tripitaka (canon pali) y los sutras del budismo mahayana.",
    worship: "El templo, el monasterio y la estupa.",
    festival: "Vesak, que recuerda el nacimiento, el despertar y la muerte del Buda.",
    afterlife: "Renacimiento según el karma, hasta salir del ciclo al alcanzar el nirvana.",
    followers: "Unos 320 millones",
    symbol: "La rueda del Dharma",
    summary:
      "Parte de una pregunta: por qué sufrimos y cómo dejar de hacerlo. Propone un camino de ética, meditación y sabiduría.",
    weight: 3,
  },
  {
    slug: "confucianismo",
    name: "Confucianismo",
    color: "var(--rel-confucianismo)",
    originYear: -500,
    originNote: "c. 500 a. C., con las enseñanzas de Confucio (551–479 a. C.)",
    originPlace: "Qufu, en el este de China",
    founder: "Confucio (Kong Fuzi), maestro y pensador.",
    divine:
      "Más una ética que una religión: el Cielo (Tian) como orden moral y el respeto a los antepasados.",
    texts: "Las Analectas y los Cinco Clásicos.",
    worship: "Los templos de Confucio y el altar familiar de los antepasados.",
    festival: "El aniversario de Confucio, que en Taiwán es también el Día del Maestro.",
    afterlife: "Apenas especula sobre el más allá: lo importante es honrar a los antepasados.",
    followers: "Difícil de contar: influye en la vida de cientos de millones en Asia oriental",
    symbol: "No tiene un símbolo oficial",
    summary:
      "Una forma de entender la familia, la educación y el buen gobierno que ha marcado China, Corea, Japón y Vietnam durante siglos.",
    weight: 2,
  },
  {
    slug: "taoismo",
    name: "Taoísmo",
    color: "var(--rel-taoismo)",
    originYear: -400,
    originNote: "c. siglo IV a. C., con el Daodejing atribuido a Laozi",
    originPlace: "China central",
    founder: "Se atribuye a Laozi, una figura medio histórica, medio legendaria.",
    divine:
      "El Tao, el principio que fluye en todas las cosas. El taoísmo religioso venera además a muchas divinidades e inmortales.",
    texts: "El Daodejing y el Zhuangzi.",
    worship: "El templo taoísta (guan) y las montañas sagradas.",
    festival: "El Año Nuevo lunar, compartido con la religión popular china.",
    afterlife: "Busca la armonía y una vida larga; la inmortalidad es un ideal del taoísmo religioso.",
    followers: "Difícil de contar: se mezcla con la religión popular china",
    symbol: "El yin y el yang (taijitu)",
    summary:
      "Invita a vivir en armonía con la naturaleza y a actuar sin forzar las cosas (wu wei).",
    weight: 2,
  },
  {
    slug: "cristianismo",
    name: "Cristianismo",
    color: "var(--rel-cristianismo)",
    originYear: 30,
    originNote: "c. 30 d. C., tras la muerte de Jesús de Nazaret",
    originPlace: "Jerusalén y Galilea",
    founder: "Jesús de Nazaret, al que sus seguidores llaman Cristo.",
    divine: "Un solo Dios que, para la mayoría de iglesias, es a la vez Padre, Hijo y Espíritu Santo (Trinidad).",
    texts: "La Biblia: Antiguo y Nuevo Testamento.",
    worship: "La iglesia (templo).",
    festival: "La Navidad y la Semana Santa, que culmina en la Pascua de Resurrección.",
    afterlife: "Resurrección y vida eterna tras el juicio de Dios.",
    followers: "Unos 2.300 millones",
    symbol: "La cruz",
    summary:
      "La religión con más seguidores del mundo. Se divide en grandes ramas: católica, ortodoxa y protestante, entre otras.",
    weight: 5,
  },
  {
    slug: "islam",
    name: "Islam",
    color: "var(--rel-islam)",
    originYear: 610,
    originNote: "610 d. C., cuando Mahoma recibe la primera revelación según la tradición islámica",
    originPlace: "La Meca, en la península arábiga",
    founder: "Mahoma (Muhammad), considerado el último profeta.",
    divine: "Un solo Dios (Alá), único e indivisible (tawhid).",
    texts: "El Corán y los hadices (dichos y hechos del Profeta).",
    worship: "La mezquita.",
    festival: "El mes de Ramadán, que termina con el Eid al-Fitr, y el Eid al-Adha.",
    afterlife: "Día del Juicio, tras el que se llega al paraíso o al infierno.",
    followers: "Unos 2.000 millones",
    symbol: "No tiene símbolo oficial; la media luna se usa como emblema cultural",
    summary:
      "Islam significa «sometimiento a Dios». Su práctica se apoya en cinco pilares: fe, oración, limosna, ayuno y peregrinación.",
    weight: 5,
  },
  {
    slug: "sijismo",
    name: "Sijismo",
    color: "var(--rel-sijismo)",
    originYear: 1499,
    originNote: "1499 d. C., con la experiencia espiritual de Gurú Nanak",
    originPlace: "Panyab, entre la actual India y Pakistán",
    founder: "Gurú Nanak y los nueve gurús que le siguieron.",
    divine: "Un solo Dios, sin forma (Ik Onkar, Waheguru).",
    texts: "El Gurú Granth Sahib, considerado el gurú vivo.",
    worship: "La gurdwara, donde siempre hay comida gratis para cualquiera (langar).",
    festival: "Vaisakhi, que celebra la fundación de la Khalsa en 1699.",
    afterlife: "Reencarnación, hasta la unión con Dios.",
    followers: "Unos 26 millones",
    symbol: "El khanda",
    summary:
      "La más joven de las grandes tradiciones. Defiende la igualdad entre todas las personas y el servicio a los demás (seva).",
    weight: 1,
  },
];

export const findReligion = (slug: string): Religion | undefined =>
  religions.find((religion) => religion.slug === slug);
