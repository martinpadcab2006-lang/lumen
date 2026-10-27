import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("cluny", "citeaux", "asis", "caleruega", "tolosa");

export const lasOrdenes = makeEpisode({
  slug: "las-ordenes-medievales",
  title: "Las órdenes religiosas medievales",
  period: "910 – 1250",
  cover: "Giotto - Legend of St Francis - -15- - Sermon to the Birds.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "cluny", year: "910 – 1150", place: "cluny" },
    { id: "cister", year: "1098 – 1153", place: "citeaux" },
    { id: "francisco", year: "1205 – 1226", place: "asis" },
    { id: "domingo", year: "1170 – 1205", place: "caleruega" },
    { id: "predicadores", year: "1215 – 1221", place: "tolosa" },
  ],
  library: { ...library, places },
  version: {
    title: "Las órdenes religiosas medievales",
    inAMinute: [
      "La abadía de Cluny, fundada en 910, dirigió una red de cientos de monasterios y reformó la Iglesia.",
      "Los cistercienses, con san Bernardo, buscaron una vida más sencilla y austera. En España fundaron Poblet o Las Huelgas.",
      "Francisco de Asís renunció a todo y fundó los franciscanos, frailes pobres que vivían en las ciudades.",
      "Domingo de Guzmán, nacido en Caleruega (Burgos), fundó los dominicos, una orden de predicadores dedicados al estudio.",
      "Franciscanos y dominicos son «órdenes mendicantes»: vivían de limosna y salían al mundo en vez de encerrarse en un monasterio.",
    ],
    intro:
      "Cada cierto tiempo, en la historia de la Iglesia, alguien siente que las cosas se han vuelto demasiado cómodas o demasiado ricas, y propone volver a lo esencial. Entre los siglos X y XIII ocurrió varias veces, y de ahí nacieron algunas de las órdenes religiosas que todavía existen.",
    sections: [
      {
        stop: "cluny",
        heading: "Cluny, el gran monasterio",
        blocks: [
          { type: "p", text: "En el siglo X, muchos monasterios estaban en manos de nobles que nombraban abades a sus parientes y se quedaban con sus rentas. En el año 910, el duque Guillermo de Aquitania fundó en Cluny, en Borgoña, una abadía que dependía directamente del papa y de nadie más." },
          { type: "p", text: "Cluny tuvo una serie de abades santos y longevos, y llegó a dirigir una red de cientos de monasterios por toda Europa, también en los reinos de León y Castilla, donde influyó en el Camino de Santiago. Sus monjes dedicaban casi todo el día a una liturgia solemnísima." },
          { type: "image", id: "cluny" },
          { type: "fact", label: "La paz de Dios", text: "Cluny y otros monasterios impulsaron la «paz de Dios» y la «tregua de Dios»: prohibir la violencia contra campesinos, clérigos y mercaderes, y prohibir combatir algunos días de la semana y en las fiestas. Fue uno de los primeros intentos de poner límites a la guerra en Europa." },
        ],
      },
      {
        stop: "cister",
        heading: "El Císter: volver a lo sencillo",
        blocks: [
          { type: "p", text: "Con el tiempo, Cluny se hizo muy rico. En 1098, un grupo de monjes fundó en Cîteaux (en latín, Cistercium) un monasterio para vivir la regla de san Benito con toda su sencillez: trabajo manual, silencio, pobreza. Vestían de blanco, sin teñir." },
          { type: "p", text: "El gran impulso llegó en 1112, cuando entró un joven noble, Bernardo, con treinta compañeros, entre ellos varios hermanos suyos. Bernardo de Claraval fue el hombre más influyente de su tiempo: aconsejaba a papas y reyes y predicaba con una fuerza enorme. Cuando murió, en 1153, había más de trescientas abadías cistercienses." },
          { type: "image", id: "poblet" },
          { type: "p", text: "Sus iglesias eran sobrias, sin esculturas ni colores, porque Bernardo pensaba que distraían de la oración. En España se fundaron monasterios cistercienses tan importantes como Poblet y Santes Creus en Cataluña, Santa María de Huerta en Soria o Las Huelgas en Burgos, un monasterio de monjas con enorme poder." },
        ],
      },
      {
        stop: "francisco",
        heading: "Francisco, el pobre de Asís",
        blocks: [
          { type: "character", id: "francisco" },
          { type: "p", text: "Francisco quería vivir el evangelio al pie de la letra: sin dinero, sin casa, trabajando con las manos o pidiendo limosna, y predicando por los caminos. Cuando su padre lo llevó ante el obispo para reclamarle el dinero que había dado a los pobres, Francisco se quitó la ropa, se la devolvió y dijo que desde entonces solo tendría un padre, el del cielo." },
          { type: "p", text: "En 1209 o 1210, el papa Inocencio III aprobó su forma de vida. En 1212, una joven noble de Asís, Clara, se escapó de casa para unirse a él y fundó las clarisas. Francisco murió en 1226. Al morir, sus frailes eran ya miles." },
          { type: "fact", label: "El primer belén", text: "En la Navidad de 1223, en Greccio, Francisco organizó una celebración en una cueva con un pesebre, un buey y un asno para que la gente pudiera «ver con sus ojos» cómo nació Jesús. Se considera el origen de los belenes." },
        ],
      },
      {
        stop: "domingo",
        heading: "Domingo, el castellano",
        blocks: [
          { type: "character", id: "domingo" },
          { type: "p", text: "Domingo de Guzmán nació hacia 1170 en Caleruega, un pueblo de Burgos. Estudió en Palencia y fue canónigo en Osma. Viajando con su obispo por el sur de Francia, se encontró con un movimiento que se extendía rápidamente: los cátaros, que creían que el mundo material era obra del mal y rechazaban a la Iglesia." },
          { type: "p", text: "Domingo vio que muchos predicadores católicos llegaban con caballos y criados, mientras que los cátaros vivían con austeridad. Así que decidió predicar como ellos: a pie, pobre y bien preparado para discutir." },
        ],
      },
      {
        stop: "predicadores",
        heading: "Los predicadores",
        blocks: [
          { type: "p", text: "En 1215, en Toulouse, Domingo reunió a sus primeros compañeros, y en 1216 el papa aprobó la Orden de Predicadores, los dominicos. Su gran novedad era el estudio: Domingo envió a sus frailes a las ciudades universitarias, como París y Bolonia. De entre ellos saldría Tomás de Aquino." },
          { type: "p", text: "Franciscanos y dominicos se llaman órdenes mendicantes, porque vivían de la limosna. Y su estilo era nuevo: no vivían aislados en el campo como los monjes, sino en las ciudades, que crecían rápidamente, predicando en plazas, enseñando en universidades y atendiendo a los pobres." },
          { type: "fact", label: "Rescatar cautivos", text: "En la península surgieron otras órdenes con una misión muy concreta: rescatar a los cristianos cautivos en tierras musulmanas, a veces cambiándose por ellos. Los trinitarios se fundaron en Francia en 1198, y los mercedarios, en Barcelona hacia 1218." },
        ],
      },
    ],
    quiz: [
      question("s6e10-cluny", "¿Qué tenía de especial la abadía de Cluny, fundada en 910?", ["Que estaba en Roma", "Que dependía directamente del papa y no de los nobles", "Que era solo para mujeres", "Que no tenía iglesia"], 1, "Llegó a dirigir una red de cientos de monasterios."),
      question("s6e10-belen", "¿Quién organizó en 1223 la celebración que se considera el origen de los belenes?", ["Santo Domingo", "San Francisco de Asís", "San Bernardo", "Carlomagno"], 1, "Fue en Greccio, en Italia."),
      question("s6e10-domingo", "¿Dónde nació santo Domingo de Guzmán?", ["En Asís", "En Caleruega (Burgos)", "En Toulouse", "En Roma"], 1, "Fundó la Orden de Predicadores en 1216."),
    ],
    sources: [
      { text: "Tomás de Celano, Vida primera de san Francisco; Jordán de Sajonia, Orígenes de la Orden de Predicadores" },
      { text: "C. H. Lawrence, El monacato medieval, Gredos, 1999" },
    ],
    next: "En el próximo episodio: el gran viaje de la Europa medieval. El Camino de Santiago.",
  },
});
