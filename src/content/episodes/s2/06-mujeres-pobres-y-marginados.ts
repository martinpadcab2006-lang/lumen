import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  magdala: holyLand.magdala,
  samaria: holyLand.samaria,
  betania: holyLand.betania,
  jerico: holyLand.jerico,
  cafarnaum: holyLand.cafarnaum,
  jerusalen: holyLand.jerusalen,
};

export const mujeresPobresYMarginados = makeEpisode({
  slug: "mujeres-pobres-y-marginados",
  title: "Las mujeres, los pobres y los marginados",
  period: "c. 28 – 30",
  cover: "Rembrandt Christ and the Woman Taken in Adultery.jpg",
  places,
  stops: [
    { id: "mesa", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "intocables", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "mujeres", year: "c. 28 – 30", place: "betania" },
    { id: "magdalena", year: "c. 28 – 30", place: "magdala" },
    { id: "extranjeros", year: "c. 28 – 30", place: "samaria" },
    { id: "ninos", year: "c. 30", place: "jerico" },
  ],
  library: { ...library, places },
  version: {
    title: "Las mujeres, los pobres y los marginados",
    inAMinute: [
      "Jesús escandalizaba por las personas con las que se juntaba.",
      "Comía con recaudadores y pecadores, tocaba a leprosos y defendía a una mujer acusada.",
      "Tenía discípulas, algo muy poco habitual, y hablaba a solas con mujeres.",
      "María Magdalena no era una prostituta: esa idea nació en el siglo VI.",
      "Puso como ejemplo a extranjeros despreciados y a niños, que no contaban para nada.",
    ],
    intro:
      "Dime con quién andas y te diré quién eres. A Jesús lo criticaban precisamente por eso: por las compañías. En una sociedad muy dividida entre puros e impuros, hombres y mujeres, judíos y extranjeros, él se sentaba a la mesa con los del lado equivocado.",
    sections: [
      {
        stop: "mesa",
        heading: "Comilón y borracho",
        blocks: [
          { type: "p", text: "En el mundo antiguo, con quién comías decía quién eras. Compartir la mesa era aceptar a alguien como de los tuyos. Por eso escandalizaba tanto que Jesús comiera en casa de recaudadores de impuestos y de gente de mala fama." },
          { type: "p", text: "Sus críticos le pusieron un apodo: «comilón y borracho, amigo de publicanos y pecadores». Los historiadores creen que es un recuerdo auténtico: ningún seguidor de Jesús se habría inventado un insulto así." },
          { type: "p", text: "En Jericó, un jefe de recaudadores, Zaqueo, rico y odiado, se subió a un árbol para verlo pasar porque era bajito. Jesús se paró, lo llamó por su nombre y se invitó a su casa. Zaqueo acabó devolviendo cuatro veces lo que había robado." },
          { type: "illustration", id: "zaqueo" },
        ],
      },
      {
        stop: "intocables",
        heading: "Tocar a los intocables",
        blocks: [
          { type: "p", text: "La Ley judía tenía normas de pureza: ciertas enfermedades, la sangre o el contacto con un cadáver dejaban a una persona «impura», y quien la tocaba también lo quedaba. Los leprosos, por ejemplo, tenían que vivir apartados y avisar a gritos de que lo eran." },
          { type: "p", text: "Los evangelios cuentan que un leproso se acercó a Jesús y él «extendió la mano y lo tocó». También que una mujer que llevaba doce años con hemorragias, y que por eso era impura, le tocó el manto entre la multitud, y Jesús, en lugar de reñirla, la llamó «hija»." },
          { type: "fact", label: "Lepra en la Biblia", text: "Lo que la Biblia llama «lepra» incluía muchas enfermedades de la piel, no solo la que hoy conocemos con ese nombre." },
        ],
      },
      {
        stop: "mujeres",
        heading: "Un maestro con discípulas",
        blocks: [
          { type: "p", text: "Un maestro judío de la época no solía tener discípulas ni hablar a solas con mujeres que no fueran de su familia. Jesús tuvo un grupo de mujeres que lo seguían desde Galilea y lo mantenían con sus bienes." },
          { type: "p", text: "En Betania, cerca de Jerusalén, era amigo de dos hermanas, Marta y María. Según Lucas, mientras Marta se afanaba en la cocina, María se sentaba a sus pies a escucharlo, la postura de un discípulo. Cuando Marta protestó, Jesús dijo que María había elegido «la mejor parte»." },
          { type: "image", id: "marta" },
          { type: "p", text: "Y en Jerusalén le llevaron a una mujer sorprendida en adulterio para que dijera si había que apedrearla, como mandaba la Ley. Jesús respondió: «El que esté libre de pecado, que tire la primera piedra». Se fueron todos, empezando por los más viejos." },
          { type: "image", id: "adultera" },
        ],
      },
      {
        stop: "magdalena",
        heading: "María Magdalena, la discípula calumniada",
        blocks: [
          { type: "character", id: "magdalena" },
          { type: "p", text: "María, la de Magdala, es la mujer que más aparece en los evangelios después de la madre de Jesús. Lo siguió desde Galilea, estuvo al pie de la cruz, vio dónde lo enterraban y, según los cuatro evangelios, fue de las primeras en encontrar el sepulcro vacío." },
          { type: "p", text: "En el año 591, el papa Gregorio Magno predicó un sermón en el que la identificó con una «pecadora» anónima del evangelio de Lucas. A partir de ahí, durante siglos, el arte la pintó como una prostituta arrepentida. Ningún texto del Nuevo Testamento lo dice." },
          { type: "fact", label: "Rehabilitada", text: "En 2016, el papa Francisco elevó su memoria a fiesta, el 22 de julio, y la Iglesia católica recuperó un título antiguo que le daban los Padres: «apóstol de los apóstoles», porque fue la primera en anunciarles la resurrección." },
        ],
      },
      {
        stop: "extranjeros",
        heading: "Extranjeros y enemigos",
        blocks: [
          { type: "p", text: "Los judíos y los samaritanos se despreciaban desde hacía siglos. Por eso es tan llamativo que Jesús eligiera a un samaritano como héroe de una de sus parábolas." },
          { type: "p", text: "El evangelio de Juan cuenta además que Jesús, cansado, se sentó junto a un pozo de Samaria y le pidió agua a una mujer samaritana. Ella se quedó asombrada: un judío hablando con una samaritana, y además mujer. Los discípulos, al volver, también." },
        ],
      },
      {
        stop: "ninos",
        heading: "Dejad que los niños se acerquen",
        blocks: [
          { type: "p", text: "Hoy los niños son el centro de muchas familias. En el mundo antiguo, no: no tenían derechos, muchos morían pequeños y no contaban hasta hacerse adultos." },
          { type: "p", text: "Cuando unas madres le llevaron a sus hijos para que los bendijera, los discípulos intentaron echarlas. Jesús se enfadó: «Dejad que los niños se acerquen a mí; no se lo impidáis, porque de los que son como ellos es el Reino de Dios»." },
          { type: "p", text: "Toda esta forma de actuar no era solo amabilidad. Era una manera de mostrar cómo era el Reino que anunciaba. Y precisamente por eso empezó a ganarse enemigos poderosos." },
        ],
      },
    ],
    relatedPills: ["existio-jesus"],
    quiz: [
      question("s2e6-magdalena", "¿Dicen los evangelios que María Magdalena era prostituta?", ["Sí, lo dicen los cuatro", "Solo Lucas", "No: esa idea nació en el siglo VI", "Lo dice Pablo"], 2, "Viene de un sermón del papa Gregorio Magno en el año 591."),
      question("s2e6-zaqueo", "¿Por qué se subió Zaqueo a un árbol?", ["Para esconderse", "Porque era bajito y quería ver a Jesús", "Para coger higos", "Para predicar"], 1, "Lo cuenta Lucas (19, 1-10). Era jefe de recaudadores en Jericó."),
      question("s2e6-piedra", "¿Qué dijo Jesús ante la mujer acusada de adulterio?", ["Que la apedrearan", "«El que esté libre de pecado, que tire la primera piedra»", "Que la llevaran ante Pilato", "Nada"], 1, "Lo cuenta el evangelio de Juan (8, 1-11)."),
    ],
    sources: [
      { text: "Evangelio de Lucas 7, 34; 8, 1-3; 10, 38-42; 19, 1-10; evangelio de Marcos 1, 40-45; 5, 25-34; 10, 13-16; evangelio de Juan 4 y 8, 1-11" },
      { text: "Gregorio Magno, Homilía 33 sobre los evangelios (591)" },
      { text: "Congregación para el Culto Divino, decreto sobre la fiesta de santa María Magdalena (2016)" },
    ],
    next: "En el próximo episodio: los conflictos. El sábado, el Templo, el perdón de los pecados y Roma. Por qué un predicador de Galilea acabó siendo un problema para los poderosos.",
  },
});
