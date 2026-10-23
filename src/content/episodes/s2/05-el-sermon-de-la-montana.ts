import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  bienaventuranzas: holyLand.bienaventuranzas,
  cafarnaum: holyLand.cafarnaum,
  magdala: holyLand.magdala,
  jerusalen: holyLand.jerusalen,
};

export const elSermonDeLaMontana = makeEpisode({
  slug: "el-sermon-de-la-montana",
  title: "El Sermón de la Montaña",
  period: "c. 28 – 30",
  cover: "Bloch-SermonOnTheMount.jpg",
  places,
  stops: [
    { id: "sermon", year: "c. 28 – 30", place: "bienaventuranzas" },
    { id: "dichosos", year: "c. 28 – 30", place: "bienaventuranzas" },
    { id: "enemigos", year: "c. 28 – 30", place: "bienaventuranzas" },
    { id: "padrenuestro", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "huella", year: "Siglos XIX – XX", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "El Sermón de la Montaña",
    inAMinute: [
      "El Sermón de la Montaña es una recopilación de enseñanzas de Jesús que está en el evangelio de Mateo.",
      "Empieza con las bienaventuranzas: «Dichosos los pobres, los que lloran, los que trabajan por la paz…».",
      "Pide cosas muy exigentes: amar a los enemigos, no devolver el golpe, no juzgar.",
      "Incluye el Padrenuestro y la «regla de oro»: trata a los demás como quieres que te traten.",
      "Ha inspirado a personas como Tolstói, Gandhi o Martin Luther King.",
    ],
    intro:
      "Si alguien te pregunta qué enseñó Jesús, la mejor respuesta cabe en tres capítulos del evangelio de Mateo. Se llama el Sermón de la Montaña y contiene algunas de las frases más famosas de la historia. También algunas de las más difíciles de cumplir.",
    sections: [
      {
        stop: "sermon",
        heading: "Un discurso en una ladera",
        blocks: [
          { type: "p", text: "Mateo cuenta que Jesús, al ver a la multitud, subió a un monte, se sentó, como hacían los maestros, y empezó a enseñar. Ocupa los capítulos 5, 6 y 7 de su evangelio. Lucas tiene una versión más corta, que sucede en una llanura." },
          { type: "image", id: "bienaventuranzas" },
          { type: "p", text: "La mayoría de los especialistas piensa que no es un discurso pronunciado de una sola vez, sino una recopilación de enseñanzas de Jesús que Mateo ordenó como un gran sermón. Que Jesús hable desde un monte recuerda a Moisés, que recibió la Ley en el monte Sinaí." },
        ],
      },
      {
        stop: "dichosos",
        heading: "Dichosos los que no lo parecen",
        blocks: [
          { type: "p", text: "El sermón empieza con una lista sorprendente, las bienaventuranzas. Jesús llama «dichosos» precisamente a quienes nadie consideraría afortunados." },
          {
            type: "words",
            items: [
              { term: "Los pobres de espíritu", meaning: "Los que se saben necesitados ante Dios. Lucas dice simplemente «los pobres»." },
              { term: "Los que lloran", meaning: "Porque serán consolados." },
              { term: "Los mansos", meaning: "Los que no usan la violencia. «Heredarán la tierra»." },
              { term: "Los que tienen hambre y sed de justicia", meaning: "Porque serán saciados." },
              { term: "Los misericordiosos y los limpios de corazón", meaning: "Los que perdonan y los que actúan sin doblez." },
              { term: "Los que trabajan por la paz", meaning: "«Serán llamados hijos de Dios»." },
              { term: "Los perseguidos por la justicia", meaning: "«Porque de ellos es el Reino de los cielos»." },
            ],
          },
          { type: "p", text: "Es el mundo al revés: los primeros de este Reino son los últimos de la sociedad." },
        ],
      },
      {
        stop: "enemigos",
        heading: "Amad a vuestros enemigos",
        blocks: [
          { type: "p", text: "Después viene lo más radical. Jesús repite varias veces la fórmula «Habéis oído que se dijo… pero yo os digo», y lleva la Ley más lejos. No basta con no matar: tampoco hay que insultar. No basta con no cometer adulterio: tampoco hay que desear a la mujer de otro." },
          { type: "quote", text: "Habéis oído que se dijo: «Ojo por ojo y diente por diente». Pero yo os digo: no hagáis frente al que os hace mal. Al contrario, si alguien te pega en la mejilla derecha, preséntale también la otra.", source: "Mateo 5, 38-39" },
          { type: "p", text: "Y la frase más difícil de todas: «Amad a vuestros enemigos y rezad por los que os persiguen». En un territorio ocupado por soldados romanos, no era una idea abstracta." },
          { type: "fact", label: "Ojo por ojo", text: "«Ojo por ojo» no era una invitación a la venganza, sino un límite: el castigo no debía ser mayor que el daño. Jesús propone ir más allá y renunciar a devolver el golpe." },
        ],
      },
      {
        stop: "padrenuestro",
        heading: "El Padrenuestro y la regla de oro",
        blocks: [
          { type: "p", text: "En medio del sermón, Jesús enseña a rezar sin hacer espectáculo, «en lo secreto», y propone una oración breve. Es el Padrenuestro, la oración que comparten todas las iglesias cristianas y que rezan cada día cientos de millones de personas en todas las lenguas." },
          { type: "quote", text: "Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo.", source: "Mateo 6, 9-10 (versión litúrgica)" },
          { type: "p", text: "Y casi al final aparece la llamada «regla de oro»: «Tratad a los demás como queréis que ellos os traten». Otras tradiciones tienen versiones parecidas, casi siempre en negativo («no hagas a otro lo que no quieras para ti»). Jesús la formula en positivo: no basta con no hacer daño; hay que hacer el bien." },
        ],
      },
      {
        stop: "huella",
        heading: "Una huella en la historia",
        blocks: [
          { type: "p", text: "El Sermón de la Montaña ha inspirado a creyentes y no creyentes. El escritor ruso León Tolstói lo convirtió en el centro de su pensamiento y defendió la no violencia a partir de él." },
          { type: "p", text: "Gandhi, que era hindú, leyó a Tolstói y el Sermón de la Montaña, y dijo que lo había conmovido profundamente. Martin Luther King, pastor bautista, unió la enseñanza de Jesús y los métodos de Gandhi en la lucha por los derechos civiles en Estados Unidos." },
          { type: "p", text: "La pregunta que se han hecho los cristianos durante dos mil años es si se puede vivir de verdad así. Algunos, como los menonitas o los cuáqueros, renunciaron a las armas. Otros lo han visto como un ideal hacia el que caminar. Pocos textos han sido tan admirados y tan poco cumplidos." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo"],
    quiz: [
      question("s2e5-donde", "¿En qué evangelio está el Sermón de la Montaña?", ["Marcos", "Mateo", "Juan", "En los Hechos"], 1, "En los capítulos 5 a 7. Lucas tiene una versión más corta, «en la llanura»."),
      question("s2e5-regla", "¿Cuál es la «regla de oro»?", ["Ojo por ojo", "Tratad a los demás como queréis que os traten", "Rezad siete veces al día", "No trabajéis el sábado"], 1, "Jesús la formula en positivo: hacer el bien, no solo evitar el mal."),
      question("s2e5-gandhi", "¿Qué líder hindú se inspiró en el Sermón de la Montaña?", ["Nehru", "Gandhi", "Buda", "Tagore"], 1, "A través también de Tolstói, influyó en su idea de la no violencia."),
    ],
    sources: [
      { text: "Evangelio de Mateo 5 – 7; evangelio de Lucas 6, 17-49" },
      { text: "Mahatma Gandhi, Autobiografía. La historia de mis experimentos con la verdad" },
      { text: "Martin Luther King, La fuerza de amar (1963)" },
    ],
    next: "En el próximo episodio: con quién se juntaba Jesús. Mujeres, leprosos, recaudadores, niños y extranjeros: la gente que los demás apartaban.",
  },
});
