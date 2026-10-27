import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("zurich", "munster", "ginebra", "londres", "valladolid");

export const calvino = makeEpisode({
  slug: "calvino-y-otras-reformas",
  title: "Calvino y otras reformas",
  period: "1519 – 1569",
  cover: "John Calvin - best likeness.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "zuinglio", year: "1519 – 1531", place: "zurich" },
    { id: "anabaptistas", year: "1525 – 1536", place: "munster" },
    { id: "calvino", year: "1536 – 1564", place: "ginebra" },
    { id: "inglaterra", year: "1534 – 1559", place: "londres" },
    { id: "espana", year: "1557 – 1569", place: "valladolid" },
  ],
  library: { ...library, places },
  version: {
    title: "Calvino y otras reformas",
    inAMinute: [
      "La Reforma no fue una sola: enseguida surgieron reformadores que no estaban de acuerdo con Lutero.",
      "Zuinglio reformó Zúrich; los anabaptistas defendían bautizar solo a adultos y fueron perseguidos por todos.",
      "Juan Calvino convirtió Ginebra en la capital de la Reforma. En Ginebra se quemó al español Miguel Servet.",
      "Enrique VIII separó a la Iglesia de Inglaterra de Roma por una cuestión matrimonial y política.",
      "En España hubo pequeños grupos protestantes, eliminados por la Inquisición; algunos huyeron y tradujeron la Biblia.",
    ],
    intro:
      "Lutero abrió una puerta, y por ella entró mucha gente con ideas propias. En pocos años había luteranos, reformados, anabaptistas y anglicanos, que discutían entre sí casi tanto como con Roma. Así nació la enorme variedad del protestantismo.",
    sections: [
      {
        stop: "zuinglio",
        heading: "Zuinglio y las salchichas",
        blocks: [
          { type: "p", text: "En Zúrich, el sacerdote Ulrico Zuinglio empezó a predicar ideas parecidas a las de Lutero. El conflicto estalló en 1522, cuando unos amigos suyos comieron salchichas en Cuaresma, y él los defendió: la Biblia no prohibía comer carne." },
          { type: "p", text: "Zuinglio fue más lejos que Lutero: retiró las imágenes de las iglesias y sostuvo que la eucaristía era solo un símbolo, un recuerdo. En 1529, los dos reformadores se reunieron en Marburgo y no lograron ponerse de acuerdo precisamente en eso. Zuinglio murió en 1531 en una batalla contra los cantones católicos." },
        ],
      },
      {
        stop: "anabaptistas",
        heading: "Los anabaptistas",
        blocks: [
          { type: "p", text: "Algunos discípulos de Zuinglio pensaban que solo se debía bautizar a los adultos que creen, no a los bebés, así que en 1525 empezaron a bautizarse de nuevo. Se les llamó anabaptistas, «rebautizadores». Fueron perseguidos por católicos y protestantes a la vez: en 1527, uno de ellos, Félix Manz, fue ahogado en el río por las autoridades de Zúrich." },
          { type: "p", text: "En 1534, un grupo radical tomó la ciudad alemana de Münster y proclamó un reino del fin del mundo. Tras un largo asedio, sus líderes fueron ejecutados y sus cuerpos expuestos en jaulas colgadas de la torre de la iglesia de San Lamberto. Las jaulas siguen allí." },
          { type: "fact", label: "Menonitas y amish", text: "La mayoría de los anabaptistas, sin embargo, eran pacíficos. Siguiendo al holandés Menno Simons, formaron las Iglesias menonitas, que rechazan la violencia. De ellos vienen también los amish de Estados Unidos." },
        ],
      },
      {
        stop: "calvino",
        heading: "Calvino y Ginebra",
        blocks: [
          { type: "character", id: "calvino" },
          { type: "p", text: "Calvino organizó Ginebra como una ciudad modelo protestante, con una vida moral estrictamente vigilada. Insistía en la soberanía absoluta de Dios y en la predestinación: Dios ha decidido desde siempre quién se salva. Las iglesias «reformadas» o «presbiterianas» que siguen sus ideas se extendieron por Francia (los hugonotes), Holanda, Escocia y, con los puritanos ingleses, Estados Unidos." },
          { type: "p", text: "Ginebra tampoco fue tolerante. En 1553 fue quemado allí el médico aragonés Miguel Servet, que negaba la Trinidad. Servet, que había huido de la Inquisición católica, fue también uno de los primeros en describir cómo la sangre pasa por los pulmones." },
        ],
      },
      {
        stop: "inglaterra",
        heading: "Enrique VIII y la Iglesia de Inglaterra",
        blocks: [
          { type: "image", id: "enrique" },
          { type: "p", text: "En Inglaterra, la ruptura tuvo un origen distinto. El rey Enrique VIII quería anular su matrimonio con Catalina de Aragón, hija de los Reyes Católicos, porque no le había dado un hijo varón. El papa se negó, en parte porque el sobrino de Catalina era el emperador Carlos V. En 1534, Enrique se declaró cabeza de la Iglesia de Inglaterra. Tomás Moro, su antiguo canciller, se negó a aceptarlo y fue decapitado." },
          { type: "p", text: "Siguieron décadas de vaivenes: con el hijo de Enrique, Inglaterra se hizo protestante; con su hija María Tudor, casada con Felipe II de España, volvió a ser católica y se quemó a cerca de trescientos protestantes; con Isabel I, desde 1559, se asentó la Iglesia anglicana, a medio camino entre las dos." },
        ],
      },
      {
        stop: "espana",
        heading: "Protestantes en España",
        blocks: [
          { type: "p", text: "En España también hubo pequeños grupos protestantes, sobre todo en Sevilla y Valladolid, entre clérigos, monjes y nobles cultos. La Inquisición los descubrió en 1557-1558 y celebró grandes autos de fe en 1559 en Valladolid y Sevilla. Ahí terminó el protestantismo en España durante siglos." },
          { type: "p", text: "Algunos monjes del monasterio sevillano de San Isidoro del Campo lograron huir. Uno de ellos, Casiodoro de Reina, publicó en 1569 en Basilea la primera Biblia completa en castellano, la Biblia del Oso. Revisada por otro de ellos, Cipriano de Valera, es la Reina-Valera, que todavía usan millones de protestantes de habla hispana." },
        ],
      },
    ],
    relatedPills: ["catolicos-ortodoxos-protestantes", "carne-en-cuaresma"],
    quiz: [
      question("s7e3-anabaptistas", "¿Qué defendían los anabaptistas?", ["Bautizar solo a los bebés", "Bautizar solo a los adultos que creen", "No bautizar a nadie", "Obedecer al papa"], 1, "Fueron perseguidos por católicos y protestantes."),
      question("s7e3-servet", "¿Quién fue Miguel Servet?", ["Un papa español", "Un médico aragonés quemado en Ginebra en 1553", "El traductor de la Biblia del Oso", "Un rey de Inglaterra"], 1, "Negaba la Trinidad. También describió el paso de la sangre por los pulmones."),
      question("s7e3-enrique", "¿Por qué rompió Enrique VIII con Roma?", ["Por las indulgencias", "Porque el papa no anuló su matrimonio con Catalina de Aragón", "Por la Trinidad", "Por una guerra con España"], 1, "En 1534 se declaró cabeza de la Iglesia de Inglaterra."),
    ],
    sources: [
      { text: "Juan Calvino, Institución de la religión cristiana (1536-1559)" },
      { text: "Diarmaid MacCulloch, Historia de la Reforma, Debate, 2005" },
      { text: "A. Gordon Kinder, Casiodoro de Reina: reformador español del siglo XVI, Tamesis, 1975" },
    ],
    next: "En el próximo episodio: la gran respuesta católica. El Concilio de Trento, los seminarios, el arte barroco y Felipe II.",
  },
});
