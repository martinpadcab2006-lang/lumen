import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("santiago", "roncesvalles", "jaca", "burgos", "leon");

export const elCamino = makeEpisode({
  slug: "el-camino-de-santiago",
  title: "El Camino de Santiago",
  period: "Siglo IX – hoy",
  cover: "Pórtico de la Gloria - Catedral de Santiago de Compostela.jpg",
  mapRegion: "peninsula",
  places,
  stops: [
    { id: "hallazgo", year: "c. 820 – 830", place: "santiago" },
    { id: "caminos", year: "Siglos X – XII", place: "roncesvalles" },
    { id: "guia", year: "c. 1140 – 1160", place: "jaca" },
    { id: "peregrino", year: "Siglos XI – XV", place: "burgos" },
    { id: "hoy", year: "1987 – hoy", place: "leon" },
  ],
  library: { ...library, places },
  version: {
    title: "El Camino de Santiago",
    inAMinute: [
      "Según la tradición, a principios del siglo IX se encontró en Galicia la tumba del apóstol Santiago.",
      "Desde toda Europa empezaron a llegar peregrinos, sobre todo por el «camino francés».",
      "Un libro del siglo XII, el Códice Calixtino, incluye la primera guía de viaje del Camino.",
      "El peregrino llevaba bordón, calabaza y la concha de vieira, que se convirtió en su símbolo.",
      "Tras siglos de declive, hoy lo recorren cada año alrededor de medio millón de personas.",
    ],
    intro:
      "Durante la Edad Media hubo tres grandes peregrinaciones cristianas: a Jerusalén, a Roma y a Santiago de Compostela. La tercera convirtió un rincón del extremo occidental de Europa en uno de los lugares más visitados del continente, y trazó por el norte de España un camino de iglesias, puentes y hospitales que todavía se recorre.",
    sections: [
      {
        stop: "hallazgo",
        heading: "Unas luces en el bosque",
        blocks: [
          { type: "p", text: "Según una antigua tradición, el apóstol Santiago el Mayor, uno de los doce, predicó en Hispania. Tras su martirio en Jerusalén, hacia el año 44, sus discípulos habrían traído su cuerpo en barco hasta Galicia." },
          { type: "p", text: "Siglos después, hacia el año 820-830, un ermitaño llamado Pelayo vio unas luces misteriosas en un bosque. El obispo de Iria Flavia, Teodomiro, investigó y encontró un sepulcro que identificó como el del apóstol. El rey Alfonso II de Asturias viajó a verlo y mandó construir una iglesia: se le considera el primer peregrino." },
          { type: "fact", label: "¿Qué dice la historia?", text: "No hay testimonios antiguos de la predicación de Santiago en Hispania anteriores al siglo VII, y los historiadores la consideran dudosa. Las excavaciones bajo la catedral encontraron una necrópolis romana y, en 1955, la lápida de la tumba del obispo Teodomiro, que confirmó que el relato del hallazgo tiene una base histórica. Quién está en el sepulcro sigue siendo una cuestión de fe." },
        ],
      },
      {
        stop: "caminos",
        heading: "Todos los caminos llevan a Santiago",
        blocks: [
          { type: "p", text: "Desde el siglo X, la fama del sepulcro se extendió por Europa. Los peregrinos llegaban de Francia, Alemania, Italia, Inglaterra. Había varias rutas, pero la más transitada era el «camino francés», que cruzaba los Pirineos por Roncesvalles o por el puerto de Somport, hacia Jaca, y atravesaba el norte de la península." },
          { type: "p", text: "Los reyes de Navarra, Castilla y León cuidaron el Camino porque atraía gente, comercio e ideas. Construyeron puentes, como el de Puente la Reina, y hospitales para peregrinos. Por el Camino llegaron a la península el arte románico, los monjes de Cluny y muchos comerciantes francos que se quedaron a vivir en sus ciudades." },
        ],
      },
      {
        stop: "guia",
        heading: "La primera guía de viaje",
        blocks: [
          { type: "p", text: "Hacia mediados del siglo XII se recopiló el Códice Calixtino, un gran libro dedicado a Santiago. Su quinto libro es una guía para peregrinos, considerada una de las primeras guías de viaje de Europa: describe las etapas, los santuarios que hay que visitar, los ríos de los que se puede beber y los que no." },
          { type: "p", text: "También avisa de los peligros, con opiniones muy poco diplomáticas sobre los habitantes de algunas regiones, y de los barqueros que cobraban de más o volcaban la barca para robar a los peregrinos." },
          { type: "fact", label: "Un robo de película", text: "En 2011, el Códice Calixtino original desapareció de la catedral de Santiago. Apareció un año después en el garaje de un antiguo electricista de la catedral, que fue condenado por el robo." },
        ],
      },
      {
        stop: "peregrino",
        heading: "Ser peregrino",
        blocks: [
          { type: "p", text: "El peregrino medieval se reconocía por su ropa: una esclavina, un sombrero de ala ancha, un bastón alto llamado bordón, una calabaza para el agua y un zurrón. Al llegar, compraba en Santiago una concha de vieira, que se convirtió en el símbolo del peregrino." },
          { type: "p", text: "Los hospitales del Camino, como el Hospital del Rey de Burgos, daban cama, comida y cuidados gratis. Se peregrinaba por devoción, para cumplir una promesa, para pedir una curación o como penitencia; a veces un juez imponía la peregrinación como castigo." },
          { type: "image", id: "portico" },
          { type: "p", text: "Al entrar en la catedral, los peregrinos pasaban por el Pórtico de la Gloria, terminado en 1188 por el maestro Mateo. Y en las grandes celebraciones, el botafumeiro, un enorme incensario, vuela todavía hoy de un lado a otro del crucero." },
          { type: "image", id: "botafumeiro" },
        ],
      },
      {
        stop: "hoy",
        heading: "El renacer del Camino",
        blocks: [
          { type: "p", text: "Desde el siglo XVI, por las guerras, la Reforma protestante y otras razones, las peregrinaciones decayeron mucho. A mediados del siglo XX apenas se veían peregrinos." },
          { type: "p", text: "El Camino renació a finales del siglo XX. En 1987 fue declarado el primer Itinerario Cultural Europeo, y en 1993 la UNESCO lo incluyó en el Patrimonio de la Humanidad. Hoy lo recorren cada año alrededor de medio millón de personas de todo el mundo, por motivos religiosos, culturales, deportivos o personales. Quien hace al menos los últimos cien kilómetros a pie recibe la «Compostela»." },
          { type: "fact", label: "Año santo", text: "Cuando el 25 de julio, fiesta de Santiago, cae en domingo, se celebra el Año Santo Compostelano y se abre la Puerta Santa de la catedral. El próximo será en 2027." },
        ],
      },
    ],
    relatedPills: ["el-camino-de-santiago"],
    quiz: [
      question("s6e11-primero", "¿A quién se considera el primer peregrino a Santiago?", ["Carlomagno", "El rey Alfonso II de Asturias", "San Francisco", "El papa"], 1, "Viajó a ver el sepulcro hacia el año 830."),
      question("s6e11-calixtino", "¿Qué contiene el quinto libro del Códice Calixtino?", ["Una novela", "Una guía para peregrinos", "Un mapa de América", "Las cartas de Santiago"], 1, "Es una de las primeras guías de viaje de Europa."),
      question("s6e11-simbolo", "¿Cuál es el símbolo del peregrino a Santiago?", ["Una cruz roja", "La concha de vieira", "Una llave", "Una paloma"], 1, "Los peregrinos medievales la compraban al llegar."),
    ],
    sources: [
      { text: "Códice Calixtino, libro V (Guía del peregrino)" },
      { text: "Fernando López Alsina, La ciudad de Santiago de Compostela en la Alta Edad Media, 1988" },
      { text: "Oficina del Peregrino de Santiago de Compostela, estadísticas" },
    ],
    next: "En el próximo episodio: Bolonia, París, Salamanca. Nacen las universidades, y un fraile dominico intenta unir la fe y la razón.",
  },
});
