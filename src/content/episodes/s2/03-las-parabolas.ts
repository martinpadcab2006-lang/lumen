import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  cafarnaum: holyLand.cafarnaum,
  magdala: holyLand.magdala,
  jerico: holyLand.jerico,
  jerusalen: holyLand.jerusalen,
};

export const lasParabolas = makeEpisode({
  slug: "las-parabolas",
  title: "Las parábolas",
  period: "c. 28 – 30",
  cover: "Rembrandt Harmensz van Rijn - Return of the Prodigal Son - Google Art Project.jpg",
  places,
  stops: [
    { id: "que", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "sembrador", year: "c. 28 – 30", place: "magdala" },
    { id: "samaritano", year: "c. 28 – 30", place: "jerico" },
    { id: "prodigo", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "leer", year: "Hoy", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "Las parábolas",
    inAMinute: [
      "Una parábola es una historia corta sacada de la vida diaria que esconde una enseñanza.",
      "Jesús enseñaba casi siempre así: hay unas cuarenta parábolas en los evangelios.",
      "Muchas tienen un final inesperado que obliga a pensar.",
      "El buen samaritano y el hijo pródigo son dos de las historias más famosas del mundo.",
      "Los historiadores creen que las parábolas son de lo más cercano a la voz real de Jesús.",
    ],
    intro:
      "Jesús no escribió libros ni dio clases. Contaba historias. Historias de campesinos, pastores, mujeres que barren su casa, padres con hijos difíciles y jornaleros que esperan trabajo. Dos mil años después, algunas siguen contándose en todo el mundo, y no solo en las iglesias.",
    sections: [
      {
        stop: "que",
        heading: "¿Qué es una parábola?",
        blocks: [
          { type: "p", text: "«Parábola» viene del griego y significa «comparación». Es una historia corta, con personajes y situaciones de la vida diaria, que sirve para hablar de algo más profundo: de Dios, de su Reino, de cómo vivir." },
          { type: "p", text: "Los maestros judíos de la época ya usaban historias así, pero Jesús las convirtió en su forma principal de enseñar. Los evangelios de Marcos, Mateo y Lucas recogen unas cuarenta. El de Juan, en cambio, casi no tiene." },
          { type: "fact", label: "Por qué se recuerdan", text: "Una historia se recuerda mucho mejor que una idea. Por eso las parábolas pudieron transmitirse de boca en boca durante décadas antes de ponerse por escrito. Muchos especialistas creen que están entre lo más parecido a las palabras reales de Jesús." },
        ],
      },
      {
        stop: "sembrador",
        heading: "El sembrador con mala puntería",
        blocks: [
          { type: "p", text: "Un sembrador sale a sembrar. Parte de la semilla cae en el camino y se la comen los pájaros; otra cae entre piedras y se seca; otra, entre zarzas, que la ahogan. Pero otra cae en tierra buena y da treinta, sesenta y hasta cien veces más." },
          { type: "illustration", id: "naturaleza" },
          { type: "p", text: "En Galilea se sembraba así: a voleo, y luego se araba. Cualquier campesino que escuchara entendía la escena. La parábola habla de cómo cada persona recibe el mensaje: unos lo olvidan enseguida, otros lo abandonan cuando cuesta, y otros lo hacen crecer." },
        ],
      },
      {
        stop: "samaritano",
        heading: "El buen samaritano",
        blocks: [
          { type: "p", text: "Un maestro de la Ley pregunta a Jesús: «¿Y quién es mi prójimo?». Jesús responde con una historia. Un hombre baja de Jerusalén a Jericó y unos bandidos lo asaltan, le roban y lo dejan medio muerto en el camino." },
          { type: "p", text: "Pasa un sacerdote, lo ve y da un rodeo. Pasa un levita, un servidor del Templo, y hace lo mismo. Pasa después un samaritano, un extranjero de un pueblo que los judíos despreciaban, y es el único que se para, le cura las heridas, lo sube a su animal, lo lleva a una posada y paga para que lo cuiden." },
          { type: "image", id: "samaritano" },
          { type: "p", text: "La pregunta era «¿quién es mi prójimo?». Jesús le da la vuelta: «¿Quién se portó como prójimo?». El prójimo no es solo el de tu grupo: es cualquiera que te necesita, y el ejemplo lo da precisamente el que tú desprecias." },
          { type: "fact", label: "Está en tu idioma", text: "Por esta parábola llamamos «buen samaritano» a quien ayuda a un desconocido. Hay leyes en muchos países que llevan ese nombre, para proteger a quien auxilia a alguien en peligro." },
        ],
      },
      {
        stop: "prodigo",
        heading: "El hijo pródigo",
        blocks: [
          { type: "p", text: "Un padre tiene dos hijos. El pequeño le pide su parte de la herencia, algo así como desearle la muerte, se va lejos y lo despilfarra todo. Arruinado, acaba cuidando cerdos, el animal más impuro para un judío, y pasando hambre." },
          { type: "p", text: "Decide volver y pedir que lo acepten como un jornalero más. Pero el padre lo ve de lejos, corre hacia él, lo abraza y organiza una fiesta. El hijo mayor, que nunca se había ido, se enfada: él siempre ha cumplido y nunca le hicieron una fiesta." },
          { type: "image", id: "prodigo" },
          { type: "p", text: "La parábola termina sin saber si el hermano mayor entra en la fiesta. Es un final abierto, dirigido a los que criticaban a Jesús por recibir a los pecadores. Para muchos, es el mejor retrato de Dios que dejó Jesús: un padre que no espera a que su hijo se lo merezca." },
          { type: "fact", label: "¿Sabías que…?", text: "«Pródigo» significa «derrochador», no «el que vuelve». Pero por esta historia se usa sobre todo para hablar de alguien que regresa después de mucho tiempo." },
        ],
      },
      {
        stop: "leer",
        heading: "Cómo leer una parábola",
        blocks: [
          { type: "p", text: "Durante siglos, las parábolas se leyeron como alegorías: cada detalle significaba algo. Hoy los especialistas prefieren buscar el giro central, ese momento en que la historia sorprende al que escucha." },
          { type: "p", text: "Un jornalero que trabaja una hora y cobra igual que el que trabajó todo el día. Un pastor que deja a noventa y nueve ovejas solas para buscar una. Una semilla pequeñísima que se convierte en un arbusto. Las parábolas no dan respuestas cómodas: invitan a mirar las cosas de otra manera." },
        ],
      },
    ],
    relatedPills: ["existio-jesus"],
    quiz: [
      question("s2e3-parabola", "¿Qué significa «parábola»?", ["Milagro", "Comparación", "Oración", "Profecía"], 1, "Viene del griego parabolé, «comparación»."),
      question("s2e3-samaritano", "En la parábola del buen samaritano, ¿quién ayuda al herido?", ["Un sacerdote", "Un levita", "Un samaritano, un extranjero despreciado", "Un soldado romano"], 2, "Los que pasaron antes, servidores del Templo, dieron un rodeo."),
      question("s2e3-prodigo", "¿Qué significa «pródigo»?", ["El que vuelve", "El que se arrepiente", "Derrochador", "Hijo menor"], 2, "Por eso se habla de «hijo pródigo»: el que despilfarró su herencia."),
    ],
    sources: [
      { text: "Evangelio de Lucas 10, 25-37 y 15, 11-32; evangelio de Marcos 4, 1-20" },
      { text: "Joachim Jeremias, Las parábolas de Jesús, Verbo Divino" },
    ],
    next: "En el próximo episodio: los milagros. Ciegos que ven, paralíticos que andan, agua convertida en vino. Qué cuentan los evangelios y cómo los estudian los historiadores.",
  },
});
