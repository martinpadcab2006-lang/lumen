import { makeEpisode } from "../make";
import { holyLand, library, media } from "./library";

const places = {
  jordan: holyLand.jordan,
  maqueronte: holyLand.maqueronte,
  qumran: holyLand.qumran,
  jerusalen: holyLand.jerusalen,
  nazaret: holyLand.nazaret,
  tiberiades: holyLand.tiberiades,
};

export const juanElBautista = makeEpisode({
  slug: "juan-el-bautista",
  title: "Juan el Bautista",
  period: "c. 28 – 29",
  cover: "Andrea del Verrocchio, Leonardo da Vinci - Baptism of Christ - Uffizi.jpg",
  places,
  stops: [
    { id: "desierto", year: "c. 28", place: "jordan" },
    { id: "bautismo", year: "c. 28", place: "jordan" },
    { id: "jesus", year: "c. 28", place: "jordan" },
    { id: "josefo", year: "c. 29", place: "maqueronte" },
    { id: "relevo", year: "c. 29", place: "tiberiades" },
  ],
  library: { ...library, places },
  media,
  version: {
    title: "Juan el Bautista",
    inAMinute: [
      "Juan era un profeta que predicaba en el desierto, junto al río Jordán, y bautizaba a la gente.",
      "Pedía cambiar de vida porque Dios iba a intervenir muy pronto en la historia.",
      "Jesús fue a verlo y se hizo bautizar por él: es uno de los hechos más seguros de su vida.",
      "Herodes Antipas lo mandó encarcelar y ejecutar, según los evangelios y también según Josefo.",
      "Con Juan en la cárcel, Jesús empezó a predicar por su cuenta en Galilea.",
    ],
    intro:
      "Antes de que nadie hubiera oído hablar de Jesús, todo el mundo hablaba de Juan. Un hombre vestido con piel de camello, que comía saltamontes, gritaba en el desierto que había que cambiar de vida y metía a la gente en el río. Hasta allí fue un artesano de Nazaret.",
    sections: [
      {
        stop: "desierto",
        heading: "Un profeta en el desierto",
        blocks: [
          { type: "p", text: "Hacia el año 28, en el desierto de Judea, cerca de donde el río Jordán desemboca en el mar Muerto, un hombre empezó a atraer multitudes. Se llamaba Juan. Según el evangelio de Lucas, era hijo de un sacerdote, Zacarías, y de Isabel, pariente de María." },
          { type: "character", id: "juan" },
          { type: "p", text: "Iba vestido con piel de camello y un cinturón de cuero, y comía langostas y miel silvestre. Todo en él recordaba a los antiguos profetas, especialmente a Elías, que según la tradición volvería antes de la llegada del Mesías." },
          { type: "p", text: "Su mensaje era urgente: Dios está a punto de juzgar al mundo; cambiad de vida ya. Y no se andaba con rodeos. A los que acudían a verlo les decía: el que tenga dos túnicas, que dé una al que no tiene; a los recaudadores, que no cobraran más de lo debido; a los soldados, que no abusaran de nadie." },
          { type: "image", id: "jordan" },
        ],
      },
      {
        stop: "bautismo",
        heading: "Un baño para empezar de nuevo",
        blocks: [
          { type: "p", text: "Los judíos conocían los baños rituales: había piscinas para purificarse antes de entrar en el Templo o después de ciertos contactos impuros. Se repetían muchas veces. Lo nuevo de Juan era que su bautismo se hacía una sola vez, en el río, como señal de que alguien se arrepentía y empezaba una vida nueva." },
          { type: "illustration", id: "rio" },
          { type: "p", text: "«Bautizar» viene del griego y significa «sumergir». La gente se metía en el agua del Jordán, confesaba sus pecados y salía de ella como si naciera de nuevo, preparada para lo que Dios iba a hacer." },
          { type: "fact", label: "¿Era esenio?", text: "Qumrán, donde vivían los esenios, estaba a pocos kilómetros de donde bautizaba Juan, y ellos también vivían en el desierto esperando el fin de los tiempos. Algunos investigadores creen que Juan pudo tener contacto con ellos. No hay pruebas." },
        ],
      },
      {
        stop: "jesus",
        heading: "El día que llegó Jesús",
        blocks: [
          { type: "p", text: "Entre los que acudieron al Jordán había un galileo de unos treinta años: Jesús de Nazaret. Se puso en la fila y Juan lo bautizó. Los historiadores lo consideran uno de los hechos más seguros de su vida, precisamente porque incomodaba a los primeros cristianos: ¿por qué iba a necesitar el Mesías un bautismo de arrepentimiento?" },
          { type: "image", id: "bautismo" },
          { type: "p", text: "Los evangelios cuentan que, al salir del agua, el cielo se abrió, el Espíritu de Dios bajó sobre Jesús como una paloma y se oyó una voz: «Tú eres mi hijo amado». Es una escena de fe: para los cristianos, el momento en que Jesús es presentado como Hijo de Dios. Por eso la paloma aparece en tantos cuadros." },
          { type: "p", text: "Después, según Marcos, Mateo y Lucas, Jesús pasó cuarenta días en el desierto, ayunando y tentado por el diablo, antes de empezar su misión." },
        ],
      },
      {
        stop: "josefo",
        heading: "Lo que cuenta Josefo",
        blocks: [
          { type: "p", text: "Juan no aparece solo en los evangelios. Flavio Josefo, el historiador judío, le dedica un pasaje en sus Antigüedades judías. Dice que era «un hombre bueno» que pedía a los judíos practicar la justicia y la piedad, y que mucha gente acudía a él." },
          { type: "character", id: "antipas" },
          { type: "p", text: "Según Josefo, Herodes Antipas, que gobernaba Galilea y Perea, temió que la influencia de Juan acabara en una revuelta. Lo hizo detener, lo encerró en la fortaleza de Maqueronte, al otro lado del mar Muerto, y allí lo mandó matar." },
          { type: "p", text: "Los evangelios dan otra razón, compatible con la de Josefo: Juan había criticado a Antipas por casarse con Herodías, la mujer de su hermano. En el relato de Marcos, la hija de Herodías baila en un banquete, Antipas le promete lo que quiera y ella, aconsejada por su madre, pide la cabeza de Juan en una bandeja." },
          { type: "fact", label: "¿Cómo se llamaba la bailarina?", text: "Los evangelios no dan su nombre. Lo sabemos por Josefo, que menciona a una hija de Herodías llamada Salomé. Por eso se la conoce así en el arte, en la ópera y en el cine." },
        ],
      },
      {
        stop: "relevo",
        heading: "Un relevo",
        blocks: [
          { type: "p", text: "Algunos de los primeros seguidores de Jesús habían sido antes discípulos de Juan. El evangelio de Juan cuenta que Andrés, el hermano de Pedro, fue uno de ellos." },
          { type: "p", text: "Marcos lo resume en una frase: «Después de que Juan fue entregado, Jesús fue a Galilea a proclamar la buena noticia de Dios». El profeta del desierto había desaparecido; el predicador de Galilea empezaba. Y no se quedó en el desierto: se fue a los pueblos, a las sinagogas y a la orilla del lago." },
          { type: "image", id: "tissotPedro" },
          { type: "fact", label: "San Juan, en tu calendario", text: "La fiesta de san Juan Bautista es el 24 de junio, seis meses antes de Navidad, porque según Lucas nació seis meses antes que Jesús. Por eso la noche de San Juan coincide con el solsticio de verano y se celebra con hogueras." },
        ],
      },
    ],
    relatedPills: ["existio-jesus"],
    quiz: [
      { id: "s1e9-bautizar", prompt: "¿Qué significa «bautizar»?", options: [{ id: "a", text: "Bendecir" }, { id: "b", text: "Sumergir" }, { id: "c", text: "Perdonar" }, { id: "d", text: "Nacer" }], correctId: "b", explanation: "Viene del griego baptízein, «sumergir»." },
      { id: "s1e9-antipas", prompt: "¿Quién mandó ejecutar a Juan el Bautista?", options: [{ id: "a", text: "Poncio Pilato" }, { id: "b", text: "Herodes el Grande" }, { id: "c", text: "Herodes Antipas" }, { id: "d", text: "Caifás" }], correctId: "c", explanation: "Lo cuentan los evangelios y también Flavio Josefo, que sitúa su muerte en la fortaleza de Maqueronte." },
      { id: "s1e9-sanjuan", prompt: "¿Por qué la fiesta de san Juan es el 24 de junio?", options: [{ id: "a", text: "Porque murió ese día" }, { id: "b", text: "Porque según Lucas nació seis meses antes que Jesús" }, { id: "c", text: "Porque bautizó a Jesús ese día" }, { id: "d", text: "Por casualidad" }], correctId: "b", explanation: "Seis meses antes del 25 de diciembre, cerca del solsticio de verano." },
    ],
    sources: [
      { text: "Evangelio de Marcos 1, 1-15 y 6, 14-29; evangelio de Lucas 1 y 3; evangelio de Juan 1, 35-42" },
      { text: "Flavio Josefo, Antigüedades judías XVIII, 116-119" },
      { text: "John P. Meier, Un judío marginal, vol. 2/1, Verbo Divino, 1999" },
    ],
    next: "En el próximo episodio: el corazón del mensaje de Jesús. Dos palabras que repetía sin parar, «Reino de Dios», y por qué sonaban tan bien a los pobres y tan mal a los poderosos.",
  },
});
