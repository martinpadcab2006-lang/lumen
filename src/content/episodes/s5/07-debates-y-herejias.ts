import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("alejandria", "roma", "cartago", "toledo", "hipona", "avila");

export const debatesYHerejias = makeEpisode({
  slug: "debates-y-herejias",
  title: "Los primeros debates y herejías",
  period: "Siglos II – VI",
  cover: "Nag Hammadi Codex II.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "gnosticos", year: "Siglo II", place: "alejandria" },
    { id: "docetas", year: "Siglo II", place: "roma" },
    { id: "donatistas", year: "311 – 411", place: "cartago" },
    { id: "arrianos", year: "Siglos IV – VI", place: "toledo" },
    { id: "pelagio", year: "c. 410 – 431", place: "hipona" },
    { id: "prisciliano", year: "c. 380 – 385", place: "avila" },
  ],
  library: { ...library, places },
  version: {
    title: "Los primeros debates y herejías",
    inAMinute: [
      "«Herejía» viene del griego hairesis, «elección»: elegir una parte de la fe y separarse del resto.",
      "Los gnósticos creían en un conocimiento secreto que salvaba; en 1945 aparecieron sus libros en Egipto.",
      "Los donatistas pensaban que un sacramento no valía si el sacerdote era indigno; Agustín les respondió que sí.",
      "Pelagio creía que el ser humano puede ser bueno solo con su esfuerzo; Agustín defendió la necesidad de la gracia.",
      "Prisciliano, obispo de Ávila, fue el primer condenado a muerte por herejía por autoridades cristianas.",
    ],
    intro:
      "Muchas de las grandes ideas cristianas se aclararon discutiendo. Cada vez que alguien proponía una forma nueva de entender la fe, los demás tenían que decidir si era correcta. A las propuestas rechazadas se las llamó herejías. Es una historia de ideas apasionantes y, a veces, también de abusos.",
    sections: [
      {
        stop: "gnosticos",
        heading: "Los gnósticos y su saber secreto",
        blocks: [
          { type: "p", text: "En el siglo II se extendieron varios grupos a los que llamamos gnósticos, de gnosis, «conocimiento». En general, creían que el mundo material era malo, obra de un dios inferior, y que el ser humano era una chispa divina atrapada en un cuerpo. Se salvaban quienes recibían un conocimiento secreto." },
          { type: "image", id: "nagHammadi" },
          { type: "p", text: "Durante siglos, solo los conocíamos por lo que decían sus enemigos, como Ireneo de Lyon. Pero en 1945, unos campesinos egipcios encontraron cerca de Nag Hammadi una vasija con trece libros del siglo IV con textos gnósticos, entre ellos el Evangelio de Tomás. Fue un descubrimiento enorme." },
          { type: "fact", label: "El Evangelio de Judas", text: "En 2006 se publicó otro texto gnóstico: el Evangelio de Judas, en el que Judas es el único discípulo que entiende a Jesús. Lo mencionaba Ireneo hacia el año 180, pero no se conocía. Es interesante para entender a los gnósticos, aunque no cuenta nada fiable sobre el Judas histórico." },
        ],
      },
      {
        stop: "docetas",
        heading: "Un Jesús que solo parecía humano",
        blocks: [
          { type: "p", text: "Otros, llamados docetas, del griego dokein, «parecer», decían que Jesús no tuvo un cuerpo real: solo lo parecía, y por tanto no sufrió de verdad en la cruz. Ignacio de Antioquía les respondió: si Cristo solo sufrió en apariencia, entonces él, que iba a morir por Cristo, también moriría en apariencia." },
          { type: "p", text: "Y en Roma, Marción, un rico armador, rechazó el Antiguo Testamento. Al llegar había regalado a la comunidad 200.000 sestercios; cuando lo expulsaron, hacia el año 144, se los devolvieron. Fundó su propia Iglesia, que duró varios siglos." },
        ],
      },
      {
        stop: "donatistas",
        heading: "Los donatistas: una Iglesia de puros",
        blocks: [
          { type: "p", text: "Tras la persecución de Diocleciano, en el norte de África surgió una pregunta: ¿valían los sacramentos de un obispo que había entregado los libros sagrados a la policía para salvar la vida? Un grupo, los donatistas, por su líder Donato, decía que no: solo los sacerdotes puros podían dar sacramentos válidos." },
          { type: "p", text: "El conflicto dividió las ciudades africanas durante un siglo, con dos obispos en cada una. Agustín sostuvo que el que actúa en los sacramentos es Cristo, y que no dependen de la santidad del sacerdote. Es la postura que mantuvo la Iglesia." },
        ],
      },
      {
        stop: "arrianos",
        heading: "El arrianismo de los godos",
        blocks: [
          { type: "p", text: "El arrianismo, condenado en Nicea, no desapareció: durante el siglo IV tuvo el apoyo de varios emperadores. Un obispo godo, Ulfilas, tradujo la Biblia a la lengua de su pueblo y les enseñó el cristianismo en su versión arriana." },
          { type: "p", text: "Por eso, cuando los pueblos germánicos se instalaron en el Imperio, muchos eran cristianos arrianos, como los visigodos de Hispania. Durante más de un siglo hubo en la península dos iglesias: la arriana de los reyes godos y la católica de los hispanorromanos. Se unieron en el III Concilio de Toledo, en el 589." },
        ],
      },
      {
        stop: "pelagio",
        heading: "Pelagio y la gracia",
        blocks: [
          { type: "p", text: "Pelagio, un monje de Britania muy apreciado en Roma, predicaba que el ser humano puede cumplir los mandamientos con su propio esfuerzo: Dios ya nos ha dado la libertad y su ley, y el resto depende de nosotros." },
          { type: "p", text: "Agustín, que conocía muy bien su propia debilidad, lo vio de otro modo: el ser humano está herido por el pecado y necesita la ayuda de Dios, la gracia, para hacer el bien. La discusión fue durísima, y las ideas de Pelagio se condenaron en varios concilios. El debate sobre la gracia y la libertad volvería con fuerza en la Reforma protestante." },
        ],
      },
      {
        stop: "prisciliano",
        heading: "Prisciliano, el obispo ejecutado",
        blocks: [
          { type: "p", text: "Prisciliano era un laico culto de Hispania que predicaba una vida muy austera, con ayunos, estudio de la Biblia y reuniones de oración en las que participaban también mujeres. Tuvo muchos seguidores, sobre todo en Gallaecia, y llegó a ser obispo de Ávila. Otros obispos lo acusaron de herejía y de magia." },
          { type: "p", text: "En el año 385, el emperador Máximo lo hizo juzgar en Tréveris y lo condenó a muerte con varios seguidores. Fue la primera vez que una autoridad cristiana ejecutaba a alguien por herejía. Martín de Tours y Ambrosio de Milán protestaron: los asuntos de fe no debían resolverse con la espada." },
          { type: "fact", label: "Un aviso para el futuro", text: "Aquella protesta no fue escuchada siempre. En los siglos siguientes, la persecución de los herejes por la fuerza se convirtió en algo habitual en la Europa cristiana. Lo veremos al hablar de la Inquisición." },
        ],
      },
    ],
    relatedPills: ["nicea-y-el-credo"],
    quiz: [
      question("s5e7-herejia", "¿Qué significa originalmente la palabra griega hairesis, de la que viene «herejía»?", ["Mentira", "Elección", "Pecado", "Enemigo"], 1, "Elegir una parte de la fe y separarse del resto."),
      question("s5e7-nag", "¿Qué se encontró en Nag Hammadi (Egipto) en 1945?", ["La tumba de Jesús", "Libros con textos gnósticos, como el Evangelio de Tomás", "El arca de Noé", "Los manuscritos del mar Muerto"], 1, "Trece códices del siglo IV."),
      question("s5e7-prisciliano", "¿Quién fue Prisciliano?", ["Un emperador arriano", "Un obispo de Ávila ejecutado por herejía en el 385", "El autor del Evangelio de Judas", "Un papa del siglo IV"], 1, "Fue la primera ejecución por herejía ordenada por una autoridad cristiana."),
    ],
    sources: [
      { text: "Ireneo de Lyon, Contra las herejías; Agustín, Sobre el bautismo, contra los donatistas" },
      { text: "Antonio Piñero (ed.), Textos gnósticos. Biblioteca de Nag Hammadi, Trotta, 3 vols., 1997-2000" },
      { text: "Henry Chadwick, Prisciliano de Ávila: lo oculto y lo carismático en la Iglesia primitiva, Espasa-Calpe, 1978" },
    ],
    next: "En el próximo episodio: el bautismo, la eucaristía y los demás sacramentos. Cómo empezaron y cómo llegaron a ser siete.",
  },
});
