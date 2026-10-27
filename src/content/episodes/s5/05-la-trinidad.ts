import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("jerusalen", "cartago", "nicea", "constantinopla", "toledo", "hipona");

export const laTrinidad = makeEpisode({
  slug: "la-trinidad",
  title: "La Trinidad",
  period: "Siglos I – VI",
  cover: "Angelsatmamre-trinity-rublev-1410.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "raices", year: "Siglo I", place: "jerusalen" },
    { id: "palabra", year: "c. 180 – 215", place: "cartago" },
    { id: "hijo", year: "325", place: "nicea" },
    { id: "espiritu", year: "381", place: "constantinopla" },
    { id: "filioque", year: "589", place: "toledo" },
    { id: "misterio", year: "Siglos V – XV", place: "hipona" },
  ],
  library: { ...library, places },
  version: {
    title: "La Trinidad",
    inAMinute: [
      "Los cristianos creen en un solo Dios que es Padre, Hijo y Espíritu Santo: tres personas, un solo Dios.",
      "La palabra «Trinidad» no está en la Biblia, pero sí la fórmula «Padre, Hijo y Espíritu Santo».",
      "Nicea (325) afirmó que el Hijo es Dios igual que el Padre. Constantinopla (381) lo dijo del Espíritu Santo.",
      "En Toledo, en el 589, aparece el «Filioque», una palabra que siglos después ayudó a separar Oriente y Occidente.",
      "Casi todas las comparaciones fáciles para explicarla acaban en alguna herejía antigua.",
    ],
    intro:
      "Los cristianos dicen que creen en un solo Dios. Pero también dicen que el Padre es Dios, que Jesús es Dios y que el Espíritu Santo es Dios. ¿Son tres dioses? ¿Es uno con tres disfraces? A los cristianos de los primeros siglos les costó más de trescientos años encontrar las palabras.",
    sections: [
      {
        stop: "raices",
        heading: "Las raíces",
        blocks: [
          { type: "p", text: "Los primeros cristianos eran judíos, y la fe judía tiene una frase central: «Escucha, Israel: el Señor es nuestro Dios, el Señor es uno». No tenían ninguna intención de adorar a varios dioses." },
          { type: "p", text: "Pero, a la vez, rezaban a Jesús como Señor y hablaban del Espíritu de Dios como de alguien que actuaba en ellos. El Nuevo Testamento no tiene una teoría sobre esto, pero sí fórmulas que ponen a los tres juntos. Al final del evangelio de Mateo, Jesús manda bautizar «en el nombre del Padre, y del Hijo, y del Espíritu Santo»." },
        ],
      },
      {
        stop: "palabra",
        heading: "Nace una palabra",
        blocks: [
          { type: "p", text: "La palabra «Trinidad» no aparece en la Biblia. El primero que usó su equivalente griego, trias, fue Teófilo, obispo de Antioquía, hacia el año 180. Y el que la acuñó en latín, trinitas, fue Tertuliano, un abogado de Cartago, a principios del siglo III." },
          { type: "p", text: "Tertuliano también propuso la fórmula que se haría clásica: una sola sustancia en tres personas. «Persona» era la máscara que usaban los actores y, de ahí, el papel que cada uno tiene. No se trata de tres individuos separados, como tres amigos, sino de tres «alguien» que son un único Dios." },
        ],
      },
      {
        stop: "hijo",
        heading: "El Hijo: Dios como el Padre",
        blocks: [
          { type: "character", id: "arrio" },
          { type: "p", text: "Como vimos en la temporada anterior, el presbítero Arrio enseñaba que el Hijo era la primera y más perfecta criatura de Dios, pero una criatura. El Concilio de Nicea respondió en el año 325 con una palabra: el Hijo es homoousios, «de la misma sustancia» que el Padre. Es decir, tan Dios como el Padre." },
        ],
      },
      {
        stop: "espiritu",
        heading: "Y el Espíritu Santo",
        blocks: [
          { type: "p", text: "Resuelto lo del Hijo, surgió la pregunta sobre el Espíritu Santo: ¿era Dios o una fuerza creada? Los Padres de Capadocia defendieron que es Dios igual que el Padre y el Hijo." },
          { type: "p", text: "En el año 381, el Concilio de Constantinopla amplió el Credo de Nicea con una frase sobre el Espíritu: «Señor y dador de vida, que procede del Padre, que con el Padre y el Hijo recibe una misma adoración y gloria». Es el Credo que se sigue rezando hoy en las misas de los domingos." },
          { type: "image", id: "trinidadGreco" },
        ],
      },
      {
        stop: "filioque",
        heading: "Una palabra en Toledo",
        blocks: [
          { type: "p", text: "En el año 589, en el III Concilio de Toledo, el rey visigodo Recaredo, que había dejado el arrianismo dos años antes, proclamó la fe católica de su reino. En el Credo que se proclamó allí, el Espíritu Santo procede «del Padre y del Hijo»: en latín, Filioque. Es uno de los testimonios más antiguos de esa fórmula, que luego se extendió por Occidente." },
          { type: "fact", label: "Una palabra con consecuencias", text: "Las iglesias de Oriente nunca aceptaron que se añadiera nada al Credo de Constantinopla. Roma acabó incorporando el Filioque en el siglo XI, y esta cuestión fue uno de los motivos de la separación entre católicos y ortodoxos en 1054. Lo veremos en la próxima temporada." },
        ],
      },
      {
        stop: "misterio",
        heading: "Cómo explicar lo inexplicable",
        blocks: [
          { type: "p", text: "Agustín dedicó unos veinte años a su gran obra «Sobre la Trinidad». Según una leyenda medieval, paseando por la playa vio a un niño que intentaba meter todo el mar en un hoyo con una concha. Cuando le dijo que era imposible, el niño respondió: «Antes lo meteré yo que tú entiendas el misterio de la Trinidad»." },
          { type: "image", id: "rublev" },
          { type: "p", text: "Los artistas también lo intentaron. En Rusia, Andréi Rubliov pintó a los tres ángeles que visitaron a Abraham, sentados a una mesa en círculo, iguales y distintos a la vez. En Occidente se hizo más común representar al Padre como un anciano, al Hijo crucificado y al Espíritu como una paloma." },
          { type: "fact", label: "Cuidado con las comparaciones", text: "Es muy habitual explicar la Trinidad con el agua, que puede ser hielo, líquido o vapor. Pero esa comparación coincide con una herejía antigua, el modalismo: la idea de que Dios es uno solo que va cambiando de forma. Para los cristianos, Padre, Hijo y Espíritu no son tres fases de Dios: son tres personas a la vez." },
        ],
      },
    ],
    relatedPills: ["nicea-y-el-credo", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s5e5-palabra", "¿Aparece la palabra «Trinidad» en la Biblia?", ["Sí, en el Génesis", "No, se empezó a usar a finales del siglo II", "Sí, en el Apocalipsis", "Solo en el evangelio de Juan"], 1, "Teófilo de Antioquía la usó en griego y Tertuliano la acuñó en latín."),
      question("s5e5-constantinopla", "¿Qué añadió el Concilio de Constantinopla (381) al Credo?", ["La frase sobre la Virgen", "Lo que se cree sobre el Espíritu Santo", "La lista de libros de la Biblia", "Los siete sacramentos"], 1, "«Señor y dador de vida»."),
      question("s5e5-agua", "¿Por qué no es buena la comparación del agua (hielo, líquido, vapor)?", ["Porque es demasiado difícil", "Porque coincide con el modalismo: un solo Dios que cambia de forma", "Porque el agua no aparece en la Biblia", "Porque es una comparación protestante"], 1, "Para los cristianos, las tres personas existen a la vez."),
    ],
    sources: [
      { text: "Catecismo de la Iglesia Católica, 232-267" },
      { text: "Tertuliano, Contra Práxeas; Agustín, Sobre la Trinidad" },
      { text: "Luis F. Ladaria, El Dios vivo y verdadero. El misterio de la Trinidad, Secretariado Trinitario, 1998" },
    ],
    next: "En el próximo episodio: si Jesús es Dios, ¿cómo puede ser también un hombre que come, llora y muere? El gran debate de los siglos IV y V.",
  },
});
