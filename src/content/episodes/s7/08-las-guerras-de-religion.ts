import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("paris", "nantes", "praga", "magdeburgo", "munster");

export const lasGuerras = makeEpisode({
  slug: "las-guerras-de-religion",
  title: "Las guerras de religión",
  period: "1562 – 1648",
  cover: "La masacre de San Bartolomé, por François Dubois.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "bartolome", year: "1562 – 1572", place: "paris" },
    { id: "nantes", year: "1589 – 1685", place: "nantes" },
    { id: "praga", year: "1618", place: "praga" },
    { id: "magdeburgo", year: "1618 – 1648", place: "magdeburgo" },
    { id: "westfalia", year: "1648", place: "munster" },
  ],
  library: { ...library, places },
  version: {
    title: "Las guerras de religión",
    inAMinute: [
      "Tras la Reforma, católicos y protestantes se enfrentaron en guerras durante más de un siglo.",
      "En Francia, la matanza de San Bartolomé (1572) acabó con miles de protestantes.",
      "El Edicto de Nantes (1598) permitió a los protestantes franceses vivir su fe, hasta que se revocó en 1685.",
      "La guerra de los Treinta Años (1618-1648) arrasó Alemania. Al final, la política pesó más que la religión.",
      "La Paz de Westfalia (1648) cerró la época de las guerras de religión y abrió el camino a la tolerancia.",
    ],
    intro:
      "Durante siglos, en Europa se dio por hecho que un reino solo podía tener una religión. Cuando la cristiandad occidental se dividió, esa idea llevó a la guerra. Es una de las páginas más tristes de la historia del cristianismo: cristianos matando a cristianos en nombre de Cristo.",
    sections: [
      {
        stop: "bartolome",
        heading: "La noche de San Bartolomé",
        blocks: [
          { type: "p", text: "En Francia, los protestantes calvinistas, llamados hugonotes, eran una minoría importante, con muchos nobles. Desde 1562, católicos y hugonotes se enfrentaron en ocho guerras." },
          { type: "image", id: "sanBartolome" },
          { type: "p", text: "En agosto de 1572, muchos líderes hugonotes estaban en París para la boda de su jefe, Enrique de Navarra, con la hermana del rey. En la madrugada del 24 de agosto, día de San Bartolomé, empezó una matanza que se extendió a otras ciudades: murieron miles de protestantes, quizá diez mil o más en toda Francia." },
          { type: "p", text: "En Roma, el papa Gregorio XIII celebró la noticia con un Te Deum y una medalla conmemorativa, creyendo que se había frustrado un complot. Hoy es un episodio que avergüenza a los católicos." },
        ],
      },
      {
        stop: "nantes",
        heading: "«París bien vale una misa»",
        blocks: [
          { type: "p", text: "El superviviente Enrique de Navarra, protestante, acabó heredando el trono de Francia en 1589. Pero París, católica, no lo aceptaba. Enrique se hizo católico en 1593. Se le atribuye la frase «París bien vale una misa», aunque probablemente nunca la dijo." },
          { type: "p", text: "En 1598 firmó el Edicto de Nantes, que permitía a los hugonotes practicar su religión en muchos lugares. Fue uno de los primeros ensayos de tolerancia religiosa en Europa. Pero en 1685, su nieto Luis XIV lo revocó, y unos doscientos mil protestantes huyeron de Francia." },
        ],
      },
      {
        stop: "praga",
        heading: "Por la ventana",
        blocks: [
          { type: "p", text: "En el Sacro Imperio, la Paz de Augsburgo había dado una tregua. Pero en 1618, en Praga, los nobles protestantes de Bohemia, enfadados con el emperador católico, arrojaron por una ventana del castillo a dos de sus representantes y a un secretario. Los tres sobrevivieron a una caída de más de quince metros." },
          { type: "p", text: "Los católicos dijeron que los habían salvado los ángeles; los protestantes, que habían caído sobre un montón de basura. Fuera como fuera, aquella «defenestración de Praga» encendió la guerra de los Treinta Años." },
        ],
      },
      {
        stop: "magdeburgo",
        heading: "Treinta años de guerra",
        blocks: [
          { type: "p", text: "La guerra se extendió por toda Alemania y entraron en ella Dinamarca, Suecia, España y Francia. Los ejércitos de mercenarios vivían del saqueo. En 1631, la ciudad protestante de Magdeburgo fue tomada por las tropas imperiales: murieron unas veinte mil personas y la ciudad ardió." },
          { type: "p", text: "Con el tiempo, quedó claro que la religión no era lo único en juego. La católica Francia, gobernada por el cardenal Richelieu, se alió con la Suecia protestante contra los Habsburgo católicos de España y Austria. Las guerras, las epidemias y el hambre mataron a una parte enorme de la población alemana: en algunas regiones, a uno de cada tres habitantes." },
        ],
      },
      {
        stop: "westfalia",
        heading: "La Paz de Westfalia",
        blocks: [
          { type: "p", text: "En 1648, tras años de negociaciones en las ciudades de Münster y Osnabrück, se firmó la Paz de Westfalia. España reconoció la independencia de los Países Bajos, y en el Imperio se reconoció a calvinistas, luteranos y católicos." },
          { type: "image", id: "westfalia" },
          { type: "p", text: "El papa protestó contra la paz, pero nadie le hizo caso: la religión ya no decidiría la política internacional. Muchos europeos, agotados, empezaron a pensar que había que aprender a convivir con quienes creían distinto. En 1689, el filósofo inglés John Locke escribió su «Carta sobre la tolerancia»." },
        ],
      },
    ],
    quiz: [
      question("s7e8-hugonotes", "¿Quiénes eran los hugonotes?", ["Católicos alemanes", "Protestantes calvinistas franceses", "Monjes ortodoxos", "Soldados suecos"], 1, "Miles murieron en la matanza de San Bartolomé, en 1572."),
      question("s7e8-defenestracion", "¿Qué fue la defenestración de Praga de 1618?", ["Un incendio", "El lanzamiento por una ventana de representantes del emperador", "La coronación de un rey", "Un concilio"], 1, "Encendió la guerra de los Treinta Años."),
      question("s7e8-westfalia", "¿Qué tratado puso fin a la guerra de los Treinta Años en 1648?", ["El Edicto de Nantes", "La Paz de Westfalia", "La Paz de Augsburgo", "El Tratado de Tordesillas"], 1, "Se negoció en Münster y Osnabrück."),
    ],
    sources: [
      { text: "Edicto de Nantes (1598); Tratados de Westfalia (1648); John Locke, Carta sobre la tolerancia (1689)" },
      { text: "Peter H. Wilson, La guerra de los Treinta Años. Una tragedia europea, Desperta Ferro, 2018" },
      { text: "Mack P. Holt, The French Wars of Religion, 1562-1629, Cambridge University Press, 2005" },
    ],
    next: "En el próximo episodio: el juicio más famoso de la historia de la ciencia. Galileo, ciencia y fe.",
  },
});
