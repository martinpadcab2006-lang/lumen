import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("londres", "chicago", "losAngeles", "saoPaulo", "lagos", "seul", "madrid");

export const evangelicos = makeEpisode({
  slug: "evangelicos-y-pentecostales",
  title: "Evangélicos y pentecostales",
  period: "1738 – hoy",
  cover: "John Wesley by George Romney.jpg",
  mapRegion: "mundo",
  places,
  stops: [
    { id: "wesley", year: "1738 – 1791", place: "londres" },
    { id: "graham", year: "1949 – 2005", place: "chicago" },
    { id: "azusa", year: "1906", place: "losAngeles" },
    { id: "brasil", year: "1911 – hoy", place: "saoPaulo" },
    { id: "africa", year: "Siglos XX – XXI", place: "lagos" },
    { id: "corea", year: "1958 – hoy", place: "seul" },
    { id: "espana", year: "1960 – hoy", place: "madrid" },
  ],
  library: { ...library, places },
  version: {
    title: "Evangélicos y pentecostales",
    inAMinute: [
      "Los evangélicos son protestantes que insisten en la conversión personal, la Biblia y la evangelización.",
      "El pentecostalismo nació en 1906 en Los Ángeles, en una iglesia humilde dirigida por un predicador afroamericano.",
      "Pentecostales y carismáticos son hoy más de una cuarta parte de los cristianos del mundo.",
      "Crecen sobre todo en América Latina, África y Asia. En Brasil ya son más de una de cada cuatro personas.",
      "En España, el movimiento ha arraigado sobre todo entre los gitanos.",
    ],
    intro:
      "Si te asomas a un barrio popular de São Paulo, Lagos o Manila un domingo por la mañana, es probable que oigas cantos, aplausos y oraciones en voz alta saliendo de un local o de una nave industrial. Es el rostro del cristianismo que más ha crecido en el último siglo.",
    sections: [
      {
        stop: "wesley",
        heading: "Un corazón que arde",
        blocks: [
          { type: "p", text: "La palabra «evangélico» viene de «evangelio». Se llama así a una corriente del protestantismo que insiste en cuatro cosas: la conversión personal, «nacer de nuevo»; la autoridad de la Biblia; la cruz de Cristo como centro de la fe; y la necesidad de anunciarla a los demás." },
          { type: "image", id: "wesley" },
          { type: "p", text: "Sus raíces están en los movimientos de «despertar» del siglo XVIII. En 1738, en Londres, el clérigo anglicano John Wesley escuchó leer un texto de Lutero y sintió que su corazón «ardía de forma extraña». Desde entonces recorrió Inglaterra a caballo predicando al aire libre. Sus seguidores, los metodistas, se extendieron por Inglaterra y Estados Unidos." },
        ],
      },
      {
        stop: "graham",
        heading: "Billy Graham",
        blocks: [
          { type: "p", text: "Estados Unidos se convirtió en el gran centro del mundo evangélico. Su predicador más famoso del siglo XX fue Billy Graham, que desde 1949 llenó estadios en todo el mundo, habló en persona ante millones de personas y aconsejó a muchos presidentes." },
          { type: "p", text: "Hoy los evangélicos son una fuerza religiosa, social y también política en Estados Unidos, y su apoyo a unos u otros candidatos es objeto de mucho debate." },
        ],
      },
      {
        stop: "azusa",
        heading: "La calle Azusa",
        blocks: [
          { type: "p", text: "En abril de 1906, en un viejo almacén de la calle Azusa, en Los Ángeles, un predicador afroamericano, William Seymour, hijo de antiguos esclavos, empezó a dirigir unas reuniones de oración que duraron tres años. Los asistentes decían recibir el Espíritu Santo como los apóstoles en Pentecostés: hablaban en lenguas, profetizaban y oraban por los enfermos." },
          { type: "image", id: "azusa" },
          { type: "p", text: "Algo llamaba especialmente la atención: en una época de segregación racial, en Azusa rezaban juntos negros, blancos, latinos y asiáticos, hombres y mujeres. De allí salieron misioneros a todo el mundo. Así nació el pentecostalismo." },
          { type: "fact", label: "¿Cuántos son?", text: "Las estimaciones varían, pero los pentecostales y los «carismáticos» (cristianos de otras Iglesias, también católicos, con un estilo de oración parecido) son hoy más de 600 millones de personas: más de una cuarta parte de todos los cristianos." },
        ],
      },
      {
        stop: "brasil",
        heading: "América Latina",
        blocks: [
          { type: "p", text: "En 1911, dos misioneros suecos fundaron en Belém, en el norte de Brasil, las Asambleas de Dios, hoy la mayor Iglesia pentecostal del país. Desde los años setenta, el crecimiento evangélico en América Latina ha sido enorme, sobre todo en los barrios pobres de las ciudades." },
          {
            type: "numbers",
            title: "Brasil, según el censo",
            items: [
              { value: "65 % → 57 %", label: "católicos, entre 2010 y 2022" },
              { value: "22 % → 27 %", label: "evangélicos, entre 2010 y 2022" },
              { value: "47 millones", label: "de evangélicos en 2022" },
            ],
          },
          { type: "p", text: "Brasil sigue siendo el país con más católicos del mundo, pero el mapa religioso de América Latina está cambiando muy deprisa. Los sociólogos lo explican por muchas razones: comunidades pequeñas y cercanas, pastores salidos del mismo barrio, una fe muy emocional y apoyo práctico para salir de la pobreza o las adicciones." },
        ],
      },
      {
        stop: "africa",
        heading: "África",
        blocks: [
          { type: "p", text: "En África, junto a las Iglesias católica y protestantes históricas, han surgido miles de Iglesias independientes y pentecostales. En Nigeria, algunas reúnen en sus encuentros anuales a cientos de miles de personas, en recintos gigantescos a las afueras de Lagos." },
          { type: "p", text: "Muchas de estas Iglesias predican el llamado «evangelio de la prosperidad»: la idea de que Dios recompensa la fe con salud y dinero. Es muy criticado por otros cristianos, incluidos muchos evangélicos, porque puede convertir la fe en un negocio." },
        ],
      },
      {
        stop: "corea",
        heading: "Corea del Sur",
        blocks: [
          { type: "p", text: "Corea del Sur es uno de los pocos países de Asia donde los cristianos son una parte importante de la población, cerca de tres de cada diez. En 1958, un pastor pentecostal, David Yonggi Cho, empezó a predicar en una tienda de campaña en Seúl. Su Iglesia del Evangelio Completo de Yoido llegó a tener cientos de miles de miembros: se la considera la congregación más grande del mundo." },
        ],
      },
      {
        stop: "espana",
        heading: "Los gitanos evangélicos",
        blocks: [
          { type: "p", text: "En España, los protestantes son una minoría pequeña, aunque ha crecido mucho con la inmigración latinoamericana y africana. Pero hay un caso muy especial: desde los años sesenta, el pentecostalismo se ha extendido muchísimo entre los gitanos, sobre todo a través de la Iglesia Evangélica de Filadelfia, conocida popularmente como «el culto»." },
          { type: "p", text: "Sus pastores son gitanos, sus cultos se llenan de música y en ellos se mezclan la Biblia y la cultura gitana. Muchos estudiosos señalan que ha ayudado a muchas familias a salir de la droga y a reforzar su identidad." },
        ],
      },
    ],
    relatedPills: ["catolicos-ortodoxos-protestantes", "donde-viven-los-cristianos"],
    quiz: [
      question("s8e6-azusa", "¿Dónde y cuándo nació el pentecostalismo?", ["En Roma, en 1870", "En la calle Azusa de Los Ángeles, en 1906", "En Wittenberg, en 1517", "En Brasil, en 1990"], 1, "Lo dirigía William Seymour, hijo de antiguos esclavos."),
      question("s8e6-brasil", "Según el censo de 2022, ¿qué parte de los brasileños son evangélicos?", ["Casi ninguno", "Más de una de cada cuatro personas (27 %)", "La mitad", "El 90 %"], 1, "En 2010 eran el 22 %."),
      question("s8e6-gitanos", "¿En qué grupo de la población española ha arraigado especialmente el pentecostalismo?", ["Entre los militares", "Entre los gitanos", "Entre los catedráticos", "Entre los pescadores vascos"], 1, "Sobre todo a través de la Iglesia Evangélica de Filadelfia."),
    ],
    sources: [
      { text: "IBGE, Censo Demográfico 2022: religiões (2025)" },
      { text: "Pew Research Center, Global Christianity: Movements and Denominations, 2011" },
      { text: "Allan Anderson, An Introduction to Pentecostalism, Cambridge University Press, 2.ª ed., 2014" },
    ],
    next: "En el próximo episodio: ¿dónde viven hoy los cristianos? Un viaje por África, América Latina y Asia.",
  },
});
