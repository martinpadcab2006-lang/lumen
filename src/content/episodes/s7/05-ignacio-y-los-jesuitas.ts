import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("loyola", "pamplona", "manresa", "paris", "roma");

export const ignacio = makeEpisode({
  slug: "ignacio-y-los-jesuitas",
  title: "Ignacio de Loyola y los jesuitas",
  period: "1491 – 1556",
  cover: "Ignatius-Loyola.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "loyola", year: "1491 – 1517", place: "loyola" },
    { id: "pamplona", year: "1521", place: "pamplona" },
    { id: "manresa", year: "1522 – 1523", place: "manresa" },
    { id: "paris", year: "1528 – 1535", place: "paris" },
    { id: "roma", year: "1540 – 1556", place: "roma" },
  ],
  library: { ...library, places },
  version: {
    title: "Ignacio de Loyola y los jesuitas",
    inAMinute: [
      "Íñigo de Loyola era un noble vasco que soñaba con hazañas militares.",
      "En 1521 una bala de cañón le destrozó la pierna en Pamplona. En la convalecencia decidió cambiar de vida.",
      "En Manresa escribió los «Ejercicios espirituales», un método para tomar decisiones a la luz de Dios.",
      "En París reunió a seis compañeros, entre ellos Francisco Javier. En 1540 el papa aprobó la Compañía de Jesús.",
      "Los jesuitas se extendieron por todo el mundo con colegios y misiones. En 2013, uno de ellos se convirtió en el papa Francisco.",
    ],
    intro:
      "Pocas personas han tenido tanta influencia en la historia moderna de la Iglesia como un soldado cojo de Guipúzcoa. La orden que fundó llegó a tener colegios en todos los continentes, misioneros en China y Paraguay, y enemigos poderosísimos.",
    sections: [
      {
        stop: "loyola",
        heading: "Íñigo, el caballero",
        blocks: [
          { type: "character", id: "ignacio" },
          { type: "p", text: "Íñigo López de Loyola nació en 1491 en la casa-torre de su familia, en Azpeitia (Guipúzcoa), el menor de trece hermanos. De joven sirvió en la corte de un alto funcionario de Castilla. Él mismo cuenta que era vanidoso, aficionado a los juegos, a las mujeres y a las armas, y que soñaba con hacerse famoso." },
        ],
      },
      {
        stop: "pamplona",
        heading: "Una bala en Pamplona",
        blocks: [
          { type: "p", text: "En mayo de 1521, un ejército francés atacó Pamplona. Íñigo convenció a los defensores de resistir, y una bala de cañón le rompió una pierna. Los franceses, admirados, lo llevaron a su casa de Loyola." },
          { type: "p", text: "La pierna se soldó mal, y para que no le quedara un hueso sobresaliente, que le impedía llevar las botas de moda, pidió que se la volvieran a abrir y serrar, sin anestesia. Durante la larga convalecencia pidió novelas de caballerías, pero en la casa solo había una vida de Cristo y un libro de vidas de santos. Los leyó, y empezó a preguntarse: «¿Y si yo hiciera lo que hizo san Francisco?»." },
        ],
      },
      {
        stop: "manresa",
        heading: "La cueva de Manresa",
        blocks: [
          { type: "p", text: "Ya recuperado, fue al monasterio de Montserrat, pasó una noche en vela ante la Virgen y dejó allí su espada y su daga. Después vivió casi un año en Manresa, mendigando, rezando en una cueva y pasando por crisis muy duras." },
          { type: "p", text: "Allí empezó a escribir los «Ejercicios espirituales»: un libro de meditaciones de unas cuatro semanas para que una persona aprenda a conocerse, a «discernir» qué movimientos interiores le llevan a Dios y cuáles no, y a tomar decisiones. Se siguen practicando hoy en todo el mundo." },
        ],
      },
      {
        stop: "paris",
        heading: "Los compañeros de París",
        blocks: [
          { type: "p", text: "Ignacio se dio cuenta de que necesitaba estudiar, y con más de treinta años se sentó en clase con niños para aprender latín. Estudió en Alcalá y Salamanca, donde la Inquisición lo investigó, y finalmente en París." },
          { type: "p", text: "Allí compartió habitación con dos estudiantes: el saboyano Pedro Fabro y el navarro Francisco Javier. Con ellos y otros cuatro compañeros, el 15 de agosto de 1534, en una capilla de Montmartre, hicieron votos de pobreza y castidad y prometieron ir a Jerusalén o ponerse a disposición del papa." },
        ],
      },
      {
        stop: "roma",
        heading: "La Compañía de Jesús",
        blocks: [
          { type: "p", text: "Como no pudieron viajar a Jerusalén, fueron a Roma. En 1540, el papa Pablo III aprobó la nueva orden: la Compañía de Jesús. Ignacio fue elegido su primer superior general y pasó el resto de su vida en Roma, escribiendo miles de cartas para dirigirla. Su lema: «A mayor gloria de Dios»." },
          { type: "p", text: "La gran novedad fueron los colegios. Los jesuitas descubrieron que la educación era la mejor forma de transformar la sociedad, y fundaron centenares de colegios y universidades por todo el mundo. Cuando murió Ignacio, en 1556, la Compañía tenía ya unos mil miembros." },
          { type: "character", id: "javier" },
          { type: "image", id: "javier" },
          { type: "fact", label: "El primer papa jesuita", text: "Hasta 2013 no hubo ningún papa jesuita: los jesuitas prometen no buscar cargos en la Iglesia. Ese año, el argentino Jorge Mario Bergoglio fue elegido papa con el nombre de Francisco." },
        ],
      },
    ],
    quiz: [
      question("s7e5-pamplona", "¿Qué le pasó a Ignacio de Loyola en Pamplona en 1521?", ["Fue nombrado obispo", "Una bala de cañón le rompió una pierna", "Conoció a Lutero", "Fundó un colegio"], 1, "En la convalecencia decidió cambiar de vida."),
      question("s7e5-ejercicios", "¿Qué son los «Ejercicios espirituales»?", ["Una tabla de gimnasia", "Un método de meditación para conocerse y tomar decisiones", "Las reglas de un colegio", "Un catecismo"], 1, "Ignacio empezó a escribirlos en Manresa."),
      question("s7e5-francisco", "¿Quién fue el primer papa jesuita?", ["León XIII", "Francisco, elegido en 2013", "Juan Pablo II", "Pablo III"], 1, "Jorge Mario Bergoglio, argentino."),
    ],
    sources: [
      { text: "Ignacio de Loyola, Autobiografía y Ejercicios espirituales" },
      { text: "Ricardo García-Villoslada, San Ignacio de Loyola. Nueva biografía, BAC, 1986" },
      { text: "John W. O'Malley, Los primeros jesuitas, Mensajero/Sal Terrae, 1995" },
    ],
    next: "En el próximo episodio: una monja que funda conventos por toda Castilla y un fraile que escribe poemas en una cárcel. La mística española.",
  },
});
