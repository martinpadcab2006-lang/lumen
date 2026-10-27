import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("jerusalen", "alejandria", "qumran", "roma", "belen", "alcala");

export const laBiblia = makeEpisode({
  slug: "la-biblia",
  title: "La Biblia: origen y transmisión",
  period: "Siglo X a. C. – hoy",
  cover: "Great Isaiah Scroll.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "biblioteca", year: "Siglos X a. C. – I d. C.", place: "jerusalen" },
    { id: "septuaginta", year: "Siglos III – II a. C.", place: "alejandria" },
    { id: "qumran", year: "1947", place: "qumran" },
    { id: "codices", year: "Siglos II – IV", place: "roma" },
    { id: "vulgata", year: "382 – 405", place: "belen" },
    { id: "imprenta", year: "1455 – hoy", place: "alcala" },
  ],
  library: { ...library, places },
  version: {
    title: "La Biblia: origen y transmisión",
    inAMinute: [
      "La Biblia no es un libro: es una biblioteca de 73 libros (66 en las Biblias protestantes).",
      "Se escribió durante más de mil años, en hebreo, arameo y griego.",
      "Durante siglos se copió a mano. Los manuscritos del mar Muerto demostraron que esas copias eran muy fieles.",
      "Jerónimo la tradujo al latín en Belén: su versión, la Vulgata, se usó en Occidente durante mil años.",
      "Hoy es el libro más traducido de la historia: la Biblia completa existe en más de 700 idiomas.",
    ],
    intro:
      "Empezamos una temporada distinta. Hasta ahora hemos contado qué pasó; ahora vamos a ver qué creen los cristianos y de dónde salen esas creencias. Y lo primero es un libro. O, mejor dicho, muchos libros.",
    sections: [
      {
        stop: "biblioteca",
        heading: "Una biblioteca, no un libro",
        blocks: [
          { type: "p", text: "La palabra «Biblia» viene del griego ta biblia, que significa «los libros», en plural. Y eso es lo que es: una colección de libros muy distintos entre sí. Hay historia, leyes, poemas de amor, canciones, proverbios, profecías, cartas y visiones del fin del mundo." },
          { type: "p", text: "La escribieron decenas de autores, la mayoría anónimos, a lo largo de más de mil años. Muchas historias se contaron de palabra durante generaciones antes de ponerse por escrito. Casi todo el Antiguo Testamento está en hebreo, con algunos trozos en arameo; el Nuevo, en griego." },
          {
            type: "numbers",
            title: "La Biblia en cifras",
            items: [
              { value: "73", label: "libros en la Biblia católica (66 en la protestante)" },
              { value: "3", label: "lenguas originales: hebreo, arameo y griego" },
              { value: "+1.000", label: "años entre los textos más antiguos y los más recientes" },
            ],
          },
        ],
      },
      {
        stop: "septuaginta",
        heading: "La primera traducción",
        blocks: [
          { type: "p", text: "En el siglo III antes de Cristo, en Alejandría vivían miles de judíos que ya no hablaban hebreo, sino griego. Para ellos se tradujeron las Escrituras al griego. Esa traducción se llama la Septuaginta, «los Setenta»." },
          { type: "fact", label: "La leyenda de los setenta y dos", text: "Un texto antiguo, la Carta de Aristeas, cuenta que el rey Ptolomeo II de Egipto quiso tener la Ley judía en su gran biblioteca y mandó traer a 72 sabios de Jerusalén, que la tradujeron en 72 días. Es una leyenda, pero le dio el nombre." },
          { type: "p", text: "La Septuaginta es muy importante para los cristianos: es la Biblia que leían los primeros cristianos, que hablaban griego, y la que citan casi siempre los autores del Nuevo Testamento." },
        ],
      },
      {
        stop: "qumran",
        heading: "El tesoro de las cuevas",
        blocks: [
          { type: "p", text: "Durante siglos, nadie podía comprobar si los textos de la Biblia habían cambiado mucho al copiarse a mano. Los manuscritos hebreos completos más antiguos eran de hacia el año 1000 después de Cristo." },
          { type: "p", text: "En 1947, un pastor beduino que buscaba una cabra perdida tiró una piedra dentro de una cueva junto al mar Muerto y oyó romperse una vasija. Dentro había rollos antiguos. En los años siguientes aparecieron en once cuevas los restos de unos novecientos manuscritos, con fragmentos de casi todos los libros del Antiguo Testamento." },
          { type: "image", id: "rolloIsaias" },
          { type: "p", text: "El gran rollo de Isaías era unos mil años más antiguo que cualquier copia conocida. Y al compararlo, la sorpresa fue lo poco que había cambiado: más allá de detalles de ortografía y pequeñas variantes, era el mismo texto." },
        ],
      },
      {
        stop: "codices",
        heading: "Del rollo al libro",
        blocks: [
          { type: "p", text: "Los judíos escribían sus libros sagrados en rollos. Los cristianos, en cambio, adoptaron muy pronto el códice: hojas dobladas y cosidas, como un libro actual. Era más barato, cabía más texto y era más fácil buscar un pasaje. Los cristianos ayudaron a ponerlo de moda." },
          { type: "image", id: "sinaitico" },
          { type: "p", text: "Del Nuevo Testamento se conservan más de 5.800 manuscritos en griego, desde pequeños fragmentos de papiro del siglo II hasta Biblias completas. Las más famosas son del siglo IV: el Códice Vaticano, guardado en la Biblioteca Vaticana, y el Códice Sinaítico, encontrado en el monasterio de Santa Catalina del Sinaí." },
          { type: "fact", label: "Ninguna obra antigua tiene tantas copias", text: "De la mayoría de los autores griegos y latinos se conservan unas pocas copias, a veces de mil años después. Del Nuevo Testamento hay miles, algunas muy cercanas al original. Hay muchas pequeñas diferencias entre ellas, y los especialistas las estudian una a una." },
        ],
      },
      {
        stop: "vulgata",
        heading: "Jerónimo y la Vulgata",
        blocks: [
          { type: "p", text: "En Occidente, la gente ya no hablaba griego sino latín, y circulaban traducciones latinas de calidad muy desigual. En el año 382, el papa Dámaso encargó a su secretario, Jerónimo, que pusiera orden." },
          { type: "character", id: "jeronimo" },
          { type: "image", id: "jeronimo" },
          { type: "p", text: "Jerónimo se instaló en Belén, aprendió hebreo con maestros judíos y tradujo el Antiguo Testamento directamente del original, no del griego. Tardó más de veinte años. Su traducción se llamó la Vulgata, «la divulgada», y fue la Biblia de Occidente durante más de mil años." },
        ],
      },
      {
        stop: "imprenta",
        heading: "De la imprenta a hoy",
        blocks: [
          { type: "p", text: "Hacia 1455, Johannes Gutenberg imprimió en Maguncia (Alemania) el primer gran libro hecho con tipos móviles en Europa: una Biblia en latín. Copiar una Biblia a mano podía llevar años; ahora se podían hacer cientos." },
          { type: "image", id: "gutenberg" },
          { type: "p", text: "España tuvo un papel destacado. Entre 1514 y 1517, el cardenal Cisneros hizo imprimir en Alcalá de Henares la Biblia Políglota Complutense, con el texto en hebreo, arameo, griego y latín en columnas paralelas. Y en 1569, Casiodoro de Reina, un monje sevillano que se había hecho protestante, publicó en Basilea la primera Biblia completa en castellano traducida de los originales: la Biblia del Oso, por el dibujo de su portada." },
          { type: "p", text: "Hoy la Biblia es el libro más traducido de la historia: existe completa en más de 700 idiomas y, en parte, en más de 3.000." },
        ],
      },
    ],
    relatedPills: ["73-o-66-libros"],
    quiz: [
      question("s5e1-nombre", "¿Qué significa la palabra «Biblia»?", ["«El libro sagrado»", "«Los libros»", "«La palabra de Dios»", "«La ley»"], 1, "Viene del griego ta biblia, en plural. Es una biblioteca."),
      question("s5e1-qumran", "¿Qué demostraron los manuscritos del mar Muerto?", ["Que la Biblia se inventó en la Edad Media", "Que el texto del Antiguo Testamento se había copiado con mucha fidelidad", "Que Jesús vivió en Qumrán", "Que la Biblia se escribió en latín"], 1, "El rollo de Isaías era mil años más antiguo que cualquier copia conocida, y casi idéntico."),
      question("s5e1-vulgata", "¿Quién tradujo la Biblia al latín en la versión llamada Vulgata?", ["San Agustín", "San Jerónimo", "Gutenberg", "El papa Dámaso"], 1, "La hizo en Belén, por encargo del papa Dámaso."),
    ],
    sources: [
      { text: "Julio Trebolle Barrera, La Biblia judía y la Biblia cristiana, Trotta, 1993" },
      { text: "Bruce M. Metzger y Bart D. Ehrman, The Text of the New Testament, Oxford University Press, 4.ª ed., 2005" },
      { text: "Florentino García Martínez, Textos de Qumrán, Trotta, 1992" },
    ],
    next: "En el próximo episodio: qué hay dentro del Antiguo y del Nuevo Testamento, y por qué los cristianos leen los dos.",
  },
});
