import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  cafarnaum: holyLand.cafarnaum,
  cana: holyLand.cana,
  betsaida: holyLand.betsaida,
  nazaret: holyLand.nazaret,
  cesareaFilipo: holyLand.cesareaFilipo,
  samaria: holyLand.samaria,
  jerico: holyLand.jerico,
  jerusalen: holyLand.jerusalen,
};

export const laVidaPublica = makeEpisode({
  slug: "la-vida-publica",
  title: "La vida pública de Jesús",
  period: "c. 28 – 30",
  cover: "Bloch-SermonOnTheMount.jpg",
  places,
  stops: [
    { id: "cuanto", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "galilea", year: "c. 28 – 29", place: "cafarnaum" },
    { id: "dia", year: "c. 28 – 29", place: "betsaida" },
    { id: "nazaret", year: "c. 28", place: "nazaret" },
    { id: "pregunta", year: "c. 29", place: "cesareaFilipo" },
    { id: "jerusalen", year: "c. 30", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "La vida pública de Jesús",
    inAMinute: [
      "La vida pública de Jesús duró entre uno y tres años, según el evangelio que se lea.",
      "Su base fue Cafarnaúm, junto al lago de Galilea, y recorrió a pie los pueblos de la región.",
      "Predicaba, curaba enfermos y comía con todo tipo de gente; le seguían multitudes.",
      "En su propio pueblo, Nazaret, lo rechazaron.",
      "Al final subió a Jerusalén para la Pascua, sabiendo que era peligroso.",
    ],
    intro:
      "Empieza la segunda temporada. Hasta ahora Jesús era un artesano de Nazaret. Durante un tiempo muy corto, quizá dos o tres años, se convirtió en un predicador itinerante del que hablaba toda Galilea. Así fueron esos años.",
    sections: [
      {
        stop: "cuanto",
        heading: "¿Cuánto duró?",
        blocks: [
          { type: "p", text: "Parece que fue mucho, pero fue muy poco. Marcos, Mateo y Lucas cuentan la vida pública de Jesús como si cupiera en un año, con un solo viaje final a Jerusalén. El evangelio de Juan menciona tres fiestas de Pascua, lo que daría unos dos o tres años. La mayoría de los historiadores piensa que fue entre uno y tres años." },
          { type: "p", text: "Empezó hacia el año 28, poco después de que Juan el Bautista fuera encarcelado, y terminó con su muerte en Jerusalén hacia el año 30. Para entonces, Jesús tendría unos treinta y pocos años." },
          { type: "fact", label: "Para situarte", text: "Lucas dice que Juan empezó a predicar «en el año quince del reinado de Tiberio». Tiberio empezó a reinar en el 14, así que eso nos lleva al año 28 o 29." },
        ],
      },
      {
        stop: "galilea",
        heading: "Un campamento junto al lago",
        blocks: [
          { type: "p", text: "Jesús dejó Nazaret y se instaló en Cafarnaúm, un pueblo de pescadores en la orilla norte del lago de Galilea. Allí vivían Pedro y su hermano Andrés, y probablemente se alojaba en su casa." },
          { type: "image", id: "cafarnaum" },
          { type: "p", text: "Desde allí recorría a pie los pueblos de alrededor: Betsaida, Corazín, Magdala, Caná. Hablaba en las sinagogas los sábados, pero sobre todo al aire libre, en las plazas, en el campo o desde una barca, cuando la gente se agolpaba en la orilla." },
          { type: "fact", label: "¿Sabías que…?", text: "Bajo una iglesia moderna de Cafarnaúm, los arqueólogos encontraron una casa del siglo I que los primeros cristianos convirtieron en lugar de reunión. Muchos creen que era la casa de Pedro." },
        ],
      },
      {
        stop: "dia",
        heading: "Un día con Jesús",
        blocks: [
          { type: "p", text: "Los evangelios dejan entrever cómo era un día cualquiera. Jesús se levantaba de madrugada para rezar a solas en un lugar apartado. Después llegaba la gente: enfermos que pedían ser curados, familias, curiosos, discípulos con preguntas." },
          { type: "p", text: "Enseñaba contando historias, discutía con maestros fariseos sobre la Ley, comía en casa de quien lo invitaba, ya fuera un fariseo respetable o un recaudador de impuestos, y al anochecer se retiraba con sus discípulos. A veces tenía que escapar en barca porque la multitud no le dejaba ni comer." },
          { type: "image", id: "bloch" },
          { type: "p", text: "No tenía casa propia ni ingresos. Según Lucas, un grupo de mujeres que lo seguían lo mantenía con sus bienes. Él mismo lo resumió: «Los zorros tienen madrigueras y los pájaros nidos, pero el Hijo del hombre no tiene dónde reclinar la cabeza»." },
        ],
      },
      {
        stop: "nazaret",
        heading: "Nadie es profeta en su tierra",
        blocks: [
          { type: "p", text: "La fama de Jesús creció deprisa en Galilea, pero no en su pueblo. Cuando volvió a Nazaret y habló en la sinagoga, sus vecinos se escandalizaron: «¿No es este el artesano, el hijo de María?». ¿Quién se creía que era?" },
          { type: "p", text: "Según Lucas, incluso intentaron despeñarlo. Jesús respondió con una frase que ha llegado hasta hoy como refrán: «Ningún profeta es bien recibido en su tierra»." },
          { type: "p", text: "Tampoco su familia lo entendía. Marcos cuenta que sus parientes fueron a buscarlo porque decían que había perdido el juicio. Es uno de esos detalles incómodos que los historiadores consideran muy probables: nadie se habría inventado algo así." },
        ],
      },
      {
        stop: "pregunta",
        heading: "«¿Quién decís que soy yo?»",
        blocks: [
          { type: "p", text: "En un momento clave, cerca de Cesarea de Filipo, en el norte, Jesús preguntó a sus discípulos qué decía la gente de él. Unos decían que era Juan el Bautista que había vuelto, otros que era Elías o alguno de los profetas." },
          { type: "p", text: "«Y vosotros, ¿quién decís que soy yo?». Pedro respondió: «Tú eres el Mesías». Según Marcos, Jesús les pidió que no se lo dijeran a nadie, y empezó a anunciarles algo que no querían oír: que iba a sufrir mucho y a morir." },
          { type: "character", id: "pedro" },
        ],
      },
      {
        stop: "jerusalen",
        heading: "Rumbo a Jerusalén",
        blocks: [
          { type: "p", text: "Al final, Jesús decidió subir a Jerusalén para la fiesta de la Pascua, junto con miles de peregrinos. Bajó por el valle del Jordán, pasó por Jericó y subió hacia la ciudad." },
          { type: "image", id: "entrada" },
          { type: "p", text: "Entró montado en un burro, mientras algunos lo aclamaban con ramos: es lo que se recuerda el Domingo de Ramos. Fue el comienzo de su última semana. Pero antes de llegar ahí, la temporada se detiene en quiénes le acompañaban, qué contaba y qué hacía." },
        ],
      },
    ],
    relatedPills: ["existio-jesus", "nazarenos-y-capirotes"],
    quiz: [
      question("s2e1-duracion", "¿Cuánto duró la vida pública de Jesús, según la mayoría de los historiadores?", ["Unos meses", "Entre uno y tres años", "Diez años", "Toda su vida adulta"], 1, "Marcos, Mateo y Lucas parecen contar un año; Juan menciona tres Pascuas."),
      question("s2e1-base", "¿Qué pueblo fue la base de Jesús en Galilea?", ["Nazaret", "Belén", "Cafarnaúm", "Jericó"], 2, "Un pueblo de pescadores en la orilla norte del lago, donde vivía Pedro."),
      question("s2e1-profeta", "¿De dónde viene el refrán «nadie es profeta en su tierra»?", ["De un poema medieval", "De lo que dijo Jesús cuando lo rechazaron en Nazaret", "Del Quijote", "De un proverbio romano"], 1, "Lo recogen los evangelios (Marcos 6, 4; Lucas 4, 24)."),
    ],
    sources: [
      { text: "Evangelio de Marcos 1 – 11; evangelio de Lucas 3, 1 y 4, 16-30; evangelio de Juan 2, 13; 6, 4; 11, 55" },
      { text: "Gerd Theissen y Annette Merz, El Jesús histórico, Sígueme, 1999" },
    ],
    next: "En el próximo episodio: los Doce. Pescadores, un recaudador de impuestos, un rebelde y un traidor. Quiénes eran los que siguieron a Jesús y qué fue de ellos.",
  },
});
