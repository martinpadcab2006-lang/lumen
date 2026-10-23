import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  jerusalen: holyLand.jerusalen,
  emaus: holyLand.emaus,
  cafarnaum: holyLand.cafarnaum,
};

export const laResurreccion = makeEpisode({
  slug: "la-resurreccion",
  title: "La Resurrección",
  period: "c. 30",
  cover: "Piero della Francesca - Resurrection - WGA17609.jpg",
  places,
  stops: [
    { id: "sepulcro", year: "c. 30, domingo", place: "jerusalen" },
    { id: "apariciones", year: "c. 30", place: "emaus" },
    { id: "pablo", year: "c. 54", place: "jerusalen" },
    { id: "historia", year: "Hoy", place: "jerusalen" },
    { id: "domingo", year: "Desde el siglo I", place: "cafarnaum" },
  ],
  library: { ...library, places },
  version: {
    title: "La Resurrección",
    inAMinute: [
      "Los evangelios cuentan que el domingo unas mujeres encontraron vacío el sepulcro de Jesús.",
      "Después, varios discípulos dijeron que se les había aparecido vivo.",
      "Que Jesús resucitó es una afirmación de fe: la historia no puede comprobarla ni descartarla.",
      "Lo que sí es un hecho histórico es que sus discípulos lo creyeron, y que eso lo cambió todo.",
      "Por eso los cristianos celebran la Pascua y se reúnen el domingo.",
    ],
    intro:
      "Viernes: Jesús muere y sus discípulos se esconden aterrados. Unas semanas después, esos mismos hombres recorren Jerusalén diciendo que está vivo y que están dispuestos a morir por ello. ¿Qué pasó entre medias? Esta es la pregunta más importante de toda la serie.",
    sections: [
      {
        stop: "sepulcro",
        heading: "Un sepulcro vacío",
        blocks: [
          { type: "p", text: "El domingo muy temprano, al terminar el sábado, unas mujeres fueron al sepulcro con perfumes para ungir el cuerpo de Jesús, como se hacía con los muertos. Los evangelios no coinciden del todo en los nombres, pero en todos aparece María Magdalena." },
          { type: "p", text: "Encontraron la piedra corrida y el sepulcro vacío. Según Marcos, un joven vestido de blanco les dijo: «No está aquí. Ha resucitado». Y salieron corriendo, temblando de miedo." },
          { type: "image", id: "noliMe" },
          { type: "fact", label: "Un detalle que los historiadores subrayan", text: "En aquella época, el testimonio de una mujer valía poco en un juicio. Si alguien se hubiera inventado la historia, lo lógico habría sido poner a hombres como primeros testigos. Que sean mujeres hace pensar que es un recuerdo antiguo." },
        ],
      },
      {
        stop: "apariciones",
        heading: "«Lo hemos visto»",
        blocks: [
          { type: "p", text: "Después, los evangelios cuentan varias apariciones de Jesús resucitado: a María Magdalena junto al sepulcro, a los Once reunidos en una casa, a Tomás, que no se lo creía hasta tocar las heridas, y en Galilea, junto al lago." },
          { type: "p", text: "La más bonita la cuenta Lucas. Dos discípulos, tristes, caminan de Jerusalén a una aldea llamada Emaús. Un desconocido se une a ellos y les explica las Escrituras. Al llegar, lo invitan a cenar, y cuando parte el pan lo reconocen: es Jesús. En ese momento, desaparece." },
          { type: "image", id: "emaus" },
          { type: "p", text: "Los relatos son muy distintos entre sí y no encajan en una cronología única. Pero todos coinciden en que Jesús era el mismo, aunque transformado: no un fantasma, pero tampoco alguien que simplemente había vuelto a la vida de antes." },
        ],
      },
      {
        stop: "pablo",
        heading: "El testimonio más antiguo",
        blocks: [
          { type: "p", text: "El texto más antiguo sobre la resurrección no está en los evangelios, sino en una carta de Pablo a los cristianos de Corinto, escrita hacia el año 54. Pablo dice que transmite lo que él mismo recibió, una fórmula que los especialistas creen que circulaba ya pocos años después de la muerte de Jesús." },
          { type: "quote", text: "Cristo murió por nuestros pecados, según las Escrituras; fue sepultado y resucitó al tercer día, según las Escrituras; se apareció a Cefas y después a los Doce; después se apareció a más de quinientos hermanos a la vez.", source: "Primera carta a los Corintios 15, 3-6" },
          { type: "p", text: "Pablo añade que muchos de esos testigos «viven todavía», como invitando a preguntarles. Y al final se incluye a sí mismo: Jesús se le apareció también a él." },
        ],
      },
      {
        stop: "historia",
        heading: "¿Qué puede decir la historia?",
        blocks: [
          { type: "p", text: "La resurrección, tal como la entienden los cristianos, no es volver a la vida para morir más tarde, sino entrar en una vida nueva, definitiva, la de Dios. Por definición, eso está fuera de lo que un historiador puede comprobar." },
          { type: "p", text: "Lo que sí puede decir la historia es esto: que los discípulos de Jesús estaban convencidos de haberlo visto vivo después de su muerte; que esa convicción los transformó de un grupo asustado en predicadores valientes; y que, sin ella, no habría habido cristianismo." },
          { type: "p", text: "A partir de ahí, cada uno interpreta. Para los cristianos, Dios resucitó a Jesús, y es el centro de su fe: Pablo llegó a escribir que, si Cristo no resucitó, su fe no tiene sentido. Otros han propuesto explicaciones como visiones intensas causadas por el duelo, o una historia que creció al contarse. El debate sigue abierto, y Lumen no lo cierra por ti." },
        ],
      },
      {
        stop: "domingo",
        heading: "Por qué el domingo",
        blocks: [
          { type: "image", id: "resurreccion" },
          { type: "p", text: "Para los primeros cristianos, la resurrección lo cambió todo, también el calendario. Empezaron a reunirse el primer día de la semana, el del sepulcro vacío, al que llamaron «día del Señor». En latín, dies Dominicus: de ahí viene «domingo»." },
          { type: "p", text: "Y la fiesta más importante del año pasó a ser la Pascua de Resurrección, que se celebra el domingo siguiente a la primera luna llena de primavera. Por eso la Semana Santa cambia de fecha cada año." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo", "por-que-semana-santa-cambia-de-fecha", "existio-jesus"],
    quiz: [
      question("s2e10-mujeres", "¿Quién encontró primero el sepulcro vacío, según los evangelios?", ["Pedro y Juan", "Unas mujeres, entre ellas María Magdalena", "Los soldados romanos", "José de Arimatea"], 1, "En los cuatro evangelios aparece María Magdalena."),
      question("s2e10-antiguo", "¿Cuál es el texto más antiguo sobre la resurrección?", ["El evangelio de Juan", "Una carta de Pablo a los Corintios", "Los Hechos de los Apóstoles", "El evangelio de Marcos"], 1, "Escrita hacia el año 54, recoge una fórmula aún más antigua."),
      question("s2e10-domingo", "¿De dónde viene la palabra «domingo»?", ["Del dios Sol", "Del latín dies Dominicus, «día del Señor»", "De un santo llamado Domingo", "Del hebreo"], 1, "Los cristianos se reunían el día de la resurrección."),
    ],
    sources: [
      { text: "Evangelio de Marcos 16; evangelio de Lucas 24; evangelio de Juan 20 – 21; Primera carta a los Corintios 15" },
      { text: "N. T. Wright, La resurrección del Hijo de Dios, Verbo Divino, 2008" },
      { text: "Gerd Lüdemann, The Resurrection of Jesus, Fortress, 1994" },
    ],
    next: "En el próximo episodio: cuarenta días después, la última aparición. La Ascensión y el final de los evangelios.",
  },
});
