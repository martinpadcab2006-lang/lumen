import { illustrations as chapterIllustrations, places } from "../../chapters/01-el-mundo-de-jesus/shared";
import type { Tema } from "../../tema-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Primaria 1.º–2.º, tema 3. Final del primer trimestre: Adviento y Navidad. */
export const esperamosLaNavidad: Tema = {
  level: "primaria-1",
  slug: "esperamos-la-navidad",
  question: "¿Por qué celebramos la Navidad y cómo nos preparamos para ella?",
  learn: [
    "Qué es el Adviento y para qué sirve la corona de Adviento.",
    "Cómo el ángel le anunció a María que iba a ser la madre de Jesús.",
    "Cómo nació Jesús en Belén y quiénes fueron a verlo.",
    "Por qué ponemos el belén y qué significan sus figuras.",
  ],
  intro:
    "Se acerca la Navidad: las calles se llenan de luces y en muchas casas se pone el belén. En este tema descubrimos qué celebramos y cómo prepararnos de verdad.",
  narrator: {
    name: "Natán",
    presentation:
      "Natán es un personaje inventado: un niño de Nazaret en tiempos de Jesús. Las escenas de la Navidad las vemos en cuadros de grandes pintores.",
  },
  images: {
    anunciacion: {
      kind: "arte",
      commonsFile: "La Anunciación, by Fra Angelico, from Prado in Google Earth - main panel.jpg",
      alt: "El ángel Gabriel, con alas de colores, se inclina ante María, que lo escucha sentada bajo un pórtico con las manos cruzadas.",
      title: "La Anunciación",
      artist: "Fra Angelico",
      date: "hacia 1425-1426",
      museum: "Museo del Prado, Madrid",
      caption: "El ángel Gabriel le dice a María que va a ser la madre de Jesús. Ella escucha con las manos sobre el pecho y responde que sí.",
    },
    pastores: {
      kind: "arte",
      commonsFile: "Adoration of the Shepherds, Murillo (Prado Museum).jpg",
      alt: "Unos pastores, con un cordero y unos huevos, se arrodillan ante el Niño Jesús, que está en el pesebre junto a María y José.",
      title: "La adoración de los pastores",
      artist: "Bartolomé Esteban Murillo",
      date: "hacia 1650",
      museum: "Museo del Prado, Madrid",
      caption: "Murillo, pintor de Sevilla, pintó a los pastores como gente sencilla de su tiempo, que lleva al Niño lo que tiene: un cordero y unos huevos.",
    },
    magos: {
      kind: "arte",
      commonsFile: "Giotto - Scrovegni - -18- - Adoration of the Magi.jpg",
      alt: "Los Magos se arrodillan ante el Niño, en brazos de María, bajo un tejado; encima brilla una estrella con cola, como un cometa.",
      title: "La adoración de los Magos",
      artist: "Giotto",
      date: "hacia 1305",
      museum: "Capilla de los Scrovegni, Padua (Italia)",
      caption: "Giotto pintó la estrella de Belén como un cometa con cola. ¿Ves al camello asomando por detrás?",
    },
  },
  illustrations: {
    natan: chapterIllustrations.natan,
    corona: {
      description: "Una corona de Adviento sobre la mesa: un círculo de ramas verdes con cuatro velas, tres moradas y una rosa.",
      alt: "Una corona de Adviento con cuatro velas; la primera está encendida.",
      src: "/ilustraciones/corona.svg",
    },
    belen: {
      description: "Un belén en casa: el portal con María, José y el Niño, la estrella, los pastores con ovejas y un río de papel de plata.",
      alt: "Un belén con el portal, la estrella, los pastores, las ovejas y un río.",
      src: "/ilustraciones/belen.svg",
    },
  },
  characters: {},
  places,
  opening: [
    { type: "illustration", id: "natan" },
    { type: "narrator", text: "¿Sabes qué es lo mejor de esperar algo bonito? ¡Prepararse! Cuando viene mi abuela, limpiamos la casa y hacemos su comida favorita. Hoy te voy a contar la espera más bonita de todas." },
    { type: "p", text: "Piensa: ¿qué cosas bonitas estás esperando tú? ¿Cómo te preparas para ellas?" },
  ],
  lessons: [
    {
      title: "Adviento: preparamos el corazón",
      blocks: [
        { type: "p", text: "Antes de la Navidad hay cuatro semanas especiales. Se llaman Adviento. Adviento quiere decir «llegada»: esperamos que llegue Jesús." },
        { type: "illustration", id: "corona" },
        { type: "p", text: "En muchas casas y en la iglesia se pone la corona de Adviento. Es un círculo de ramas verdes con cuatro velas. Cada domingo se enciende una vela más. Cuando están las cuatro encendidas, ¡ya llega la Navidad!" },
        { type: "fact", label: "¿Por qué una vela rosa?", text: "Tres velas son moradas, el color de la espera. La rosa se enciende el tercer domingo, porque la Navidad ya está muy cerca y la alegría crece." },
        { type: "p", text: "En Adviento preparamos el corazón: compartimos, ayudamos en casa, hacemos las paces y rezamos un poco más. Así, cuando llegue Jesús, encontrará un sitio preparado." },
        { type: "words", items: [{ term: "Adviento", meaning: "Las cuatro semanas en que nos preparamos para la Navidad." }, { term: "Corona de Adviento", meaning: "Un círculo de ramas con cuatro velas, una por cada domingo de Adviento." }] },
      ],
      activities: [
        "Dibuja una corona de Adviento y colorea las velas que ya se han encendido.",
        "Escribe o dibuja una buena acción para cada semana de Adviento.",
        "Pregunta en casa si ponéis corona de Adviento o belén, y cuéntalo en clase.",
      ],
    },
    {
      title: "María dice que sí",
      blocks: [
        { type: "narrator", text: "Te voy a contar algo que pasó en mi pueblo, en Nazaret. Allí vivía una joven muy buena que se llamaba María." },
        { type: "map", place: "nazaret" },
        { type: "p", text: "Un día, Dios envió al ángel Gabriel a visitar a María. El ángel le dijo: «Alégrate, María. Vas a tener un hijo y lo llamarás Jesús. Será el Hijo de Dios»." },
        { type: "image", id: "anunciacion" },
        { type: "p", text: "María se sorprendió mucho, pero confió en Dios y respondió que sí. Por eso los cristianos queremos tanto a María: dijo sí a Dios." },
        { type: "p", text: "María estaba prometida con José, un hombre bueno y trabajador. José también confió en Dios y cuidó de María y de Jesús." },
        { type: "fact", label: "En la Biblia", text: "Esta historia está en el Evangelio de Lucas, capítulo 1. La llamamos la Anunciación, porque el ángel anunció a María que iba a ser la madre de Jesús." },
        { type: "words", items: [{ term: "Ángel", meaning: "Un mensajero de Dios." }, { term: "Anunciación", meaning: "El momento en que el ángel Gabriel anunció a María que iba a ser la madre de Jesús." }] },
      ],
      activities: [
        "Mira el cuadro de Fra Angelico: ¿quién es el ángel? ¿Quién es María? ¿Qué colores tienen las alas?",
        "Representad por parejas el diálogo entre el ángel y María.",
        "Piensa en una vez en que dijiste «sí» para ayudar a alguien.",
      ],
    },
    {
      title: "Jesús nace en Belén",
      blocks: [
        { type: "p", text: "Cuando faltaba poco para que naciera Jesús, María y José tuvieron que viajar a Belén, el pueblo de la familia de José. Fue un viaje largo." },
        { type: "map", place: "belen" },
        { type: "p", text: "En Belén no encontraron sitio donde quedarse. Por eso Jesús nació en un lugar para animales, y María lo acostó en un pesebre, donde comen los animales." },
        { type: "quote", text: "Un niño nos ha nacido, un hijo se nos ha dado.", source: "Libro de Isaías 9,5" },
        { type: "p", text: "Esa noche, unos pastores cuidaban sus ovejas en el campo. Un ángel se les apareció y les dio la buena noticia: había nacido el Salvador. Los pastores fueron corriendo a verlo." },
        { type: "image", id: "pastores" },
        { type: "p", text: "Más tarde llegaron unos Magos de Oriente siguiendo una estrella. Le llevaron al Niño regalos: oro, incienso y mirra." },
        { type: "image", id: "magos" },
        { type: "fact", label: "¿Sabías que…?", text: "La Biblia no dice cuántos Magos eran ni que fueran reyes. Como llevaron tres regalos, la tradición dice que eran tres y les puso nombre: Melchor, Gaspar y Baltasar. En España los celebramos el 6 de enero." },
        { type: "words", items: [{ term: "Pesebre", meaning: "El cajón donde comen los animales. Allí acostó María a Jesús." }, { term: "Belén", meaning: "El pueblo donde nació Jesús. También se llama así la maqueta que ponemos en Navidad." }] },
      ],
      activities: [
        "Ordena con dibujos lo que pasó: el viaje a Belén, el nacimiento, los pastores y los Magos.",
        "Mira el cuadro de Murillo: ¿qué regalos llevan los pastores? ¿Qué le regalarías tú a Jesús?",
        "Busca en el mapa Nazaret y Belén. ¿Cuál está más al sur?",
      ],
    },
  ],
  finalTask: {
    title: "Nuestro belén de clase",
    description:
      "Entre todos vamos a montar un belén en clase. Cada uno hace una figura y explica quién es y qué hizo en la Navidad.",
    steps: [
      "Repartimos las figuras: María, José, el Niño, el ángel, los pastores, las ovejas, los Magos, la estrella, el buey y la mula.",
      "Cada uno hace su figura con plastilina, cartulina o rollos de papel.",
      "Montamos el belén con musgo, piedras y un río de papel de plata, como en muchas casas de España.",
      "Cada alumno pone su figura en el belén y dice en una frase quién es.",
      "Terminamos cantando juntos un villancico.",
    ],
    product: "Un belén de clase con una figura de cada alumno, presentado en voz alta.",
  },
  quiz: [
    { id: "p1-3-adviento", prompt: "¿Cómo se llaman las cuatro semanas antes de Navidad?", options: options("Cuaresma", "Adviento", "Vacaciones"), correctId: "b", explanation: "El Adviento son las cuatro semanas en que nos preparamos para la Navidad." },
    { id: "p1-3-velas", prompt: "¿Cuántas velas tiene la corona de Adviento?", options: options("Dos", "Cuatro", "Diez"), correctId: "b", explanation: "Tiene cuatro velas, una por cada domingo de Adviento." },
    { id: "p1-3-angel", prompt: "¿Qué ángel visitó a María?", options: options("Gabriel", "Rafael", "Ninguno"), correctId: "a", explanation: "El ángel Gabriel le anunció a María que iba a ser la madre de Jesús." },
    { id: "p1-3-belen", prompt: "¿Dónde nació Jesús?", options: options("En Roma", "En Belén", "En Jerusalén"), correctId: "b", explanation: "Jesús nació en Belén y María lo acostó en un pesebre." },
    { id: "p1-3-magos", prompt: "¿Qué siguieron los Magos para encontrar a Jesús?", options: options("Un mapa", "Una estrella", "A los pastores"), correctId: "b", explanation: "Los Magos siguieron una estrella hasta encontrar al Niño." },
  ],
  extension: [
    "Haced en casa un calendario de Adviento con una buena acción para cada día.",
    "Visita con tu familia un belén de tu pueblo o tu ciudad y cuenta en clase qué figuras te gustaron más.",
    "Escribe una carta a los Reyes Magos en la que pidas también algo para otra persona.",
  ],
  media: [],
  guide: {
    goals: [
      "Vivir el Adviento como tiempo de espera y preparación, conociendo la corona de Adviento.",
      "Conocer los relatos de la Anunciación y del nacimiento de Jesús (Lucas 1-2 y Mateo 2).",
      "Descubrir a María y José como personas que confían en Dios.",
      "Valorar las tradiciones navideñas de España, especialmente el belén, y su sentido cristiano.",
    ],
    curriculum: {
      competences: [
        "CE4. Patrimonio cultural: reconocer la Navidad en el arte y en las tradiciones del entorno.",
        "CE5. Interioridad: vivir la espera y la oración del Adviento.",
        "CE6. Contenidos básicos del cristianismo: Jesucristo, Hijo de Dios, nacido de María.",
      ],
      knowledge: [
        "B. La Navidad y otras celebraciones; el mensaje cristiano en la música y en las artes; Jesucristo como centro; María.",
        "C. La gratitud y el compartir como forma de preparar la Navidad.",
      ],
    },
    ibProfile: [
      { attribute: "Indagadores", how: "Se preguntan por el sentido de lo que ven en la calle en Navidad." },
      { attribute: "Informados e instruidos", how: "Conocen los relatos bíblicos y su orden." },
      { attribute: "Buenos comunicadores", how: "Explican en voz alta su figura del belén." },
      { attribute: "Solidarios", how: "Proponen buenas acciones para cada semana de Adviento." },
      { attribute: "Reflexivos", how: "Piensan qué significa decir «sí», como María." },
    ],
    materials: [
      "Proyector o pizarra digital.",
      "Una corona de Adviento real o hecha en clase (sin encender velas, o con velas LED).",
      "Para el belén: plastilina, cartulina, rollos de papel, musgo artificial, piedras y papel de plata.",
      "Letra de un villancico conocido.",
    ],
    sessions: [
      {
        title: "Sesión 1. Arranque y «Adviento: preparamos el corazón»",
        steps: [
          { minutes: 10, title: "¿Qué esperamos?", description: "Lean el arranque de Natán y recoja en la pizarra cosas bonitas que esperan los alumnos." },
          { minutes: 15, title: "Lección 1", description: "Lean la lección con la corona de Adviento delante. Expliquen los colores de las velas." },
          { minutes: 15, title: "Buenas acciones", description: "Cada uno dibuja o escribe una buena acción por semana. Pueden colgarse junto a la corona." },
          { minutes: 5, title: "Oración", description: "Breve oración: «Ven, Señor Jesús»." },
        ],
      },
      {
        title: "Sesión 2. «María dice que sí»",
        steps: [
          { minutes: 5, title: "Repaso", description: "¿Qué vela toca encender esta semana?" },
          { minutes: 15, title: "Lección 2", description: "Lean la Anunciación. Proyecte el cuadro de Fra Angelico y pregunte qué ven antes de explicarlo." },
          { minutes: 15, title: "Dramatización", description: "Por parejas representan el diálogo del ángel y María." },
          { minutes: 10, title: "Mi «sí»", description: "Cada uno cuenta una vez en que dijo sí para ayudar a alguien." },
        ],
      },
      {
        title: "Sesión 3. «Jesús nace en Belén»",
        steps: [
          { minutes: 20, title: "Lección 3", description: "Lean el nacimiento, los pastores y los Magos. Comparen los cuadros de Murillo y Giotto." },
          { minutes: 15, title: "Ordenamos la historia", description: "Ordenan con dibujos las escenas de la Navidad." },
          { minutes: 10, title: "Reparto del belén", description: "Repartan las figuras para la tarea final y empiecen a hacerlas." },
        ],
      },
      {
        title: "Sesión 4. Tarea final y quiz",
        steps: [
          { minutes: 20, title: "Terminamos las figuras", description: "Cada uno termina su figura." },
          { minutes: 15, title: "Montamos el belén", description: "Montan el belén y cada alumno presenta su figura en una frase." },
          { minutes: 5, title: "Quiz", description: "Hagan el quiz juntos." },
          { minutes: 5, title: "Villancico", description: "Terminen cantando un villancico delante del belén." },
        ],
      },
    ],
    dynamics: [
      { title: "El calendario de buenas acciones", description: "Un sobre por día hasta las vacaciones con una pequeña acción: ayudar a recoger, decir algo bonito a un compañero, compartir…" },
      { title: "Visita al belén", description: "Si el colegio o la parroquia montan un belén, visítenlo y pidan a los alumnos que encuentren todas las figuras que conocen." },
      { title: "Villancicos de aquí", description: "Pregunten a las familias por villancicos tradicionales de su pueblo o de Andalucía y aprendan uno en clase." },
    ],
    answers: [
      "Quiz: las respuestas correctas se ven en la página al terminar.",
      "Orden de la historia: Anunciación en Nazaret; viaje a Belén; nacimiento en el pesebre; los pastores; los Magos.",
      "Mapa: Belén está al sur, cerca de Jerusalén; Nazaret está al norte, en Galilea.",
      "Los relatos están en Lucas 1,26-38 (Anunciación), Lucas 2,1-20 (nacimiento y pastores) y Mateo 2,1-12 (Magos).",
    ],
    rubric: [
      { criterion: "Conoce el Adviento", levels: ["No sabe qué es.", "Sabe que es el tiempo antes de Navidad.", "Explica la corona de Adviento y propone cómo prepararse."] },
      { criterion: "Relata la Navidad", levels: ["Recuerda escenas sueltas.", "Ordena la mayoría de las escenas.", "Ordena todas las escenas y nombra a sus personajes."] },
      { criterion: "Participa en el belén", levels: ["Con poca implicación.", "Hace su figura.", "Hace su figura y explica quién es y qué hizo."] },
    ],
    adaptations: {
      support: "Ofrezca las escenas de la Navidad ya dibujadas para que solo tengan que ordenarlas. En el belén, figuras sencillas con plantilla.",
      extension: "Buscar otra pintura de la Navidad (por ejemplo, en el Museo del Prado) y contar en qué se parece y en qué se diferencia de la de Murillo.",
    },
  },
};
