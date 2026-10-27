import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("paris", "vendee", "compiegne", "valence", "madrid");

export const laRevolucion = makeEpisode({
  slug: "la-revolucion-francesa",
  title: "La Revolución francesa y la Iglesia",
  period: "1789 – 1815",
  cover: "Jacques-Louis David - The Coronation of Napoleon (1805-1807).jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "1789", year: "1789 – 1791", place: "paris" },
    { id: "vendee", year: "1793 – 1796", place: "vendee" },
    { id: "terror", year: "1793 – 1794", place: "compiegne" },
    { id: "napoleon", year: "1799 – 1815", place: "valence" },
    { id: "espana", year: "1808 – 1837", place: "madrid" },
  ],
  library: { ...library, places },
  version: {
    title: "La Revolución francesa y la Iglesia",
    inAMinute: [
      "En 1789, la Revolución francesa acabó con la monarquía absoluta. Al principio, muchos curas la apoyaron.",
      "La Revolución confiscó los bienes de la Iglesia y obligó al clero a jurar una constitución civil. La Iglesia de Francia se partió en dos.",
      "Durante el Terror (1793-1794) se intentó descristianizar Francia: se cerraron iglesias y murieron miles de sacerdotes, monjas y fieles.",
      "Napoleón firmó un acuerdo con el papa en 1801, pero luego lo tuvo prisionero.",
      "Las ideas de la Revolución llegaron a España: libertad, igualdad, separación entre Iglesia y Estado. El siglo XIX sería un largo choque entre liberales y católicos.",
    ],
    intro:
      "Empieza la última temporada. Durante más de mil años, en Europa la Iglesia y el trono habían ido de la mano. En 1789, en Francia, eso saltó por los aires. La Revolución trajo ideas que hoy consideramos básicas, como los derechos humanos o la igualdad ante la ley, y también una persecución religiosa brutal.",
    sections: [
      {
        stop: "1789",
        heading: "Del entusiasmo a la ruptura",
        blocks: [
          { type: "p", text: "En la Francia de 1789, el clero era el «primer estamento»: tenía privilegios, no pagaba impuestos y poseía muchas tierras. Pero no todos los curas eran ricos. Muchos párrocos vivían pobremente y simpatizaban con el pueblo, y cuando se reunieron los Estados Generales, una parte del clero se unió al «tercer estado» para formar la Asamblea Nacional." },
          { type: "p", text: "La ruptura llegó pronto. La Asamblea confiscó los bienes de la Iglesia para pagar la deuda del Estado, suprimió los monasterios y en 1790 aprobó la «constitución civil del clero»: los obispos y párrocos serían elegidos por los ciudadanos y tendrían que jurar fidelidad a la Constitución. El papa la condenó. Aproximadamente la mitad de los sacerdotes juraron; la otra mitad, los «refractarios», se negaron y fueron perseguidos." },
        ],
      },
      {
        stop: "vendee",
        heading: "La guerra de la Vendée",
        blocks: [
          { type: "p", text: "En 1793, en la Vendée, una región rural del oeste de Francia, los campesinos se alzaron en armas contra la República, en defensa de sus sacerdotes y contra el reclutamiento obligatorio. La represión fue terrible: las «columnas infernales» del ejército republicano arrasaron pueblos enteros." },
          { type: "p", text: "Murieron más de cien mil personas, según muchas estimaciones, buena parte de ellas civiles. Algunos historiadores han hablado incluso de genocidio; otros rechazan esa palabra. Lo que nadie discute es la brutalidad de aquella guerra civil." },
        ],
      },
      {
        stop: "terror",
        heading: "El Terror y la descristianización",
        blocks: [
          { type: "p", text: "Entre 1793 y 1794, durante el Terror, la Revolución intentó borrar el cristianismo. Se cerraron las iglesias, se fundieron campanas, se cambió el calendario para eliminar los domingos y las fiestas de los santos, y la catedral de Notre-Dame de París se convirtió en «templo de la Razón». Robespierre inventó incluso una religión cívica, el culto al Ser Supremo." },
          { type: "image", id: "serSupremo" },
          { type: "p", text: "Cientos de sacerdotes fueron asesinados en las matanzas de septiembre de 1792, miles fueron deportados y muchos guillotinados. El 17 de julio de 1794, dieciséis monjas carmelitas de Compiègne subieron a la guillotina en París cantando himnos. Diez días después caía Robespierre. El papa Francisco las declaró santas en 2024." },
        ],
      },
      {
        stop: "napoleon",
        heading: "Napoleón y el papa",
        blocks: [
          { type: "p", text: "En 1798, las tropas francesas ocuparon Roma y se llevaron prisionero al papa Pío VI, que murió al año siguiente, con 81 años, en la ciudad francesa de Valence. Muchos pensaron que sería el último papa." },
          { type: "p", text: "No lo fue. Napoleón, que sabía que la religión era importante para los franceses, firmó en 1801 un concordato con el nuevo papa, Pío VII: el catolicismo volvía a ser libre, pero la Iglesia renunciaba a sus bienes confiscados. En 1804, Pío VII asistió a la coronación de Napoleón en Notre-Dame, aunque el emperador se puso la corona él mismo." },
          { type: "image", id: "napoleon" },
          { type: "p", text: "Poco después, Napoleón invadió los Estados Pontificios, y Pío VII lo excomulgó. El emperador lo tuvo prisionero cinco años. Tras la caída de Napoleón, en 1814, el papa volvió a Roma entre aclamaciones." },
        ],
      },
      {
        stop: "espana",
        heading: "La onda llega a España",
        blocks: [
          { type: "p", text: "En España, la invasión napoleónica de 1808 provocó una guerra en la que muchos sacerdotes y frailes animaron a la población a resistir. Al mismo tiempo, las Cortes de Cádiz aprobaron en 1812 la primera Constitución española, liberal, aunque declaraba el catolicismo religión única del Estado." },
          { type: "p", text: "Durante todo el siglo XIX, España vivió un choque entre liberales y absolutistas en el que la religión estuvo siempre presente. En 1835 hubo quemas de conventos y asesinatos de frailes, y en 1836 el gobierno de Mendizábal expropió y vendió los bienes de los monasterios, la llamada «desamortización». Muchos edificios y obras de arte se perdieron o acabaron en manos privadas." },
        ],
      },
    ],
    quiz: [
      question("s8e1-constitucion", "¿Qué fue la «constitución civil del clero» (1790)?", ["Un acuerdo con el papa", "Una ley que obligaba al clero a jurar fidelidad a la Constitución y elegía a los obispos por votación", "La lista de los nuevos santos", "Un catecismo"], 1, "El papa la condenó y la Iglesia de Francia se dividió."),
      question("s8e1-compiegne", "¿Quiénes fueron las mártires de Compiègne?", ["Reinas de Francia", "Dieciséis monjas carmelitas guillotinadas en 1794", "Las primeras sufragistas", "Unas monjas españolas"], 1, "Fueron declaradas santas en 2024."),
      question("s8e1-coronacion", "¿Quién puso la corona a Napoleón en 1804?", ["El papa Pío VII", "Él mismo", "Josefina", "El arzobispo de París"], 1, "El papa estaba presente en la ceremonia."),
    ],
    sources: [
      { text: "Constitución civil del clero (1790); Concordato de 1801" },
      { text: "Timothy Tackett, Religion, Revolution, and Regional Culture in Eighteenth-Century France, Princeton University Press, 1986" },
      { text: "William J. Callahan, Iglesia, poder y sociedad en España, 1750-1874, Nerea, 1989" },
    ],
    next: "En el próximo episodio: una pastora en Lourdes, un cardenal inglés y un papa que pierde Roma. El cristianismo en el siglo XIX.",
  },
});
