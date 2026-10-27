import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("florencia", "roma", "alcala");

export const elRenacimiento = makeEpisode({
  slug: "el-renacimiento",
  title: "El Renacimiento y el cristianismo",
  period: "1400 – 1564",
  cover: "Raphael School of Athens.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "humanismo", year: "Siglo XV", place: "florencia" },
    { id: "papas", year: "1447 – 1521", place: "roma" },
    { id: "savonarola", year: "1494 – 1498", place: "florencia" },
    { id: "miguelAngel", year: "1498 – 1564", place: "roma" },
    { id: "erasmo", year: "1499 – 1536", place: "alcala" },
  ],
  library: { ...library, places },
  version: {
    title: "El Renacimiento y el cristianismo",
    inAMinute: [
      "En el siglo XV, los humanistas quisieron volver a las fuentes: los clásicos griegos y latinos, y también la Biblia en sus lenguas originales.",
      "Los papas del Renacimiento fueron grandes mecenas del arte, pero muchos vivieron como príncipes, con lujo y escándalos.",
      "En Florencia, el fraile Savonarola predicó contra esa corrupción y acabó en la hoguera.",
      "Miguel Ángel pintó la Capilla Sixtina y diseñó la cúpula de San Pedro.",
      "Erasmo de Rotterdam pidió una reforma de la Iglesia a base de estudio, ironía y vuelta al evangelio.",
    ],
    intro:
      "Empieza la séptima temporada, la de los grandes cambios: nuevas ideas, nuevos mundos y una Iglesia occidental que se rompe en pedazos. Todo arranca en las ciudades italianas del siglo XV, donde una generación de artistas y sabios quiso hacer renacer la Antigüedad. Y el cristianismo estuvo en el centro de ese renacer, para lo bueno y para lo malo.",
    sections: [
      {
        stop: "humanismo",
        heading: "Volver a las fuentes",
        blocks: [
          { type: "p", text: "Los humanistas tenían un lema: ad fontes, «a las fuentes». Querían leer a los autores antiguos en sus textos originales, sin intermediarios. Cuando los turcos amenazaron y luego tomaron Constantinopla, muchos sabios bizantinos se refugiaron en Italia con sus manuscritos griegos." },
          { type: "p", text: "Ese espíritu crítico se aplicó también a la Iglesia. En 1440, el humanista Lorenzo Valla demostró, estudiando su latín, que la «Donación de Constantino», un documento en el que el emperador supuestamente regalaba al papa el poder sobre Occidente, era una falsificación muy posterior." },
          { type: "fact", label: "La familia Médici", text: "En Florencia, la familia de banqueros Médici pagó a artistas y sabios y gobernó la ciudad durante generaciones. Dos Médici llegarían a papas: León X y Clemente VII." },
        ],
      },
      {
        stop: "papas",
        heading: "Papas príncipes",
        blocks: [
          { type: "p", text: "Los papas del Renacimiento querían que Roma volviera a ser la capital del mundo. Nicolás V fundó la Biblioteca Vaticana. Sixto IV construyó la Capilla Sixtina, que lleva su nombre. Julio II, un papa guerrero que dirigía ejércitos con armadura, encargó a Miguel Ángel la bóveda de la Sixtina y a Rafael la decoración de sus habitaciones." },
          { type: "image", id: "atenas" },
          { type: "p", text: "Pero muchos vivieron como príncipes de su tiempo: con lujo, guerras y nepotismo, colocando a sus familiares en cargos importantes. El caso más escandaloso fue el de Alejandro VI, el valenciano Rodrigo Borgia, que tuvo varios hijos y los usó en su política. Muchos cristianos se preguntaban si aquella era la Iglesia de los apóstoles." },
        ],
      },
      {
        stop: "savonarola",
        heading: "La hoguera de las vanidades",
        blocks: [
          { type: "p", text: "En Florencia, un fraile dominico, Girolamo Savonarola, predicaba con fuerza contra la corrupción de la ciudad y del papa, y anunciaba castigos divinos. Cuando en 1494 los Médici fueron expulsados, Savonarola se convirtió en el hombre más influyente de Florencia." },
          { type: "p", text: "Sus seguidores organizaron «hogueras de las vanidades», en las que la gente quemaba espejos, joyas, naipes, libros y cuadros considerados inmorales. Pero el papa Alejandro VI lo excomulgó, la ciudad se volvió contra él y en 1498 fue ahorcado y quemado en la plaza de la Señoría." },
        ],
      },
      {
        stop: "miguelAngel",
        heading: "Miguel Ángel",
        blocks: [
          { type: "p", text: "Miguel Ángel Buonarroti tenía 24 años cuando terminó la Piedad de San Pedro. Entre 1508 y 1512 pintó, con muy pocos ayudantes y de pie sobre un andamio, la bóveda de la Capilla Sixtina, con la creación del mundo y la historia de Noé. Años después, en la pared del altar, pintó el Juicio Final." },
          { type: "image", id: "cupula" },
          { type: "p", text: "Ya anciano, se encargó de las obras de la nueva basílica de San Pedro y diseñó su cúpula, que se terminó tras su muerte. Era un hombre profundamente religioso, que escribió poemas en los que le pedía a Dios perdón por haber dedicado su vida al arte." },
          { type: "fact", label: "En la sección de Arte", text: "Tienes la ficha completa de la Piedad del Vaticano en la sección de Arte, dentro del Renacimiento." },
        ],
      },
      {
        stop: "erasmo",
        heading: "Erasmo y la reforma de los humanistas",
        blocks: [
          { type: "image", id: "erasmo" },
          { type: "p", text: "El humanista más famoso de Europa fue Erasmo de Rotterdam. En su «Elogio de la locura» se burló de los frailes ignorantes, los teólogos pedantes y los papas guerreros. En 1516 publicó el Nuevo Testamento en griego, para que se pudiera leer en su original. Quería una Iglesia más sencilla, más culta y más fiel al evangelio." },
          { type: "p", text: "En España también hubo una reforma humanista. El cardenal Cisneros fundó la Universidad de Alcalá, de donde salió la Biblia Políglota, y reformó a frailes y clérigos. Erasmo tuvo muchos admiradores españoles, hasta que la Inquisición empezó a sospechar de ellos." },
          { type: "fact", label: "«Erasmo puso el huevo…»", text: "Se decía entonces que «Erasmo puso el huevo y Lutero lo empolló». Erasmo, sin embargo, nunca se separó de Roma, y acabó discutiendo con Lutero sobre la libertad humana." },
        ],
      },
    ],
    quiz: [
      question("s7e1-valla", "¿Qué demostró Lorenzo Valla en 1440?", ["Que la Tierra gira alrededor del Sol", "Que la «Donación de Constantino» era una falsificación", "Que la Biblia tenía 73 libros", "Que Roma fue fundada por Rómulo"], 1, "Lo descubrió estudiando el latín del documento."),
      question("s7e1-sixtina", "¿Qué pintó Miguel Ángel entre 1508 y 1512?", ["La Última Cena", "La bóveda de la Capilla Sixtina", "La escuela de Atenas", "Las Meninas"], 1, "Por encargo del papa Julio II."),
      question("s7e1-erasmo", "¿Qué publicó Erasmo en 1516?", ["Las 95 tesis", "El Nuevo Testamento en griego", "El Quijote", "La Vulgata"], 1, "Para que se pudiera leer en su lengua original."),
    ],
    sources: [
      { text: "Lorenzo Valla, Sobre la falsa Donación de Constantino; Erasmo, Elogio de la locura" },
      { text: "Marcel Bataillon, Erasmo y España, Fondo de Cultura Económica, 1950" },
      { text: "Jacob Burckhardt, La cultura del Renacimiento en Italia, Akal, 1992" },
    ],
    next: "En el próximo episodio: un fraile alemán publica 95 tesis contra las indulgencias. Lutero y la Reforma.",
  },
});
