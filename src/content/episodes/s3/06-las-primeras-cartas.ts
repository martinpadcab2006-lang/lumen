import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("tesalonica", "corinto", "roma", "efeso", "patmos", "antioquia", "alejandria");

export const lasPrimerasCartas = makeEpisode({
  slug: "las-primeras-cartas",
  title: "Los primeros escritos cristianos",
  period: "c. 50 – 120",
  cover: "Probably Valentin de Boulogne - Saint Paul Writing His Epistles - Google Art Project.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "carta", year: "c. 50", place: "tesalonica" },
    { id: "pablo", year: "c. 50 – 60", place: "corinto" },
    { id: "evangelios", year: "c. 70 – 100", place: "antioquia" },
    { id: "otros", year: "c. 90 – 100", place: "patmos" },
    { id: "copias", year: "c. 200", place: "alejandria" },
  ],
  library: { ...library, places },
  version: {
    title: "Los primeros escritos cristianos",
    inAMinute: [
      "El texto cristiano más antiguo que se conserva es una carta de Pablo a los tesalonicenses, de hacia el año 50.",
      "Las cartas de Pablo son anteriores a los evangelios: se escribieron entre los años 50 y 60.",
      "Los evangelios llegaron después, entre los años 70 y 100, junto con los Hechos, otras cartas y el Apocalipsis.",
      "Todos se escribieron en griego, en papiro, y se copiaron a mano durante siglos.",
      "El Nuevo Testamento reúne 27 libros escritos en unos sesenta años.",
    ],
    intro:
      "Imagina que tu grupo de amigos se dispersa por medio mundo y solo puedes hablar con ellos por carta, que tarda semanas en llegar. Así nació la literatura cristiana: no con un libro sagrado, sino con cartas para resolver problemas muy concretos.",
    sections: [
      {
        stop: "carta",
        heading: "El texto más antiguo",
        blocks: [
          { type: "p", text: "Hacia el año 50, Pablo, que estaba en Corinto, escribió a la pequeña comunidad que había fundado en Tesalónica. Les animaba a seguir firmes, les daba consejos de vida y respondía a una duda que les angustiaba: ¿qué pasa con los que mueren antes de que vuelva Jesús?" },
          { type: "p", text: "Esa carta, la Primera a los Tesalonicenses, es el texto cristiano más antiguo que se conserva. Se escribió unos veinte años después de la muerte de Jesús y veinte años antes que el primer evangelio." },
          { type: "image", id: "pabloEscribe" },
        ],
      },
      {
        stop: "pablo",
        heading: "Las cartas de Pablo",
        blocks: [
          { type: "p", text: "El Nuevo Testamento contiene trece cartas que llevan el nombre de Pablo. Los especialistas están de acuerdo en que siete son suyas sin duda: Romanos, Primera y Segunda a los Corintios, Gálatas, Filipenses, Primera a los Tesalonicenses y Filemón. Las otras pudieron escribirlas discípulos suyos más tarde, algo habitual en la Antigüedad." },
          { type: "p", text: "Pablo no escribía con su propia mano: dictaba a un secretario y a veces añadía al final un saludo de su puño y letra. En la carta a los Romanos, el secretario se presenta: «Os saludo yo, Tercio, que he escrito esta carta»." },
          {
            type: "words",
            items: [
              { term: "Romanos", meaning: "La más larga y profunda. Pablo se presenta a una comunidad que no conoce y le explica su mensaje." },
              { term: "1 Corintios", meaning: "Respuestas a los problemas de Corinto. Incluye el famoso «himno al amor»." },
              { term: "Gálatas", meaning: "Una carta enfadada: defiende que los no judíos no necesitan circuncidarse." },
              { term: "Filemón", meaning: "La más corta: una carta personal a un amigo para que acoja a un esclavo fugitivo, Onésimo, como a un hermano." },
            ],
          },
        ],
      },
      {
        stop: "evangelios",
        heading: "Después llegaron los evangelios",
        blocks: [
          { type: "p", text: "Mientras vivían los que habían conocido a Jesús, los recuerdos se transmitían de palabra. Cuando esa generación empezó a desaparecer, y tras el trauma de la destrucción de Jerusalén en el año 70, se pusieron por escrito." },
          { type: "p", text: "El evangelio de Marcos, hacia el año 70, fue probablemente el primero. Después vinieron los de Mateo y Lucas, que lo usaron, y el de Juan, hacia el final del siglo. Lucas escribió además una segunda parte: los Hechos de los Apóstoles, la historia de los primeros cristianos." },
          { type: "fact", label: "¿Quién los escribió?", text: "Los evangelios no llevan firma. Los nombres de Mateo, Marcos, Lucas y Juan se los asignó la tradición en el siglo II. Muchos especialistas creen que sus autores reales fueron cristianos de la segunda generación." },
        ],
      },
      {
        stop: "otros",
        heading: "Cartas, profecías y un manual",
        blocks: [
          { type: "p", text: "Además de los evangelios y de las cartas de Pablo, el Nuevo Testamento incluye otras cartas atribuidas a Santiago, a Pedro, a Juan y a Judas, y la carta a los Hebreos, de autor desconocido." },
          { type: "p", text: "Y termina con un libro muy especial: el Apocalipsis, que en griego significa «revelación». Un cristiano llamado Juan lo escribió en la isla de Patmos hacia el año 95, con visiones llenas de símbolos: bestias, jinetes, una mujer vestida de sol, la nueva Jerusalén. Hablaba en clave de la persecución romana y de la esperanza en la victoria final de Dios." },
          { type: "fact", label: "Fuera de la Biblia", text: "Hay escritos cristianos de la misma época que no entraron en el Nuevo Testamento, como la Didaché, un pequeño manual de vida cristiana de finales del siglo I, o la carta de Clemente de Roma a los corintios, hacia el año 96." },
        ],
      },
      {
        stop: "copias",
        heading: "Copiados a mano",
        blocks: [
          { type: "p", text: "Ninguno de los originales se conserva. Se escribieron en papiro, un material frágil, y se copiaron a mano una y otra vez. Los primeros cristianos preferían el códice, un libro con páginas, en lugar del rollo: era más práctico y permitía reunir varios textos." },
          { type: "image", id: "p46" },
          { type: "p", text: "El papiro P46, de hacia el año 200, es la colección más antigua de cartas de Pablo que tenemos. Se encontró en Egipto y hoy está repartido entre Dublín y la Universidad de Míchigan. Cómo se decidió qué libros entraban en la Biblia es otra historia, que contaremos en la temporada 5." },
        ],
      },
    ],
    relatedPills: ["73-o-66-libros", "existio-jesus"],
    quiz: [
      question("s3e6-antiguo", "¿Cuál es el texto cristiano más antiguo que se conserva?", ["El evangelio de Marcos", "La Primera carta a los Tesalonicenses", "El Apocalipsis", "El evangelio de Juan"], 1, "Pablo la escribió hacia el año 50."),
      question("s3e6-apocalipsis", "¿Qué significa «Apocalipsis»?", ["Fin del mundo", "Revelación", "Catástrofe", "Batalla"], 1, "En griego, apokálypsis es «revelación», «quitar el velo»."),
      question("s3e6-filemon", "¿De qué trata la carta a Filemón?", ["De la resurrección", "De un esclavo fugitivo al que hay que acoger como hermano", "De la circuncisión", "De Pedro"], 1, "Es la carta más corta de Pablo."),
    ],
    sources: [
      { text: "Primera carta a los Tesalonicenses; Romanos 16, 22; Apocalipsis 1, 9" },
      { text: "Bart D. Ehrman, Jesús no dijo eso, Ares y Mares, 2007" },
      { text: "Senén Vidal, Las cartas originales de Pablo, Trotta, 1996" },
    ],
    next: "En el próximo episodio: cómo eran por dentro las primeras comunidades. Reuniones en casas, comidas compartidas, bautismos en el río y la iglesia más antigua del mundo.",
  },
});
