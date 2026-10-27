import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "reims", "toledo", "pavia", "sevilla");

export const losPueblosGermanicos = makeEpisode({
  slug: "los-pueblos-germanicos",
  title: "La conversión de los pueblos germánicos",
  period: "Siglos V – VII",
  cover: "Reccared I Conversión, by Muñoz Degrain, Senate Palace, Madrid.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "dos", year: "Siglo V", place: "roma" },
    { id: "clodoveo", year: "c. 496 – 508", place: "reims" },
    { id: "visigodos", year: "585 – 589", place: "toledo" },
    { id: "lombardos", year: "568 – 774", place: "pavia" },
    { id: "isidoro", year: "Siglo VII", place: "sevilla" },
  ],
  library: { ...library, places },
  version: {
    title: "La conversión de los pueblos germánicos",
    inAMinute: [
      "Los pueblos germánicos que se repartieron el Imperio de Occidente eran paganos o cristianos arrianos.",
      "Los romanos de esas tierras eran católicos: la religión separaba a los nuevos reyes de sus súbditos.",
      "Clodoveo, rey de los francos, se bautizó como católico hacia el año 500. Fue un paso decisivo para Francia.",
      "En Hispania, el rey visigodo Recaredo se hizo católico y lo proclamó en el III Concilio de Toledo (589).",
      "De la mezcla de lo romano, lo germánico y lo cristiano nació la Europa medieval.",
    ],
    intro:
      "Visigodos en Hispania, francos en la Galia, ostrogodos y luego lombardos en Italia, vándalos en África. A finales del siglo V, el antiguo Imperio de Occidente era un mosaico de reinos germánicos. Sus reyes mandaban, pero eran minoría, y tenían un problema: no compartían la fe de la población.",
    sections: [
      {
        stop: "dos",
        heading: "Dos iglesias en cada reino",
        blocks: [
          { type: "p", text: "Muchos de estos pueblos se habían hecho cristianos en el siglo IV, pero en su versión arriana, gracias a misioneros como Ulfilas. Los habitantes romanos, en cambio, eran católicos y seguían el Credo de Nicea." },
          { type: "p", text: "Así que en muchos reinos había dos iglesias, dos clases de obispos y dos comunidades que no se mezclaban. Durante un tiempo, incluso estaban prohibidos los matrimonios entre godos y romanos. Para unir sus reinos, los reyes tenían que resolver esa división." },
        ],
      },
      {
        stop: "clodoveo",
        heading: "El bautismo de Clodoveo",
        blocks: [
          { type: "p", text: "Los francos eran todavía paganos. Su rey, Clodoveo, estaba casado con una princesa católica, Clotilde. Según el historiador Gregorio de Tours, en plena batalla contra los alamanes, a punto de perder, Clodoveo prometió hacerse cristiano si el Dios de su esposa le daba la victoria. Ganó." },
          { type: "image", id: "clodoveo" },
          { type: "p", text: "Lo bautizó en Reims el obispo Remigio, con unos tres mil de sus guerreros. Gregorio pone en boca del obispo una frase famosa: «Inclina humildemente la cabeza, sicambro; adora lo que has quemado y quema lo que has adorado». La fecha exacta se discute: entre el 496 y el 508." },
          { type: "p", text: "Al hacerse católico y no arriano, Clodoveo se ganó el apoyo de los obispos y de la población romana. Por eso Francia se llamaría después la «hija primogénita de la Iglesia», y sus reyes se coronarían durante siglos en Reims." },
        ],
      },
      {
        stop: "visigodos",
        heading: "Los visigodos se hacen católicos",
        blocks: [
          { type: "p", text: "En Hispania, los visigodos eran arrianos y tenían su capital en Toledo. El rey Leovigildo intentó unificar el reino también en la religión, pero a favor del arrianismo. Su propio hijo, Hermenegildo, se hizo católico y se rebeló contra él. Fue derrotado y murió asesinado en el año 585. La Iglesia lo venera como mártir." },
          { type: "p", text: "El otro hijo, Recaredo, sucedió a su padre y tomó el camino contrario: en el 587 se hizo católico. Dos años después, en el III Concilio de Toledo, presidido por Leandro, obispo de Sevilla, él y los nobles godos renunciaron solemnemente al arrianismo." },
          { type: "image", id: "recaredo" },
          { type: "p", text: "A partir de entonces, los concilios de Toledo, en los que se reunían obispos y nobles bajo la presidencia del rey, fueron una de las instituciones más importantes del reino. Hubo dieciocho. Y los reyes visigodos ofrecían a las iglesias coronas de oro y piedras preciosas, como las que se encontraron en Guarrazar." },
          { type: "image", id: "recesvinto" },
        ],
      },
      {
        stop: "lombardos",
        heading: "Los lombardos y una reina católica",
        blocks: [
          { type: "p", text: "En el año 568, los lombardos invadieron Italia, que acababa de ser reconquistada por Bizancio tras una guerra devastadora. Eran en parte paganos y en parte arrianos, y su llegada fue muy violenta." },
          { type: "p", text: "Pero su reina, Teodolinda, una princesa bávara católica, mantenía correspondencia con el papa Gregorio Magno e hizo bautizar como católico a su hijo. Durante el siglo VII, poco a poco, los lombardos se fueron haciendo católicos. Su reino, con capital en Pavía, duró hasta que Carlomagno lo conquistó en el 774." },
        ],
      },
      {
        stop: "isidoro",
        heading: "Nace Europa",
        blocks: [
          { type: "p", text: "Al convertirse al catolicismo, los reinos germánicos adoptaron también el latín de la Iglesia, sus escuelas, su derecho, sus libros. Los obispos, casi siempre de familias romanas, fueron el puente entre los dos mundos." },
          { type: "p", text: "Isidoro de Sevilla, hermano de Leandro, escribió una «Historia de los godos» que empieza con un elogio de Hispania, como si godos e hispanorromanos fueran ya un solo pueblo. De esa mezcla de herencia romana, pueblos germánicos y fe cristiana nació lo que hoy llamamos Europa." },
          { type: "quote", text: "Tú eres, oh Hispania, la más hermosa de todas las tierras que se extienden del Occidente hasta la India.", source: "Isidoro de Sevilla, Loa de Hispania" },
        ],
      },
    ],
    quiz: [
      question("s6e5-arrianos", "¿Qué problema religioso tenían muchos reinos germánicos?", ["Que no tenían iglesias", "Que los reyes eran arrianos o paganos y la población romana era católica", "Que no conocían la Biblia", "Que estaban gobernados por el papa"], 1, "Había dos iglesias en cada reino."),
      question("s6e5-clodoveo", "¿Dónde se bautizó Clodoveo, rey de los francos?", ["En Roma", "En Reims", "En Toledo", "En Constantinopla"], 1, "Por eso los reyes de Francia se coronarían allí durante siglos."),
      question("s6e5-recaredo", "¿En qué concilio renunciaron los visigodos al arrianismo?", ["En el de Nicea", "En el III Concilio de Toledo (589)", "En el de Trento", "En el de Calcedonia"], 1, "Lo presidió Leandro de Sevilla."),
    ],
    sources: [
      { text: "Gregorio de Tours, Historia de los francos II, 30-31; Actas del III Concilio de Toledo (589)" },
      { text: "Isidoro de Sevilla, Historia de los godos, vándalos y suevos" },
      { text: "Roger Collins, La España visigoda, 409-711, Crítica, 2005" },
    ],
    next: "En el próximo episodio: en el año 711 todo cambia en la península. Al-Ándalus: ocho siglos de cristianos, musulmanes y judíos.",
  },
});
