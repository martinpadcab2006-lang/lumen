export type ChurchSlug = "catolica" | "ortodoxa" | "orientales" | "protestante" | "anglicana";

/** Rama de la línea del tiempo. «primer-milenio» es el tronco común antes de las grandes separaciones. */
export type BranchSlug = ChurchSlug | "primer-milenio";

export type Church = {
  slug: ChurchSlug;
  name: string;
  shortName: string;
  color: string;
  /** Año en que se separa como rama propia. */
  splitYear: number;
  splitNote: string;
  summary: string;
  authority: string;
  bible: string;
  sacraments: string;
  clergy: string;
  mary: string;
  images: string;
  eucharist: string;
  followers: string;
  where: string;
  /** Peso relativo para el grosor de la banda en la línea del tiempo (1–5). */
  weight: number;
};

export const churches: readonly Church[] = [
  {
    slug: "catolica",
    name: "Iglesia católica",
    shortName: "Católica",
    color: "var(--rama-catolica)",
    splitYear: 1054,
    splitNote:
      "Se considera continuadora directa de la Iglesia fundada por Jesús. En 1054 rompe con las iglesias de Oriente (el Gran Cisma).",
    summary:
      "La mayor de las iglesias cristianas. Está unida en torno al papa, el obispo de Roma, y tiene una organización común en todo el mundo.",
    authority: "El papa, como sucesor del apóstol Pedro, junto con los obispos.",
    bible: "73 libros: incluye siete libros del Antiguo Testamento que los protestantes no aceptan (los deuterocanónicos).",
    sacraments: "Siete: bautismo, confirmación, eucaristía, penitencia, unción de enfermos, orden sacerdotal y matrimonio.",
    clergy:
      "Los sacerdotes de rito latino son célibes. En las iglesias católicas orientales, los hombres casados pueden ordenarse sacerdotes. Solo se ordena a hombres.",
    mary: "Muy venerada. Afirma como dogma su Inmaculada Concepción y su Asunción al cielo.",
    images: "Estatuas, pinturas y retablos. Se veneran las imágenes de Jesús, de María y de los santos.",
    eucharist: "Jesús está realmente presente: el pan y el vino se convierten en su cuerpo y su sangre (transubstanciación).",
    followers: "Unos 1.400 millones",
    where: "América Latina, sur de Europa, Filipinas, África central. Su centro es el Vaticano, en Roma.",
    weight: 5,
  },
  {
    slug: "ortodoxa",
    name: "Iglesia ortodoxa",
    shortName: "Ortodoxa",
    color: "var(--rama-ortodoxa)",
    splitYear: 1054,
    splitNote:
      "Heredera de las iglesias de habla griega del Imperio bizantino. En 1054 rompe con Roma; también se considera continuadora de la Iglesia original.",
    summary:
      "Una familia de iglesias nacionales (griega, rusa, serbia, rumana…) que comparten la misma fe y liturgia, sin una cabeza única.",
    authority:
      "Los obispos reunidos en sínodo. Cada iglesia tiene su patriarca; el de Constantinopla tiene una primacía de honor, no de mando.",
    bible: "Usa la versión griega del Antiguo Testamento (la Septuaginta), con algunos libros más que la Biblia católica.",
    sacraments: "Los llama «misterios». Normalmente se cuentan siete, como en la Iglesia católica.",
    clergy: "Un hombre casado puede ordenarse sacerdote. Los obispos son monjes y, por tanto, célibes.",
    mary: "Muy venerada como Theotokos, «Madre de Dios». Celebra su Dormición.",
    images: "Iconos: imágenes pintadas sobre madera que se consideran una ventana a lo sagrado. Casi nunca estatuas.",
    eucharist: "Jesús está realmente presente. Se usa pan con levadura y se comulga con pan y vino.",
    followers: "Más de 200 millones",
    where: "Rusia, Ucrania, Grecia, Rumanía, Serbia, Bulgaria, Georgia y Chipre.",
    weight: 3,
  },
  {
    slug: "orientales",
    name: "Iglesias ortodoxas orientales",
    shortName: "Orientales",
    color: "var(--rama-orientales)",
    splitYear: 451,
    splitNote:
      "Se separan tras el Concilio de Calcedonia (451), al no aceptar su forma de explicar cómo Cristo es a la vez Dios y hombre.",
    summary:
      "Las iglesias más antiguas de Egipto, Etiopía, Armenia, Siria o la India. Muchas veces se las confunde con la ortodoxa, pero son otra familia.",
    authority: "Cada iglesia tiene su propio patriarca, como el papa copto de Alejandría o el catolicós de Armenia.",
    bible: "Varía según la iglesia. La Biblia de la Iglesia etíope es la más amplia: tiene 81 libros.",
    sacraments: "Siete, como las iglesias católica y ortodoxa.",
    clergy: "Un hombre casado puede ordenarse sacerdote. Los obispos son monjes.",
    mary: "Muy venerada como Madre de Dios.",
    images: "Iconos y pinturas murales. Las iglesias etíopes son famosas por sus colores.",
    eucharist: "Jesús está realmente presente en el pan y el vino.",
    followers: "Unos 60 millones",
    where: "Etiopía, Egipto (los coptos), Armenia, Eritrea, Siria, Líbano y el sur de la India.",
    weight: 2,
  },
  {
    slug: "protestante",
    name: "Iglesias protestantes",
    shortName: "Protestantes",
    color: "var(--rama-protestante)",
    splitYear: 1517,
    splitNote:
      "Nacen de la Reforma, que empieza en 1517 cuando Martín Lutero critica la venta de indulgencias.",
    summary:
      "Muchas iglesias distintas (luteranas, reformadas, bautistas, metodistas, pentecostales…) que ponen la Biblia en el centro.",
    authority: "Solo la Biblia («sola Scriptura»). No hay una autoridad común: cada iglesia se organiza a su manera.",
    bible: "66 libros: no incluye los deuterocanónicos.",
    sacraments: "Dos: el bautismo y la santa cena. Algunas iglesias los llaman «ordenanzas».",
    clergy: "Los pastores pueden casarse. En muchas iglesias también hay mujeres pastoras.",
    mary: "Se la respeta como madre de Jesús, pero no se le reza.",
    images: "Pocas o ninguna en muchas iglesias, para centrar la atención en la Palabra.",
    eucharist:
      "Cambia según la iglesia: para los luteranos Cristo está realmente presente; para otras, la cena es sobre todo un recuerdo.",
    followers: "Unos 900 millones, contando las iglesias evangélicas y pentecostales",
    where: "Norte de Europa, Estados Unidos, África subsahariana, Brasil y Corea del Sur.",
    weight: 4,
  },
  {
    slug: "anglicana",
    name: "Comunión anglicana",
    shortName: "Anglicana",
    color: "var(--rama-anglicana)",
    splitYear: 1534,
    splitNote:
      "Nace en 1534, cuando el rey Enrique VIII de Inglaterra rompe con Roma y se declara cabeza de la Iglesia de Inglaterra.",
    summary:
      "Se presenta como un camino intermedio: conserva muchas formas católicas (obispos, liturgia) con ideas de la Reforma protestante.",
    authority:
      "Los obispos. El arzobispo de Canterbury es su referencia espiritual, y el rey o la reina es el gobernador supremo de la Iglesia de Inglaterra.",
    bible: "66 libros, y los deuterocanónicos se leen como lectura recomendada.",
    sacraments: "Dos principales, bautismo y eucaristía, y otros cinco ritos sacramentales.",
    clergy: "Los sacerdotes pueden casarse. En muchas provincias hay mujeres sacerdotes y obispas.",
    mary: "Se la honra como madre de Jesús. La devoción varía mucho de una parroquia a otra.",
    images: "Sí, aunque con menos presencia que en las iglesias católicas.",
    eucharist: "Afirma la presencia real de Cristo sin definir cómo ocurre.",
    followers: "Unos 85 millones",
    where: "Inglaterra, Nigeria, Uganda, Kenia, Australia y otros países del antiguo Imperio británico.",
    weight: 2,
  },
];

export const findChurch = (slug: string): Church | undefined => churches.find((church) => church.slug === slug);

export const branchColor: Readonly<Record<BranchSlug, string>> = {
  "primer-milenio": "var(--rama-primer-milenio)",
  catolica: "var(--rama-catolica)",
  ortodoxa: "var(--rama-ortodoxa)",
  orientales: "var(--rama-orientales)",
  protestante: "var(--rama-protestante)",
  anglicana: "var(--rama-anglicana)",
};

export const branchName: Readonly<Record<BranchSlug, string>> = {
  "primer-milenio": "Primeros siglos",
  catolica: "Católica",
  ortodoxa: "Ortodoxa",
  orientales: "Orientales",
  protestante: "Protestantes",
  anglicana: "Anglicana",
};
