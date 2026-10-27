import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("bolonia", "paris", "salamanca", "napoles", "oxford");

export const lasUniversidades = makeEpisode({
  slug: "las-universidades",
  title: "Las universidades y el pensamiento cristiano",
  period: "1088 – 1350",
  cover: "Laurentius de Voltolina 001.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "bolonia", year: "1088", place: "bolonia" },
    { id: "paris", year: "c. 1200 – 1257", place: "paris" },
    { id: "salamanca", year: "1218", place: "salamanca" },
    { id: "tomas", year: "1225 – 1274", place: "napoles" },
    { id: "ciencia", year: "Siglos XIII – XIV", place: "oxford" },
  ],
  library: { ...library, places },
  version: {
    title: "Las universidades y el pensamiento cristiano",
    inAMinute: [
      "Las universidades nacieron en la Edad Media, a partir de las escuelas de las catedrales y los monasterios.",
      "Bolonia (1088), París y Oxford fueron las primeras. En España, Salamanca se fundó en 1218.",
      "Se enseñaba en latín, la lengua común de toda Europa, con un método de lecturas y debates.",
      "Tomás de Aquino intentó demostrar que la fe y la razón no se contradicen.",
      "En las universidades medievales empezaron también algunas ideas de la ciencia moderna.",
    ],
    intro:
      "Grados, rectores, catedráticos, decanos, exámenes, togas y birretes: casi todo lo que asociamos con la universidad viene de la Edad Media. Las universidades son una de las grandes herencias de la Europa cristiana, y nacieron alrededor de una pregunta: ¿cómo se puede entender racionalmente lo que se cree?",
    sections: [
      {
        stop: "bolonia",
        heading: "Un gremio de estudiantes",
        blocks: [
          { type: "p", text: "En el siglo XI, las ciudades crecían y hacían falta personas formadas: juristas, médicos, administradores. Las escuelas de las catedrales y los monasterios se quedaban pequeñas, y en algunas ciudades maestros y estudiantes empezaron a organizarse como los gremios de artesanos. A esa asociación se la llamó universitas, «comunidad»." },
          { type: "p", text: "Bolonia, famosa por el estudio del derecho, toma como fecha de fundación el año 1088. Allí mandaban los estudiantes: elegían al rector, contrataban a los profesores y les ponían multas si llegaban tarde o se saltaban lecciones." },
          { type: "image", id: "voltolina" },
        ],
      },
      {
        stop: "paris",
        heading: "París, la capital de la teología",
        blocks: [
          { type: "p", text: "En París, hacia el año 1200, los maestros de las escuelas de la catedral de Notre-Dame formaron su propia universidad, que se convirtió en la gran capital de la teología y la filosofía. En 1257, un capellán del rey, Robert de Sorbon, fundó un colegio para estudiantes pobres: la Sorbona." },
          { type: "p", text: "Todo se enseñaba en latín, así que un estudiante podía ir de Salamanca a París o de Oxford a Bolonia y entenderlo todo. El método tenía dos partes: la lectio, en la que el profesor leía y comentaba un libro, y la disputatio, un debate en el que se planteaba una pregunta, se daban argumentos a favor y en contra y se llegaba a una conclusión." },
          { type: "fact", label: "Palabras medievales", text: "Muchas palabras universitarias vienen de entonces. «Catedrático», de la cátedra, la silla del profesor. «Bachiller», «licenciado» y «doctor» eran los grados medievales: la licencia era el permiso para enseñar." },
        ],
      },
      {
        stop: "salamanca",
        heading: "Salamanca",
        blocks: [
          { type: "p", text: "En la península, el rey Alfonso VIII fundó a principios del siglo XIII un estudio general en Palencia, que no duró mucho. En 1218, Alfonso IX de León fundó el de Salamanca, que en 1255 recibió el reconocimiento del papa y se convirtió en una de las cuatro grandes universidades de Europa, junto con París, Oxford y Bolonia." },
          { type: "image", id: "salamanca" },
          { type: "p", text: "Es la universidad más antigua de las que existen hoy en el mundo hispánico. En el siglo XVI sería el centro de la llamada Escuela de Salamanca, que veremos en la próxima temporada." },
        ],
      },
      {
        stop: "tomas",
        heading: "Tomás de Aquino: fe y razón",
        blocks: [
          { type: "character", id: "tomas" },
          { type: "p", text: "En el siglo XII y XIII llegaron a Europa, gracias en gran parte a las traducciones de Toledo, las obras de Aristóteles. Su filosofía, muy racional, entusiasmó a muchos y asustó a otros: ¿no contradecía la fe?" },
          { type: "p", text: "Tomás de Aquino, dominico y profesor en París y Nápoles, sostuvo que no: la fe y la razón vienen del mismo Dios y no pueden contradecirse. La razón puede llegar por sí sola a algunas verdades, como la existencia de Dios, para la que propuso cinco «vías»; otras, como la Trinidad, solo se conocen por la fe, pero no van contra la razón." },
          { type: "image", id: "tomas" },
          { type: "fact", label: "«Todo me parece paja»", text: "Tomás dejó sin terminar su gran obra, la «Suma teológica». En diciembre de 1273, tras una experiencia mística mientras celebraba misa, dejó de escribir. A su secretario le dijo que todo lo que había escrito le parecía paja comparado con lo que había visto. Murió tres meses después." },
        ],
      },
      {
        stop: "ciencia",
        heading: "¿Fe contra ciencia?",
        blocks: [
          { type: "p", text: "Existe la idea de que la Iglesia medieval estaba en contra de la ciencia. La realidad es más complicada. Las universidades eran instituciones de la Iglesia, y en ellas muchos clérigos estudiaron la naturaleza." },
          { type: "p", text: "En Oxford, el obispo Roberto Grosseteste y el franciscano Roger Bacon defendieron la importancia de la observación y del experimento. En París, en el siglo XIV, Jean Buridan y Nicolás Oresme hicieron estudios sobre el movimiento que anticipan ideas de Galileo. Eso no quita que hubiera censuras y conflictos, como veremos con el propio Galileo." },
        ],
      },
    ],
    quiz: [
      question("s6e12-bolonia", "¿Qué universidad toma como fecha de fundación el año 1088?", ["Salamanca", "Bolonia", "Oxford", "París"], 1, "Allí mandaban los propios estudiantes."),
      question("s6e12-salamanca", "¿Quién fundó la Universidad de Salamanca en 1218?", ["Carlomagno", "El rey Alfonso IX de León", "Los Reyes Católicos", "Santo Domingo"], 1, "En 1255 recibió el reconocimiento del papa."),
      question("s6e12-tomas", "¿Qué defendía Tomás de Aquino?", ["Que la razón y la fe se contradicen", "Que la fe y la razón vienen de Dios y no pueden contradecirse", "Que había que prohibir a Aristóteles", "Que la ciencia era pecado"], 1, "Intentó unir la fe cristiana y la filosofía de Aristóteles."),
    ],
    sources: [
      { text: "Tomás de Aquino, Suma teológica I, q. 2, a. 3 (las cinco vías)" },
      { text: "Jacques Verger, Gentes del saber en la Europa de finales de la Edad Media, Complutense, 1999" },
      { text: "David C. Lindberg, Los inicios de la ciencia occidental, Paidós, 2002" },
    ],
    next: "En el próximo episodio: el tema más oscuro de la temporada. La Inquisición: su origen, cómo funcionaba y su contexto, más allá del mito.",
  },
});
