import type { ReligionSlug } from "./religions";

export type Fact = { religion: ReligionSlug; title: string; body: string };

export const facts: readonly Fact[] = [
  {
    religion: "cristianismo",
    title: "¿Por qué descansamos el domingo?",
    body: "Los primeros cristianos se reunían el domingo porque, según los evangelios, fue el día de la resurrección. En el año 321 el emperador Constantino lo declaró día de descanso en el Imperio romano.",
  },
  {
    religion: "islam",
    title: "El álgebra viaja por al-Ándalus",
    body: "La palabra «álgebra» viene del árabe al-yabr. Llegó a Europa en parte a través de las traducciones hechas en la península ibérica, donde convivieron sabios musulmanes, judíos y cristianos.",
  },
  {
    religion: "budismo",
    title: "El Buda que ríe no es el Buda",
    body: "La figura gordita y sonriente que se ve en muchos restaurantes es Budai, un monje chino del siglo X, y no Siddhartha Gautama.",
  },
  {
    religion: "hinduismo",
    title: "El número cero",
    body: "El cero como número, con sus propias reglas, aparece en textos indios del siglo VII. Para algunos estudiosos, la idea de vacío presente en el pensamiento indio ayudó a imaginarlo.",
  },
  {
    religion: "judaismo",
    title: "Una semana de siete días",
    body: "La semana de siete días con un día de descanso, el Shabat, se popularizó por el judaísmo y pasó después al cristianismo y al islam.",
  },
  {
    religion: "sijismo",
    title: "La cocina más grande del mundo",
    body: "El Templo Dorado de Amritsar sirve comida gratis a decenas de miles de personas cada día, preparada en gran parte por voluntarios.",
  },
];

export type Festival = { religion: ReligionSlug; name: string; when: string; about: string };

export const festivals: readonly Festival[] = [
  { religion: "taoismo", name: "Año Nuevo lunar", when: "Enero o febrero", about: "Comienza el año en el calendario chino, con familias reunidas, faroles y sobres rojos." },
  { religion: "hinduismo", name: "Holi", when: "Marzo", about: "La fiesta de los colores despide el invierno lanzando polvos de colores." },
  { religion: "judaismo", name: "Pésaj", when: "Marzo o abril", about: "Ocho días que recuerdan la salida de Egipto, con una cena especial: el séder." },
  { religion: "cristianismo", name: "Semana Santa", when: "Marzo o abril", about: "Recuerda la muerte y resurrección de Jesús. Su fecha depende de la luna llena de primavera." },
  { religion: "sijismo", name: "Vaisakhi", when: "13 o 14 de abril", about: "Celebra la fundación de la Khalsa en 1699 y la cosecha en el Panyab." },
  { religion: "budismo", name: "Vesak", when: "Abril, mayo o junio", about: "La luna llena que recuerda el nacimiento, el despertar y la muerte del Buda." },
  { religion: "islam", name: "Ramadán y Eid al-Fitr", when: "Cambia cada año", about: "Un mes de ayuno desde el alba hasta la puesta de sol. Como el calendario islámico es lunar, se adelanta unos once días cada año." },
  { religion: "hinduismo", name: "Diwali", when: "Octubre o noviembre", about: "La fiesta de las luces celebra la victoria de la luz sobre la oscuridad con lámparas y fuegos artificiales." },
  { religion: "cristianismo", name: "Navidad", when: "25 de diciembre", about: "Celebra el nacimiento de Jesús. Las iglesias ortodoxas que siguen el calendario juliano la celebran el 7 de enero." },
];

export type FloodVersion = { source: string; culture: string; hero: string; body: string };

export const floodMyths: readonly FloodVersion[] = [
  {
    source: "Poema de Gilgamesh",
    culture: "Mesopotamia, II milenio a. C.",
    hero: "Utnapishtim",
    body: "Un dios le avisa en secreto del diluvio. Construye un barco, salva a su familia y a los animales, y suelta aves para saber si la tierra ya está seca.",
  },
  {
    source: "Génesis (Biblia hebrea)",
    culture: "Judaísmo y cristianismo",
    hero: "Noé",
    body: "Dios decide limpiar el mundo con agua y elige a Noé, un hombre justo. El arca se posa sobre los montes de Ararat y un arco iris sella la alianza.",
  },
  {
    source: "Corán (sura 11 y otras)",
    culture: "Islam",
    hero: "Nuh",
    body: "Nuh advierte a su pueblo durante años y casi nadie le escucha. Construye el arca por orden de Dios y se salvan quienes creen.",
  },
  {
    source: "Shatapatha Brahmana",
    culture: "Hinduismo",
    hero: "Manu",
    body: "Un pequeño pez avisa a Manu del diluvio y arrastra su barco hasta una montaña del norte. En relatos posteriores, ese pez es Matsya, una forma de Vishnu.",
  },
];
