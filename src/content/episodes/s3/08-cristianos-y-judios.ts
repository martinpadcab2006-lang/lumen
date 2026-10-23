import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = { jerusalen: holyLand.jerusalen, yavne: holyLand.yavne, pella: holyLand.pella, cesarea: holyLand.cesarea };

export const cristianosYJudios = makeEpisode({
  slug: "cristianos-y-judios",
  title: "Cristianos y judíos",
  period: "30 – siglo IV",
  cover: "Arch_Titus,_relief_Jerusalem_treasure,_Forum_Romanum,_Rome,_Italy.jpg",
  places,
  stops: [
    { id: "judios", year: "30 – 40", place: "jerusalen" },
    { id: "concilio", year: "c. 49", place: "jerusalen" },
    { id: "templo", year: "70", place: "jerusalen" },
    { id: "separacion", year: "Siglos I – IV", place: "yavne" },
    { id: "hoy", year: "1965 – hoy", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "Cristianos y judíos",
    inAMinute: [
      "Jesús, los apóstoles y los primeros cristianos eran judíos.",
      "La gran pregunta fue si los no judíos tenían que cumplir la Ley judía para ser cristianos. Hacia el año 49 se decidió que no.",
      "Tras la destrucción del Templo en el año 70, judíos y cristianos siguieron caminos cada vez más distintos.",
      "La separación fue lenta y duró siglos.",
      "Por desgracia, después llegó el antijudaísmo cristiano. Hoy las iglesias lo rechazan y buscan el diálogo.",
    ],
    intro:
      "Hoy judaísmo y cristianismo son dos religiones distintas. Pero al principio no lo eran: el cristianismo nació como un movimiento dentro del judaísmo. ¿Cuándo y cómo se separaron? Es una de las historias más importantes y más delicadas de esta serie.",
    sections: [
      {
        stop: "judios",
        heading: "Al principio, todos judíos",
        blocks: [
          { type: "p", text: "Los primeros seguidores de Jesús eran judíos que seguían yendo al Templo, guardaban el sábado, comían según la Ley y circuncidaban a sus hijos. La única diferencia con sus vecinos era que creían que Jesús de Nazaret era el Mesías y que había resucitado." },
          { type: "p", text: "Había muchos grupos judíos distintos, como vimos en la temporada 1. Los seguidores de Jesús eran uno más, al que algunos llamaban «los nazarenos»." },
        ],
      },
      {
        stop: "concilio",
        heading: "¿Hay que circuncidarse?",
        blocks: [
          { type: "p", text: "El problema surgió cuando empezaron a unirse personas que no eran judías. ¿Tenían que circuncidarse y cumplir toda la Ley de Moisés, como cualquiera que se convertía al judaísmo? Unos decían que sí. Pablo y Bernabé decían que no: la fe en Jesús bastaba." },
          { type: "p", text: "Hacia el año 49 se reunieron en Jerusalén los apóstoles, los ancianos, Pablo, Bernabé y Santiago. Es lo que se ha llamado el «concilio de Jerusalén». Se decidió no imponer la circuncisión a los no judíos, pidiéndoles solo algunas normas mínimas para poder convivir con los cristianos judíos." },
          { type: "p", text: "Fue una decisión enorme. Abrió la puerta a que el cristianismo se convirtiera en una religión para todos los pueblos, y no en una corriente dentro del judaísmo." },
        ],
      },
      {
        stop: "templo",
        heading: "El año 70",
        blocks: [
          { type: "p", text: "En el año 70, los romanos destruyeron Jerusalén y su Templo. Para el judaísmo fue una catástrofe: se acabaron los sacrificios y el sumo sacerdote, y desaparecieron grupos como los saduceos." },
          { type: "image", id: "arcoTito" },
          { type: "p", text: "El judaísmo se reorganizó en torno a los maestros de la Ley, los rabinos, herederos de los fariseos. Según la tradición, se reunieron en Yavne, en la costa. De ahí nace el judaísmo rabínico, el que existe hoy, centrado en la Torá, la sinagoga y el estudio." },
          { type: "p", text: "Los cristianos, por su parte, vieron en la destrucción del Templo una señal de que había empezado algo nuevo. Cada grupo siguió su camino y fue definiéndose frente al otro." },
        ],
      },
      {
        stop: "separacion",
        heading: "Una separación lenta",
        blocks: [
          { type: "p", text: "Durante mucho tiempo se pensó que la separación ocurrió de golpe. Hoy los historiadores creen que fue un proceso largo y desigual, que en algunos lugares duró hasta el siglo IV. Había cristianos que seguían yendo a la sinagoga y celebrando las fiestas judías, y obispos que se lo reprochaban." },
          { type: "p", text: "Esa tensión se nota en los textos. El evangelio de Juan, escrito a finales del siglo I, habla a menudo de «los judíos» como adversarios de Jesús, aunque Jesús y sus discípulos también lo eran. Refleja la época de enfrentamiento en que se escribió." },
          { type: "fact", label: "Hermanos que se pelean", text: "Muchos especialistas comparan la separación con la de dos hermanos que crecen en la misma casa y acaban discutiendo sobre la herencia: los dos reclamaban ser los verdaderos herederos de las promesas de Israel." },
        ],
      },
      {
        stop: "hoy",
        heading: "De la hostilidad al diálogo",
        blocks: [
          { type: "p", text: "Cuando el cristianismo se convirtió en la religión del Imperio, la situación de los judíos empeoró. Durante siglos, muchos cristianos los acusaron de haber matado a Jesús, y ese antijudaísmo alimentó leyes discriminatorias, expulsiones como la de España en 1492 y matanzas. Preparó el terreno para el antisemitismo moderno." },
          { type: "p", text: "Tras el Holocausto, las iglesias cristianas revisaron su postura. En 1965, el Concilio Vaticano II rechazó la acusación contra el pueblo judío y condenó el antisemitismo. En 1986, Juan Pablo II fue el primer papa en visitar la sinagoga de Roma y llamó a los judíos «nuestros hermanos mayores»." },
          { type: "image", id: "muro" },
          { type: "p", text: "Hoy judíos y cristianos mantienen un diálogo que hace un siglo parecía imposible. Y los historiadores coinciden: no se puede entender a Jesús, ni a Pablo, ni el Nuevo Testamento sin conocer el judaísmo." },
        ],
      },
    ],
    relatedPills: ["catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s3e8-concilio", "¿Qué se decidió en la reunión de Jerusalén hacia el año 49?", ["Construir un templo cristiano", "No obligar a los no judíos a circuncidarse", "Elegir un papa", "Escribir los evangelios"], 1, "Fue la decisión que abrió el cristianismo a todos los pueblos."),
      question("s3e8-rabinico", "¿De qué grupo judío salió el judaísmo rabínico, el que existe hoy?", ["Los saduceos", "Los esenios", "Los fariseos", "Los zelotes"], 2, "Tras la destrucción del Templo, los maestros de la Ley reorganizaron el judaísmo."),
      question("s3e8-1986", "¿Qué hizo Juan Pablo II en 1986?", ["Visitó Jerusalén", "Fue el primer papa en visitar la sinagoga de Roma", "Convocó un concilio", "Viajó a Polonia"], 1, "Allí llamó a los judíos «nuestros hermanos mayores»."),
    ],
    sources: [
      { text: "Hechos de los Apóstoles 15; Gálatas 2" },
      { text: "James D. G. Dunn, The Partings of the Ways, SCM Press, 1991" },
      { text: "Concilio Vaticano II, Nostra aetate (1965); Juan Pablo II, discurso en la sinagoga de Roma (13 de abril de 1986)" },
    ],
    next: "En el próximo episodio, el último de la temporada: las mujeres de las primeras comunidades. Lidia, Priscila, Febe, Junia… y lo que pasó después.",
  },
});
