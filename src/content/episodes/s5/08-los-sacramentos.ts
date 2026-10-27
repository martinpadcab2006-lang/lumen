import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("jerusalen", "dura", "roma", "cartago", "trento");

export const losSacramentos = makeEpisode({
  slug: "los-sacramentos",
  title: "Los sacramentos",
  period: "Siglos I – XVI",
  cover: "Rogier van der Weyden - Seven Sacraments Altarpiece - WGA25602.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "signos", year: "c. 200 – 350", place: "jerusalen" },
    { id: "bautismo", year: "Siglos II – IV", place: "dura" },
    { id: "eucaristia", year: "c. 155", place: "roma" },
    { id: "perdon", year: "Siglos III – XIII", place: "cartago" },
    { id: "siete", year: "c. 1150 – 1563", place: "trento" },
  ],
  library: { ...library, places },
  version: {
    title: "Los sacramentos",
    inAMinute: [
      "Un sacramento es un signo visible (agua, pan, aceite…) que, según la fe cristiana, comunica algo invisible: la gracia de Dios.",
      "El bautismo y la eucaristía se celebran desde el principio del cristianismo.",
      "Hacia el año 155, Justino describió una misa en Roma muy parecida a las de hoy.",
      "La confesión empezó como una penitencia pública, muy dura, y se hizo privada gracias a los monjes irlandeses.",
      "La lista de siete sacramentos se fijó en la Edad Media; los protestantes conservan dos.",
    ],
    intro:
      "Agua, pan, vino, aceite, unas manos sobre la cabeza. Con gestos tan sencillos, los cristianos llevan dos mil años marcando los momentos importantes de la vida: nacer, crecer, equivocarse, casarse, enfermar, morir. ¿De dónde salen estos ritos?",
    sections: [
      {
        stop: "signos",
        heading: "¿Qué es un sacramento?",
        blocks: [
          { type: "p", text: "En griego se decía mysterion, «misterio». Hacia el año 200, el africano Tertuliano lo tradujo al latín como sacramentum, que era el juramento de fidelidad que hacían los soldados romanos al entrar en el ejército. El bautismo era como un juramento de lealtad a Cristo." },
          { type: "p", text: "A partir de las ideas de Agustín se hizo clásica esta definición: un sacramento es un signo visible de una gracia invisible. El agua del bautismo lava por fuera; los cristianos creen que, a la vez, Dios limpia por dentro." },
          { type: "fact", label: "Clases para recién bautizados", text: "Hacia el año 350, el obispo de Jerusalén explicaba a los recién bautizados, durante la semana de Pascua, el sentido de los ritos que acababan de vivir. Se conservan esas catequesis, atribuidas a Cirilo de Jerusalén: son una ventana única a cómo se vivían los sacramentos." },
        ],
      },
      {
        stop: "bautismo",
        heading: "El bautismo: nacer de nuevo",
        blocks: [
          { type: "p", text: "Convertirse al cristianismo no era rápido. Un texto de hacia el año 215, la Tradición apostólica, habla de una preparación, el catecumenado, que podía durar hasta tres años. El bautismo se celebraba normalmente en la noche de Pascua." },
          { type: "image", id: "dura" },
          { type: "p", text: "Los candidatos se desnudaban, renunciaban al mal y entraban en el agua. Allí se les preguntaba tres veces por su fe, en el Padre, en el Hijo y en el Espíritu Santo, y cada vez se les sumergía. Al salir, se les ungía con aceite, se les vestía de blanco y recibían por primera vez la eucaristía, a veces con leche y miel, el alimento de la tierra prometida." },
          { type: "fact", label: "El bautismo de Agustín", text: "Agustín fue bautizado por Ambrosio en la noche de Pascua del año 387, en Milán. Bajo la catedral actual se pueden ver todavía los restos del baptisterio octogonal donde ocurrió." },
        ],
      },
      {
        stop: "eucaristia",
        heading: "La eucaristía",
        blocks: [
          { type: "p", text: "Hacia el año 155, el filósofo Justino escribió al emperador para explicarle qué hacían los cristianos en sus reuniones. Su descripción es una de las más antiguas de una misa, y sorprende lo parecida que es a las de hoy." },
          { type: "quote", text: "El día que se llama del sol se celebra una reunión de todos los que viven en las ciudades o en los campos, y se leen los recuerdos de los apóstoles o los escritos de los profetas, mientras el tiempo lo permite.", source: "Justino, Primera apología 67" },
          { type: "p", text: "Después, quien presidía hacía una exhortación; todos rezaban de pie; se llevaban pan, vino y agua; se daba gracias sobre ellos y se repartían, y los diáconos llevaban una parte a los ausentes. Al final se hacía una colecta para huérfanos, viudas, enfermos y presos. «Eucaristía» significa precisamente eso: «acción de gracias»." },
          { type: "image", id: "fractio" },
        ],
      },
      {
        stop: "perdon",
        heading: "El perdón: de la plaza al confesionario",
        blocks: [
          { type: "p", text: "Ya vimos que, tras las persecuciones, se discutió si se podía perdonar a quienes habían renegado. Se impuso la penitencia pública: quien había cometido un pecado grave lo confesaba al obispo y pasaba un tiempo, a veces años, como «penitente», vestido de forma especial y sin poder comulgar. Solo se podía hacer una vez en la vida." },
          { type: "p", text: "Era tan dura que mucha gente la dejaba para el final de la vida. A partir del siglo VI, los monjes de Irlanda difundieron por Europa otra costumbre: confesar los pecados en privado a un sacerdote, recibir una penitencia y el perdón, y poder repetirlo tantas veces como hiciera falta. En 1215, un concilio pidió confesarse al menos una vez al año." },
        ],
      },
      {
        stop: "siete",
        heading: "¿Por qué siete?",
        blocks: [
          { type: "p", text: "Durante siglos se llamó «sacramento» a muchos ritos distintos. Hacia 1150, un profesor de París, Pedro Lombardo, fijó una lista de siete que tuvo éxito: bautismo, confirmación, eucaristía, penitencia, unción de los enfermos, orden sacerdotal y matrimonio. El Concilio de Trento la confirmó en el siglo XVI." },
          { type: "image", id: "sacramentos" },
          { type: "p", text: "Los reformadores protestantes, en cambio, solo reconocieron como sacramentos los dos que, según ellos, instituyó directamente Jesús en los evangelios: el bautismo y la cena del Señor. Las iglesias ortodoxas los llaman «misterios» y suelen contar también siete." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s5e8-sacramentum", "¿Qué era el sacramentum en el mundo romano?", ["Un templo", "El juramento de fidelidad de los soldados", "Una moneda", "Una fiesta"], 1, "Tertuliano usó la palabra para el bautismo."),
      question("s5e8-justino", "¿Qué describió Justino hacia el año 155?", ["Una batalla", "Una de las misas más antiguas que conocemos", "El Concilio de Nicea", "La construcción de una catedral"], 1, "Lecturas, oraciones, pan y vino, y una colecta para los pobres."),
      question("s5e8-protestantes", "¿Cuántos sacramentos reconocen la mayoría de los protestantes?", ["Ninguno", "Dos: bautismo y cena del Señor", "Siete", "Doce"], 1, "Los que, según ellos, instituyó Jesús en los evangelios."),
    ],
    sources: [
      { text: "Justino, Primera apología 61-67; Tradición apostólica 15-21; Cirilo de Jerusalén, Catequesis mistagógicas" },
      { text: "Catecismo de la Iglesia Católica, 1113-1134" },
      { text: "Josef A. Jungmann, El sacrificio de la misa, BAC, 1951" },
    ],
    next: "En el próximo episodio, el último de la temporada: cómo rezaban los primeros cristianos, de pie y con los brazos abiertos, y cómo nacieron la misa, el año litúrgico y los distintos ritos.",
  },
});
