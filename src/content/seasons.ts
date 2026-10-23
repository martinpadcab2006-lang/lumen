/**
 * La historia del cristianismo como una serie: 8 temporadas y 81 episodios.
 * Aquí solo están los índices; los episodios escritos viven en content/episodes.
 */
export type EpisodeSummary = { slug: string; title: string; teaser: string };

export type Season = {
  slug: string;
  number: number;
  title: string;
  period: string;
  intro: string;
  /** Cuadro de portada en Wikimedia Commons (nombre del archivo). */
  cover: string;
  episodes: readonly EpisodeSummary[];
};

const ep = (slug: string, title: string, teaser: string): EpisodeSummary => ({ slug, title, teaser });

export const seasons: readonly Season[] = [
  {
    slug: "los-origenes",
    number: 1,
    title: "Los orígenes",
    period: "Siglo I a. C. – año 28",
    intro: "Qué es el cristianismo y en qué mundo nació: Roma, el judaísmo, la espera del Mesías y lo que sabemos de verdad sobre Jesús antes de empezar a predicar.",
    cover: "Pompée_dans_le_Temple_de_Jérusalem.jpg",
    episodes: [
      ep("que-es-el-cristianismo", "¿Qué es el cristianismo?", "La religión más extendida del mundo, explicada desde cero."),
      ep("el-mundo-de-jesus", "El mundo en el que nació Jesús", "Roma, Herodes, el Templo y un pueblo que esperaba."),
      ep("el-judaismo-en-tiempos-de-jesus", "El judaísmo en tiempos de Jesús", "Fariseos, saduceos, esenios y zelotes: un pueblo, muchas miradas."),
      ep("el-imperio-romano", "El Imperio romano en el siglo I", "Calzadas, legiones, impuestos y dioses: el mundo de Roma."),
      ep("la-esperanza-de-israel", "La esperanza de Israel", "Profetas, promesas y la espera de un Mesías."),
      ep("las-fuentes-sobre-jesus", "¿Qué sabemos de Jesús?", "Evangelios, historiadores romanos y judíos: las fuentes."),
      ep("el-nacimiento-de-jesus", "El nacimiento de Jesús", "Belén, la fecha, los pastores y los magos: historia y relato."),
      ep("la-infancia-de-jesus", "La infancia y la juventud de Jesús", "Treinta años en Nazaret de los que casi no sabemos nada."),
      ep("juan-el-bautista", "Juan el Bautista", "Un profeta en el desierto y el bautismo en el Jordán."),
      ep("el-reino-de-dios", "El Reino de Dios", "La idea que está en el centro de todo lo que predicó Jesús."),
    ],
  },
  {
    slug: "jesucristo",
    number: 2,
    title: "Jesucristo y su mensaje",
    period: "c. 28 – 30",
    intro: "Los años de la vida pública de Jesús: lo que hizo, lo que dijo, con quién se enfrentó y cómo terminó. Y lo que creen sus seguidores que pasó después.",
    cover: "1602-3 Caravaggio,Supper at Emmaus National Gallery, London.jpg",
    episodes: [
      ep("la-vida-publica", "La vida pública de Jesús", "Tres años por Galilea y Judea que cambiaron la historia."),
      ep("los-apostoles", "Los apóstoles y los primeros discípulos", "Pescadores, un recaudador y un traidor: los Doce."),
      ep("las-parabolas", "Las parábolas", "Historias sencillas con un giro final que sorprende."),
      ep("los-milagros", "Los milagros", "Qué cuentan los evangelios y cómo los leen los historiadores."),
      ep("el-sermon-de-la-montana", "El Sermón de la Montaña", "Las bienaventuranzas: «dichosos los pobres»."),
      ep("mujeres-pobres-y-marginados", "Las mujeres, los pobres y los marginados", "Con quién comía Jesús, y por qué escandalizaba."),
      ep("conflictos-con-las-autoridades", "Conflictos con las autoridades", "Fariseos, sacerdotes y Roma: el choque que lo llevó a la cruz."),
      ep("la-ultima-cena", "La Última Cena", "La última noche de Jesús y el origen de la eucaristía."),
      ep("la-pasion", "La Pasión y la crucifixión", "Getsemaní, Pilato y el Gólgota."),
      ep("la-resurreccion", "La Resurrección", "El sepulcro vacío y las apariciones: la fe y la historia."),
      ep("la-ascension", "La Ascensión", "Cuarenta días después: el final de los evangelios."),
      ep("quien-es-jesucristo", "¿Quién es Jesucristo?", "El Jesús de la historia y el Cristo de la fe."),
    ],
  },
  {
    slug: "los-primeros-cristianos",
    number: 3,
    title: "Los primeros cristianos",
    period: "30 – 100",
    intro: "De un grupo de discípulos en Jerusalén a comunidades en todo el Mediterráneo: Pentecostés, Pedro, Pablo, las primeras cartas y la separación del judaísmo.",
    cover: "Maino Pentecostés. Lienzo. 285 x 163 cm. Museo del Prado.jpg",
    episodes: [
      ep("pentecostes", "Pentecostés", "Cincuenta días después: el nacimiento de la Iglesia."),
      ep("la-comunidad-de-jerusalen", "La comunidad de Jerusalén", "Lo ponían todo en común: así vivían los primeros."),
      ep("pedro", "Pedro", "El pescador que se convirtió en la roca."),
      ep("pablo", "Pablo de Tarso", "De perseguidor a apóstol: el hombre que lo cambió todo."),
      ep("los-viajes-de-pablo", "Los viajes de Pablo y la expansión por el Mediterráneo", "Miles de kilómetros a pie y en barco."),
      ep("las-primeras-cartas", "Los primeros escritos cristianos", "Cartas antes que evangelios: lo más antiguo del Nuevo Testamento."),
      ep("las-primeras-comunidades", "Cómo eran las primeras comunidades", "Reuniones en casas, comidas compartidas y nuevos ritos."),
      ep("cristianos-y-judios", "Cristianos y judíos", "Un camino que empieza unido y acaba separándose."),
      ep("las-mujeres-en-las-comunidades", "Las mujeres en las primeras comunidades", "Lidia, Priscila, Febe y Junia."),
    ],
  },
  {
    slug: "perseguidos",
    number: 4,
    title: "De perseguidos a religión del Imperio",
    period: "64 – 476",
    intro: "Tres siglos de persecuciones, mártires y catacumbas, y un giro inesperado: Constantino, Nicea y un Imperio que se hace cristiano justo antes de caer.",
    cover: "Jean-Léon Gérôme - The Christian Martyrs' Last Prayer - Walters 37113.jpg",
    episodes: [
      ep("neron-y-las-primeras-persecuciones", "Nerón y las primeras persecuciones", "El incendio de Roma y los primeros culpables."),
      ep("los-martires", "Los mártires", "Perpetua, Policarpo, Lorenzo: testigos hasta el final."),
      ep("las-catacumbas", "Las catacumbas", "Cementerios bajo Roma, no escondites: el mito y la realidad."),
      ep("persecuciones-siglos-ii-y-iii", "Las persecuciones de los siglos II y III", "Decio, Valeriano y la Gran Persecución de Diocleciano."),
      ep("la-vida-cotidiana", "La vida cotidiana de los cristianos", "Cómo vivía un cristiano en una ciudad romana."),
      ep("constantino", "Constantino y el Edicto de Milán", "El emperador que lo cambió todo en el año 313."),
      ep("nicea-y-los-concilios", "Nicea y los grandes concilios", "Obispos de todo el Imperio deciden qué creen."),
      ep("teodosio", "Teodosio: religión oficial", "Del permitido al obligatorio en menos de 70 años."),
      ep("la-caida-de-roma", "La caída de Roma", "El Imperio de Occidente cae; la Iglesia sigue en pie."),
    ],
  },
  {
    slug: "la-doctrina",
    number: 5,
    title: "Qué creen los cristianos",
    period: "Siglos I – V",
    intro: "Cómo se formaron la Biblia, el Credo y los sacramentos: los debates, los concilios y los pensadores que dieron forma a la fe cristiana.",
    cover: "Codex Sinaiticus Matthew 6,4-32.JPG",
    episodes: [
      ep("la-biblia", "La Biblia: origen y transmisión", "Una biblioteca escrita durante más de mil años."),
      ep("antiguo-y-nuevo-testamento", "El Antiguo y el Nuevo Testamento", "Qué hay en cada uno y cómo se relacionan."),
      ep("el-canon", "El canon: qué libros entran", "Quién decidió qué libros forman la Biblia, y cuándo."),
      ep("los-padres-de-la-iglesia", "Los Padres de la Iglesia", "Agustín, Jerónimo, Ambrosio y los grandes pensadores."),
      ep("la-trinidad", "La Trinidad", "Padre, Hijo y Espíritu Santo: un solo Dios."),
      ep("dios-y-hombre", "Jesucristo, Dios y hombre", "El gran debate sobre quién es Jesús."),
      ep("debates-y-herejias", "Los primeros debates y herejías", "Gnósticos, arrianos y otras formas de entender la fe."),
      ep("los-sacramentos", "Los sacramentos", "Del bautismo a la eucaristía: su historia."),
      ep("oracion-y-liturgia", "Oración, liturgia y primeros ritos", "Cómo rezaban y celebraban los primeros cristianos."),
    ],
  },
  {
    slug: "la-edad-media",
    number: 6,
    title: "Monjes, reinos y catedrales",
    period: "476 – 1450",
    intro: "Mil años en los que el cristianismo da forma a Europa: monasterios, Bizancio, al-Ándalus, el Gran Cisma, las cruzadas, las universidades y el Camino de Santiago.",
    cover: "Catedral de Santiago de Compostela.Fachada do Obradoiro.jpg",
    episodes: [
      ep("los-primeros-monjes", "Los orígenes del monacato", "Ermitaños en el desierto de Egipto."),
      ep("san-benito", "San Benito y los monasterios", "«Reza y trabaja»: la regla que organizó Europa."),
      ep("bizancio", "Bizancio y la Iglesia de Oriente", "Mil años más de Imperio romano, en griego."),
      ep("la-expansion-por-europa", "La expansión por Europa", "Irlanda, Inglaterra, los eslavos y Escandinavia."),
      ep("los-pueblos-germanicos", "La conversión de los pueblos germánicos", "Francos, visigodos y lombardos."),
      ep("al-andalus", "Al-Ándalus y la Reconquista", "Cristianos, musulmanes y judíos en la península."),
      ep("carlomagno", "Carlomagno: la Iglesia y el poder", "Un emperador coronado por el papa en el año 800."),
      ep("el-gran-cisma", "El Gran Cisma de 1054", "Roma y Constantinopla se separan."),
      ep("las-cruzadas", "Las cruzadas", "Causas, desarrollo y consecuencias de dos siglos de guerras."),
      ep("las-ordenes-medievales", "Las órdenes religiosas medievales", "Cluny, el Císter, franciscanos y dominicos."),
      ep("el-camino-de-santiago", "El Camino de Santiago", "La gran peregrinación de Europa."),
      ep("las-universidades", "Las universidades y el pensamiento cristiano", "Bolonia, París, Salamanca y Tomás de Aquino."),
      ep("la-inquisicion", "La Inquisición", "Origen, cómo funcionaba y su contexto: más allá del mito."),
      ep("el-cisma-de-occidente", "Aviñón y el Cisma de Occidente", "Dos y hasta tres papas a la vez."),
    ],
  },
  {
    slug: "la-edad-moderna",
    number: 7,
    title: "Reformas y nuevos mundos",
    period: "1450 – 1800",
    intro: "El Renacimiento, Lutero y la división de Europa, la respuesta de Trento, los jesuitas, la mística española, las misiones por todo el mundo, Galileo y la Ilustración.",
    cover: "Lucas Cranach d.Ä. - Martin Luther, 1528 (Veste Coburg).jpg",
    episodes: [
      ep("el-renacimiento", "El Renacimiento y el cristianismo", "Papas mecenas, Miguel Ángel y una nueva mirada."),
      ep("lutero", "Lutero y la Reforma", "95 tesis que partieron Europa en dos."),
      ep("calvino-y-otras-reformas", "Calvino y otras reformas", "Ginebra, Zúrich, los anabaptistas e Inglaterra."),
      ep("trento-y-la-contrarreforma", "Trento y la Contrarreforma", "La gran respuesta católica."),
      ep("ignacio-y-los-jesuitas", "Ignacio de Loyola y los jesuitas", "Un soldado herido que fundó una orden mundial."),
      ep("la-mistica-espanola", "La mística española", "Teresa de Jesús y Juan de la Cruz."),
      ep("las-misiones", "Las misiones: América, Asia y África", "Evangelización, conquista y los debates que provocó."),
      ep("las-guerras-de-religion", "Las guerras de religión", "Un siglo de guerras en nombre de la fe."),
      ep("galileo", "Galileo: ciencia y fe", "El juicio más famoso de la historia de la ciencia."),
      ep("la-ilustracion", "La Ilustración", "Razón, tolerancia y crítica a las iglesias."),
    ],
  },
  {
    slug: "el-cristianismo-hoy",
    number: 8,
    title: "El cristianismo contemporáneo",
    period: "1789 – hoy",
    intro: "Revoluciones, la cuestión obrera, dos guerras mundiales, el Concilio Vaticano II y un cristianismo que hoy es sobre todo africano, latinoamericano y asiático.",
    cover: "Second Vatican Council by Lothar Wolleh 005.jpg",
    episodes: [
      ep("la-revolucion-francesa", "La Revolución francesa y la Iglesia", "Del altar a la guillotina."),
      ep("el-siglo-xix", "El cristianismo en el siglo XIX", "Misiones, liberalismo y el fin de los Estados Pontificios."),
      ep("rerum-novarum", "Rerum novarum y la doctrina social", "La Iglesia ante los obreros y las fábricas."),
      ep("guerras-y-totalitarismos", "Guerras mundiales y totalitarismos", "Mártires, silencios y resistencias."),
      ep("el-vaticano-ii", "El Concilio Vaticano II", "La gran renovación de la Iglesia católica."),
      ep("evangelicos-y-pentecostales", "Evangélicos y pentecostales", "El cristianismo que más crece en el mundo."),
      ep("el-sur-global", "África, Asia y América Latina hoy", "Dónde viven hoy la mayoría de los cristianos."),
      ep("el-siglo-xxi", "El cristianismo en el siglo XXI", "El papado, el ecumenismo y los retos de hoy."),
    ],
  },
];

export const findSeason = (slug: string): Season | undefined => seasons.find((season) => season.slug === slug);

export const episodePath = (season: string, episode: string): string => `/descubre/historia/${season}/${episode}`;

/** «1.04»: temporada y número de episodio. */
export const episodeCode = (season: Season, episodeSlug: string): string =>
  `${season.number}.${String(season.episodes.findIndex((item) => item.slug === episodeSlug) + 1).padStart(2, "0")}`;

export const totalEpisodes = seasons.reduce((sum, season) => sum + season.episodes.length, 0);
