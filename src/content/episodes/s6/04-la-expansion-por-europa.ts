import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("armagh", "iona", "canterbury", "fulda", "moravia", "jelling");

export const laExpansion = makeEpisode({
  slug: "la-expansion-por-europa",
  title: "La expansión por Europa",
  period: "Siglos V – XI",
  cover: "KellsFol034rChiRhoMonogram.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "patricio", year: "Siglo V", place: "armagh" },
    { id: "iona", year: "563 – c. 800", place: "iona" },
    { id: "inglaterra", year: "597 – 731", place: "canterbury" },
    { id: "bonifacio", year: "719 – 754", place: "fulda" },
    { id: "eslavos", year: "863 – 885", place: "moravia" },
    { id: "norte", year: "Siglos IX – XI", place: "jelling" },
  ],
  library: { ...library, places },
  version: {
    title: "La expansión por Europa",
    inAMinute: [
      "Irlanda, que nunca fue romana, se hizo cristiana en el siglo V gracias a Patricio.",
      "Los monjes irlandeses fundaron monasterios por toda Europa y crearon libros maravillosos como el de Kells.",
      "En el año 597, el papa Gregorio Magno envió monjes a convertir Inglaterra.",
      "Cirilo y Metodio llevaron el cristianismo a los eslavos e inventaron un alfabeto para su lengua.",
      "Escandinavia fue la última: Dinamarca, Noruega e Islandia se hicieron cristianas hacia el año 1000.",
    ],
    intro:
      "Hacia el año 500, el cristianismo era la religión de las tierras que habían sido romanas. Más allá quedaban pueblos celtas, germanos, eslavos y escandinavos con sus propios dioses. En los siguientes quinientos años, misioneros, monjes y reyes cambiarían el mapa religioso de Europa.",
    sections: [
      {
        stop: "patricio",
        heading: "Un esclavo vuelve a Irlanda",
        blocks: [
          { type: "character", id: "patricio" },
          { type: "p", text: "Patricio predicó en Irlanda, según la tradición, desde el año 432. Sobre él circulan muchas leyendas: que explicó la Trinidad con un trébol o que expulsó a todas las serpientes de la isla. Lo del trébol aparece siglos después; y en Irlanda no había serpientes desde la última glaciación." },
          { type: "p", text: "Lo que sí es cierto es que Irlanda se hizo cristiana sin mártires, y que allí la Iglesia se organizó alrededor de grandes monasterios, que eran a la vez centros religiosos, escuelas y pueblos enteros." },
        ],
      },
      {
        stop: "iona",
        heading: "Los monjes viajeros",
        blocks: [
          { type: "p", text: "A los monjes irlandeses les gustaba una forma muy dura de penitencia: dejar su tierra para siempre, «peregrinar por Cristo». En el año 563, Columba fundó un monasterio en la isla de Iona, en Escocia, desde donde se evangelizó el norte de Britania. Otro, Columbano, cruzó al continente y fundó monasterios en la Galia y en Bobbio, en Italia." },
          { type: "image", id: "kells" },
          { type: "p", text: "En los monasterios irlandeses se hicieron algunos de los libros más bellos de la historia. El más famoso es el Libro de Kells, de hacia el año 800, con los cuatro evangelios decorados con espirales, animales entrelazados y colores intensos. Se guarda en el Trinity College de Dublín." },
        ],
      },
      {
        stop: "inglaterra",
        heading: "Gregorio y los anglos",
        blocks: [
          { type: "p", text: "Según una historia que cuenta el monje Beda, un día el futuro papa Gregorio vio en el mercado de Roma a unos esclavos rubios y preguntó de dónde eran. «Son anglos», le dijeron. «No son anglos, sino ángeles», respondió." },
          { type: "p", text: "Sea verdad o no, ya como papa envió en el año 597 a un grupo de unos cuarenta monjes dirigidos por Agustín, prior de un monasterio de Roma. Desembarcaron en Kent, cuyo rey, Etelberto, tenía una esposa cristiana. Agustín fue el primer arzobispo de Canterbury, que sigue siendo hoy la sede principal de la Iglesia de Inglaterra." },
          { type: "fact", label: "Beda y el «antes de Cristo»", text: "En el año 731, Beda escribió una historia de la Iglesia en Inglaterra en la que contaba los años desde el nacimiento de Cristo. No inventó el sistema, pero su libro lo popularizó por toda Europa. Gracias en parte a él hablamos hoy de años «antes» y «después de Cristo»." },
        ],
      },
      {
        stop: "bonifacio",
        heading: "Bonifacio y el roble de Thor",
        blocks: [
          { type: "p", text: "Un siglo después, los ingleses ya eran misioneros. El más importante fue Bonifacio, un monje inglés que trabajó en Germania. Según su biografía, en el año 723, en Geismar, taló un enorme roble consagrado al dios del trueno ante la mirada de los paganos, que esperaban un castigo divino que no llegó." },
          { type: "p", text: "Bonifacio organizó la Iglesia en Germania y fundó el monasterio de Fulda, donde está enterrado. Murió asesinado en el año 754 en Frisia, en los actuales Países Bajos, cuando ya tenía unos ochenta años." },
        ],
      },
      {
        stop: "eslavos",
        heading: "Un alfabeto para los eslavos",
        blocks: [
          { type: "p", text: "En el año 863, el príncipe de la Gran Moravia, en la actual Chequia y Eslovaquia, pidió a Constantinopla misioneros que hablaran la lengua de su pueblo. El emperador envió a dos hermanos de Tesalónica que conocían el eslavo: Constantino, que tomaría el nombre de Cirilo, y Metodio." },
          { type: "image", id: "ciriloMetodio" },
          { type: "p", text: "Para traducir la Biblia y la liturgia, Cirilo creó un alfabeto nuevo, el glagolítico. Poco después, sus discípulos, refugiados en Bulgaria, crearon otro más sencillo al que llamaron cirílico en su honor. Es el que se usa hoy en Rusia, Ucrania, Serbia o Bulgaria. Los dos hermanos son copatronos de Europa desde 1980." },
        ],
      },
      {
        stop: "norte",
        heading: "Los últimos: los vikingos",
        blocks: [
          { type: "p", text: "Los escandinavos fueron durante mucho tiempo el terror de los monasterios: los vikingos saquearon Iona y muchas otras abadías. Pero los misioneros también llegaron al norte. Hacia el año 965, el rey danés Harald Diente Azul se bautizó y lo dejó grabado en una gran piedra rúnica en Jelling: «Harald, que hizo cristianos a los daneses»." },
          { type: "fact", label: "Islandia lo decidió por votación", text: "En el año 1000, la asamblea de Islandia, el Althing, estaba a punto de dividirse entre cristianos y paganos. Encargaron la decisión a un jefe pagano respetado, Thorgeir, que según las sagas pasó un día y una noche tumbado bajo una manta pensando. Decidió que todos serían cristianos, aunque se permitió seguir con algunas costumbres paganas en privado." },
        ],
      },
    ],
    quiz: [
      question("s6e4-patricio", "¿Cómo llegó Patricio a Irlanda por primera vez?", ["Como obispo enviado por el papa", "Como esclavo, raptado por piratas", "Como soldado romano", "Como comerciante"], 1, "Escapó, pero luego volvió como misionero."),
      question("s6e4-cirilico", "¿De quién recibe su nombre el alfabeto cirílico?", ["De un zar ruso", "Del misionero Cirilo, que creó un alfabeto para los eslavos", "De una ciudad", "De un papa"], 1, "Cirilo creó el glagolítico; sus discípulos, el cirílico."),
      question("s6e4-islandia", "¿Cómo se hizo cristiana Islandia en el año 1000?", ["Por una guerra", "Por una decisión de su asamblea, el Althing", "Por un milagro", "Porque la conquistó Noruega"], 1, "La decidió un jefe pagano tras pensarlo un día y una noche."),
    ],
    sources: [
      { text: "Patricio, Confesión; Beda el Venerable, Historia eclesiástica del pueblo inglés I, 23 y II, 1" },
      { text: "Willibaldo, Vida de Bonifacio; Saga de Njál, 105" },
      { text: "Peter Brown, El primer milenio de la cristiandad occidental, Crítica, 1997" },
    ],
    next: "En el próximo episodio: francos, visigodos y lombardos. Los pueblos que heredaron el Imperio de Occidente se hacen católicos.",
  },
});
