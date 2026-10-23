import { makeEpisode } from "../make";
import { library, mediterranean } from "./library";

export const queEsElCristianismo = makeEpisode({
  slug: "que-es-el-cristianismo",
  title: "¿Qué es el cristianismo?",
  period: "Hoy y hace dos mil años",
  cover: "Spas vsederzhitel sinay.jpg",
  mapRegion: "mediterraneo",
  places: { jerusalen: mediterranean.jerusalen, antioquia: mediterranean.antioquia, roma: mediterranean.roma },
  stops: [
    { id: "hoy", year: "Hoy", place: "roma" },
    { id: "nombre", year: "Hacia el año 40", place: "antioquia" },
    { id: "creencias", year: "Siglo I", place: "jerusalen" },
    { id: "iglesias", year: "Hoy", place: "roma" },
    { id: "huellas", year: "Hoy", place: "roma" },
    { id: "lumen", year: "Esta serie", place: "jerusalen" },
  ],
  library,
  version: {
    title: "¿Qué es el cristianismo?",
    inAMinute: [
      "El cristianismo es la religión de quienes siguen a Jesús de Nazaret y creen que es el Cristo, el Hijo de Dios.",
      "Es la religión con más seguidores del mundo: unos 2.300 millones de personas, casi tres de cada diez habitantes del planeta.",
      "Nació hace unos dos mil años en tierra judía, dentro del Imperio romano.",
      "No es una sola iglesia: hay católicos, ortodoxos, protestantes y muchas más, que comparten lo esencial.",
      "Aunque no seas creyente, el cristianismo está en tu calendario, tu idioma, tus fiestas y tu ciudad.",
    ],
    intro:
      "Antes de empezar una serie, conviene saber de qué va. Esta va de una religión que empezó con un puñado de pescadores en un rincón del Imperio romano y hoy está en todos los países del mundo. Vamos a ver qué es, en qué creen sus seguidores y por qué te toca de cerca aunque nunca hayas pisado una iglesia.",
    sections: [
      {
        stop: "hoy",
        heading: "Tres de cada diez",
        blocks: [
          { type: "p", text: "Si juntáramos en una sala a cien personas elegidas al azar en todo el planeta, unas veintinueve serían cristianas. Es la religión con más seguidores del mundo, por delante del islam, aunque este crece más deprisa." },
          {
            type: "numbers",
            title: "El cristianismo hoy",
            items: [
              { value: "2.300 millones", label: "de cristianos en el mundo (datos de 2020)" },
              { value: "29 %", label: "de la población mundial, casi tres de cada diez" },
              { value: "En todos", label: "los países del mundo hay comunidades cristianas" },
            ],
          },
          { type: "p", text: "Durante siglos se pensó en el cristianismo como algo europeo. Ya no lo es: hoy viven más cristianos en el África subsahariana que en ninguna otra región, y América Latina reúne a una parte enorme de los católicos. El cristiano típico del siglo XXI no es un europeo mayor, sino una mujer joven africana o latinoamericana." },
          { type: "fact", label: "Fuente", text: "Las cifras son del Pew Research Center, que estudia las religiones del mundo con encuestas y censos. Son estimaciones: nadie puede contar exactamente a los creyentes de un planeta." },
        ],
      },
      {
        stop: "nombre",
        heading: "¿Por qué se llama así?",
        blocks: [
          { type: "p", text: "«Cristo» no es un apellido. Es un título: viene del griego Christós, que significa «ungido», el que ha recibido el aceite sagrado. Es la traducción de la palabra hebrea Mesías. Decir «Jesucristo» es decir «Jesús, el Mesías»." },
          { type: "p", text: "Los primeros seguidores de Jesús eran judíos y no se llamaban a sí mismos cristianos. Hablaban del «Camino». Según los Hechos de los Apóstoles, fue en Antioquía, una gran ciudad del Imperio en la actual Turquía, donde la gente empezó a llamarlos «cristianos», hacia el año 40." },
          { type: "words", items: [
            { term: "Cristo", meaning: "«Ungido» en griego. Es lo mismo que «Mesías» en hebreo." },
            { term: "Evangelio", meaning: "«Buena noticia» en griego. También se llaman así los cuatro libros que cuentan la vida de Jesús." },
            { term: "Iglesia", meaning: "Del griego ekklesía, «asamblea». Antes de ser un edificio, era la comunidad de los creyentes." },
          ] },
        ],
      },
      {
        stop: "creencias",
        heading: "En qué creen (casi todos)",
        blocks: [
          { type: "p", text: "Hay muchas iglesias cristianas, pero casi todas comparten un núcleo de creencias. Lo resumen los credos que se escribieron en los primeros siglos y que todavía se rezan en millones de templos." },
          { type: "p", text: "Creen en un solo Dios, el mismo del pueblo judío, que se ha dado a conocer como Padre, Hijo y Espíritu Santo. Creen que Jesús de Nazaret, un judío que vivió en el siglo I, es el Hijo de Dios hecho hombre. Que murió crucificado y resucitó al tercer día. Y que su vida y su muerte abren a todos la posibilidad de vivir reconciliados con Dios y con los demás." },
          { type: "image", id: "pantocrator" },
          { type: "p", text: "Comparten un libro, la Biblia, formada por el Antiguo Testamento (las Escrituras judías) y el Nuevo Testamento (los escritos de los primeros cristianos). Y comparten un rito de entrada, el bautismo, y una gran norma de vida que Jesús resumió así: amar a Dios y amar al prójimo como a uno mismo." },
          { type: "fact", label: "Fe e historia", text: "Que Jesús resucitó es una afirmación de fe: los historiadores no pueden comprobarla ni desmentirla. Lo que sí pueden estudiar es que sus seguidores lo creyeron desde muy pronto, y que esa convicción cambió la historia." },
        ],
      },
      {
        stop: "iglesias",
        heading: "Una familia con muchas ramas",
        blocks: [
          { type: "p", text: "El cristianismo no es una sola organización. A lo largo de dos mil años se ha dividido en varias grandes ramas, como un árbol con un mismo tronco." },
          { type: "p", text: "La Iglesia católica, con el papa en Roma, es la más grande: reúne aproximadamente a la mitad de los cristianos. Las iglesias ortodoxas, fuertes en Grecia, Rusia, Ucrania o Rumanía, se separaron de Roma en el año 1054. Las iglesias protestantes y evangélicas nacieron con la Reforma de Lutero en el siglo XVI y hoy son muchísimas: luteranos, anglicanos, metodistas, bautistas, pentecostales… Y hay iglesias muy antiguas en Egipto, Etiopía, Armenia o la India." },
          { type: "p", text: "Tienen diferencias importantes, y en el pasado se enfrentaron incluso en guerras. Hoy la mayoría colabora y reza junta en muchas ocasiones: es lo que se llama ecumenismo." },
          { type: "fact", label: "Para saber más", text: "En «Las iglesias, frente a frente», dentro de Descubre, puedes comparar dos iglesias cristianas punto por punto." },
        ],
      },
      {
        stop: "huellas",
        heading: "Está en tu vida aunque no lo veas",
        blocks: [
          { type: "p", text: "Aunque no seas creyente, vives rodeado de huellas del cristianismo. Cuentas los años desde el nacimiento de Jesús (aunque con un pequeño error, como veremos). Descansas el domingo, el día en que los cristianos celebran la resurrección. Tienes vacaciones en Navidad y en Semana Santa." },
          { type: "p", text: "Muchos nombres españoles son cristianos: José, María, Juan, Pedro, Lucía, Cristina, Javier o Teresa. Y también muchas palabras y expresiones: «adiós» viene de «a Dios», y decimos «¡Jesús!» cuando alguien estornuda." },
          { type: "p", text: "Mira tu ciudad: la catedral, las iglesias de los barrios, el Camino de Santiago, la Semana Santa, las fiestas del patrón. Los primeros hospitales y universidades de Europa nacieron en muchos casos de la Iglesia. Y buena parte del arte que hay en los museos cuenta historias de la Biblia." },
          { type: "illustration", id: "procesion" },
        ],
      },
      {
        stop: "lumen",
        heading: "Cómo te lo vamos a contar",
        blocks: [
          { type: "p", text: "En esta serie te contamos el cristianismo desde la historia y la cultura. No queremos convencerte de nada: queremos que lo entiendas. Por eso siempre distinguiremos dos cosas: lo que creen los cristianos y lo que pueden decir los historiadores." },
          { type: "p", text: "Son ocho temporadas, de los orígenes hasta hoy. Empezamos por el principio: un rincón del Imperio romano, hace dos mil años, donde un pueblo pequeño esperaba que Dios cambiara su historia." },
        ],
      },
    ],
    relatedPills: ["que-significa-cristo", "donde-viven-los-cristianos", "catolicos-ortodoxos-protestantes"],
    quiz: [
      { id: "s1e1-cristo", prompt: "¿Qué significa «Cristo»?", options: [{ id: "a", text: "Salvador" }, { id: "b", text: "Ungido" }, { id: "c", text: "Hijo de Dios" }, { id: "d", text: "Maestro" }], correctId: "b", explanation: "Christós es «ungido» en griego: la traducción del hebreo Mesías." },
      { id: "s1e1-donde", prompt: "¿Dónde viven hoy más cristianos?", options: [{ id: "a", text: "En Europa" }, { id: "b", text: "En Norteamérica" }, { id: "c", text: "En el África subsahariana" }, { id: "d", text: "En Oriente Medio" }], correctId: "c", explanation: "Según el Pew Research Center, el África subsahariana ya es la región con más cristianos del mundo." },
      { id: "s1e1-antioquia", prompt: "¿Dónde se llamó «cristianos» a los seguidores de Jesús por primera vez?", options: [{ id: "a", text: "En Jerusalén" }, { id: "b", text: "En Roma" }, { id: "c", text: "En Antioquía" }, { id: "d", text: "En Atenas" }], correctId: "c", explanation: "Lo cuentan los Hechos de los Apóstoles (11, 26)." },
    ],
    sources: [
      { text: "Pew Research Center, «How the Global Religious Landscape Changed From 2010 to 2020» (2025)", url: "https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/" },
      { text: "Hechos de los Apóstoles 11, 26" },
    ],
    next: "En el próximo episodio: viajamos a la tierra donde nació Jesús. Una región ocupada por Roma, gobernada por un rey constructor y paranoico, y llena de campesinos que pagaban demasiados impuestos.",
  },
});
