import { makeEpisode } from "../make";
import { library, mediterranean } from "./library";

const places = { jerusalen: mediterranean.jerusalen, babilonia: mediterranean.babilonia, alejandria: mediterranean.alejandria };

export const laEsperanzaDeIsrael = makeEpisode({
  slug: "la-esperanza-de-israel",
  title: "La esperanza de Israel",
  period: "c. 1000 a. C. – siglo I",
  cover: "Michelangelo, profeti, Isaiah 01.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "david", year: "c. 1000 a. C.", place: "jerusalen" },
    { id: "profetas", year: "Siglos VIII – VI a. C.", place: "jerusalen" },
    { id: "babilonia", year: "587 – 538 a. C.", place: "babilonia" },
    { id: "imperios", year: "332 – 63 a. C.", place: "alejandria" },
    { id: "mesias", year: "Siglo I a. C.", place: "jerusalen" },
    { id: "lectura", year: "Siglo I", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "La esperanza de Israel",
    inAMinute: [
      "El pueblo judío guardaba la memoria de un gran rey, David, y de una promesa: su familia reinaría para siempre.",
      "Los profetas denunciaron las injusticias y anunciaron que Dios no abandonaría a su pueblo.",
      "En el 587 a. C., Babilonia destruyó Jerusalén y su Templo: fue la gran catástrofe del pueblo judío.",
      "Durante siglos vivieron bajo imperios extranjeros: persas, griegos y romanos.",
      "De esa historia nació la esperanza en un Mesías, un enviado de Dios que lo arreglaría todo.",
    ],
    intro:
      "Cuando Jesús empezó a predicar, mucha gente se preguntó: ¿será este el Mesías? Para entender esa pregunta hay que conocer mil años de historia: un rey cantor, unos profetas incómodos, un exilio lejos de casa y una espera que nunca se apagó.",
    sections: [
      {
        stop: "david",
        heading: "Un rey y una promesa",
        blocks: [
          { type: "p", text: "La Biblia cuenta la historia de Israel desde Abraham, el antepasado que dejó su tierra por una promesa de Dios, y desde Moisés, que sacó al pueblo de la esclavitud en Egipto. Los historiadores discuten cuánto hay de historia y cuánto de relato en esas narraciones tan antiguas." },
          { type: "p", text: "Hacia el año 1000 a. C., según la Biblia, un pastor de Belén llamado David se convirtió en rey, conquistó Jerusalén y la hizo su capital. Su hijo Salomón construyó allí el primer Templo. Fue la época dorada que el pueblo recordaría siempre." },
          { type: "p", text: "En el libro de Samuel, el profeta Natán transmite a David una promesa de Dios: su familia reinará para siempre. Esa frase sostuvo la esperanza judía durante siglos, incluso cuando ya no había reyes." },
          { type: "illustration", id: "pastor" },
          { type: "fact", label: "La arqueología", text: "En 1993 apareció en Tel Dan, al norte de Israel, una piedra del siglo IX a. C. que menciona la «casa de David». Es la referencia más antigua a David fuera de la Biblia." },
        ],
      },
      {
        stop: "profetas",
        heading: "Los profetas, la voz incómoda",
        blocks: [
          { type: "p", text: "Un profeta no era un adivino. Era alguien que hablaba en nombre de Dios para sacudir a su pueblo. Los profetas de Israel criticaban a los reyes, denunciaban que los ricos se aprovecharan de los pobres y avisaban de que, si no cambiaban, vendría el desastre." },
          { type: "character", id: "isaias" },
          { type: "p", text: "Pero también anunciaban esperanza. Isaías habla de un niño que nacerá y traerá la paz, de un rey justo de la familia de David, y de un tiempo en que «el lobo habitará con el cordero». Miqueas dice que de Belén, el pueblo de David, saldrá un gobernante." },
          { type: "image", id: "isaias" },
          { type: "quote", text: "Forjarán de sus espadas arados y de sus lanzas podaderas. No alzará la espada pueblo contra pueblo.", source: "Isaías 2, 4" },
        ],
      },
      {
        stop: "babilonia",
        heading: "La gran catástrofe: Babilonia",
        blocks: [
          { type: "p", text: "En el año 587 a. C., el rey Nabucodonosor de Babilonia conquistó Jerusalén, destruyó el Templo de Salomón y deportó a buena parte de la población a Babilonia, en el actual Irak. Se acabaron los reyes de la familia de David." },
          { type: "image", id: "jeremias" },
          { type: "p", text: "Fue un trauma enorme. ¿Cómo podía Dios permitirlo? En el exilio, lejos del Templo, el pueblo se aferró a sus Escrituras, al sábado y a su identidad. Muchos libros de la Biblia se escribieron o se reunieron entonces." },
          { type: "p", text: "En el 538 a. C., el rey persa Ciro, que había conquistado Babilonia, permitió volver a los judíos. Reconstruyeron el Templo, más modesto: es el que, siglos después, ampliaría Herodes." },
          { type: "quote", text: "Junto a los canales de Babilonia nos sentamos a llorar con nostalgia de Sion.", source: "Salmo 137" },
        ],
      },
      {
        stop: "imperios",
        heading: "Siglos bajo imperios extranjeros",
        blocks: [
          { type: "p", text: "Después de los persas llegó Alejandro Magno (332 a. C.), y tras él los reyes griegos de Egipto y de Siria. Muchos judíos vivían ya fuera de su tierra, en Alejandría, en Antioquía o en Babilonia. En Alejandría tradujeron sus Escrituras al griego: es la traducción llamada de los Setenta, la Biblia que usarían después los primeros cristianos." },
          { type: "p", text: "En el 167 a. C., el rey griego Antíoco IV prohibió las prácticas judías y profanó el Templo. Una familia, los Macabeos, encabezó una revuelta, recuperó el Templo y lo volvió a consagrar: eso es lo que los judíos celebran aún hoy en la fiesta de Janucá." },
          { type: "p", text: "Los Macabeos fundaron un reino judío independiente que duró unos ochenta años, hasta que en el 63 a. C. llegó Pompeyo con sus legiones. Otra vez bajo un imperio extranjero." },
        ],
      },
      {
        stop: "mesias",
        heading: "¿Qué era el Mesías?",
        blocks: [
          { type: "p", text: "«Mesías» significa «ungido». En el antiguo Israel se ungía con aceite a los reyes y a los sacerdotes. Con el tiempo, la palabra pasó a designar a un enviado de Dios que vendría al final de los tiempos para liberar al pueblo y traer justicia." },
          { type: "p", text: "No había una sola idea del Mesías. Unos esperaban un rey guerrero de la familia de David que expulsara a los romanos. Otros, un sacerdote santo, o un profeta como Moisés. El libro de Daniel habla de un misterioso «Hijo del hombre» que viene sobre las nubes. En Qumrán esperaban a dos mesías a la vez." },
          { type: "image", id: "rollo" },
          { type: "p", text: "En tiempos de Jesús, varios hombres se presentaron como libertadores y arrastraron multitudes, y Roma los aplastó a todos. Por eso, cuando alguien hablaba de un Mesías, los romanos lo oían como una amenaza política." },
        ],
      },
      {
        stop: "lectura",
        heading: "Dos maneras de leer las mismas páginas",
        blocks: [
          { type: "p", text: "Los primeros cristianos, que eran judíos, releyeron las Escrituras convencidos de que Jesús era el Mesías esperado. Vieron en él al niño de Isaías, al gobernante que sale de Belén y, sobre todo, al «siervo» que Isaías describe sufriendo por los demás." },
          { type: "p", text: "La mayoría de los judíos no lo vio así: el Mesías debía traer la paz al mundo y liberar a Israel, y eso no había ocurrido. Las dos lecturas conviven hasta hoy. Para un historiador no se trata de decidir quién tiene razón, sino de entender que los cristianos leyeron a Jesús con palabras judías." },
          { type: "fact", label: "Por eso en Navidad se lee Isaías", text: "Muchos textos que se leen en las iglesias en Adviento y Navidad son profecías de Isaías. Y el «Mesías» de Händel, una de las obras musicales más famosas, está hecho casi entero con frases de los profetas." },
        ],
      },
    ],
    relatedPills: ["que-significa-cristo", "73-o-66-libros"],
    quiz: [
      { id: "s1e5-mesias", prompt: "¿Qué significa «Mesías»?", options: [{ id: "a", text: "Rey" }, { id: "b", text: "Ungido" }, { id: "c", text: "Profeta" }, { id: "d", text: "Salvador" }], correctId: "b", explanation: "Se ungía con aceite a reyes y sacerdotes. En griego se dice Christós." },
      { id: "s1e5-babilonia", prompt: "¿Qué ocurrió en el año 587 a. C.?", options: [{ id: "a", text: "Herodes amplió el Templo" }, { id: "b", text: "Babilonia destruyó Jerusalén y el Templo" }, { id: "c", text: "Llegaron los romanos" }, { id: "d", text: "Nació el rey David" }], correctId: "b", explanation: "Fue el comienzo del exilio en Babilonia." },
      { id: "s1e5-januca", prompt: "¿Qué celebra la fiesta judía de Janucá?", options: [{ id: "a", text: "La salida de Egipto" }, { id: "b", text: "La nueva consagración del Templo por los Macabeos" }, { id: "c", text: "El nacimiento de David" }, { id: "d", text: "La cosecha" }], correctId: "b", explanation: "Tras la revuelta contra Antíoco IV, en el siglo II a. C." },
    ],
    sources: [
      { text: "2 Samuel 7; Isaías 2, 7, 9, 11 y 53; Miqueas 5; Daniel 7; Salmo 137" },
      { text: "Gonzalo Aranda Pérez, Florentino García Martínez y Miguel Pérez Fernández, Literatura judía intertestamentaria, Verbo Divino, 1996" },
    ],
    next: "En el próximo episodio: la gran pregunta. ¿Qué sabemos de verdad sobre Jesús? Evangelios, historiadores romanos y judíos, y cómo trabajan los investigadores.",
  },
});
