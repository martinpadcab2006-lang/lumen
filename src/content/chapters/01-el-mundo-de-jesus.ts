import type { Chapter } from "../chapter-types";

const options = (...texts: readonly string[]) => texts.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));

/**
 * Capítulo 1 de la historia: el mundo judío y romano en el que nace Jesús.
 * Descubre y Universidad: histórico y cultural. Colegios: desde la fe católica.
 */
export const chapter01: Chapter = {
  slug: "el-mundo-de-jesus",
  number: 1,
  title: "El mundo en el que nació Jesús",
  period: "63 a. C. – 70 d. C.",

  places: {
    jerusalen: { name: "Jerusalén", lat: 31.778, lon: 35.235 },
    belen: { name: "Belén", lat: 31.705, lon: 35.2 },
    nazaret: { name: "Nazaret", lat: 32.7, lon: 35.3 },
    seforis: { name: "Séforis", lat: 32.753, lon: 35.279 },
    cafarnaum: { name: "Cafarnaúm", lat: 32.881, lon: 35.575 },
    cesarea: { name: "Cesarea Marítima", lat: 32.5, lon: 34.89 },
    qumran: { name: "Qumrán", lat: 31.741, lon: 35.459 },
    masada: { name: "Masada", lat: 31.316, lon: 35.354 },
    jerico: { name: "Jericó", lat: 31.871, lon: 35.444 },
  },

  stops: [
    { id: "roma", year: "63 a. C.", place: "jerusalen" },
    { id: "herodes", year: "37 – 4 a. C.", place: "cesarea" },
    { id: "templo", year: "Siglo I", place: "jerusalen" },
    { id: "galilea", year: "Siglo I", place: "nazaret" },
    { id: "grupos", year: "Siglo I", place: "qumran" },
    { id: "espera", year: "26 – 36 d. C.", place: "cesarea" },
    { id: "guerra", year: "66 – 73 d. C.", place: "masada" },
  ],

  images: {
    maqueta: {
      commonsFile: "Jerusalem_Modell_BW_2.JPG",
      alt: "Maqueta de Jerusalén con el gran Templo de Herodes en el centro, rodeado de murallas y pórticos.",
      caption: "Así era Jerusalén en el siglo I, con el Templo de Herodes en el centro. Maqueta del Museo de Israel.",
      credit: "Foto: Berthold Werner, Wikimedia Commons",
    },
    pilato: {
      commonsFile: "Pilate_Inscription.JPG",
      alt: "Bloque de piedra con una inscripción latina desgastada en la que se lee el nombre de Poncio Pilato.",
      caption: "La «piedra de Pilato», hallada en Cesarea Marítima en 1961: la prueba arqueológica de que Poncio Pilato fue prefecto de Judea.",
      credit: "Wikimedia Commons",
    },
    rollo: {
      commonsFile: "Great_Isaiah_Scroll_Ch53.jpg",
      alt: "Fragmento de un rollo antiguo escrito en hebreo con columnas de letras.",
      caption: "El Gran Rollo de Isaías, uno de los manuscritos del mar Muerto hallados en Qumrán a partir de 1947.",
      credit: "Wikimedia Commons",
    },
    barca: {
      commonsFile: "Ancient_Boat_of_Sea_of_Galilee.jpg",
      alt: "Restos de una barca de madera antigua expuestos en un museo.",
      caption: "Una barca de pesca del siglo I, encontrada en 1986 en la orilla del mar de Galilea. Así eran las barcas de los pescadores de los evangelios.",
      credit: "Wikimedia Commons",
    },
    bruegel: {
      commonsFile: "Christus_und_die_Apostel_am_See_Genezareth_(Bruegel_1553).jpg",
      alt: "Pintura de un paisaje con un gran lago, barcas de pescadores y montañas al fondo.",
      caption: "Cristo y los apóstoles en el mar de Tiberíades, atribuido a Pieter Bruegel el Viejo (1553).",
      credit: "Dominio público, Wikimedia Commons",
    },
  },

  media: [
    {
      kind: "video",
      title: "Judea, Samaría y Galilea en tiempos de Jesús: geografía, historia y cultura",
      by: "Conferencia de Eva Tobalina",
      url: "https://www.youtube.com/watch?v=A37HqEjTSu4",
      youtubeId: "A37HqEjTSu4",
      note: "Un recorrido por las regiones de la tierra de Jesús, su gente y su cultura.",
      audiences: ["eso", "bachillerato", "universidad", "descubre"],
      reviewed: false,
    },
    {
      kind: "video",
      title: "Palestina en tiempos de Jesús: sociedad",
      by: "YouTube",
      url: "https://www.youtube.com/watch?v=n96S63sHvGg",
      youtubeId: "n96S63sHvGg",
      note: "Cómo estaba organizada la sociedad: familias, oficios, ricos y pobres.",
      audiences: ["descubre", "eso"],
      reviewed: false,
    },
    {
      kind: "video",
      title: "La infancia de Jesús, historia bíblica para niños",
      by: "YouTube",
      url: "https://www.youtube.com/watch?v=FNgYQXOWgX4",
      youtubeId: "FNgYQXOWgX4",
      note: "Dibujos animados sobre cómo creció Jesús en Nazaret.",
      audiences: ["primaria"],
      reviewed: false,
    },
    {
      kind: "podcast",
      title: "Palestina en tiempo de Jesús: geografía, historia y cultura",
      by: "Docuhistoria (iVoox)",
      url: "https://www.ivoox.com/en/palestina-tiempo-jesus-geografia-historia-y-audios-mp3_rf_96250016_1.html",
      note: "Para escuchar mientras vas en el autobús: la tierra de Jesús, región a región.",
      audiences: ["descubre", "eso", "bachillerato", "universidad"],
      reviewed: false,
    },
    {
      kind: "podcast",
      title: "Poncio Pilato, el gobernador romano en la Palestina de Jesús",
      by: "Historias del Retabillo (iVoox)",
      url: "https://www.ivoox.com/en/poncio-pilato-gobernador-romano-palestina-audios-mp3_rf_105515959_1.html",
      note: "Quién era el hombre que gobernaba Judea en nombre de Roma.",
      audiences: ["descubre", "bachillerato", "universidad"],
      reviewed: false,
    },
    {
      kind: "entrevista",
      title: "Aproximación al Jesús histórico, entrevista a Antonio Piñero",
      by: "Antonio Piñero, catedrático emérito de Filología Griega (Universidad Complutense)",
      url: "https://www.youtube.com/watch?v=zS9Gcapz7hU",
      youtubeId: "zS9Gcapz7hU",
      note: "Uno de los grandes especialistas españoles explica cómo trabajan los historiadores con las fuentes sobre Jesús y su época.",
      audiences: ["universidad", "bachillerato"],
      reviewed: false,
    },
    {
      kind: "serie",
      title: "The Chosen (Los elegidos)",
      by: "Dallas Jenkins, 2019 –",
      url: "https://www.youtube.com/watch?v=sIvArkHt_G0",
      trailerYoutubeId: "sIvArkHt_G0",
      whereToWatch: "https://www.justwatch.com/es/buscar?q=The%20Chosen",
      note: "Serie que recrea con mucho detalle la vida diaria en Galilea: pescadores, recaudadores de impuestos, fariseos y soldados romanos.",
      audiences: ["descubre", "eso", "bachillerato"],
      reviewed: false,
    },
    {
      kind: "pelicula",
      title: "Ben-Hur",
      by: "William Wyler, 1959",
      url: "https://www.youtube.com/watch?v=NR1ZHKw09n8",
      trailerYoutubeId: "NR1ZHKw09n8",
      whereToWatch: "https://www.justwatch.com/es/buscar?q=Ben-Hur%201959",
      note: "Un clásico ambientado en la Judea ocupada por Roma, en los mismos años en que vivió Jesús. Ficción, pero con un buen retrato del ambiente.",
      audiences: ["descubre", "bachillerato", "universidad"],
      reviewed: false,
    },
  ],

  versions: {
    descubre: {
      title: "El mundo en el que nació Jesús",
      inAMinute: [
        "Jesús nació en un rincón pequeño del Imperio romano, en tierra judía.",
        "Mandaba Roma, pero a través de reyes locales como Herodes el Grande.",
        "El centro de todo era el Templo de Jerusalén, uno de los edificios más impresionantes de su tiempo.",
        "Los judíos no pensaban todos igual: había fariseos, saduceos, esenios y rebeldes.",
        "Muchos esperaban a un Mesías que los liberara. En ese ambiente apareció Jesús.",
      ],
      intro:
        "Para entender a Jesús hay que entender su mundo. Imagina un país del tamaño de la Comunidad Valenciana, ocupado por la mayor potencia de la época, con un Templo enorme en su capital y un pueblo que llevaba siglos esperando a alguien. Así era la tierra donde nació el cristianismo.",
      sections: [
        {
          stop: "roma",
          heading: "Llegan los romanos",
          body: [
            "En el año 63 a. C., el general romano Pompeyo entró en Jerusalén con sus legiones. Dos hermanos se disputaban el trono y Roma aprovechó para quedarse.",
            "Desde entonces, la tierra de Israel formó parte del mundo romano. Roma no siempre gobernaba directamente: prefería poner a reyes locales que le fueran fieles y le pagaran impuestos.",
          ],
          aside: { label: "Dato", text: "La región tenía unos 240 kilómetros de norte a sur. Se podía recorrer a pie en una semana." },
        },
        {
          stop: "herodes",
          heading: "Herodes, el rey constructor",
          body: [
            "El más famoso de esos reyes fue Herodes el Grande, que gobernó del 37 al 4 a. C. Era hábil, ambicioso y desconfiado: mandó matar a varios miembros de su propia familia.",
            "También fue uno de los grandes constructores de la Antigüedad. Levantó el puerto de Cesarea Marítima, la fortaleza de Masada sobre el desierto y, sobre todo, reconstruyó a lo grande el Templo de Jerusalén.",
            "Jesús nació en los últimos años de su reinado. Por eso los historiadores sitúan su nacimiento hacia el 6 o el 4 a. C.: sí, antes del «año cero».",
          ],
          aside: { label: "¿Sabías que…?", text: "El año 1 se calculó en el siglo VI, y el monje que lo hizo se equivocó por unos pocos años." },
        },
        {
          stop: "templo",
          heading: "El Templo, el corazón de todo",
          body: [
            "El Templo de Jerusalén era el lugar más sagrado para los judíos: allí habitaba la presencia de Dios. Ocupaba una explanada enorme, rodeada de pórticos, y brillaba de mármol y oro.",
            "Tres veces al año, en las grandes fiestas como la Pascua, miles de peregrinos llenaban la ciudad. Era centro religioso, pero también económico y político: allí se pagaba un impuesto, se cambiaba dinero y mandaba el sumo sacerdote.",
          ],
          image: "maqueta",
        },
        {
          stop: "galilea",
          heading: "La vida en Galilea",
          body: [
            "Jesús creció lejos de la capital, en Nazaret, una aldea de Galilea de apenas unos cientos de habitantes. La gente vivía del campo, del ganado y, junto al lago, de la pesca.",
            "Se hablaba arameo en casa, se rezaba y se leían las Escrituras en hebreo, y el griego servía para comerciar. Los romanos usaban el latín.",
            "La vida era dura: además del tributo a Roma y del impuesto del Templo, muchos campesinos estaban endeudados. Las parábolas de Jesús, llenas de sembradores, deudores y pescadores, salen de este mundo.",
          ],
          image: "barca",
        },
        {
          stop: "grupos",
          heading: "No todos pensaban igual",
          body: [
            "El historiador judío Flavio Josefo, que vivió en el siglo I, habla de varias «escuelas» dentro del judaísmo:",
            "Los fariseos, maestros muy populares que querían vivir la Ley de Dios en la vida diaria. Los saduceos, la aristocracia de los sacerdotes del Templo. Los esenios, que se apartaban a vivir en comunidad; en Qumrán, junto al mar Muerto, se encontraron sus manuscritos. Y grupos dispuestos a la lucha armada contra Roma, a los que más tarde se llamó zelotes.",
          ],
          image: "rollo",
          aside: { label: "Un hallazgo de película", text: "En 1947, un pastor beduino que buscaba una cabra perdida encontró en una cueva los primeros manuscritos del mar Muerto." },
        },
        {
          stop: "espera",
          heading: "Esperando a alguien",
          body: [
            "Tras la muerte de Herodes, Judea pasó a ser gobernada directamente por funcionarios romanos. Entre los años 26 y 36 el prefecto fue Poncio Pilato.",
            "Mucha gente esperaba un Mesías, un enviado de Dios que traería justicia y libertad. Cada grupo lo imaginaba de una manera: un rey descendiente de David, un gran profeta o un sacerdote santo.",
            "En ese ambiente, un predicador de Nazaret empezó a hablar del «Reino de Dios».",
          ],
          image: "pilato",
        },
        {
          stop: "guerra",
          heading: "Epílogo: el fin del Templo",
          body: [
            "La tensión con Roma acabó estallando en el año 66. La guerra fue terrible: en el año 70 las legiones de Tito destruyeron Jerusalén y su Templo, que nunca se reconstruyó. Los últimos rebeldes resistieron en Masada hasta el 73 o 74.",
            "Para entonces, los seguidores de Jesús ya se habían extendido por el Imperio. Pero esa es otra historia.",
          ],
        },
      ],
      quiz: [
        { id: "d1-pompeyo", prompt: "¿Qué general romano entró en Jerusalén en el año 63 a. C.?", options: options("Julio César", "Pompeyo", "Tito", "Augusto"), correctId: "b", explanation: "Pompeyo aprovechó una guerra entre dos hermanos por el trono para poner la región bajo el control de Roma." },
        { id: "d1-herodes", prompt: "¿Por qué decimos que Jesús nació «antes de Cristo»?", options: options("Porque es una errata de la Biblia", "Porque el cálculo del año 1 se hizo con un pequeño error", "Porque nació en Egipto", "No es verdad"), correctId: "b", explanation: "Jesús nació antes de la muerte de Herodes (4 a. C.). El monje que fijó el año 1 en el siglo VI se equivocó en unos pocos años." },
        { id: "d1-lengua", prompt: "¿Qué lengua se hablaba en casa en Galilea?", options: options("Latín", "Griego", "Arameo", "Árabe"), correctId: "c", explanation: "El arameo era la lengua de cada día; el hebreo, la de las Escrituras; el griego, la del comercio; y el latín, la de Roma." },
        { id: "d1-qumran", prompt: "¿Dónde se encontraron los manuscritos del mar Muerto?", options: options("En Qumrán", "En Roma", "En Belén", "En Masada"), correctId: "a", explanation: "En unas cuevas cerca de Qumrán, a partir de 1947. Se relacionan con los esenios." },
      ],
      next: "En el próximo capítulo: un carpintero de Nazaret deja su pueblo y empieza a predicar junto al lago. En tres años cambiará la historia.",
    },

    primaria: {
      title: "El país donde nació Jesús",
      inAMinute: [
        "Jesús nació en un país pequeño junto al mar, que hoy llamamos Tierra Santa.",
        "Allí vivía el pueblo judío, el pueblo al que Dios había hecho grandes promesas.",
        "Mandaban los romanos, que venían de muy lejos.",
        "Jesús creció en Nazaret con María y José.",
      ],
      intro:
        "Hace más de dos mil años, Dios envió a su Hijo Jesús a vivir entre nosotros. Pero ¿cómo era el lugar donde nació y creció? ¡Vamos a descubrirlo!",
      sections: [
        {
          stop: "roma",
          heading: "Un país pequeño y especial",
          body: [
            "Jesús nació en un país pequeño, entre el mar Mediterráneo y el desierto. Tenía montañas, campos de trigo, olivos y un gran lago lleno de peces.",
            "Allí vivía el pueblo judío. Dios lo había elegido y le había prometido que un día enviaría a un Salvador.",
          ],
        },
        {
          stop: "herodes",
          heading: "Mandaban los romanos",
          body: [
            "En aquella época mandaban los romanos, que tenían un imperio enorme. Ponían reyes y soldados, y cobraban impuestos.",
            "Cuando nació Jesús, el rey se llamaba Herodes.",
          ],
        },
        {
          stop: "templo",
          heading: "El Templo, la casa de Dios",
          body: [
            "En la ciudad de Jerusalén estaba el Templo, un edificio grande y precioso. Era la casa de Dios para los judíos. Allí iban a rezar y a celebrar las grandes fiestas.",
            "Cuando Jesús tenía doce años, fue al Templo con María y José, y se quedó hablando con los maestros.",
          ],
          image: "maqueta",
        },
        {
          stop: "galilea",
          heading: "Una familia en Nazaret",
          body: [
            "Jesús creció en Nazaret, un pueblo pequeño con casas de piedra. José era artesano y Jesús aprendió con él a trabajar.",
            "Los niños ayudaban en casa, cuidaban los animales, aprendían a rezar y escuchaban las historias de la Biblia.",
          ],
          image: "barca",
        },
        {
          stop: "espera",
          heading: "Esperaban a alguien muy especial",
          body: [
            "El pueblo judío esperaba al Mesías, el Salvador que Dios había prometido.",
            "Los cristianos creemos que ese Salvador es Jesús: Dios cumplió su promesa.",
          ],
        },
      ],
      activities: [
        "Busca en el mapa Nazaret, Belén y Jerusalén. ¿Cuál está más al norte?",
        "Dibuja cómo imaginas la casa de Jesús en Nazaret.",
        "Pregunta en casa: ¿qué promesa importante te han hecho alguna vez? ¿Se cumplió?",
      ],
      quiz: [
        { id: "p1-pueblo", prompt: "¿En qué pueblo creció Jesús?", options: options("En Roma", "En Nazaret", "En Madrid"), correctId: "b", explanation: "Jesús creció en Nazaret, con María y José." },
        { id: "p1-templo", prompt: "¿Qué era el Templo de Jerusalén?", options: options("Un castillo", "La casa de Dios para los judíos", "Un mercado"), correctId: "b", explanation: "Era el lugar más sagrado, donde los judíos iban a rezar y a celebrar fiestas." },
        { id: "p1-mandaban", prompt: "¿Quiénes mandaban en aquella época?", options: options("Los romanos", "Los egipcios", "Los vikingos"), correctId: "a", explanation: "El país formaba parte del Imperio romano." },
      ],
      next: "En el próximo capítulo conoceremos a Jesús cuando ya era mayor: cómo eligió a sus amigos y qué nos enseñó.",
    },

    eso: {
      title: "El mundo en el que nació Jesús",
      inAMinute: [
        "Dios preparó durante siglos a su pueblo, Israel, para la venida de Jesús.",
        "En tiempos de Jesús, la tierra de Israel estaba bajo el dominio de Roma.",
        "El Templo de Jerusalén era el centro de la vida religiosa judía.",
        "Había distintos grupos religiosos: fariseos, saduceos, esenios y zelotes.",
        "El pueblo esperaba al Mesías prometido. Los cristianos reconocen en Jesús a ese Mesías.",
      ],
      intro:
        "San Pablo escribe que «cuando llegó la plenitud de los tiempos, envió Dios a su Hijo, nacido de mujer» (Gálatas 4,4). Jesús no apareció en cualquier lugar ni en cualquier momento: nació en el pueblo de Israel, en una época concreta de la historia. Conocer ese mundo nos ayuda a entender mejor sus palabras y sus gestos.",
      sections: [
        {
          stop: "roma",
          heading: "Un pueblo bajo el dominio de Roma",
          body: [
            "Israel había vivido muchas etapas: los patriarcas, el Éxodo, los reyes David y Salomón, el destierro en Babilonia… En el año 63 a. C., el general romano Pompeyo conquistó Jerusalén y el país pasó a depender de Roma.",
            "Roma gobernaba a través de reyes locales y, más tarde, de funcionarios llamados prefectos. Los judíos podían practicar su religión, pero pagaban fuertes impuestos y soportaban la presencia de soldados extranjeros.",
          ],
        },
        {
          stop: "herodes",
          heading: "El rey Herodes",
          body: [
            "Herodes el Grande reinó del 37 al 4 a. C. con el apoyo de Roma. Fue un gran constructor (el puerto de Cesarea, la fortaleza de Masada, el nuevo Templo), pero también un rey cruel y desconfiado.",
            "El evangelio de Mateo sitúa el nacimiento de Jesús en tiempos de este rey. Por eso Jesús nació, en realidad, unos años antes del año 1.",
          ],
        },
        {
          stop: "templo",
          heading: "El Templo de Jerusalén",
          body: [
            "El Templo era el lugar de la presencia de Dios en medio de su pueblo. Allí los sacerdotes ofrecían sacrificios, y solo el sumo sacerdote entraba una vez al año en la parte más sagrada, el Santo de los Santos.",
            "Los judíos peregrinaban al Templo en las grandes fiestas: la Pascua, Pentecostés y las Tiendas. Jesús también lo hizo, y los evangelios cuentan cómo expulsó a los mercaderes porque habían convertido la casa de su Padre en un mercado.",
          ],
          image: "maqueta",
        },
        {
          stop: "galilea",
          heading: "La vida diaria en Galilea",
          body: [
            "Jesús vivió casi toda su vida en Nazaret, una pequeña aldea de Galilea. La mayoría de la gente eran campesinos, pastores, artesanos y pescadores.",
            "La familia y la sinagoga eran el centro de la vida. En la sinagoga, cada sábado, se rezaba y se leían y explicaban las Escrituras. Se hablaba arameo, la lengua de Jesús.",
            "Las parábolas de Jesús hablan de este mundo: el sembrador, la oveja perdida, la red de los pescadores o el padre que espera a su hijo.",
          ],
          image: "barca",
        },
        {
          stop: "grupos",
          heading: "Los grupos religiosos",
          body: [
            "Los fariseos eran maestros de la Ley muy respetados por el pueblo, que creían en la resurrección de los muertos. Los saduceos eran sacerdotes de familias poderosas, ligados al Templo, y no creían en la resurrección. Los esenios vivían en comunidades apartadas, como la de Qumrán, buscando una vida pura. Los zelotes defendían la lucha armada contra Roma.",
            "Jesús dialogó con todos ellos. Entre sus apóstoles estuvo Simón, llamado «el Zelote», y también Mateo, un recaudador de impuestos que trabajaba para los romanos.",
          ],
          image: "rollo",
        },
        {
          stop: "espera",
          heading: "La esperanza del Mesías",
          body: [
            "Los profetas habían anunciado que Dios enviaría un Mesías, un «ungido», para salvar a su pueblo. En tiempos de Jesús, muchos lo esperaban como un rey guerrero que expulsaría a los romanos.",
            "Para la fe de la Iglesia, Jesús es ese Mesías prometido, aunque no como muchos lo imaginaban: no vino a conquistar un reino de este mundo, sino a reconciliar a todos con Dios.",
          ],
          image: "pilato",
        },
      ],
      activities: [
        "Lee Lucas 2,41-52 (Jesús en el Templo a los doce años). ¿Qué te dice sobre la vida religiosa de su familia?",
        "Haz una tabla con los cuatro grupos religiosos: qué creían, a quién representaban y qué podían pensar de Jesús.",
        "Busca en el mapa Nazaret, Cafarnaúm, Jerusalén y Belén, y calcula la distancia entre Nazaret y Jerusalén.",
        "Elige una parábola y explica qué elementos de la vida en Galilea aparecen en ella.",
      ],
      quiz: [
        { id: "e1-plenitud", prompt: "Según san Pablo, ¿cuándo envió Dios a su Hijo?", options: options("Al principio de la creación", "En la plenitud de los tiempos", "Después de la caída de Roma", "En el año 1 exacto"), correctId: "b", explanation: "«Cuando llegó la plenitud de los tiempos, envió Dios a su Hijo, nacido de mujer» (Gálatas 4,4)." },
        { id: "e1-saduceos", prompt: "¿Qué grupo no creía en la resurrección de los muertos?", options: options("Los fariseos", "Los saduceos", "Los esenios", "Los apóstoles"), correctId: "b", explanation: "Los saduceos solo aceptaban lo que estaba escrito en la Torá y rechazaban la resurrección, que los fariseos sí defendían." },
        { id: "e1-santo", prompt: "¿Quién podía entrar en el Santo de los Santos del Templo?", options: options("Cualquier judío", "Los fariseos", "Solo el sumo sacerdote, una vez al año", "El rey Herodes"), correctId: "c", explanation: "Solo el sumo sacerdote, el día de Yom Kipur." },
        { id: "e1-mesias", prompt: "¿Qué significa «Mesías»?", options: options("Maestro", "Ungido", "Rey de Roma", "Profeta del desierto"), correctId: "b", explanation: "Mesías (en hebreo) y Cristo (en griego) significan «ungido»: elegido y consagrado por Dios." },
      ],
      next: "En el próximo capítulo: Jesús de Nazaret. Su bautismo en el Jordán, sus palabras y sus milagros, y el anuncio del Reino de Dios.",
    },

    bachillerato: {
      title: "La plenitud de los tiempos: el mundo de Jesús",
      inAMinute: [
        "La fe cristiana afirma que Dios se hizo hombre en un pueblo, un lugar y un momento concretos.",
        "Ese momento es el judaísmo del Segundo Templo bajo el dominio de Roma.",
        "Política, religión y economía estaban entrelazadas: el Templo era las tres cosas a la vez.",
        "La pluralidad de grupos judíos muestra un pueblo que buscaba cómo ser fiel a Dios.",
        "La espera mesiánica es la clave para entender la pregunta que recorre los evangelios: ¿quién es Jesús?",
      ],
      intro:
        "El cristianismo no es una idea abstracta, sino una fe que nace en la historia. La Iglesia confiesa que el Hijo de Dios «se hizo carne» (Juan 1,14), es decir, asumió una cultura, una lengua y un tiempo. Por eso, conocer el mundo de Jesús no es solo una curiosidad histórica: es una forma de tomarse en serio la encarnación.",
      sections: [
        {
          stop: "roma",
          heading: "Un pueblo bajo un imperio",
          body: [
            "Desde el año 63 a. C., cuando Pompeyo tomó Jerusalén, la tierra de Israel formó parte del sistema romano. Roma combinaba el control militar y fiscal con cierta tolerancia religiosa: los judíos, por ejemplo, estaban dispensados de dar culto al emperador.",
            "Esa convivencia era frágil. Para muchos judíos, pagar tributo a un poder pagano planteaba una pregunta de fondo: ¿a quién pertenece esta tierra, a Dios o al César? La misma pregunta que le harán a Jesús (Marcos 12,13-17).",
          ],
        },
        {
          stop: "herodes",
          heading: "Herodes y sus herederos",
          body: [
            "Herodes el Grande (37-4 a. C.) modernizó el país al estilo grecorromano y reconstruyó el Templo con un esplendor sin precedentes, pero muchos judíos piadosos lo veían como un usurpador.",
            "A su muerte, el reino se repartió entre sus hijos. Herodes Antipas gobernó Galilea durante toda la vida adulta de Jesús; en el año 6 d. C., Judea pasó a ser administrada directamente por prefectos romanos.",
          ],
        },
        {
          stop: "grupos",
          heading: "Un judaísmo plural",
          body: [
            "Flavio Josefo describe varias corrientes: fariseos, saduceos y esenios, además de una «cuarta filosofía» partidaria de la resistencia contra Roma. Compartían lo esencial (el Dios único, la Ley y el Templo), pero discrepaban sobre cómo vivirlo.",
            "Esta diversidad ayuda a leer los evangelios: las discusiones de Jesús con fariseos y saduceos no son peleas entre enemigos, sino debates dentro de una misma fe sobre la Ley, el sábado, la pureza o la resurrección.",
          ],
          image: "rollo",
        },
        {
          stop: "espera",
          heading: "La espera del Mesías",
          body: [
            "Los textos de la época muestran expectativas distintas: un rey de la casa de David, un profeta como Moisés, un sacerdote ideal; en Qumrán se esperaba incluso a dos mesías.",
            "La fe de la Iglesia confiesa que Jesús es el Cristo, pero de una manera que desconcertó a sus contemporáneos: un Mesías que sirve, sufre y muere. El Catecismo de la Iglesia Católica recuerda que Jesús aceptó el título de Mesías corrigiendo su sentido político (n. 439-440).",
          ],
          image: "pilato",
        },
        {
          stop: "guerra",
          heading: "Para pensar: ¿por qué entonces y allí?",
          body: [
            "La tradición cristiana ha visto en ese momento una «preparación evangélica»: un pueblo con una larga experiencia de Dios, una lengua común (el griego) y unas calzadas romanas que facilitarían que el mensaje se extendiera.",
            "Tras la destrucción del Templo en el año 70, el judaísmo se reorganizó en torno a los rabinos y la sinagoga, y los cristianos siguieron su propio camino. Ambos son herederos de ese mismo mundo.",
          ],
        },
      ],
      activities: [
        "Comentario de texto: lee Marcos 12,13-17 («Dad al César lo que es del César») y explica qué pregunta política y religiosa hay detrás.",
        "Debate en clase: ¿por qué crees que muchos de sus contemporáneos no reconocieron a Jesús como Mesías?",
        "Lee los números 439 y 440 del Catecismo de la Iglesia Católica y resume en cinco líneas cómo entendió Jesús su misión de Mesías.",
      ],
      quiz: [
        { id: "b1-encarnacion", prompt: "¿Qué afirma la encarnación?", options: options("Que Jesús fue solo un gran profeta", "Que el Hijo de Dios se hizo hombre en una historia concreta", "Que Dios se manifestó solo en sueños", "Que Jesús vivió fuera del tiempo"), correctId: "b", explanation: "«El Verbo se hizo carne y habitó entre nosotros» (Juan 1,14)." },
        { id: "b1-antipas", prompt: "¿Quién gobernaba Galilea durante la vida adulta de Jesús?", options: options("Herodes el Grande", "Herodes Antipas", "Poncio Pilato", "El sumo sacerdote"), correctId: "b", explanation: "Herodes Antipas gobernó Galilea y Perea entre el 4 a. C. y el 39 d. C." },
        { id: "b1-cesar", prompt: "«Dad al César lo que es del César…»: ¿a qué pregunta respondía Jesús?", options: options("Si había que rezar en el Templo", "Si era lícito pagar tributo a Roma", "Si había que seguir a los esenios", "Si el sábado se podía trabajar"), correctId: "b", explanation: "Le preguntaron, para ponerle a prueba, si era lícito pagar el tributo al César (Marcos 12,13-17)." },
        { id: "b1-josefo", prompt: "¿Qué historiador judío del siglo I describe los grupos religiosos de la época?", options: options("Tácito", "Flavio Josefo", "Filón de Alejandría", "Eusebio de Cesarea"), correctId: "b", explanation: "Flavio Josefo los describe en La guerra de los judíos y en Antigüedades judías." },
      ],
      next: "En el próximo capítulo: Jesús de Nazaret. ¿Qué dicen los evangelios y qué puede saber la historia de su vida, su mensaje y su muerte?",
    },

    universidad: {
      title: "Judea y Galilea en el siglo I: el contexto de Jesús",
      inAMinute: [
        "El marco es el judaísmo del Segundo Templo, bajo hegemonía romana desde el 63 a. C.",
        "Las fuentes principales son Flavio Josefo, Filón, los manuscritos de Qumrán, el Nuevo Testamento y la arqueología.",
        "La historiografía actual subraya la pluralidad del judaísmo de la época frente a imágenes simplificadas.",
        "Galilea y Judea tenían situaciones políticas y sociales distintas.",
        "Las expectativas mesiánicas eran diversas y no siempre centrales.",
      ],
      intro:
        "Este capítulo resume el estado de la cuestión sobre el contexto histórico de Jesús. Se distingue entre lo que dicen las fuentes, lo que reconstruye la investigación y lo que sigue en debate.",
      sections: [
        {
          stop: "roma",
          heading: "Marco político: de los asmoneos a Roma",
          body: [
            "Tras la revuelta macabea (167-164 a. C.), la dinastía asmonea gobernó un Estado judío independiente. La guerra civil entre Hircano II y Aristóbulo II facilitó la intervención de Pompeyo en el 63 a. C. (Josefo, Antigüedades judías XIV).",
            "Roma integró la región en su sistema de clientelas. El Senado nombró rey a Herodes en el 40 a. C.; tomó Jerusalén en el 37 a. C.",
          ],
        },
        {
          stop: "herodes",
          heading: "Herodes y la división del reino",
          body: [
            "El programa edilicio de Herodes (Cesarea Marítima, Sebaste, Masada, Herodión y el Templo) muestra la integración del reino en la cultura helenístico-romana.",
            "A su muerte (4 a. C.), Augusto repartió el territorio: Arquelao en Judea, Samaria e Idumea (depuesto el 6 d. C.), Antipas en Galilea y Perea, y Filipo en el noreste. Desde el 6 d. C., Judea fue una provincia gobernada por prefectos ecuestres; el censo de Quirinio provocó la resistencia de Judas el Galileo.",
          ],
        },
        {
          stop: "templo",
          heading: "El Templo y la aristocracia sacerdotal",
          body: [
            "El Templo era a la vez centro de culto, institución económica y sede de la autoridad del sumo sacerdote y del sanedrín, cuya composición y competencias exactas se discuten.",
            "Los sumos sacerdotes eran nombrados y destituidos por Herodes y, después, por los prefectos: Caifás ocupó el cargo entre c. 18 y 36 d. C., coincidiendo casi por completo con Pilato.",
          ],
          image: "maqueta",
        },
        {
          stop: "galilea",
          heading: "Galilea: economía y sociedad",
          body: [
            "La Galilea de Antipas era mayoritariamente agraria y judía. La refundación de Séforis y la fundación de Tiberíades (c. 20 d. C.) introdujeron centros urbanos a pocos kilómetros de Nazaret.",
            "Se debate su impacto: unos autores subrayan la presión fiscal y la concentración de tierras como trasfondo de la predicación de Jesús; otros insisten en una economía rural relativamente estable. Las excavaciones de Nazaret apuntan a una aldea de pocos cientos de habitantes.",
          ],
          image: "barca",
        },
        {
          stop: "grupos",
          heading: "Pluralidad religiosa",
          body: [
            "Josefo presenta tres «filosofías» (fariseos, saduceos y esenios) y una cuarta, de resistencia (Guerra judía II, 119-166; Antigüedades XVIII, 11-25). Se trata de una descripción en clave grecorromana, pensada para lectores no judíos.",
            "E. P. Sanders propuso hablar de un «judaísmo común» compartido por la mayoría, más allá de los grupos. Los manuscritos de Qumrán han transformado el conocimiento de la diversidad textual y teológica de la época.",
          ],
          image: "rollo",
        },
        {
          stop: "espera",
          heading: "Pilato y las expectativas mesiánicas",
          body: [
            "Poncio Pilato, prefecto entre el 26 y el 36, aparece en Josefo, en Filón (Legatio ad Gaium 299-305) y en la inscripción de Cesarea. Filón lo describe como inflexible; los evangelios, como vacilante. Ambas imágenes tienen intereses literarios propios.",
            "Las expectativas mesiánicas eran plurales (real-davídica, sacerdotal, profética) y no estaban presentes en todos los grupos. Josefo menciona varios líderes populares con pretensiones proféticas o regias en el siglo I.",
          ],
          image: "pilato",
        },
        {
          stop: "guerra",
          heading: "La guerra judía (66-73/74 d. C.)",
          body: [
            "La revuelta de 66 terminó con la destrucción del Templo en el año 70 y la caída de Masada. Supuso el fin de los saduceos y del culto sacrificial, y la reorganización del judaísmo en torno a los sabios rabínicos.",
            "Para la historia del cristianismo, la fecha es clave: la mayoría de los evangelios se escribieron después del 70, y sus relatos reflejan también ese contexto.",
          ],
        },
      ],
      debates: [
        {
          question: "¿Cómo de urbanizada y helenizada estaba Galilea?",
          positions: "Unos autores ven en Séforis y Tiberíades una fuerte influencia grecorromana; otros, a partir de la arqueología de las aldeas, defienden una Galilea rural, judía y conservadora.",
        },
        {
          question: "¿Retratan bien los evangelios a los fariseos?",
          positions: "La investigación reciente considera que la polémica evangélica refleja en parte los conflictos entre cristianos y judíos de finales del siglo I, y no solo los tiempos de Jesús.",
        },
      ],
      sources: [
        { text: "Flavio Josefo, Antigüedades judías (libros XIV-XVIII) y La guerra de los judíos (libro II)." },
        { text: "Filón de Alejandría, Legatio ad Gaium (Embajada a Cayo)." },
        { text: "E. P. Sanders, Judaism: Practice and Belief, 63 BCE – 66 CE. Londres, SCM Press, 1992." },
        { text: "John P. Meier, Un judío marginal. Nueva visión del Jesús histórico, vol. III: Compañeros y competidores. Estella, Verbo Divino." },
        { text: "Antonio Piñero, Año I. Israel y su mundo cuando nació Jesús. Madrid, Laberinto, 2008." },
        { text: "Gerd Theissen y Annette Merz, El Jesús histórico. Salamanca, Sígueme." },
        { text: "Emil Schürer, Historia del pueblo judío en tiempos de Jesús. Madrid, Cristiandad." },
        { text: "Sean Freyne, Galilee from Alexander the Great to Hadrian. Wilmington, Glazier, 1980." },
      ],
      quiz: [
        { id: "u1-pompeyo", prompt: "¿Qué conflicto facilitó la intervención de Pompeyo en el 63 a. C.?", options: options("La revuelta macabea", "La guerra civil entre Hircano II y Aristóbulo II", "La rebelión de Judas el Galileo", "La muerte de Herodes"), correctId: "b", explanation: "Los dos hermanos asmoneos se disputaban el poder y ambos buscaron el apoyo de Roma." },
        { id: "u1-provincia", prompt: "¿Desde qué año Judea fue gobernada directamente por prefectos romanos?", options: options("4 a. C.", "6 d. C.", "26 d. C.", "44 d. C."), correctId: "b", explanation: "Tras la destitución de Arquelao en el 6 d. C." },
        { id: "u1-sanders", prompt: "¿Qué propuso E. P. Sanders con el concepto de «judaísmo común»?", options: options("Que todos los judíos eran fariseos", "Que existía un núcleo de prácticas y creencias compartido más allá de los grupos", "Que los esenios eran mayoría", "Que no había diferencias entre Galilea y Judea"), correctId: "b", explanation: "Sanders subrayó lo que compartía la mayoría de la población, frente a una visión centrada solo en las élites y los grupos." },
        { id: "u1-filon", prompt: "¿En qué obra describe Filón a Pilato?", options: options("Antigüedades judías", "Legatio ad Gaium", "Anales", "Historia eclesiástica"), correctId: "b", explanation: "En la Legatio ad Gaium, 299-305." },
      ],
      next: "Capítulo 2: el Jesús histórico. Fuentes, criterios de historicidad y lo que la investigación considera más probable sobre su vida y su muerte.",
    },
  },
};
