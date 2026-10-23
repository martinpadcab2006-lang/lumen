import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  cafarnaum: holyLand.cafarnaum,
  betsaida: holyLand.betsaida,
  magdala: holyLand.magdala,
  jerusalen: holyLand.jerusalen,
};

export const losApostoles = makeEpisode({
  slug: "los-apostoles",
  title: "Los apóstoles y los primeros discípulos",
  period: "c. 28 – 30",
  cover: "The Calling of Saint Matthew-Caravaggo (1599-1600).jpg",
  places,
  stops: [
    { id: "pescadores", year: "c. 28", place: "betsaida" },
    { id: "doce", year: "c. 28", place: "cafarnaum" },
    { id: "mateo", year: "c. 28", place: "cafarnaum" },
    { id: "mujeres", year: "c. 28 – 30", place: "magdala" },
    { id: "despues", year: "Después del año 30", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "Los apóstoles y los primeros discípulos",
    inAMinute: [
      "Jesús no predicaba solo: lo seguía un grupo de discípulos, hombres y mujeres.",
      "De entre ellos eligió a doce, los apóstoles, como las doce tribus de Israel.",
      "Varios eran pescadores del lago; uno, Mateo, cobraba impuestos; otro, Simón, era «zelote».",
      "Un grupo de mujeres, entre ellas María Magdalena, lo acompañaba y lo mantenía.",
      "Uno de los doce, Judas, lo entregó. Los demás llevarían su mensaje por el mundo.",
    ],
    intro:
      "Un maestro sin discípulos no deja huella. Jesús reunió a su alrededor a un grupo muy variado: pescadores, un recaudador de impuestos, un rebelde, mujeres ricas y mujeres sanadas. Ninguno era sacerdote ni sabio. Ellos fueron los primeros cristianos.",
    sections: [
      {
        stop: "pescadores",
        heading: "«Venid conmigo»",
        blocks: [
          { type: "p", text: "Según Marcos, los primeros en seguir a Jesús fueron dos parejas de hermanos, pescadores del lago de Galilea: Simón y Andrés, y Santiago y Juan, los hijos de Zebedeo. Jesús los vio echando las redes y les dijo: «Venid conmigo y os haré pescadores de hombres». Y dejaron las barcas." },
          { type: "image", id: "tissotPedro" },
          { type: "p", text: "No eran pobres de solemnidad: tenían barcas y, en el caso de Zebedeo, jornaleros. Pero tampoco eran gente importante. Hablaban arameo con acento de Galilea, del que se burlaban en Jerusalén." },
        ],
      },
      {
        stop: "doce",
        heading: "Doce, como las tribus de Israel",
        blocks: [
          { type: "p", text: "De entre todos los que lo seguían, Jesús eligió a doce. El número no es casual: Israel se había formado con doce tribus, y elegir a doce era un gesto que anunciaba la restauración de todo el pueblo de Dios. Se les llamó apóstoles, que en griego significa «enviados»." },
          {
            type: "words",
            items: [
              { term: "Simón Pedro", meaning: "Pescador. Jesús le puso el sobrenombre de «piedra». Siempre aparece el primero en las listas." },
              { term: "Andrés", meaning: "Hermano de Pedro. Según Juan, había sido discípulo de Juan el Bautista." },
              { term: "Santiago y Juan", meaning: "Hijos de Zebedeo, pescadores. Jesús los llamaba «hijos del trueno», quizá por su carácter." },
              { term: "Felipe y Bartolomé", meaning: "Felipe era de Betsaida. De Bartolomé casi no se sabe nada." },
              { term: "Mateo y Tomás", meaning: "Mateo, recaudador de impuestos. Tomás, el que dudó de la resurrección." },
              { term: "Santiago de Alfeo y Tadeo", meaning: "Casi desconocidos. Tadeo aparece en otras listas como Judas, hijo de Santiago." },
              { term: "Simón el Zelote", meaning: "Su apodo sugiere que había sido un nacionalista radical." },
              { term: "Judas Iscariote", meaning: "El que entregó a Jesús. Según Juan, llevaba la bolsa del dinero común." },
            ],
          },
          { type: "fact", label: "Todos varones, todos judíos", text: "Los Doce eran judíos de Galilea, salvo quizá Judas, cuyo apodo podría indicar que era de Judea. Algunas listas de los evangelios no coinciden del todo en los nombres." },
        ],
      },
      {
        stop: "mateo",
        heading: "Un recaudador y un rebelde en la misma mesa",
        blocks: [
          { type: "p", text: "Entre los Doce había un recaudador de impuestos, Mateo, que trabajaba para Herodes Antipas y que la gente consideraba un traidor. Y había un «zelote», Simón, alguien de quien se esperaría que odiara a los que colaboraban con el poder." },
          { type: "image", id: "mateo" },
          { type: "p", text: "Que Jesús los reuniera en el mismo grupo decía mucho de su mensaje. Cuando lo criticaron por comer con recaudadores y pecadores, respondió: «No necesitan médico los sanos, sino los enfermos»." },
          { type: "fact", label: "Un cuadro con historia", text: "En «La vocación de san Mateo», Caravaggio pintó a Jesús entrando en una oficina de su tiempo, con jugadores y contadores de monedas. Todavía hay debate sobre cuál de los personajes es Mateo." },
        ],
      },
      {
        stop: "mujeres",
        heading: "Las discípulas",
        blocks: [
          { type: "p", text: "Las listas de los Doce son solo de hombres, pero los evangelios dejan claro que también lo seguían mujeres, algo poco habitual para un maestro de la época. Lucas nombra a María Magdalena, a Juana, mujer de un alto funcionario de Herodes Antipas, a Susana y a «otras muchas», que lo ayudaban con sus bienes." },
          { type: "character", id: "magdalena" },
          { type: "p", text: "Fueron ellas las que estuvieron junto a la cruz cuando casi todos los hombres habían huido, y las primeras en llegar al sepulcro. Su papel tiene un episodio propio más adelante." },
        ],
      },
      {
        stop: "despues",
        heading: "¿Qué fue de ellos?",
        blocks: [
          { type: "p", text: "Después de la muerte de Jesús, los apóstoles se convirtieron en los líderes de la primera comunidad de Jerusalén. Sobre lo que hicieron después, casi todo lo que sabemos viene de tradiciones posteriores, más o menos fiables." },
          { type: "p", text: "Según esas tradiciones, Pedro murió en Roma; Santiago, hijo de Zebedeo, fue ejecutado en Jerusalén hacia el año 44, como cuentan los Hechos de los Apóstoles; Tomás llegó hasta la India, donde los «cristianos de santo Tomás» todavía lo consideran su fundador; Andrés predicó en Grecia." },
          { type: "character", id: "judas" },
          { type: "fact", label: "Santiago y España", text: "Una tradición medieval dice que Santiago el Mayor predicó en Hispania y que su cuerpo fue llevado a Galicia. Los historiadores no tienen pruebas de esa predicación, pero la tradición dio origen a Compostela y al Camino de Santiago." },
        ],
      },
    ],
    relatedPills: ["el-camino-de-santiago", "por-que-los-curas-no-se-casan"],
    quiz: [
      question("s2e2-apostol", "¿Qué significa «apóstol»?", ["Discípulo", "Enviado", "Pescador", "Santo"], 1, "Viene del griego apóstolos, «enviado»."),
      question("s2e2-doce", "¿Por qué eligió Jesús precisamente a doce?", ["Por los meses del año", "Por las doce tribus de Israel", "Por casualidad", "Por los signos del zodiaco"], 1, "Era un gesto que anunciaba la restauración de todo el pueblo de Dios."),
      question("s2e2-mateo", "¿A qué se dedicaba Mateo antes de seguir a Jesús?", ["Era pescador", "Era carpintero", "Cobraba impuestos", "Era sacerdote"], 2, "Por eso muchos lo consideraban un traidor."),
    ],
    sources: [
      { text: "Evangelio de Marcos 1, 16-20 y 3, 13-19; evangelio de Lucas 6, 12-16 y 8, 1-3; Hechos de los Apóstoles 1, 13 y 12, 2" },
      { text: "John P. Meier, Un judío marginal, vol. 3, Verbo Divino, 2003" },
    ],
    next: "En el próximo episodio: las parábolas. Un hijo que lo despilfarra todo, un extranjero que se para a ayudar, un sembrador con mala puntería. Las historias más famosas de Jesús.",
  },
});
