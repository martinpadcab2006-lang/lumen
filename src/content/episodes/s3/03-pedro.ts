import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("jerusalen", "antioquia", "corinto", "roma");

export const pedro = makeEpisode({
  slug: "pedro",
  title: "Pedro",
  period: "c. 1 a. C. – c. 64-67",
  cover: "Crucifixion of Saint Peter-Caravaggio (c.1600).jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "pescador", year: "c. 28", place: "jerusalen" },
    { id: "roca", year: "c. 29", place: "jerusalen" },
    { id: "lider", year: "30 – 44", place: "jerusalen" },
    { id: "antioquia", year: "c. 49", place: "antioquia" },
    { id: "roma", year: "c. 64 – 67", place: "roma" },
    { id: "tumba", year: "1939 – 1968", place: "roma" },
  ],
  library: { ...library, places },
  version: {
    title: "Pedro",
    inAMinute: [
      "Simón era un pescador de Galilea al que Jesús le dio un nuevo nombre: Pedro, «piedra».",
      "Impulsivo y generoso, negó a Jesús tres veces la noche del arresto.",
      "Después de la resurrección fue el líder de los apóstoles y abrió la puerta a los no judíos.",
      "Según la tradición, murió crucificado en Roma en tiempos de Nerón.",
      "La basílica de San Pedro se levanta sobre el lugar donde se veneraba su tumba. Los católicos lo consideran el primer papa.",
    ],
    intro:
      "Si los evangelios tienen un personaje secundario con el que es fácil identificarse, es Pedro. Habla antes de pensar, promete más de lo que cumple, se hunde cuando duda y llora cuando falla. Y sin embargo, es él quien acaba siendo la roca. Esta es su historia.",
    sections: [
      {
        stop: "pescador",
        heading: "Simón, el pescador",
        blocks: [
          { type: "p", text: "Se llamaba Simón, hijo de Jonás. Era de Betsaida y vivía en Cafarnaúm, junto al lago de Galilea, con su mujer y su suegra: los evangelios cuentan que Jesús curó a su suegra de una fiebre. Sí, Pedro estaba casado." },
          { type: "image", id: "tissotPedro" },
          { type: "p", text: "Pescaba con su hermano Andrés. Era el primero en todo: el primero en hablar, en preguntar, en meter la pata. Cuando Jesús caminó sobre el agua, quiso hacer lo mismo, dio unos pasos y empezó a hundirse." },
        ],
      },
      {
        stop: "roca",
        heading: "«Tú eres Pedro»",
        blocks: [
          { type: "p", text: "Cuando Simón reconoció a Jesús como el Mesías, Jesús le respondió con un juego de palabras que en arameo suena así: «Tú eres Kefa, y sobre esta kefa edificaré mi Iglesia». Kefa significa «piedra» o «roca». En griego se tradujo por Petros, y de ahí viene «Pedro»." },
          { type: "character", id: "pedro" },
          { type: "p", text: "Pero la misma persona que recibió ese nombre negó tres veces conocer a Jesús la noche del arresto, por miedo, en el patio del sumo sacerdote. Los evangelios cuentan que, al cantar el gallo, «salió fuera y lloró amargamente». Ningún seguidor se habría inventado una escena así sobre su propio líder." },
          { type: "fact", label: "Una frase en la cúpula", text: "En la cúpula de la basílica de San Pedro, en Roma, está escrita en latín, en letras enormes, la frase: «Tú eres Pedro, y sobre esta piedra edificaré mi Iglesia»." },
        ],
      },
      {
        stop: "lider",
        heading: "El líder de los apóstoles",
        blocks: [
          { type: "p", text: "Después de la resurrección, Pedro se convierte en el portavoz de los apóstoles. Es él quien predica el día de Pentecostés, quien se enfrenta al Sanedrín y quien da un paso decisivo: según los Hechos, en Cesarea bautiza a Cornelio, un centurión romano, el primer no judío que se une a la comunidad." },
          { type: "p", text: "Fue encarcelado varias veces. Hacia el año 44 salió de Jerusalén y la dirección de la comunidad pasó a Santiago. Desde entonces, Pedro fue un misionero itinerante." },
        ],
      },
      {
        stop: "antioquia",
        heading: "Una bronca con Pablo",
        blocks: [
          { type: "p", text: "En Antioquía, Pedro comía con cristianos que no eran judíos, algo que la Ley judía desaconsejaba. Pero cuando llegaron unos enviados de Santiago, muy estrictos, Pedro se apartó de esas comidas para no escandalizarlos." },
          { type: "p", text: "Pablo se lo echó en cara delante de todos. Lo cuenta él mismo en su carta a los Gálatas: «Le planté cara, porque se había equivocado». Es una prueba de que los primeros cristianos no siempre estaban de acuerdo, y de que el debate sobre los no judíos fue intenso." },
        ],
      },
      {
        stop: "roma",
        heading: "Muerte en Roma",
        blocks: [
          { type: "p", text: "El Nuevo Testamento no cuenta el final de Pedro, pero una tradición muy antigua lo sitúa en Roma. Hacia el año 96, una carta de los cristianos de Roma, la Primera de Clemente, menciona su martirio, y a finales del siglo II ya se señalaba su tumba en la colina vaticana." },
          { type: "image", id: "crucifixionPedro" },
          { type: "p", text: "Según esa tradición, murió en la persecución de Nerón, hacia el año 64 o poco después, crucificado en el circo que había en la colina del Vaticano. Un texto del siglo II, los Hechos de Pedro, añade que pidió ser crucificado cabeza abajo porque no se sentía digno de morir como su maestro." },
        ],
      },
      {
        stop: "tumba",
        heading: "La tumba bajo el altar",
        blocks: [
          { type: "p", text: "En el siglo IV, Constantino construyó una basílica sobre el lugar donde los cristianos veneraban la tumba de Pedro. En el siglo XVI se levantó en el mismo sitio la actual basílica de San Pedro, con el altar mayor justo encima." },
          { type: "p", text: "Entre 1939 y 1950, unas excavaciones bajo la basílica encontraron una necrópolis romana y un pequeño monumento del siglo II, el «trofeo de Gayo», en el lugar que la tradición señalaba. En 1968, el papa Pablo VI anunció que se habían identificado de forma convincente unos huesos como los de Pedro. Muchos arqueólogos lo consideran probable; otros siguen teniendo dudas." },
          { type: "fact", label: "El primer papa", text: "Para la Iglesia católica, Pedro es el primer obispo de Roma y el primer papa, y sus sucesores heredan su papel. Las iglesias ortodoxas y protestantes reconocen la importancia de Pedro, pero no aceptan esa interpretación del papado. Puedes ver la lista completa en «Los papas»." },
        ],
      },
    ],
    relatedPills: ["por-que-los-curas-no-se-casan", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s3e3-nombre", "¿Qué significa «Pedro»?", ["Pescador", "Piedra o roca", "Fiel", "Primero"], 1, "Viene del arameo Kefa, traducido al griego como Petros."),
      question("s3e3-casado", "¿Estaba casado Pedro?", ["No, nunca", "Sí: los evangelios mencionan a su suegra", "Solo después de la resurrección", "No se sabe nada"], 1, "Jesús curó a su suegra en Cafarnaúm (Marcos 1, 29-31)."),
      question("s3e3-cornelio", "¿Quién fue Cornelio?", ["Un sumo sacerdote", "Un centurión romano, el primer no judío bautizado según los Hechos", "Un emperador", "Un apóstol"], 1, "Pedro lo bautizó en Cesarea (Hechos 10)."),
    ],
    sources: [
      { text: "Evangelio de Mateo 16, 13-20; Marcos 1, 29-31 y 14, 66-72; Hechos 10 y 12; Gálatas 2, 11-14" },
      { text: "Primera carta de Clemente 5; Eusebio, Historia eclesiástica II, 25" },
      { text: "Pablo VI, audiencia general del 26 de junio de 1968" },
    ],
    next: "En el próximo episodio: Pablo de Tarso. El perseguidor que se convirtió en el gran misionero del cristianismo.",
  },
});
