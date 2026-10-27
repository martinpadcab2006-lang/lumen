import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("londres", "paris", "ferney", "lisboa", "madrid");

export const laIlustracion = makeEpisode({
  slug: "la-ilustracion",
  title: "La Ilustración",
  period: "1687 – 1789",
  cover: "Nicolas de Largillière - Portrait de Voltaire (1694-1778) en 1718 - P208 - musée Carnavalet - 5.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "razon", year: "1687 – 1740", place: "londres" },
    { id: "enciclopedia", year: "1751 – 1772", place: "paris" },
    { id: "voltaire", year: "1759 – 1778", place: "ferney" },
    { id: "lisboa", year: "1755", place: "lisboa" },
    { id: "jesuitas", year: "1759 – 1814", place: "madrid" },
  ],
  library: { ...library, places },
  version: {
    title: "La Ilustración",
    inAMinute: [
      "En el siglo XVIII, muchos pensadores europeos quisieron guiarse solo por la razón y criticaron a las Iglesias.",
      "Algunos eran deístas: creían en un Dios creador, pero no en la revelación ni en los milagros.",
      "Voltaire luchó contra la intolerancia religiosa, con casos como el de Jean Calas.",
      "El terremoto de Lisboa de 1755 provocó un gran debate sobre el mal y la existencia de Dios.",
      "Los jesuitas fueron expulsados de Portugal, Francia y España, y el papa suprimió la orden en 1773.",
    ],
    intro:
      "Atrévete a pensar por ti mismo: así resumió el filósofo Kant el espíritu de la Ilustración. Tras un siglo de guerras de religión, muchos europeos desconfiaban de las Iglesias y ponían su esperanza en la razón, la ciencia y la tolerancia. Fue una crítica dura al cristianismo, pero también una época en la que muchos cristianos renovaron su fe.",
    sections: [
      {
        stop: "razon",
        heading: "Un Dios relojero",
        blocks: [
          { type: "p", text: "En 1687, Isaac Newton explicó con unas pocas leyes matemáticas el movimiento de los planetas y la caída de una manzana. Newton era un hombre muy religioso, que escribió más sobre la Biblia que sobre física, aunque con ideas poco ortodoxas: no creía en la Trinidad." },
          { type: "p", text: "Muchos pensadores concluyeron que el universo era como un gran reloj, y Dios, el relojero que lo había fabricado y luego lo dejaba funcionar solo. Son los deístas: creían en un Dios creador, pero no en la revelación, ni en los milagros, ni en las Iglesias." },
          { type: "fact", label: "Un despertar religioso", text: "Al mismo tiempo, en Inglaterra, el clérigo anglicano John Wesley recorrió el país predicando al aire libre a mineros y obreros que no iban a la iglesia. De su movimiento nacieron los metodistas, hoy decenas de millones en todo el mundo." },
        ],
      },
      {
        stop: "enciclopedia",
        heading: "La Enciclopedia",
        blocks: [
          { type: "p", text: "En París, Denis Diderot y Jean d'Alembert dirigieron la «Enciclopedia», una obra gigantesca de 28 volúmenes que quería reunir todo el saber humano. Sus artículos, muchas veces con ironía, criticaban la superstición, la intolerancia y el poder de la Iglesia." },
          { type: "p", text: "La Iglesia y el rey la prohibieron varias veces, pero siguió publicándose y circulando. Sus ideas sobre la libertad de pensamiento, la igualdad y los derechos de las personas prepararon el terreno para las revoluciones que vendrían." },
        ],
      },
      {
        stop: "voltaire",
        heading: "Voltaire y el caso Calas",
        blocks: [
          { type: "image", id: "voltaire" },
          { type: "p", text: "El escritor más famoso de la Ilustración fue Voltaire. Creía en un Dios creador, pero atacó sin descanso a las Iglesias, a las que acusaba de fanatismo. Su grito de guerra era «¡Aplastad al infame!», refiriéndose a la intolerancia religiosa." },
          { type: "p", text: "En 1762, en Toulouse, un comerciante protestante, Jean Calas, fue torturado y ejecutado, acusado sin pruebas de haber matado a su hijo para que no se hiciera católico. Voltaire, desde su casa de Ferney, junto a la frontera suiza, lanzó una campaña que logró que se reconociera su inocencia, y escribió su «Tratado sobre la tolerancia»." },
        ],
      },
      {
        stop: "lisboa",
        heading: "El terremoto de Lisboa",
        blocks: [
          { type: "p", text: "La mañana del 1 de noviembre de 1755, día de Todos los Santos, mientras muchos lisboetas estaban en misa, un terremoto enorme, seguido de un tsunami y de incendios, destruyó Lisboa. Murieron decenas de miles de personas." },
          { type: "image", id: "lisboa" },
          { type: "p", text: "El desastre provocó un gran debate. Algunos predicadores dijeron que era un castigo divino. Voltaire escribió un poema preguntando cómo podía un Dios bueno permitir algo así. Rousseau le respondió que el desastre era también culpa humana: nadie había obligado a construir ciudades tan apiñadas. La pregunta por el mal, muy antigua, volvía con fuerza." },
        ],
      },
      {
        stop: "jesuitas",
        heading: "La caída de los jesuitas",
        blocks: [
          { type: "p", text: "Los jesuitas eran poderosos, educaban a las élites y tenían muchos enemigos: ilustrados, ministros de los reyes y también otros católicos. Fueron expulsados de Portugal en 1759, de Francia en 1764 y de España y sus territorios en 1767, por orden del rey Carlos III. Miles de jesuitas españoles e hispanoamericanos fueron desembarcados en Italia." },
          { type: "p", text: "En 1773, presionado por los reyes católicos, el papa Clemente XIV suprimió la Compañía de Jesús. Sobrevivió solo en Rusia y Prusia, cuyos gobernantes no eran católicos y no publicaron la orden del papa. Fue restaurada en 1814." },
          { type: "fact", label: "Ilustrados con hábito", text: "En España, muchos ilustrados eran clérigos. El más famoso fue el benedictino Benito Jerónimo Feijoo, que desde su celda de Oviedo escribió el «Teatro crítico universal» para combatir supersticiones, falsos milagros y errores populares." },
          { type: "p", text: "Así termina la séptima temporada. En la última, el cristianismo atraviesa las revoluciones, dos guerras mundiales y un gran concilio, hasta llegar al mundo de hoy." },
        ],
      },
    ],
    quiz: [
      question("s7e10-deismo", "¿Qué creían los deístas?", ["En muchos dioses", "En un Dios creador, pero no en la revelación ni en los milagros", "Que no existe Dios", "En la autoridad del papa"], 1, "Dios sería como un relojero que fabrica el reloj y lo deja funcionar."),
      question("s7e10-calas", "¿Por qué es famoso el caso Calas?", ["Por un milagro", "Porque Voltaire demostró la inocencia de un protestante ejecutado injustamente", "Por un terremoto", "Por la expulsión de los jesuitas"], 1, "De ahí nació el «Tratado sobre la tolerancia»."),
      question("s7e10-jesuitas", "¿Qué rey expulsó a los jesuitas de España en 1767?", ["Felipe II", "Carlos III", "Fernando VII", "Carlos V"], 1, "En 1773 el papa suprimió la orden."),
    ],
    sources: [
      { text: "Voltaire, Tratado sobre la tolerancia (1763) y Poema sobre el desastre de Lisboa (1756)" },
      { text: "Paul Hazard, La crisis de la conciencia europea, Alianza, 1988" },
      { text: "Enrique Giménez López, Expulsión y exilio de los jesuitas españoles, Universidad de Alicante, 1997" },
    ],
    next: "Temporada 8, episodio 1: la Revolución francesa y la Iglesia. Del altar a la guillotina.",
  },
});
