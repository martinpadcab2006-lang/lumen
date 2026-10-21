import type { ChapterVersion } from "../../chapter-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/** ESO (12 a 16 años). Desde la fe católica. */
export const eso: ChapterVersion = {
  title: "El mundo en el que nació Jesús",
  inAMinute: [
    "Dios preparó durante siglos a su pueblo, Israel, para la venida de Jesús.",
    "En tiempos de Jesús, la tierra de Israel estaba bajo el dominio de Roma.",
    "El Templo de Jerusalén era el centro de la vida religiosa judía; en cada pueblo, la sinagoga.",
    "La mayoría de la gente era campesina o pescadora, y vivía con dificultades.",
    "Había distintos grupos religiosos: fariseos, saduceos, esenios y zelotes.",
    "El pueblo esperaba al Mesías prometido. Los cristianos reconocen en Jesús a ese Mesías.",
  ],
  intro:
    "Jesús no apareció en cualquier lugar ni en cualquier momento. Nació en el pueblo de Israel, en una época concreta de la historia. Conocer ese mundo nos ayuda a entender mejor sus palabras, sus parábolas y sus gestos.",
  sections: [
    {
      stop: "roma",
      heading: "Un pueblo bajo el dominio de Roma",
      blocks: [
        { type: "quote", text: "Cuando llegó la plenitud del tiempo, envió Dios a su Hijo, nacido de mujer, nacido bajo la ley.", source: "San Pablo, Carta a los Gálatas 4,4" },
        { type: "p", text: "Israel había vivido una larga historia con Dios: los patriarcas, la salida de Egipto, los reyes David y Salomón, el destierro en Babilonia y el regreso. En el año 63 a. C., el general romano Pompeyo conquistó Jerusalén y el país pasó a depender de Roma." },
        { type: "image", id: "fouquetPompeyo" },
        { type: "p", text: "Roma gobernaba a través de reyes locales y, más tarde, de funcionarios llamados prefectos. Los judíos podían practicar su religión, pero pagaban fuertes impuestos y soportaban la presencia de soldados extranjeros, lo que creaba un ambiente de tensión constante." },
      ],
    },
    {
      stop: "herodes",
      heading: "El rey Herodes",
      blocks: [
        { type: "character", id: "herodes" },
        { type: "p", text: "Herodes el Grande reinó del 37 al 4 a. C. con el apoyo de Roma. Fue un gran constructor: el puerto de Cesarea, la fortaleza de Masada, el Herodión y, sobre todo, el nuevo Templo de Jerusalén. Pero también fue un rey cruel y desconfiado." },
        { type: "image", id: "cesarea" },
        { type: "p", text: "El evangelio de Mateo sitúa el nacimiento de Jesús en tiempos de este rey. Por eso Jesús nació, en realidad, unos años antes del año 1: el cálculo de la era cristiana, hecho en el siglo VI, tuvo un pequeño error." },
      ],
    },
    {
      stop: "templo",
      heading: "El Templo de Jerusalén",
      blocks: [
        { type: "p", text: "El Templo era el lugar de la presencia de Dios en medio de su pueblo. Allí los sacerdotes ofrecían sacrificios, y solo el sumo sacerdote entraba una vez al año, el día de Yom Kipur, en la parte más sagrada: el Santo de los Santos." },
        { type: "image", id: "maqueta" },
        { type: "numbers", title: "El Templo en cifras", items: [{ value: "14 ha", label: "de explanada" }, { value: "3", label: "fiestas de peregrinación: Pascua, Pentecostés y las Tiendas" }, { value: "½ siclo", label: "de impuesto anual pagaba cada varón judío" }] },
        { type: "p", text: "Los judíos peregrinaban al Templo en las grandes fiestas. Jesús también lo hizo con su familia, como cuenta Lucas: a los doce años se quedó allí hablando con los maestros. Ya adulto, expulsó a los mercaderes porque habían convertido la casa de su Padre en un mercado." },
        { type: "image", id: "tissotTemplo" },
      ],
    },
    {
      stop: "galilea",
      heading: "La vida diaria en Galilea",
      blocks: [
        { type: "p", text: "Jesús vivió casi toda su vida en Nazaret, una pequeña aldea de Galilea de unos pocos cientos de habitantes. La mayoría de la gente eran campesinos, pastores, artesanos y pescadores. José era artesano, y Jesús aprendió con él el oficio." },
        { type: "image", id: "millais" },
        { type: "p", text: "La vida era dura: además del tributo a Roma, los campesinos pagaban impuestos a Herodes Antipas, el diezmo a los sacerdotes y el impuesto del Templo. Muchos se endeudaban y perdían sus tierras." },
        { type: "image", id: "barca" },
        { type: "p", text: "Las parábolas de Jesús hablan de este mundo: el sembrador, la oveja perdida, la red de los pescadores, los jornaleros de la viña o el padre que espera a su hijo. Jesús enseñaba con imágenes que todos conocían." },
        { type: "numbers", title: "Para hacerse una idea", items: [{ value: "1 denario", label: "era el sueldo de un día de trabajo" }, { value: "c. 120 km", label: "separaban Nazaret de Jerusalén" }] },
      ],
    },
    {
      stop: "sinagoga",
      heading: "El sábado y la sinagoga",
      blocks: [
        { type: "p", text: "En cada pueblo había una sinagoga: una casa de oración y de estudio. Cada sábado, día de descanso dedicado a Dios, la comunidad se reunía para rezar, leer la Ley y los Profetas y escuchar su explicación." },
        { type: "image", id: "tissotSinagoga" },
        { type: "p", text: "El evangelio de Lucas cuenta que Jesús, en la sinagoga de Nazaret, leyó un pasaje del profeta Isaías y dijo: «Hoy se ha cumplido esta Escritura». Era el comienzo de su misión." },
        { type: "image", id: "magdala" },
      ],
    },
    {
      stop: "grupos",
      heading: "Los grupos religiosos",
      blocks: [
        { type: "p", text: "Los fariseos eran maestros de la Ley muy respetados por el pueblo, que creían en la resurrección de los muertos. Los saduceos eran sacerdotes de familias poderosas, ligados al Templo, y no creían en la resurrección. Los esenios vivían en comunidades apartadas, como la de Qumrán, buscando una vida pura. Los zelotes defendían la lucha armada contra Roma." },
        { type: "image", id: "tissotFariseos" },
        { type: "p", text: "Jesús dialogó con todos ellos. Entre sus apóstoles estuvo Simón, llamado «el Zelote», y también Mateo, un recaudador de impuestos que trabajaba para el poder. Dos hombres que, en principio, deberían haberse odiado." },
        { type: "image", id: "rollo" },
      ],
    },
    {
      stop: "espera",
      heading: "La esperanza del Mesías",
      blocks: [
        { type: "p", text: "Los profetas habían anunciado que Dios enviaría un Mesías, un «ungido», para salvar a su pueblo. En tiempos de Jesús, muchos lo esperaban como un rey guerrero que expulsaría a los romanos." },
        { type: "character", id: "pilato" },
        { type: "p", text: "Para la fe de la Iglesia, Jesús es ese Mesías prometido, aunque no como muchos lo imaginaban: no vino a conquistar un reino de este mundo, sino a reconciliar a todos con Dios y a anunciar un Reino de justicia, de paz y de amor." },
      ],
    },
  ],
  activities: [
    "Lee Lucas 2,41-52 (Jesús en el Templo a los doce años). ¿Qué te dice sobre la vida religiosa de su familia?",
    "Haz una tabla con los cuatro grupos religiosos: qué creían, a quién representaban y qué podían pensar de Jesús.",
    "Busca en el mapa Nazaret, Cafarnaúm, Jerusalén y Belén, y calcula la distancia entre Nazaret y Jerusalén.",
    "Elige una parábola y explica qué elementos de la vida en Galilea aparecen en ella.",
    "Observa el cuadro de Tissot sobre los fariseos y saduceos: describe sus ropas y gestos. ¿Qué te dice de cómo se vestía la gente?",
  ],
  quiz: [
    { id: "e1-plenitud", prompt: "Según san Pablo, ¿cuándo envió Dios a su Hijo?", options: options("Al principio de la creación", "Cuando llegó la plenitud del tiempo", "Después de la caída de Roma", "En el año 1 exacto"), correctId: "b", explanation: "«Cuando llegó la plenitud del tiempo, envió Dios a su Hijo, nacido de mujer» (Gálatas 4,4)." },
    { id: "e1-saduceos", prompt: "¿Qué grupo no creía en la resurrección de los muertos?", options: options("Los fariseos", "Los saduceos", "Los esenios", "Los apóstoles"), correctId: "b", explanation: "Los saduceos solo aceptaban lo escrito en la Torá y rechazaban la resurrección, que los fariseos sí defendían." },
    { id: "e1-santo", prompt: "¿Quién podía entrar en el Santo de los Santos del Templo?", options: options("Cualquier judío", "Los fariseos", "Solo el sumo sacerdote, una vez al año", "El rey Herodes"), correctId: "c", explanation: "Solo el sumo sacerdote, el día de Yom Kipur." },
    { id: "e1-sinagoga", prompt: "¿Qué se hacía en la sinagoga cada sábado?", options: options("Ofrecer sacrificios", "Rezar, leer la Ley y los Profetas y explicarlos", "Cobrar impuestos", "Celebrar juicios"), correctId: "b", explanation: "Los sacrificios solo se ofrecían en el Templo; la sinagoga era casa de oración y estudio." },
    { id: "e1-mesias", prompt: "¿Qué significa «Mesías»?", options: options("Maestro", "Ungido", "Rey de Roma", "Profeta del desierto"), correctId: "b", explanation: "Mesías (en hebreo) y Cristo (en griego) significan «ungido»: elegido y consagrado por Dios." },
  ],
  next: "En el próximo capítulo: Jesús de Nazaret. Su bautismo en el Jordán, sus palabras y sus milagros, y el anuncio del Reino de Dios.",
};

/** Bachillerato (16 a 18 años). Desde la fe católica, con más reflexión. */
export const bachillerato: ChapterVersion = {
  title: "La plenitud de los tiempos: el mundo de Jesús",
  inAMinute: [
    "La fe cristiana afirma que Dios se hizo hombre en un pueblo, un lugar y un momento concretos.",
    "Ese momento es el judaísmo del Segundo Templo bajo el dominio de Roma.",
    "Política, religión y economía estaban entrelazadas: el Templo era las tres cosas a la vez.",
    "La pluralidad de grupos judíos muestra un pueblo que buscaba cómo ser fiel a Dios.",
    "La espera mesiánica es la clave para entender la pregunta que recorre los evangelios: ¿quién es Jesús?",
  ],
  intro:
    "El cristianismo no es una idea abstracta, sino una fe que nace en la historia. La Iglesia confiesa que el Hijo de Dios «se hizo carne» (Juan 1,14), es decir, asumió una cultura, una lengua y un tiempo. Por eso conocer el mundo de Jesús no es solo una curiosidad histórica: es una forma de tomarse en serio la encarnación.",
  sections: [
    {
      stop: "roma",
      heading: "Un pueblo bajo un imperio",
      blocks: [
        { type: "p", text: "Desde el año 63 a. C., cuando Pompeyo tomó Jerusalén, la tierra de Israel formó parte del sistema romano. Roma combinaba el control militar y fiscal con cierta tolerancia religiosa: los judíos no estaban obligados a dar culto al emperador, aunque en el Templo se ofrecían sacrificios por él." },
        { type: "image", id: "fouquetPompeyo" },
        { type: "p", text: "Esa convivencia era frágil. Para muchos judíos, pagar tributo a un poder pagano planteaba una pregunta de fondo: ¿a quién pertenece esta tierra, a Dios o al César? Es la misma pregunta que le harán a Jesús." },
        { type: "quote", text: "Lo que es del César, pagádselo al César, y lo que es de Dios, a Dios.", source: "Evangelio de Marcos 12,17" },
        { type: "image", id: "tiziano" },
      ],
    },
    {
      stop: "herodes",
      heading: "Herodes y sus herederos",
      blocks: [
        { type: "p", text: "Herodes el Grande (37-4 a. C.) modernizó el país al estilo grecorromano y reconstruyó el Templo con un esplendor sin precedentes, pero muchos judíos piadosos lo veían como un usurpador, de origen idumeo y aliado de los paganos." },
        { type: "character", id: "herodes" },
        { type: "p", text: "A su muerte, el reino se repartió entre sus hijos. Herodes Antipas gobernó Galilea durante toda la vida adulta de Jesús; en el año 6 d. C., Judea pasó a ser administrada directamente por prefectos romanos." },
        { type: "character", id: "antipas" },
      ],
    },
    {
      stop: "templo",
      heading: "El Templo: religión, economía y poder",
      blocks: [
        { type: "p", text: "El Templo era el lugar de la presencia de Dios, pero también el mayor centro económico del país y la sede de la aristocracia sacerdotal. El sumo sacerdote, nombrado y destituido por Roma, era a la vez autoridad religiosa e interlocutor político." },
        { type: "image", id: "maqueta" },
        { type: "character", id: "caifas" },
        { type: "p", text: "Por eso el gesto de Jesús de expulsar a los mercaderes no fue solo religioso: tocaba el corazón del sistema. La tradición cristiana lo leerá como el anuncio de un culto nuevo, «en espíritu y en verdad» (Juan 4,23)." },
      ],
    },
    {
      stop: "grupos",
      heading: "Un judaísmo plural",
      blocks: [
        { type: "p", text: "Flavio Josefo describe varias corrientes: fariseos, saduceos y esenios, además de una «cuarta filosofía» partidaria de la resistencia contra Roma. Compartían lo esencial (el Dios único, la Ley y el Templo), pero discrepaban sobre cómo vivirlo." },
        { type: "character", id: "josefo" },
        { type: "image", id: "tissotFariseos" },
        { type: "p", text: "Esta diversidad ayuda a leer los evangelios: las discusiones de Jesús con fariseos y saduceos no son peleas entre enemigos, sino debates dentro de una misma fe sobre la Ley, el sábado, la pureza o la resurrección. Jesús fue, ante todo, un judío fiel a la fe de su pueblo." },
        { type: "image", id: "rollo" },
      ],
    },
    {
      stop: "espera",
      heading: "La espera del Mesías",
      blocks: [
        { type: "p", text: "Los textos de la época muestran expectativas distintas: un rey de la casa de David, un profeta como Moisés, un sacerdote ideal; en Qumrán se esperaba incluso a dos mesías." },
        { type: "p", text: "La fe de la Iglesia confiesa que Jesús es el Cristo, pero de una manera que desconcertó a sus contemporáneos: un Mesías que sirve, sufre y muere. El Catecismo de la Iglesia Católica explica que Jesús aceptó el título de Mesías, pero corrigió la idea demasiado política que muchos tenían de él (números 439 y 440)." },
        { type: "character", id: "pilato" },
      ],
    },
    {
      stop: "guerra",
      heading: "Para pensar: ¿por qué entonces y allí?",
      blocks: [
        { type: "p", text: "La tradición cristiana ha visto en ese momento una «preparación evangélica»: un pueblo con una larga experiencia de Dios, una lengua común en el Mediterráneo (el griego) y unas calzadas romanas que facilitarían que el mensaje se extendiera." },
        { type: "image", id: "arcoTito" },
        { type: "p", text: "Tras la destrucción del Templo en el año 70, el judaísmo se reorganizó en torno a los rabinos y la sinagoga, y los cristianos siguieron su propio camino. Ambos son herederos de ese mismo mundo. El Concilio Vaticano II recordó que la Iglesia «no puede olvidar» que recibió la revelación del Antiguo Testamento a través de ese pueblo (declaración Nostra aetate, n. 4)." },
      ],
    },
  ],
  activities: [
    "Comentario de texto: lee Marcos 12,13-17 («Dad al César lo que es del César») y explica qué pregunta política y religiosa hay detrás. ¿Qué responderías hoy?",
    "Debate en clase: ¿por qué crees que muchos de sus contemporáneos no reconocieron a Jesús como Mesías?",
    "Lee los números 439 y 440 del Catecismo de la Iglesia Católica y resume en cinco líneas cómo entendió Jesús su misión de Mesías.",
    "Lee el número 4 de la declaración Nostra aetate del Concilio Vaticano II. ¿Qué dice sobre la relación entre la Iglesia y el pueblo judío?",
  ],
  quiz: [
    { id: "b1-encarnacion", prompt: "¿Qué afirma la encarnación?", options: options("Que Jesús fue solo un gran profeta", "Que el Hijo de Dios se hizo hombre en una historia concreta", "Que Dios se manifestó solo en sueños", "Que Jesús vivió fuera del tiempo"), correctId: "b", explanation: "«El Verbo se hizo carne y habitó entre nosotros» (Juan 1,14)." },
    { id: "b1-antipas", prompt: "¿Quién gobernaba Galilea durante la vida adulta de Jesús?", options: options("Herodes el Grande", "Herodes Antipas", "Poncio Pilato", "El sumo sacerdote"), correctId: "b", explanation: "Herodes Antipas gobernó Galilea y Perea entre el 4 a. C. y el 39 d. C." },
    { id: "b1-cesar", prompt: "«Lo que es del César, pagádselo al César…»: ¿a qué pregunta respondía Jesús?", options: options("Si había que rezar en el Templo", "Si era lícito pagar tributo a Roma", "Si había que seguir a los esenios", "Si el sábado se podía trabajar"), correctId: "b", explanation: "Le preguntaron, para ponerle a prueba, si era lícito pagar el tributo al César (Marcos 12,13-17)." },
    { id: "b1-josefo", prompt: "¿Qué historiador judío del siglo I describe los grupos religiosos de la época?", options: options("Tácito", "Flavio Josefo", "Filón de Alejandría", "Eusebio de Cesarea"), correctId: "b", explanation: "Flavio Josefo los describe en La guerra de los judíos y en Antigüedades judías." },
  ],
  next: "En el próximo capítulo: Jesús de Nazaret. ¿Qué dicen los evangelios y qué puede saber la historia de su vida, su mensaje y su muerte?",
};
