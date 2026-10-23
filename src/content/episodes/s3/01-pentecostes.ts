import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = { jerusalen: holyLand.jerusalen, cafarnaum: holyLand.cafarnaum };

export const pentecostes = makeEpisode({
  slug: "pentecostes",
  title: "Pentecostés",
  period: "c. 30",
  cover: "Maino Pentecostés. Lienzo. 285 x 163 cm. Museo del Prado.jpg",
  places,
  stops: [
    { id: "fiesta", year: "c. 30", place: "jerusalen" },
    { id: "fuego", year: "c. 30", place: "jerusalen" },
    { id: "pedro", year: "c. 30", place: "jerusalen" },
    { id: "historia", year: "c. 80 – 90", place: "jerusalen" },
    { id: "iglesia", year: "Desde entonces", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "Pentecostés",
    inAMinute: [
      "Pentecostés era una fiesta judía, cincuenta días después de la Pascua, que llenaba Jerusalén de peregrinos.",
      "Según los Hechos de los Apóstoles, ese día los discípulos recibieron el Espíritu Santo, como un viento y unas lenguas de fuego.",
      "Empezaron a hablar de Jesús en público, y cada peregrino los entendía en su lengua.",
      "Pedro predicó y se unieron unas tres mil personas.",
      "Por eso se considera Pentecostés el nacimiento de la Iglesia.",
    ],
    intro:
      "Empieza la tercera temporada. Los discípulos de Jesús llevaban semanas reunidos en Jerusalén, esperando algo sin saber muy bien qué. El día de una gran fiesta judía, salieron a la calle y empezaron a hablar. Ya no pararían.",
    sections: [
      {
        stop: "fiesta",
        heading: "Una fiesta judía",
        blocks: [
          { type: "p", text: "«Pentecostés» significa en griego «quincuagésimo»: el día cincuenta después de la Pascua. Para los judíos era la fiesta de Shavuot, la de las semanas, en la que se ofrecían los primeros frutos de la cosecha de trigo y se recordaba el regalo de la Ley en el Sinaí." },
          { type: "p", text: "Era una de las tres fiestas de peregrinación. Jerusalén se llenaba de judíos venidos de todo el mundo: de Egipto, de Roma, de Mesopotamia, de Asia Menor, de Arabia. Cada grupo hablaba su lengua." },
        ],
      },
      {
        stop: "fuego",
        heading: "Viento y fuego",
        blocks: [
          { type: "p", text: "Los Hechos de los Apóstoles, escritos por Lucas, cuentan que los discípulos estaban reunidos en una casa cuando se oyó un ruido del cielo, como un viento muy fuerte, y aparecieron sobre cada uno lenguas como de fuego. «Quedaron todos llenos del Espíritu Santo», dice el texto, y empezaron a hablar en otras lenguas." },
          { type: "image", id: "pentecostesMaino" },
          { type: "p", text: "Al oír el alboroto, se juntó una multitud. Y cada uno los oía hablar en su propia lengua. Algunos, desconcertados, se reían: «Están borrachos». Era por la mañana." },
          { type: "fact", label: "Babel al revés", text: "En el libro del Génesis, en la torre de Babel, Dios confunde las lenguas de los hombres y ya no se entienden. En Pentecostés ocurre lo contrario: gente de lenguas distintas se entiende. Lucas lo cuenta así a propósito." },
        ],
      },
      {
        stop: "pedro",
        heading: "El primer sermón de Pedro",
        blocks: [
          { type: "p", text: "Entonces Pedro, el mismo que unas semanas antes había negado conocer a Jesús, se puso en pie y habló a la multitud. Les dijo que no estaban borrachos, que se estaba cumpliendo lo que había anunciado el profeta Joel, y que aquel Jesús de Nazaret al que habían crucificado había resucitado." },
          { type: "character", id: "pedro" },
          { type: "p", text: "Muchos le preguntaron qué tenían que hacer. «Convertíos y bautizaos en el nombre de Jesucristo», respondió. Según los Hechos, ese día se bautizaron unas tres mil personas." },
        ],
      },
      {
        stop: "historia",
        heading: "¿Qué puede decir la historia?",
        blocks: [
          { type: "p", text: "El relato de Pentecostés solo está en los Hechos de los Apóstoles, escritos unos cincuenta años después. Lucas lo cuenta con mucha carga simbólica: las lenguas, el viento, el fuego, la lista de pueblos. Los historiadores no pueden comprobar lo que pasó aquel día ni la cifra de tres mil." },
          { type: "p", text: "Lo que sí parece claro es que, muy pocas semanas después de la muerte de Jesús, sus seguidores salieron de su escondite y empezaron a proclamar en Jerusalén que había resucitado, con una seguridad que sorprendió a todos. Ellos lo atribuyeron a la fuerza del Espíritu de Dios." },
        ],
      },
      {
        stop: "iglesia",
        heading: "El cumpleaños de la Iglesia",
        blocks: [
          { type: "image", id: "pentecostesGiotto" },
          { type: "p", text: "Por eso los cristianos consideran Pentecostés el nacimiento de la Iglesia, el día en que aquel grupo de discípulos empezó a ser una comunidad abierta a todos. Lo celebran cincuenta días después del Domingo de Resurrección, y cierra el tiempo de Pascua." },
          { type: "p", text: "En España, el lunes de Pentecostés es festivo en algunos lugares, como Barcelona, donde se le llama «Pascua Granada». Y la romería del Rocío, en Huelva, se celebra precisamente ese fin de semana." },
        ],
      },
    ],
    relatedPills: ["por-que-semana-santa-cambia-de-fecha"],
    quiz: [
      question("s3e1-significa", "¿Qué significa «Pentecostés»?", ["Fuego", "Quincuagésimo (día cincuenta)", "Espíritu", "Fiesta de las lenguas"], 1, "Se celebra cincuenta días después de la Pascua."),
      question("s3e1-judia", "¿Qué fiesta judía se celebraba ese día?", ["Pascua", "Shavuot, la fiesta de las semanas y la cosecha", "Janucá", "Yom Kipur"], 1, "Se ofrecían los primeros frutos del trigo y se recordaba el regalo de la Ley."),
      question("s3e1-babel", "¿Con qué relato de la Biblia contrasta Pentecostés?", ["El diluvio", "La torre de Babel", "El arca de Noé", "La creación"], 1, "En Babel la gente deja de entenderse; en Pentecostés, gente de lenguas distintas se entiende."),
    ],
    sources: [
      { text: "Hechos de los Apóstoles 2; Génesis 11, 1-9; Joel 3, 1-5" },
      { text: "Rafael Aguirre (ed.), Así empezó el cristianismo, Verbo Divino, 2010" },
    ],
    next: "En el próximo episodio: cómo vivían los primeros cristianos de Jerusalén. Lo ponían todo en común, rezaban en el Templo y tuvieron su primer mártir.",
  },
});
