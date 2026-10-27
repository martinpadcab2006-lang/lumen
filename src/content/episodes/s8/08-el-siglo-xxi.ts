import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "buenosAires", "chiclayo", "barcelona", "nicea");

export const elSigloXXI = makeEpisode({
  slug: "el-siglo-xxi",
  title: "El cristianismo en el siglo XXI",
  period: "1978 – hoy",
  cover: "Sagrada Familia, Barcelona (P1170676).jpg",
  mapRegion: "mundo",
  places,
  stops: [
    { id: "juanPablo", year: "1978 – 2013", place: "roma" },
    { id: "francisco", year: "2013 – 2025", place: "buenosAires" },
    { id: "leon", year: "2025", place: "chiclayo" },
    { id: "espana", year: "2026", place: "barcelona" },
    { id: "retos", year: "Hoy", place: "nicea" },
  ],
  library: { ...library, places },
  version: {
    title: "El cristianismo en el siglo XXI",
    inAMinute: [
      "Juan Pablo II (1978-2005) y Benedicto XVI (2005-2013) marcaron el cambio de siglo. Benedicto fue el primer papa en renunciar en casi seiscientos años.",
      "Francisco (2013-2025), argentino y jesuita, fue el primer papa latinoamericano.",
      "En 2025 fue elegido León XIV, nacido en Chicago y misionero durante décadas en Perú.",
      "En junio de 2026 visitó España: Madrid, Barcelona y Canarias.",
      "Los grandes retos de hoy: la secularización, los abusos, la unidad de los cristianos y la paz.",
    ],
    intro:
      "Llegamos al final de la serie, y al presente. En los últimos cincuenta años, el cristianismo ha vivido cambios enormes: papas viajeros, el fin del comunismo, escándalos dolorosos, Iglesias que se vacían en Europa y se llenan en el sur del mundo. Este episodio es una foto de dónde estamos.",
    sections: [
      {
        stop: "juanPablo",
        heading: "Dos papas para un cambio de siglo",
        blocks: [
          { type: "p", text: "Juan Pablo II, el primer papa no italiano en 455 años, gobernó la Iglesia casi 27 años. Viajó a 129 países, creó las Jornadas Mundiales de la Juventud, que reunieron a millones de jóvenes (en Madrid en 2011, en Lisboa en 2023), y pidió perdón por los pecados de la Iglesia a lo largo de la historia. Murió en 2005 y fue canonizado en 2014." },
          { type: "p", text: "Le sucedió su estrecho colaborador, el teólogo alemán Joseph Ratzinger, Benedicto XVI. El 11 de febrero de 2013 sorprendió al mundo anunciando su renuncia por falta de fuerzas. Ningún papa había renunciado desde 1415, durante el Cisma de Occidente. Vivió retirado en el Vaticano hasta su muerte, el 31 de diciembre de 2022." },
        ],
      },
      {
        stop: "francisco",
        heading: "Un papa «del fin del mundo»",
        blocks: [
          { type: "p", text: "El 13 de marzo de 2013 fue elegido el arzobispo de Buenos Aires, Jorge Mario Bergoglio. Era el primer papa americano, el primer jesuita y el primero en llamarse Francisco, por san Francisco de Asís. Se presentó diciendo que los cardenales habían ido a buscarlo «casi al fin del mundo»." },
          { type: "p", text: "Francisco habló de una Iglesia «en salida», que fuera como «un hospital de campaña» para los heridos de la vida, y puso en el centro a los pobres, los migrantes y el cuidado del planeta. Fue muy querido y también muy criticado, desde posturas opuestas. Murió el 21 de abril de 2025, lunes de Pascua, un día después de dar su última bendición en la plaza de San Pedro." },
        ],
      },
      {
        stop: "leon",
        heading: "León XIV",
        blocks: [
          { type: "p", text: "El 8 de mayo de 2025, el cónclave eligió al cardenal Robert Francis Prevost, nacido en Chicago en 1955. Es el primer papa de Estados Unidos, pero se siente también peruano: fraile agustino, pasó unos veinte años como misionero en Perú, donde fue obispo de Chiclayo, y tiene la nacionalidad peruana. Sus primeras palabras fueron: «La paz esté con todos vosotros»." },
          { type: "p", text: "Su primer gran documento, «Dilexi te» (2025), está dedicado al amor a los pobres. En mayo de 2026 publicó su primera encíclica, «Magnifica humanitas», sobre la inteligencia artificial y la dignidad humana." },
        ],
      },
      {
        stop: "espana",
        heading: "El papa en España",
        blocks: [
          { type: "p", text: "Del 6 al 12 de junio de 2026, León XIV visitó España con el lema «Alzad la mirada». En Madrid celebró una misa en la plaza de Cibeles y se reunió con las Cortes; en Barcelona, el 10 de junio, centenario de la muerte de Antoni Gaudí, bendijo la torre de Jesucristo de la Sagrada Familia, la más alta del templo; y en Canarias se encontró con migrantes que llegan en cayuco a las islas." },
          { type: "image", id: "sagradaFamilia" },
          { type: "p", text: "España es hoy un país muy distinto del de hace cincuenta años. Algo más de la mitad de los españoles se declara católica, pero solo una minoría va a misa cada semana, y crece el número de personas sin religión. A la vez, millones de españoles siguen participando en la Semana Santa, el Camino de Santiago o las fiestas de su pueblo, y las parroquias y Cáritas atienden a cientos de miles de personas necesitadas." },
        ],
      },
      {
        stop: "retos",
        heading: "Los retos de hoy",
        blocks: [
          {
            type: "words",
            items: [
              { term: "La secularización", meaning: "En Europa y otros países ricos, cada vez menos gente practica una religión. Las Iglesias se preguntan cómo transmitir la fe en un mundo que ya no da por supuesto a Dios." },
              { term: "Los abusos", meaning: "En las últimas décadas han salido a la luz miles de casos de abusos sexuales a menores cometidos por clérigos, y muchas veces encubiertos. Ha sido la crisis más grave de la Iglesia católica en mucho tiempo. Los papas han pedido perdón y se han aprobado normas más duras, pero las víctimas siguen reclamando justicia y reparación." },
              { term: "La unidad", meaning: "Católicos, ortodoxos y protestantes dialogan como nunca antes. En noviembre de 2025, León XIV y el patriarca Bartolomé rezaron juntos en Nicea, 1.700 años después del primer concilio." },
              { term: "La paz", meaning: "En muchos lugares, como Oriente Medio, Nigeria o la India, los cristianos sufren violencia. Y en las guerras actuales, las Iglesias intentan ser una voz de paz." },
            ],
          },
          { type: "p", text: "Aquí termina nuestro recorrido: ochenta y un episodios desde un rincón del Imperio romano hasta hoy. Dos mil años de historia, con santos y pecadores, catedrales y hogueras, mártires y perseguidores. La historia del cristianismo es, en el fondo, la historia de cómo millones de personas, durante veinte siglos, han intentado vivir según las palabras de un judío de Galilea. Y esa historia sigue escribiéndose." },
        ],
      },
    ],
    relatedPills: ["donde-viven-los-cristianos", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s8e8-renuncia", "¿Qué hizo Benedicto XVI en 2013 que no ocurría desde 1415?", ["Viajar a América", "Renunciar al papado", "Convocar un concilio", "Canonizar a un papa"], 1, "Vivió retirado en el Vaticano hasta 2022."),
      question("s8e8-francisco", "¿Qué tuvo de nuevo el papa Francisco?", ["Fue el primer papa italiano", "Fue el primer papa americano y el primer jesuita", "Fue el primer papa casado", "Fue el más joven"], 1, "Arzobispo de Buenos Aires, elegido en 2013."),
      question("s8e8-leon", "¿Dónde fue obispo León XIV antes de ser papa?", ["En Chicago", "En Chiclayo (Perú)", "En Madrid", "En Roma"], 1, "Pasó unos veinte años como misionero en Perú."),
    ],
    sources: [
      { text: "Benedicto XVI, Declaratio (11 de febrero de 2013); Francisco, Evangelii gaudium (2013)" },
      { text: "León XIV, exhortación Dilexi te (2025) y encíclica Magnifica humanitas (2026)" },
      { text: "Vatican News, programa del viaje apostólico a España (6-12 de junio de 2026)" },
    ],
    next: "Has llegado al final de la serie. Puedes seguir explorando en el arte, el mapa, los papas y las curiosidades.",
  },
});
