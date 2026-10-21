import type { ChapterVersion } from "../../chapter-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

const narrator = {
  name: "Natán",
  presentation:
    "Natán es un personaje inventado: un niño que vive en Nazaret en tiempos de Jesús y nos cuenta cómo es su pueblo. Lo que cuenta de su vida está basado en lo que sabemos de aquella época.",
};

/** Primaria, 1.º a 3.º (6 a 9 años). Desde la fe católica, frases muy cortas y mucha imagen. */
export const primaria1: ChapterVersion = {
  title: "El pueblo de Jesús",
  narrator,
  inAMinute: [
    "Jesús vivió en un país pequeño, que hoy llamamos Tierra Santa.",
    "Creció en Nazaret con María y José.",
    "En Jerusalén estaba el Templo, la casa de Dios.",
    "El pueblo esperaba al Salvador que Dios había prometido.",
  ],
  intro: "Hace muchísimo tiempo, Dios envió a su Hijo Jesús a vivir con nosotros. ¿Cómo era el lugar donde creció? Natán nos lo va a enseñar.",
  sections: [
    {
      stop: "galilea",
      heading: "¡Hola! Me llamo Natán",
      blocks: [
        { type: "illustration", id: "natan" },
        { type: "narrator", text: "¡Hola! Tengo 8 años y vivo en Nazaret. Es un pueblo pequeño, con casas de piedra y muchos olivos. ¿Me acompañas?" },
        { type: "p", text: "Nazaret está en Galilea. Galilea tiene colinas verdes, campos de trigo y un lago muy grande." },
        { type: "words", items: [{ term: "Aldea", meaning: "Un pueblo muy pequeño." }] },
      ],
    },
    {
      stop: "galilea",
      heading: "Mi casa",
      blocks: [
        { type: "illustration", id: "casa" },
        { type: "narrator", text: "Mi casa es de piedra. Tiene una sola habitación. Por la noche encendemos una lámpara de aceite." },
        { type: "illustration", id: "pan" },
        { type: "narrator", text: "Cada mañana ayudo a mi madre a hacer pan en el horno. ¡Huele muy bien!" },
        { type: "p", text: "Los niños ayudaban en casa. Cuidaban las cabras, traían agua del pozo y aprendían el oficio de sus padres." },
      ],
    },
    {
      stop: "galilea",
      heading: "Una familia muy especial",
      blocks: [
        { type: "narrator", text: "En Nazaret vive una familia muy buena: José, María y su hijo Jesús. José trabaja la madera y la piedra. Jesús le ayuda." },
        { type: "image", id: "murillo" },
        { type: "p", text: "Este cuadro lo pintó Murillo, un pintor de Sevilla, hace casi 400 años. ¿Ves al niño Jesús jugando con un pajarito?" },
        { type: "p", text: "Jesús era el Hijo de Dios, pero creció como cualquier niño: jugaba, ayudaba en casa y aprendía a rezar." },
      ],
    },
    {
      stop: "herodes",
      heading: "Los soldados romanos",
      blocks: [
        { type: "illustration", id: "soldados" },
        { type: "narrator", text: "A veces pasan soldados romanos por el camino. Vienen de muy lejos, de Roma. Mi padre dice que mandan ellos." },
        { type: "p", text: "En aquella época, los romanos tenían un imperio enorme. Ponían reyes y cobraban impuestos." },
        { type: "words", items: [{ term: "Imperio", meaning: "Muchos países gobernados por un solo jefe, el emperador." }] },
      ],
    },
    {
      stop: "templo",
      heading: "¡Nos vamos a Jerusalén!",
      blocks: [
        { type: "illustration", id: "peregrinos" },
        { type: "narrator", text: "En la fiesta de la Pascua vamos todos juntos a Jerusalén. Caminamos varios días. ¡Y por fin vemos el Templo! Es blanco y brilla como el oro." },
        { type: "p", text: "El Templo era la casa de Dios para los judíos. Allí iban a rezar y a celebrar las fiestas." },
        { type: "image", id: "tissotTemplo" },
        { type: "p", text: "Cuando Jesús tenía 12 años, se quedó en el Templo hablando con los maestros. María y José lo buscaron durante tres días." },
        { type: "words", items: [{ term: "Templo", meaning: "El lugar más sagrado de los judíos, en Jerusalén." }] },
      ],
    },
    {
      stop: "espera",
      heading: "Esperamos a alguien",
      blocks: [
        { type: "narrator", text: "Mi abuelo dice que Dios prometió enviarnos un Salvador. ¡Todos lo esperamos!" },
        { type: "p", text: "Los cristianos creemos que ese Salvador es Jesús. Dios cumplió su promesa." },
        { type: "words", items: [{ term: "Mesías", meaning: "El Salvador que Dios había prometido a su pueblo." }] },
      ],
    },
  ],
  activities: [
    "Busca en el mapa Nazaret y Jerusalén. ¿Cuál está arriba y cuál abajo?",
    "Dibuja la casa de Natán con su horno de pan.",
    "Mira el cuadro de Murillo. ¿Qué está haciendo cada persona?",
    "Cuenta en casa qué promesa importante te han hecho y si se cumplió.",
  ],
  quiz: [
    { id: "p1-pueblo", prompt: "¿En qué pueblo creció Jesús?", options: options("En Roma", "En Nazaret", "En Madrid"), correctId: "b", explanation: "Jesús creció en Nazaret, con María y José." },
    { id: "p1-templo", prompt: "¿Qué era el Templo?", options: options("Un castillo", "La casa de Dios para los judíos", "Un mercado"), correctId: "b", explanation: "Era el lugar más sagrado. Allí iban a rezar." },
    { id: "p1-promesa", prompt: "¿A quién esperaba el pueblo?", options: options("A un rey de Roma", "Al Salvador prometido por Dios", "A un pastor"), correctId: "b", explanation: "Esperaban al Mesías, el Salvador. Los cristianos creemos que es Jesús." },
  ],
  next: "En el próximo capítulo, Jesús ya es mayor: elige a sus amigos y nos enseña a querernos.",
};

/** Primaria, 4.º a 6.º (9 a 12 años). Desde la fe católica, con algo más de historia. */
export const primaria2: ChapterVersion = {
  title: "El país donde vivió Jesús",
  narrator,
  inAMinute: [
    "Jesús vivió en el pueblo judío, en una tierra que entonces mandaban los romanos.",
    "Creció en Nazaret, en Galilea, con María y José.",
    "Cada sábado se reunían en la sinagoga para rezar y escuchar la Palabra de Dios.",
    "El Templo de Jerusalén era el centro de la fe judía.",
    "El pueblo esperaba al Mesías. Los cristianos creemos que es Jesús.",
  ],
  intro:
    "Dios eligió un pueblo, un lugar y un momento para enviar a su Hijo. Natán, un chico de Nazaret de tu edad, nos cuenta cómo se vivía allí hace más de dos mil años.",
  sections: [
    {
      stop: "galilea",
      heading: "Nazaret, un pueblo de Galilea",
      blocks: [
        { type: "illustration", id: "natan" },
        { type: "narrator", text: "Me llamo Natán y vivo en Nazaret. Somos pocos vecinos: unos cientos. Casi todos trabajamos en el campo o somos artesanos." },
        { type: "p", text: "Galilea era la región del norte, verde y fértil. Se cultivaba trigo, olivos, vides e higueras. En el gran lago de Galilea vivían muchos pescadores." },
        { type: "illustration", id: "pescadores" },
        { type: "p", text: "Las casas eran de piedra, pequeñas y con el techo plano, donde se secaba la ropa y se dormía en verano. Muchas familias vivían juntas alrededor de un patio." },
        { type: "words", items: [{ term: "Galilea", meaning: "La región del norte donde creció Jesús." }, { term: "Artesano", meaning: "Persona que trabaja con las manos: la madera, la piedra, el barro." }] },
      ],
    },
    {
      stop: "galilea",
      heading: "El taller de José",
      blocks: [
        { type: "narrator", text: "José, el vecino, es artesano: trabaja la madera y la piedra. Su hijo Jesús le ayuda en el taller." },
        { type: "image", id: "millais" },
        { type: "p", text: "El pintor inglés John Everett Millais imaginó así el taller de José. Fíjate en los detalles: las herramientas, las virutas de madera en el suelo y las ovejas que miran por la puerta." },
        { type: "quote", text: "Jesús progresaba en sabiduría y en estatura, y en gracia ante Dios y ante los hombres.", source: "Evangelio de Lucas 2,52" },
      ],
    },
    {
      stop: "sinagoga",
      heading: "El sábado, en la sinagoga",
      blocks: [
        { type: "illustration", id: "sinagoga" },
        { type: "narrator", text: "El sábado no se trabaja. Por la mañana vamos a la sinagoga. Allí rezamos y escuchamos la Palabra de Dios. El maestro nos enseña a leer los rollos de las Escrituras." },
        { type: "quote", text: "Escucha, Israel: el Señor es nuestro Dios, el Señor es uno solo.", source: "Deuteronomio 6,4. Es la oración que los judíos rezaban cada día, y Jesús también." },
        { type: "image", id: "magdala" },
        { type: "p", text: "En 2009, unos arqueólogos encontraron junto al lago de Galilea una sinagoga de la época de Jesús. Dentro había esta piedra tallada con el candelabro del Templo." },
        { type: "words", items: [{ term: "Sinagoga", meaning: "Casa donde los judíos se reúnen para rezar y leer las Escrituras." }, { term: "Sábado", meaning: "El día de descanso de los judíos, dedicado a Dios." }] },
      ],
    },
    {
      stop: "herodes",
      heading: "Los romanos y el rey Herodes",
      blocks: [
        { type: "illustration", id: "soldados" },
        { type: "narrator", text: "En el camino vemos soldados romanos. Mi padre paga muchos impuestos y a veces no llega a fin de mes." },
        { type: "p", text: "Los romanos dominaban el país. Cuando nació Jesús, el rey era Herodes el Grande, que gobernaba con el permiso de Roma. Era un gran constructor, pero también un rey cruel." },
        { type: "image", id: "denario" },
        { type: "p", text: "Con esta moneda, el denario, se pagaba un día de trabajo. Lleva la cara del emperador Tiberio, que gobernaba en Roma cuando Jesús era adulto." },
      ],
    },
    {
      stop: "templo",
      heading: "El Templo de Jerusalén",
      blocks: [
        { type: "narrator", text: "En las grandes fiestas vamos a Jerusalén. Tardamos tres o cuatro días a pie. ¡El Templo es lo más grande que he visto nunca!" },
        { type: "image", id: "maqueta" },
        { type: "numbers", title: "El Templo en cifras", items: [{ value: "20", label: "campos de fútbol cabrían en su explanada" }, { value: "3", label: "grandes fiestas al año: Pascua, Pentecostés y las Tiendas" }] },
        { type: "p", text: "El Templo era el lugar de la presencia de Dios. Los sacerdotes ofrecían sacrificios y el pueblo iba a rezar. María y José llevaron allí a Jesús cuando era un bebé, y también a los doce años." },
        { type: "image", id: "holmanHunt" },
      ],
    },
    {
      stop: "espera",
      heading: "Esperando al Mesías",
      blocks: [
        { type: "narrator", text: "En la sinagoga leemos lo que dijeron los profetas: que Dios enviaría a alguien para salvarnos." },
        { type: "quote", text: "Un niño nos ha nacido, un hijo se nos ha dado.", source: "Profeta Isaías 9,5" },
        { type: "p", text: "Muchos esperaban un Mesías guerrero que echara a los romanos. Pero Dios tenía otro plan. Los cristianos creemos que Jesús es el Mesías: no vino a ganar una guerra, sino a enseñarnos a amar y a salvarnos." },
        { type: "words", items: [{ term: "Mesías", meaning: "En hebreo, «ungido»: el enviado que Dios había prometido. En griego se dice «Cristo»." }, { term: "Profeta", meaning: "Persona que habla en nombre de Dios." }] },
      ],
    },
  ],
  activities: [
    "Lee Lucas 2,41-52 y cuenta con tus palabras qué pasó cuando Jesús tenía doce años.",
    "Busca en el mapa Nazaret, el lago de Galilea y Jerusalén. Mide con una regla la distancia entre Nazaret y Jerusalén.",
    "Compara el cuadro de Millais con el de Murillo. ¿En qué se parecen y en qué se diferencian?",
    "Escribe un día en la vida de Natán: qué hace por la mañana, por la tarde y por la noche.",
  ],
  quiz: [
    { id: "p2-sinagoga", prompt: "¿Qué hacían los judíos en la sinagoga?", options: options("Comprar y vender", "Rezar y escuchar las Escrituras", "Entrenar a los soldados"), correctId: "b", explanation: "La sinagoga era la casa de oración y de estudio de cada pueblo." },
    { id: "p2-herodes", prompt: "¿Quién era el rey cuando nació Jesús?", options: options("Herodes el Grande", "El emperador Tiberio", "El rey David"), correctId: "a", explanation: "Herodes el Grande gobernaba con el permiso de Roma." },
    { id: "p2-denario", prompt: "¿Qué se pagaba con un denario?", options: options("Una casa", "Un día de trabajo", "Un año de colegio"), correctId: "b", explanation: "Un denario era el sueldo de un día de trabajo." },
    { id: "p2-mesias", prompt: "¿Qué significa «Mesías»?", options: options("Rey", "Ungido, el enviado de Dios", "Maestro"), correctId: "b", explanation: "Mesías significa «ungido». En griego se dice «Cristo»." },
  ],
  next: "En el próximo capítulo: Jesús se hace mayor, elige a sus discípulos y empieza a anunciar el Reino de Dios.",
};
