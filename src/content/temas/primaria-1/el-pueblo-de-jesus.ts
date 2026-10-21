import { images, illustrations, media, places } from "../../chapters/01-el-mundo-de-jesus/shared";
import type { Tema } from "../../tema-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** Primaria 1.º–2.º, tema 2. Primer trimestre. Lleva dentro el capítulo 1 de la historia. */
export const elPuebloDeJesus: Tema = {
  level: "primaria-1",
  slug: "el-pueblo-de-jesus",
  question: "¿Cómo era la vida de un niño como tú hace 2000 años, en el pueblo de Jesús?",
  learn: [
    "Dónde vivió Jesús cuando era niño.",
    "Cómo eran las casas, la comida y los juegos en Nazaret.",
    "Cómo era la familia de Jesús: María, José y Jesús.",
    "Cómo rezaban las familias y por qué iban al Templo de Jerusalén.",
  ],
  intro:
    "Jesús no vivió en un lugar inventado. Creció en un pueblo de verdad, con casas, calles y vecinos. En este tema lo vamos a conocer de la mano de Natán.",
  narrator: {
    name: "Natán",
    presentation:
      "Natán es un personaje inventado: un niño de Nazaret en tiempos de Jesús. Lo que cuenta está basado en lo que sabemos de cómo se vivía entonces.",
  },
  images,
  illustrations: {
    ...illustrations,
    juegos: {
      description: "Niños de Nazaret juegan a las tabas sentados en la calle, delante de sus casas de piedra.",
      alt: "Niños de Nazaret juegan a las tabas en la calle.",
      src: "/ilustraciones/juegos.svg",
    },
  },
  characters: {},
  places,
  opening: [
    { type: "illustration", id: "natan" },
    { type: "narrator", text: "¡Hola! Me llamo Natán y tengo 8 años. Vivo en Nazaret, el mismo pueblo que Jesús. ¿Quieres saber cómo es mi vida? ¡Vamos!" },
    { type: "p", text: "Antes de empezar, piensa: ¿qué cosas hay en tu casa que Natán no tenía? ¿Y qué cosas crees que sí teníais los dos?" },
  ],
  lessons: [
    {
      title: "Mi pueblo, Nazaret",
      blocks: [
        { type: "narrator", text: "Mi pueblo es muy pequeño. Todos nos conocemos. Hay casas de piedra, muchos olivos y cabras por todas partes." },
        { type: "map", place: "nazaret" },
        { type: "p", text: "Nazaret está en Galilea, al norte del país de Jesús. Galilea tiene colinas verdes, campos de trigo y un lago muy grande." },
        { type: "p", text: "Hoy a ese país lo llamamos Tierra Santa, porque allí vivió Jesús." },
        { type: "words", items: [{ term: "Aldea", meaning: "Un pueblo muy pequeño." }, { term: "Galilea", meaning: "La región del norte donde creció Jesús." }] },
        { type: "illustration", id: "soldados" },
        { type: "narrator", text: "A veces pasan soldados romanos por el camino. Vienen de muy lejos, de Roma. Mi padre dice que ellos mandan en nuestro país." },
        { type: "p", text: "En aquella época, el país de Jesús estaba gobernado por los romanos. Roma tenía un imperio enorme." },
        { type: "words", items: [{ term: "Imperio", meaning: "Muchos países gobernados por un solo jefe, el emperador." }] },
      ],
      activities: [
        "Busca Nazaret en el mapa. ¿Está arriba o abajo? Ahora busca Jerusalén.",
        "Dibuja el pueblo de Natán: casas de piedra, olivos y cabras.",
        "¿Tu pueblo o tu ciudad es grande o pequeño? Cuéntalo en voz alta.",
      ],
    },
    {
      title: "Un día en casa de Natán",
      blocks: [
        { type: "illustration", id: "casa" },
        { type: "narrator", text: "Mi casa es de piedra y tiene una sola habitación. Ahí comemos y dormimos todos juntos. Por la noche encendemos una lámpara de aceite." },
        { type: "illustration", id: "pan" },
        { type: "narrator", text: "Cada mañana ayudo a mi madre a hacer pan en el horno de barro. ¡Huele muy bien!" },
        { type: "p", text: "Los niños ayudaban mucho en casa. Iban a buscar agua al pozo, cuidaban las cabras y aprendían el oficio de sus padres." },
        { type: "fact", label: "¿Qué comían?", text: "Pan, aceitunas, higos, uvas, lentejas y queso de cabra. Los que vivían cerca del lago comían pescado." },
        { type: "illustration", id: "pescadores" },
        { type: "narrator", text: "Mi tío es pescador en el lago de Galilea. Sale con la barca cuando aún es de noche y vuelve con la red llena de peces." },
        { type: "illustration", id: "juegos" },
        { type: "p", text: "Para jugar, los niños de Nazaret tenían tabas, unos huesecillos que se lanzaban como dados, y también corrían, saltaban y jugaban a imitar a los mayores." },
        { type: "words", items: [{ term: "Túnica", meaning: "Un vestido largo que llevaban hombres, mujeres y niños." }, { term: "Oficio", meaning: "El trabajo que una persona sabe hacer: pescador, pastor, carpintero…" }] },
      ],
      activities: [
        "Haz dos columnas en tu cuaderno: «Así vive Natán» y «Así vivo yo». Escribe o dibuja tres cosas en cada una.",
        "¿Qué comida de Natán comes tú también? Rodéala en una lista.",
        "¿En qué ayudas tú en casa? Cuéntaselo a tu compañero.",
      ],
    },
    {
      title: "Una familia que reza",
      blocks: [
        { type: "narrator", text: "En mi pueblo vive una familia muy buena: José, María y su hijo Jesús. José trabaja la madera y la piedra, y Jesús le ayuda." },
        { type: "image", id: "murillo" },
        { type: "p", text: "Este cuadro lo pintó Murillo, un pintor de Sevilla, hace casi 400 años. ¿Ves al niño Jesús levantando un pajarito mientras el perro lo mira? ¿Qué está haciendo María? ¿Y José?" },
        { type: "p", text: "Jesús es el Hijo de Dios, pero creció como cualquier niño: jugaba, ayudaba en casa y aprendía a rezar con su familia." },
        { type: "narrator", text: "Al despertar y antes de dormir, en mi casa rezamos: «Escucha, Israel: el Señor es nuestro Dios». Lo rezamos todos los días." },
        { type: "illustration", id: "sinagoga" },
        { type: "p", text: "El sábado era el día de descanso, dedicado a Dios. Las familias iban a la sinagoga a rezar y a escuchar la Palabra de Dios." },
        { type: "illustration", id: "peregrinos" },
        { type: "narrator", text: "En la fiesta de la Pascua caminamos varios días hasta Jerusalén. ¡Y por fin vemos el Templo! Es blanco y brilla como el oro." },
        { type: "p", text: "Cuando Jesús tenía 12 años, se quedó en el Templo hablando con los maestros. María y José lo buscaron durante tres días. Cuando lo encontraron, Jesús les dijo que tenía que estar en la casa de su Padre." },
        { type: "quote", text: "El niño, por su parte, iba creciendo y robusteciéndose, lleno de sabiduría; y la gracia de Dios estaba con él.", source: "Evangelio de Lucas 2,40" },
        { type: "words", items: [{ term: "Sábado", meaning: "El día de descanso de los judíos, dedicado a Dios." }, { term: "Sinagoga", meaning: "La casa donde se reunía el pueblo para rezar y escuchar la Palabra de Dios." }, { term: "Templo", meaning: "La casa de Dios en Jerusalén, el lugar más sagrado para los judíos." }] },
        { type: "narrator", text: "Mi abuelo dice que Dios prometió enviarnos un Salvador. ¡Todos lo esperamos!" },
        { type: "p", text: "Los cristianos creemos que ese Salvador es Jesús. Dios cumplió su promesa." },
      ],
      activities: [
        "Mira el cuadro de Murillo y di qué hace cada persona.",
        "Escribe o dibuja una oración corta para rezar al despertar, como Natán.",
        "Dramatizad por grupos la historia de Jesús perdido y hallado en el Templo.",
      ],
    },
  ],
  finalTask: {
    title: "La casa de Nazaret en una caja",
    description:
      "Por grupos, vamos a construir la casa de Natán dentro de una caja de zapatos y a explicársela a otra clase o a nuestras familias.",
    steps: [
      "Repartimos el trabajo: unos hacen la casa y el horno, otros la familia y otros los animales y los olivos.",
      "Usamos cartón, plastilina, palitos, tela y piedrecitas. Nada de cosas que no existían entonces.",
      "Preparamos un cartel con dos columnas: «Así vivía Natán» y «Así vivo yo».",
      "Cada grupo explica su caja en voz alta: qué hay y para qué servía.",
      "Terminamos todos juntos con la oración de Natán: «Escucha, Israel: el Señor es nuestro Dios».",
    ],
    product: "Una maqueta en caja de zapatos y un cartel comparativo, presentados en voz alta.",
  },
  quiz: [
    { id: "p1-2-pueblo", prompt: "¿En qué pueblo creció Jesús?", options: options("En Roma", "En Nazaret", "En Madrid"), correctId: "b", explanation: "Jesús creció en Nazaret, en Galilea, con María y José." },
    { id: "p1-2-casa", prompt: "¿Cómo era la casa de Natán?", options: options("De piedra y con una sola habitación", "Un piso con ascensor", "Una tienda de campaña"), correctId: "a", explanation: "Las casas eran de piedra y muchas familias vivían en una sola habitación." },
    { id: "p1-2-pan", prompt: "¿Qué hacía Natán por la mañana con su madre?", options: options("Ver la tele", "Hacer pan en el horno", "Ir al supermercado"), correctId: "b", explanation: "El pan se hacía cada día en un horno de barro." },
    { id: "p1-2-sabado", prompt: "¿Qué día descansaban y rezaban en la sinagoga?", options: options("El sábado", "El lunes", "Ningún día"), correctId: "a", explanation: "El sábado era el día de descanso dedicado a Dios." },
    { id: "p1-2-templo", prompt: "¿Qué era el Templo de Jerusalén?", options: options("Un castillo", "La casa de Dios", "Un mercado"), correctId: "b", explanation: "Era el lugar más sagrado. Allí iban las familias en las grandes fiestas." },
  ],
  extension: [
    "Con un adulto, haced en casa pan sin levadura: harina, agua y una pizca de sal, aplastado y a la sartén.",
    "Pide a tus abuelos que te cuenten cómo era su casa cuando eran niños. ¿Se parecía a la de Natán?",
    "Aprende de memoria la oración de Natán y rézala en casa una semana.",
  ],
  media: media.filter((item) => item.audiences.includes("primaria-1")),
  guide: {
    goals: [
      "Situar a Jesús en un pueblo y una época concretos: Nazaret, en Galilea, hace unos 2000 años.",
      "Conocer la vida cotidiana de una familia de Nazaret: casa, comida, trabajo y juegos.",
      "Reconocer a la Sagrada Familia y la oración, el sábado y el Templo como parte de su vida.",
      "Comparar la vida de Natán con la propia, valorando lo que es distinto y lo que se comparte: la familia y la oración.",
    ],
    curriculum: {
      competences: [
        "CE1. Identidad personal: reconocerse en relación con la propia familia y con las figuras bíblicas.",
        "CE4. Patrimonio cultural: admirar una obra de arte cristiano (Murillo) y lo que expresa.",
        "CE6. Contenidos básicos del cristianismo: Jesucristo, el Hijo de Dios que crece en una familia.",
      ],
      knowledge: [
        "A. La familia como lugar de cuidado y crecimiento; la oración.",
        "B. Jesucristo como centro del mensaje cristiano; la alianza de Dios con Israel; el mensaje cristiano en las artes.",
      ],
    },
    ibProfile: [
      { attribute: "Indagadores", how: "Parten de una pregunta propia: ¿cómo vivía un niño hace 2000 años?" },
      { attribute: "Informados e instruidos", how: "Aprenden datos reales de la vida en Galilea en el siglo I." },
      { attribute: "Buenos comunicadores", how: "Explican en voz alta la maqueta a otra clase." },
      { attribute: "De mentalidad abierta", how: "Comparan su vida con la de otra época y otra cultura sin juzgarla." },
      { attribute: "Reflexivos", how: "Piensan qué tienen en común con Natán: la familia y la oración." },
    ],
    materials: [
      "Proyector o pizarra digital para leer el tema juntos.",
      "Cuaderno, lápices de colores y un mapa sencillo de Tierra Santa impreso.",
      "Para la tarea final: cajas de zapatos, cartón, plastilina, palitos, tela y piedrecitas.",
      "Opcional: pan de pita o pan sin levadura para probar.",
    ],
    sessions: [
      {
        title: "Sesión 1. Arranque y «Mi pueblo, Nazaret»",
        steps: [
          { minutes: 10, title: "La pregunta", description: "Escriba en la pizarra la pregunta del tema. Pida que digan tres cosas de su casa y apúntelas para comparar al final." },
          { minutes: 5, title: "Conocemos a Natán", description: "Proyecte el dibujo de Natán y lean su presentación." },
          { minutes: 15, title: "Lección 1", description: "Lean juntos «Mi pueblo, Nazaret». Señalen Nazaret y Jerusalén en el mapa." },
          { minutes: 15, title: "Actividades", description: "Dibujo del pueblo de Natán. Quien termine antes, explica su dibujo a un compañero." },
        ],
      },
      {
        title: "Sesión 2. «Un día en casa de Natán»",
        steps: [
          { minutes: 5, title: "Repaso", description: "¿Dónde vive Natán? ¿Quién mandaba en su país?" },
          { minutes: 20, title: "Lección 2", description: "Lean la lección deteniéndose en cada dibujo. Pregunte qué ven antes de leer el texto." },
          { minutes: 15, title: "Así vive Natán, así vivo yo", description: "Hagan las dos columnas en el cuaderno y pongan en común en la pizarra." },
          { minutes: 5, title: "Cierre", description: "Cada uno dice en qué ayuda en casa." },
        ],
      },
      {
        title: "Sesión 3. «Una familia que reza»",
        steps: [
          { minutes: 10, title: "El cuadro de Murillo", description: "Proyecte el cuadro sin decir nada. ¿Quiénes son? ¿Qué hace cada uno? Después lean el texto." },
          { minutes: 15, title: "Lección 3", description: "Lean el resto de la lección: la oración de Natán, el sábado, el viaje al Templo." },
          { minutes: 15, title: "Jesús perdido y hallado", description: "Dramatización por grupos de Lucas 2,41-52 (versión sencilla)." },
          { minutes: 5, title: "Oración", description: "Recen juntos la oración de Natán." },
        ],
      },
      {
        title: "Sesión 4. Tarea final y quiz",
        steps: [
          { minutes: 5, title: "Organización", description: "Forme grupos de 4 y reparta las partes de la maqueta." },
          { minutes: 25, title: "Construimos la casa", description: "Trabajo en grupos. El cartel comparativo puede hacerlo un miembro de cada grupo." },
          { minutes: 10, title: "Quiz", description: "Hagan el quiz con el proyector, en voz alta, por equipos." },
          { minutes: 5, title: "Cierre", description: "Vuelvan a la lista de la sesión 1: ¿qué ha cambiado en lo que pensaban?" },
        ],
      },
      {
        title: "Sesión 5 (opcional). Exposición",
        steps: [
          { minutes: 30, title: "Presentamos las cajas", description: "Cada grupo explica su maqueta a otra clase o a las familias." },
          { minutes: 15, title: "Autoevaluación", description: "Cada alumno colorea una carita: ¿cómo ha trabajado su grupo? ¿Qué ha aprendido?" },
        ],
      },
    ],
    dynamics: [
      { title: "¿Verdad o mentira?", description: "Lea frases («Natán tenía tablet», «Natán ayudaba a hacer pan») y los alumnos se levantan si es verdad y se quedan sentados si es mentira." },
      { title: "El mercado de Nazaret", description: "Monte un mercado con objetos de clase: unos venden pan, aceite o pescado; otros compran. Sirve para hablar de los oficios." },
      { title: "Peregrinos al Templo", description: "Recorran el patio o el pasillo en fila, cantando, como las familias que iban de Nazaret a Jerusalén." },
    ],
    answers: [
      "Quiz: las respuestas correctas se ven en la página al terminar.",
      "Mapa: Nazaret está arriba (al norte), en Galilea; Jerusalén está abajo (al sur), en Judea.",
      "Cuadro de Murillo: José, sentado junto a su banco de carpintero, sujeta al niño; Jesús levanta un pajarito y el perro lo mira; María, a un lado, está devanando lana. Es una escena de familia corriente: así quiso pintarla Murillo.",
    ],
    rubric: [
      { criterion: "Sabe dónde vivió Jesús", levels: ["No lo recuerda.", "Recuerda Nazaret con ayuda.", "Sitúa Nazaret en el mapa y dice que está en Galilea."] },
      { criterion: "Compara su vida con la de Natán", levels: ["No encuentra diferencias.", "Encuentra una o dos diferencias.", "Encuentra diferencias y algo en común (familia, oración)."] },
      { criterion: "Participa en la maqueta", levels: ["Con poca implicación.", "Cumple su parte.", "Ayuda al grupo y explica la maqueta en voz alta."] },
    ],
    adaptations: {
      support: "Lea usted los textos y deje que señalen los dibujos. En las dos columnas, que dibujen en vez de escribir. Use solo las palabras nuevas con dibujo.",
      extension: "Los que terminen antes escriben tres frases como si fueran Natán contando su día, o buscan otra pintura de la Sagrada Familia y la comparan con la de Murillo.",
    },
  },
};
