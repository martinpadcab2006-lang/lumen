import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("manchester", "maguncia", "londres", "roma", "barcelona");

export const rerumNovarum = makeEpisode({
  slug: "rerum-novarum",
  title: "Rerum novarum y la doctrina social",
  period: "1848 – 2026",
  cover: "Adolph Menzel - Eisenwalzwerk - Google Art Project.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "fabricas", year: "1780 – 1880", place: "manchester" },
    { id: "ketteler", year: "1848 – 1877", place: "maguncia" },
    { id: "manning", year: "1889", place: "londres" },
    { id: "rerum", year: "1891", place: "roma" },
    { id: "despues", year: "1931 – 2026", place: "barcelona" },
  ],
  library: { ...library, places },
  version: {
    title: "Rerum novarum y la doctrina social",
    inAMinute: [
      "La Revolución industrial creó una nueva clase de obreros que vivían en condiciones durísimas.",
      "Algunos católicos, como el obispo alemán Ketteler, empezaron a defender los derechos de los trabajadores.",
      "En 1891, el papa León XIII publicó la encíclica «Rerum novarum»: salario justo, descanso, derecho a formar sindicatos.",
      "Nació así la doctrina social de la Iglesia, que los papas siguientes han ido ampliando.",
      "En 2025, el nuevo papa eligió el nombre de León pensando en León XIII y en la revolución de la inteligencia artificial.",
    ],
    intro:
      "En el siglo XIX, Europa se llenó de chimeneas. Las fábricas producían riqueza como nunca antes, pero los obreros, también niños, trabajaban catorce horas al día por salarios de miseria, sin descanso ni protección. ¿Qué tenía que decir el cristianismo ante esto? Durante un tiempo, demasiado poco. Luego, algo muy importante.",
    sections: [
      {
        stop: "fabricas",
        heading: "La cuestión obrera",
        blocks: [
          { type: "p", text: "La Revolución industrial empezó en Inglaterra a finales del siglo XVIII, y Mánchester se convirtió en su símbolo: fábricas textiles, barrios obreros insalubres, niños de seis años trabajando en minas y telares. A ese drama se le llamó la «cuestión social» o «cuestión obrera»." },
          { type: "image", id: "fabrica" },
          { type: "p", text: "En 1848, Karl Marx y Friedrich Engels publicaron el «Manifiesto comunista», que llamaba a los obreros a la revolución. Marx veía la religión como «el opio del pueblo», un consuelo que adormecía a los pobres. Muchos obreros se alejaron de las Iglesias, que veían del lado de los ricos." },
        ],
      },
      {
        stop: "ketteler",
        heading: "El obispo de los obreros",
        blocks: [
          { type: "p", text: "Pero algunos cristianos reaccionaron. En Alemania, Wilhelm von Ketteler, un noble que se hizo sacerdote y luego obispo de Maguncia, predicó desde 1848 sobre la miseria de los trabajadores y defendió que tenían derecho a un salario digno, a limitar la jornada y a asociarse. León XIII lo llamaría «mi gran predecesor»." },
          { type: "p", text: "Otro sacerdote alemán, Adolph Kolping, fundó asociaciones para los jóvenes artesanos que llegaban a las ciudades, con casas donde podían vivir, formarse y rezar. Las «casas Kolping» siguen existiendo hoy en todo el mundo." },
        ],
      },
      {
        stop: "manning",
        heading: "Un cardenal en una huelga",
        blocks: [
          { type: "p", text: "En 1889, los estibadores del puerto de Londres, que cargaban y descargaban barcos por jornales miserables, se declararon en huelga. Tras cinco semanas, el conflicto estaba bloqueado. El cardenal Henry Manning, arzobispo católico de Westminster, que tenía ya 81 años, se ofreció como mediador y logró un acuerdo favorable a los trabajadores." },
          { type: "p", text: "Los obreros, muchos de ellos protestantes o sin religión, lo consideraron un héroe. Fue una señal de que la Iglesia podía ponerse del lado de los trabajadores." },
        ],
      },
      {
        stop: "rerum",
        heading: "«Rerum novarum»",
        blocks: [
          { type: "character", id: "leonXIII" },
          { type: "p", text: "El 15 de mayo de 1891, León XIII publicó la encíclica «Rerum novarum», «De las cosas nuevas». Rechazaba la solución socialista de abolir la propiedad privada, pero denunciaba con fuerza que «un número sumamente reducido de opulentos y adinerados ha impuesto poco menos que el yugo de la esclavitud a una muchedumbre infinita de proletarios»." },
          {
            type: "words",
            items: [
              { term: "Salario justo", meaning: "El salario debe bastar para que el obrero y su familia vivan dignamente, aunque el trabajador haya aceptado uno menor." },
              { term: "Descanso", meaning: "Jornadas razonables, descanso dominical y protección de mujeres y niños." },
              { term: "Asociaciones", meaning: "Los obreros tienen derecho a formar sindicatos." },
              { term: "El Estado", meaning: "Debe intervenir para proteger a los más débiles." },
            ],
          },
          { type: "p", text: "Fue el comienzo de la doctrina social de la Iglesia, y de un movimiento social católico que dio lugar a sindicatos, cooperativas, cajas de ahorro y, después de la Segunda Guerra Mundial, a los partidos demócrata-cristianos." },
        ],
      },
      {
        stop: "despues",
        heading: "De León XIII a León XIV",
        blocks: [
          { type: "p", text: "Los papas siguientes desarrollaron estas ideas. Pío XI, en 1931, añadió el principio de subsidiariedad: lo que puede hacer una familia o una asociación no debe quitárselo el Estado. Juan Pablo II escribió sobre la dignidad del trabajo. Y en 2015, Francisco amplió la cuestión social al cuidado del planeta en «Laudato si’»." },
          { type: "p", text: "En mayo de 2025, el cardenal Robert Prevost eligió el nombre de León XIV. Explicó que lo hacía pensando en León XIII, que respondió a la primera revolución industrial, porque hoy la Iglesia debe responder a otra revolución: la de la inteligencia artificial. En 2026 dedicó a ese tema su primera encíclica, «Magnifica humanitas»." },
          { type: "fact", label: "En España", text: "En España, el catolicismo social dio lugar a cajas de ahorro, cooperativas agrarias y sindicatos católicos. En el siglo XX, la Hermandad Obrera de Acción Católica (HOAC) y la Juventud Obrera Cristiana (JOC) tuvieron un papel importante en el mundo del trabajo, también durante el franquismo." },
        ],
      },
    ],
    quiz: [
      question("s8e3-rerum", "¿Qué papa publicó la encíclica «Rerum novarum» en 1891?", ["Pío IX", "León XIII", "Juan XXIII", "Francisco"], 1, "Es el inicio de la doctrina social de la Iglesia."),
      question("s8e3-derechos", "¿Qué defendía la «Rerum novarum»?", ["Abolir la propiedad privada", "El salario justo, el descanso y el derecho a formar sindicatos", "Prohibir las fábricas", "Que los obreros no se quejaran"], 1, "Y que el Estado protegiera a los más débiles."),
      question("s8e3-leon", "¿Por qué eligió el papa León XIV ese nombre en 2025?", ["Por un santo español", "Pensando en León XIII y en la revolución de la inteligencia artificial", "Porque le gustaban los leones", "Por León Magno y Atila"], 1, "Su primera encíclica trata precisamente de la inteligencia artificial."),
    ],
    sources: [
      { text: "León XIII, Rerum novarum (1891); Pío XI, Quadragesimo anno (1931); Francisco, Laudato si’ (2015)" },
      { text: "Compendio de la doctrina social de la Iglesia, Pontificio Consejo Justicia y Paz, 2004" },
      { text: "León XIV, discurso al Colegio Cardenalicio (10 de mayo de 2025)" },
    ],
    next: "En el próximo episodio: dos guerras mundiales, el nazismo, el comunismo y una guerra civil en España. Mártires, silencios y resistencias.",
  },
});
