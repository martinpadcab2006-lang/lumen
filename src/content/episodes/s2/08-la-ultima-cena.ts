import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  jerusalen: holyLand.jerusalen,
};

export const laUltimaCena = makeEpisode({
  slug: "la-ultima-cena",
  title: "La Última Cena",
  period: "c. 30",
  cover: "The Last Supper - Leonardo Da Vinci - High Resolution 32x16.jpg",
  places,
  stops: [
    { id: "semana", year: "c. 30", place: "jerusalen" },
    { id: "cena", year: "c. 30", place: "jerusalen" },
    { id: "pan", year: "c. 30", place: "jerusalen" },
    { id: "pies", year: "c. 30", place: "jerusalen" },
    { id: "judas", year: "c. 30", place: "jerusalen" },
    { id: "leonardo", year: "1495 – 1498", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "La Última Cena",
    inAMinute: [
      "La última noche antes de morir, Jesús cenó con sus discípulos en Jerusalén, en los días de la Pascua.",
      "Partió el pan y compartió el vino diciendo que eran su cuerpo y su sangre.",
      "De esa cena nace la eucaristía, la misa, el rito central de casi todas las iglesias cristianas.",
      "Según Juan, lavó los pies a sus discípulos, un trabajo de esclavos.",
      "Judas salió de la cena para entregarlo.",
    ],
    intro:
      "Es una de las escenas más pintadas de la historia y la que se repite cada domingo en millones de iglesias de todo el mundo. Una cena entre amigos, la noche antes de una ejecución. Esto es lo que sabemos de ella.",
    sections: [
      {
        stop: "semana",
        heading: "Una semana en Jerusalén",
        blocks: [
          { type: "p", text: "Jesús llegó a Jerusalén unos días antes de la Pascua. Dormía fuera de la ciudad, probablemente en Betania, en casa de sus amigos Marta, María y Lázaro, y cada día bajaba al Templo a enseñar." },
          { type: "image", id: "entrada" },
          { type: "p", text: "La ciudad estaba llena de peregrinos, y el ambiente era tenso. Después del escándalo de los vendedores del Templo, las autoridades buscaban la manera de detenerlo sin provocar un tumulto." },
        ],
      },
      {
        stop: "cena",
        heading: "¿Una cena de Pascua?",
        blocks: [
          { type: "p", text: "Marcos, Mateo y Lucas presentan la última cena como la cena de Pascua, en la que los judíos comían el cordero recordando la salida de Egipto. El evangelio de Juan, en cambio, sitúa la muerte de Jesús en la víspera de la Pascua, a la hora en que se sacrificaban los corderos en el Templo." },
          { type: "p", text: "Los especialistas siguen discutiendo cuál de las dos cronologías es la correcta. En cualquier caso, la cena tuvo lugar en esos días, cargados del recuerdo de la liberación de Egipto, y en una sala en Jerusalén que la tradición llama el Cenáculo." },
          { type: "fact", label: "¿Jueves Santo?", text: "Los cristianos recuerdan la Última Cena el Jueves Santo, porque los evangelios dicen que Jesús murió al día siguiente, el viernes, víspera del sábado." },
        ],
      },
      {
        stop: "pan",
        heading: "«Esto es mi cuerpo»",
        blocks: [
          { type: "p", text: "Durante la cena, Jesús tomó pan, dio gracias, lo partió y lo repartió diciendo: «Esto es mi cuerpo». Después tomó una copa de vino: «Esta es mi sangre de la alianza, que se derrama por muchos». Pablo, que escribe unos veinticinco años después, añade: «Haced esto en memoria mía»." },
          { type: "p", text: "Es uno de los textos más antiguos del cristianismo. Desde el principio, los seguidores de Jesús se reunieron para repetir ese gesto. Lo llamaron «la fracción del pan», «la cena del Señor» y, más tarde, «eucaristía», que en griego significa «acción de gracias»." },
          { type: "fact", label: "Una diferencia entre iglesias", text: "Los católicos y los ortodoxos creen que en la misa el pan y el vino se convierten realmente en el cuerpo y la sangre de Cristo. Muchas iglesias protestantes lo entienden como una presencia espiritual o como un recuerdo. Es uno de los grandes debates de la Reforma." },
        ],
      },
      {
        stop: "pies",
        heading: "Un maestro que lava los pies",
        blocks: [
          { type: "p", text: "El evangelio de Juan no cuenta lo del pan y el vino, sino otra escena. Durante la cena, Jesús se levantó, se ató una toalla a la cintura y empezó a lavar los pies a sus discípulos, como hacía un esclavo con los invitados que llegaban de la calle con los pies sucios de polvo." },
          { type: "p", text: "Pedro se negó en redondo: ¿el maestro lavándole los pies a él? Jesús insistió y les dijo: «Os he dado ejemplo para que hagáis lo mismo que yo he hecho»." },
          { type: "fact", label: "Todavía se hace", text: "El Jueves Santo, en muchas iglesias, el sacerdote lava los pies a doce personas. Los últimos papas lo han hecho en cárceles y centros de refugiados." },
        ],
      },
      {
        stop: "judas",
        heading: "«Uno de vosotros me va a entregar»",
        blocks: [
          { type: "p", text: "En medio de la cena, Jesús anunció que uno de los que comían con él lo iba a entregar. Todos se preguntaron: «¿Seré yo?». Judas Iscariote salió de la sala. Según Juan, «era de noche»." },
          { type: "character", id: "judas" },
          { type: "p", text: "¿Por qué lo hizo? Mateo habla de treinta monedas de plata; Lucas y Juan dicen que «entró en él Satanás». Algunos han imaginado que estaba decepcionado porque Jesús no se levantaba contra Roma, o que quería forzarle a actuar. Nadie lo sabe. Lo que sí es casi seguro es que alguien del círculo íntimo lo entregó: los cristianos nunca se habrían inventado algo tan vergonzoso." },
        ],
      },
      {
        stop: "leonardo",
        heading: "La cena más famosa del arte",
        blocks: [
          { type: "image", id: "ultimaCena" },
          { type: "p", text: "Entre 1495 y 1498, Leonardo da Vinci pintó la Última Cena en la pared del comedor de un convento de Milán. Eligió el momento exacto en que Jesús dice que uno de ellos lo traicionará: los apóstoles se agitan en grupos de tres, como una ola, mientras Jesús, en el centro, permanece en calma." },
          { type: "p", text: "Leonardo experimentó con una técnica que no aguantó bien la humedad, y la pintura empezó a deteriorarse en vida del artista. Ha sobrevivido a siglos de abandono y a un bombardeo en 1943 que destruyó buena parte del convento. Hoy se visita en grupos pequeños y durante pocos minutos." },
        ],
      },
    ],
    relatedPills: ["por-que-semana-santa-cambia-de-fecha", "carne-en-cuaresma"],
    quiz: [
      question("s2e8-eucaristia", "¿Qué significa «eucaristía»?", ["Cena", "Acción de gracias", "Cuerpo", "Sacrificio"], 1, "Viene del griego eucharistía."),
      question("s2e8-pies", "¿Qué evangelio cuenta que Jesús lavó los pies a sus discípulos?", ["Marcos", "Mateo", "Lucas", "Juan"], 3, "Juan 13. Los otros tres cuentan, en cambio, lo del pan y el vino."),
      question("s2e8-leonardo", "¿Qué momento pintó Leonardo en la Última Cena?", ["Cuando Jesús parte el pan", "Cuando Jesús anuncia que uno lo traicionará", "Cuando lava los pies", "Cuando Judas sale"], 1, "Cada apóstol reacciona a su manera a la noticia."),
    ],
    sources: [
      { text: "Evangelio de Marcos 14, 12-25; evangelio de Juan 13; Primera carta a los Corintios 11, 23-26" },
      { text: "Joachim Jeremias, La última cena. Palabras de Jesús, Cristiandad" },
    ],
    next: "En el próximo episodio: Getsemaní, el arresto, el juicio ante Pilato y la cruz. Las últimas horas de Jesús.",
  },
});
