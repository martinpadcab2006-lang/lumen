import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "cartago", "alejandria", "nicea", "zaragoza", "treveris");

export const persecuciones = makeEpisode({
  slug: "persecuciones-siglos-ii-y-iii",
  title: "Las persecuciones de los siglos II y III",
  period: "249 – 311",
  cover: "Libellus-Mich-Decian-250AD-sm.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "crisis", year: "Siglo III", place: "roma" },
    { id: "decio", year: "250", place: "alejandria" },
    { id: "lapsos", year: "251", place: "cartago" },
    { id: "valeriano", year: "257 – 258", place: "cartago" },
    { id: "diocleciano", year: "303 – 311", place: "nicea" },
  ],
  library: { ...library, places },
  version: {
    title: "Las persecuciones de los siglos II y III",
    inAMinute: [
      "En el siglo III, el Imperio vivió una gran crisis, y algunos emperadores culparon a los cristianos.",
      "En el año 250, Decio obligó a todos a ofrecer sacrificio a los dioses y a tener un certificado.",
      "Muchos cristianos renegaron; qué hacer con ellos después dividió a la Iglesia.",
      "Valeriano persiguió a los obispos y al clero: murieron el papa Sixto II, Lorenzo, Cipriano y Fructuoso.",
      "La Gran Persecución de Diocleciano (303-311) fue la más dura y la última.",
    ],
    intro:
      "Hasta mediados del siglo III, las persecuciones fueron locales. Pero el Imperio entró en una crisis terrible, y algunos emperadores decidieron que había que recuperar el favor de los dioses. Por primera vez, la persecución fue para todos y en todas partes.",
    sections: [
      {
        stop: "crisis",
        heading: "Un Imperio en crisis",
        blocks: [
          { type: "p", text: "El siglo III fue un desastre para Roma. En cincuenta años hubo más de veinte emperadores, casi todos asesinados. Los bárbaros cruzaban las fronteras, los persas derrotaban a las legiones, la moneda perdía valor y una epidemia diezmaba las ciudades." },
          { type: "p", text: "Para muchos romanos, la explicación era clara: los dioses estaban enfadados porque se les había abandonado. Y los cristianos, que no les ofrecían sacrificios y cada vez eran más, eran los primeros sospechosos." },
        ],
      },
      {
        stop: "decio",
        heading: "Decio y los certificados",
        blocks: [
          { type: "p", text: "En el año 250, el emperador Decio ordenó que todos los habitantes del Imperio ofrecieran sacrificio a los dioses ante una comisión. Quien lo hacía recibía un certificado, un «libelo». Quien no lo tenía, se exponía a la cárcel, la tortura o la muerte." },
          { type: "image", id: "libelo" },
          { type: "p", text: "En Egipto se han encontrado decenas de estos certificados escritos en papiro. Dicen más o menos: «Siempre he sacrificado a los dioses y ahora, en vuestra presencia, he sacrificado, he hecho libaciones y he probado la carne ofrecida». Y la firma del funcionario." },
          { type: "fact", label: "El papa Fabiano", text: "Una de las primeras víctimas fue el papa Fabiano, en enero del año 250. La sede de Roma estuvo más de un año vacía, porque elegir un nuevo obispo era demasiado peligroso." },
        ],
      },
      {
        stop: "lapsos",
        heading: "Los que cayeron",
        blocks: [
          { type: "p", text: "La persecución de Decio pilló a muchos cristianos desprevenidos tras décadas de calma. Muchos sacrificaron por miedo; otros compraron un certificado falso sobornando al funcionario. Se les llamó lapsi, «los caídos»." },
          { type: "p", text: "Cuando acabó la persecución, muchos quisieron volver. ¿Había que readmitirlos? Unos decían que nunca; otros, que bastaba con el perdón de un confesor que hubiera sufrido por la fe. Cipriano, obispo de Cartago, y el papa Cornelio impusieron una solución intermedia: readmitirlos tras una penitencia. Un presbítero de Roma, Novaciano, se opuso y se proclamó papa rival." },
          { type: "fact", label: "Una pregunta que dura siglos", text: "¿Puede la Iglesia perdonar cualquier pecado? Esa discusión dio origen a la penitencia pública, antecedente de la confesión." },
        ],
      },
      {
        stop: "valeriano",
        heading: "Valeriano: a por los obispos",
        blocks: [
          { type: "p", text: "En el año 257, el emperador Valeriano cambió de estrategia: atacó a los líderes. Prohibió las reuniones y los cementerios cristianos, y ordenó ejecutar a obispos, presbíteros y diáconos." },
          { type: "p", text: "En agosto del 258, el papa Sixto II fue sorprendido celebrando en una catacumba y ejecutado con varios de sus diáconos. Días después murió el diácono Lorenzo, que según la tradición fue asado en una parrilla. En septiembre fue decapitado Cipriano de Cartago, y en enero del 259 quemaron en Tarragona al obispo Fructuoso." },
          { type: "p", text: "Pero en el 260, Valeriano fue capturado por los persas y murió prisionero, algo que nunca le había pasado a un emperador. Su hijo detuvo la persecución, y empezaron cuarenta años de paz." },
        ],
      },
      {
        stop: "diocleciano",
        heading: "La Gran Persecución",
        blocks: [
          { type: "p", text: "Diocleciano había puesto orden en el Imperio dividiéndolo entre cuatro gobernantes. En el año 303, influido por su colega Galerio, lanzó la persecución más sistemática de todas: destruir las iglesias, quemar los libros sagrados, encarcelar al clero y, finalmente, obligar a todos a sacrificar." },
          { type: "p", text: "Fue especialmente dura en Oriente y en el norte de África, y duró, con altibajos, ocho años. Murieron miles de personas, entre ellas muchos de los mártires más famosos de Hispania, como Eulalia de Mérida y Vicente de Zaragoza." },
          { type: "p", text: "Pero no funcionó. En el año 311, Galerio, enfermo y a punto de morir, firmó un edicto de tolerancia: reconocía que no había conseguido nada y permitía a los cristianos existir y reunirse, a cambio de que rezaran por el emperador. Dos años después llegaría algo mucho más grande." },
        ],
      },
    ],
    relatedPills: ["el-pez-simbolo-cristiano"],
    quiz: [
      question("s4e4-libelo", "¿Qué era un «libelo» en la persecución de Decio?", ["Un libro sagrado", "Un certificado de haber ofrecido sacrificio a los dioses", "Una carta de un obispo", "Una moneda"], 1, "Se han encontrado decenas en papiros de Egipto."),
      question("s4e4-lapsi", "¿A quiénes se llamaba lapsi?", ["A los mártires", "A los cristianos que renegaron durante la persecución", "A los obispos", "A los soldados"], 1, "«Los caídos». Qué hacer con ellos dividió a la Iglesia."),
      question("s4e4-galerio", "¿Cómo terminó la Gran Persecución?", ["Con la muerte de todos los cristianos", "Con un edicto de tolerancia de Galerio en el 311", "Con una guerra civil", "Nunca terminó"], 1, "Galerio reconoció que la persecución había fracasado."),
    ],
    sources: [
      { text: "Eusebio de Cesarea, Historia eclesiástica VI – VIII; Lactancio, Sobre la muerte de los perseguidores" },
      { text: "Cipriano de Cartago, Sobre los caídos" },
      { text: "John R. Knipfing, «The Libelli of the Decian Persecution», Harvard Theological Review 16 (1923)" },
    ],
    next: "En el próximo episodio: cómo vivía un cristiano normal en una ciudad romana cuando no había persecución. Trabajo, familia, fiestas y una manera distinta de ver la vida.",
  },
});
