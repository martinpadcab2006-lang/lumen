import { makeEpisode } from "../make";
import { holyLand, library, media } from "./library";

const places = { belen: holyLand.belen, nazaret: holyLand.nazaret, jerusalen: holyLand.jerusalen };

export const elNacimientoDeJesus = makeEpisode({
  slug: "el-nacimiento-de-jesus",
  title: "El nacimiento de Jesús",
  period: "c. 6 – 4 a. C.",
  cover: "Gerard van Honthorst - Adoration of the Child - WGA11655.jpg",
  places,
  stops: [
    { id: "relatos", year: "c. 80 – 90", place: "belen" },
    { id: "fecha", year: "c. 6 – 4 a. C.", place: "belen" },
    { id: "lugar", year: "c. 6 – 4 a. C.", place: "nazaret" },
    { id: "visitas", year: "c. 6 – 4 a. C.", place: "belen" },
    { id: "belenes", year: "1223 – hoy", place: "belen" },
  ],
  library: { ...library, places },
  media,
  version: {
    title: "El nacimiento de Jesús",
    inAMinute: [
      "Solo dos evangelios, Mateo y Lucas, cuentan el nacimiento de Jesús, y lo hacen de manera muy distinta.",
      "Jesús nació probablemente entre el 6 y el 4 a. C., antes de la muerte de Herodes.",
      "Los dos evangelios lo sitúan en Belén, el pueblo del rey David, aunque creció en Nazaret.",
      "Lucas habla de pastores; Mateo, de unos magos de Oriente. Ninguno dice que fueran tres ni reyes.",
      "El belén lo popularizó san Francisco de Asís en 1223.",
    ],
    intro:
      "Es la escena más pintada, cantada y representada de la historia: un niño en un pesebre, una estrella, unos pastores y unos magos. Pero ¿qué cuentan exactamente los evangelios? ¿Y qué pueden decir los historiadores? Spoiler: casi nada es como en los villancicos.",
    sections: [
      {
        stop: "relatos",
        heading: "Dos relatos muy distintos",
        blocks: [
          { type: "p", text: "De los cuatro evangelios, solo dos cuentan el nacimiento de Jesús: Mateo y Lucas. Marcos empieza directamente con Jesús adulto, y Juan, con un poema sobre la Palabra de Dios." },
          { type: "p", text: "Y los dos relatos no se parecen mucho. Lucas cuenta el anuncio del ángel a María, el viaje de José y María a Belén por un censo, el niño acostado en un pesebre porque no había sitio en la posada y la visita de unos pastores. Mateo habla de un sueño de José, de unos magos guiados por una estrella, de la furia de Herodes, de la matanza de los inocentes y de la huida a Egipto." },
          { type: "image", id: "honthorst" },
          { type: "p", text: "Los dos coinciden en lo esencial: Jesús nació en Belén, en tiempos de Herodes, de María, prometida de José, y por obra del Espíritu Santo, sin padre humano. Esto último es una afirmación de fe, que los cristianos expresan en el Credo." },
          { type: "fact", label: "Cómo leerlos", text: "Muchos especialistas, también creyentes, piensan que estos relatos no buscan ser una crónica, sino explicar quién es Jesús desde el principio: el hijo de David, el nuevo Moisés, el salvador de los pobres." },
        ],
      },
      {
        stop: "fecha",
        heading: "¿Cuándo nació? Antes de Cristo",
        blocks: [
          { type: "p", text: "Parece un chiste, pero es verdad: Jesús nació «antes de Cristo». En el siglo VI, un monje llamado Dionisio el Exiguo calculó el año del nacimiento de Jesús para empezar a contar desde ahí. Se equivocó por unos pocos años." },
          { type: "p", text: "Mateo y Lucas dicen que Jesús nació en tiempos del rey Herodes, y Herodes murió en el año 4 a. C. Por eso la mayoría de los historiadores sitúa el nacimiento entre el 6 y el 4 a. C." },
          { type: "p", text: "¿Y el día? Los evangelios no lo dicen. La fecha del 25 de diciembre aparece en Roma en el siglo IV, cerca del solsticio de invierno, cuando los días empiezan a alargarse: una imagen perfecta para celebrar la llegada de la «luz del mundo»." },
          { type: "fact", label: "Un problema sin resolver", text: "Lucas relaciona el nacimiento con un censo del gobernador Quirino. Pero, según Josefo, ese censo fue en el año 6 d. C., unos diez años después de la muerte de Herodes. Los especialistas llevan siglos discutiendo cómo encaja." },
        ],
      },
      {
        stop: "lugar",
        heading: "¿Belén o Nazaret?",
        blocks: [
          { type: "p", text: "Los dos evangelios dicen que Jesús nació en Belén, un pueblo a ocho kilómetros de Jerusalén, y que creció en Nazaret, en Galilea. Belén era el pueblo del rey David, y el profeta Miqueas había anunciado que de allí saldría un gobernante." },
          { type: "p", text: "Algunos historiadores creen que Jesús nació en realidad en Nazaret, y que los evangelistas lo situaron en Belén para mostrar que era el Mesías hijo de David. Otros piensan que no hay razones suficientes para dudar de lo que dicen dos fuentes distintas. Es un debate abierto." },
          { type: "image", id: "natividad" },
          { type: "p", text: "Lo que sí sabemos es que, ya en el siglo II, los cristianos de Belén enseñaban una cueva como el lugar del nacimiento. Allí mandó construir el emperador Constantino una basílica en el siglo IV. La actual basílica de la Natividad es una de las iglesias en uso más antiguas del mundo." },
        ],
      },
      {
        stop: "visitas",
        heading: "Pastores, magos y una estrella",
        blocks: [
          { type: "p", text: "En Lucas, los primeros en visitar al niño son unos pastores. No es un detalle bonito sin más: los pastores eran gente pobre y mal vista, que vivía al raso. El mensaje es claro: el Mesías llega primero a los últimos." },
          { type: "image", id: "murilloPastores" },
          { type: "p", text: "En Mateo llegan unos «magos de Oriente»: sabios que estudiaban las estrellas, probablemente de Persia o de Babilonia. Mateo no dice que fueran tres (eso se deduce de los tres regalos: oro, incienso y mirra), ni que fueran reyes, ni cómo se llamaban. Los nombres de Melchor, Gaspar y Baltasar aparecen siglos después." },
          { type: "image", id: "giottoMagos" },
          { type: "p", text: "¿Y la estrella? Desde que el astrónomo Kepler lo propuso en el siglo XVII, muchos han buscado un fenómeno real: una conjunción de Júpiter y Saturno en el año 7 a. C., un cometa, una nova… No hay acuerdo. Para Mateo, lo importante es que hasta el cielo anuncia al nuevo rey." },
        ],
      },
      {
        stop: "belenes",
        heading: "De Belén a tu salón",
        blocks: [
          { type: "p", text: "En la Nochebuena de 1223, en el pueblo italiano de Greccio, san Francisco de Asís quiso «ver con sus propios ojos» cómo había nacido Jesús. Preparó un pesebre con paja, un buey y un asno, y celebró allí la misa. Es el origen de los belenes." },
          { type: "illustration", id: "belen" },
          { type: "p", text: "La costumbre se extendió por toda Europa gracias a los franciscanos, y en España arraigó con fuerza: belenes napolitanos, belenes vivientes, figuras de barro de Murcia o de Cataluña con su caganer. Y una tradición muy nuestra: la noche del 5 de enero, los Reyes Magos traen los regalos." },
          { type: "fact", label: "¿Buey y mula?", text: "Los evangelios no hablan de ningún animal. El buey y el asno vienen de una frase del profeta Isaías que los cristianos antiguos aplicaron al pesebre: «El buey conoce a su amo y el asno el pesebre de su dueño»." },
        ],
      },
    ],
    relatedPills: ["por-que-la-navidad-es-el-25-de-diciembre", "los-reyes-magos-no-eran-tres"],
    quiz: [
      { id: "s1e7-evangelios", prompt: "¿Qué evangelios cuentan el nacimiento de Jesús?", options: [{ id: "a", text: "Los cuatro" }, { id: "b", text: "Mateo y Lucas" }, { id: "c", text: "Marcos y Juan" }, { id: "d", text: "Solo Juan" }], correctId: "b", explanation: "Marcos empieza con Jesús adulto, y Juan con un poema sobre la Palabra de Dios." },
      { id: "s1e7-ano", prompt: "¿En qué época nació Jesús, según la mayoría de los historiadores?", options: [{ id: "a", text: "En el año 1" }, { id: "b", text: "En el año 0" }, { id: "c", text: "Entre el 6 y el 4 a. C." }, { id: "d", text: "En el año 33" }], correctId: "c", explanation: "Antes de la muerte de Herodes, en el 4 a. C. Y el año 0 no existe." },
      { id: "s1e7-belen", prompt: "¿Quién montó el primer belén?", options: [{ id: "a", text: "San Francisco de Asís" }, { id: "b", text: "El papa Gregorio Magno" }, { id: "c", text: "Carlomagno" }, { id: "d", text: "Santa Teresa" }], correctId: "a", explanation: "En Greccio (Italia), en la Nochebuena de 1223." },
    ],
    sources: [
      { text: "Evangelio de Mateo 1 – 2 y evangelio de Lucas 1 – 2; Miqueas 5, 1; Isaías 1, 3" },
      { text: "Raymond E. Brown, El nacimiento del Mesías, Cristiandad, 1982" },
      { text: "Tomás de Celano, Vida primera de san Francisco, 84-86 (Greccio)" },
    ],
    next: "En el próximo episodio: treinta años en Nazaret de los que casi no sabemos nada. Qué hacía un artesano de Galilea, qué hablaba, si sabía leer y si tenía hermanos.",
  },
});
