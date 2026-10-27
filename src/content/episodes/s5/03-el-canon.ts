import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "lyon", "alejandria", "hipona", "trento");

export const elCanon = makeEpisode({
  slug: "el-canon",
  title: "El canon: qué libros entran",
  period: "Siglos II – XVI",
  cover: "Muratorian Fragment.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "problema", year: "c. 144", place: "roma" },
    { id: "cuatro", year: "c. 180 – 200", place: "lyon" },
    { id: "atanasio", year: "367", place: "alejandria" },
    { id: "concilios", year: "393 – 397", place: "hipona" },
    { id: "reforma", year: "1534 – 1546", place: "trento" },
  ],
  library: { ...library, places },
  version: {
    title: "El canon: qué libros entran",
    inAMinute: [
      "El «canon» es la lista oficial de libros que forman la Biblia.",
      "No lo decidió una sola persona ni una sola reunión: se fue formando poco a poco durante tres siglos.",
      "Hacia el año 200 ya se aceptaban los cuatro evangelios y las cartas de Pablo; otros libros se discutieron más tiempo.",
      "En el año 367, Atanasio de Alejandría hizo la primera lista con los 27 libros actuales del Nuevo Testamento.",
      "Católicos y protestantes no tienen los mismos libros en el Antiguo Testamento: 46 frente a 39.",
    ],
    intro:
      "Hay una idea muy repetida en novelas y documentales: que un emperador o un concilio eligió los libros de la Biblia y quemó los demás. La historia real es más lenta, más discutida y bastante más interesante.",
    sections: [
      {
        stop: "problema",
        heading: "¿Qué libros valen?",
        blocks: [
          { type: "p", text: "«Canon» es una palabra griega que significa «vara de medir», «regla». Aplicada a la Biblia, es la lista de libros que una comunidad reconoce como inspirados por Dios y que sirven de regla de fe." },
          { type: "p", text: "Al principio no hacía falta ninguna lista. Los primeros cristianos leían las Escrituras judías y, en sus reuniones, cartas de los apóstoles y relatos sobre Jesús. Pero en el siglo II empezaron a circular otros textos: evangelios con revelaciones secretas, hechos fantásticos de apóstoles… Y Marción, en Roma, hizo su propia Biblia: solo un evangelio de Lucas recortado y diez cartas de Pablo. Había que aclarar qué libros eran fiables." },
        ],
      },
      {
        stop: "cuatro",
        heading: "Cuatro evangelios",
        blocks: [
          { type: "character", id: "ireneo" },
          { type: "p", text: "Hacia el año 180, Ireneo, obispo de Lyon, escribió que hay cuatro evangelios, ni más ni menos, igual que hay cuatro puntos cardinales y cuatro vientos. Es el testimonio más claro de que los cuatro evangelios ya eran aceptados en todas partes." },
          { type: "image", id: "muratori" },
          { type: "p", text: "De esa época puede ser también el fragmento de Muratori, una lista de libros descubierta en 1740 en Milán. Se suele fechar hacia el año 200, aunque algunos lo creen posterior. Incluye la mayoría de los libros del Nuevo Testamento y rechaza otros." },
          { type: "fact", label: "Los criterios", text: "Para aceptar un libro se miraba sobre todo esto: que viniera de un apóstol o de alguien cercano a ellos; que estuviera de acuerdo con la fe que se había recibido; y que se leyera desde antiguo en las grandes iglesias." },
        ],
      },
      {
        stop: "atanasio",
        heading: "La primera lista completa",
        blocks: [
          { type: "p", text: "Algunos libros tardaron más en ser aceptados en todas partes: la carta a los Hebreos, la de Santiago, la segunda de Pedro, las dos últimas de Juan, la de Judas y el Apocalipsis. Y al revés: algunas iglesias leían libros que al final quedaron fuera, como el Pastor de Hermas o la Carta de Bernabé, que aparecen en el Códice Sinaítico." },
          { type: "character", id: "atanasio" },
          { type: "p", text: "En el año 367, Atanasio, obispo de Alejandría, envió su carta de Pascua a las iglesias de Egipto. En ella da una lista del Nuevo Testamento que coincide exactamente con los 27 libros actuales. Es la primera que conocemos." },
        ],
      },
      {
        stop: "concilios",
        heading: "Los concilios africanos",
        blocks: [
          { type: "p", text: "Pocos años después, unos concilios regionales del norte de África, en Hipona (393) y Cartago (397), en los que participó Agustín, aprobaron la misma lista del Nuevo Testamento y una del Antiguo que corresponde a la que hoy usan los católicos. Roma la confirmó poco después." },
          { type: "p", text: "Es decir: ningún concilio «inventó» la Biblia. Los obispos pusieron por escrito lo que la mayoría de las iglesias ya leía desde hacía generaciones. Y los libros que se quedaron fuera no se escondieron: muchos se siguieron copiando y leyendo, y hoy se pueden consultar." },
        ],
      },
      {
        stop: "reforma",
        heading: "73 o 66",
        blocks: [
          { type: "p", text: "Quedaba una diferencia. Los judíos de lengua hebrea tenían un canon más corto que la Septuaginta griega, que usaban los cristianos. Siete libros del Antiguo Testamento, como Tobías, Judit, los Macabeos o la Sabiduría, solo se conocían en griego." },
          { type: "p", text: "En el siglo XVI, Martín Lutero siguió el canon hebreo: en su Biblia de 1534 puso esos libros aparte, como «apócrifos», útiles para leer pero no al mismo nivel. El Concilio de Trento respondió en 1546 confirmando la lista completa. Por eso hoy la Biblia católica tiene 73 libros y la protestante, 66. Las iglesias ortodoxas tienen incluso algunos más." },
          { type: "words", items: [
            { term: "Deuterocanónicos", meaning: "Los siete libros del Antiguo Testamento que los católicos y ortodoxos aceptan y los protestantes no. Significa «del segundo canon»." },
            { term: "Apócrifos", meaning: "Para los católicos, libros antiguos que nunca entraron en la Biblia, como el Evangelio de Tomás. Los protestantes usan esta palabra para los deuterocanónicos." },
          ] },
        ],
      },
    ],
    relatedPills: ["73-o-66-libros", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s5e3-canon", "¿Qué significa «canon» aplicado a la Biblia?", ["Un tipo de cántico", "La lista oficial de libros que la forman", "Un concilio", "Una traducción"], 1, "Viene del griego «vara de medir», «regla»."),
      question("s5e3-atanasio", "¿Quién hizo la primera lista conocida con los 27 libros del Nuevo Testamento?", ["Constantino", "Atanasio de Alejandría", "Marción", "Lutero"], 1, "En su carta de Pascua del año 367."),
      question("s5e3-diferencia", "¿Por qué la Biblia protestante tiene menos libros que la católica?", ["Porque Lutero quemó algunos", "Porque sigue el canon hebreo del Antiguo Testamento, sin siete libros que solo se conocían en griego", "Porque no tiene evangelios", "Porque quitó el Apocalipsis"], 1, "Son los llamados deuterocanónicos: Tobías, Judit, Macabeos, Sabiduría…"),
    ],
    sources: [
      { text: "Bruce M. Metzger, The Canon of the New Testament, Oxford, 1987" },
      { text: "Ireneo de Lyon, Contra las herejías III, 11, 8; Atanasio, Carta festal 39" },
      { text: "Concilio de Trento, sesión IV, decreto sobre las Escrituras (1546)" },
    ],
    next: "En el próximo episodio: los Padres de la Iglesia. Obispos, monjes y sabios que pensaron la fe cristiana en sus primeros siglos.",
  },
});
