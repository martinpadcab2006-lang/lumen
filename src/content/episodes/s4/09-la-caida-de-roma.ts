import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "hipona", "ravena", "constantinopla", "tarragona");

export const laCaidaDeRoma = makeEpisode({
  slug: "la-caida-de-roma",
  title: "La caída de Roma",
  period: "410 – 476",
  cover: "Sack of Rome by the Visigoths on 24 August 410 by JN Sylvestre 1890.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "saqueo", year: "410", place: "roma" },
    { id: "agustin", year: "413 – 426", place: "hipona" },
    { id: "leon", year: "452 – 455", place: "roma" },
    { id: "fin", year: "476", place: "ravena" },
    { id: "iglesia", year: "Siglos V – VI", place: "tarragona" },
  ],
  library: { ...library, places },
  version: {
    title: "La caída de Roma",
    inAMinute: [
      "En el año 410, los visigodos de Alarico saquearon Roma: fue un golpe enorme para todo el mundo romano.",
      "Muchos paganos culparon al cristianismo. San Agustín respondió con «La ciudad de Dios».",
      "Según la tradición, el papa León Magno convenció a Atila de no atacar Roma en el 452.",
      "En el 476 fue depuesto el último emperador de Occidente. El Imperio de Oriente siguió mil años más.",
      "En el caos, los obispos y los monasterios se convirtieron en el gran sostén de la sociedad.",
    ],
    intro:
      "Durante ochocientos años, nadie había conseguido entrar en Roma como enemigo. En el año 410, los visigodos lo hicieron. Sesenta y seis años después, ya no había emperador en Occidente. Cerramos la temporada con el final de un mundo y el principio de otro.",
    sections: [
      {
        stop: "saqueo",
        heading: "Roma saqueada",
        blocks: [
          { type: "p", text: "El 24 de agosto del año 410, los visigodos de Alarico entraron en Roma y la saquearon durante tres días. No fue la mayor destrucción de la historia: Alarico, que era cristiano arriano, respetó las basílicas de San Pedro y San Pablo y a quienes se refugiaron en ellas." },
          { type: "image", id: "saqueo" },
          { type: "p", text: "Pero el golpe moral fue tremendo. San Jerónimo, que vivía en Belén, escribió: «Se apaga la luz más brillante del mundo; en una sola ciudad perece todo el género humano»." },
        ],
      },
      {
        stop: "agustin",
        heading: "«La ciudad de Dios»",
        blocks: [
          { type: "p", text: "Muchos paganos tenían una explicación: Roma había caído porque había abandonado a sus dioses por el Dios de los cristianos. Agustín, obispo de Hipona, en el norte de África, se sintió obligado a responder." },
          { type: "character", id: "agustin" },
          { type: "p", text: "Durante trece años escribió «La ciudad de Dios», una de las obras más influyentes de la historia. Su idea central: hay dos «ciudades» mezcladas en el mundo, la terrena, movida por el amor a uno mismo, y la de Dios, movida por el amor a Dios. Ningún imperio es eterno, tampoco Roma. La fe cristiana no dependía de ningún Estado." },
          { type: "fact", label: "Muerte de Agustín", text: "Agustín murió en el año 430, mientras los vándalos asediaban su ciudad, Hipona. Su pensamiento marcaría a la Iglesia durante toda la Edad Media y más allá." },
        ],
      },
      {
        stop: "leon",
        heading: "El papa ante Atila",
        blocks: [
          { type: "p", text: "En el año 452, Atila, rey de los hunos, invadió Italia. Según la tradición, el papa León I salió a su encuentro cerca de Mantua, junto con dos senadores, y lo convenció de retirarse. Las razones reales de la retirada de Atila, probablemente el hambre y la peste en su ejército, se discuten, pero la escena se convirtió en un símbolo." },
          { type: "p", text: "Tres años después, en el 455, los vándalos saquearon Roma durante dos semanas. León consiguió al menos que no incendiaran la ciudad ni mataran a sus habitantes. Ante la debilidad de los emperadores, el obispo de Roma se estaba convirtiendo en el defensor de la ciudad." },
        ],
      },
      {
        stop: "fin",
        heading: "El último emperador",
        blocks: [
          { type: "p", text: "En el año 476, Odoacro, un jefe militar germano, depuso en Rávena a un emperador adolescente con un nombre muy irónico: Rómulo Augústulo, como el fundador de Roma y el primer emperador. Odoacro no se proclamó emperador: envió las insignias imperiales a Constantinopla." },
          { type: "p", text: "Es la fecha que los libros usan para marcar el final del Imperio romano de Occidente y el comienzo de la Edad Media. En la práctica, apenas cambió nada ese día: el Imperio llevaba décadas desmoronándose. Y en Oriente, el Imperio romano, que hoy llamamos bizantino, siguió en pie hasta 1453." },
        ],
      },
      {
        stop: "iglesia",
        heading: "Fin de la cuarta temporada",
        blocks: [
          { type: "p", text: "Con la administración romana en ruinas, en muchas ciudades los obispos asumieron funciones de gobierno: negociaban con los nuevos reyes germánicos, organizaban el reparto de comida y defendían a la población. Y en el campo, los monasterios guardaron los libros y la cultura antigua." },
          { type: "p", text: "En Hispania se instalaron los visigodos, que eran arrianos. Tardarían más de un siglo en hacerse católicos, en el III Concilio de Toledo, en el año 589." },
          { type: "p", text: "Así termina la cuarta temporada. En la siguiente damos un paso atrás para entender qué creían exactamente los cristianos: la Biblia, los Padres de la Iglesia, la Trinidad, los sacramentos. Y después, mil años de monjes, reinos y catedrales." },
        ],
      },
    ],
    relatedPills: ["nicea-y-el-credo"],
    quiz: [
      question("s4e9-410", "¿Quién saqueó Roma en el año 410?", ["Los hunos de Atila", "Los visigodos de Alarico", "Los vándalos", "Los persas"], 1, "Fue la primera vez en ochocientos años que un enemigo entraba en Roma."),
      question("s4e9-agustin", "¿Qué obra escribió san Agustín tras el saqueo de Roma?", ["Las Confesiones", "La ciudad de Dios", "La Vulgata", "El Credo"], 1, "Defendía que la fe cristiana no dependía de ningún imperio."),
      question("s4e9-476", "¿Qué pasó en el año 476?", ["Se fundó Constantinopla", "Fue depuesto el último emperador romano de Occidente", "Se celebró el Concilio de Nicea", "Los visigodos se hicieron católicos"], 1, "Rómulo Augústulo, depuesto por Odoacro en Rávena."),
    ],
    sources: [
      { text: "Agustín de Hipona, La ciudad de Dios; Jerónimo, Carta 127" },
      { text: "Peter Heather, La caída del Imperio romano, Crítica, 2006" },
      { text: "Peter Brown, Agustín de Hipona, Acento, 2001" },
    ],
    next: "Temporada 5, episodio 1: la Biblia. Una biblioteca escrita durante más de mil años.",
  },
});
