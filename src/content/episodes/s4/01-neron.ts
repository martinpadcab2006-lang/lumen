import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "efeso", "patmos", "antioquia");

export const neron = makeEpisode({
  slug: "neron-y-las-primeras-persecuciones",
  title: "Nerón y las primeras persecuciones",
  period: "64 – 117",
  cover: "Henryk Siemiradzki - Pochodnie Nerona.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "incendio", year: "64", place: "roma" },
    { id: "culpables", year: "64", place: "roma" },
    { id: "porque", year: "Siglos I – II", place: "efeso" },
    { id: "domiciano", year: "c. 95", place: "patmos" },
    { id: "trajano", year: "c. 112", place: "antioquia" },
  ],
  library: { ...library, places },
  version: {
    title: "Nerón y las primeras persecuciones",
    inAMinute: [
      "En el año 64, un gran incendio destruyó buena parte de Roma.",
      "Según Tácito, Nerón culpó a los cristianos y los ejecutó de forma atroz.",
      "Los romanos desconfiaban de los cristianos: no adoraban a los dioses y se reunían en secreto.",
      "Durante los dos primeros siglos no hubo una persecución general, sino episodios locales.",
      "Hacia el año 112, Trajano fijó una regla: no buscarlos, pero castigarlos si los denunciaban y no renegaban.",
    ],
    intro:
      "Empieza la cuarta temporada, la de los perseguidos. Durante dos siglos y medio, ser cristiano en el Imperio romano podía costarte la vida. Todo empezó una noche de verano, con un incendio en Roma.",
    sections: [
      {
        stop: "incendio",
        heading: "Roma arde",
        blocks: [
          { type: "p", text: "La noche del 18 al 19 de julio del año 64 empezó un incendio junto al Circo Máximo de Roma. El fuego duró seis días y, tras apagarse, volvió a prender. De los catorce barrios de la ciudad, solo cuatro quedaron intactos." },
          { type: "p", text: "Muchos romanos sospecharon que el propio emperador Nerón lo había provocado para reconstruir la ciudad a su gusto: poco después empezó a levantar un palacio gigantesco, la Domus Aurea. La leyenda de que tocaba la lira mientras Roma ardía es eso, una leyenda, pero los rumores fueron reales." },
        ],
      },
      {
        stop: "culpables",
        heading: "Buscar culpables",
        blocks: [
          { type: "p", text: "Para acallar los rumores, Nerón necesitaba culpables. Y los encontró. Lo cuenta el historiador Tácito, que no sentía ninguna simpatía por los cristianos: Nerón acusó a un grupo «odiado por sus crímenes» al que la gente llamaba cristianos." },
          { type: "image", id: "antorchas" },
          { type: "p", text: "Los castigos fueron atroces: a unos los cubrieron con pieles de animales para que los despedazaran los perros, a otros los crucificaron, y a otros los quemaron para que sirvieran de antorchas por la noche en los jardines del emperador. Según Tácito, la crueldad fue tal que la gente empezó a sentir lástima de ellos." },
          { type: "fact", label: "Pedro y Pablo", text: "Según la tradición, los apóstoles Pedro y Pablo murieron en Roma en esta persecución o poco después." },
        ],
      },
      {
        stop: "porque",
        heading: "¿Por qué no gustaban?",
        blocks: [
          { type: "p", text: "Roma era tolerante con muchas religiones. ¿Por qué los cristianos no? Porque no adoraban a los dioses de la ciudad ni al emperador, y eso se veía como una amenaza: si los dioses se enfadaban, podían llegar epidemias, sequías o derrotas." },
          { type: "p", text: "Además, corrían rumores. Como se reunían en privado y hablaban de comer «el cuerpo» y beber «la sangre», y se llamaban «hermanos» y «hermanas», se les acusaba de canibalismo y de incesto. Y como no participaban en las fiestas públicas, se les consideraba enemigos del género humano." },
          { type: "fact", label: "Una burla antigua", text: "En una pared del Palatino, en Roma, apareció un grafiti del siglo II o III que se burla de un cristiano: muestra a un hombre adorando a un crucificado con cabeza de burro, con la inscripción «Alexámenos adora a su dios»." },
        ],
      },
      {
        stop: "domiciano",
        heading: "Persecuciones locales",
        blocks: [
          { type: "p", text: "Durante los siglos I y II no hubo una persecución organizada en todo el Imperio. Lo que había eran episodios locales: un gobernador severo, una multitud enfurecida tras una catástrofe, un vecino que denunciaba." },
          { type: "p", text: "La tradición cristiana recuerda especialmente al emperador Domiciano, a finales del siglo I. En su época se escribió el Apocalipsis, que habla de Roma como una gran bestia y de los creyentes que mueren por no adorarla." },
        ],
      },
      {
        stop: "trajano",
        heading: "La regla de Trajano",
        blocks: [
          { type: "p", text: "Hacia el año 112, Plinio el Joven, gobernador en el norte de la actual Turquía, recibió denuncias contra cristianos y no sabía qué hacer. Escribió al emperador Trajano, que había nacido en Itálica, junto a Sevilla. Su respuesta se convirtió en la norma durante más de un siglo." },
          { type: "quote", text: "No hay que buscarlos. Si se les denuncia y se demuestra, hay que castigarlos; pero si alguien niega ser cristiano y lo demuestra ofreciendo sacrificio a nuestros dioses, que sea perdonado.", source: "Respuesta de Trajano a Plinio (Cartas X, 97)" },
          { type: "p", text: "Es decir: ser cristiano era un delito, pero bastaba renegar para salvarse. Y no se admitían denuncias anónimas. Muchos cristianos vivieron tranquilos durante años; otros murieron por no renegar. De ellos trata el siguiente episodio." },
        ],
      },
    ],
    relatedPills: ["el-pez-simbolo-cristiano"],
    quiz: [
      question("s4e1-incendio", "¿En qué año ardió Roma y Nerón culpó a los cristianos?", ["En el 33", "En el 64", "En el 313", "En el 410"], 1, "Lo cuenta Tácito en sus Anales (XV, 44)."),
      question("s4e1-rumores", "¿De qué se acusaba falsamente a los cristianos?", ["De robar en los templos", "De canibalismo e incesto", "De no pagar impuestos", "De ser espías persas"], 1, "Se malinterpretaban la eucaristía y el trato de «hermanos»."),
      question("s4e1-trajano", "¿Qué estableció Trajano sobre los cristianos?", ["Perseguirlos a todos", "No buscarlos, pero castigarlos si los denunciaban y no renegaban", "Hacerlos ciudadanos", "Expulsarlos de Roma"], 1, "Fue la norma durante más de un siglo."),
    ],
    sources: [
      { text: "Tácito, Anales XV, 38-44; Suetonio, Vida de Nerón 16" },
      { text: "Plinio el Joven, Cartas X, 96-97" },
      { text: "Robert Louis Wilken, Los cristianos vistos por los romanos, Cristiandad, 1989" },
    ],
    next: "En el próximo episodio: los mártires. Ignacio, Policarpo, Perpetua, Lorenzo… y los mártires de Hispania.",
  },
});
