import type { SchoolAudience, TeacherGuide } from "../../chapter-types";

export const teacherGuides: Record<SchoolAudience, TeacherGuide> = {
  "primaria-1": {
    goals: [
      "Saber que Jesús nació y creció en un pueblo concreto: Israel.",
      "Conocer cómo era un día en la vida de un niño de Nazaret (casa, trabajo, comida, oración).",
      "Reconocer el Templo de Jerusalén y la sinagoga como lugares de oración.",
      "Relacionar la vida de Jesús niño con la propia vida de los alumnos.",
    ],
    duration: "Una sesión de 45-50 minutos (se puede dividir en dos de 25).",
    materials: [
      "Proyector o pizarra digital para leer el capítulo juntos.",
      "Folios, lápices de colores y un mapa sencillo de Israel impreso.",
      "Opcional: un poco de pan sin levadura (pan de pita) para el momento de la comida.",
    ],
    session: [
      { minutes: 5, title: "Saludo de Natán", description: "Presente a Natán, el niño narrador, y pregunte: «¿Cómo creéis que era la casa de un niño hace 2000 años?». Anote ideas en la pizarra." },
      { minutes: 15, title: "Leemos juntos", description: "Lean las partes del capítulo en voz alta, deteniéndose en las ilustraciones y en las «palabras nuevas». Pida a distintos alumnos que lean los bocadillos de Natán." },
      { minutes: 10, title: "Así vivía Jesús, así vivo yo", description: "En dos columnas de la pizarra: cómo era la vida en Nazaret y cómo es la nuestra (casa, juegos, trabajo de los padres, comida, oración)." },
      { minutes: 10, title: "Dibujo", description: "Cada alumno dibuja a Jesús niño ayudando en casa o en el taller de José." },
      { minutes: 5, title: "Oración final", description: "Terminen con una oración breve: dar gracias por la familia, como la familia de Nazaret." },
    ],
    dynamics: [
      { title: "El mercado de Nazaret", description: "Monte un pequeño mercado con objetos de clase: unos venden pan, aceite o pescado; otros compran. Sirve para hablar del trabajo y del dinero de la época." },
      { title: "¿Verdad o mentira?", description: "Lea frases sencillas («Jesús tenía televisión», «Jesús iba a la sinagoga los sábados») y los alumnos se levantan si es verdad y se quedan sentados si es mentira." },
      { title: "Peregrinos al Templo", description: "Recorran la clase en fila cantando, como las familias que iban de Nazaret a Jerusalén en las fiestas." },
    ],
    answers: [
      "Quiz: las respuestas correctas están marcadas en la propia página al terminar.",
      "Jesús vivía en Nazaret, en Galilea. Nació en Belén.",
      "El sábado era el día de descanso dedicado a Dios: se iba a la sinagoga a rezar y escuchar la Palabra.",
    ],
    rubric: [
      { criterion: "Sabe dónde vivió Jesús", levels: ["No lo recuerda.", "Recuerda Nazaret o Belén con ayuda.", "Distingue Belén (nacimiento) y Nazaret (infancia)."] },
      { criterion: "Compara su vida con la de Jesús niño", levels: ["No encuentra diferencias.", "Encuentra una o dos diferencias.", "Encuentra diferencias y algo en común (familia, oración)."] },
      { criterion: "Participa en el dibujo y la oración", levels: ["Con poca implicación.", "Participa cuando se le anima.", "Participa con interés y explica su dibujo."] },
    ],
    adaptations: {
      support: "Para alumnos con dificultades lectoras, lea usted el texto y deje que señalen las imágenes. Use solo las palabras nuevas con dibujo.",
      extension: "Los que terminen antes pueden escribir tres frases contando un día de Jesús niño como si fueran Natán.",
    },
  },
  "primaria-2": {
    goals: [
      "Situar en el mapa los lugares principales de la vida de Jesús.",
      "Comprender que Israel estaba gobernado por Roma y qué significaba eso para la gente.",
      "Conocer el Templo, la sinagoga y el sábado como parte de la fe judía de Jesús.",
      "Entender que el pueblo esperaba un Mesías y que los cristianos lo reconocen en Jesús.",
    ],
    duration: "Una sesión de 50 minutos. Con las dinámicas, se puede ampliar a dos.",
    materials: [
      "Proyector para el capítulo y el mapa interactivo de Lumen.",
      "Mapa mudo de Israel en el siglo I (impreso).",
      "Biblia o texto impreso de Lucas 2,41-52.",
    ],
    session: [
      { minutes: 5, title: "Pregunta inicial", description: "«Si Jesús viviera hoy, ¿cómo sería su barrio?». Recoja respuestas y anuncie que vamos a viajar 2000 años atrás." },
      { minutes: 15, title: "Lectura guiada", description: "Lean el capítulo por partes. Mientras leen, el mapa se mueve: pida a un alumno que diga en voz alta dónde estamos en cada parte." },
      { minutes: 10, title: "Mapa mudo", description: "Por parejas, sitúan Nazaret, Belén, Jerusalén, Cafarnaúm, el mar de Galilea y el río Jordán." },
      { minutes: 10, title: "Jesús en el Templo", description: "Lean Lucas 2,41-52. Pregunte: ¿por qué se quedó Jesús en el Templo? ¿Cómo se sintieron María y José?" },
      { minutes: 10, title: "Quiz y cierre", description: "Hagan juntos el quiz del capítulo. Cierre con la idea clave: Dios se hizo niño en una familia y un pueblo concretos." },
    ],
    dynamics: [
      { title: "Periodistas en Galilea", description: "En grupos, preparan una entrevista a un personaje (un pescador, un recaudador de impuestos, un soldado romano, una madre de Nazaret) y la representan." },
      { title: "El denario del César", description: "Muestre la imagen del denario de Tiberio y pregunte qué ven. Lean «Dad al César lo que es del César» y comenten qué quería decir Jesús." },
      { title: "Línea del tiempo", description: "Hagan en el suelo una línea con cinta: 63 a. C. (llegan los romanos), 4 a. C. (muere Herodes, nace Jesús), 30 d. C. (muere Jesús), 70 d. C. (destrucción del Templo)." },
    ],
    answers: [
      "Quiz: las respuestas correctas están marcadas en la propia página al terminar.",
      "Lugares: Nazaret y Cafarnaúm en Galilea (norte); Belén y Jerusalén en Judea (sur); el Jordán une el mar de Galilea con el mar Muerto.",
      "Lucas 2: Jesús dice «¿No sabíais que yo debía estar en las cosas de mi Padre?».",
    ],
    rubric: [
      { criterion: "Localiza los lugares en el mapa", levels: ["Menos de 3 lugares.", "De 3 a 5 lugares.", "Todos los lugares y explica qué pasó en ellos."] },
      { criterion: "Explica la situación política", levels: ["No sabe quién gobernaba.", "Sabe que gobernaba Roma.", "Explica Roma, Herodes y los impuestos con sus palabras."] },
      { criterion: "Relaciona la fe judía de Jesús con su vida", levels: ["No establece relación.", "Menciona el Templo o la sinagoga.", "Explica el sábado, la sinagoga y el Templo en la vida de Jesús."] },
    ],
    adaptations: {
      support: "Entregue el mapa con los nombres ya escritos para que solo unan con flechas. Reduzca el quiz a las dos primeras preguntas.",
      extension: "Investigan un lugar (Cafarnaúm, Magdala o el mar de Galilea) y preparan una ficha con foto y tres datos.",
    },
  },
  eso: {
    goals: [
      "Describir el contexto político, religioso y social de Israel en el siglo I.",
      "Diferenciar los grupos religiosos judíos y su relación con Jesús.",
      "Relacionar las parábolas con la vida cotidiana de Galilea.",
      "Comprender el sentido de la espera mesiánica y la fe cristiana en Jesús como Mesías.",
    ],
    duration: "Una sesión de 55 minutos. Con las dinámicas, se puede ampliar a dos.",
    materials: [
      "Capítulo en proyector o en los dispositivos de los alumnos.",
      "Biblias (Lucas 2,41-52; Lucas 4,16-21; Marcos 12,13-17).",
      "Plantilla de tabla de grupos religiosos (se puede copiar en el cuaderno).",
    ],
    session: [
      { minutes: 10, title: "Activación", description: "Proyecte el cuadro de Tiziano «El tributo» sin decir nada. ¿Qué ocurre? ¿Quiénes son? Después revele el título y lean Marcos 12,17." },
      { minutes: 15, title: "Lectura por expertos", description: "Divida la clase en grupos; cada uno lee una parte del capítulo (Roma y Herodes, el Templo, Galilea, la sinagoga, los grupos, el Mesías) y prepara una explicación de 2 minutos." },
      { minutes: 15, title: "Puesta en común", description: "Cada grupo explica su parte al resto mientras se completa un esquema común en la pizarra." },
      { minutes: 10, title: "Tabla de grupos", description: "Individualmente completan la tabla: fariseos, saduceos, esenios y zelotes (qué creían, a quién representaban, qué pensarían de Jesús)." },
      { minutes: 5, title: "Quiz", description: "Hagan el quiz y comenten las respuestas falladas." },
    ],
    dynamics: [
      { title: "Debate en el Sanedrín", description: "Cuatro grupos representan a fariseos, saduceos, esenios y zelotes. Ante la pregunta «¿Hay que pagar impuestos a Roma?», cada uno defiende su postura según lo aprendido." },
      { title: "Instagram de Cafarnaúm", description: "Crean en papel tres publicaciones de un pescador del lago de Galilea: foto (dibujo), texto y comentarios. Deben usar al menos tres datos del capítulo." },
      { title: "Parábola actualizada", description: "Eligen una parábola, identifican los elementos de la vida en Galilea y la reescriben ambientada en su barrio sin perder el mensaje." },
    ],
    answers: [
      "Quiz: las respuestas correctas están marcadas en la propia página al terminar.",
      "Tabla: fariseos (Ley oral, resurrección, cercanos al pueblo); saduceos (sacerdotes, Templo, sin resurrección, colaboran con Roma); esenios (comunidades apartadas, pureza, Qumrán); zelotes (lucha armada contra Roma).",
      "Distancia Nazaret-Jerusalén: unos 120 km en línea recta; a pie, entre 3 y 5 días.",
      "Lucas 4,16-21: Jesús lee Isaías 61 y dice «Hoy se ha cumplido esta Escritura».",
    ],
    rubric: [
      { criterion: "Conocimiento del contexto", levels: ["Datos sueltos o confusos.", "Explica Roma, el Templo y Galilea con corrección.", "Relaciona política, religión y economía con ejemplos."] },
      { criterion: "Grupos religiosos", levels: ["Confunde los grupos.", "Distingue al menos tres grupos.", "Distingue los cuatro y los relaciona con episodios de los evangelios."] },
      { criterion: "Interpretación de textos", levels: ["Resume sin interpretar.", "Interpreta el texto con ayuda.", "Interpreta el texto y lo relaciona con el contexto y con su vida."] },
      { criterion: "Trabajo en grupo", levels: ["Participa poco.", "Cumple su parte.", "Lidera, ayuda y mejora el trabajo común."] },
    ],
    adaptations: {
      support: "Entregue la tabla de grupos parcialmente rellena y un glosario con: Mesías, sinagoga, Templo, sumo sacerdote, prefecto, tributo.",
      extension: "Investigan los manuscritos del mar Muerto (Qumrán): cómo se descubrieron, qué contienen y por qué son importantes para conocer la Biblia.",
    },
  },
  bachillerato: {
    goals: [
      "Analizar el contexto histórico de la encarnación desde la fe de la Iglesia.",
      "Comentar textos bíblicos y magisteriales (Marcos 12, Catecismo 439-440, Nostra aetate 4).",
      "Valorar la pluralidad del judaísmo del Segundo Templo y la judeidad de Jesús.",
      "Argumentar oralmente y por escrito sobre fe, historia y poder político.",
    ],
    duration: "Una sesión de 55 minutos. Con el debate o el seminario, se puede ampliar a dos.",
    materials: [
      "Capítulo en proyector o en dispositivos.",
      "Textos impresos: Marcos 12,13-17; Juan 1,14; Catecismo 439-440; Nostra aetate 4.",
      "Ficha de comentario de texto.",
    ],
    session: [
      { minutes: 10, title: "Pregunta de partida", description: "«¿Por qué importa el contexto histórico para la fe?». Lluvia de ideas y lectura de Juan 1,14 y Gálatas 4,4." },
      { minutes: 15, title: "Lectura individual", description: "Leen el capítulo y subrayan tres ideas que les sorprendan y una pregunta que les quede." },
      { minutes: 20, title: "Comentario de texto", description: "En parejas comentan Marcos 12,13-17: contexto, quiénes preguntan, qué trampa hay, qué responde Jesús, qué vigencia tiene hoy." },
      { minutes: 10, title: "Puesta en común", description: "Ponga en común las preguntas que les han quedado y relacione con el número 4 de Nostra aetate." },
    ],
    dynamics: [
      { title: "Debate formal", description: "Moción: «La fe tiene consecuencias políticas». Dos equipos, turnos de 3 minutos, réplica y conclusión. Use Marcos 12,17 como texto de apoyo." },
      { title: "Seminario del Catecismo", description: "Lean los números 439-440 y elaboren un mapa conceptual: Mesías esperado / Mesías revelado en Jesús." },
      { title: "Carta desde Jerusalén", description: "Escriben una carta de un peregrino del siglo I que llega al Templo en Pascua, integrando al menos cinco datos históricos del capítulo." },
    ],
    answers: [
      "Quiz: las respuestas correctas están marcadas en la propia página al terminar.",
      "Marcos 12: fariseos y herodianos tienden una trampa; si Jesús dice «no paguéis» se enfrenta a Roma, si dice «pagad» pierde al pueblo. Su respuesta distingue el orden político y la soberanía de Dios.",
      "Catecismo 439-440: Jesús aceptó el título de Mesías pero lo vivió como el Siervo que da la vida, no como un rey político.",
      "Nostra aetate 4: la Iglesia reconoce su vínculo con el pueblo judío, rechaza culpar a todos los judíos de la muerte de Jesús y condena el antisemitismo.",
    ],
    rubric: [
      { criterion: "Comprensión histórica", levels: ["Descripción superficial.", "Contexto correcto y ordenado.", "Contexto preciso, con matices y relación entre factores."] },
      { criterion: "Comentario de texto", levels: ["Paráfrasis.", "Sitúa e interpreta el texto.", "Sitúa, interpreta y actualiza con argumentos propios."] },
      { criterion: "Argumentación", levels: ["Opiniones sin apoyo.", "Argumentos con algún apoyo en textos.", "Argumentos sólidos, con fuentes y respeto a otras posturas."] },
    ],
    adaptations: {
      support: "Proporcione una guía de preguntas para el comentario de texto y un glosario (encarnación, Mesías, Segundo Templo, sanedrín).",
      extension: "Lectura de la versión Universidad del capítulo y breve informe sobre una de sus preguntas debatidas.",
    },
  },
};
