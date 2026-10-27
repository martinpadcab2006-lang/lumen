import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("londres", "oxford", "lourdes", "roma");

export const elSigloXIX = makeEpisode({
  slug: "el-siglo-xix",
  title: "El cristianismo en el siglo XIX",
  period: "1800 – 1929",
  cover: "Breccia di Porta Pia Ademollo.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "misiones", year: "1800 – 1900", place: "londres" },
    { id: "newman", year: "1833 – 1890", place: "oxford" },
    { id: "lourdes", year: "1858", place: "lourdes" },
    { id: "vaticanoI", year: "1864 – 1870", place: "roma" },
    { id: "prisionero", year: "1870 – 1929", place: "roma" },
  ],
  library: { ...library, places },
  version: {
    title: "El cristianismo en el siglo XIX",
    inAMinute: [
      "El siglo XIX fue el gran siglo de las misiones, católicas y protestantes, por África, Asia y Oceanía.",
      "En Inglaterra, el famoso anglicano John Henry Newman se hizo católico. Hoy es santo.",
      "En 1858, una niña pobre, Bernadette, dijo ver a la Virgen en Lourdes, que se convirtió en un gran santuario.",
      "El papa Pío IX condenó muchas ideas modernas, y el Concilio Vaticano I proclamó la infalibilidad del papa (1870).",
      "Ese mismo año, Italia conquistó Roma. El papa se consideró «prisionero en el Vaticano» hasta 1929.",
    ],
    intro:
      "El siglo XIX fue un siglo de contrastes para el cristianismo. En Europa, la Iglesia se sentía asediada por el liberalismo, el nacionalismo y la ciencia, y en muchos países perdió poder. Pero fue también un siglo de enorme vitalidad: nuevas congregaciones, nuevos santuarios y misioneros que llegaron a todos los rincones del mundo.",
    sections: [
      {
        stop: "misiones",
        heading: "El gran siglo de las misiones",
        blocks: [
          { type: "p", text: "Al mismo tiempo que las potencias europeas se repartían África y Asia, miles de misioneros, protestantes y católicos, se lanzaron a evangelizar. En Londres y otras ciudades se fundaron sociedades misioneras protestantes. El escocés David Livingstone recorrió África como médico y misionero, y denunció la trata de esclavos." },
          { type: "p", text: "Entre los católicos nacieron decenas de congregaciones misioneras, muchas femeninas. Las misiones fueron a menudo de la mano del colonialismo, y muchos misioneros compartieron sus prejuicios. Pero también fundaron escuelas, hospitales y universidades, aprendieron y escribieron lenguas locales y, a veces, defendieron a los pueblos colonizados frente a los abusos." },
          { type: "fact", label: "El fin de la esclavitud", text: "Los cristianos evangélicos ingleses, como William Wilberforce, fueron decisivos en la campaña para abolir la trata de esclavos en el Imperio británico (1807) y la esclavitud (1833)." },
        ],
      },
      {
        stop: "newman",
        heading: "Newman, de Oxford a Roma",
        blocks: [
          { type: "p", text: "En la Universidad de Oxford, un grupo de clérigos anglicanos empezó en 1833 a defender las raíces antiguas y católicas de la Iglesia de Inglaterra: es el «movimiento de Oxford». Su figura más brillante era John Henry Newman." },
          { type: "image", id: "newman" },
          { type: "p", text: "Estudiando a los Padres de la Iglesia, Newman llegó a la conclusión de que la verdadera continuidad con la Iglesia antigua estaba en Roma, y en 1845 se hizo católico, perdiendo su puesto y muchos amigos. Escribió sobre la conciencia y el desarrollo de la doctrina, y su pensamiento influyó mucho en el Concilio Vaticano II. León XIII lo hizo cardenal, y en 2019 fue canonizado." },
        ],
      },
      {
        stop: "lourdes",
        heading: "Lourdes",
        blocks: [
          { type: "p", text: "En 1858, en Lourdes, un pueblo de los Pirineos franceses, Bernadette Soubirous, una niña de catorce años, analfabeta y muy pobre, dijo haber visto a «una señora» en una gruta junto al río. Se le apareció dieciocho veces, y le dijo: «Yo soy la Inmaculada Concepción»." },
          { type: "image", id: "lourdes" },
          { type: "p", text: "Al principio, las autoridades y el párroco desconfiaron. Pero la Iglesia acabó reconociendo las apariciones, y Lourdes se convirtió en el gran santuario de los enfermos: hoy recibe millones de peregrinos al año. La Iglesia ha reconocido oficialmente setenta curaciones como milagrosas, tras exámenes médicos muy estrictos." },
        ],
      },
      {
        stop: "vaticanoI",
        heading: "Pío IX y el Vaticano I",
        blocks: [
          { type: "p", text: "Pío IX fue el papa más largo de la historia: casi 32 años, de 1846 a 1878. Empezó con fama de liberal, pero la revolución de 1848 en Roma lo obligó a huir, y desde entonces se volvió muy desconfiado con las ideas modernas. En 1864 publicó el «Syllabus», una lista de ochenta errores modernos que incluía el liberalismo y la libertad religiosa." },
          { type: "p", text: "En 1869 reunió el Concilio Vaticano I, que en 1870 proclamó la infalibilidad del papa: cuando el papa define solemnemente una verdad de fe o de moral para toda la Iglesia, no puede equivocarse. No significa que el papa no se equivoque nunca: se ha usado muy pocas veces. Algunos católicos, sobre todo alemanes, no lo aceptaron y formaron la Iglesia vetero-católica." },
        ],
      },
      {
        stop: "prisionero",
        heading: "El prisionero del Vaticano",
        blocks: [
          { type: "p", text: "Mientras tanto, Italia se estaba unificando, y los Estados Pontificios estorbaban. Las tropas francesas protegían Roma, pero en 1870 Francia entró en guerra con Prusia y se retiró. El 20 de septiembre, el ejército italiano abrió una brecha en la muralla de Porta Pia y entró en la ciudad. El Concilio se interrumpió y nunca se clausuró." },
          { type: "image", id: "portaPia" },
          { type: "p", text: "Pío IX se negó a aceptarlo y se encerró en el Vaticano, considerándose un prisionero. Sus sucesores hicieron lo mismo durante casi sesenta años. La «cuestión romana» se resolvió en 1929 con los Pactos de Letrán: Italia reconoció la soberanía del papa sobre un pequeño territorio, la Ciudad del Vaticano, el Estado más pequeño del mundo. Muchos historiadores creen que perder sus territorios liberó al papado para centrarse en su misión religiosa." },
        ],
      },
    ],
    quiz: [
      question("s8e2-lourdes", "¿Qué pasó en Lourdes en 1858?", ["Se celebró un concilio", "Bernadette Soubirous dijo haber visto a la Virgen en una gruta", "Nació un papa", "Se fundó una universidad"], 1, "Hoy es uno de los grandes santuarios del mundo."),
      question("s8e2-infalibilidad", "¿Qué significa la infalibilidad del papa, proclamada en 1870?", ["Que el papa nunca se equivoca en nada", "Que cuando define solemnemente una verdad de fe o de moral no puede equivocarse", "Que el papa no puede pecar", "Que el papa elige a los reyes"], 1, "Se ha usado muy pocas veces."),
      question("s8e2-vaticano", "¿Cuándo nació la Ciudad del Vaticano como Estado?", ["En el año 800", "En 1929, con los Pactos de Letrán", "En 1870", "En 1962"], 1, "Resolvió la «cuestión romana»."),
    ],
    sources: [
      { text: "Pío IX, Syllabus (1864); Concilio Vaticano I, constitución Pastor aeternus (1870); Pactos de Letrán (1929)" },
      { text: "John Henry Newman, Apologia pro vita sua (1864)" },
      { text: "Owen Chadwick, A History of the Popes 1830-1914, Oxford University Press, 1998" },
    ],
    next: "En el próximo episodio: fábricas, obreros y una encíclica que cambió la manera de hablar de la Iglesia. «Rerum novarum» y la doctrina social.",
  },
});
