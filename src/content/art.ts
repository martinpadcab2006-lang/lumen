/**
 * La sección de Arte: seis grandes estilos del arte cristiano y, dentro de
 * cada uno, las obras, lugares y artistas que tendrán su propia ficha.
 */
export type ArtWorkKind = "obra" | "lugar" | "artista";

export type ArtWorkSummary = { slug: string; kind: ArtWorkKind; name: string; where: string };

export type ArtStyle = {
  slug: string;
  title: string;
  period: string;
  /** Una frase para las tarjetas. */
  hook: string;
  intro: readonly string[];
  /** Rasgos para reconocerlo a simple vista. */
  traits: readonly string[];
  /** Cuadro o foto de portada en Wikimedia Commons. */
  cover: string;
  coverCaption: string;
  works: readonly ArtWorkSummary[];
  /** Temporada de la serie con la que conecta. */
  season: string;
};

export const artKindName: Readonly<Record<ArtWorkKind, string>> = { obra: "Obra", lugar: "Lugar", artista: "Artista" };

const work = (slug: string, kind: ArtWorkKind, name: string, where: string): ArtWorkSummary => ({ slug, kind, name, where });

export const artStyles: readonly ArtStyle[] = [
  {
    slug: "paleocristiano",
    title: "El arte paleocristiano",
    period: "Siglos II – VI",
    hook: "Peces, palomas y un pastor con una oveja: el arte de los primeros cristianos.",
    intro: [
      "Los primeros cristianos no tenían templos ni artistas propios. Usaban el arte de Roma, pero le daban un sentido nuevo: en las pinturas de las catacumbas, un pastor con una oveja a hombros ya no era un adorno, sino Jesús, el Buen Pastor.",
      "Muchas imágenes eran símbolos que solo entendían los de dentro: el pez, el ancla, la paloma, el crismón (las letras griegas X y P, las dos primeras de «Cristo»). En los sarcófagos de piedra aparecen escenas de la Biblia esculpidas una detrás de otra.",
      "Cuando Constantino legaliza el cristianismo en 313, todo cambia de escala: se levantan las primeras grandes basílicas, como la de San Pedro en Roma, y sus paredes se llenan de mosaicos, como los del mausoleo de Gala Placidia en Rávena.",
    ],
    traits: [
      "Símbolos sencillos: pez, ancla, paloma, crismón, orante con los brazos abiertos.",
      "Jesús joven y sin barba, como un pastor o un maestro romano.",
      "Pinturas en paredes de catacumbas y relieves en sarcófagos.",
      "Desde el siglo IV, basílicas alargadas y mosaicos de colores.",
    ],
    cover: "Good Shepherd Galla Placidia in Ravenna.jpg",
    coverCaption: "El Buen Pastor, mausoleo de Gala Placidia (Rávena), siglo V",
    works: [
      work("catacumbas-de-priscila", "lugar", "Las catacumbas de Priscila", "Roma"),
      work("el-buen-pastor", "obra", "El Buen Pastor", "Catacumbas y sarcófagos"),
      work("sarcofago-de-junio-basso", "obra", "El sarcófago de Junio Basso (359)", "Ciudad del Vaticano"),
      work("mausoleo-de-gala-placidia", "lugar", "El mausoleo de Gala Placidia", "Rávena (Italia)"),
    ],
    season: "perseguidos",
  },
  {
    slug: "bizantino",
    title: "El arte bizantino",
    period: "Siglos VI – XV",
    hook: "Cúpulas, fondos de oro e iconos: el arte del Imperio romano de Oriente.",
    intro: [
      "Mientras el Imperio de Occidente caía, el de Oriente siguió mil años más con capital en Constantinopla. Su arte quería mostrar el cielo en la tierra: interiores en penumbra, mosaicos con fondo de oro y una gran cúpula que parece flotar.",
      "La obra cumbre es Santa Sofía, que el emperador Justiniano mandó construir entre 532 y 537. En Rávena, la iglesia de San Vital conserva los mosaicos de Justiniano y la emperatriz Teodora rodeados de su corte.",
      "El gran invento bizantino es el icono: una imagen sagrada pintada sobre tabla, que no busca parecerse a la realidad sino ser una ventana a lo divino. En los siglos VIII y IX hubo una gran crisis, la iconoclasia, en la que se destruyeron imágenes; al final los iconos ganaron, y siguen siendo el centro de las iglesias ortodoxas.",
    ],
    traits: [
      "Fondos dorados y figuras de frente, serias y alargadas.",
      "Grandes cúpulas sobre planta cuadrada o de cruz griega.",
      "Mosaicos que cubren muros y bóvedas.",
      "Iconos: imágenes sagradas sobre tabla, con reglas fijas.",
    ],
    cover: "Hagia Sophia Mars 2013.jpg",
    coverCaption: "Santa Sofía (Estambul), construida entre 532 y 537",
    works: [
      work("santa-sofia", "lugar", "Santa Sofía", "Estambul (Turquía)"),
      work("san-vital-de-ravena", "lugar", "San Vital de Rávena", "Rávena (Italia)"),
      work("pantocrator-del-sinai", "obra", "El Pantocrátor del Sinaí", "Monasterio de Santa Catalina (Egipto)"),
      work("san-marcos-de-venecia", "lugar", "La basílica de San Marcos", "Venecia (Italia)"),
    ],
    season: "la-edad-media",
  },
  {
    slug: "romanico",
    title: "El románico",
    period: "Siglos XI – XII",
    hook: "Muros gruesos, arcos redondos y un Cristo en majestad: el arte de los caminos.",
    intro: [
      "Hacia el año 1000, Europa se llena de iglesias de piedra. Son pequeñas o enormes, pero todas se parecen: muros gruesos, pocas ventanas, arcos de medio punto y bóvedas de cañón. Por dentro son oscuras y recogidas.",
      "El románico es el arte de los monasterios y de las peregrinaciones. A lo largo del Camino de Santiago se levantan iglesias como San Martín de Frómista o San Isidoro de León, y en Santiago el Maestro Mateo termina en 1188 el Pórtico de la Gloria.",
      "Como casi nadie sabía leer, las paredes enseñaban: los capiteles cuentan historias de la Biblia, las portadas muestran el Juicio Final y los ábsides se pintaban de colores intensos. El Pantocrátor de San Clemente de Taüll, pintado hacia 1123, es uno de los más famosos del mundo.",
    ],
    traits: [
      "Arco de medio punto (redondo) y bóveda de cañón.",
      "Muros gruesos, contrafuertes y ventanas pequeñas.",
      "Capiteles y portadas con escenas de la Biblia.",
      "Pintura mural con Cristo en majestad (Pantocrátor) en el ábside.",
    ],
    cover: "Pantocràtor de Taüll.jpg",
    coverCaption: "Pantocrátor de San Clemente de Taüll (hacia 1123), MNAC, Barcelona",
    works: [
      work("san-clemente-de-taull", "lugar", "San Clemente de Taüll", "Lleida"),
      work("san-martin-de-fromista", "lugar", "San Martín de Frómista", "Palencia"),
      work("claustro-de-silos", "lugar", "El claustro de Santo Domingo de Silos", "Burgos"),
      work("portico-de-la-gloria", "obra", "El Pórtico de la Gloria (1188)", "Santiago de Compostela"),
    ],
    season: "la-edad-media",
  },
  {
    slug: "gotico",
    title: "El gótico",
    period: "Siglos XII – XV",
    hook: "Catedrales que suben hacia el cielo y se llenan de luz de colores.",
    intro: [
      "Hacia 1140, el abad Suger reforma la iglesia de Saint-Denis, cerca de París, con una idea: Dios es luz, y el templo debe llenarse de ella. Nace el gótico, el estilo de las grandes catedrales.",
      "Dos inventos lo hacen posible: el arco apuntado y la bóveda de crucería, que llevan el peso a unos pocos pilares. Por fuera, los arbotantes sujetan los muros. Así las paredes pueden abrirse en enormes vidrieras y rosetones.",
      "Las ciudades compiten por tener la catedral más alta y luminosa: Chartres, Notre-Dame de París, la Sainte-Chapelle (1248), y en España León, Burgos o Toledo. Las vidrieras cuentan la Biblia con luz de colores, y las portadas se llenan de esculturas cada vez más naturales.",
    ],
    traits: [
      "Arco apuntado y bóveda de crucería.",
      "Arbotantes y pináculos por fuera.",
      "Grandes vidrieras y rosetones.",
      "Altura: todo empuja la mirada hacia arriba.",
    ],
    cover: "Sainte-Chapelle stained glass.jpg",
    coverCaption: "Vidrieras de la Sainte-Chapelle (París), consagrada en 1248",
    works: [
      work("catedral-de-leon", "lugar", "La catedral de León", "León"),
      work("catedral-de-chartres", "lugar", "La catedral de Chartres", "Chartres (Francia)"),
      work("sainte-chapelle", "lugar", "La Sainte-Chapelle", "París (Francia)"),
      work("catedral-de-burgos", "lugar", "La catedral de Burgos", "Burgos"),
    ],
    season: "la-edad-media",
  },
  {
    slug: "renacimiento",
    title: "El Renacimiento",
    period: "Siglos XV – XVI",
    hook: "Perspectiva, cuerpos humanos perfectos y los genios que pintaron lo sagrado.",
    intro: [
      "En la Florencia del siglo XV, artistas y sabios vuelven la mirada a Grecia y Roma. El ser humano y la naturaleza pasan al centro, y la pintura descubre la perspectiva: un cuadro puede parecer una ventana abierta.",
      "Casi todos los encargos siguen siendo religiosos, pero ahora la Virgen, los santos y Jesús tienen cuerpos y rostros reales. Brunelleschi levanta la cúpula de la catedral de Florencia (1420-1436); Leonardo pinta la Última Cena en Milán (1495-1498).",
      "Los papas se convierten en grandes mecenas. Miguel Ángel esculpe la Piedad (1498-1499) y pinta la bóveda de la Capilla Sixtina (1508-1512); Rafael decora las estancias del Vaticano, y en 1506 empieza la nueva basílica de San Pedro, cuya cúpula diseñará también Miguel Ángel.",
    ],
    traits: [
      "Perspectiva y espacios que parecen reales.",
      "Cuerpos proporcionados, inspirados en la escultura clásica.",
      "Composiciones ordenadas y equilibradas.",
      "Cúpulas, columnas y formas de la arquitectura romana.",
    ],
    cover: "Sistine Chapel ceiling, Creation of Adam.jpg",
    coverCaption: "Miguel Ángel, La creación de Adán, Capilla Sixtina (1508-1512)",
    works: [
      work("la-piedad", "obra", "La Piedad de Miguel Ángel", "Basílica de San Pedro (Vaticano)"),
      work("la-ultima-cena", "obra", "La Última Cena de Leonardo", "Milán (Italia)"),
      work("capilla-sixtina", "lugar", "La Capilla Sixtina", "Ciudad del Vaticano"),
      work("miguel-angel", "artista", "Miguel Ángel", "1475 – 1564"),
    ],
    season: "la-edad-moderna",
  },
  {
    slug: "barroco",
    title: "El Barroco",
    period: "Siglos XVII – XVIII",
    hook: "Arte para emocionar: luces y sombras, retablos de oro e imágenes que procesionan.",
    intro: [
      "Tras el Concilio de Trento (1545-1563), la Iglesia católica quiere un arte que llegue al corazón: que emocione, que se entienda y que mueva a la fe. El Barroco es teatro: movimiento, contrastes de luz y sombra y escenas en el momento de máxima tensión.",
      "En Roma, Bernini levanta el baldaquino de San Pedro (1623-1634) y la gran plaza con su columnata, y esculpe el Éxtasis de santa Teresa. Caravaggio pinta escenas sagradas con gente de la calle iluminada por un foco de luz.",
      "En España, el Barroco se vive en la calle: los imagineros como Gregorio Fernández, Martínez Montañés o Juan de Mesa tallan en madera policromada las imágenes que todavía salen en Semana Santa. Las iglesias se llenan de retablos dorados, y pintores como Velázquez, Zurbarán y Murillo crean algunas de las imágenes religiosas más conocidas.",
    ],
    traits: [
      "Movimiento: curvas, diagonales, ropajes al viento.",
      "Contraste fuerte de luz y sombra.",
      "Retablos dorados que cubren el fondo de las iglesias.",
      "Imaginería en madera policromada, hecha para procesionar.",
    ],
    cover: "Baldacchino di San Pietro, G L Bernini.jpg",
    coverCaption: "Bernini, baldaquino de San Pedro (1623-1634)",
    works: [
      work("baldaquino-de-san-pedro", "obra", "El baldaquino de San Pedro", "Ciudad del Vaticano"),
      work("extasis-de-santa-teresa", "obra", "El Éxtasis de santa Teresa", "Roma"),
      work("jesus-del-gran-poder", "obra", "Jesús del Gran Poder (1620)", "Sevilla"),
      work("fachada-del-obradoiro", "lugar", "La fachada del Obradoiro", "Santiago de Compostela"),
    ],
    season: "la-edad-moderna",
  },
];

export const findArtStyle = (slug: string): ArtStyle | undefined => artStyles.find((style) => style.slug === slug);
