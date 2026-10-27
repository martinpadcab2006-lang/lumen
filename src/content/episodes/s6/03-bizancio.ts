import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("constantinopla", "ravena", "nicea", "atos", "kiev");

export const bizancio = makeEpisode({
  slug: "bizancio",
  title: "Bizancio y la Iglesia de Oriente",
  period: "527 – 1453",
  cover: "Justinian mosaic, San Vitale, consecrated 547, Ravenna, Italy.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "justiniano", year: "527 – 565", place: "constantinopla" },
    { id: "ravena", year: "540 – 751", place: "ravena" },
    { id: "iconos", year: "726 – 843", place: "nicea" },
    { id: "atos", year: "963 – hoy", place: "atos" },
    { id: "kiev", year: "988 – 1453", place: "kiev" },
  ],
  library: { ...library, places },
  version: {
    title: "Bizancio y la Iglesia de Oriente",
    inAMinute: [
      "La mitad oriental del Imperio romano, con capital en Constantinopla, duró hasta 1453. Hoy la llamamos Bizancio.",
      "El emperador Justiniano construyó Santa Sofía, la iglesia más grande del mundo durante casi mil años.",
      "Entre los siglos VIII y IX, Bizancio se dividió en una guerra sobre los iconos: ¿se podían venerar imágenes?",
      "El monte Athos, una península llena de monasterios, sigue siendo el corazón espiritual de los ortodoxos.",
      "Desde Bizancio, el cristianismo ortodoxo llegó a los pueblos eslavos: Bulgaria, Serbia, Kiev, Rusia.",
    ],
    intro:
      "Cuando en el año 476 cayó el último emperador de Occidente, en Oriente el Imperio romano siguió en pie. Sus habitantes se llamaban a sí mismos «romanos», aunque hablaban griego. Nosotros los llamamos bizantinos, por Bizancio, el antiguo nombre de Constantinopla. Durante mil años más, fue el centro del cristianismo de Oriente.",
    sections: [
      {
        stop: "justiniano",
        heading: "Justiniano y Santa Sofía",
        blocks: [
          { type: "character", id: "justiniano" },
          { type: "p", text: "En el año 532, una revuelta en el hipódromo de Constantinopla, la de Niká, casi derriba a Justiniano y quemó media ciudad, incluida la catedral. El emperador decidió construir una nueva, la más grande jamás vista. Se terminó en solo cinco años, en el 537." },
          { type: "image", id: "santaSofiaExterior" },
          { type: "p", text: "Santa Sofía, la iglesia de la «Santa Sabiduría», tiene una cúpula de más de 30 metros de diámetro que parece flotar sobre una corona de ventanas. Según una tradición posterior, al entrar por primera vez Justiniano exclamó: «¡Salomón, te he superado!». Fue la iglesia más grande del mundo durante casi mil años." },
        ],
      },
      {
        stop: "ravena",
        heading: "Bizancio en Italia",
        blocks: [
          { type: "p", text: "Justiniano soñaba con recuperar el Imperio de Occidente. Sus generales reconquistaron el norte de África, Italia e incluso el sur de Hispania. En Italia, la capital bizantina fue Rávena, que se llenó de iglesias cubiertas de mosaicos dorados." },
          { type: "image", id: "justiniano" },
          { type: "p", text: "En la iglesia de San Vital, Justiniano y su esposa Teodora aparecen frente a frente con su corte, llevando ofrendas al altar. Es la imagen perfecta de cómo se veían los bizantinos: el emperador como representante de Dios en la tierra, muy cerca de la Iglesia. Los bizantinos se mantuvieron en Rávena hasta el año 751." },
        ],
      },
      {
        stop: "iconos",
        heading: "La guerra de los iconos",
        blocks: [
          { type: "p", text: "Los bizantinos veneraban los iconos: imágenes pintadas de Cristo, la Virgen y los santos. Pero hacia el año 726, el emperador León III empezó a retirarlos: pensaba que eran idolatría, quizá influido por el éxito del islam, que prohíbe las imágenes. Comenzó así la iconoclasia, «la rotura de imágenes»." },
          { type: "p", text: "Fue una lucha de más de un siglo. Muchos iconos se destruyeron y los monjes que los defendían fueron perseguidos. El teólogo Juan Damasceno explicó la diferencia: a Dios se le adora; a las imágenes se las venera, porque el honor que se da a la imagen pasa a quien representa. El II Concilio de Nicea, en el 787, le dio la razón." },
          { type: "fact", label: "El triunfo de la ortodoxia", text: "La disputa terminó definitivamente en el año 843, gracias a la emperatriz Teodora, que restauró los iconos. Las Iglesias ortodoxas lo siguen celebrando cada año, el primer domingo de Cuaresma, como el «domingo de la ortodoxia»." },
        ],
      },
      {
        stop: "atos",
        heading: "La montaña de los monjes",
        blocks: [
          { type: "p", text: "En el año 963, un monje llamado Atanasio fundó en el monte Athos, una península montañosa del norte de Grecia, el gran monasterio de Lavra. Le siguieron muchos otros. Hoy hay veinte grandes monasterios con unos dos mil monjes llegados de Grecia, Rusia, Serbia, Bulgaria, Rumanía o Georgia." },
          { type: "p", text: "El Athos es una república monástica autónoma dentro de Grecia, con sus propias normas. La más famosa: desde hace casi mil años no se permite la entrada a mujeres, ni siquiera a las hembras de la mayoría de los animales domésticos." },
        ],
      },
      {
        stop: "kiev",
        heading: "Kiev, Moscú y la «tercera Roma»",
        blocks: [
          { type: "p", text: "Desde Constantinopla, los misioneros bizantinos llevaron el cristianismo a los pueblos eslavos. En el año 988, el príncipe Vladímir de Kiev se bautizó y pidió el bautismo de su pueblo. De ahí nace el cristianismo ortodoxo de Ucrania, Bielorrusia y Rusia." },
          { type: "image", id: "santaSofia" },
          { type: "p", text: "El 29 de mayo de 1453, tras un largo asedio, el sultán otomano Mehmed II conquistó Constantinopla. El último emperador murió luchando en las murallas, y Santa Sofía se convirtió en mezquita. Era el fin del Imperio romano, casi dos mil años después de la fundación de Roma." },
          { type: "p", text: "Los príncipes de Moscú se presentaron entonces como herederos de Bizancio: si la primera Roma había caído en el error y la segunda, Constantinopla, en manos de los turcos, Moscú sería la «tercera Roma». Su título de zar viene del latín caesar." },
        ],
      },
    ],
    relatedPills: ["iconos-ortodoxos", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s6e3-sofia", "¿Qué emperador construyó Santa Sofía de Constantinopla?", ["Constantino", "Justiniano", "Carlomagno", "Teodosio"], 1, "Entre los años 532 y 537."),
      question("s6e3-iconoclasia", "¿Qué fue la iconoclasia?", ["Una escuela de pintura", "La destrucción y prohibición de las imágenes religiosas en Bizancio", "Una herejía sobre la Trinidad", "Una cruzada"], 1, "Duró, con interrupciones, del 726 al 843."),
      question("s6e3-1453", "¿Qué pasó en 1453?", ["Se fundó Bizancio", "Los otomanos conquistaron Constantinopla", "Se construyó Santa Sofía", "Kiev se hizo cristiana"], 1, "Fue el final del Imperio bizantino."),
    ],
    sources: [
      { text: "Procopio de Cesarea, Sobre los edificios I; Juan Damasceno, Discursos contra los que rechazan las imágenes" },
      { text: "Judith Herrin, Bizancio. El imperio que hizo posible la Europa moderna, Debate, 2009" },
    ],
    next: "En el próximo episodio: monjes irlandeses, un esclavo que vuelve como obispo y dos hermanos que inventan un alfabeto. El cristianismo llega al norte y al este de Europa.",
  },
});
