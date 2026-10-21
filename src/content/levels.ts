export type LevelSlug = "primaria" | "eso" | "bachillerato";

export type Unit = { title: string; summary: string };

export type Level = {
  slug: LevelSlug;
  name: string;
  ages: string;
  intro: string;
  units: readonly Unit[];
  tools: readonly { href: string; title: string; howTo: string }[];
};

/** La sección de colegios se cuenta desde la fe católica, como la asignatura de Religión. */
export const levels: readonly Level[] = [
  {
    slug: "primaria",
    name: "Primaria",
    ages: "De 6 a 12 años",
    intro:
      "Descubrir quién es Jesús, cómo nos habla Dios a través de la Biblia y por qué los cristianos celebran la Navidad y la Pascua.",
    units: [
      { title: "Dios nos ha creado y nos quiere", summary: "La creación como regalo y el cuidado de la naturaleza y de los demás." },
      { title: "Jesús nace en Belén", summary: "La Navidad, María y José, los pastores y los magos de Oriente." },
      { title: "Jesús nos enseña a querernos", summary: "Las parábolas más conocidas: el buen samaritano, el hijo pródigo, la oveja perdida." },
      { title: "Jesús muere y resucita", summary: "La Semana Santa y la alegría de la Pascua." },
      { title: "La Iglesia, la familia de los cristianos", summary: "Los apóstoles, el bautismo y cómo se reúnen los cristianos el domingo." },
      { title: "Hablar con Dios", summary: "Qué es rezar y el Padrenuestro, la oración que enseñó Jesús." },
    ],
    tools: [
      { href: "/quiz", title: "Quiz", howTo: "Para jugar en grupo con el proyector, leyendo las preguntas en voz alta." },
    ],
  },
  {
    slug: "eso",
    name: "ESO",
    ages: "De 12 a 16 años",
    intro:
      "Conocer a Jesús de Nazaret y su mensaje, leer la Biblia con sentido y entender qué significa vivir como cristiano hoy.",
    units: [
      { title: "La Biblia: cómo se escribió y cómo leerla", summary: "Antiguo y Nuevo Testamento, géneros literarios y cómo buscar una cita." },
      { title: "Jesús de Nazaret", summary: "Su vida, su tierra y su mensaje: el Reino de Dios." },
      { title: "La muerte y la resurrección", summary: "El centro de la fe cristiana y lo que significa para los creyentes." },
      { title: "La Iglesia: de los apóstoles a hoy", summary: "Los primeros cristianos, las persecuciones y la expansión por el mundo." },
      { title: "Los sacramentos y la oración", summary: "Los signos con los que los cristianos celebran su fe, y en qué difieren las iglesias." },
      { title: "Vivir como cristiano hoy", summary: "Las bienaventuranzas, el amor al prójimo y el compromiso con los demás." },
    ],
    tools: [
      { href: "/mapa", title: "Mapa con línea del tiempo", howTo: "Para ver cómo se extiende el cristianismo desde Jerusalén." },
      { href: "/comparador", title: "Comparador de iglesias", howTo: "Para trabajar por parejas en qué se parecen y en qué se diferencian." },
      { href: "/quiz", title: "Quiz", howTo: "Para repasar al final de una unidad." },
    ],
  },
  {
    slug: "bachillerato",
    name: "Bachillerato",
    ages: "De 16 a 18 años",
    intro:
      "Pensar las grandes preguntas desde la fe cristiana: la relación entre fe y razón, el sentido de la vida y el compromiso con la sociedad.",
    units: [
      { title: "Fe y razón", summary: "¿Se puede creer y pensar a la vez? Lo que han dicho los grandes pensadores cristianos." },
      { title: "La persona a la luz de la fe", summary: "Dignidad, libertad y sentido de la vida." },
      { title: "Fe, ciencia y cultura", summary: "Galileo, Darwin y el diálogo entre fe y ciencia." },
      { title: "Los cristianos y la sociedad", summary: "La justicia, la paz y los más pobres en el pensamiento social cristiano." },
      { title: "La unidad de los cristianos", summary: "Por qué se separaron las iglesias y cómo dialogan hoy (el ecumenismo)." },
      { title: "El cristianismo en el arte", summary: "Catedrales, pintura y música como expresión de la fe." },
    ],
    tools: [
      { href: "/comparador", title: "Comparador de iglesias", howTo: "Base para la unidad sobre la unidad de los cristianos." },
      { href: "/mapa", title: "Mapa con línea del tiempo", howTo: "Para situar concilios, cismas y misiones." },
      { href: "/quiz", title: "Quiz", howTo: "Para comprobar conocimientos previos al empezar." },
    ],
  },
];

export const findLevel = (slug: string): Level | undefined => levels.find((level) => level.slug === slug);

/** La sección universitaria es histórica y cultural. */
export const universityUnits: readonly Unit[] = [
  { title: "El Jesús histórico", summary: "Qué podemos saber de Jesús con los métodos de la historia, y con qué fuentes." },
  { title: "Cómo se formó la Biblia", summary: "Manuscritos, traducciones y por qué cada iglesia tiene un canon distinto." },
  { title: "Concilios y credos", summary: "De Nicea (325) al Vaticano II (1962-1965): cómo se fijaron las doctrinas." },
  { title: "Los grandes cismas", summary: "Calcedonia (451), el Gran Cisma (1054) y la Reforma (1517)." },
  { title: "Cristianismo y arte", summary: "Del arte de las catacumbas al barroco: cómo leer una imagen religiosa." },
  { title: "El cristianismo en la historia de España", summary: "De la Hispania romana a la España actual, pasando por al-Ándalus y la Inquisición." },
];
