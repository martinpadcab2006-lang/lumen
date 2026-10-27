import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("avila", "alba", "toledo", "ubeda", "salamanca");

export const laMistica = makeEpisode({
  slug: "la-mistica-espanola",
  title: "La mística española",
  period: "1515 – 1591",
  cover: "Santa Maria della Vittoria - Ecstasy of Saint Teresa.jpg",
  mapRegion: "peninsula",
  places,
  stops: [
    { id: "avila", year: "1515 – 1562", place: "avila" },
    { id: "fundadora", year: "1567 – 1582", place: "alba" },
    { id: "carcel", year: "1577 – 1578", place: "toledo" },
    { id: "noche", year: "1578 – 1591", place: "ubeda" },
    { id: "otros", year: "Siglo XVI", place: "salamanca" },
  ],
  library: { ...library, places },
  version: {
    title: "La mística española",
    inAMinute: [
      "La mística busca la experiencia directa de Dios en lo más profundo de uno mismo.",
      "Teresa de Jesús, monja de Ávila, reformó la orden del Carmelo y fundó diecisiete conventos.",
      "Escribió sobre la oración con una sencillez y un humor sorprendentes. Fue la primera mujer doctora de la Iglesia.",
      "Juan de la Cruz, su compañero de reforma, escribió en una cárcel de Toledo algunos de los mejores poemas en español.",
      "El siglo XVI fue el gran siglo espiritual español, aunque la Inquisición miraba a los místicos con sospecha.",
    ],
    intro:
      "En el siglo XVI, mientras España dominaba medio mundo, en sus conventos y celdas sucedía otra aventura: la de unos hombres y mujeres que exploraron el interior del alma. Sus libros, escritos en castellano y no en latín, son a la vez clásicos de la espiritualidad cristiana y de la literatura española.",
    sections: [
      {
        stop: "avila",
        heading: "Teresa de Ávila",
        blocks: [
          { type: "character", id: "teresa" },
          { type: "p", text: "De niña, Teresa leía vidas de santos con su hermano Rodrigo, y con unos siete años los dos se escaparon de casa para ir «a tierra de moros» a que les cortaran la cabeza y ser mártires. Un tío los encontró a la salida de la ciudad y los devolvió a casa." },
          { type: "p", text: "A los veinte años entró en el convento carmelita de la Encarnación, en Ávila, donde vivían casi doscientas monjas, con mucha vida social. Estuvo gravemente enferma, y pasó años de oración tibia. Hacia los cuarenta, ante una imagen de Cristo herido, vivió una conversión profunda." },
          { type: "image", id: "teresa" },
          { type: "p", text: "En 1562 fundó en Ávila un pequeño convento, San José, con trece monjas que vivían en pobreza, clausura y oración. Era el principio de las carmelitas descalzas, llamadas así porque llevaban sandalias en lugar de zapatos." },
        ],
      },
      {
        stop: "fundadora",
        heading: "La monja andariega",
        blocks: [
          { type: "p", text: "Durante los veinte años siguientes, Teresa recorrió Castilla y Andalucía en carros, a lomos de mula y a pie, con frío y calor, fundando conventos en Medina del Campo, Valladolid, Toledo, Salamanca, Segovia, Sevilla, Burgos… Diecisiete en total. Un nuncio del papa la llamó, con desprecio, «fémina inquieta y andariega»." },
          { type: "p", text: "Escribía como hablaba, con humor y sentido práctico. Para ella, la oración era sencillamente «tratar de amistad, estando muchas veces tratando a solas con quien sabemos nos ama». En «Las moradas» comparó el alma con un castillo de cristal con muchas habitaciones, en cuyo centro vive Dios." },
          { type: "image", id: "extasis" },
          { type: "fact", label: "La noche más larga", text: "Teresa murió en Alba de Tormes la noche del 4 de octubre de 1582. Esa misma noche entró en vigor el calendario gregoriano, y el día siguiente pasó a ser el 15 de octubre. Por eso su fiesta se celebra el 15." },
        ],
      },
      {
        stop: "carcel",
        heading: "Un poeta en la cárcel",
        blocks: [
          { type: "character", id: "juanCruz" },
          { type: "p", text: "Juan de la Cruz era un fraile carmelita pequeño y estudioso. Teresa lo convenció para extender su reforma a los frailes, y en 1568 fundaron el primer convento de carmelitas descalzos en Duruelo (Ávila)." },
          { type: "p", text: "La reforma provocó un enfrentamiento duro con los carmelitas que no la aceptaban. En diciembre de 1577, unos frailes de su propia orden lo secuestraron y lo encerraron en una celda diminuta y casi sin luz de su convento de Toledo. Allí pasó nueve meses, con hambre y castigos. Y allí compuso, de memoria, parte de su «Cántico espiritual». Escapó una noche de agosto de 1578 descolgándose por una ventana con tiras de mantas." },
        ],
      },
      {
        stop: "noche",
        heading: "La noche oscura",
        blocks: [
          { type: "p", text: "Para Juan de la Cruz, el camino hacia Dios pasa por una «noche oscura»: un vaciamiento en el que el alma se queda sin apoyos, sin consuelos y sin certezas, hasta encontrarse con Dios. Lo contó en un poema que empieza así:" },
          { type: "quote", text: "En una noche oscura, con ansias, en amores inflamada, ¡oh dichosa ventura!, salí sin ser notada, estando ya mi casa sosegada.", source: "San Juan de la Cruz, «Noche oscura»" },
          { type: "p", text: "Pasó sus últimos años en Andalucía, y murió en Úbeda en 1591, a los 49 años. Hoy se le considera uno de los mayores poetas de la lengua española, y en 1926 fue declarado doctor de la Iglesia." },
        ],
      },
      {
        stop: "otros",
        heading: "El siglo de oro espiritual",
        blocks: [
          { type: "p", text: "No estaban solos. Juan de Ávila, «el apóstol de Andalucía», fue un gran predicador y formador de sacerdotes, declarado doctor de la Iglesia en 2012. Fray Luis de Granada escribió libros de oración leídos en toda Europa. Y el agustino fray Luis de León, profesor en Salamanca, fue también un poeta extraordinario." },
          { type: "p", text: "Pero no eran tiempos fáciles para los místicos. La Inquisición desconfiaba de quienes hablaban de experiencias interiores, por miedo a los «alumbrados» y a los protestantes. Revisó el «Libro de la vida» de Teresa, y fray Luis de León pasó casi cinco años en la cárcel de la Inquisición en Valladolid por traducir al castellano el Cantar de los Cantares." },
          { type: "fact", label: "«Decíamos ayer…»", text: "Cuenta la tradición que, al volver a su cátedra de Salamanca tras cinco años preso, fray Luis empezó la clase con estas palabras: «Como decíamos ayer…». Es probablemente una leyenda, pero muy bien inventada." },
        ],
      },
    ],
    quiz: [
      question("s7e6-teresa", "¿Cuántos conventos fundó santa Teresa de Jesús?", ["Uno", "Diecisiete", "Cien", "Tres"], 1, "Por Castilla y Andalucía, durante veinte años."),
      question("s7e6-juan", "¿Dónde compuso Juan de la Cruz parte del «Cántico espiritual»?", ["En la Universidad de Salamanca", "En una celda donde lo tuvieron encerrado en Toledo", "En Roma", "En América"], 1, "Lo encerraron frailes de su propia orden."),
      question("s7e6-doctora", "¿Quién fue la primera mujer declarada doctora de la Iglesia, en 1970?", ["Catalina de Siena", "Teresa de Jesús", "Isabel la Católica", "Clara de Asís"], 1, "Catalina de Siena lo fue unos días después."),
    ],
    sources: [
      { text: "Teresa de Jesús, Libro de la vida 8, 5 y Las moradas; Juan de la Cruz, Noche oscura y Cántico espiritual" },
      { text: "Efrén de la Madre de Dios y Otger Steggink, Tiempo y vida de santa Teresa, BAC, 1968" },
      { text: "Teófanes Egido (dir.), Diccionario de santa Teresa, Monte Carmelo, 2000" },
    ],
    next: "En el próximo episodio: el cristianismo llega a América, Asia y África. Evangelización, conquista y los debates que provocó.",
  },
});
