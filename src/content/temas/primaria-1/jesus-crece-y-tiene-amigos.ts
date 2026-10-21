import { illustrations as chapterIllustrations, images as chapterImages, places } from "../../chapters/01-el-mundo-de-jesus/shared";
import type { Tema } from "../../tema-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Primaria 1.º–2.º, tema 4. Segundo trimestre. Lleva dentro el capítulo 2 de la historia (Jesús de Nazaret). */
export const jesusCreceYTieneAmigos: Tema = {
  level: "primaria-1",
  slug: "jesus-crece-y-tiene-amigos",
  question: "¿Cómo era Jesús de mayor y por qué quiso tener amigos?",
  learn: [
    "Que Jesús creció en Nazaret y trabajó con José.",
    "Que Jesús fue bautizado por Juan en el río Jordán.",
    "Que Jesús eligió a doce amigos, los apóstoles, y que muchos eran pescadores.",
    "Que Jesús también quiere ser nuestro amigo.",
  ],
  intro:
    "Jesús ya no es un niño. Ha crecido y un día deja su taller para contar a todos que Dios nos quiere. Pero no quiere hacerlo solo: busca amigos que le acompañen.",
  narrator: {
    name: "Natán",
    presentation:
      "Natán es un personaje inventado. En este tema ya es un muchacho y nos cuenta lo que ve. Las escenas de Jesús las vemos en cuadros de grandes pintores.",
  },
  images: {
    millais: chapterImages.millais,
    bautismo: {
      kind: "arte",
      commonsFile: "Andrea del Verrocchio, Leonardo da Vinci - Baptism of Christ - Uffizi.jpg",
      alt: "Juan, vestido con una piel, derrama agua sobre la cabeza de Jesús, que está de pie en el río; a la izquierda, dos ángeles arrodillados miran la escena.",
      title: "El bautismo de Cristo",
      artist: "Andrea del Verrocchio y Leonardo da Vinci",
      date: "hacia 1470-1475",
      museum: "Galería de los Uffizi, Florencia (Italia)",
      caption: "Juan bautiza a Jesús en el río Jordán. El ángel de la izquierda lo pintó Leonardo da Vinci cuando todavía era aprendiz en el taller de Verrocchio.",
    },
    vocacion: {
      kind: "arte",
      commonsFile: "Brooklyn Museum - The Calling of Saint Peter and Saint Andrew (Vocation de Saint Pierre et Saint André) - James Tissot - overall.jpg",
      alt: "Junto a la orilla del lago, Jesús llama a dos pescadores que están en su barca con las redes.",
      title: "La vocación de san Pedro y san Andrés",
      artist: "James Tissot",
      date: "1886-1894",
      museum: "Brooklyn Museum, Nueva York",
      caption: "Jesús llama a los hermanos Pedro y Andrés mientras pescan en el lago de Galilea.",
    },
  },
  illustrations: {
    natan: chapterIllustrations.natan,
    pescadores: chapterIllustrations.pescadores,
    amigos: {
      description: "Cuatro niños de Nazaret, distintos entre sí, se dan la mano en la calle de su pueblo.",
      alt: "Cuatro niños de Nazaret se dan la mano.",
      src: "/ilustraciones/amigos.svg",
    },
    rio: {
      description: "En el río Jordán, Juan el Bautista bautiza a un hombre mientras mucha gente espera en la orilla.",
      alt: "Juan el Bautista bautiza a la gente en el río Jordán.",
      src: "/ilustraciones/rio.svg",
    },
  },
  characters: {},
  places,
  opening: [
    { type: "illustration", id: "natan" },
    { type: "narrator", text: "¡Hola otra vez! Ya soy más mayor. ¿Te acuerdas de Jesús, el hijo de María y José? Ha crecido mucho… ¡y está pasando algo muy especial!" },
    { type: "p", text: "Piensa: ¿quiénes son tus mejores amigos? ¿Qué hacéis juntos? ¿Por qué es bonito tener amigos?" },
  ],
  lessons: [
    {
      title: "Jesús crece en Nazaret",
      blocks: [
        { type: "narrator", text: "Jesús ya es un hombre. Trabaja en el taller con José: hace mesas, puertas y arados. Todo el pueblo le conoce." },
        { type: "image", id: "millais" },
        { type: "p", text: "Jesús vivió unos treinta años en Nazaret. Trabajaba, ayudaba a su familia y rezaba, como todos. Por eso decimos que Jesús sabe muy bien cómo es nuestra vida." },
        { type: "p", text: "En este cuadro, el niño Jesús se ha hecho una herida en la mano con un clavo, en el taller de José. María lo consuela. ¿Ves a Juan, el primo de Jesús, trayendo agua?" },
        { type: "fact", label: "¿Sabías que…?", text: "Los evangelios dicen que José era «carpintero». La palabra original quiere decir «artesano»: trabajaba la madera y quizá también la piedra." },
        { type: "words", items: [{ term: "Taller", meaning: "El lugar donde un artesano hace su trabajo." }] },
      ],
      activities: [
        "Dibuja a Jesús ayudando a José en el taller.",
        "¿Qué oficio te gustaría tener de mayor? ¿Cómo ayudarías a los demás con él?",
        "Busca en el cuadro de Millais: el taller, las herramientas, la oveja… ¿qué más ves?",
      ],
    },
    {
      title: "En el río Jordán",
      blocks: [
        { type: "narrator", text: "Un día mi padre me llevó al río Jordán. Allí había un hombre que se llamaba Juan. ¡Vestía con piel de camello! Y bautizaba a la gente en el agua." },
        { type: "illustration", id: "rio" },
        { type: "map", place: "jerico" },
        { type: "p", text: "Juan el Bautista pedía a la gente que cambiara su corazón y se preparara, porque Dios iba a hacer algo grande." },
        { type: "p", text: "Un día llegó Jesús y Juan lo bautizó. Entonces se oyó una voz del cielo que decía que Jesús era el Hijo amado de Dios." },
        { type: "image", id: "bautismo" },
        { type: "p", text: "Nosotros también hemos sido bautizados, o lo seremos. El bautismo es el día en que entramos en la gran familia de los hijos de Dios." },
        { type: "words", items: [{ term: "Bautizar", meaning: "Echar agua sobre una persona como señal de que entra en la familia de Dios." }, { term: "Jordán", meaning: "El río más importante del país de Jesús." }] },
      ],
      activities: [
        "Pregunta en casa cuándo y dónde te bautizaron. Si tienes una foto, tráela.",
        "Mira el cuadro: ¿quién es Juan? ¿Quién es Jesús? ¿Qué hacen los ángeles?",
        "Busca el río Jordán en el mapa. ¿Entre qué dos lagos está?",
      ],
    },
    {
      title: "Jesús elige a sus amigos",
      blocks: [
        { type: "illustration", id: "pescadores" },
        { type: "narrator", text: "Mi tío pesca en el lago de Galilea, junto a dos hermanos: Pedro y Andrés. Un día pasó Jesús por la orilla y los llamó. ¡Dejaron las redes y se fueron con Él!" },
        { type: "map", place: "cafarnaum" },
        { type: "image", id: "vocacion" },
        { type: "quote", text: "Venid en pos de mí y os haré pescadores de hombres.", source: "Evangelio de Mateo 4,19" },
        { type: "p", text: "Jesús eligió a doce amigos especiales. Los llamamos los apóstoles: Pedro, Andrés, Santiago, Juan, Felipe, Bartolomé, Tomás, Mateo, Santiago el Menor, Tadeo, Simón y Judas." },
        { type: "p", text: "Eran personas normales: pescadores, un cobrador de impuestos… Jesús no buscaba a los más listos ni a los más ricos, sino a quien quisiera seguirle." },
        { type: "illustration", id: "amigos" },
        { type: "p", text: "Jesús también nos llama a cada uno a ser sus amigos. Y un amigo de Jesús trata bien a los demás, como Él." },
        { type: "words", items: [{ term: "Apóstol", meaning: "Cada uno de los doce amigos que Jesús eligió para que le acompañaran." }] },
      ],
      activities: [
        "Aprended juntos los nombres de los doce apóstoles con una canción o una cadena de palmadas.",
        "Dibuja a Pedro y Andrés en su barca cuando Jesús los llama.",
        "Piensa en algo que puedes hacer esta semana para ser buen amigo de alguien de clase.",
      ],
    },
  ],
  finalTask: {
    title: "La cadena de los amigos de Jesús",
    description: "Vamos a hacer una cadena de papel muy larga. Cada eslabón es un amigo de Jesús: los doce apóstoles… ¡y nosotros!",
    steps: [
      "Cortamos tiras de cartulina de colores.",
      "En doce tiras escribimos los nombres de los apóstoles y dibujamos algo de cada uno (por ejemplo, una red para Pedro).",
      "Cada alumno escribe en su tira su nombre y una forma de ser buen amigo («comparto», «ayudo», «escucho»…).",
      "Unimos todas las tiras formando una cadena y la colgamos en clase.",
      "Leemos en voz alta las formas de ser buen amigo y elegimos una para practicar toda la semana.",
    ],
    product: "Una cadena de papel con los doce apóstoles y todos los alumnos, colgada en clase.",
  },
  quiz: [
    { id: "p1-4-taller", prompt: "¿En qué trabajaba Jesús en Nazaret antes de empezar a predicar?", options: options("Era pescador", "Trabajaba en el taller con José", "Era rey"), correctId: "b", explanation: "Jesús trabajaba como artesano con José en Nazaret." },
    { id: "p1-4-rio", prompt: "¿En qué río bautizó Juan a Jesús?", options: options("En el Jordán", "En el Ebro", "En el Nilo"), correctId: "a", explanation: "Juan el Bautista bautizó a Jesús en el río Jordán." },
    { id: "p1-4-doce", prompt: "¿Cuántos apóstoles eligió Jesús?", options: options("Tres", "Doce", "Cien"), correctId: "b", explanation: "Jesús eligió a doce amigos especiales: los apóstoles." },
    { id: "p1-4-pescadores", prompt: "¿Qué hacían Pedro y Andrés cuando Jesús los llamó?", options: options("Estaban pescando", "Estaban durmiendo", "Estaban en el colegio"), correctId: "a", explanation: "Eran pescadores y estaban en el lago de Galilea." },
    { id: "p1-4-amigos", prompt: "¿A quién llama Jesús para ser su amigo?", options: options("Solo a los ricos", "Solo a los mayores", "A todos, también a nosotros"), correctId: "c", explanation: "Jesús llama a todos a ser sus amigos." },
  ],
  extension: [
    "Busca con tu familia una foto o un vídeo de tu bautizo y pregunta quiénes eran tus padrinos.",
    "Aprende el nombre de un apóstol y descubre si hay alguna iglesia o fiesta con su nombre cerca de tu casa.",
    "Haz un dibujo para regalar a un amigo y dile por qué te alegras de que sea tu amigo.",
  ],
  media: [],
  guide: {
    goals: [
      "Conocer la vida oculta de Jesús en Nazaret y su trabajo junto a José.",
      "Conocer el bautismo de Jesús en el Jordán y relacionarlo con el propio bautismo.",
      "Saber que Jesús eligió a doce apóstoles y que nos llama a todos a ser sus amigos.",
      "Practicar gestos concretos de amistad en el grupo.",
    ],
    curriculum: {
      competences: [
        "CE2. Dimensión socioemocional: la amistad y los grupos de pertenencia.",
        "CE4. Patrimonio cultural: el bautismo y la vocación en el arte.",
        "CE6. Contenidos básicos del cristianismo: Jesucristo y sus amigos; el bautismo.",
      ],
      knowledge: [
        "A. Grupos de pertenencia y relación con Jesús; figuras bíblicas.",
        "B. Jesucristo como centro del mensaje cristiano; la Iglesia como familia.",
      ],
    },
    ibProfile: [
      { attribute: "Solidarios", how: "Proponen y practican gestos de amistad en clase." },
      { attribute: "Informados e instruidos", how: "Conocen el bautismo de Jesús y los nombres de los apóstoles." },
      { attribute: "Indagadores", how: "Investigan en casa su propio bautismo." },
      { attribute: "Reflexivos", how: "Piensan qué significa ser buen amigo." },
    ],
    materials: [
      "Proyector o pizarra digital.",
      "Cartulinas de colores, tijeras, pegamento y rotuladores para la cadena.",
      "Opcional: fotos del bautizo de los alumnos (con permiso de las familias).",
    ],
    sessions: [
      {
        title: "Sesión 1. Arranque y «Jesús crece en Nazaret»",
        steps: [
          { minutes: 10, title: "Mis amigos", description: "Pregunta de arranque: ¿quiénes son vuestros amigos y qué hacéis juntos?" },
          { minutes: 15, title: "Lección 1", description: "Lean la lección y observen el cuadro de Millais: busquen herramientas y detalles." },
          { minutes: 15, title: "Dibujo", description: "Dibujan a Jesús en el taller con José." },
          { minutes: 5, title: "Cierre", description: "Cada uno dice qué oficio le gustaría tener." },
        ],
      },
      {
        title: "Sesión 2. «En el río Jordán»",
        steps: [
          { minutes: 15, title: "Lección 2", description: "Lean la lección. Localicen el Jordán en el mapa." },
          { minutes: 10, title: "El cuadro", description: "Comenten el cuadro de Verrocchio y Leonardo. Cuenten la curiosidad del ángel pintado por Leonardo." },
          { minutes: 15, title: "Mi bautizo", description: "Quienes hayan traído información o fotos de su bautizo lo cuentan." },
          { minutes: 5, title: "Oración", description: "Den gracias por formar parte de la familia de Dios." },
        ],
      },
      {
        title: "Sesión 3. «Jesús elige a sus amigos»",
        steps: [
          { minutes: 15, title: "Lección 3", description: "Lean la llamada de Pedro y Andrés y la lista de los apóstoles." },
          { minutes: 10, title: "Los doce", description: "Aprendan los nombres con palmadas o una canción sencilla." },
          { minutes: 15, title: "Dramatización", description: "Por grupos representan la llamada de los pescadores." },
          { minutes: 5, title: "Mi propósito", description: "Cada uno elige un gesto de amistad para la semana." },
        ],
      },
      {
        title: "Sesión 4. Tarea final y quiz",
        steps: [
          { minutes: 25, title: "La cadena", description: "Preparan las tiras de los apóstoles y las suyas, y montan la cadena." },
          { minutes: 10, title: "Quiz", description: "Quiz en voz alta con el proyector." },
          { minutes: 10, title: "Lectura de la cadena", description: "Leen las formas de ser buen amigo y eligen una para toda la clase." },
        ],
      },
    ],
    dynamics: [
      { title: "Pescadores de amigos", description: "Juego en el patio: dos alumnos hacen de «red» cogidos de la mano y van atrapando compañeros, que se unen a la red." },
      { title: "El amigo secreto", description: "Cada alumno recibe en secreto el nombre de un compañero y durante la semana tiene con él un detalle de amistad." },
      { title: "¿Quién es este apóstol?", description: "Describa un apóstol con pistas sencillas (pescador, hermano de Pedro…) y los alumnos adivinan quién es." },
    ],
    answers: [
      "Quiz: las respuestas correctas se ven en la página al terminar.",
      "El Jordán une el lago de Galilea con el mar Muerto.",
      "Apóstoles (Mateo 10,2-4): Pedro, Andrés, Santiago el de Zebedeo, Juan, Felipe, Bartolomé, Tomás, Mateo, Santiago el de Alfeo, Tadeo, Simón el Zelote y Judas Iscariote.",
      "Cuadro de Millais: el niño Jesús se ha herido la mano en el taller; María lo consuela y el pequeño Juan trae agua. Muchos ven en la herida un anuncio de la cruz.",
    ],
    rubric: [
      { criterion: "Conoce la vida de Jesús joven", levels: ["No recuerda nada.", "Sabe que vivió en Nazaret.", "Explica que trabajó con José y fue bautizado en el Jordán."] },
      { criterion: "Conoce a los apóstoles", levels: ["No sabe quiénes son.", "Sabe que eran doce amigos de Jesús.", "Nombra varios y sabe que muchos eran pescadores."] },
      { criterion: "Practica la amistad", levels: ["No propone gestos.", "Propone un gesto.", "Propone y cumple un gesto de amistad durante la semana."] },
    ],
    adaptations: {
      support: "Trabaje solo cuatro apóstoles (Pedro, Andrés, Santiago y Juan) y use imágenes para cada uno.",
      extension: "Buscar en qué ciudad de España está enterrado, según la tradición, el apóstol Santiago y qué camino lleva hasta allí.",
    },
  },
};
