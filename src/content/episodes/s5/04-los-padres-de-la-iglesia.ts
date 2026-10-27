import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("antioquia", "alejandria", "capadocia", "milan", "hipona", "sevilla");

export const losPadres = makeEpisode({
  slug: "los-padres-de-la-iglesia",
  title: "Los Padres de la Iglesia",
  period: "Siglos I – VIII",
  cover: "Sandro Botticelli - St Augustine - WGA02709.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "quienes", year: "c. 96 – 110", place: "antioquia" },
    { id: "alejandria", year: "Siglos III – IV", place: "alejandria" },
    { id: "capadocios", year: "Siglo IV", place: "capadocia" },
    { id: "latinos", year: "Siglos IV – VI", place: "milan" },
    { id: "agustin", year: "354 – 430", place: "hipona" },
    { id: "isidoro", year: "c. 560 – 636", place: "sevilla" },
  ],
  library: { ...library, places },
  version: {
    title: "Los Padres de la Iglesia",
    inAMinute: [
      "Los Padres de la Iglesia son los grandes pensadores cristianos de los primeros siglos.",
      "Escribían en griego en Oriente y en latín en Occidente.",
      "Basilio, Gregorio Nacianceno y Juan Crisóstomo son los grandes Padres griegos.",
      "Ambrosio, Jerónimo, Agustín y Gregorio Magno son los cuatro grandes Padres latinos.",
      "El último Padre de Occidente fue un hispano: Isidoro de Sevilla.",
    ],
    intro:
      "Los apóstoles murieron, y los cristianos tuvieron que seguir pensando su fe sin ellos: responder a los críticos, explicar la Biblia, resolver dudas. Lo hicieron unos cuantos obispos, monjes y sabios a los que hoy llamamos los Padres de la Iglesia. Algunos fueron de los intelectuales más brillantes de su tiempo.",
    sections: [
      {
        stop: "quienes",
        heading: "¿Quiénes son los Padres?",
        blocks: [
          { type: "p", text: "Se llama Padres de la Iglesia a los escritores cristianos de la Antigüedad, más o menos hasta el siglo VIII, reconocidos por su santidad y su fe. Los más antiguos, los Padres apostólicos, llegaron a conocer a los apóstoles o a sus discípulos." },
          { type: "p", text: "Uno de ellos es Ignacio, obispo de Antioquía. Hacia el año 110 lo llevaban preso a Roma para morir en el circo, y por el camino escribió siete cartas a distintas comunidades. En una de ellas aparece por primera vez la expresión «Iglesia católica», es decir, «universal»." },
          { type: "quote", text: "Soy trigo de Dios, y he de ser molido por los dientes de las fieras para ser presentado como pan limpio de Cristo.", source: "Ignacio de Antioquía, Carta a los romanos 4" },
        ],
      },
      {
        stop: "alejandria",
        heading: "La escuela de Alejandría",
        blocks: [
          { type: "p", text: "Alejandría era la gran capital cultural del mundo antiguo, con su famosa biblioteca. Allí surgió una escuela cristiana que intentó dialogar con la filosofía griega. Su maestro más famoso fue Orígenes." },
          { type: "character", id: "origenes" },
          { type: "p", text: "Orígenes quiso fijar el mejor texto posible del Antiguo Testamento y puso en seis columnas paralelas el hebreo y varias traducciones griegas. A esa obra gigantesca se la llamó la Hexapla, «la séxtuple». Un siglo después, también en Alejandría, Atanasio defendió el Credo de Nicea contra los arrianos." },
        ],
      },
      {
        stop: "capadocios",
        heading: "Los Padres griegos",
        blocks: [
          { type: "p", text: "En el siglo IV, en Capadocia, en el centro de la actual Turquía, surgió un grupo excepcional: los hermanos Basilio el Grande y Gregorio de Nisa, y su amigo Gregorio Nacianceno. Los tres ayudaron a explicar la Trinidad con palabras precisas." },
          { type: "image", id: "jerarcas" },
          { type: "p", text: "Basilio, obispo de Cesarea de Capadocia, no solo escribía: a las afueras de su ciudad levantó un gran complejo con albergue, hospital y talleres para pobres y enfermos, uno de los primeros hospitales de la historia. Y en Antioquía predicaba Juan, tan elocuente que lo llamaron Crisóstomo, «boca de oro». Llegó a ser obispo de Constantinopla y murió en el destierro por criticar el lujo de la corte." },
          { type: "fact", label: "Macrina, la hermana", text: "Basilio y Gregorio de Nisa tenían una hermana mayor, Macrina, a la que los dos consideraban su maestra. Gregorio escribió su vida y un diálogo filosófico con ella sobre el alma y la resurrección." },
        ],
      },
      {
        stop: "latinos",
        heading: "Los Padres latinos",
        blocks: [
          { type: "p", text: "En Occidente, que hablaba latín, destacan cuatro: Ambrosio, obispo de Milán, que plantó cara al emperador Teodosio; Jerónimo, el traductor de la Biblia; Agustín, obispo de Hipona; y Gregorio Magno, papa entre 590 y 604, que organizó la Iglesia en una Italia arrasada por las guerras." },
          { type: "p", text: "En 1298, el papa Bonifacio VIII los declaró los cuatro grandes «doctores» de la Iglesia. Los artistas los pintaron mil veces juntos, a menudo con un símbolo cada uno: Jerónimo con un león y un sombrero rojo de cardenal; Gregorio con la tiara de papa y una paloma al oído." },
        ],
      },
      {
        stop: "agustin",
        heading: "Agustín, el más influyente",
        blocks: [
          { type: "image", id: "agustinBotticelli" },
          { type: "p", text: "Agustín nació en el año 354 en Tagaste, en el norte de África. Su madre, Mónica, era cristiana; él, durante años, no. Fue un estudiante brillante, tuvo un hijo con una mujer con la que vivió quince años y pasó por varias filosofías y sectas." },
          { type: "p", text: "En el año 386, siendo profesor de retórica en Milán, escuchando a Ambrosio y en plena crisis, oyó a un niño cantar «toma y lee». Abrió las cartas de Pablo y decidió cambiar de vida. Lo contó todo en las «Confesiones», que a menudo se considera la primera autobiografía de Occidente." },
          { type: "quote", text: "Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.", source: "San Agustín, Confesiones I, 1" },
        ],
      },
      {
        stop: "isidoro",
        heading: "El último Padre de Occidente",
        blocks: [
          { type: "p", text: "Se suele considerar a Isidoro, obispo de Sevilla en el reino visigodo, como el último de los Padres latinos. Su hermano Leandro había presidido el concilio en el que los visigodos se hicieron católicos." },
          { type: "p", text: "Isidoro escribió las «Etimologías», una enciclopedia en veinte libros que intentaba reunir todo el saber de su tiempo: gramática, medicina, geografía, animales, piedras, barcos… Fue uno de los libros más copiados de la Edad Media." },
          { type: "fact", label: "¿Patrón de internet?", text: "Por haber intentado reunir todo el conocimiento en una sola obra, a veces se propone a san Isidoro como patrón de internet. Es una idea curiosa, pero la Iglesia nunca lo ha declarado oficialmente." },
        ],
      },
    ],
    relatedPills: ["nicea-y-el-credo"],
    quiz: [
      question("s5e4-catolica", "¿Quién usó por primera vez la expresión «Iglesia católica»?", ["San Agustín", "Ignacio de Antioquía", "El papa Gregorio Magno", "Constantino"], 1, "En una carta escrita hacia el año 110, camino del martirio en Roma."),
      question("s5e4-crisostomo", "¿Qué significa «Crisóstomo», el sobrenombre de san Juan?", ["«El sabio»", "«Boca de oro»", "«El valiente»", "«Hombre de Dios»"], 1, "Por su manera de predicar."),
      question("s5e4-isidoro", "¿Qué obra escribió Isidoro de Sevilla?", ["La ciudad de Dios", "Las Etimologías", "La Vulgata", "Las Confesiones"], 1, "Una enciclopedia de todo el saber de su época."),
    ],
    sources: [
      { text: "Johannes Quasten, Patrología, BAC, 4 vols., 1961-2000" },
      { text: "Ignacio de Antioquía, Carta a los esmirniotas 8 y Carta a los romanos 4; Agustín, Confesiones I, 1 y VIII, 12" },
      { text: "Peter Brown, Agustín de Hipona, Acento, 2001" },
    ],
    next: "En el próximo episodio: la idea más difícil del cristianismo. Un solo Dios en tres personas: la Trinidad.",
  },
});
