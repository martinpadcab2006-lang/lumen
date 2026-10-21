import { illustrations as chapterIllustrations } from "../../chapters/01-el-mundo-de-jesus/shared";
import type { Tema } from "../../tema-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Primaria 1.º–2.º, tema 1. Primer trimestre: empezar el curso conociéndonos y descubriendo la creación. */
export const nosConocemos: Tema = {
  level: "primaria-1",
  slug: "nos-conocemos",
  question: "¿Quién soy yo, quiénes son los demás y quién ha hecho este mundo tan bonito?",
  learn: [
    "Que cada persona es única y valiosa, y que Dios nos conoce por nuestro nombre.",
    "Que todos somos distintos y a la vez iguales: todos somos hijos de Dios.",
    "Cómo cuenta la Biblia que Dios creó el mundo.",
    "Cómo podemos dar gracias y cuidar la naturaleza.",
  ],
  intro:
    "Empieza el curso y en clase hay caras nuevas. En este tema nos vamos a conocer, vamos a descubrir que cada uno es un regalo y que el mundo entero es un regalo de Dios.",
  narrator: {
    name: "Natán",
    presentation:
      "Natán es un personaje inventado: un niño de Nazaret en tiempos de Jesús. Nos acompaña durante todo el curso.",
  },
  images: {
    creacionAdan: {
      kind: "arte",
      commonsFile: "Michelangelo - Creation of Adam (cropped).jpg",
      alt: "Dios, rodeado de ángeles, extiende el brazo hacia Adán; sus dedos casi se tocan.",
      title: "La creación de Adán",
      artist: "Miguel Ángel",
      date: "hacia 1511",
      museum: "Capilla Sixtina, Ciudad del Vaticano",
      caption:
        "Miguel Ángel pintó en el techo de la Capilla Sixtina el momento en que Dios da la vida al primer hombre. Fíjate en los dedos: están a punto de tocarse.",
    },
    sanFrancisco: {
      kind: "arte",
      commonsFile: "Giotto di Bondone - Legend of St Francis - 15. Sermon to the Birds - WGA09139.jpg",
      alt: "San Francisco, con su hábito marrón, habla a un grupo de pájaros posados en el suelo junto a un árbol.",
      title: "San Francisco predica a los pájaros",
      artist: "Atribuido a Giotto",
      date: "hacia 1297-1299",
      museum: "Basílica de San Francisco, Asís (Italia)",
      caption:
        "San Francisco de Asís llamaba «hermanos» al sol, a la luna, al agua y a los animales, porque todos son criaturas de Dios. En este cuadro les habla a los pájaros.",
    },
  },
  illustrations: {
    natan: chapterIllustrations.natan,
    amigos: {
      description: "Cuatro niños de Nazaret, distintos entre sí, se dan la mano en la calle de su pueblo.",
      alt: "Cuatro niños de Nazaret, distintos entre sí, se dan la mano.",
      src: "/ilustraciones/amigos.svg",
    },
    estrellas: {
      description: "De noche, Natán y su abuelo miran juntos el cielo lleno de estrellas.",
      alt: "Natán y su abuelo miran las estrellas de noche.",
      src: "/ilustraciones/estrellas.svg",
    },
    naturaleza: {
      description: "Un paisaje lleno de vida: el sol, pájaros, un lago con peces, árboles, flores, ovejas y un burro.",
      alt: "Un paisaje con sol, pájaros, un lago con peces, árboles, flores, ovejas y un burro.",
      src: "/ilustraciones/naturaleza.svg",
    },
  },
  characters: {},
  opening: [
    { type: "illustration", id: "natan" },
    { type: "narrator", text: "¡Hola! Me llamo Natán. Vivo en Nazaret, hace muchísimo tiempo. Este curso voy a estar contigo en clase de Religión. ¿Cómo te llamas tú?" },
    { type: "p", text: "Para empezar, haced un círculo. Cada uno dice su nombre y una cosa que le guste mucho. ¿Hay alguien a quien le guste lo mismo que a ti?" },
  ],
  lessons: [
    {
      title: "¿Quién eres tú?",
      blocks: [
        { type: "narrator", text: "En mi pueblo todos me conocen. Saben que me encanta correr, que tengo un hermano pequeño y que me da miedo la oscuridad." },
        { type: "p", text: "Cada persona es única. Nadie tiene tu cara, tu voz ni tu forma de reír. No hay nadie igual que tú en todo el mundo." },
        { type: "p", text: "Tu nombre es muy importante. Te lo pusieron las personas que te quieren. Y la Biblia dice que Dios también te conoce por tu nombre." },
        { type: "quote", text: "Te he llamado por tu nombre, tú eres mío.", source: "Libro de Isaías 43,1" },
        { type: "words", items: [{ term: "Único", meaning: "Que solo hay uno así. No hay otro igual." }, { term: "Biblia", meaning: "El libro sagrado donde Dios nos habla." }] },
        { type: "narrator", text: "Hay cosas que se me dan muy bien, como subir a los olivos. Y otras que me cuestan, como estar callado en la sinagoga. ¡A todos nos pasa!" },
      ],
      activities: [
        "Dibújate a ti mismo y escribe tu nombre en grande.",
        "Di una cosa que se te da bien y otra que te cuesta.",
        "Pregunta en casa por qué te pusieron tu nombre y cuéntalo mañana en clase.",
      ],
    },
    {
      title: "Distintos e iguales",
      blocks: [
        { type: "illustration", id: "amigos" },
        { type: "narrator", text: "Estos son mis amigos. Míriam es la más rápida. Leví es el más pequeño, pero el más gracioso. Y Sara siempre comparte su pan." },
        { type: "p", text: "Somos distintos: unos son altos y otros bajos, unos rubios y otros morenos, unos hablan mucho y otros poco. Y es estupendo, porque cada uno aporta algo." },
        { type: "p", text: "Pero también somos iguales: todos necesitamos que nos quieran, todos podemos aprender y todos somos hijos de Dios. Por eso nadie vale más que nadie." },
        { type: "fact", label: "En clase", text: "Una clase es como un equipo: si cada uno cuida a los demás, todos estamos mejor." },
        { type: "words", items: [{ term: "Respetar", meaning: "Tratar bien a los demás aunque sean distintos a mí." }] },
      ],
      activities: [
        "Busca a un compañero y encontrad juntos dos cosas en las que sois distintos y dos en las que os parecéis.",
        "Pensad entre todos tres normas para cuidarnos en clase y escribidlas en un cartel.",
        "Dibuja a tus amigos dándose la mano, como los amigos de Natán.",
      ],
    },
    {
      title: "Dios nos regala el mundo",
      blocks: [
        { type: "illustration", id: "estrellas" },
        { type: "narrator", text: "Por la noche, mi abuelo y yo miramos las estrellas. Él me cuenta cómo Dios hizo el mundo. Es mi historia favorita." },
        { type: "p", text: "La Biblia empieza con un relato precioso. Dios hizo la luz y separó el día de la noche. Hizo el cielo y el mar, la tierra y las plantas. Hizo el sol, la luna y las estrellas. Hizo los peces y los pájaros, y todos los animales." },
        { type: "illustration", id: "naturaleza" },
        { type: "p", text: "Al final, Dios hizo al hombre y a la mujer, parecidos a Él, y les regaló el mundo para que lo cuidaran. Cada vez que hacía algo, Dios veía que era bueno." },
        { type: "quote", text: "Y vio Dios que era bueno.", source: "Libro del Génesis 1" },
        { type: "image", id: "creacionAdan" },
        { type: "narrator", text: "Mi abuelo dice que todo lo que vemos es un regalo. Por eso, antes de comer, damos gracias a Dios." },
        { type: "image", id: "sanFrancisco" },
        { type: "p", text: "San Francisco de Asís quería mucho a la naturaleza. Llamaba «hermano sol» y «hermana agua» a todo lo que Dios había creado, y escribió una canción para darle gracias." },
        { type: "p", text: "Nosotros también podemos cuidar el mundo: no tirar papeles al suelo, no gastar agua sin necesidad, cuidar las plantas y tratar bien a los animales." },
        { type: "words", items: [{ term: "Crear", meaning: "Hacer algo nuevo que antes no existía." }, { term: "Naturaleza", meaning: "Todo lo que no ha hecho el ser humano: plantas, animales, el mar, el cielo…" }] },
      ],
      activities: [
        "Dibuja lo que más te gusta de la naturaleza y escribe debajo: «Gracias, Dios, por…».",
        "Ordena con tu grupo las tarjetas de la creación: luz, cielo y mar, plantas, sol y luna, peces y pájaros, animales y personas.",
        "Elige una forma de cuidar la naturaleza esta semana y cuéntala el viernes en clase.",
      ],
    },
  ],
  finalTask: {
    title: "Así somos: un mural y un pequeño jardín",
    description:
      "Entre todos vamos a hacer un mural con un dibujo de cada uno y, a su lado, un pequeño jardín de semillas que cuidaremos durante el curso.",
    steps: [
      "Cada uno pega en el mural su dibujo con su nombre y una cosa que le hace único.",
      "En el centro del mural escribimos con letras grandes: «Somos distintos, somos iguales, somos hijos de Dios».",
      "Ponemos unas lentejas sobre algodón mojado en un vaso, una por cada alumno, con su nombre.",
      "Repartimos turnos para regar el jardín cada día.",
      "Terminamos dando gracias juntos por los compañeros y por el mundo que Dios nos regala.",
    ],
    product: "Un mural de la clase con todos los alumnos y un semillero que se cuida por turnos.",
  },
  quiz: [
    { id: "p1-1-unico", prompt: "¿Hay alguien en el mundo exactamente igual que tú?", options: options("Sí, muchos", "No, cada persona es única", "Solo mi hermano"), correctId: "b", explanation: "Cada persona es única. Nadie tiene tu cara, tu voz ni tu forma de ser." },
    { id: "p1-1-nombre", prompt: "¿Qué dice la Biblia sobre tu nombre?", options: options("Que Dios no lo sabe", "Que Dios te conoce por tu nombre", "Que da igual"), correctId: "b", explanation: "«Te he llamado por tu nombre», dice Dios en el libro de Isaías." },
    { id: "p1-1-iguales", prompt: "¿En qué somos todos iguales?", options: options("En que todos somos hijos de Dios", "En que todos somos altos", "En que a todos nos gusta lo mismo"), correctId: "a", explanation: "Somos distintos por fuera, pero todos somos hijos de Dios y nadie vale más que nadie." },
    { id: "p1-1-crear", prompt: "Según la Biblia, ¿quién creó el mundo?", options: options("Los reyes", "Dios", "Los animales"), correctId: "b", explanation: "La Biblia cuenta que Dios creó el mundo y vio que era bueno." },
    { id: "p1-1-cuidar", prompt: "¿Cuál de estas cosas es cuidar la naturaleza?", options: options("Tirar papeles al suelo", "Dejar el grifo abierto", "Regar las plantas"), correctId: "c", explanation: "Regar las plantas es una forma de cuidar el mundo que Dios nos regala." },
  ],
  extension: [
    "Con tu familia, salid a dar un paseo y haced una lista de diez cosas bonitas de la naturaleza.",
    "Aprende la primera parte del «Cántico de las criaturas» de san Francisco con ayuda de tu profe.",
    "Haz una tarjeta para un compañero nuevo de clase dándole la bienvenida.",
  ],
  media: [],
  guide: {
    goals: [
      "Crear un buen clima de clase desde el primer día: conocerse, escucharse y acordar normas.",
      "Descubrir que cada persona es única y valiosa, y que Dios nos conoce por nuestro nombre.",
      "Valorar la diversidad: somos distintos e iguales en dignidad, como hijos de Dios.",
      "Conocer el relato de la creación (Génesis 1) y desarrollar actitudes de gratitud y cuidado de la naturaleza.",
    ],
    curriculum: {
      competences: [
        "CE1. Identidad personal: reconocer las propias capacidades y límites y la dignidad de cada persona.",
        "CE2. Dimensión socioemocional: crecer en las relaciones del grupo y aprender a convivir.",
        "CE3. Convivencia y bien común: cuidar a los demás y la naturaleza.",
        "CE5. Interioridad: el silencio, la contemplación y la gratitud.",
      ],
      knowledge: [
        "A. Capacidades y límites personales; la dignidad de toda persona como criatura de Dios.",
        "C. El cuidado de la naturaleza; la gratitud hacia quienes nos cuidan y hacia Dios Creador.",
      ],
    },
    ibProfile: [
      { attribute: "Reflexivos", how: "Piensan en lo que se les da bien y en lo que les cuesta." },
      { attribute: "Solidarios", how: "Acuerdan normas para cuidarse en clase y cuidan el semillero por turnos." },
      { attribute: "De mentalidad abierta", how: "Descubren que las diferencias entre compañeros son un valor." },
      { attribute: "Buenos comunicadores", how: "Se presentan ante el grupo y cuentan la historia de su nombre." },
      { attribute: "Equilibrados", how: "Viven momentos de silencio y gratitud junto al trabajo en grupo." },
    ],
    materials: [
      "Proyector o pizarra digital.",
      "Papel continuo para el mural, cartulinas, rotuladores y pegamento.",
      "Tarjetas con los días de la creación (luz, cielo y mar, plantas, sol y luna, peces y pájaros, animales y personas).",
      "Para el semillero: vasos, algodón, lentejas y agua.",
    ],
    sessions: [
      {
        title: "Sesión 1. Arranque y «¿Quién eres tú?»",
        steps: [
          { minutes: 10, title: "Círculo de nombres", description: "Cada alumno dice su nombre y algo que le guste. Usted empieza dando ejemplo." },
          { minutes: 5, title: "Conocemos a Natán", description: "Presente a Natán como el compañero que les acompañará todo el curso." },
          { minutes: 15, title: "Lección 1", description: "Lean juntos la lección. Deténgase en la cita de Isaías: «Te he llamado por tu nombre»." },
          { minutes: 15, title: "Mi dibujo", description: "Se dibujan a sí mismos con su nombre. Guarde los dibujos para el mural final." },
        ],
      },
      {
        title: "Sesión 2. «Distintos e iguales»",
        steps: [
          { minutes: 5, title: "¿Por qué me llamo así?", description: "Algunos cuentan lo que han averiguado en casa sobre su nombre." },
          { minutes: 15, title: "Lección 2", description: "Lean la lección mirando el dibujo de los amigos de Natán." },
          { minutes: 15, title: "Parejas", description: "Por parejas buscan dos diferencias y dos parecidos, y los cuentan al grupo." },
          { minutes: 10, title: "Normas de clase", description: "Acuerden tres normas para cuidarse y escríbanlas en un cartel que quede a la vista todo el curso." },
        ],
      },
      {
        title: "Sesión 3. «Dios nos regala el mundo»",
        steps: [
          { minutes: 5, title: "Silencio y estrellas", description: "Apague la luz, proyecte el dibujo de Natán y su abuelo, y pida un minuto de silencio mirando." },
          { minutes: 20, title: "Lección 3", description: "Lean el relato de la creación y comenten el cuadro de Miguel Ángel: ¿qué está pasando entre los dedos?" },
          { minutes: 15, title: "Tarjetas de la creación", description: "En grupos ordenan las tarjetas de los días de la creación." },
          { minutes: 5, title: "Gracias", description: "Cada uno dice en voz alta: «Gracias, Dios, por…»." },
        ],
      },
      {
        title: "Sesión 4. Tarea final y quiz",
        steps: [
          { minutes: 20, title: "El mural", description: "Peguen los dibujos de la sesión 1 alrededor del lema central." },
          { minutes: 10, title: "El semillero", description: "Cada uno prepara su vaso con algodón, lentejas y su nombre. Repartan los turnos de riego." },
          { minutes: 10, title: "Quiz", description: "Hagan el quiz juntos con el proyector." },
          { minutes: 5, title: "Oración de gracias", description: "Terminen dando gracias por los compañeros y por el mundo." },
        ],
      },
    ],
    dynamics: [
      { title: "La pelota de los nombres", description: "En círculo, quien tiene la pelota dice su nombre y el de la persona a quien la lanza. Ayuda a aprender los nombres en los primeros días." },
      { title: "El paseo de la creación", description: "Salgan al patio o al jardín del colegio y busquen algo de cada día de la creación: luz, cielo, plantas, animales…" },
      { title: "Estatuas iguales y distintas", description: "Al decir una consigna («los que tengan hermanos», «los que les guste el fútbol»), esos alumnos se quedan como estatuas. Todos acaban siendo estatua alguna vez." },
    ],
    answers: [
      "Quiz: las respuestas correctas se ven en la página al terminar.",
      "Orden de la creación en Génesis 1: luz; cielo y aguas; tierra, mares y plantas; sol, luna y estrellas; peces y aves; animales de la tierra y el ser humano; el séptimo día Dios descansa.",
      "Cuadro de Miguel Ángel: Dios, rodeado de ángeles, da la vida a Adán; los dedos que casi se tocan expresan ese momento.",
    ],
    rubric: [
      { criterion: "Se reconoce único y valioso", levels: ["Le cuesta decir algo propio.", "Dice algo que se le da bien.", "Dice algo que se le da bien, algo que le cuesta y lo acepta con naturalidad."] },
      { criterion: "Valora las diferencias", levels: ["Se fija solo en lo distinto.", "Encuentra diferencias y parecidos.", "Explica que todos valemos lo mismo porque somos hijos de Dios."] },
      { criterion: "Gratitud y cuidado de la naturaleza", levels: ["No relaciona la naturaleza con la creación.", "Sabe que Dios creó el mundo.", "Da gracias y propone formas concretas de cuidar la naturaleza."] },
    ],
    adaptations: {
      support: "Permita que los alumnos con más dificultad se presenten con un dibujo en vez de hablando. Use las tarjetas de la creación con imágenes y sin texto.",
      extension: "Los que terminen antes pueden escribir una oración corta de gracias o inventar una estrofa nueva para el «Cántico de las criaturas».",
    },
  },
};
