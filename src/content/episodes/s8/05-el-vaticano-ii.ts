import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "jerusalen", "econe");

export const elVaticanoII = makeEpisode({
  slug: "el-vaticano-ii",
  title: "El Concilio Vaticano II",
  period: "1959 – 1988",
  cover: "Second Vatican Council by Lothar Wolleh 005.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "anuncio", year: "1959", place: "roma" },
    { id: "concilio", year: "1962 – 1965", place: "roma" },
    { id: "documentos", year: "1963 – 1965", place: "roma" },
    { id: "jerusalen", year: "1964", place: "jerusalen" },
    { id: "despues", year: "1965 – 1988", place: "econe" },
  ],
  library: { ...library, places },
  version: {
    title: "El Concilio Vaticano II",
    inAMinute: [
      "En 1959, el papa Juan XXIII, de 77 años, anunció por sorpresa un concilio para renovar la Iglesia.",
      "Entre 1962 y 1965 se reunieron en Roma unos 2.500 obispos de todo el mundo.",
      "La misa pasó a celebrarse en la lengua de cada país, y se animó a todos a leer la Biblia.",
      "El concilio defendió la libertad religiosa, el diálogo con otras religiones y rechazó culpar a los judíos de la muerte de Jesús.",
      "Su aplicación provocó entusiasmo y también tensiones que todavía duran.",
    ],
    intro:
      "Cuando Juan XXIII fue elegido papa, en 1958, casi todos pensaron que sería un papa de transición: tenía 76 años. Tres meses después dejó a todos boquiabiertos: iba a convocar un concilio ecuménico, el primero en casi un siglo. Fue el acontecimiento más importante de la Iglesia católica en el siglo XX.",
    sections: [
      {
        stop: "anuncio",
        heading: "Abrir las ventanas",
        blocks: [
          { type: "character", id: "juanXXIII" },
          { type: "p", text: "El 25 de enero de 1959, en la basílica de San Pablo Extramuros, Juan XXIII anunció el concilio ante un grupo de cardenales, que reaccionaron con un silencio de asombro. Según una anécdota muy repetida, cuando le preguntaron para qué servía, abrió una ventana y dijo: «Para que entre aire fresco en la Iglesia»." },
          { type: "p", text: "Usaba una palabra italiana para explicarlo: aggiornamento, «puesta al día». No se trataba de cambiar la fe, sino la manera de vivirla y de explicarla en un mundo que había cambiado muchísimo." },
        ],
      },
      {
        stop: "concilio",
        heading: "Dos mil quinientos obispos",
        blocks: [
          { type: "p", text: "El concilio se inauguró el 11 de octubre de 1962. En la nave de San Pedro se instalaron gradas para unos 2.500 obispos de todo el mundo, muchos de ellos de África, Asia y América Latina, que por primera vez tenían un peso importante. Había también observadores protestantes y ortodoxos." },
          { type: "image", id: "concilio" },
          { type: "p", text: "Juan XXIII murió en 1963, tras la primera de las cuatro sesiones. Su sucesor, Pablo VI, continuó el concilio y lo clausuró el 8 de diciembre de 1965. Entre los participantes había un joven obispo polaco, Karol Wojtyła, y un joven teólogo alemán, Joseph Ratzinger: dos futuros papas." },
        ],
      },
      {
        stop: "documentos",
        heading: "Lo que cambió",
        blocks: [
          { type: "p", text: "El concilio aprobó dieciséis documentos. Algunos cambios fueron muy visibles:" },
          {
            type: "words",
            items: [
              { term: "La liturgia", meaning: "La misa pasó del latín a la lengua de cada país, y el sacerdote empezó a celebrarla de cara al pueblo. Se buscaba que los fieles participaran, no que solo asistieran." },
              { term: "La Biblia", meaning: "Se animó a todos los católicos a leer la Biblia, algo que durante siglos había sido poco habitual." },
              { term: "La Iglesia", meaning: "La Iglesia es todo el «pueblo de Dios», no solo el clero. Se reforzó el papel de los laicos y de los obispos." },
              { term: "El mundo", meaning: "«Los gozos y las esperanzas, las tristezas y las angustias de los hombres de nuestro tiempo» son también los de los cristianos, dice el documento sobre la Iglesia en el mundo actual." },
              { term: "La libertad religiosa", meaning: "Nadie puede ser obligado a creer ni impedido de practicar su religión. Era un giro respecto al siglo XIX." },
              { term: "Las otras religiones", meaning: "La Iglesia reconoce lo que hay de verdadero en otras religiones y rechaza culpar a los judíos de la muerte de Jesús." },
            ],
          },
        ],
      },
      {
        stop: "jerusalen",
        heading: "Un papa peregrino",
        blocks: [
          { type: "p", text: "En enero de 1964, durante el concilio, Pablo VI hizo algo que ningún papa había hecho en siglos: viajar en avión fuera de Italia. Fue a Tierra Santa, y en Jerusalén se abrazó con el patriarca ortodoxo Atenágoras. Era el principio de una nueva época de diálogo entre las Iglesias, que vimos en el episodio del Gran Cisma." },
          { type: "p", text: "Desde entonces, los papas viajan por todo el mundo. Juan Pablo II hizo más de cien viajes internacionales." },
        ],
      },
      {
        stop: "despues",
        heading: "Entusiasmo y tensiones",
        blocks: [
          { type: "p", text: "La aplicación del concilio fue apasionada y conflictiva. Para muchos fue una primavera: comunidades vivas, nuevos movimientos, liturgias más cercanas. Pero en los años siguientes, en Europa, muchos sacerdotes y religiosos dejaron su vocación y bajó la práctica religiosa, por causas que se siguen discutiendo." },
          { type: "p", text: "Unos pensaban que el concilio se había quedado corto; otros, que había ido demasiado lejos. El arzobispo francés Marcel Lefebvre rechazó la reforma de la misa y la libertad religiosa, y fundó un seminario en Écône (Suiza). En 1988 ordenó obispos sin permiso del papa y fue excomulgado. Su Fraternidad San Pío X sigue existiendo." },
          { type: "fact", label: "En España", text: "En España, el concilio coincidió con los últimos años del franquismo. Muchos católicos y sacerdotes, inspirados por él, se distanciaron de la dictadura, y la Iglesia, con el cardenal Tarancón, tuvo un papel importante en la Transición a la democracia." },
        ],
      },
    ],
    quiz: [
      question("s8e5-papa", "¿Qué papa convocó el Concilio Vaticano II?", ["Pío XII", "Juan XXIII", "Juan Pablo II", "León XIII"], 1, "Lo anunció en enero de 1959."),
      question("s8e5-misa", "¿Qué cambió en la misa tras el concilio?", ["Se suprimió", "Pasó a celebrarse en la lengua de cada país", "Solo se podía decir en latín", "Se celebraba solo los sábados"], 1, "Para que los fieles participaran."),
      question("s8e5-libertad", "¿Qué afirmó el concilio sobre la libertad religiosa?", ["Que solo los católicos tienen derecho a practicar su fe", "Que nadie puede ser obligado a creer ni impedido de practicar su religión", "Que hay que prohibir otras religiones", "Nada"], 1, "Fue un giro respecto al siglo XIX."),
    ],
    sources: [
      { text: "Concilio Vaticano II, constituciones Sacrosanctum Concilium, Lumen gentium, Dei Verbum y Gaudium et spes; declaraciones Dignitatis humanae y Nostra aetate" },
      { text: "John W. O'Malley, ¿Qué pasó en el Vaticano II?, Sal Terrae, 2012" },
      { text: "Giuseppe Alberigo, Breve historia del concilio Vaticano II, Sígueme, 2005" },
    ],
    next: "En el próximo episodio: el cristianismo que más crece en el mundo. Evangélicos y pentecostales.",
  },
});
