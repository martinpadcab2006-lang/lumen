import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "alejandria", "cartago", "antioquia");

export const laVidaCotidiana = makeEpisode({
  slug: "la-vida-cotidiana",
  title: "La vida cotidiana de los cristianos",
  period: "Siglos II – III",
  cover: "Dura Europos baptistry overview.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "vecinos", year: "Siglo II", place: "alejandria" },
    { id: "trabajo", year: "Siglos II – III", place: "cartago" },
    { id: "vida", year: "Siglos II – III", place: "roma" },
    { id: "epidemia", year: "c. 250 – 260", place: "cartago" },
    { id: "cuantos", year: "c. 300", place: "antioquia" },
  ],
  library: { ...library, places },
  version: {
    title: "La vida cotidiana de los cristianos",
    inAMinute: [
      "La mayor parte del tiempo no había persecución: los cristianos vivían como sus vecinos, con algunas diferencias.",
      "Evitaban ciertos oficios y espectáculos, como los combates de gladiadores.",
      "Rechazaban abandonar a los recién nacidos y el aborto, prácticas muy extendidas.",
      "En las epidemias cuidaban a los enfermos, también a los paganos.",
      "Hacia el año 300 podían ser ya unos seis millones, en torno al 10 % del Imperio.",
    ],
    intro:
      "Las persecuciones ocupan mucho espacio en los libros, pero fueron intermitentes. La mayoría de los cristianos de los siglos II y III pasaron su vida sin ver un león de cerca. ¿Cómo vivían? ¿En qué se diferenciaban de sus vecinos?",
    sections: [
      {
        stop: "vecinos",
        heading: "Como todos, pero distintos",
        blocks: [
          { type: "p", text: "Un texto anónimo del siglo II, la Carta a Diogneto, lo explica muy bien. Los cristianos no se distinguen de los demás por su país, su lengua o su ropa. Viven en ciudades griegas o bárbaras, siguen las costumbres locales en la comida y la vida diaria. Pero tienen algo distinto." },
          { type: "quote", text: "Habitan su propia patria, pero como forasteros. Toda tierra extraña es para ellos patria, y toda patria, tierra extraña. Se casan como todos y tienen hijos, pero no abandonan a los recién nacidos.", source: "Carta a Diogneto 5" },
        ],
      },
      {
        stop: "trabajo",
        heading: "Oficios y espectáculos",
        blocks: [
          { type: "p", text: "Había trabajos que un cristiano no podía hacer: sacerdote de un templo, fabricante de estatuas de dioses, astrólogo, gladiador, actor de espectáculos inmorales. ¿Y soldado? Fue un tema muy discutido: algunos autores lo rechazaban porque obligaba a matar y a jurar por los dioses, pero muchos cristianos servían en el ejército." },
          { type: "p", text: "Tampoco iban a los combates de gladiadores, donde la gente moría para diversión del público, ni a muchas fiestas públicas, que incluían sacrificios. Eso les hacía parecer antisociales." },
        ],
      },
      {
        stop: "vida",
        heading: "Defender la vida",
        blocks: [
          { type: "p", text: "En el mundo romano era legal y frecuente abandonar a los recién nacidos no deseados, sobre todo niñas o niños con alguna discapacidad: se los dejaba en un vertedero o en un cruce de caminos. Muchos morían; otros acababan como esclavos. El aborto también era habitual." },
          { type: "p", text: "Los cristianos lo prohibían de forma tajante, como ya hacían los judíos. La Didaché lo dice claramente: «No matarás al niño en el seno de su madre ni lo matarás una vez nacido». Algunas comunidades recogían a los niños abandonados." },
          { type: "fact", label: "Ayudar en la comunidad", text: "Cada comunidad mantenía a sus viudas, huérfanos, enfermos y presos con una caja común. A mediados del siglo III, la Iglesia de Roma atendía a más de 1.500 viudas y necesitados, según una carta del papa Cornelio." },
        ],
      },
      {
        stop: "epidemia",
        heading: "Cuando llegó la peste",
        blocks: [
          { type: "p", text: "Hacia el año 250 una terrible epidemia, conocida como la peste de Cipriano, recorrió el Imperio. Mucha gente huía de las ciudades y abandonaba a los enfermos, incluso a los de su familia." },
          { type: "p", text: "Varios obispos de la época, como Dionisio de Alejandría y Cipriano de Cartago, cuentan que los cristianos se quedaban a cuidar a los enfermos, también a los paganos, y a enterrar a los muertos. Muchos murieron contagiados. El sociólogo Rodney Stark sostiene que esto ayudó al crecimiento del cristianismo: sobrevivían más enfermos y la gente valoraba su ejemplo." },
        ],
      },
      {
        stop: "cuantos",
        heading: "¿Cuántos eran?",
        blocks: [
          { type: "p", text: "No hay censos, así que todo son estimaciones. Una de las más citadas, la de Rodney Stark, calcula que los cristianos crecieron alrededor de un 40 % cada década: de unos pocos miles hacia el año 40 a unos seis millones hacia el año 300, cerca del 10 % de la población del Imperio." },
          {
            type: "numbers",
            title: "Una estimación (Rodney Stark)",
            items: [
              { value: "c. 1.000", label: "cristianos hacia el año 40" },
              { value: "c. 200.000", label: "hacia el año 200" },
              { value: "c. 6 millones", label: "hacia el año 300" },
            ],
          },
          { type: "p", text: "Eran sobre todo urbanos, y más numerosos en Oriente, en Egipto y en el norte de África que en Occidente. Cuando Constantino llegó al poder, el cristianismo era ya una minoría grande, organizada y presente en todas las ciudades." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo"],
    quiz: [
      question("s4e5-diogneto", "¿Qué dice la Carta a Diogneto de los cristianos?", ["Que viven separados de todos", "Que viven como los demás, pero como forasteros en su propia patria", "Que no se casan", "Que no trabajan"], 1, "Un texto anónimo del siglo II."),
      question("s4e5-gladiadores", "¿Por qué no iban los cristianos a los combates de gladiadores?", ["Porque eran caros", "Porque la gente moría para diversión del público", "Porque estaban prohibidos para todos", "Porque eran de noche"], 1, "Y además muchas fiestas públicas incluían sacrificios a los dioses."),
      question("s4e5-cuantos", "Según Rodney Stark, ¿cuántos cristianos había hacia el año 300?", ["Unos mil", "Unos seis millones", "La mitad del Imperio", "Cien millones"], 1, "Cerca del 10 % de la población del Imperio."),
    ],
    sources: [
      { text: "Carta a Diogneto 5; Didaché 2; Eusebio, Historia eclesiástica VI, 43 (carta de Cornelio) y VII, 22 (Dionisio de Alejandría)" },
      { text: "Rodney Stark, La expansión del cristianismo, Trotta, 2009" },
    ],
    next: "En el próximo episodio: un emperador ve una señal en el cielo antes de una batalla. Constantino y el Edicto de Milán lo cambian todo.",
  },
});
