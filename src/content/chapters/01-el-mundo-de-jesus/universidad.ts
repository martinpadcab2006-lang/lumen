import type { ChapterVersion } from "../../chapter-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Universidad: histórico-cultural, con fuentes y debates. */
export const universidad: ChapterVersion = {
  title: "Judea y Galilea en el siglo I: el contexto de Jesús",
  inAMinute: [
    "El marco es el judaísmo del Segundo Templo, bajo hegemonía romana desde el 63 a. C.",
    "Las fuentes principales son Flavio Josefo, Filón, los manuscritos de Qumrán, el Nuevo Testamento y la arqueología.",
    "La historiografía actual subraya la pluralidad del judaísmo de la época frente a imágenes simplificadas.",
    "Galilea y Judea tenían situaciones políticas y sociales distintas.",
    "Las expectativas mesiánicas eran diversas y no siempre centrales.",
    "La guerra del 66-73/74 marca un antes y un después para judíos y cristianos.",
  ],
  intro:
    "Este capítulo resume el estado de la cuestión sobre el contexto histórico de Jesús. Se distingue entre lo que dicen las fuentes, lo que reconstruye la investigación y lo que sigue en debate. Las referencias de cada apartado remiten a la bibliografía del final.",
  sections: [
    {
      stop: "roma",
      heading: "Marco político: de los asmoneos a Roma",
      blocks: [
        { type: "p", text: "Tras la revuelta macabea (167-164 a. C.), la dinastía asmonea gobernó un Estado judío independiente que llegó a incluir Idumea, Samaria y Galilea. La guerra civil entre Hircano II y Aristóbulo II facilitó la intervención de Pompeyo en el 63 a. C. (Josefo, Antigüedades judías XIV, 34-79)." },
        { type: "image", id: "fouquetPompeyo" },
        { type: "p", text: "Josefo subraya que Pompeyo entró en el Santo de los Santos pero no tocó el tesoro, un episodio que la literatura judía posterior (Salmos de Salomón 2 y 17) interpretó como castigo divino. Roma integró la región en su sistema de clientelas: el Senado nombró rey a Herodes en el 40 a. C., y este tomó Jerusalén en el 37 a. C." },
        { type: "image", id: "fouquetHerodes" },
      ],
    },
    {
      stop: "herodes",
      heading: "Herodes y la división del reino",
      blocks: [
        { type: "character", id: "herodes" },
        { type: "p", text: "El programa edilicio de Herodes (Cesarea Marítima, Sebaste, Masada, Herodión y el Templo) muestra la integración del reino en la cultura helenístico-romana. Cesarea, con su puerto artificial de Sebastos y su templo a Roma y Augusto, fue concebida como una ciudad grecorromana en la costa judía." },
        { type: "image", id: "cesarea" },
        { type: "p", text: "A su muerte (4 a. C.), Augusto repartió el territorio: Arquelao en Judea, Samaria e Idumea (depuesto el 6 d. C.), Antipas en Galilea y Perea, y Filipo en el noreste. Desde el 6 d. C., Judea fue una provincia gobernada por prefectos ecuestres dependientes del legado de Siria; el censo de Quirinio provocó la resistencia de Judas el Galileo (Antigüedades XVIII, 1-10)." },
        { type: "character", id: "antipas" },
        { type: "fact", label: "Problema cronológico", text: "La datación del nacimiento de Jesús en tiempos de Herodes (Mateo 2) y del censo de Quirinio (Lucas 2, fechado por Josefo en el 6 d. C.) no encaja fácilmente. Es uno de los problemas clásicos de la exégesis de los relatos de la infancia." },
      ],
    },
    {
      stop: "templo",
      heading: "El Templo y la aristocracia sacerdotal",
      blocks: [
        { type: "p", text: "El Templo era a la vez centro de culto, institución económica y sede de la autoridad del sumo sacerdote y del sanedrín, cuya composición y competencias exactas se discuten. La reconstrucción herodiana, iniciada c. 20/19 a. C., amplió la explanada hasta unas 14 hectáreas." },
        { type: "image", id: "maqueta" },
        { type: "character", id: "caifas" },
        { type: "p", text: "Los sumos sacerdotes eran nombrados y destituidos por Herodes y, después, por los prefectos: Caifás ocupó el cargo entre c. 18 y 36 d. C., coincidiendo casi por completo con Pilato, lo que sugiere una colaboración estable. El osario hallado en Jerusalén en 1990 con la inscripción «José hijo de Caifás» se suele relacionar con él, aunque la identificación no es unánime." },
        { type: "image", id: "tissotTemplo" },
      ],
    },
    {
      stop: "galilea",
      heading: "Galilea: economía y sociedad",
      blocks: [
        { type: "p", text: "La Galilea de Antipas era mayoritariamente agraria y judía, como indican los hallazgos de miqvaot, vasijas de piedra y la ausencia de restos de cerdo. La refundación de Séforis y la fundación de Tiberíades (c. 20 d. C.) introdujeron centros urbanos a pocos kilómetros de Nazaret." },
        { type: "p", text: "Se debate su impacto: unos autores subrayan la presión fiscal y la concentración de tierras como trasfondo de la predicación de Jesús; otros insisten en una economía rural relativamente estable. Las excavaciones de Nazaret apuntan a una aldea de pocos cientos de habitantes." },
        { type: "image", id: "barca" },
        { type: "p", text: "La llamada «barca de Galilea», hallada en 1986 en la orilla del lago, es una embarcación de pesca de la época (siglo I a. C. – I d. C.), con capacidad para unas quince personas. Junto con el puerto de Magdala, permite reconstruir la economía pesquera que aparece en los evangelios." },
        { type: "image", id: "denario" },
      ],
    },
    {
      stop: "sinagoga",
      heading: "Sinagogas antes del 70",
      blocks: [
        { type: "p", text: "Durante décadas se discutió si existían sinagogas como edificios en la Galilea anterior al 70. Los hallazgos de Gamla, Magdala y otros lugares han confirmado su existencia como espacios de reunión comunitaria, lectura de la Torá y probablemente funciones civiles." },
        { type: "image", id: "magdala" },
        { type: "p", text: "La llamada «piedra de Magdala» (descubierta en 2009) muestra la representación más antigua conocida de la menorá fuera de Jerusalén, lo que se ha interpretado como un vínculo simbólico entre la sinagoga local y el Templo." },
        { type: "image", id: "tissotSinagoga" },
      ],
    },
    {
      stop: "grupos",
      heading: "Pluralidad religiosa",
      blocks: [
        { type: "character", id: "josefo" },
        { type: "p", text: "Josefo presenta tres «filosofías» (fariseos, saduceos y esenios) y una cuarta, de resistencia (Guerra judía II, 119-166; Antigüedades XVIII, 11-25). Se trata de una descripción en clave grecorromana, pensada para lectores no judíos." },
        { type: "image", id: "tissotFariseos" },
        { type: "p", text: "E. P. Sanders propuso hablar de un «judaísmo común» compartido por la mayoría, más allá de los grupos. Los manuscritos de Qumrán, descubiertos desde 1947, han transformado el conocimiento de la diversidad textual y teológica de la época; la identificación de la comunidad de Qumrán con los esenios es mayoritaria, aunque no unánime." },
        { type: "image", id: "rollo" },
        { type: "image", id: "qumran" },
      ],
    },
    {
      stop: "espera",
      heading: "Pilato y las expectativas mesiánicas",
      blocks: [
        { type: "character", id: "pilato" },
        { type: "p", text: "Poncio Pilato, prefecto entre el 26 y el 36, aparece en Josefo, en Filón (Legatio ad Gaium 299-305), en Tácito (Anales XV, 44) y en la inscripción de Cesarea. Filón lo describe como inflexible; los evangelios, como vacilante. Ambas imágenes tienen intereses literarios propios." },
        { type: "image", id: "pilato" },
        { type: "p", text: "Las expectativas mesiánicas eran plurales (real-davídica, sacerdotal, profética) y no estaban presentes en todos los grupos. Josefo menciona varios líderes populares con pretensiones proféticas o regias en el siglo I, como Teudas o «el Egipcio» (Antigüedades XX, 97-99 y 169-172)." },
        { type: "quote", text: "Christus, del que toma nombre [la secta], había sido ejecutado en el reinado de Tiberio por el procurador Poncio Pilato.", source: "Tácito, Anales XV, 44 (c. 116 d. C.)" },
      ],
    },
    {
      stop: "guerra",
      heading: "La guerra judía (66-73/74 d. C.)",
      blocks: [
        { type: "p", text: "La revuelta de 66 terminó con la destrucción del Templo en el año 70 y la caída de Masada. Supuso el fin de los saduceos y del culto sacrificial, y la reorganización del judaísmo en torno a los sabios rabínicos." },
        { type: "image", id: "arcoTito" },
        { type: "image", id: "masada" },
        { type: "p", text: "Para la historia del cristianismo, la fecha es clave: la mayoría de los evangelios se escribieron después del 70, y sus relatos reflejan también ese contexto. La separación entre judaísmo y cristianismo (el llamado parting of the ways) fue un proceso gradual cuya cronología se discute." },
      ],
    },
  ],
  debates: [
    {
      question: "¿Cómo de urbanizada y helenizada estaba Galilea?",
      positions: "Unos autores ven en Séforis y Tiberíades una fuerte influencia grecorromana; otros, a partir de la arqueología de las aldeas, defienden una Galilea rural, judía y conservadora.",
    },
    {
      question: "¿Retratan bien los evangelios a los fariseos?",
      positions: "La investigación reciente considera que la polémica evangélica refleja en parte los conflictos entre cristianos y judíos de finales del siglo I, y no solo los tiempos de Jesús.",
    },
    {
      question: "¿Eran los habitantes de Qumrán esenios?",
      positions: "La hipótesis «Qumrán-esenia» sigue siendo mayoritaria, pero algunos autores ven en los manuscritos una biblioteca de procedencia diversa o en el yacimiento una instalación sin relación directa con los rollos.",
    },
    {
      question: "¿Qué peso tenía la presión económica?",
      positions: "Para unos (Horsley, Crossan), la explotación fiscal explica movimientos como el de Jesús; para otros (Sanders, Freyne en sus últimos trabajos), la situación no era excepcional en el mundo antiguo.",
    },
  ],
  sources: [
    { text: "Flavio Josefo, Antigüedades judías (libros XIV-XX) y La guerra de los judíos (libro II)." },
    { text: "Filón de Alejandría, Legatio ad Gaium (Embajada a Cayo)." },
    { text: "Tácito, Anales XV, 44." },
    { text: "E. P. Sanders, Judaism: Practice and Belief, 63 BCE – 66 CE. Londres, SCM Press, 1992." },
    { text: "John P. Meier, Un judío marginal. Nueva visión del Jesús histórico, vol. III: Compañeros y competidores. Estella, Verbo Divino." },
    { text: "Antonio Piñero, Año I. Israel y su mundo cuando nació Jesús. Madrid, Laberinto, 2008." },
    { text: "Gerd Theissen y Annette Merz, El Jesús histórico. Salamanca, Sígueme." },
    { text: "Emil Schürer, Historia del pueblo judío en tiempos de Jesús. Madrid, Cristiandad." },
    { text: "Sean Freyne, Galilee from Alexander the Great to Hadrian. Wilmington, Glazier, 1980." },
    { text: "Richard A. Horsley, Galilee: History, Politics, People. Valley Forge, Trinity Press, 1995." },
  ],
  quiz: [
    { id: "u1-pompeyo", prompt: "¿Qué conflicto facilitó la intervención de Pompeyo en el 63 a. C.?", options: options("La revuelta macabea", "La guerra civil entre Hircano II y Aristóbulo II", "La rebelión de Judas el Galileo", "La muerte de Herodes"), correctId: "b", explanation: "Los dos hermanos asmoneos se disputaban el poder y ambos buscaron el apoyo de Roma." },
    { id: "u1-provincia", prompt: "¿Desde qué año Judea fue gobernada directamente por prefectos romanos?", options: options("4 a. C.", "6 d. C.", "26 d. C.", "44 d. C."), correctId: "b", explanation: "Tras la destitución de Arquelao en el 6 d. C." },
    { id: "u1-sanders", prompt: "¿Qué propuso E. P. Sanders con el concepto de «judaísmo común»?", options: options("Que todos los judíos eran fariseos", "Que existía un núcleo de prácticas y creencias compartido más allá de los grupos", "Que los esenios eran mayoría", "Que no había diferencias entre Galilea y Judea"), correctId: "b", explanation: "Sanders subrayó lo que compartía la mayoría de la población, frente a una visión centrada solo en las élites y los grupos." },
    { id: "u1-filon", prompt: "¿En qué obra describe Filón a Pilato?", options: options("Antigüedades judías", "Legatio ad Gaium", "Anales", "Historia eclesiástica"), correctId: "b", explanation: "En la Legatio ad Gaium, 299-305." },
    { id: "u1-magdala", prompt: "¿Qué aporta la piedra de Magdala?", options: options("La firma de Pilato", "La representación más antigua conocida de la menorá fuera de Jerusalén", "Un retrato de Herodes", "Un fragmento del evangelio de Marcos"), correctId: "b", explanation: "Hallada en 2009 en una sinagoga del siglo I." },
  ],
  next: "Capítulo 2: el Jesús histórico. Fuentes, criterios de historicidad y lo que la investigación considera más probable sobre su vida y su muerte.",
};
