import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("antioquia", "esmirna", "cartago", "roma", "tarragona", "merida", "zaragoza");

export const losMartires = makeEpisode({
  slug: "los-martires",
  title: "Los mártires",
  period: "Siglos II – IV",
  cover: "Jean-Léon Gérôme - The Christian Martyrs' Last Prayer - Walters 37113.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "testigos", year: "Siglos II – IV", place: "roma" },
    { id: "ignacio", year: "c. 110", place: "antioquia" },
    { id: "policarpo", year: "c. 155", place: "esmirna" },
    { id: "perpetua", year: "203", place: "cartago" },
    { id: "hispania", year: "259 – 304", place: "tarragona" },
    { id: "semilla", year: "c. 197", place: "cartago" },
  ],
  library: { ...library, places },
  version: {
    title: "Los mártires",
    inAMinute: [
      "«Mártir» significa «testigo»: alguien que prefiere morir antes que renegar de su fe.",
      "Ignacio de Antioquía, Policarpo de Esmirna y Perpetua de Cartago son algunos de los más antiguos.",
      "De muchos se conservan actas de su juicio o relatos escritos por testigos.",
      "En Hispania hubo mártires como Fructuoso de Tarragona, Eulalia de Mérida o los mártires de Zaragoza.",
      "Su ejemplo, en lugar de frenar el cristianismo, lo hizo crecer.",
    ],
    intro:
      "Los mártires son los grandes héroes del cristianismo antiguo. No eran soldados ni rebeldes: eran obispos, esclavas, madres, diáconos o adolescentes que, ante un juez romano, se negaron a ofrecer un poco de incienso a los dioses. Estas son algunas de sus historias.",
    sections: [
      {
        stop: "testigos",
        heading: "Testigos",
        blocks: [
          { type: "p", text: "«Mártir» viene del griego mártys, «testigo». Al principio se llamaba así a cualquiera que daba testimonio de su fe; pronto se reservó para quienes lo hacían hasta la muerte." },
          { type: "p", text: "La escena se repetía. Un cristiano era denunciado y llevado ante el gobernador, que le pedía que jurara por el emperador u ofreciera sacrificio a los dioses. Si lo hacía, quedaba libre. Si se negaba, podía ser decapitado, quemado o arrojado a las fieras en el anfiteatro." },
          { type: "image", id: "martires" },
          { type: "fact", label: "Actas de los mártires", text: "De algunos se conservan las actas del juicio, casi como una transcripción, y de otros relatos escritos por testigos. Son de los documentos más impresionantes de la Antigüedad." },
        ],
      },
      {
        stop: "ignacio",
        heading: "Ignacio de Antioquía: «Soy trigo de Dios»",
        blocks: [
          { type: "p", text: "Ignacio era obispo de Antioquía. Hacia el año 110 lo detuvieron y lo enviaron a Roma para morir en el anfiteatro. Por el camino escribió siete cartas a varias comunidades que se conservan." },
          { type: "quote", text: "Soy trigo de Dios, y he de ser molido por los dientes de las fieras para convertirme en pan limpio de Cristo.", source: "Ignacio de Antioquía, Carta a los Romanos 4" },
          { type: "p", text: "En una de ellas pide a los cristianos de Roma que no intenten salvarlo. Y en otra usa, por primera vez que sepamos, la expresión «Iglesia católica», que en griego significa «universal»." },
        ],
      },
      {
        stop: "policarpo",
        heading: "Policarpo: «Ochenta y seis años lo he servido»",
        blocks: [
          { type: "p", text: "Policarpo era el anciano obispo de Esmirna. Según la tradición, había conocido al apóstol Juan. Hacia el año 155, la multitud lo reclamó en el estadio y el gobernador intentó convencerlo: «Jura por el César y te dejo libre; maldice a Cristo»." },
          { type: "quote", text: "Ochenta y seis años hace que lo sirvo, y ningún mal me ha hecho. ¿Cómo voy a maldecir a mi rey, que me ha salvado?", source: "Martirio de Policarpo 9" },
          { type: "p", text: "Lo quemaron vivo. El relato de su muerte, escrito por la comunidad de Esmirna, es el texto más antiguo que se conserva sobre un mártir fuera del Nuevo Testamento. Y cuenta algo nuevo: que los cristianos recogieron sus huesos para celebrar cada año el aniversario de su muerte. Es el origen del culto a los santos." },
        ],
      },
      {
        stop: "perpetua",
        heading: "Perpetua y Felicidad",
        blocks: [
          { type: "character", id: "perpetua" },
          { type: "p", text: "En el año 203, en Cartago, detuvieron a un grupo de catecúmenos, personas que se preparaban para el bautismo. Entre ellos estaban Vibia Perpetua, una joven de buena familia que daba el pecho a su bebé, y Felicidad, una esclava embarazada de ocho meses." },
          { type: "p", text: "Perpetua escribió en la cárcel un diario en el que cuenta sus sueños, sus discusiones con su padre, que le suplicaba que renegara, y su angustia por su hijo. Es uno de los textos más antiguos escritos por una mujer cristiana. Felicidad dio a luz en la cárcel dos días antes de morir. Las dos murieron juntas en el anfiteatro." },
        ],
      },
      {
        stop: "hispania",
        heading: "Los mártires de Hispania",
        blocks: [
          { type: "p", text: "En el año 259, en la persecución de Valeriano, el obispo de Tarragona, Fructuoso, y sus diáconos Augurio y Eulogio fueron quemados en el anfiteatro de la ciudad. Sus actas se conservan, y las ruinas del anfiteatro, con los restos de una iglesia levantada en su honor, se pueden visitar hoy." },
          { type: "p", text: "En la gran persecución de Diocleciano, a principios del siglo IV, murieron Eulalia, una adolescente de Mérida, cuyo culto se extendió por toda Hispania; Vicente, diácono de Zaragoza, martirizado en Valencia; y los llamados Innumerables Mártires de Zaragoza." },
          { type: "fact", label: "En tu ciudad", text: "Muchos patronos de ciudades españolas son mártires de esta época: santa Eulalia en Mérida y en Barcelona, san Vicente en Valencia, las santas Justa y Rufina en Sevilla, los santos Emeterio y Celedonio en Calahorra y Santander." },
        ],
      },
      {
        stop: "semilla",
        heading: "La sangre, semilla",
        blocks: [
          { type: "p", text: "Las persecuciones buscaban acabar con el cristianismo, pero tuvieron el efecto contrario. Ver a gente corriente morir con esa serenidad impresionaba a los paganos. Hacia el año 197, el escritor africano Tertuliano lanzó a los romanos una frase que se haría famosa: «La sangre de los mártires es semilla de cristianos»." },
          { type: "p", text: "Pero no todos eran héroes. Muchos cristianos renegaron por miedo, y después pidieron volver. Qué hacer con ellos dividió a la Iglesia durante décadas. Lo vemos en el episodio de las grandes persecuciones." },
        ],
      },
    ],
    relatedPills: ["el-pez-simbolo-cristiano"],
    quiz: [
      question("s4e2-martir", "¿Qué significa «mártir»?", ["Santo", "Testigo", "Víctima", "Valiente"], 1, "Del griego mártys."),
      question("s4e2-catolica", "¿Quién usó por primera vez, que sepamos, la expresión «Iglesia católica»?", ["San Pablo", "Ignacio de Antioquía", "Constantino", "San Agustín"], 1, "En una de sus cartas, hacia el año 110. «Católica» significa «universal»."),
      question("s4e2-hispania", "¿Qué obispo hispano murió quemado en el anfiteatro de su ciudad en el año 259?", ["Osio de Córdoba", "Fructuoso de Tarragona", "Isidoro de Sevilla", "Dámaso"], 1, "Junto a sus diáconos Augurio y Eulogio."),
    ],
    sources: [
      { text: "Ignacio de Antioquía, Cartas; Martirio de Policarpo; Pasión de Perpetua y Felicidad; Actas de Fructuoso" },
      { text: "Tertuliano, Apologético 50; Prudencio, Peristephanon" },
      { text: "Daniel Ruiz Bueno (ed.), Actas de los mártires, BAC" },
    ],
    next: "En el próximo episodio: las catacumbas. Ni escondites ni refugios secretos: cementerios bajo Roma con algunas de las primeras imágenes cristianas.",
  },
});
