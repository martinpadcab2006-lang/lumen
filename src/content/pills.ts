export type PillTopic = "fiestas" | "simbolos" | "historia" | "biblia" | "costumbres" | "iglesias";

export const topicName: Readonly<Record<PillTopic, string>> = {
  fiestas: "Fiestas",
  simbolos: "Símbolos y palabras",
  historia: "Historia",
  biblia: "La Biblia",
  costumbres: "Costumbres",
  iglesias: "Las iglesias",
};

export const topicColor: Readonly<Record<PillTopic, string>> = {
  fiestas: "var(--tema-fiestas)",
  simbolos: "var(--tema-simbolos)",
  historia: "var(--tema-historia)",
  biblia: "var(--tema-biblia)",
  costumbres: "var(--tema-costumbres)",
  iglesias: "var(--tema-iglesias)",
};

/** Una «píldora»: una historia corta que se lee en un minuto y se comparte en redes. */
export type Pill = {
  slug: string;
  topic: PillTopic;
  title: string;
  /** Una frase que engancha. Aparece en las tarjetas y en la imagen para redes. */
  hook: string;
  body: readonly string[];
};

export const pills: readonly Pill[] = [
  {
    slug: "halloween-y-todos-los-santos",
    topic: "fiestas",
    title: "Halloween viene de una fiesta cristiana",
    hook: "Halloween significa «víspera de Todos los Santos».",
    body: [
      "El 1 de noviembre los cristianos celebran a todos los santos, y el 2, a los difuntos. La noche anterior se llamaba en inglés All Hallows' Eve, «la víspera de Todos los Santos», y de ahí salió Halloween.",
      "Esa víspera se mezcló con antiguas fiestas celtas de final de la cosecha, como el Samhain irlandés, y viajó a Estados Unidos con los emigrantes irlandeses. Allí nació la fiesta de disfraces que conocemos.",
      "En España la tradición es otra: visitar los cementerios, comer buñuelos y huesos de santo, y ver el Don Juan Tenorio.",
      "Y en Cádiz, los Tosantos (de «Todos los Santos»): la víspera, los puestos del Mercado Central se disfrazan. Frutas, verduras y pescados aparecen vestidos y montados en escenas que se ríen de la actualidad, con el humor gaditano de siempre. La tradición viene del siglo XIX y hoy tiene hasta concurso.",
    ],
  },
  {
    slug: "por-que-la-navidad-es-el-25-de-diciembre",
    topic: "fiestas",
    title: "¿Por qué la Navidad es el 25 de diciembre?",
    hook: "La Biblia no dice cuándo nació Jesús. La fecha se eligió siglos después.",
    body: [
      "Los evangelios no dicen en qué día nació Jesús. La primera noticia de que se celebraba el 25 de diciembre viene de Roma, del año 336.",
      "Hay dos explicaciones principales. Una dice que se eligió una fecha cercana al solsticio de invierno, cuando en Roma se celebraba el nacimiento del Sol Invicto, para presentar a Jesús como la verdadera luz. La otra, que algunos autores antiguos calculaban que Jesús fue concebido el 25 de marzo: nueve meses después cae el 25 de diciembre.",
      "Los historiadores todavía discuten cuál de las dos pesó más.",
    ],
  },
  {
    slug: "los-reyes-magos-no-eran-tres",
    topic: "fiestas",
    title: "La Biblia no dice que los Reyes Magos fueran tres",
    hook: "Ni tres, ni reyes, ni se llamaban Melchor, Gaspar y Baltasar. Al menos, no en la Biblia.",
    body: [
      "El evangelio de Mateo solo habla de unos «magos venidos de Oriente» que siguen una estrella y ofrecen al niño oro, incienso y mirra. No dice cuántos eran ni que fueran reyes.",
      "Se pensó que eran tres porque tres eran los regalos. Lo de reyes llegó después, al leer la escena junto a un salmo que habla de reyes que traen presentes.",
      "Sus nombres aparecen hacia el siglo VI. Todavía se pueden leer sobre sus cabezas en un mosaico de la basílica de San Apolinar Nuevo, en Rávena (Italia).",
    ],
  },
  {
    slug: "por-que-semana-santa-cambia-de-fecha",
    topic: "fiestas",
    title: "¿Por qué la Semana Santa cambia de fecha?",
    hook: "Depende de la luna llena de primavera. Por eso puede caer en marzo o en abril.",
    body: [
      "Desde el Concilio de Nicea, en el año 325, la Pascua se celebra el primer domingo después de la primera luna llena de primavera. Como la luna no cae cada año el mismo día, la Semana Santa se mueve entre el 22 de marzo y el 25 de abril.",
      "Las iglesias ortodoxas hacen el cálculo con el antiguo calendario juliano. Por eso muchas veces celebran la Pascua una o varias semanas más tarde que los católicos y los protestantes.",
    ],
  },
  {
    slug: "por-que-descansamos-el-domingo",
    topic: "costumbres",
    title: "¿Por qué descansamos el domingo?",
    hook: "La palabra «domingo» ya da una pista: viene del latín dies Dominicus, «el día del Señor».",
    body: [
      "Los primeros cristianos se reunían el domingo, el día siguiente al sábado judío, porque según los evangelios Jesús resucitó ese día. Lo llamaban «el día del Señor», en latín dies Dominicus. De ahí viene «domingo».",
      "En el año 321, el emperador Constantino lo declaró día de descanso en el Imperio romano. Y así ha llegado hasta nuestro calendario.",
    ],
  },
  {
    slug: "existio-jesus",
    topic: "historia",
    title: "¿Existió Jesús de verdad?",
    hook: "Casi todos los historiadores dicen que sí, sean creyentes o no.",
    body: [
      "La gran mayoría de los historiadores coinciden en que Jesús de Nazaret existió. Además de los evangelios y las cartas de Pablo, escritos pocas décadas después de su muerte, le mencionan autores que no eran cristianos.",
      "El historiador judío Flavio Josefo habla de él a finales del siglo I. Y el romano Tácito, hacia el año 116, cuenta que fue ejecutado por orden de Poncio Pilato.",
      "Lo que sí se discute es qué hizo y dijo exactamente. Y si resucitó ya no es una pregunta que pueda responder la historia: es una cuestión de fe.",
    ],
  },
  {
    slug: "que-significa-cristo",
    topic: "simbolos",
    title: "Cristo no es un apellido",
    hook: "«Jesucristo» quiere decir «Jesús, el Mesías».",
    body: [
      "Cristo viene del griego Christós, que significa «ungido»: alguien marcado con aceite para una misión especial, como los antiguos reyes de Israel. Es la traducción de la palabra hebrea Mesías.",
      "Por eso decir «Jesucristo» es como decir «Jesús, el Mesías». En dos palabras está la afirmación central de los cristianos.",
    ],
  },
  {
    slug: "el-pez-simbolo-cristiano",
    topic: "simbolos",
    title: "El pez: la contraseña de los primeros cristianos",
    hook: "Las letras de la palabra «pez» en griego esconden un mensaje.",
    body: [
      "En griego, pez se dice ICHTHYS. Sus letras son las iniciales de Iēsous Christos Theou Yios Sōtēr: «Jesús, Cristo, Hijo de Dios, Salvador».",
      "Por eso el pez aparece en las catacumbas y en objetos de los primeros siglos. Según una tradición popular, en tiempos de persecución un cristiano dibujaba un arco en el suelo y el otro lo completaba para formar el pez. Así se reconocían sin delatarse.",
    ],
  },
  {
    slug: "que-significa-inri",
    topic: "simbolos",
    title: "¿Qué significa INRI?",
    hook: "Son cuatro iniciales en latín que aparecen en casi todos los crucifijos.",
    body: [
      "INRI son las iniciales de Iesus Nazarenus Rex Iudaeorum: «Jesús Nazareno, Rey de los judíos».",
      "Según los evangelios, era el cartel con el motivo de la condena que Pilato mandó poner sobre la cruz, escrito en hebreo, en griego y en latín.",
    ],
  },
  {
    slug: "73-o-66-libros",
    topic: "biblia",
    title: "La Biblia no tiene el mismo número de libros para todos",
    hook: "«Biblia» significa «los libros». Y según la iglesia, son 66, 73 o más.",
    body: [
      "Biblia viene del griego ta biblía, «los libros». No es un solo libro, sino una biblioteca escrita durante más de mil años por muchos autores, en hebreo, arameo y griego.",
      "La Biblia católica tiene 73 libros; la protestante, 66; algunas ortodoxas, más. La diferencia está en siete libros del Antiguo Testamento, como Tobías o los Macabeos, que se conservaron en griego pero no entraron en la Biblia hebrea.",
      "Lutero los separó del resto, y la Iglesia católica confirmó su lugar en el Concilio de Trento, en 1546.",
    ],
  },
  {
    slug: "nicea-y-el-credo",
    topic: "historia",
    title: "La reunión que decidió qué creen los cristianos",
    hook: "Pasó en el año 325 y todavía se nota cada domingo en muchas iglesias.",
    body: [
      "En el año 325, el emperador Constantino reunió en Nicea a unos 300 obispos de todo el Imperio. Discutían una pregunta enorme: ¿es Jesús Dios igual que el Padre, o algo menos?",
      "Arrio, un sacerdote de Alejandría, decía que el Hijo había sido creado. El concilio respondió que es «de la misma naturaleza» que el Padre, y lo dejó por escrito en el Credo.",
      "Ampliado en el año 381, ese Credo lo comparten hoy católicos, ortodoxos, anglicanos y muchos protestantes.",
    ],
  },
  {
    slug: "el-camino-de-santiago",
    topic: "historia",
    title: "¿Cómo empezó el Camino de Santiago?",
    hook: "Todo empezó, según la tradición, con unas luces sobre un bosque de Galicia.",
    body: [
      "Según la tradición, hacia el año 820 un ermitaño llamado Pelayo vio unas luces sobre un bosque de Galicia, y allí se encontró el sepulcro del apóstol Santiago. El rey Alfonso II mandó levantar una iglesia y empezaron a llegar peregrinos de toda Europa.",
      "En la Edad Media fue, junto con Roma y Jerusalén, una de las tres grandes peregrinaciones cristianas.",
      "Hoy lo recorren cada año más de 400.000 personas, por fe, por deporte o para pensar. Quien hace al menos los últimos 100 kilómetros a pie puede pedir la Compostela, el certificado de peregrino.",
    ],
  },
  {
    slug: "nazarenos-y-capirotes",
    topic: "costumbres",
    title: "¿Por qué los nazarenos llevan capirote?",
    hook: "El gorro de las procesiones tiene un origen que sorprende.",
    body: [
      "Las cofradías de Semana Santa se extendieron por España en los siglos XVI y XVII. Sus miembros salen en procesión como penitentes, con túnica y la cara cubierta para que nadie sepa quién hace penitencia.",
      "El capirote recuerda a la coroza, el gorro cónico que la Inquisición ponía a los condenados como señal de vergüenza. Las cofradías lo adoptaron como signo de penitencia voluntaria.",
    ],
  },
  {
    slug: "carne-en-cuaresma",
    topic: "costumbres",
    title: "La Cuaresma, el bacalao y las torrijas",
    hook: "Una norma religiosa llenó la cocina española de recetas.",
    body: [
      "La Cuaresma son los cuarenta días antes de la Semana Santa, en recuerdo de los cuarenta días que, según los evangelios, Jesús ayunó en el desierto. Es un tiempo de penitencia, y una de sus costumbres es no comer carne los viernes.",
      "Como el pescado sí estaba permitido, la Cuaresma dejó en la cocina española el potaje de vigilia, el bacalao de mil formas y, de postre, las torrijas.",
    ],
  },
  {
    slug: "por-que-los-curas-no-se-casan",
    topic: "iglesias",
    title: "¿Por qué los curas no se casan?",
    hook: "Depende de la iglesia: en muchas, los sacerdotes sí pueden casarse.",
    body: [
      "En la Iglesia católica de rito latino, los sacerdotes no se casan. El celibato se fue extendiendo durante los primeros siglos y se convirtió en norma general en 1139, en el II Concilio de Letrán.",
      "En las iglesias ortodoxas, y también en las católicas orientales, un hombre casado puede ordenarse sacerdote, aunque los obispos son célibes.",
      "En las iglesias protestantes y anglicanas, los pastores pueden casarse. De hecho, Lutero se casó con una antigua monja, Catalina de Bora.",
    ],
  },
  {
    slug: "catolicos-ortodoxos-protestantes",
    topic: "iglesias",
    title: "Católicos, ortodoxos y protestantes: ¿qué los separa?",
    hook: "Todos creen en Jesús. Los separan dos rupturas: una en 1054 y otra en 1517.",
    body: [
      "Durante mil años hubo una sola Iglesia con dos mitades: la de Roma, que hablaba latín, y la de Constantinopla, que hablaba griego. En 1054 se separaron, y así nacieron la Iglesia católica y la ortodoxa. Una de las grandes diferencias es que los ortodoxos no reconocen la autoridad del papa.",
      "En 1517, el monje alemán Martín Lutero criticó la venta de indulgencias y acabó rompiendo con Roma. Así nació el protestantismo, que da más peso a la Biblia leída por cada creyente que a la autoridad de la Iglesia.",
    ],
  },
  {
    slug: "iconos-ortodoxos",
    topic: "iglesias",
    title: "Los iconos no se pintan: se escriben",
    hook: "Para los ortodoxos, un icono es una ventana a lo sagrado.",
    body: [
      "En una iglesia ortodoxa casi no hay estatuas: hay iconos, imágenes pintadas sobre madera, muchas veces con fondo dorado. No son simples decoraciones, sino una ventana a lo sagrado. Por eso se dice que un icono «se escribe».",
      "Quien lo hace sigue reglas muy antiguas: rostros alargados, perspectiva invertida y oro para representar la luz de Dios.",
      "En los siglos VIII y IX hubo una gran disputa, la iconoclasia, sobre si estaba permitido venerar imágenes. En el año 843 se restableció su culto, y los ortodoxos lo siguen celebrando como el «Triunfo de la Ortodoxia».",
    ],
  },
  {
    slug: "donde-viven-los-cristianos",
    topic: "iglesias",
    title: "¿Dónde viven hoy los cristianos?",
    hook: "Hace un siglo, la mayoría eran europeos. Hoy ya no.",
    body: [
      "En el mundo hay más de 2.300 millones de cristianos: casi una de cada tres personas.",
      "Hace un siglo, la mayoría vivía en Europa y Norteamérica. Hoy la mayor parte vive en América Latina, África y Asia. Los países con más cristianos son Estados Unidos, Brasil y México, y según varios estudios África ya es el continente con más cristianos.",
    ],
  },
];

export const findPill = (slug: string): Pill | undefined => pills.find((pill) => pill.slug === slug);

/** Otras píldoras para seguir leyendo: primero las del mismo tema, luego el resto. */
export const relatedPills = (pill: Pill, count = 3): readonly Pill[] => {
  const others = pills.filter((candidate) => candidate.slug !== pill.slug);
  const sameTopic = others.filter((candidate) => candidate.topic === pill.topic);
  const rest = others.filter((candidate) => candidate.topic !== pill.topic);
  return [...sameTopic, ...rest].slice(0, count);
};
