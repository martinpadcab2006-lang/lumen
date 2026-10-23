import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("corinto", "roma", "antioquia", "dura", "efeso");

export const lasPrimerasComunidades = makeEpisode({
  slug: "las-primeras-comunidades",
  title: "Cómo eran las primeras comunidades",
  period: "Siglos I – III",
  cover: "Dura Europos baptistry overview.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "casas", year: "Siglo I", place: "corinto" },
    { id: "domingo", year: "Siglos I – II", place: "roma" },
    { id: "bautismo", year: "Finales del siglo I", place: "antioquia" },
    { id: "quienes", year: "Siglos I – II", place: "efeso" },
    { id: "dura", year: "c. 240", place: "dura" },
  ],
  library: { ...library, places },
  version: {
    title: "Cómo eran las primeras comunidades",
    inAMinute: [
      "Los primeros cristianos no tenían templos: se reunían en casas particulares.",
      "Se juntaban el domingo para rezar, leer las Escrituras y compartir la cena del Señor.",
      "Para entrar había que bautizarse, a menudo en agua corriente, tras un tiempo de preparación.",
      "Había ricos y pobres, esclavos y libres, hombres y mujeres. Cuidaban de los pobres y las viudas.",
      "La iglesia más antigua que se conoce es una casa en Dura Europos (Siria), de hacia el año 240.",
    ],
    intro:
      "¿Cómo era ser cristiano en una ciudad romana del siglo I? Sin iglesias, sin campanarios, sin curas como los de hoy. Con cartas, con documentos como la Didaché y con la arqueología podemos asomarnos a sus reuniones.",
    sections: [
      {
        stop: "casas",
        heading: "La iglesia era una casa",
        blocks: [
          { type: "p", text: "Durante casi tres siglos, los cristianos no tuvieron edificios propios. Se reunían en casas de miembros con algo de dinero, que tenían una sala grande: el comedor o el patio. Pablo saluda en sus cartas a «la iglesia que se reúne en casa de» Priscila y Áquila, o de Ninfa." },
          { type: "p", text: "Una «iglesia» era, por tanto, un grupo de unas decenas de personas. En una gran ciudad como Roma podía haber varias de estas comunidades domésticas a la vez." },
        ],
      },
      {
        stop: "domingo",
        heading: "El domingo, antes del amanecer",
        blocks: [
          { type: "p", text: "Se reunían el primer día de la semana, el de la resurrección. Como el domingo era un día laborable en el Imperio, muchos se juntaban muy temprano, antes de ir a trabajar, o al anochecer." },
          { type: "p", text: "Hacia el año 112, el gobernador romano Plinio el Joven escribió al emperador Trajano lo que había averiguado de ellos: que se reunían un día fijo antes del amanecer, cantaban himnos «a Cristo como a un dios», se comprometían a no robar ni cometer adulterio ni engañar, y después volvían a juntarse para una comida sencilla." },
          { type: "p", text: "Hacia el año 150, el filósofo cristiano Justino describe la reunión con más detalle: se leían los escritos de los apóstoles y los profetas, el que presidía comentaba, se rezaba por todos, se compartía el pan y el vino, y se hacía una colecta para los huérfanos, las viudas, los enfermos y los presos. Es, en lo esencial, la estructura de la misa." },
        ],
      },
      {
        stop: "bautismo",
        heading: "Entrar por el agua",
        blocks: [
          { type: "p", text: "Para unirse a la comunidad había que bautizarse. La Didaché, un manual de finales del siglo I, da instrucciones: bautizar «en el nombre del Padre, del Hijo y del Espíritu Santo», a ser posible en agua corriente y fría; si no hay, en otra agua; y si no hay suficiente, derramando agua tres veces sobre la cabeza." },
          { type: "p", text: "Con el tiempo se organizó un periodo de preparación, el catecumenado, que podía durar años. Los bautismos se celebraban sobre todo en la noche de Pascua." },
          { type: "fact", label: "La Didaché también dice…", text: "Que hay que ayunar los miércoles y los viernes, rezar el Padrenuestro tres veces al día y no hacer caso a los predicadores que se queden más de dos días pidiendo dinero." },
        ],
      },
      {
        stop: "quienes",
        heading: "¿Quiénes eran?",
        blocks: [
          { type: "p", text: "Durante mucho tiempo se dijo que los primeros cristianos eran solo esclavos y pobres. Hoy los historiadores creen que había de todo: artesanos, comerciantes, esclavos, algunas personas ricas que prestaban sus casas, y muchas mujeres." },
          { type: "p", text: "Lo que llamaba la atención era que se mezclaran en la misma mesa, y que se llamaran «hermanos». Cuidaban de sus viudas y huérfanos, visitaban a los presos y enterraban a los pobres. Hacia el año 200, el escritor Tertuliano cuenta que los paganos decían de ellos: «Mirad cómo se aman»." },
          { type: "fact", label: "¿Quién mandaba?", text: "Al principio había apóstoles, profetas y maestros itinerantes, y en cada comunidad unos «ancianos» (presbíteros) y «supervisores» (epískopoi, de donde viene «obispo»), con «diáconos» que ayudaban. A principios del siglo II, Ignacio de Antioquía ya defiende un solo obispo al frente de cada ciudad." },
        ],
      },
      {
        stop: "dura",
        heading: "La iglesia más antigua del mundo",
        blocks: [
          { type: "p", text: "En 1932, unos arqueólogos que excavaban la ciudad romana de Dura Europos, junto al río Éufrates, en Siria, encontraron una casa como otra cualquiera. Pero una de sus salas tenía una pila bautismal y las paredes pintadas con escenas cristianas." },
          { type: "image", id: "dura" },
          { type: "p", text: "Era una casa convertida en iglesia hacia el año 240. En sus pinturas aparecen el Buen Pastor, Adán y Eva, Jesús caminando sobre el agua, la curación de un paralítico y unas mujeres que se acercan a un sepulcro. Es la iglesia cristiana más antigua que se ha identificado. Sus pinturas se conservan hoy en la Universidad de Yale." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo", "el-pez-simbolo-cristiano"],
    quiz: [
      question("s3e7-donde", "¿Dónde se reunían los primeros cristianos?", ["En grandes catedrales", "En casas particulares", "En el Senado", "En los teatros"], 1, "Durante casi tres siglos no tuvieron edificios propios."),
      question("s3e7-plinio", "¿Quién escribió al emperador Trajano sobre los cristianos hacia el año 112?", ["Nerón", "Plinio el Joven", "Tácito", "Séneca"], 1, "Contó que cantaban himnos «a Cristo como a un dios»."),
      question("s3e7-dura", "¿Dónde está la iglesia más antigua que se conoce?", ["En Roma", "En Jerusalén", "En Dura Europos (Siria)", "En Toledo"], 2, "Una casa convertida en iglesia hacia el año 240."),
    ],
    sources: [
      { text: "Plinio el Joven, Cartas X, 96; Justino, Primera apología 67; Didaché 7 – 11; Tertuliano, Apologético 39" },
      { text: "Wayne A. Meeks, Los primeros cristianos urbanos, Sígueme, 1988" },
    ],
    next: "En el próximo episodio: cristianos y judíos. Un mismo camino al principio que, poco a poco, acabó separándose.",
  },
});
