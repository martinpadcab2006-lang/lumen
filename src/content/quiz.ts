export type QuizOption = { id: string; text: string };

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: readonly QuizOption[];
  correctId: string;
  explanation: string;
};

const options = (...texts: readonly string[]): readonly QuizOption[] =>
  texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Preguntas de cultura e historia del cristianismo. El quiz elige al azar entre ellas. */
export const quizPool: readonly QuizQuestion[] = [
  {
    id: "halloween",
    prompt: "¿Qué significa «Halloween»?",
    options: options("Noche de brujas", "Víspera de Todos los Santos", "Fiesta de la calabaza", "Noche de los muertos"),
    correctId: "b",
    explanation: "Viene del inglés All Hallows' Eve, la víspera de la fiesta cristiana de Todos los Santos del 1 de noviembre.",
  },
  {
    id: "cristo",
    prompt: "¿Qué significa la palabra «Cristo»?",
    options: options("Hijo de Dios", "Salvador", "Ungido", "Maestro"),
    correctId: "c",
    explanation: "Christós es «ungido» en griego, la traducción del hebreo Mesías. No es un apellido, sino un título.",
  },
  {
    id: "reyes",
    prompt: "¿Cuántos Reyes Magos aparecen en la Biblia?",
    options: options("Tres", "Dos", "Doce", "No lo dice"),
    correctId: "d",
    explanation: "Mateo solo habla de «unos magos de Oriente». Se pensó que eran tres porque tres eran los regalos: oro, incienso y mirra.",
  },
  {
    id: "biblia",
    prompt: "¿Qué significa la palabra «Biblia»?",
    options: options("Palabra de Dios", "Los libros", "La ley", "Historia sagrada"),
    correctId: "b",
    explanation: "Viene del griego ta biblía, «los libros». Es una biblioteca entera: 73 libros en la Biblia católica y 66 en la protestante.",
  },
  {
    id: "semana-santa",
    prompt: "¿De qué depende la fecha de la Semana Santa?",
    options: options("La elige el papa cada año", "De la luna llena de primavera", "Siempre es la segunda semana de abril", "Del calendario escolar"),
    correctId: "b",
    explanation: "La Pascua es el primer domingo después de la primera luna llena de primavera. Por eso cae entre el 22 de marzo y el 25 de abril.",
  },
  {
    id: "inri",
    prompt: "¿Qué significa INRI, el cartel de la cruz?",
    options: options("Jesús Nazareno, Rey de los judíos", "Jesús, Hijo de Dios", "En el nombre de Jesús", "Aquí murió el Rey"),
    correctId: "a",
    explanation: "Son las iniciales en latín de Iesus Nazarenus Rex Iudaeorum, el motivo de la condena que Pilato mandó escribir.",
  },
  {
    id: "pez",
    prompt: "¿Qué símbolo usaban los primeros cristianos para reconocerse?",
    options: options("Una paloma", "Un pez", "Una corona", "Un ancla de oro"),
    correctId: "b",
    explanation: "En griego, «pez» es ICHTHYS: las iniciales de «Jesús, Cristo, Hijo de Dios, Salvador».",
  },
  {
    id: "cisma",
    prompt: "¿En qué año se separaron la Iglesia católica y la ortodoxa?",
    options: options("313", "1054", "1492", "1517"),
    correctId: "b",
    explanation: "En 1054, Roma y Constantinopla se excomulgaron mutuamente. Es el llamado Gran Cisma.",
  },
  {
    id: "lutero",
    prompt: "¿Quién empezó la Reforma protestante en 1517?",
    options: options("Juan Calvino", "Enrique VIII", "Martín Lutero", "Erasmo de Róterdam"),
    correctId: "c",
    explanation: "El monje alemán Martín Lutero publicó sus 95 tesis contra la venta de indulgencias en Wittenberg.",
  },
  {
    id: "anglicana",
    prompt: "¿Qué rey creó la Iglesia de Inglaterra al romper con Roma?",
    options: options("Enrique VIII", "Ricardo Corazón de León", "Jorge III", "Guillermo el Conquistador"),
    correctId: "a",
    explanation: "En 1534, Enrique VIII se proclamó cabeza de la Iglesia de Inglaterra después de que el papa no anulara su matrimonio.",
  },
  {
    id: "armenia",
    prompt: "¿Cuál fue el primer reino que adoptó el cristianismo como religión oficial?",
    options: options("El Imperio romano", "España", "Armenia", "Etiopía"),
    correctId: "c",
    explanation: "Armenia lo hizo hacia el año 301, casi ochenta años antes que el Imperio romano.",
  },
  {
    id: "domingo",
    prompt: "¿De dónde viene la palabra «domingo»?",
    options: options("Del sol", "Del latín «día del Señor»", "De santo Domingo", "Del griego «día de fiesta»"),
    correctId: "b",
    explanation: "Viene de dies Dominicus, «el día del Señor», el día en que los cristianos celebraban la resurrección de Jesús.",
  },
  {
    id: "santiago",
    prompt: "¿Qué apóstol está enterrado en Santiago de Compostela, según la tradición?",
    options: options("San Pedro", "San Pablo", "Santiago", "San Juan"),
    correctId: "c",
    explanation: "Según la tradición, su sepulcro se descubrió hacia el año 820. Desde entonces llegan peregrinos por el Camino de Santiago.",
  },
  {
    id: "iconos",
    prompt: "¿Cómo se llaman las imágenes sagradas pintadas sobre madera de la Iglesia ortodoxa?",
    options: options("Retablos", "Iconos", "Vidrieras", "Frescos"),
    correctId: "b",
    explanation: "Los iconos se consideran una ventana a lo sagrado. Por eso se dice que un icono «se escribe», no se pinta.",
  },
  {
    id: "nicea",
    prompt: "¿Qué texto que rezan muchas iglesias salió del Concilio de Nicea (325)?",
    options: options("El Padrenuestro", "El Credo", "El Avemaría", "Los Diez Mandamientos"),
    correctId: "b",
    explanation: "El Credo de Nicea, ampliado en 381, lo comparten católicos, ortodoxos, anglicanos y muchos protestantes.",
  },
  {
    id: "sacramentos",
    prompt: "¿Cuántos sacramentos reconocen la mayoría de las iglesias protestantes?",
    options: options("Siete", "Dos", "Cinco", "Ninguno"),
    correctId: "b",
    explanation: "El bautismo y la santa cena. La Iglesia católica y las ortodoxas cuentan siete.",
  },
  {
    id: "cuaresma",
    prompt: "¿Cuántos días dura la Cuaresma, en recuerdo del ayuno de Jesús en el desierto?",
    options: options("Siete", "Doce", "Cuarenta", "Cincuenta"),
    correctId: "c",
    explanation: "Cuarenta días, como los que Jesús pasó en el desierto según los evangelios.",
  },
  {
    id: "historiadores",
    prompt: "¿Qué historiador romano cuenta que Jesús fue ejecutado por orden de Poncio Pilato?",
    options: options("Julio César", "Tácito", "Cicerón", "Plinio el Viejo"),
    correctId: "b",
    explanation: "Tácito lo menciona en sus Anales, hacia el año 116, al hablar de los cristianos de Roma.",
  },
  {
    id: "cuantos",
    prompt: "¿Cuántos cristianos hay hoy en el mundo, aproximadamente?",
    options: options("500 millones", "1.000 millones", "Más de 2.300 millones", "5.000 millones"),
    correctId: "c",
    explanation: "Casi una de cada tres personas del planeta. Es la religión con más seguidores.",
  },
  {
    id: "curas",
    prompt: "¿En qué iglesia un hombre casado puede ordenarse sacerdote?",
    options: options("En la ortodoxa", "En ninguna", "Solo en la católica latina", "Solo en la del Vaticano"),
    correctId: "a",
    explanation: "En las iglesias ortodoxas y en las católicas orientales, un hombre casado puede ser sacerdote. Los obispos sí son célibes.",
  },
];

/** Baraja las preguntas y devuelve las primeras `count`. */
export const pickQuestions = (count: number, random: () => number = Math.random): readonly QuizQuestion[] =>
  [...quizPool]
    .map((question) => ({ question, order: random() }))
    .sort((a, b) => a.order - b.order)
    .slice(0, count)
    .map(({ question }) => question);
