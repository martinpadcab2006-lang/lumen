import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("santoDomingo", "mexico", "valladolid", "nagasaki", "pekin", "guaranies", "congo");

export const lasMisiones = makeEpisode({
  slug: "las-misiones",
  title: "Las misiones: América, Asia y África",
  period: "1492 – 1767",
  cover: "Ruinas Jesuiticas San Ignacio Mini.JPG",
  mapRegion: "mundo",
  places,
  stops: [
    { id: "montesinos", year: "1511", place: "santoDomingo" },
    { id: "mexico", year: "1524 – 1531", place: "mexico" },
    { id: "valladolid", year: "1539 – 1551", place: "valladolid" },
    { id: "japon", year: "1549 – 1873", place: "nagasaki" },
    { id: "china", year: "1582 – 1742", place: "pekin" },
    { id: "guaranies", year: "1609 – 1767", place: "guaranies" },
    { id: "africa", year: "Siglos XVI – XVII", place: "congo" },
  ],
  library: { ...library, places },
  version: {
    title: "Las misiones: América, Asia y África",
    inAMinute: [
      "Con los viajes de españoles y portugueses, el cristianismo llegó a América, Asia y África.",
      "En América, la evangelización fue unida a una conquista violenta. Algunos frailes denunciaron los abusos desde el principio.",
      "En España se debatió si la conquista era justa y qué derechos tenían los indígenas. De ahí nacieron ideas clave del derecho internacional.",
      "En Japón y China, los jesuitas intentaron adaptarse a la cultura local. En Japón hubo una gran persecución.",
      "En Paraguay, los jesuitas organizaron pueblos guaraníes protegidos de los esclavistas hasta su expulsión en 1767.",
    ],
    intro:
      "A partir de 1492, el cristianismo dejó de ser una religión casi solo europea y del Mediterráneo para convertirse en una religión mundial. Fue una historia de entrega y de violencia, de misioneros que dieron la vida por los pueblos que evangelizaban y de otros que justificaron su sometimiento. Hay que contar las dos cosas.",
    sections: [
      {
        stop: "montesinos",
        heading: "«¿Estos no son hombres?»",
        blocks: [
          { type: "p", text: "La llegada de los europeos a América fue una catástrofe para sus pueblos. La mayoría de las muertes las causaron enfermedades como la viruela, contra las que no tenían defensas, pero también hubo guerras, matanzas y explotación. En las islas del Caribe, los colonos recibían grupos de indígenas para trabajar en un sistema llamado encomienda." },
          { type: "p", text: "En diciembre de 1511, en Santo Domingo, un fraile dominico, Antonio de Montesinos, predicó un sermón ante los colonos que los dejó escandalizados:" },
          { type: "quote", text: "¿Con qué derecho y con qué justicia tenéis en tan cruel y horrible servidumbre a estos indios? […] ¿Estos no son hombres? ¿No tienen ánimas racionales?", source: "Sermón de Antonio de Montesinos, según Bartolomé de las Casas" },
          { type: "p", text: "Los colonos protestaron ante el rey, pero el sermón provocó las primeras leyes de protección de los indígenas, las Leyes de Burgos de 1512. Entre quienes lo oyeron estaba un joven colono, Bartolomé de las Casas." },
          { type: "character", id: "lasCasas" },
        ],
      },
      {
        stop: "mexico",
        heading: "Nueva España y Guadalupe",
        blocks: [
          { type: "p", text: "En 1524 llegaron a México doce frailes franciscanos, que caminaron descalzos desde la costa. Muchos misioneros aprendieron las lenguas indígenas, escribieron gramáticas y catecismos en náhuatl, maya o quechua, y algunos, como el franciscano Bernardino de Sahagún, recopilaron con enorme cuidado la cultura de los pueblos que querían evangelizar." },
          { type: "image", id: "guadalupe" },
          { type: "p", text: "Según la tradición mexicana, en diciembre de 1531 la Virgen se apareció a un indígena, Juan Diego, en el cerro del Tepeyac y dejó su imagen impresa en su manto. La Virgen de Guadalupe, morena y vestida como una princesa indígena, se convirtió en el gran símbolo del catolicismo mexicano. Juan Diego fue declarado santo en 2002." },
        ],
      },
      {
        stop: "valladolid",
        heading: "El gran debate",
        blocks: [
          { type: "p", text: "En España hubo un debate que no se dio en ningún otro imperio de la época. En la Universidad de Salamanca, el dominico Francisco de Vitoria defendió en 1539 que los indígenas eran dueños legítimos de sus tierras y que no se les podía hacer la guerra por no ser cristianos. Se le considera uno de los padres del derecho internacional." },
          { type: "image", id: "lasCasas" },
          { type: "p", text: "En 1550-1551, el emperador Carlos V llegó a suspender las conquistas para que se celebrara en Valladolid un debate público entre Las Casas, que defendía a los indígenas, y el humanista Juan Ginés de Sepúlveda, que justificaba la conquista. No hubo un vencedor claro, y las leyes no siempre se cumplieron, pero el debate en sí fue algo excepcional." },
        ],
      },
      {
        stop: "japon",
        heading: "Japón: de la acogida a la persecución",
        blocks: [
          { type: "p", text: "En 1549, el navarro Francisco Javier desembarcó en Japón. Las misiones tuvieron un éxito enorme: hacia 1600 había unos 300.000 cristianos japoneses. Pero los gobernantes empezaron a ver el cristianismo como una amenaza extranjera." },
          { type: "p", text: "En 1597, veintiséis cristianos, japoneses y europeos, entre ellos varios franciscanos españoles, fueron crucificados en Nagasaki. Desde 1614, el cristianismo quedó prohibido y miles de cristianos fueron torturados y ejecutados." },
          { type: "fact", label: "Los cristianos ocultos", text: "Algunas familias siguieron siendo cristianas en secreto durante casi 250 años, sin sacerdotes, transmitiendo oraciones de padres a hijos. En 1865, un grupo se presentó ante un misionero francés en Nagasaki. Fue uno de los reencuentros más emocionantes de la historia de las misiones." },
        ],
      },
      {
        stop: "china",
        heading: "Matteo Ricci, un sabio en Pekín",
        blocks: [
          { type: "p", text: "En China, el jesuita italiano Matteo Ricci eligió otro camino: aprender perfectamente el chino, vestirse como un sabio confuciano y ganarse a los intelectuales con la ciencia europea. Llegó a Pekín en 1601, dibujó un mapa del mundo en chino y tradujo a Euclides con su amigo Xu Guangqi, un alto funcionario que se hizo cristiano." },
          { type: "image", id: "ricci" },
          { type: "p", text: "Los jesuitas permitieron a los cristianos chinos seguir honrando a sus antepasados y a Confucio, porque lo veían como un gesto cultural, no religioso. Otros misioneros lo consideraron idolatría, y en 1742 Roma lo prohibió. Esta «disputa de los ritos chinos» frenó las misiones durante siglos. La prohibición se levantó en 1939." },
        ],
      },
      {
        stop: "guaranies",
        heading: "Las reducciones del Paraguay",
        blocks: [
          { type: "p", text: "En la cuenca de los ríos Paraná y Uruguay, entre las actuales Paraguay, Argentina y Brasil, los jesuitas organizaron desde 1609 unos treinta pueblos o «reducciones» en los que vivían más de cien mil guaraníes. Allí los protegían de los esclavistas portugueses y de los colonos españoles." },
          { type: "image", id: "guaranies" },
          { type: "p", text: "En las reducciones se hablaba guaraní, se cultivaban tierras comunes, había talleres, imprentas e incluso orquestas que tocaban música barroca. Cuando los jesuitas fueron expulsados en 1767, las reducciones se desmoronaron. Su historia la contó la película «La misión» (1986)." },
        ],
      },
      {
        stop: "africa",
        heading: "África y la esclavitud",
        blocks: [
          { type: "p", text: "En África, el reino del Congo se hizo cristiano a finales del siglo XV. Su rey Afonso I, un católico convencido, escribió al rey de Portugal quejándose de la trata de esclavos que estaba destruyendo su país. Su hijo Enrique fue nombrado obispo en 1518, uno de los primeros obispos africanos de los tiempos modernos." },
          { type: "p", text: "La trata de africanos hacia América fue una de las grandes vergüenzas de esta época, y muchos cristianos e instituciones de la Iglesia la aceptaron o se beneficiaron de ella. Hubo también quien la combatió: en Cartagena de Indias, el jesuita catalán Pedro Claver pasó cuarenta años atendiendo a los esclavos que llegaban en los barcos, y se llamaba a sí mismo «esclavo de los esclavos»." },
        ],
      },
    ],
    relatedPills: ["donde-viven-los-cristianos"],
    quiz: [
      question("s7e7-montesinos", "¿Qué denunció Antonio de Montesinos en su sermón de 1511?", ["La venta de indulgencias", "Los abusos de los colonos contra los indígenas", "La Reforma protestante", "La esclavitud en Japón"], 1, "«¿Estos no son hombres?»."),
      question("s7e7-vitoria", "¿Por qué se considera a Francisco de Vitoria uno de los padres del derecho internacional?", ["Porque descubrió América", "Porque defendió los derechos de los pueblos indígenas y los límites de la guerra", "Porque fue papa", "Porque escribió la Biblia del Oso"], 1, "Era profesor en Salamanca."),
      question("s7e7-japon", "¿Qué pasó con los cristianos japoneses tras la prohibición de 1614?", ["Desaparecieron todos", "Algunos mantuvieron la fe en secreto durante casi 250 años", "Se fueron a China", "Se hicieron budistas"], 1, "Se dieron a conocer en Nagasaki en 1865."),
    ],
    sources: [
      { text: "Bartolomé de las Casas, Historia de las Indias III, 4; Francisco de Vitoria, Relecciones sobre los indios (1539)" },
      { text: "Lewis Hanke, La lucha por la justicia en la conquista de América, Istmo, 1988" },
      { text: "Jonathan D. Spence, El palacio de la memoria de Matteo Ricci, Tusquets" },
    ],
    next: "En el próximo episodio: católicos y protestantes se matan durante un siglo. Las guerras de religión.",
  },
});
