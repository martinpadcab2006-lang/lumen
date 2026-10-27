import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("clermont", "jerusalen", "krak", "damieta", "acre");

export const lasCruzadas = makeEpisode({
  slug: "las-cruzadas",
  title: "Las cruzadas",
  period: "1095 – 1291",
  cover: "Passages d'outremer Fr5594, fol. 19r, Concile de Clermont.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "clermont", year: "1095", place: "clermont" },
    { id: "jerusalen", year: "1096 – 1099", place: "jerusalen" },
    { id: "saladino", year: "1144 – 1192", place: "krak" },
    { id: "francisco", year: "1219", place: "damieta" },
    { id: "fin", year: "1291", place: "acre" },
  ],
  library: { ...library, places },
  version: {
    title: "Las cruzadas",
    inAMinute: [
      "En 1095, el papa Urbano II llamó a los cristianos de Occidente a ayudar a Bizancio y a liberar Jerusalén.",
      "Los cruzados conquistaron Jerusalén en 1099, con una gran matanza, y fundaron reinos en Oriente.",
      "Saladino recuperó Jerusalén en 1187. Las siguientes cruzadas no consiguieron recuperarla de forma duradera.",
      "En plena cruzada, Francisco de Asís fue a hablar en paz con el sultán de Egipto.",
      "En 1291 cayó Acre, el último gran bastión cruzado. Las cruzadas siguen siendo un tema muy debatido.",
    ],
    intro:
      "Las cruzadas son uno de los episodios más polémicos de la historia del cristianismo. Para unos fueron una guerra defensiva; para otros, una agresión. Para quienes participaron, eran sobre todo una peregrinación armada. Vamos a intentar entender qué pasó, sin esconder lo que pasó.",
    sections: [
      {
        stop: "clermont",
        heading: "«¡Dios lo quiere!»",
        blocks: [
          { type: "p", text: "En el siglo XI, los turcos selyúcidas, musulmanes recién llegados de Asia central, derrotaron a los bizantinos y ocuparon casi toda Anatolia. También controlaban Jerusalén, y llegaban noticias de ataques a peregrinos cristianos. El emperador de Bizancio pidió ayuda al papa." },
          { type: "image", id: "clermont" },
          { type: "p", text: "En noviembre de 1095, en Clermont, en el centro de Francia, el papa Urbano II pronunció un discurso ante una multitud: llamó a los caballeros cristianos a dejar de pelearse entre ellos y a ir a liberar a los cristianos de Oriente y el sepulcro de Cristo. La multitud gritó: «¡Dios lo quiere!»." },
          { type: "p", text: "A quienes fueran se les prometía el perdón de las penas de sus pecados. Se cosían una cruz en la ropa, de ahí el nombre de «cruzados». Los movía una mezcla de fe sincera, deseo de penitencia, espíritu de aventura y, en algunos casos, ambición de tierras." },
        ],
      },
      {
        stop: "jerusalen",
        heading: "La conquista de Jerusalén",
        blocks: [
          { type: "p", text: "La cruzada empezó con violencia contra quien no tenía nada que ver: en 1096, grupos de cruzados asesinaron a miles de judíos en ciudades alemanas del Rin, a pesar de que algunos obispos intentaron protegerlos." },
          { type: "p", text: "Tras un viaje durísimo de tres años, los cruzados conquistaron Jerusalén el 15 de julio de 1099. Las crónicas, cristianas y musulmanas, describen una matanza terrible de musulmanes y judíos de la ciudad. Los cruzados fundaron cuatro estados en la costa de Siria y Palestina." },
          { type: "fact", label: "Monjes guerreros", text: "Para defender a los peregrinos y los territorios, surgieron las órdenes militares, cuyos miembros eran a la vez monjes y soldados: los templarios, los hospitalarios… En la península ibérica nacieron otras, como Calatrava, Santiago o Alcántara, para luchar contra al-Ándalus." },
        ],
      },
      {
        stop: "saladino",
        heading: "Saladino",
        blocks: [
          { type: "p", text: "Los reinos cruzados vivían rodeados y dependían de enormes castillos como el Crac de los Caballeros. En 1144, los musulmanes recuperaron Edesa, y la segunda cruzada fracasó." },
          { type: "image", id: "krak" },
          { type: "p", text: "En 1187, el sultán Saladino, que había unido Egipto y Siria, aplastó a los cruzados en Hattin y recuperó Jerusalén. A diferencia de lo ocurrido en 1099, no hubo matanza: dejó salir a los habitantes cristianos pagando un rescate, y a muchos pobres los liberó sin pagar. La tercera cruzada, con Ricardo Corazón de León, no logró recuperarla." },
        ],
      },
      {
        stop: "francisco",
        heading: "Un fraile ante el sultán",
        blocks: [
          { type: "p", text: "En 1219, durante la quinta cruzada, los cruzados asediaban Damieta, en Egipto. Un fraile pequeño y delgado, Francisco de Asís, cruzó las líneas enemigas desarmado y pidió hablar con el sultán al-Kamil, sobrino de Saladino." },
          { type: "image", id: "franciscoSultan" },
          { type: "p", text: "El sultán lo recibió y lo escuchó con respeto. Francisco no logró convertirlo, ni el sultán a Francisco, pero los dos se despidieron en paz. En un tiempo de guerra, fue un gesto de diálogo que todavía se recuerda." },
        ],
      },
      {
        stop: "fin",
        heading: "El final y el balance",
        blocks: [
          { type: "p", text: "En 1291 cayó Acre, la última gran ciudad cruzada en Tierra Santa. Hubo ocho cruzadas principales a Oriente, y la idea de cruzada se aplicó también a guerras en la península ibérica, en el Báltico o contra los herejes cátaros en el sur de Francia." },
          { type: "p", text: "Los historiadores siguen debatiendo cómo juzgarlas. Algunos subrayan que fueron una respuesta a la expansión musulmana y a la petición de ayuda de Bizancio. Otros recuerdan las matanzas, el saqueo de Constantinopla y la herida que dejaron en la relación entre cristianos, musulmanes y judíos." },
          { type: "p", text: "En el año 2000, el papa Juan Pablo II pidió perdón públicamente por los pecados cometidos por cristianos a lo largo de la historia, incluida la violencia usada «al servicio de la verdad»." },
        ],
      },
    ],
    quiz: [
      question("s6e9-urbano", "¿Qué papa convocó la primera cruzada en 1095?", ["Gregorio Magno", "Urbano II", "Inocencio III", "León XIII"], 1, "En Clermont, en el centro de Francia."),
      question("s6e9-saladino", "¿Qué hizo Saladino al recuperar Jerusalén en 1187?", ["Destruirla", "Dejar salir a los habitantes cristianos sin matanza", "Coronarse rey cristiano", "Devolverla a Bizancio"], 1, "A diferencia de lo ocurrido en 1099."),
      question("s6e9-francisco", "¿Qué hizo Francisco de Asís en 1219?", ["Dirigir un ejército cruzado", "Cruzar las líneas desarmado para hablar con el sultán de Egipto", "Fundar la orden del Temple", "Conquistar Damieta"], 1, "Se despidieron en paz."),
    ],
    sources: [
      { text: "Fulquerio de Chartres, Historia de la expedición a Jerusalén; Jacobo de Vitry, Cartas" },
      { text: "Jonathan Riley-Smith, ¿Qué fueron las cruzadas?, Acantilado, 2012" },
      { text: "Amin Maalouf, Las cruzadas vistas por los árabes, Alianza, 1989" },
    ],
    next: "En el próximo episodio: monjes de blanco, frailes descalzos y predicadores. Cluny, el Císter, franciscanos y dominicos.",
  },
});
