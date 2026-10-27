import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("jerusalen", "antioquia", "roma", "constantinopla", "toledo");

export const oracionYLiturgia = makeEpisode({
  slug: "oracion-y-liturgia",
  title: "Oración, liturgia y primeros ritos",
  period: "Siglos I – VII",
  cover: "Orante (particolare), catacombe di priscilla, cubicolo della velatio, roma (metà III secolo).jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "raices", year: "Siglo I", place: "jerusalen" },
    { id: "didache", year: "c. 100", place: "antioquia" },
    { id: "orantes", year: "Siglos II – III", place: "roma" },
    { id: "egeria", year: "381 – 384", place: "jerusalen" },
    { id: "ritos", year: "Siglos IV – VII", place: "constantinopla" },
    { id: "mozarabe", year: "Siglo VII – hoy", place: "toledo" },
  ],
  library: { ...library, places },
  version: {
    title: "Oración, liturgia y primeros ritos",
    inAMinute: [
      "Los primeros cristianos rezaban como los judíos: con salmos y a horas fijas del día.",
      "La Didaché, de hacia el año 100, manda rezar el padrenuestro tres veces al día y ayunar los miércoles y viernes.",
      "Rezaban de pie, con los brazos abiertos y mirando al este, por donde sale el sol.",
      "Una peregrina de Gallaecia, Egeria, describió hacia el año 383 la Semana Santa en Jerusalén.",
      "Hay varios ritos: romano, bizantino, ambrosiano… y el hispano o mozárabe, que se sigue celebrando cada día en Toledo.",
    ],
    intro:
      "Cerramos la temporada con la parte más cotidiana de la fe: la oración. ¿Cómo rezaban los primeros cristianos? ¿Desde cuándo hay misa los domingos, Semana Santa o Navidad? Muchas de las cosas que hoy se hacen en cualquier iglesia tienen casi dos mil años.",
    sections: [
      {
        stop: "raices",
        heading: "Rezar como judíos",
        blocks: [
          { type: "p", text: "Jesús y sus discípulos rezaban como cualquier judío de su tiempo: recitaban los salmos, bendecían a Dios antes de comer y rezaban a horas fijas. Los Hechos de los Apóstoles cuentan que Pedro y Juan subían al Templo «a la hora de la oración, la de nona», a las tres de la tarde." },
          { type: "p", text: "Los salmos fueron siempre el gran libro de oración cristiano, y lo siguen siendo. A eso se sumó la oración que, según los evangelios, enseñó el propio Jesús: el padrenuestro." },
        ],
      },
      {
        stop: "didache",
        heading: "El primer manual",
        blocks: [
          { type: "p", text: "La Didaché, o «Enseñanza de los doce apóstoles», es un pequeño manual de hacia el año 100, probablemente de Siria. Se conocía su existencia, pero el texto se perdió hasta que en 1873 un obispo griego lo encontró en una biblioteca de Constantinopla." },
          { type: "p", text: "Da instrucciones muy concretas: bautizar en agua corriente, y si no hay, en otra agua; rezar el padrenuestro tres veces al día; ayunar los miércoles y los viernes, y no los lunes y jueves «como los hipócritas». Incluye también oraciones para la eucaristía que terminan con una palabra aramea: Maranatha, «Ven, Señor»." },
        ],
      },
      {
        stop: "orantes",
        heading: "De pie y con los brazos abiertos",
        blocks: [
          { type: "image", id: "orante" },
          { type: "p", text: "En las catacumbas aparecen muchas figuras como esta: personas de pie, con los brazos abiertos y levantados. Así rezaban los primeros cristianos. Tertuliano explicaba que esa postura imita a Cristo en la cruz. También se rezaba mirando al este, por donde sale el sol, símbolo de Cristo resucitado: por eso muchas iglesias antiguas tienen el altar orientado hacia el este." },
          { type: "fact", label: "Una oración de hace 1.800 años", text: "La Tradición apostólica, de principios del siglo III, recoge una plegaria para la eucaristía. En 1970, la Iglesia católica la tomó como base de la «plegaria eucarística II», que hoy es la que más se usa en las misas de todo el mundo." },
        ],
      },
      {
        stop: "egeria",
        heading: "Egeria, la peregrina",
        blocks: [
          { type: "p", text: "Hacia el año 381, una mujer de Gallaecia, en el noroeste de Hispania, emprendió un viaje de tres años por Tierra Santa, Egipto y Siria. Se llamaba Egeria, y escribió un diario para sus «hermanas» de su tierra. Una parte se encontró en 1884 en una biblioteca de Arezzo, en Italia." },
          { type: "p", text: "Lo más valioso es su descripción de la liturgia de Jerusalén. Cuenta, por ejemplo, cómo el domingo de Ramos todo el pueblo bajaba del monte de los Olivos con ramos de palma y de olivo, con los niños en brazos, acompañando al obispo hasta la ciudad. Es el origen de las procesiones de Ramos." },
          { type: "p", text: "Así se fue formando el año litúrgico. La gran fiesta, desde el principio, era la Pascua, con el domingo como «pequeña Pascua» semanal. Luego llegaron la Cuaresma, Pentecostés y, en Roma hacia el año 336, la Navidad el 25 de diciembre." },
        ],
      },
      {
        stop: "ritos",
        heading: "Muchas formas de celebrar",
        blocks: [
          { type: "p", text: "Con la libertad del siglo IV, cada gran ciudad fue desarrollando su propia forma de celebrar, su rito. En Roma, el rito romano, en latín y bastante sobrio. En Constantinopla, el bizantino, solemne y lleno de cantos, que todavía usan los ortodoxos en la liturgia atribuida a Juan Crisóstomo. Y otros: el copto en Egipto, el sirio, el armenio, el ambrosiano de Milán…" },
          { type: "image", id: "santaSofia" },
          { type: "p", text: "Una crónica rusa cuenta que, hacia el año 987, el príncipe Vladímir de Kiev envió embajadores a conocer distintas religiones. Al asistir a la liturgia en Santa Sofía de Constantinopla dijeron: «No sabíamos si estábamos en el cielo o en la tierra». Poco después, Vladímir se bautizó." },
        ],
      },
      {
        stop: "mozarabe",
        heading: "El rito hispano",
        blocks: [
          { type: "p", text: "La Hispania visigoda tuvo su propio rito, muy rico, con oraciones escritas por obispos como Isidoro de Sevilla o Ildefonso de Toledo. Los cristianos que vivieron bajo dominio musulmán, los mozárabes, lo conservaron durante siglos, y por eso se le llama rito mozárabe." },
          { type: "fact", label: "La prueba del fuego", text: "En el siglo XI, el papa y el rey Alfonso VI quisieron sustituirlo por el rito romano. Según una leyenda, en Toledo se arrojaron a una hoguera un libro de cada rito: el romano saltó fuera de las llamas, pero el mozárabe quedó intacto. El rey impuso de todos modos el romano, aunque se permitió conservar el antiguo en unas pocas parroquias de Toledo." },
          { type: "p", text: "Hacia 1500, el cardenal Cisneros lo salvó de la desaparición: mandó imprimir sus libros y fundó una capilla en la catedral de Toledo para celebrarlo. Allí se sigue celebrando cada día, más de mil trescientos años después." },
          { type: "p", text: "Así termina la quinta temporada. En la sexta empieza un viaje de mil años: monjes en el desierto, Bizancio, al-Ándalus, cruzadas, catedrales y universidades." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo", "por-que-la-navidad-es-el-25-de-diciembre", "por-que-semana-santa-cambia-de-fecha"],
    quiz: [
      question("s5e9-didache", "Según la Didaché, ¿qué días ayunaban los primeros cristianos?", ["Lunes y jueves", "Miércoles y viernes", "Sábado y domingo", "Todos los días"], 1, "Para distinguirse de otros grupos, que ayunaban lunes y jueves."),
      question("s5e9-orante", "¿Cómo rezaban los primeros cristianos, según las pinturas de las catacumbas?", ["De rodillas y con las manos juntas", "De pie y con los brazos abiertos", "Sentados", "Tumbados en el suelo"], 1, "Tertuliano decía que esa postura recuerda a Cristo en la cruz."),
      question("s5e9-egeria", "¿Quién fue Egeria?", ["Una emperatriz romana", "Una peregrina de Gallaecia que describió la liturgia de Jerusalén", "Una mártir de Cartago", "La madre de san Agustín"], 1, "Su diario se encontró en 1884 en Arezzo."),
    ],
    sources: [
      { text: "Didaché 7-10; Egeria, Itinerario 31; Tertuliano, Sobre la oración 14" },
      { text: "Mario Righetti, Historia de la liturgia, BAC, 2 vols., 1955-1956" },
      { text: "Capilla Mozárabe, catedral primada de Toledo" },
    ],
    next: "Temporada 6, episodio 1: los orígenes del monacato. Ermitaños en el desierto de Egipto.",
  },
});
