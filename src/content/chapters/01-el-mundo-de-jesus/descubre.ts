import type { ChapterVersion } from "../../chapter-types";

/** Descubre: para todos. Histórico y cultural, ameno, sin preguntas. */
export const descubre: ChapterVersion = {
  title: "El mundo en el que nació Jesús",
  inAMinute: [
    "Jesús nació en un rincón pequeño del Imperio romano, en tierra judía.",
    "Mandaba Roma, pero a través de reyes locales como Herodes el Grande.",
    "El centro de todo era el Templo de Jerusalén, uno de los edificios más impresionantes de su tiempo.",
    "La mayoría de la gente vivía del campo y de la pesca, y pagaba muchos impuestos.",
    "Los judíos no pensaban todos igual: había fariseos, saduceos, esenios y rebeldes.",
    "Muchos esperaban a un Mesías que los liberara. En ese ambiente apareció Jesús.",
  ],
  intro:
    "Para entender a Jesús hay que entender su mundo. Imagina un país del tamaño de la Comunidad Valenciana, ocupado por la mayor potencia de la época, con un Templo enorme en su capital, aldeas de campesinos endeudados y un pueblo que llevaba siglos esperando a alguien. Así era la tierra donde nació el cristianismo. Ponte cómodo: empieza la serie.",
  sections: [
    {
      stop: "roma",
      heading: "El día que llegaron los romanos",
      blocks: [
        { type: "p", text: "Año 63 antes de Cristo. Dos hermanos de la familia real judía, Hircano y Aristóbulo, se disputan el trono. Los dos piden ayuda al mismo hombre: Pompeyo, el general romano que acaba de conquistar medio Oriente." },
        { type: "p", text: "Pompeyo elige bando, pone sitio a Jerusalén y la toma tras tres meses de asedio. Según cuenta el historiador Flavio Josefo, el general entró incluso en la parte más sagrada del Templo, donde solo podía pasar el sumo sacerdote una vez al año. Para los judíos fue un escándalo que nunca olvidaron." },
        { type: "image", id: "fouquetPompeyo" },
        { type: "p", text: "Desde ese día, la tierra de Israel quedó dentro del mundo romano. Roma no siempre gobernaba directamente: prefería poner a reyes locales que le fueran fieles, mantuvieran el orden y, sobre todo, pagaran impuestos." },
        { type: "fact", label: "Para situarte", text: "La región tenía unos 240 kilómetros de norte a sur. Se podía recorrer a pie en poco más de una semana." },
      ],
    },
    {
      stop: "herodes",
      heading: "Herodes, el rey que lo construyó todo",
      blocks: [
        { type: "p", text: "El más famoso de esos reyes aliados de Roma fue Herodes el Grande. El Senado romano lo nombró «rey de los judíos» y gobernó desde el año 37 hasta el 4 antes de Cristo." },
        { type: "character", id: "herodes" },
        { type: "p", text: "Herodes fue uno de los grandes constructores de la Antigüedad. Levantó de la nada una ciudad portuaria a la romana, Cesarea Marítima, con teatro, hipódromo y un puerto artificial ganado al mar. Construyó palacios-fortaleza en lo alto de montañas, como Masada y el Herodión. Y emprendió su obra más ambiciosa: reconstruir el Templo de Jerusalén." },
        { type: "image", id: "cesarea" },
        { type: "p", text: "Pero también era desconfiado hasta la obsesión. Mandó ejecutar a su esposa Mariamne y a varios de sus hijos porque creía que conspiraban contra él. Por eso al evangelio de Mateo no le cuesta presentarlo como un rey capaz de cualquier cosa por miedo a perder el trono." },
        { type: "fact", label: "¿Sabías que…?", text: "Jesús nació en los últimos años del reinado de Herodes, hacia el 6 o el 4 antes de Cristo. Sí: antes del «año 1». El monje que calculó la fecha en el siglo VI se equivocó por unos pocos años." },
      ],
    },
    {
      stop: "templo",
      heading: "El Templo, el corazón de Jerusalén",
      blocks: [
        { type: "p", text: "Si hubieras llegado a Jerusalén en tiempos de Jesús, lo primero que habrías visto desde lejos sería el Templo: una explanada gigantesca rodeada de pórticos, con un santuario de piedra blanca y oro que, según Josefo, brillaba tanto al sol que había que apartar la mirada." },
        { type: "image", id: "maqueta" },
        {
          type: "numbers",
          title: "El Templo en cifras",
          items: [
            { value: "14 ha", label: "de explanada, como unos 20 campos de fútbol" },
            { value: "c. 46 años", label: "llevaba en obras en tiempos de Jesús, según el evangelio de Juan" },
            { value: "1 vez al año", label: "entraba el sumo sacerdote en el Santo de los Santos" },
          ],
        },
        { type: "p", text: "Para los judíos era el lugar más sagrado del mundo: allí habitaba la presencia de Dios. Pero también era un centro económico y político. Allí se ofrecían sacrificios de animales, se pagaba un impuesto anual, se cambiaba dinero de todo el Imperio por la moneda del Templo y mandaba el sumo sacerdote." },
        { type: "p", text: "Tres veces al año, en las grandes fiestas como la Pascua, miles de peregrinos llegaban de toda la tierra de Israel y de todo el Mediterráneo. La ciudad se llenaba hasta los topes, y los soldados romanos vigilaban desde la fortaleza Antonia, pegada al Templo." },
        { type: "fact", label: "Todavía se puede ver", text: "El Muro de las Lamentaciones de Jerusalén es parte de los muros que sostenían la explanada del Templo de Herodes." },
      ],
    },
    {
      stop: "galilea",
      heading: "Galilea: aldeas, campos y un lago",
      blocks: [
        { type: "p", text: "Jesús no creció en la capital, sino en Galilea, la región del norte: verde, de colinas suaves, con un gran lago de agua dulce lleno de peces. Allí estaba Nazaret, una aldea de apenas unos cientos de habitantes, con casas de piedra excavadas en parte en la roca." },
        { type: "p", text: "La mayoría de la gente vivía del campo: trigo, cebada, olivos, viñas, higueras, y algunas cabras y ovejas. Junto al lago, en pueblos como Cafarnaúm o Magdala, la vida giraba en torno a la pesca, que se salaba y se vendía en todo el país." },
        { type: "image", id: "barca" },
        {
          type: "story",
          title: "Un día en la vida de un pescador de Cafarnaúm",
          paragraphs: [
            "Eleazar sale al lago antes de que anochezca con su hermano y dos jornaleros. La pesca se hace de noche, cuando los peces suben a la superficie. Echan la red una y otra vez a la luz de una lámpara.",
            "Al amanecer vuelven a la orilla. Las mujeres de la familia ayudan a separar los peces, que se venden frescos en el pueblo o se llevan a Magdala para salarlos.",
            "Antes de ganar nada, Eleazar paga: el alquiler del permiso de pesca al recaudador de Herodes Antipas, la parte de los jornaleros y la reparación de la red, que siempre se rompe. Por la tarde duerme unas horas, y vuelta a empezar.",
          ],
        },
        { type: "p", text: "En casa se hablaba arameo; en la sinagoga se leían las Escrituras en hebreo; para comerciar hacía falta algo de griego, la lengua común del Mediterráneo; y los romanos usaban el latín." },
        { type: "image", id: "bruegel" },
        {
          type: "numbers",
          title: "Galilea en cifras",
          items: [
            { value: "unos cientos", label: "de habitantes tenía Nazaret" },
            { value: "c. 120 km", label: "había de Nazaret a Jerusalén: tres o cuatro días a pie" },
            { value: "21 km", label: "de largo mide el lago de Galilea" },
          ],
        },
      ],
    },
    {
      stop: "impuestos",
      heading: "Impuestos, deudas y una moneda con la cara del César",
      blocks: [
        { type: "p", text: "La vida en Galilea podía ser bonita, pero no era fácil. Un campesino tenía que pagar varios impuestos a la vez: el tributo para Roma, los impuestos de Herodes Antipas, el diezmo para los sacerdotes y medio siclo al año para el Templo." },
        { type: "p", text: "Si llegaba una mala cosecha, había que pedir prestado. Y si no se podía devolver, se perdía la tierra y se acababa trabajando como jornalero en tierra ajena, a cambio de un denario al día." },
        { type: "image", id: "denario" },
        { type: "p", text: "Los encargados de cobrar ciertos impuestos y peajes eran los publicanos, judíos que trabajaban para el poder y que muchos veían como traidores y ladrones. Uno de ellos, Mateo, cobraba en Cafarnaúm cuando Jesús lo llamó para que lo siguiera." },
        { type: "image", id: "tiziano" },
        { type: "p", text: "Por eso las parábolas de Jesús están llenas de deudores, administradores, jornaleros que esperan a que alguien los contrate y señores que viajan lejos. Hablaba de la vida que su gente conocía." },
      ],
    },
    {
      stop: "grupos",
      heading: "Fariseos, saduceos, esenios y rebeldes",
      blocks: [
        { type: "p", text: "Todos los judíos compartían lo esencial: un solo Dios, la Ley que Dios dio a Moisés y el Templo. Pero no todos pensaban igual sobre cómo vivirlo. Flavio Josefo habla de varias «escuelas»." },
        { type: "character", id: "josefo" },
        { type: "p", text: "Los fariseos eran maestros muy populares que querían vivir la Ley de Dios en cada detalle de la vida diaria: la comida, el sábado, la oración. Creían en la resurrección de los muertos." },
        { type: "p", text: "Los saduceos eran la aristocracia de los sacerdotes del Templo. Solo aceptaban lo que estaba escrito en la Torá, no creían en la resurrección y se llevaban bien con Roma." },
        { type: "image", id: "tissotFariseos" },
        { type: "p", text: "Los esenios se apartaban a vivir en comunidades puras, lejos de un Templo que consideraban corrompido. En Qumrán, junto al mar Muerto, se encontraron sus manuscritos: unos 900 textos, entre ellos las copias de la Biblia más antiguas que conocemos." },
        { type: "image", id: "qumran" },
        { type: "fact", label: "Un hallazgo de película", text: "En 1947, un pastor beduino que buscaba una cabra perdida tiró una piedra dentro de una cueva y oyó cómo se rompía una vasija. Dentro estaban los primeros manuscritos del mar Muerto." },
        { type: "image", id: "rollo" },
        { type: "p", text: "Y había quienes pensaban que la única salida era la lucha armada contra Roma. Josefo los llama «la cuarta filosofía», y más tarde se los conoció como zelotes." },
      ],
    },
    {
      stop: "espera",
      heading: "Pilato, Caifás y la espera del Mesías",
      blocks: [
        { type: "p", text: "Cuando murió Herodes, su reino se repartió entre sus hijos. Galilea fue para Herodes Antipas. Judea, con Jerusalén, acabó gobernada directamente por un funcionario romano, el prefecto." },
        { type: "character", id: "antipas" },
        { type: "p", text: "Entre los años 26 y 36, el prefecto fue Poncio Pilato. Durante mucho tiempo solo lo conocíamos por los evangelios y por los historiadores antiguos, hasta que en 1961 apareció en Cesarea una piedra con su nombre." },
        { type: "character", id: "pilato" },
        { type: "p", text: "En el Templo, el hombre fuerte era el sumo sacerdote Caifás. Él y Pilato se necesitaban: uno mantenía el orden en el Templo y el otro le dejaba seguir en el cargo." },
        { type: "character", id: "caifas" },
        { type: "p", text: "Mientras tanto, mucha gente esperaba al Mesías, un enviado de Dios que traería justicia y libertad. Cada grupo lo imaginaba de una manera: un rey descendiente de David que echaría a los romanos, un gran profeta como Moisés o un sacerdote santo. En Qumrán incluso esperaban a dos." },
        { type: "p", text: "En ese ambiente, un predicador de Nazaret empezó a recorrer Galilea hablando del «Reino de Dios»." },
      ],
    },
    {
      stop: "guerra",
      heading: "Epílogo: el año en que ardió el Templo",
      blocks: [
        { type: "p", text: "La tensión con Roma fue creciendo hasta estallar en el año 66. La guerra fue terrible. En el año 70, las legiones de Tito, el hijo del emperador, tomaron Jerusalén y quemaron el Templo, que nunca se reconstruyó." },
        { type: "image", id: "arcoTito" },
        { type: "p", text: "Los últimos rebeldes resistieron en la fortaleza de Masada hasta el año 73 o 74. Según Josefo, cuando los romanos lograron entrar, encontraron a casi todos muertos: habían preferido morir antes que rendirse." },
        { type: "image", id: "masada" },
        { type: "p", text: "Para entonces, los seguidores de Jesús ya se habían extendido por medio Imperio, de Antioquía a Roma. Pero para eso hay que volver atrás, a un taller de Nazaret." },
      ],
    },
  ],
  relatedPills: ["existio-jesus", "que-significa-cristo", "por-que-descansamos-el-domingo"],
  next: "En el próximo capítulo: un artesano de Nazaret deja su pueblo, se hace bautizar en el Jordán y empieza a predicar junto al lago. En tres años cambiará la historia.",
};
