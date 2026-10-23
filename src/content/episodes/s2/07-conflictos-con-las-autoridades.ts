import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  cafarnaum: holyLand.cafarnaum,
  tiberiades: holyLand.tiberiades,
  jerusalen: holyLand.jerusalen,
  cesarea: holyLand.cesarea,
};

export const conflictosConLasAutoridades = makeEpisode({
  slug: "conflictos-con-las-autoridades",
  title: "Conflictos con las autoridades",
  period: "c. 28 – 30",
  cover: "El Greco (Domenikos Theotokopoulos), Christ Cleansing the Temple, probably before 1570, NGA 43723.jpg",
  places,
  stops: [
    { id: "sabado", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "perdon", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "antipas", year: "c. 29 – 30", place: "tiberiades" },
    { id: "templo", year: "c. 30", place: "jerusalen" },
    { id: "porque", year: "c. 30", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "Conflictos con las autoridades",
    inAMinute: [
      "Jesús discutió con los fariseos sobre el sábado y la pureza, como se discutía entre maestros judíos.",
      "Escandalizaba que perdonara pecados, algo que solo correspondía a Dios.",
      "Herodes Antipas, que había matado a Juan, también lo vigilaba.",
      "El conflicto decisivo fue en el Templo de Jerusalén, cuando expulsó a los vendedores.",
      "Para los sacerdotes y para Roma, un profeta popular que hablaba de un «reino» era un peligro.",
    ],
    intro:
      "Ningún maestro que se limitara a hablar de amor acaba en una cruz. Jesús se ganó enemigos. Algunos discutían con él sobre la Ley; otros temían que su popularidad provocara un desastre. En este episodio vemos por qué un predicador de Galilea terminó siendo un problema.",
    sections: [
      {
        stop: "sabado",
        heading: "El sábado es para el hombre",
        blocks: [
          { type: "p", text: "Descansar el sábado era uno de los mandamientos más importantes para los judíos. Los maestros discutían con detalle qué estaba permitido y qué no: ¿se podía curar en sábado? ¿Arrancar unas espigas para comer?" },
          { type: "p", text: "Los evangelios cuentan varias discusiones de Jesús con fariseos por curar en sábado. Su respuesta se resume en una frase: «El sábado se hizo para el hombre, y no el hombre para el sábado»." },
          { type: "fact", label: "Ojo con los fariseos", text: "Los evangelios se escribieron cuando cristianos y fariseos ya estaban enfrentados, y los pintan a menudo como hipócritas. Pero eran maestros respetados, y discutir sobre la Ley era lo normal entre ellos. Jesús, en muchos puntos, estaba más cerca de los fariseos que de nadie." },
        ],
      },
      {
        stop: "perdon",
        heading: "«Tus pecados te son perdonados»",
        blocks: [
          { type: "p", text: "En Cafarnaúm, unos hombres abrieron un agujero en el techo de una casa para bajar a un paralítico hasta donde estaba Jesús, porque la multitud no les dejaba entrar. Jesús le dijo: «Hijo, tus pecados te son perdonados»." },
          { type: "p", text: "Algunos maestros de la Ley que estaban allí se escandalizaron: solo Dios puede perdonar pecados. Para ellos, aquello era una blasfemia. Y este fue uno de los puntos que más alarmó a quienes lo escuchaban: Jesús hablaba y actuaba con una autoridad que parecía la de Dios." },
        ],
      },
      {
        stop: "antipas",
        heading: "«Id a decirle a ese zorro»",
        blocks: [
          { type: "p", text: "Herodes Antipas, el gobernante de Galilea que había mandado ejecutar a Juan el Bautista, estaba al tanto de Jesús. Según Lucas, unos fariseos avisaron a Jesús de que Herodes quería matarlo." },
          { type: "character", id: "antipas" },
          { type: "p", text: "Su respuesta no fue precisamente diplomática: «Id a decirle a ese zorro…». Jesús siguió su camino, pero ya sabía que estaba en el punto de mira." },
        ],
      },
      {
        stop: "templo",
        heading: "El escándalo del Templo",
        blocks: [
          { type: "p", text: "El choque decisivo llegó en Jerusalén, días antes de la Pascua. Jesús entró en el gran patio del Templo, donde se vendían animales para los sacrificios y se cambiaba dinero, volcó las mesas de los cambistas y expulsó a los vendedores." },
          { type: "image", id: "expulsion" },
          { type: "p", text: "Dijo, citando a los profetas: «Mi casa será casa de oración para todos los pueblos, y vosotros la habéis convertido en una cueva de ladrones». Probablemente fue un gesto pequeño en un patio enorme, pero muy simbólico: un profeta de Galilea desafiando al centro del poder religioso, en plena fiesta y con la ciudad llena de peregrinos." },
          { type: "fact", label: "Historia", text: "Muchos historiadores creen que este gesto fue el detonante inmediato de su arresto. Los cuatro evangelios lo cuentan, aunque Juan lo sitúa al principio de la vida pública." },
        ],
      },
      {
        stop: "porque",
        heading: "¿Por qué lo querían quitar de en medio?",
        blocks: [
          { type: "p", text: "No hay una sola razón. Para algunos maestros, Jesús se tomaba libertades inaceptables con la Ley y hablaba como si fuera Dios. Para los sumos sacerdotes, que controlaban el Templo, era un agitador que amenazaba el orden en plena Pascua." },
          { type: "character", id: "caifas" },
          { type: "p", text: "Y para Roma, cualquier hombre al que la multitud aclamaba como rey o Mesías era un posible rebelde. El evangelio de Juan pone en boca de Caifás una frase que lo resume todo: «Conviene que muera un solo hombre por el pueblo, y no que perezca toda la nación»." },
          { type: "fact", label: "Una acusación terrible", text: "Durante siglos se culpó al «pueblo judío» de la muerte de Jesús, y esa idea alimentó persecuciones contra los judíos. Los historiadores y las propias iglesias la rechazan hoy: la decisión fue de un pequeño grupo de autoridades del Templo y, sobre todo, del gobernador romano, que era quien podía condenar a muerte." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo", "que-significa-inri"],
    quiz: [
      question("s2e7-sabado", "¿Qué dijo Jesús sobre el sábado?", ["Que había que abolirlo", "«El sábado se hizo para el hombre, y no el hombre para el sábado»", "Que había que trasladarlo al domingo", "Nada"], 1, "Lo recoge Marcos (2, 27)."),
      question("s2e7-templo", "¿Qué hizo Jesús en el Templo días antes de su muerte?", ["Ofreció un sacrificio", "Expulsó a los vendedores y volcó las mesas de los cambistas", "Se proclamó rey", "Leyó la Torá"], 1, "Muchos historiadores lo consideran el detonante de su arresto."),
      question("s2e7-condena", "¿Quién tenía poder para condenar a muerte en Judea?", ["El sumo sacerdote", "Herodes Antipas", "El gobernador romano", "Los fariseos"], 2, "Por eso Jesús fue llevado ante Poncio Pilato."),
    ],
    sources: [
      { text: "Evangelio de Marcos 2, 1-12 y 2, 23-28; 11, 15-18; evangelio de Lucas 13, 31-32; evangelio de Juan 11, 47-53" },
      { text: "E. P. Sanders, La figura histórica de Jesús, Verbo Divino, 2000" },
      { text: "Concilio Vaticano II, Nostra aetate, n. 4 (1965)" },
    ],
    next: "En el próximo episodio: la última noche. Una cena de Pascua con sus discípulos, pan y vino, un lavatorio de pies y un traidor en la mesa.",
  },
});
