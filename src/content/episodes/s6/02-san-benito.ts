import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("nursia", "subiaco", "montecassino", "aquisgran", "sanMillan");

export const sanBenito = makeEpisode({
  slug: "san-benito",
  title: "San Benito y los monasterios",
  period: "c. 480 – siglo XI",
  cover: "Monte Cassino Abbey (view from Polish cemetery).jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "joven", year: "c. 480 – 500", place: "nursia" },
    { id: "subiaco", year: "c. 500 – 529", place: "subiaco" },
    { id: "regla", year: "c. 529 – 547", place: "montecassino" },
    { id: "europa", year: "Siglos VII – IX", place: "aquisgran" },
    { id: "glosas", year: "Siglos X – XI", place: "sanMillan" },
  ],
  library: { ...library, places },
  version: {
    title: "San Benito y los monasterios",
    inAMinute: [
      "Benito de Nursia vivió en Italia hacia el año 500, cuando el Imperio de Occidente ya había caído.",
      "Fundó el monasterio de Montecassino y escribió una regla para sus monjes.",
      "La regla organiza el día entre la oración, el trabajo y la lectura. «Reza y trabaja» lo resume, aunque la frase no aparece en ella.",
      "Con los siglos, la mayoría de los monasterios de Europa adoptaron la regla de san Benito.",
      "Los monasterios copiaron los libros antiguos y fueron centros de cultura. En uno de La Rioja se escribieron algunas de las primeras palabras en castellano.",
    ],
    intro:
      "Italia, hacia el año 500. El Imperio romano de Occidente ya no existe, las ciudades se vacían y las guerras no paran. En ese mundo en ruinas, un joven deja Roma para irse a vivir a una cueva. No lo sabe, pero lo que va a escribir organizará la vida de miles de monasterios durante mil quinientos años.",
    sections: [
      {
        stop: "joven",
        heading: "Un estudiante que abandona Roma",
        blocks: [
          { type: "p", text: "Casi todo lo que sabemos de Benito viene de un libro que escribió el papa Gregorio Magno unos cincuenta años después de su muerte, lleno de milagros y de anécdotas. Según él, Benito nació en Nursia, en el centro de Italia, en una familia acomodada, y lo enviaron a estudiar a Roma." },
          { type: "p", text: "Pero la vida de los estudiantes romanos le escandalizó y decidió dejarlo todo. Según la tradición, tenía una hermana gemela, Escolástica, que también se consagró a Dios y fundó una comunidad de monjas." },
          { type: "character", id: "benito" },
        ],
      },
      {
        stop: "subiaco",
        heading: "La cueva de Subiaco",
        blocks: [
          { type: "p", text: "Benito se retiró a una cueva en Subiaco, en las montañas al este de Roma, donde vivió solo tres años. Un monje de la zona le bajaba pan con una cuerda. Poco a poco se corrió la voz y empezaron a llegar discípulos." },
          { type: "p", text: "No todo fue fácil. Gregorio cuenta que los monjes de un monasterio cercano le pidieron que fuera su abad, y cuando vieron lo exigente que era, intentaron envenenarlo: al bendecir la copa, se rompió. Benito acabó fundando doce pequeños monasterios en la zona." },
        ],
      },
      {
        stop: "regla",
        heading: "La regla de Montecassino",
        blocks: [
          { type: "p", text: "Hacia el año 529 se trasladó a lo alto del monte Cassino, entre Roma y Nápoles, donde había un antiguo templo pagano. Allí fundó su gran monasterio y escribió una regla de 73 capítulos breves. Es un texto sensato y humano: pide moderación, que nadie pase hambre ni frío y que se tenga en cuenta a los débiles." },
          { type: "image", id: "montecassino" },
          { type: "p", text: "La regla organiza todo el día. Los monjes se reúnen a rezar siete veces durante el día y una más de noche, sobre todo cantando los salmos; trabajan con las manos, porque «la ociosidad es enemiga del alma»; y dedican horas a la lectura. Prometen obediencia al abad, vida sencilla y quedarse para siempre en su monasterio." },
          { type: "quote", text: "A todos los huéspedes que lleguen se les recibirá como a Cristo.", source: "Regla de san Benito, capítulo 53" },
          { type: "fact", label: "«Ora et labora»", text: "La famosa frase «reza y trabaja» resume muy bien el espíritu de la regla, pero no aparece en ella: se popularizó muchos siglos después." },
        ],
      },
      {
        stop: "europa",
        heading: "La regla conquista Europa",
        blocks: [
          { type: "p", text: "Al principio, la regla de Benito era una entre muchas. Pero el papa Gregorio Magno la dio a conocer, y los misioneros la llevaron a Inglaterra y a Germania. En el siglo IX, el emperador Ludovico Pío, hijo de Carlomagno, ordenó que todos los monasterios de su imperio la siguieran." },
          { type: "p", text: "Los monasterios benedictinos se convirtieron en el centro de la vida en el campo: cultivaban tierras, criaban ganado, acogían a viajeros y pobres, cuidaban enfermos. Y en sus talleres de escritura, los escritorios, los monjes copiaban libros a mano. Gracias a ellos se conservaron la mayoría de los textos latinos clásicos que hoy podemos leer." },
          { type: "fact", label: "Patrón de Europa", text: "En 1964, el papa Pablo VI declaró a san Benito patrón de Europa. Montecassino fue destruido varias veces; la última, por un bombardeo aliado en 1944. Se reconstruyó tal como era." },
        ],
      },
      {
        stop: "glosas",
        heading: "Las primeras palabras en castellano",
        blocks: [
          { type: "p", text: "En el monasterio de San Millán de la Cogolla, en La Rioja, un monje anónimo leía un libro en latín y, para entenderlo mejor, iba anotando en los márgenes cómo se decían algunas palabras en la lengua que hablaba la gente." },
          { type: "p", text: "Esas notas, las Glosas Emilianenses, de hacia los siglos X u XI, son uno de los primeros testimonios escritos de un romance de la península, antecesor del castellano, y contienen también unas frases en euskera. Por eso a San Millán se le llama la «cuna del castellano». Su monasterio de Yuso y Suso es Patrimonio de la Humanidad." },
        ],
      },
    ],
    quiz: [
      question("s6e2-montecassino", "¿Qué monasterio fundó san Benito hacia el año 529?", ["Cluny", "Montecassino", "San Millán", "Santa Sofía"], 1, "Entre Roma y Nápoles. Allí escribió su regla."),
      question("s6e2-ora", "¿Aparece la frase «ora et labora» en la regla de san Benito?", ["Sí, en el primer capítulo", "No, es un resumen posterior", "Sí, es el título", "Solo en la versión española"], 1, "Resume bien su espíritu, pero se popularizó mucho después."),
      question("s6e2-glosas", "¿Qué son las Glosas Emilianenses?", ["Una regla monástica", "Notas en los márgenes de un libro, con algunas de las primeras palabras escritas en romance", "Unas pinturas", "Una batalla"], 1, "Se escribieron en San Millán de la Cogolla (La Rioja)."),
    ],
    sources: [
      { text: "Regla de san Benito; Gregorio Magno, Diálogos, libro II" },
      { text: "García M. Colombás, La tradición benedictina, Monte Casino, 1989-2000" },
      { text: "Real Academia Española y Fundación San Millán, Glosas Emilianenses" },
    ],
    next: "En el próximo episodio: mientras Occidente se fragmenta, en Oriente el Imperio romano sigue vivo mil años más. Bizancio y la Iglesia de Oriente.",
  },
});
