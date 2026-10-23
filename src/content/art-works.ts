import type { ArtWorkKind } from "./art";

export type ArtPicture = { commonsFile: string; alt: string; caption: string; credit: string };

/** La ficha de una obra, un lugar o un artista. */
export type ArtWork = {
  slug: string;
  style: string;
  kind: ArtWorkKind;
  name: string;
  hook: string;
  picture: ArtPicture;
  facts: readonly { label: string; value: string }[];
  intro: readonly string[];
  /** «Fíjate en…»: detalles para aprender a mirar. */
  lookAt: readonly { title: string; text: string }[];
  curiosity: string;
  gallery?: readonly ArtPicture[];
  /** Dónde está, para el mapa. */
  place?: { name: string; lat: number; lon: number };
  sources: readonly string[];
};

export const artWorks: readonly ArtWork[] = [
  {
    slug: "catacumbas-de-priscila",
    style: "paleocristiano",
    kind: "lugar",
    name: "Las catacumbas de Priscila",
    hook: "Kilómetros de galerías bajo Roma donde los primeros cristianos enterraban a sus muertos y pintaban su esperanza.",
    picture: {
      commonsFile: "Catacombe di Priscilla, Rome - Fresco of a Christian Agape feast - Fractio panis - Greek chapel - 2nd - 4th century.jpg",
      alt: "Pintura antigua y desgastada de varias personas sentadas en torno a una mesa, en una pared de roca.",
      caption: "La «fracción del pan», en la llamada capilla griega. Unas personas comparten una comida: quizá un banquete funerario, quizá una imagen de la eucaristía.",
      credit: "Wikimedia Commons",
    },
    facts: [
      { label: "Qué es", value: "Cementerio subterráneo cristiano" },
      { label: "Dónde", value: "Vía Salaria, Roma" },
      { label: "Época", value: "Siglos II – V" },
      { label: "Tamaño", value: "Kilómetros de galerías en varios niveles" },
    ],
    intro: [
      "Las catacumbas no eran escondites. Eran cementerios. Los cristianos, como los judíos, preferían enterrar a sus muertos en lugar de incinerarlos, y como el terreno en Roma era caro, excavaron hacia abajo: galerías y más galerías en la roca blanda, con nichos en las paredes, uno encima de otro.",
      "Las de Priscila están bajo la Vía Salaria, al norte de Roma, en terrenos que pertenecían a una familia noble. Se las llamó «la reina de las catacumbas» porque allí se enterró a varios papas, como Silvestre I, y a muchos mártires.",
      "Sus paredes conservan algunas de las pinturas cristianas más antiguas que existen: escenas de la Biblia, símbolos, una comida compartida y la que muchos consideran la imagen más antigua conocida de María con el niño Jesús.",
    ],
    lookAt: [
      { title: "Los nichos", text: "Los huecos alargados de las paredes se llaman lóculos. Se cerraban con una losa o con ladrillos, y a veces se escribía el nombre del difunto y una frase como «en paz»." },
      { title: "La comida compartida", text: "En la pintura de la capilla griega, siete personas comparten pan y pescado. Es el origen del nombre «fracción del pan», como llamaban los primeros cristianos a la eucaristía." },
      { title: "La Virgen con el niño", text: "En otra galería, una mujer sostiene a un niño mientras un hombre señala una estrella. Se suele fechar en el siglo III y se interpreta como María con Jesús y un profeta." },
      { title: "Los orantes", text: "Figuras de pie con los brazos abiertos: así rezaban los primeros cristianos. Representan el alma del difunto que reza en el más allá." },
    ],
    curiosity: "Las catacumbas de Roma se olvidaron durante siglos. En 1578, unos obreros encontraron por casualidad una galería junto a la Vía Salaria, y desde entonces empezaron a explorarse. Hoy las de Priscila se pueden visitar con guía.",
    place: { name: "Roma", lat: 41.931, lon: 12.511 },
    sources: ["Vincenzo Fiocchi Nicolai, Fabrizio Bisconti y Danilo Mazzoleni, Las catacumbas cristianas de Roma, Schnell & Steiner, 1999"],
  },
  {
    slug: "el-buen-pastor",
    style: "paleocristiano",
    kind: "obra",
    name: "El Buen Pastor",
    hook: "La imagen de Jesús que más repitieron los primeros cristianos: un joven pastor con una oveja a hombros.",
    picture: {
      commonsFile: "Il Buon Pastore, III-IV sec, Museo Pio Cristiano -FG.jpg",
      alt: "Estatua de mármol de un joven con túnica corta que lleva una oveja sobre los hombros.",
      caption: "El Buen Pastor, estatua de mármol de los siglos III-IV. Museo Pío Cristiano, Ciudad del Vaticano.",
      credit: "Wikimedia Commons",
    },
    facts: [
      { label: "Qué es", value: "Tema del arte cristiano antiguo" },
      { label: "Dónde aparece", value: "Catacumbas, sarcófagos, estatuas y mosaicos" },
      { label: "Época", value: "Siglos III – V" },
      { label: "Ejemplo famoso", value: "Estatua del Museo Pío Cristiano (Vaticano)" },
    ],
    intro: [
      "Antes de que hubiera crucifijos, la imagen favorita de Jesús era esta: un joven pastor, sin barba, con túnica corta, que lleva una oveja sobre los hombros. Aparece en las paredes de las catacumbas, en los sarcófagos y en pequeñas estatuas.",
      "La idea viene de los evangelios. Jesús dice «Yo soy el buen pastor» y cuenta la parábola de la oveja perdida: un pastor deja a las noventa y nueve para buscar a la que se ha extraviado y, cuando la encuentra, la carga sobre los hombros, contento.",
      "Pero la forma la tomaron del arte griego y romano, donde desde hacía siglos se esculpían figuras de hombres con un animal a hombros. Para un vecino pagano era una imagen corriente; para un cristiano, era Cristo, que salva a cada uno.",
    ],
    lookAt: [
      { title: "Un Jesús joven y sin barba", text: "En los primeros siglos se representaba a Jesús joven, como un pastor o un maestro. La imagen de Jesús con barba y pelo largo se impuso después." },
      { title: "La túnica corta", text: "Es la ropa de trabajo de un pastor del campo, no la de un rey ni la de un sacerdote." },
      { title: "La oveja", text: "Representa a cada creyente, y en las tumbas, al difunto que el pastor lleva a casa." },
      { title: "La evolución", text: "Compara esta estatua con el mosaico de Gala Placidia, del siglo V: el pastor ya lleva una túnica dorada, un halo y una cruz. Del pastor humilde al rey del cielo." },
    ],
    curiosity: "Tras la legalización del cristianismo, el Buen Pastor fue desapareciendo poco a poco del arte: la Iglesia, ya oficial, prefirió imágenes de Cristo como rey y juez del universo.",
    gallery: [
      {
        commonsFile: "Good Shepherd Galla Placidia in Ravenna.jpg",
        alt: "Mosaico de un pastor joven con túnica dorada sentado entre ovejas, con una cruz en la mano.",
        caption: "El Buen Pastor del mausoleo de Gala Placidia (Rávena), siglo V.",
        credit: "Wikimedia Commons",
      },
    ],
    sources: ["Evangelio de Juan 10, 11; evangelio de Lucas 15, 3-7", "Robin M. Jensen, Understanding Early Christian Art, Routledge, 2000"],
  },
  {
    slug: "sarcofago-de-junio-basso",
    style: "paleocristiano",
    kind: "obra",
    name: "El sarcófago de Junio Basso",
    hook: "Un tebeo de mármol del año 359: diez escenas de la Biblia esculpidas para la tumba de un alto cargo de Roma.",
    picture: {
      commonsFile: "Sarcophagus of Junius Bassus.jpg",
      alt: "Frente de un sarcófago de mármol dividido en diez escenas con columnas, cinco arriba y cinco abajo.",
      caption: "El sarcófago de Junio Basso (359). Museo del Tesoro de San Pedro, Ciudad del Vaticano.",
      credit: "Wikimedia Commons",
    },
    facts: [
      { label: "Qué es", value: "Sarcófago de mármol esculpido" },
      { label: "Fecha", value: "359" },
      { label: "Dónde está", value: "Museo del Tesoro de San Pedro, Vaticano" },
      { label: "Para quién", value: "Junio Basso, prefecto de Roma" },
    ],
    intro: [
      "Junio Basso era uno de los hombres más importantes de Roma: prefecto de la ciudad, algo así como su alcalde y juez supremo. Murió en el año 359, y la inscripción de su sarcófago dice que se había bautizado poco antes.",
      "Su familia encargó un sarcófago de lujo, de mármol, con la parte delantera dividida en diez escenas enmarcadas por columnas, como si fueran las viñetas de un cómic. Arriba y abajo se mezclan historias del Antiguo y del Nuevo Testamento.",
      "Se encontró en 1597 al excavar bajo la basílica de San Pedro, y es una de las obras más importantes del arte cristiano antiguo.",
    ],
    lookAt: [
      { title: "Cristo en el centro, arriba", text: "Cristo, joven, sentado como un emperador entre Pedro y Pablo. Bajo sus pies, un personaje sostiene un manto: es el dios romano del cielo. Cristo reina por encima del cielo." },
      { title: "Cristo ante Pilato", text: "A la derecha, en dos viñetas, Jesús ante Pilato, que se dispone a lavarse las manos. Es la Pasión, contada sin sangre." },
      { title: "No hay crucifixión", text: "En el año 359 todavía no se representaba a Cristo clavado en la cruz: la crucifixión seguía siendo una ejecución infame. Se prefiere mostrar su juicio y su triunfo." },
      { title: "Adán y Eva, Daniel, Job", text: "Abajo aparecen el pecado de Adán y Eva, Daniel entre los leones y Job sufriendo. Historias de pecado y de salvación, perfectas para una tumba." },
    ],
    curiosity: "En el centro de la fila de abajo, Jesús entra en Jerusalén montado en un burro: la escena que hoy recuerda el Domingo de Ramos.",
    place: { name: "Ciudad del Vaticano", lat: 41.902, lon: 12.454 },
    sources: ["Elizabeth Struthers Malbon, The Iconography of the Sarcophagus of Junius Bassus, Princeton University Press, 1990"],
  },
  {
    slug: "mausoleo-de-gala-placidia",
    style: "paleocristiano",
    kind: "lugar",
    name: "El mausoleo de Gala Placidia",
    hook: "Un edificio de ladrillo sencillo por fuera y, por dentro, un cielo de mosaico azul lleno de estrellas de oro.",
    picture: {
      commonsFile: "Mausoleum of Galla Placidia mosaics (Ravenna).jpg",
      alt: "Interior de un pequeño edificio cubierto por completo de mosaicos azules y dorados.",
      caption: "El interior del mausoleo de Gala Placidia (Rávena), siglo V.",
      credit: "Wikimedia Commons",
    },
    facts: [
      { label: "Qué es", value: "Pequeño edificio funerario en forma de cruz" },
      { label: "Dónde", value: "Rávena (Italia)" },
      { label: "Fecha", value: "Hacia 425 – 450" },
      { label: "Patrimonio", value: "Monumentos paleocristianos de Rávena, Patrimonio Mundial de la UNESCO" },
    ],
    intro: [
      "Gala Placidia fue una de las mujeres más poderosas de su tiempo: hija del emperador Teodosio, que hizo del cristianismo la religión oficial, y madre del emperador Valentiniano III, por quien gobernó durante años. Rávena era entonces la capital del Imperio de Occidente.",
      "El edificio que lleva su nombre es pequeño, de ladrillo, con forma de cruz. Por fuera no llama la atención. Pero al entrar, la luz que se cuela por ventanas de alabastro ilumina un interior cubierto de mosaicos de colores intensos: azul noche, oro, verde y blanco.",
      "Aunque se le llama su mausoleo, Gala Placidia murió en Roma en el año 450, y es probable que no esté enterrada aquí.",
    ],
    lookAt: [
      { title: "La cúpula estrellada", text: "Un cielo azul oscuro con cientos de estrellas doradas que giran en círculos alrededor de una cruz de oro. Es una imagen del cielo y de la victoria de Cristo." },
      { title: "El Buen Pastor", text: "Sobre la entrada, Cristo como pastor, sentado entre sus ovejas, pero ya con túnica de oro, halo y una gran cruz: el pastor se ha convertido en rey." },
      { title: "San Lorenzo", text: "Enfrente, el diácono Lorenzo corre hacia la parrilla en la que, según la tradición, murió mártir en el año 258." },
      { title: "Los ciervos", text: "Dos ciervos beben de una fuente: una imagen del salmo «Como busca la cierva corrientes de agua, así te busca mi alma, Dios mío»." },
    ],
    curiosity: "Las ventanas no tienen cristal, sino finas láminas de alabastro que dejan pasar una luz dorada y suave. Dentro, el mausoleo parece iluminado desde el propio mosaico.",
    gallery: [
      {
        commonsFile: "Good Shepherd Galla Placidia in Ravenna.jpg",
        alt: "Mosaico de un pastor joven con túnica dorada sentado entre ovejas.",
        caption: "El Buen Pastor, sobre la entrada del mausoleo.",
        credit: "Wikimedia Commons",
      },
    ],
    place: { name: "Rávena", lat: 44.421, lon: 12.197 },
    sources: ["UNESCO, Early Christian Monuments of Ravenna (1996)", "Deborah Mauskopf Deliyannis, Ravenna in Late Antiquity, Cambridge University Press, 2010"],
  },
  {
    slug: "santa-sofia",
    style: "bizantino",
    kind: "lugar",
    name: "Santa Sofía",
    hook: "Durante casi mil años, la iglesia más grande del mundo cristiano. Hoy, una mezquita que sigue asombrando.",
    picture: {
      commonsFile: "Hagia Sophia Mars 2013.jpg",
      alt: "Gran edificio con una enorme cúpula central rodeada de cúpulas menores y cuatro minaretes.",
      caption: "Santa Sofía, en Estambul. Los minaretes se añadieron después de 1453, cuando se convirtió en mezquita.",
      credit: "Wikimedia Commons",
    },
    facts: [
      { label: "Qué es", value: "Antigua catedral de Constantinopla, hoy mezquita" },
      { label: "Dónde", value: "Estambul (Turquía)" },
      { label: "Construcción", value: "532 – 537" },
      { label: "Arquitectos", value: "Antemio de Tralles e Isidoro de Mileto" },
      { label: "Cúpula", value: "Unos 31 metros de diámetro y más de 55 de altura" },
    ],
    intro: [
      "En el año 532, una revuelta en Constantinopla, la capital del Imperio bizantino, quemó media ciudad y la antigua catedral. El emperador Justiniano decidió levantar en su lugar algo nunca visto. En solo cinco años, miles de obreros construyeron Santa Sofía, la iglesia de la «Santa Sabiduría».",
      "Su gran novedad es la cúpula: enorme, apoyada sobre cuatro arcos, y rodeada en su base por una corona de cuarenta ventanas. Desde abajo parece que flota en el aire. Un historiador de la época dijo que parecía «suspendida del cielo por una cadena de oro»." ,
      "Fue la catedral de la Iglesia de Oriente durante casi mil años. En 1453, cuando los otomanos conquistaron Constantinopla, se convirtió en mezquita. En 1934 Turquía la transformó en museo, y en 2020 volvió a ser mezquita, aunque sigue abierta a los visitantes fuera de las horas de oración.",
    ],
    lookAt: [
      { title: "La corona de ventanas", text: "Las cuarenta ventanas de la base de la cúpula hacen que la luz entre por debajo y la cúpula parezca no tocar el edificio." },
      { title: "Los mosaicos de oro", text: "Tras siglos tapados con yeso, muchos se recuperaron en el siglo XX. El más famoso, en la galería superior, muestra a Cristo entre la Virgen y Juan el Bautista." },
      { title: "Dos religiones en un edificio", text: "Junto a los mosaicos cristianos cuelgan grandes medallones con nombres islámicos en caligrafía árabe, y en el ábside hay un mihrab que señala la dirección de La Meca." },
      { title: "Los minaretes", text: "Las cuatro torres finas que la rodean por fuera se añadieron en época otomana." },
    ],
    curiosity: "La cúpula original se hundió en el año 558 tras un terremoto. La que vemos es la reconstrucción, algo más alta, terminada en 562.",
    gallery: [
      {
        commonsFile: "Hagia Sophia Interior Dome.jpg",
        alt: "Vista desde abajo de una enorme cúpula dorada con una corona de ventanas en la base.",
        caption: "La cúpula vista desde el interior.",
        credit: "Wikimedia Commons",
      },
    ],
    place: { name: "Estambul", lat: 41.008, lon: 28.98 },
    sources: ["Procopio de Cesarea, Sobre los edificios, I, 1", "Rowland J. Mainstone, Hagia Sophia: Architecture, Structure and Liturgy, Thames & Hudson, 1988"],
  },
  {
    slug: "la-piedad",
    style: "renacimiento",
    kind: "obra",
    name: "La Piedad de Miguel Ángel",
    hook: "Un bloque de mármol convertido en la escena más tierna y dolorosa del arte cristiano, por un escultor de 24 años.",
    picture: {
      commonsFile: "Michelangelo's Pietà, St Peter's Basilica (1498–99).jpg",
      alt: "Escultura de mármol blanco de la Virgen María sentada, con el cuerpo de Jesús muerto en su regazo.",
      caption: "La Piedad (1498-1499), en la basílica de San Pedro del Vaticano.",
      credit: "Wikimedia Commons",
    },
    facts: [
      { label: "Autor", value: "Miguel Ángel Buonarroti" },
      { label: "Fecha", value: "1498 – 1499" },
      { label: "Material", value: "Mármol de Carrara" },
      { label: "Medidas", value: "Unos 174 × 195 cm" },
      { label: "Dónde está", value: "Basílica de San Pedro, Ciudad del Vaticano" },
    ],
    intro: [
      "En 1498, un cardenal francés encargó a un joven escultor florentino una obra para su tumba en Roma: la Virgen María con el cuerpo de su hijo muerto en brazos. En Italia esa escena se llama «Pietà», «piedad». El escultor tenía 23 años y se llamaba Miguel Ángel.",
      "En poco más de un año sacó de un solo bloque de mármol una de las esculturas más famosas del mundo. La composición forma una pirámide perfecta: la cabeza de María en lo alto, su manto enorme como base y el cuerpo de Jesús atravesado sobre sus rodillas.",
      "Hoy está en la primera capilla a la derecha de la basílica de San Pedro, detrás de un cristal blindado.",
    ],
    lookAt: [
      { title: "Una madre muy joven", text: "María parece más joven que su hijo. Cuando se lo reprocharon, Miguel Ángel respondió, según su biógrafo, que la pureza conserva la juventud." },
      { title: "La firma", text: "En la cinta que cruza el pecho de María se lee «MICHAEL ANGELUS BONAROTUS FLORENT[INUS] FACIEBAT». Es la única obra que firmó." },
      { title: "El cuerpo de Jesús", text: "Parece de verdad sin vida: el brazo cuelga, la cabeza cae hacia atrás. Y aun así, apenas hay heridas: Miguel Ángel no quiso mostrar el horror, sino la calma." },
      { title: "La mano izquierda de María", text: "No sostiene a Jesús: se abre hacia quien mira, como diciendo «mira lo que ha pasado»." },
    ],
    curiosity: "Según cuenta Vasari, Miguel Ángel oyó a unos visitantes atribuir la obra a otro escultor. Esa noche volvió con un cincel y grabó su nombre. Nunca más firmó otra.",
    place: { name: "Ciudad del Vaticano", lat: 41.902, lon: 12.454 },
    sources: ["Giorgio Vasari, Las vidas de los más excelentes arquitectos, pintores y escultores (1550)", "Ascanio Condivi, Vida de Miguel Ángel Buonarroti (1553)"],
  },
];

export const findArtWork = (style: string, slug: string): ArtWork | undefined =>
  artWorks.find((work) => work.style === style && work.slug === slug);

export const hasArtWork = (slug: string): boolean => artWorks.some((work) => work.slug === slug);
