import { illustrations as chapterIllustrations, places } from "../../chapters/01-el-mundo-de-jesus/shared";
import type { Tema } from "../../tema-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Primaria 1.º–2.º, tema 6. Final del segundo trimestre: Cuaresma y Semana Santa. */
export const cuaresmaYSemanaSanta: Tema = {
  level: "primaria-1",
  slug: "cuaresma-y-semana-santa",
  question: "¿Qué recordamos en Semana Santa y por qué salen procesiones por las calles?",
  learn: [
    "Qué es la Cuaresma y cómo nos preparamos para la Pascua.",
    "Qué pasó el Domingo de Ramos y en la Última Cena.",
    "Que Jesús murió en la cruz por amor a todos.",
    "Qué son las procesiones y cómo se viven en nuestro pueblo.",
  ],
  intro:
    "En primavera, las calles de España se llenan de procesiones, de música y de olor a incienso. Es la Semana Santa. En este tema descubrimos qué recordamos y cómo nos preparamos.",
  narrator: {
    name: "Natán",
    presentation: "Natán es un personaje inventado: un muchacho que va a Jerusalén por la fiesta de la Pascua. Las escenas de Jesús las vemos en cuadros de grandes pintores.",
  },
  images: {
    entrada: {
      kind: "arte",
      commonsFile: "Brooklyn Museum - The Procession in the Streets of Jerusalem (Le cortège dans les rues de Jérusalem) - James Tissot - overall.jpg",
      alt: "Una multitud acompaña a Jesús por una calle de Jerusalén; la gente extiende mantos en el suelo y agita ramas.",
      title: "El cortejo por las calles de Jerusalén",
      artist: "James Tissot",
      date: "1886-1894",
      museum: "Brooklyn Museum, Nueva York",
      caption: "Jesús entra en Jerusalén y la gente le recibe con ramas y mantos, como a un rey.",
    },
    cena: {
      kind: "arte",
      commonsFile: "The Last Supper - Leonardo Da Vinci - High Resolution 32x16.jpg",
      alt: "Jesús, en el centro de una mesa larga, rodeado de los doce apóstoles, que hablan entre ellos sorprendidos.",
      title: "La Última Cena",
      artist: "Leonardo da Vinci",
      date: "1495-1498",
      museum: "Santa Maria delle Grazie, Milán (Italia)",
      caption: "Leonardo pintó el momento en que Jesús dice que uno de ellos le va a traicionar. ¡Mira las caras de sorpresa de los apóstoles!",
    },
    cruz: {
      kind: "arte",
      commonsFile: "Cristo crucificado.jpg",
      alt: "Jesús clavado en la cruz, sobre un fondo oscuro, con la cabeza inclinada.",
      title: "Cristo crucificado",
      artist: "Diego Velázquez",
      date: "hacia 1632",
      museum: "Museo del Prado, Madrid",
      caption: "Velázquez, el gran pintor sevillano, pintó a Jesús en la cruz con mucha serenidad. Es uno de los cuadros más conocidos del Prado.",
    },
  },
  illustrations: {
    natan: chapterIllustrations.natan,
    peregrinos: chapterIllustrations.peregrinos,
    ramos: {
      description: "Niños de hoy con palmas y ramas de olivo celebran el Domingo de Ramos a la puerta de una iglesia.",
      alt: "Niños con palmas y ramas de olivo el Domingo de Ramos.",
      src: "/ilustraciones/ramos.svg",
    },
    procesion: {
      description: "De noche, un paso con flores y velas avanza por una calle; delante van nazarenos con cirios y una familia lo mira desde la acera.",
      alt: "Una procesión de Semana Santa de noche, con el paso, los nazarenos y una familia mirando.",
      src: "/ilustraciones/procesion.svg",
    },
  },
  characters: {},
  places,
  opening: [
    { type: "illustration", id: "natan" },
    { type: "narrator", text: "¡Se acerca la Pascua! Toda mi familia se prepara para ir a Jerusalén. Este año ha pasado algo que no olvidaré nunca… Te lo cuento." },
    { type: "p", text: "¿Has visto alguna vez una procesión? ¿Qué te llamó la atención: la música, las velas, los pasos…?" },
  ],
  lessons: [
    {
      title: "Cuaresma: cuarenta días para cambiar el corazón",
      blocks: [
        { type: "p", text: "Antes de la Semana Santa hay un tiempo de cuarenta días que se llama Cuaresma. Empieza el Miércoles de Ceniza." },
        { type: "p", text: "Ese día, en la iglesia, el sacerdote pone un poco de ceniza en la frente y dice: «Conviértete y cree en el Evangelio». Es una forma de decir: «Vamos a cambiar lo que no hacemos bien»." },
        { type: "fact", label: "¿Por qué cuarenta?", text: "Porque Jesús pasó cuarenta días en el desierto rezando antes de empezar a predicar." },
        { type: "p", text: "En Cuaresma intentamos rezar un poco más, compartir con los que tienen menos y portarnos mejor. Su color es el morado, como en Adviento." },
        { type: "words", items: [{ term: "Cuaresma", meaning: "Los cuarenta días antes de la Semana Santa para prepararnos." }, { term: "Miércoles de Ceniza", meaning: "El día en que empieza la Cuaresma." }] },
      ],
      activities: [
        "Haz una lista de tres cosas que puedes mejorar en Cuaresma.",
        "Prepara con tu clase una hucha para compartir con quien lo necesita.",
        "Colorea un calendario de Cuaresma con cuarenta casillas, una por día.",
      ],
    },
    {
      title: "Domingo de Ramos y la Última Cena",
      blocks: [
        { type: "illustration", id: "peregrinos" },
        { type: "narrator", text: "¡Llegamos a Jerusalén y había muchísima gente! Jesús entró montado en un burrito y todos le saludaban con ramas de palmera y de olivo gritando: «¡Hosanna!»." },
        { type: "map", place: "jerusalen" },
        { type: "image", id: "entrada" },
        { type: "p", text: "Por eso, el Domingo de Ramos llevamos palmas y ramas de olivo a la iglesia para bendecirlas." },
        { type: "illustration", id: "ramos" },
        { type: "p", text: "El jueves, Jesús cenó con sus doce apóstoles. Partió el pan, se lo dio y les dijo que era su cuerpo. Después les lavó los pies, para enseñarles a servir a los demás." },
        { type: "image", id: "cena" },
        { type: "fact", label: "Jueves Santo", text: "Ese día recordamos la Última Cena. En cada misa, los cristianos repiten lo que Jesús hizo con el pan y el vino." },
        { type: "words", items: [{ term: "Hosanna", meaning: "Un grito de alegría y alabanza, como decir «¡Viva!»." }] },
      ],
      activities: [
        "Haz una palma de papel para el Domingo de Ramos.",
        "Mira el cuadro de Leonardo: cuenta a los apóstoles. ¿Cuántos hay a cada lado de Jesús?",
        "Lavar los pies era un trabajo de servicio. ¿Cómo puedes servir tú a los demás en casa?",
      ],
    },
    {
      title: "La cruz y las procesiones",
      blocks: [
        { type: "p", text: "El viernes, Jesús fue detenido y condenado a morir en una cruz, aunque no había hecho nada malo. Antes de morir, perdonó a los que le hacían daño." },
        { type: "image", id: "cruz" },
        { type: "p", text: "Los cristianos creemos que Jesús dio su vida por amor a todas las personas. Por eso el Viernes Santo es un día de silencio y de respeto." },
        { type: "narrator", text: "Ese día todos estábamos muy tristes. Pero María, su madre, y algunos amigos se quedaron con Él hasta el final." },
        { type: "illustration", id: "procesion" },
        { type: "p", text: "En Semana Santa salen las procesiones. Los pasos llevan imágenes de Jesús y de la Virgen, y los costaleros los llevan sobre sus hombros. Los nazarenos acompañan con velas, y la música de las bandas suena por las calles." },
        { type: "p", text: "Las procesiones son una forma de rezar en la calle y de recordar, con arte y música, lo que Jesús vivió." },
        { type: "fact", label: "Pero la historia no acaba aquí…", text: "Al tercer día pasó algo increíble. ¡Lo descubriremos en el próximo tema!" },
        { type: "words", items: [{ term: "Paso", meaning: "La plataforma con imágenes que se lleva en las procesiones." }, { term: "Nazareno", meaning: "La persona que acompaña la procesión con túnica y, a veces, con capirote." }] },
      ],
      activities: [
        "Dibuja una procesión de tu pueblo o de tu ciudad.",
        "Pregunta en casa: ¿alguien de tu familia sale en una procesión? ¿En cuál?",
        "Haz una cruz de papel y escribe en ella una palabra: «amor», «perdón» o «paz».",
      ],
    },
  ],
  finalTask: {
    title: "Nuestro mural de la Semana Santa",
    description: "Por grupos vamos a hacer un gran mural con los días de la Semana Santa, del Domingo de Ramos al Viernes Santo, y con las procesiones de nuestro pueblo.",
    steps: [
      "Repartimos los días: Domingo de Ramos, Jueves Santo y Viernes Santo. Un grupo hace las procesiones de nuestro pueblo.",
      "Cada grupo dibuja su escena y escribe una frase que explique qué pasó.",
      "Pegamos las escenas en orden en un papel continuo, como una línea del tiempo.",
      "Añadimos las palmas de papel que hemos hecho alrededor del mural.",
      "Cada grupo explica su parte y terminamos con un momento de silencio.",
    ],
    product: "Un mural en orden con los días de la Semana Santa y las procesiones del pueblo, explicado por grupos.",
  },
  quiz: [
    { id: "p1-6-cuaresma", prompt: "¿Cuántos días dura la Cuaresma?", options: options("Siete", "Cuarenta", "Cien"), correctId: "b", explanation: "La Cuaresma dura cuarenta días, como los que Jesús pasó en el desierto." },
    { id: "p1-6-ramos", prompt: "¿Cómo recibió la gente a Jesús en Jerusalén?", options: options("Con ramas y gritos de alegría", "Con piedras", "No le hicieron caso"), correctId: "a", explanation: "Le recibieron con ramas de palmera y olivo gritando «¡Hosanna!»." },
    { id: "p1-6-cena", prompt: "¿Qué hizo Jesús en la Última Cena?", options: options("Se fue a dormir", "Partió el pan con sus amigos y les lavó los pies", "Contó un chiste"), correctId: "b", explanation: "Jesús partió el pan, lo compartió y lavó los pies a sus apóstoles." },
    { id: "p1-6-cruz", prompt: "¿Por qué dio Jesús su vida?", options: options("Por amor a todos", "Porque estaba enfadado", "Por casualidad"), correctId: "a", explanation: "Los cristianos creemos que Jesús dio su vida por amor a todas las personas." },
    { id: "p1-6-paso", prompt: "¿Qué es un paso de Semana Santa?", options: options("Un baile", "La plataforma con imágenes que se lleva en las procesiones", "Un tipo de pan"), correctId: "b", explanation: "Los pasos llevan las imágenes de Jesús y de la Virgen por las calles." },
  ],
  extension: [
    "Si puedes, ve con tu familia a ver una procesión y fíjate en la música, los pasos y los nazarenos.",
    "Pregunta a tus abuelos cómo vivían la Semana Santa cuando eran niños.",
    "Busca qué dulces se comen en Semana Santa en tu pueblo, como las torrijas o los pestiños.",
  ],
  media: [],
  guide: {
    goals: [
      "Conocer la Cuaresma como tiempo de preparación y sus signos (ceniza, color morado, compartir).",
      "Conocer los hechos centrales de la Semana Santa: entrada en Jerusalén, Última Cena y muerte de Jesús.",
      "Comprender la muerte de Jesús como entrega por amor, sin quedarse en la tristeza (se abre al tema de la Pascua).",
      "Valorar las procesiones como expresión de fe y patrimonio cultural del entorno.",
    ],
    curriculum: {
      competences: [
        "CE4. Patrimonio cultural: la Semana Santa en el arte y en las tradiciones del entorno.",
        "CE5. Interioridad: el silencio y la oración en la Cuaresma.",
        "CE6. Contenidos básicos del cristianismo: la pasión y muerte de Jesús.",
      ],
      knowledge: [
        "B. La Semana Santa y otras celebraciones; el mensaje cristiano en la música y en las artes; Jesucristo como centro.",
        "C. El compartir con los demás como forma de vivir la Cuaresma.",
      ],
    },
    ibProfile: [
      { attribute: "Informados e instruidos", how: "Ordenan los hechos de la Semana Santa." },
      { attribute: "De mentalidad abierta", how: "Conocen el sentido religioso de una tradición de su entorno." },
      { attribute: "Solidarios", how: "Comparten con quien lo necesita durante la Cuaresma." },
      { attribute: "Reflexivos", how: "Piensan qué pueden mejorar en Cuaresma." },
    ],
    materials: [
      "Proyector o pizarra digital.",
      "Papel continuo, cartulinas y lápices de colores para el mural.",
      "Papel verde o amarillo para las palmas.",
      "Opcional: música de marchas procesionales para la última sesión.",
    ],
    sessions: [
      {
        title: "Sesión 1. Arranque y «Cuaresma»",
        steps: [
          { minutes: 10, title: "¿Has visto una procesión?", description: "Recoja lo que saben y lo que han visto en su pueblo." },
          { minutes: 15, title: "Lección 1", description: "Lean la lección sobre la Cuaresma y la ceniza." },
          { minutes: 15, title: "Mis propósitos", description: "Cada uno escribe tres cosas que puede mejorar; preparen la hucha de clase." },
          { minutes: 5, title: "Oración", description: "Un momento breve de silencio." },
        ],
      },
      {
        title: "Sesión 2. «Domingo de Ramos y la Última Cena»",
        steps: [
          { minutes: 15, title: "Lección 2", description: "Lean la entrada en Jerusalén y la Última Cena; comenten los cuadros de Tissot y Leonardo." },
          { minutes: 20, title: "Palmas de papel", description: "Cada alumno hace una palma para el mural." },
          { minutes: 10, title: "Servir", description: "Hablen del lavatorio de pies y de formas de servir en casa y en clase." },
        ],
      },
      {
        title: "Sesión 3. «La cruz y las procesiones»",
        steps: [
          { minutes: 15, title: "Lección 3", description: "Lean con calma la muerte de Jesús, poniendo el acento en el amor y el perdón. Comenten el cuadro de Velázquez." },
          { minutes: 15, title: "Procesiones de aquí", description: "Hablen de las procesiones del pueblo; si es posible, ponga una marcha procesional." },
          { minutes: 10, title: "Cruz de palabras", description: "Hacen una cruz de papel con una palabra: amor, perdón o paz." },
          { minutes: 5, title: "Esperanza", description: "Anuncie que la historia continúa en el próximo tema: la Pascua." },
        ],
      },
      {
        title: "Sesión 4. Tarea final y quiz",
        steps: [
          { minutes: 25, title: "El mural", description: "Por grupos dibujan su escena y la pegan en orden." },
          { minutes: 10, title: "Explicación", description: "Cada grupo explica su parte." },
          { minutes: 10, title: "Quiz", description: "Quiz en voz alta." },
        ],
      },
    ],
    dynamics: [
      { title: "Procesión de Ramos en el patio", description: "Con las palmas de papel, recorran el patio cantando, como la gente que recibió a Jesús en Jerusalén." },
      { title: "La hucha de Cuaresma", description: "Durante la Cuaresma, la clase ahorra pequeños gestos o monedas para una causa solidaria del colegio o de Cáritas." },
      { title: "Visita de un cofrade", description: "Invite a un familiar que salga en una hermandad para que cuente qué hace y por qué." },
    ],
    answers: [
      "Quiz: las respuestas correctas se ven en la página al terminar.",
      "En el cuadro de Leonardo hay seis apóstoles a cada lado de Jesús, agrupados de tres en tres.",
      "Textos: entrada en Jerusalén (Mateo 21,1-11), Última Cena (Mateo 26,26-29) y lavatorio de los pies (Juan 13,1-15), pasión y muerte (Lucas 23).",
      "Con alumnos pequeños conviene no detenerse en detalles dolorosos de la pasión y terminar siempre con la esperanza de la Pascua.",
    ],
    rubric: [
      { criterion: "Conoce la Cuaresma", levels: ["No sabe qué es.", "Sabe que va antes de la Semana Santa.", "Explica su duración, sus signos y propone cómo vivirla."] },
      { criterion: "Ordena la Semana Santa", levels: ["Confunde los días.", "Ordena con ayuda.", "Ordena Ramos, Jueves y Viernes y dice qué pasó en cada uno."] },
      { criterion: "Valora las procesiones", levels: ["No las relaciona con la fe.", "Sabe que recuerdan a Jesús.", "Explica qué son los pasos y los nazarenos y su sentido."] },
    ],
    adaptations: {
      support: "Trabaje los tres días con tarjetas de imágenes que se ordenan, sin texto.",
      extension: "Buscar el nombre de una cofradía o hermandad del pueblo y qué imagen lleva en procesión.",
    },
  },
};
