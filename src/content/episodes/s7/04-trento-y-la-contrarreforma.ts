import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("alcala", "trento", "milan", "roma", "escorial");

export const trento = makeEpisode({
  slug: "trento-y-la-contrarreforma",
  title: "Trento y la Contrarreforma",
  period: "1495 – 1600",
  cover: "Council of Trent by Pasquale Cati.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "antes", year: "1495 – 1517", place: "alcala" },
    { id: "concilio", year: "1545 – 1563", place: "trento" },
    { id: "obispos", year: "1564 – 1584", place: "milan" },
    { id: "barroco", year: "Siglos XVI – XVII", place: "roma" },
    { id: "felipe", year: "1556 – 1598", place: "escorial" },
  ],
  library: { ...library, places },
  version: {
    title: "Trento y la Contrarreforma",
    inAMinute: [
      "La Iglesia católica respondió a la Reforma con el Concilio de Trento (1545-1563).",
      "Trento fijó la doctrina católica: la Biblia y la Tradición, la fe y las obras, los siete sacramentos.",
      "También corrigió muchos abusos: obispos que vivieran en su diócesis, seminarios para formar sacerdotes, un catecismo.",
      "El arte barroco, emocionante y espectacular, fue una forma de transmitir la fe.",
      "Felipe II de España se convirtió en el gran defensor del catolicismo en Europa.",
    ],
    intro:
      "Durante mucho tiempo se habló de «Contrarreforma», como si los católicos solo hubieran reaccionado contra los protestantes. Hoy los historiadores prefieren hablar también de «Reforma católica», porque muchos católicos llevaban años intentando cambiar la Iglesia desde dentro. Las dos cosas son verdad.",
    sections: [
      {
        stop: "antes",
        heading: "Una reforma que ya había empezado",
        blocks: [
          { type: "p", text: "En España, la reforma empezó antes de Lutero. Desde 1495, el cardenal Francisco Jiménez de Cisneros, arzobispo de Toledo y confesor de Isabel la Católica, obligó a frailes y clérigos a vivir con más austeridad y a formarse mejor. Para eso fundó la Universidad de Alcalá." },
          { type: "p", text: "Muchos historiadores creen que esa reforma temprana, junto con la Inquisición, explica en parte por qué el protestantismo apenas arraigó en España. En Italia también surgieron grupos de clérigos y laicos reformistas, y nuevas órdenes como los capuchinos, una rama austera de los franciscanos." },
        ],
      },
      {
        stop: "concilio",
        heading: "El Concilio de Trento",
        blocks: [
          { type: "p", text: "Tras muchos retrasos, el papa Pablo III convocó un concilio en Trento, una ciudad del norte de Italia que pertenecía al Imperio. Se reunió en tres etapas, con largas interrupciones, entre 1545 y 1563. Hubo muchos teólogos españoles, como los dominicos Domingo de Soto y Melchor Cano, o los jesuitas Diego Laínez y Alfonso Salmerón." },
          { type: "image", id: "trento" },
          {
            type: "words",
            items: [
              { term: "La Biblia y la Tradición", meaning: "Frente al «solo la Escritura», Trento afirmó que la fe se transmite por la Biblia y por la Tradición de la Iglesia. Fijó la lista de libros de la Biblia." },
              { term: "La fe y las obras", meaning: "La salvación es un regalo de Dios, pero el ser humano colabora libremente, y la fe se muestra en las obras." },
              { term: "Los sacramentos", meaning: "Confirmó los siete sacramentos y la presencia real de Cristo en la eucaristía." },
            ],
          },
          { type: "p", text: "Pero Trento hizo algo más que definir doctrina: atacó los abusos. Obligó a los obispos a vivir en su diócesis, prohibió acumular cargos y mandó crear seminarios para formar a los sacerdotes. Después se publicaron un catecismo (1566) y un misal (1570). La misa «tridentina» se celebró en latín hasta la reforma de 1970." },
        ],
      },
      {
        stop: "obispos",
        heading: "Un obispo modelo",
        blocks: [
          { type: "p", text: "El gran ejemplo de obispo reformador fue Carlos Borromeo, arzobispo de Milán. Era sobrino del papa y podría haber vivido como un príncipe, pero se dedicó a aplicar Trento con una energía enorme: visitó todas las parroquias de su diócesis, fundó seminarios y escuelas, y reformó el clero." },
          { type: "p", text: "Cuando en 1576 llegó la peste a Milán y muchos nobles huyeron, Borromeo se quedó, organizó la ayuda a los enfermos y vendió sus muebles para dar de comer a los pobres." },
        ],
      },
      {
        stop: "barroco",
        heading: "Un arte para emocionar",
        blocks: [
          { type: "p", text: "Los protestantes, sobre todo los calvinistas, habían retirado las imágenes de sus iglesias. Trento, en cambio, defendió el uso de imágenes, pero pidió que fueran claras, dignas y que movieran a la devoción." },
          { type: "p", text: "De ahí nació en buena parte el arte barroco: iglesias llenas de luz, oro y movimiento; pinturas dramáticas, como las de Caravaggio o Ribera; esculturas que parecen moverse, como las de Bernini; y en España, las imágenes de las procesiones de Semana Santa, como las de Gregorio Fernández o Martínez Montañés. El objetivo era emocionar." },
          { type: "fact", label: "La plaza de San Pedro", text: "Bernini diseñó la columnata de la plaza de San Pedro como dos enormes brazos que abrazan a los fieles que llegan. Así lo explicaba él mismo." },
        ],
      },
      {
        stop: "felipe",
        heading: "Felipe II, campeón del catolicismo",
        blocks: [
          { type: "p", text: "Felipe II, hijo de Carlos V, gobernó un imperio inmenso y se vio a sí mismo como el gran defensor de la fe católica. Apoyó la aplicación de Trento en sus reinos, combatió a los protestantes en los Países Bajos y participó en la victoria contra los turcos en Lepanto (1571)." },
          { type: "image", id: "escorial" },
          { type: "p", text: "Su gran obra fue el monasterio de El Escorial, a la vez palacio, monasterio, biblioteca y panteón de los reyes de España. Desde una pequeña habitación junto al altar mayor, Felipe podía seguir la misa desde su cama. Allí murió en 1598." },
        ],
      },
    ],
    quiz: [
      question("s7e4-trento", "¿Entre qué años se celebró el Concilio de Trento?", ["325-381", "1545-1563", "1962-1965", "1414-1418"], 1, "En tres etapas, con largas interrupciones."),
      question("s7e4-seminarios", "¿Qué creó Trento para formar mejor a los sacerdotes?", ["Las universidades", "Los seminarios", "Los monasterios", "Las catedrales"], 1, "Fue una de sus reformas más duraderas."),
      question("s7e4-escorial", "¿Qué construyó Felipe II entre 1563 y 1584?", ["La Alhambra", "El monasterio de El Escorial", "La catedral de Toledo", "La Sagrada Familia"], 1, "Palacio, monasterio, biblioteca y panteón real."),
    ],
    sources: [
      { text: "Concilio de Trento, decretos (1545-1563)" },
      { text: "John W. O'Malley, Trento: ¿Qué pasó en el concilio?, Sal Terrae, 2015" },
      { text: "Geoffrey Parker, Felipe II. La biografía definitiva, Planeta, 2010" },
    ],
    next: "En el próximo episodio: un soldado vasco herido en Pamplona cambia de vida. Ignacio de Loyola y los jesuitas.",
  },
});
