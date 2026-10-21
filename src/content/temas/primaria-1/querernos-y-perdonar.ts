import { illustrations as chapterIllustrations } from "../../chapters/01-el-mundo-de-jesus/shared";
import type { Tema } from "../../tema-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Primaria 1.º–2.º, tema 5. Segundo trimestre: parábolas, milagros y perdón. */
export const querernosYPerdonar: Tema = {
  level: "primaria-1",
  slug: "querernos-y-perdonar",
  question: "¿Qué nos enseñó Jesús sobre querer a los demás y sobre perdonar?",
  learn: [
    "Que Jesús enseñaba con historias llamadas parábolas.",
    "Qué cuentan la parábola de la oveja perdida y la del buen samaritano.",
    "Que Jesús curaba a los enfermos y perdonaba a todos, como a Zaqueo.",
    "Cómo podemos hacer las paces cuando nos enfadamos.",
  ],
  intro:
    "Jesús iba de pueblo en pueblo contando historias que todos entendían. Con ellas enseñaba algo muy importante: Dios nos quiere a todos y nosotros tenemos que querernos y perdonarnos.",
  narrator: {
    name: "Natán",
    presentation: "Natán es un personaje inventado: un muchacho de Nazaret que escucha a Jesús y nos lo cuenta.",
  },
  images: {
    samaritano: {
      kind: "arte",
      commonsFile: "Brooklyn Museum - The Good Samaritan (Le bon samaritain) - James Tissot - overall.jpg",
      alt: "El samaritano atiende al hombre herido que encontró en el camino.",
      title: "El buen samaritano",
      artist: "James Tissot",
      date: "1886-1894",
      museum: "Brooklyn Museum, Nueva York",
      caption: "El samaritano se para a ayudar al hombre herido, aunque no lo conoce. Los demás habían pasado de largo.",
    },
  },
  illustrations: {
    natan: chapterIllustrations.natan,
    pastor: {
      description: "Un pastor busca entre las rocas de una colina a una oveja perdida, mientras el resto del rebaño espera.",
      alt: "Un pastor encuentra a su oveja perdida entre las rocas.",
      src: "/ilustraciones/pastor.svg",
    },
    zaqueo: {
      description: "Un hombre bajito se ha subido a un árbol para ver pasar a Jesús entre la gente.",
      alt: "Zaqueo, subido a un árbol, mira a la gente que pasa por el camino.",
      src: "/ilustraciones/zaqueo.svg",
    },
    paces: {
      description: "Dos niños de Nazaret que se habían enfadado se dan la mano y sonríen.",
      alt: "Dos niños hacen las paces dándose la mano.",
      src: "/ilustraciones/paces.svg",
    },
  },
  characters: {},
  opening: [
    { type: "illustration", id: "natan" },
    { type: "narrator", text: "Ayer me peleé con mi amigo Leví por una pelota. Estoy enfadado… Pero hoy he oído a Jesús contar unas historias que me han hecho pensar." },
    { type: "p", text: "¿Te has enfadado alguna vez con un amigo? ¿Cómo hicisteis las paces?" },
  ],
  lessons: [
    {
      title: "La oveja perdida",
      blocks: [
        { type: "p", text: "Jesús contaba historias sencillas para enseñar cosas muy importantes. Esas historias se llaman parábolas." },
        { type: "illustration", id: "pastor" },
        { type: "p", text: "Un pastor tenía cien ovejas. Un día, una se perdió. El pastor dejó a las otras noventa y nueve y fue a buscarla por los montes hasta que la encontró. ¡Qué contento volvió a casa con ella sobre los hombros!" },
        { type: "narrator", text: "¡Yo conozco a pastores así! Cuando se pierde una cabra, la buscan hasta de noche." },
        { type: "p", text: "Jesús dijo que Dios es como ese pastor: nos quiere tanto a cada uno que nos busca siempre, aunque nos equivoquemos o nos alejemos." },
        { type: "words", items: [{ term: "Parábola", meaning: "Una historia sencilla que contaba Jesús para enseñar algo sobre Dios." }] },
      ],
      activities: [
        "Dibuja al pastor con la oveja sobre los hombros.",
        "¿Por qué crees que el pastor fue a buscar solo a una oveja si tenía otras noventa y nueve?",
        "Juego en clase: escondemos una oveja de papel y entre todos la buscamos.",
      ],
    },
    {
      title: "El buen samaritano",
      blocks: [
        { type: "p", text: "Una vez le preguntaron a Jesús: «¿Quién es mi prójimo?». Y Jesús contó esta historia." },
        { type: "p", text: "Un hombre iba por un camino y unos ladrones le robaron y le dejaron herido. Pasó un sacerdote y siguió de largo. Pasó otro hombre importante y también siguió de largo." },
        { type: "p", text: "Entonces pasó un samaritano, alguien de un pueblo con el que los judíos no se llevaban bien. Se paró, le curó las heridas, lo subió a su burro y lo llevó a una posada para que lo cuidaran." },
        { type: "image", id: "samaritano" },
        { type: "p", text: "Jesús preguntó: «¿Quién se portó como prójimo del herido?». Y le respondieron: «El que tuvo compasión de él». Jesús dijo: «Pues ve y haz tú lo mismo»." },
        { type: "fact", label: "Prójimo", text: "Prójimo quiere decir «el que está cerca». Para Jesús, nuestro prójimo es cualquier persona que nos necesita, aunque no sea de nuestro grupo." },
        { type: "words", items: [{ term: "Compasión", meaning: "Sentir pena por el que sufre y querer ayudarle." }] },
      ],
      activities: [
        "Representad la parábola por grupos: el herido, el sacerdote, el otro hombre y el samaritano.",
        "¿Quién necesita ayuda cerca de ti? Piensa en alguien de tu clase o de tu casa.",
        "Dibuja una forma de ser «buen samaritano» en el patio.",
      ],
    },
    {
      title: "Jesús cura y perdona",
      blocks: [
        { type: "narrator", text: "He visto cómo Jesús se acerca a los enfermos. Les toca, les habla con cariño… y se curan. ¡La gente no se lo puede creer!" },
        { type: "p", text: "Jesús curaba a los enfermos: a ciegos, a cojos, a personas que nadie quería tocar. Así mostraba que Dios quiere que todos estemos bien." },
        { type: "illustration", id: "zaqueo" },
        { type: "p", text: "En Jericó vivía Zaqueo, un cobrador de impuestos que se quedaba con dinero de los demás. Nadie le quería. Era bajito y se subió a un árbol para ver a Jesús." },
        { type: "p", text: "Jesús se paró, le miró y le dijo: «Zaqueo, baja, que hoy voy a tu casa». Zaqueo se puso tan contento que cambió: devolvió el dinero y dio la mitad de lo que tenía a los pobres." },
        { type: "p", text: "Jesús perdona siempre. Y nos pide que nosotros también perdonemos." },
        { type: "illustration", id: "paces" },
        { type: "narrator", text: "Ya sé lo que voy a hacer. Mañana buscaré a Leví y le pediré perdón. ¡Echo de menos jugar con él!" },
        { type: "fact", label: "Para hacer las paces", text: "1. Me calmo y respiro. 2. Digo cómo me siento. 3. Escucho al otro. 4. Pedimos perdón y perdonamos. 5. ¡Volvemos a jugar!" },
        { type: "words", items: [{ term: "Perdonar", meaning: "Dejar de estar enfadado con alguien que nos ha hecho daño y volver a quererle." }] },
      ],
      activities: [
        "Mira el dibujo de Zaqueo: ¿por qué se subió al árbol? ¿Qué le dijo Jesús?",
        "Aprended los cinco pasos para hacer las paces y practicadlos por parejas.",
        "Piensa si tienes que pedir perdón a alguien. Puedes hacerle un dibujo.",
      ],
    },
  ],
  finalTask: {
    title: "El rincón de la paz",
    description: "Vamos a preparar un rincón en clase al que ir cuando nos enfademos, para calmarnos y hacer las paces.",
    steps: [
      "Elegimos un rincón de la clase y lo decoramos con dibujos de la oveja perdida, el buen samaritano y Zaqueo.",
      "Hacemos un cartel grande con los cinco pasos para hacer las paces.",
      "Preparamos tarjetas con frases: «Lo siento», «Te perdono», «¿Volvemos a jugar?».",
      "Ponemos un cojín o una alfombra y una flor de papel que se pasan los que hacen las paces.",
      "Lo estrenamos: cada pareja practica los pasos en el rincón.",
    ],
    product: "Un rincón de la paz en clase, con cartel, tarjetas y dibujos, que se usa durante todo el curso.",
  },
  quiz: [
    { id: "p1-5-parabola", prompt: "¿Cómo se llaman las historias que contaba Jesús?", options: options("Cuentos de hadas", "Parábolas", "Noticias"), correctId: "b", explanation: "Jesús enseñaba con historias sencillas llamadas parábolas." },
    { id: "p1-5-oveja", prompt: "¿Qué hizo el pastor cuando se le perdió una oveja?", options: options("Se olvidó de ella", "La buscó hasta encontrarla", "Compró otra"), correctId: "b", explanation: "El pastor buscó a la oveja hasta encontrarla. Así nos quiere Dios." },
    { id: "p1-5-samaritano", prompt: "¿Quién ayudó al hombre herido?", options: options("El sacerdote", "Nadie", "El samaritano"), correctId: "c", explanation: "El samaritano se paró a ayudarle, aunque no lo conocía." },
    { id: "p1-5-zaqueo", prompt: "¿Dónde se subió Zaqueo para ver a Jesús?", options: options("A un árbol", "A un tejado", "A un camello"), correctId: "a", explanation: "Zaqueo era bajito y se subió a un árbol." },
    { id: "p1-5-perdon", prompt: "¿Qué nos pide Jesús cuando alguien nos hace daño?", options: options("Vengarnos", "Perdonar", "No hablarle nunca más"), correctId: "b", explanation: "Jesús perdona siempre y nos pide que nosotros también perdonemos." },
  ],
  extension: [
    "Cuenta en casa la parábola de la oveja perdida y pregunta a tu familia qué les parece.",
    "Esta semana, haz algo bueno por alguien que no sea tu amigo, como el buen samaritano.",
    "Inventa con tu familia una parábola sobre el perdón con personajes de hoy.",
  ],
  media: [],
  guide: {
    goals: [
      "Conocer qué es una parábola y comprender la de la oveja perdida y la del buen samaritano.",
      "Descubrir a Jesús que cura y perdona, a través de los milagros y del encuentro con Zaqueo.",
      "Aprender y practicar pasos concretos para resolver conflictos de forma pacífica.",
      "Crear en el aula un espacio estable para la reconciliación.",
    ],
    curriculum: {
      competences: [
        "CE2. Dimensión socioemocional: gestionar emociones y relaciones.",
        "CE3. Convivencia y bien común: resolver los conflictos de forma pacífica.",
        "CE6. Contenidos básicos del cristianismo: el amor de Jesús y el mandamiento del amor.",
      ],
      knowledge: [
        "C. El amor de Jesús; el mandamiento del amor y la fraternidad; relatos de compasión, misericordia y perdón; la resolución pacífica de conflictos.",
        "A. Figuras bíblicas como modelos de vida.",
      ],
    },
    ibProfile: [
      { attribute: "Solidarios", how: "Identifican quién necesita ayuda a su alrededor, como el samaritano." },
      { attribute: "Equilibrados", how: "Aprenden a calmarse y a gestionar el enfado." },
      { attribute: "Buenos comunicadores", how: "Expresan cómo se sienten y escuchan al otro al hacer las paces." },
      { attribute: "Íntegros", how: "Reconocen sus errores y piden perdón." },
    ],
    materials: [
      "Proyector o pizarra digital.",
      "Una oveja de papel para el juego de la lección 1.",
      "Cartulinas, rotuladores, un cojín o alfombra y una flor de papel para el rincón de la paz.",
    ],
    sessions: [
      {
        title: "Sesión 1. Arranque y «La oveja perdida»",
        steps: [
          { minutes: 10, title: "El enfado de Natán", description: "Lean el arranque y hablen de alguna pelea y de cómo se resolvió." },
          { minutes: 15, title: "Lección 1", description: "Expliquen qué es una parábola y lean la oveja perdida." },
          { minutes: 15, title: "¡A buscar la oveja!", description: "Escondan una oveja de papel en clase y búsquenla todos." },
          { minutes: 5, title: "Cierre", description: "¿En qué se parece Dios al pastor?" },
        ],
      },
      {
        title: "Sesión 2. «El buen samaritano»",
        steps: [
          { minutes: 15, title: "Lección 2", description: "Lean la parábola y comenten el cuadro de Tissot." },
          { minutes: 20, title: "Dramatización", description: "Por grupos representan la parábola; cambien los papeles." },
          { minutes: 10, title: "Mi prójimo", description: "Cada uno piensa en alguien que necesita ayuda y cómo ayudarle." },
        ],
      },
      {
        title: "Sesión 3. «Jesús cura y perdona»",
        steps: [
          { minutes: 15, title: "Lección 3", description: "Lean los milagros y la historia de Zaqueo." },
          { minutes: 15, title: "Los cinco pasos", description: "Expliquen los pasos para hacer las paces y practíquenlos por parejas con situaciones inventadas." },
          { minutes: 10, title: "Un dibujo de perdón", description: "Quien quiera hace un dibujo para alguien a quien quiere pedir perdón." },
          { minutes: 5, title: "Oración", description: "Recen juntos el «perdónanos como nosotros perdonamos» del Padrenuestro." },
        ],
      },
      {
        title: "Sesión 4. Tarea final y quiz",
        steps: [
          { minutes: 25, title: "El rincón de la paz", description: "Preparen el cartel, las tarjetas y la decoración del rincón." },
          { minutes: 10, title: "Estreno", description: "Cada pareja practica los pasos en el rincón." },
          { minutes: 10, title: "Quiz", description: "Quiz en voz alta." },
        ],
      },
    ],
    dynamics: [
      { title: "El semáforo de las emociones", description: "Rojo: paro y respiro. Amarillo: pienso qué siento y qué ha pasado. Verde: hablo y buscamos una solución." },
      { title: "Teatro de sombras", description: "Con una sábana y una linterna, representen la parábola del buen samaritano." },
      { title: "La silla de Zaqueo", description: "Un alumno se sube a una silla (con cuidado) y los demás le dicen algo bonito, como hizo Jesús con Zaqueo." },
    ],
    answers: [
      "Quiz: las respuestas correctas se ven en la página al terminar.",
      "Textos: la oveja perdida (Lucas 15,4-7), el buen samaritano (Lucas 10,25-37) y Zaqueo (Lucas 19,1-10).",
      "Los samaritanos vivían en Samaria, entre Galilea y Judea; judíos y samaritanos estaban enfrentados por motivos religiosos. Por eso sorprende que el héroe de la parábola sea un samaritano.",
    ],
    rubric: [
      { criterion: "Comprende las parábolas", levels: ["No las recuerda.", "Cuenta una parábola.", "Cuenta las dos y explica qué enseñan."] },
      { criterion: "Conoce a Jesús que perdona", levels: ["No relaciona a Jesús con el perdón.", "Recuerda la historia de Zaqueo.", "Explica que Jesús perdona y nos pide perdonar."] },
      { criterion: "Resuelve conflictos", levels: ["No aplica los pasos.", "Aplica algunos pasos con ayuda.", "Usa los cinco pasos por sí mismo."] },
    ],
    adaptations: {
      support: "Use tarjetas con dibujos para los cinco pasos y deje que los alumnos los señalen en lugar de decirlos.",
      extension: "Los que terminen antes pueden leer en una Biblia infantil la parábola del hijo pródigo y contarla a la clase.",
    },
  },
};
