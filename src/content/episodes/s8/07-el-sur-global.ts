import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("namugongo", "medellin", "sanSalvador", "manila", "seul", "pekin");

export const elSurGlobal = makeEpisode({
  slug: "el-sur-global",
  title: "África, Asia y América Latina hoy",
  period: "1886 – hoy",
  cover: "Basilique notre Dame de la Paix de Yamoussoukro 16.jpg",
  mapRegion: "mundo",
  places,
  stops: [
    { id: "africa", year: "1886 – hoy", place: "namugongo" },
    { id: "medellin", year: "1968", place: "medellin" },
    { id: "romero", year: "1977 – 1989", place: "sanSalvador" },
    { id: "filipinas", year: "1521 – hoy", place: "manila" },
    { id: "corea", year: "1784 – hoy", place: "seul" },
    { id: "china", year: "1949 – hoy", place: "pekin" },
  ],
  library: { ...library, places },
  version: {
    title: "África, Asia y América Latina hoy",
    inAMinute: [
      "Hay unos 2.300 millones de cristianos en el mundo. Hoy viven más en el África subsahariana que en Europa.",
      "En 1900, la gran mayoría de los cristianos eran europeos o norteamericanos. Eso ha cambiado por completo.",
      "En América Latina, la Iglesia hizo en 1968 la «opción por los pobres». Muchos cristianos pagaron con su vida, como el arzobispo Óscar Romero.",
      "En Asia, los cristianos son minoría, salvo en Filipinas y Timor Oriental, pero crecen en países como Corea o China.",
      "El cristianismo, que nació en Asia, es hoy una religión de todos los continentes.",
    ],
    intro:
      "Si tuvieras que dibujar a un cristiano típico de hoy, quizá pensarías en un europeo. Pero las cifras dicen otra cosa: el cristiano típico del siglo XXI probablemente es una mujer africana o latinoamericana. Es uno de los cambios más importantes de la historia del cristianismo, y ha ocurrido en apenas un siglo.",
    sections: [
      {
        stop: "africa",
        heading: "África, el nuevo centro",
        blocks: [
          { type: "p", text: "En 1886, en el reino de Buganda, en la actual Uganda, el rey Mwanga mandó matar a un grupo de jóvenes pajes y servidores, católicos y anglicanos, que se negaban a renunciar a su fe. Muchos fueron quemados vivos en Namugongo. Hoy, cada 3 de junio, cientos de miles de peregrinos, algunos tras caminar cientos de kilómetros, se reúnen allí para recordarlos." },
          { type: "p", text: "En 1900 había en África unos pocos millones de cristianos. Hoy son más de 600 millones. Según el Pew Research Center, en 2020 alrededor del 31 % de los cristianos del mundo vivía en el África subsahariana, frente a un 22 % en Europa. Países como la República Democrática del Congo, Nigeria, Kenia o Uganda tienen comunidades cristianas enormes y muy jóvenes, y envían ya sacerdotes y misioneros a Europa." },
          { type: "image", id: "yamoussoukro" },
        ],
      },
      {
        stop: "medellin",
        heading: "La opción por los pobres",
        blocks: [
          { type: "p", text: "América Latina es el continente con más católicos del mundo, y también uno de los más desiguales. En 1968, los obispos latinoamericanos se reunieron en Medellín (Colombia) para aplicar el Concilio Vaticano II a su realidad. Hablaron de una «opción preferencial por los pobres»." },
          { type: "p", text: "De ahí nació también la teología de la liberación, cuyo gran nombre fue el peruano Gustavo Gutiérrez: leer el evangelio desde los pobres y comprometerse para cambiar las estructuras injustas. Fue muy debatida: el Vaticano criticó en los años ochenta que algunos de sus autores usaran el análisis marxista. Pero su preocupación por los pobres se convirtió en algo central para toda la Iglesia." },
        ],
      },
      {
        stop: "romero",
        heading: "Mártires en El Salvador",
        blocks: [
          { type: "character", id: "romero" },
          { type: "p", text: "En los años setenta y ochenta, muchas dictaduras latinoamericanas persiguieron a sacerdotes, religiosas y catequistas que defendían a los campesinos. En El Salvador, el arzobispo Óscar Romero pidió a los soldados que no dispararan contra su propio pueblo. Al día siguiente, el 24 de marzo de 1980, fue asesinado de un disparo mientras celebraba misa." },
          { type: "p", text: "En 1989, en la misma ciudad, un comando del ejército asesinó en la universidad a seis jesuitas, cinco de ellos españoles, entre ellos el rector Ignacio Ellacuría, junto a una cocinera y su hija." },
        ],
      },
      {
        stop: "filipinas",
        heading: "Filipinas",
        blocks: [
          { type: "p", text: "Filipinas, evangelizada desde que llegó la expedición de Magallanes en 1521 y colonia española durante más de tres siglos, es el gran país católico de Asia: unos ocho de cada diez de sus más de cien millones de habitantes son católicos." },
          { type: "p", text: "Su fe es muy popular y muy visible. Cada 9 de enero, millones de personas acompañan por las calles de Manila la imagen del Nazareno Negro, una talla de Cristo llevada desde México en el siglo XVII." },
        ],
      },
      {
        stop: "corea",
        heading: "Corea: una Iglesia fundada por laicos",
        blocks: [
          { type: "p", text: "El catolicismo coreano tiene una historia única: no lo llevaron misioneros, sino estudiosos coreanos que leyeron libros cristianos escritos en chino por los jesuitas. En 1784, uno de ellos, Yi Seung-hun, se bautizó en Pekín y, al volver, bautizó a sus amigos. Durante décadas, la comunidad creció sin sacerdotes." },
          { type: "p", text: "Fueron perseguidos durante el siglo XIX, y murieron miles de mártires. En 1984, Juan Pablo II canonizó a 103 de ellos en Seúl. En 2027, Seúl acogerá la Jornada Mundial de la Juventud." },
        ],
      },
      {
        stop: "china",
        heading: "China",
        blocks: [
          { type: "p", text: "Tras la llegada de los comunistas al poder en 1949, se expulsó a los misioneros y se persiguió a las Iglesias. Los católicos chinos quedaron divididos entre una Iglesia controlada por el Estado y una Iglesia «clandestina» fiel a Roma." },
          { type: "p", text: "Aun así, el cristianismo ha crecido mucho en China, sobre todo el protestante. No hay cifras fiables, pero las estimaciones hablan de decenas de millones de cristianos. Desde 2018, el Vaticano y el gobierno chino mantienen un acuerdo sobre el nombramiento de obispos, muy discutido." },
          { type: "p", text: "El cristianismo nació en Asia, en Jerusalén. Dos mil años después, es la religión con más fieles del mundo y está presente en todos los países. Su centro de gravedad se ha desplazado hacia el sur." },
        ],
      },
    ],
    relatedPills: ["donde-viven-los-cristianos"],
    quiz: [
      question("s8e7-donde", "¿Dónde viven hoy más cristianos?", ["En Europa", "En el África subsahariana", "En la Antártida", "En Oriente Medio"], 1, "En 2020, el 31 % frente al 22 % de Europa, según el Pew Research Center."),
      question("s8e7-romero", "¿Quién fue Óscar Romero?", ["Un futbolista", "El arzobispo de San Salvador asesinado mientras celebraba misa en 1980", "Un papa", "Un misionero en China"], 1, "El papa Francisco lo canonizó en 2018."),
      question("s8e7-corea", "¿Qué tiene de especial el origen del catolicismo en Corea?", ["Lo llevaron los españoles", "Lo fundaron laicos coreanos que leyeron libros cristianos, sin misioneros", "Empezó en 1990", "Lo fundó un emperador"], 1, "Yi Seung-hun se bautizó en Pekín en 1784."),
    ],
    sources: [
      { text: "Pew Research Center, How the Global Religious Landscape Changed From 2010 to 2020 (2025)" },
      { text: "Philip Jenkins, La próxima cristiandad, Vergara, 2002" },
      { text: "Gustavo Gutiérrez, Teología de la liberación. Perspectivas, Sígueme, 1972" },
    ],
    next: "En el próximo episodio, el último de la serie: el cristianismo en el siglo XXI. Cuatro papas, el ecumenismo y los retos de hoy.",
  },
});
