import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("jerusalen", "babilonia", "efeso", "hipona", "roma");

export const antiguoYNuevo = makeEpisode({
  slug: "antiguo-y-nuevo-testamento",
  title: "El Antiguo y el Nuevo Testamento",
  period: "Siglo X a. C. – siglo II",
  cover: "Rembrandt - Moses with the Ten Commandments - Google Art Project.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "alianza", year: "Toda la Biblia", place: "jerusalen" },
    { id: "antiguo", year: "Siglos X – I a. C.", place: "jerusalen" },
    { id: "exilio", year: "587 – 538 a. C.", place: "babilonia" },
    { id: "nuevo", year: "c. 50 – 120", place: "efeso" },
    { id: "relacion", year: "Siglos II – V", place: "hipona" },
  ],
  library: { ...library, places },
  version: {
    title: "El Antiguo y el Nuevo Testamento",
    inAMinute: [
      "«Testamento» aquí significa «alianza»: el pacto entre Dios y su pueblo.",
      "El Antiguo Testamento son las Escrituras judías: la Ley, la historia de Israel, los salmos y los profetas.",
      "Muchos de sus textos tomaron forma durante el exilio en Babilonia.",
      "El Nuevo Testamento tiene 27 libros, escritos en griego en el siglo I: evangelios, Hechos, cartas y Apocalipsis.",
      "Para los cristianos, los dos forman una sola historia: lo que se promete en el Antiguo se cumple en el Nuevo.",
    ],
    intro:
      "Abre cualquier Biblia cristiana y verás que está partida en dos. La primera parte, mucho más larga, se escribió antes de Jesús. La segunda, después. ¿Qué hay en cada una? ¿Y por qué los cristianos no se quedaron solo con la segunda?",
    sections: [
      {
        stop: "alianza",
        heading: "¿Por qué «testamento»?",
        blocks: [
          { type: "p", text: "Aquí «testamento» no tiene nada que ver con una herencia. Es la traducción latina, testamentum, de una palabra hebrea, berit, que significa «alianza» o «pacto»." },
          { type: "p", text: "La idea central de toda la Biblia es que Dios hace una alianza con su pueblo: con Noé, con Abraham, con Moisés en el monte Sinaí. Los cristianos creen que Jesús selló una «nueva alianza», como había anunciado el profeta Jeremías. De ahí los dos nombres." },
        ],
      },
      {
        stop: "antiguo",
        heading: "Qué hay en el Antiguo Testamento",
        blocks: [
          { type: "p", text: "El Antiguo Testamento son, básicamente, las Escrituras sagradas del pueblo judío, que los judíos llaman Tanaj. Los cristianos las agrupan en cuatro bloques." },
          {
            type: "words",
            items: [
              { term: "El Pentateuco", meaning: "Los cinco primeros libros, la Torá o Ley: la creación, Abraham, Moisés, la salida de Egipto y los mandamientos." },
              { term: "Los libros históricos", meaning: "La historia de Israel: la llegada a la tierra prometida, los jueces, los reyes David y Salomón, la división del reino." },
              { term: "Los libros sapienciales", meaning: "Poesía y sabiduría: los Salmos, los Proverbios, Job, el Cantar de los Cantares." },
              { term: "Los profetas", meaning: "Isaías, Jeremías, Ezequiel y otros, que hablaban en nombre de Dios y denunciaban las injusticias." },
            ],
          },
          { type: "image", id: "moises" },
        ],
      },
      {
        stop: "exilio",
        heading: "Escrito en la catástrofe",
        blocks: [
          { type: "p", text: "En el año 587 antes de Cristo, el rey Nabucodonosor de Babilonia destruyó Jerusalén y su Templo, y se llevó deportada a buena parte de la población. Para el pueblo de Israel fue un desastre total: sin tierra, sin rey y sin templo." },
          { type: "p", text: "Muchos historiadores creen que en ese exilio se recopilaron y se pusieron en orden muchos de los textos antiguos de Israel. Recordar su historia y su Ley fue la manera de no desaparecer como pueblo. «Junto a los ríos de Babilonia nos sentábamos y llorábamos», dice el Salmo 137." },
        ],
      },
      {
        stop: "nuevo",
        heading: "Qué hay en el Nuevo Testamento",
        blocks: [
          { type: "p", text: "El Nuevo Testamento es mucho más corto, y se escribió en muy poco tiempo, en unos setenta años, en griego. Lo más antiguo son las cartas de Pablo, hacia el año 50. Lo más reciente, seguramente algunas cartas de finales del siglo I o principios del II." },
          {
            type: "numbers",
            title: "Los 27 libros del Nuevo Testamento",
            items: [
              { value: "4", label: "evangelios: Mateo, Marcos, Lucas y Juan" },
              { value: "1", label: "libro de los Hechos de los Apóstoles" },
              { value: "21", label: "cartas, la mitad atribuidas a Pablo" },
              { value: "1", label: "Apocalipsis, un libro de visiones" },
            ],
          },
          { type: "fact", label: "¿Y los capítulos y versículos?", text: "Los autores no los pusieron. La división en capítulos la hizo a principios del siglo XIII Esteban Langton, profesor en París y después arzobispo de Canterbury. Los versículos del Nuevo Testamento los numeró en 1551 un impresor, Robert Estienne, durante un viaje a caballo, según contaba su hijo." },
        ],
      },
      {
        stop: "relacion",
        heading: "Una sola historia",
        blocks: [
          { type: "p", text: "En el siglo II, un rico armador llamado Marción propuso tirar el Antiguo Testamento: según él, el Dios severo de los judíos no era el Dios amoroso de Jesús. La Iglesia de Roma lo expulsó. Los cristianos decidieron que los dos testamentos hablan del mismo Dios." },
          { type: "quote", text: "El Nuevo está escondido en el Antiguo, y el Antiguo se hace claro en el Nuevo.", source: "San Agustín, Cuestiones sobre el Heptateuco 2, 73" },
          { type: "p", text: "Por eso en una misa católica se leen pasajes de los dos: normalmente una lectura del Antiguo Testamento, un salmo, una lectura del Nuevo y un pasaje del evangelio. Y por eso judíos y cristianos comparten una gran parte de sus libros sagrados, aunque los lean de manera distinta." },
        ],
      },
    ],
    relatedPills: ["73-o-66-libros"],
    quiz: [
      question("s5e2-testamento", "¿Qué significa «testamento» en «Antiguo Testamento»?", ["Herencia", "Alianza", "Libro", "Ley"], 1, "Traduce la palabra hebrea berit, «pacto»."),
      question("s5e2-nt", "¿Cuántos libros tiene el Nuevo Testamento?", ["4", "12", "27", "73"], 2, "4 evangelios, Hechos, 21 cartas y el Apocalipsis."),
      question("s5e2-marcion", "¿Qué proponía Marción en el siglo II?", ["Escribir un quinto evangelio", "Eliminar el Antiguo Testamento", "Traducir la Biblia al latín", "Añadir libros nuevos"], 1, "La Iglesia lo rechazó: los dos testamentos hablan del mismo Dios."),
    ],
    sources: [
      { text: "Concilio Vaticano II, constitución Dei Verbum, 14-16" },
      { text: "Agustín de Hipona, Quaestiones in Heptateuchum II, 73" },
      { text: "Raymond E. Brown, Introducción al Nuevo Testamento, Trotta, 2002" },
    ],
    next: "En el próximo episodio: ¿quién decidió qué libros entraban en la Biblia y cuáles se quedaban fuera? La historia del canon.",
  },
});
