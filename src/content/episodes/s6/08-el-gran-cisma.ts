import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "constantinopla", "florencia", "jerusalen", "nicea");

export const elGranCisma = makeEpisode({
  slug: "el-gran-cisma",
  title: "El Gran Cisma de 1054",
  period: "Siglos IX – XXI",
  cover: "Hagia Sophia Mars 2013.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "distancia", year: "Siglos IV – XI", place: "roma" },
    { id: "1054", year: "1054", place: "constantinopla" },
    { id: "1204", year: "1204", place: "constantinopla" },
    { id: "florencia", year: "1439", place: "florencia" },
    { id: "abrazo", year: "1964 – 1965", place: "jerusalen" },
    { id: "hoy", year: "2025", place: "nicea" },
  ],
  library: { ...library, places },
  version: {
    title: "El Gran Cisma de 1054",
    inAMinute: [
      "Durante siglos, las Iglesias de Roma y de Constantinopla se fueron alejando: lengua, costumbres, teología y poder.",
      "En 1054, un legado del papa y el patriarca de Constantinopla se excomulgaron mutuamente.",
      "En aquel momento no parecía definitivo. La herida se hizo profunda en 1204, cuando los cruzados saquearon Constantinopla.",
      "Así se separaron la Iglesia católica y las Iglesias ortodoxas.",
      "En 1965, el papa Pablo VI y el patriarca Atenágoras levantaron las excomuniones. El diálogo continúa.",
    ],
    intro:
      "Hoy hablamos de católicos y ortodoxos como de dos Iglesias distintas. Pero durante mil años fueron una sola. La separación no fue un portazo de un día, sino un alejamiento lento que tuvo una fecha simbólica: el 16 de julio de 1054.",
    sections: [
      {
        stop: "distancia",
        heading: "Dos mundos que se alejan",
        blocks: [
          { type: "p", text: "Desde la división del Imperio, Oriente y Occidente fueron siguiendo caminos distintos. En Occidente se hablaba latín; en Oriente, griego, y cada vez menos gente entendía la lengua del otro." },
          {
            type: "words",
            items: [
              { term: "El papa", meaning: "Roma creía que el obispo de Roma, sucesor de Pedro, tenía autoridad sobre toda la Iglesia. Oriente lo veía como el primero en honor entre los grandes patriarcas, pero no como su jefe." },
              { term: "El Filioque", meaning: "Occidente añadió al Credo que el Espíritu Santo procede «del Padre y del Hijo». Oriente no aceptaba que se cambiara el Credo sin un concilio de todos." },
              { term: "Las costumbres", meaning: "Los latinos usaban pan sin levadura en la misa; los griegos, pan con levadura. En Occidente los sacerdotes no podían casarse; en Oriente, sí. Detalles así se convirtieron en motivos de reproche." },
            ],
          },
          { type: "p", text: "Ya en el siglo IX hubo una ruptura temporal entre el papa Nicolás I y el patriarca Focio. Se arregló, pero la desconfianza quedó." },
        ],
      },
      {
        stop: "1054",
        heading: "Una bula sobre el altar",
        blocks: [
          { type: "p", text: "En 1054, el papa León IX envió a Constantinopla una delegación dirigida por el cardenal Humberto de Silva Cándida, un hombre de carácter duro. El patriarca, Miguel Cerulario, tampoco era conciliador: había cerrado las iglesias latinas de la ciudad." },
          { type: "p", text: "Las conversaciones fracasaron. El 16 de julio, durante la liturgia en Santa Sofía, Humberto dejó sobre el altar una bula de excomunión contra el patriarca y se marchó. Días después, Cerulario excomulgó a los legados." },
          { type: "image", id: "santaSofiaExterior" },
          { type: "fact", label: "Un detalle técnico", text: "El papa León IX había muerto en abril, tres meses antes, así que muchos expertos dudan de que la bula tuviera validez. Además, las excomuniones eran contra personas, no contra Iglesias enteras. En su momento, casi nadie pensó que fuera una ruptura para siempre." },
        ],
      },
      {
        stop: "1204",
        heading: "La herida de 1204",
        blocks: [
          { type: "p", text: "Lo que convirtió el alejamiento en ruptura fue la violencia. En 1204, los caballeros de la cuarta cruzada, que iban a Tierra Santa, se desviaron hacia Constantinopla por razones políticas y económicas, y la saquearon durante tres días. Robaron reliquias, destrozaron Santa Sofía y mataron a miles de cristianos." },
          { type: "image", id: "cruzadosConstantinopla" },
          { type: "p", text: "Después, los latinos impusieron un emperador y un patriarca propios durante más de medio siglo. Para muchos ortodoxos, aquello fue imperdonable. En 2001, el papa Juan Pablo II pidió perdón por el saqueo de 1204." },
        ],
      },
      {
        stop: "florencia",
        heading: "Un intento fallido",
        blocks: [
          { type: "p", text: "En el siglo XV, los turcos rodeaban Constantinopla, y el emperador bizantino buscaba ayuda de Occidente. En 1439, en el Concilio de Florencia, griegos y latinos firmaron un acuerdo de unión." },
          { type: "p", text: "Pero en Constantinopla el pueblo y muchos monjes lo rechazaron. Un historiador bizantino atribuye a un alto funcionario una frase famosa: «Prefiero ver en la ciudad el turbante de los turcos antes que la mitra de los latinos». En 1453, la ciudad cayó, y la unión quedó en nada." },
        ],
      },
      {
        stop: "abrazo",
        heading: "El abrazo de Jerusalén",
        blocks: [
          { type: "p", text: "Durante siglos, católicos y ortodoxos se ignoraron o se trataron como herejes. Todo empezó a cambiar en el siglo XX. El 5 de enero de 1964, el papa Pablo VI y el patriarca de Constantinopla, Atenágoras, se encontraron en Jerusalén y se abrazaron. Era la primera vez en más de quinientos años que un papa y un patriarca de Constantinopla se reunían." },
          { type: "p", text: "El 7 de diciembre de 1965, a la vez en Roma y en Estambul, los dos anularon las excomuniones de 1054 y expresaron su deseo de llegar a la plena comunión." },
        ],
      },
      {
        stop: "hoy",
        heading: "Hoy",
        blocks: [
          { type: "p", text: "Católicos y ortodoxos siguen separados. La Iglesia católica reconoce como válidos los sacramentos ortodoxos, y las dos mantienen desde 1980 un diálogo teológico oficial. En noviembre de 2025, el papa León XIV y el patriarca Bartolomé rezaron juntos en Nicea, 1.700 años después del primer concilio, cuando todavía formaban una sola Iglesia." },
          { type: "p", text: "Hoy hay unos 260 millones de cristianos ortodoxos en el mundo, sobre todo en Rusia, Ucrania, Rumanía, Grecia, Serbia, Bulgaria, Georgia y Etiopía, en este último caso de las Iglesias ortodoxas orientales." },
        ],
      },
    ],
    relatedPills: ["catolicos-ortodoxos-protestantes", "iconos-ortodoxos", "nicea-y-el-credo"],
    quiz: [
      question("s6e8-1054", "¿Qué pasó en Santa Sofía el 16 de julio de 1054?", ["Se coronó a un emperador", "Un legado del papa dejó sobre el altar una bula de excomunión contra el patriarca", "Los turcos conquistaron la ciudad", "Se celebró un concilio de unión"], 1, "Días después, el patriarca excomulgó a los legados."),
      question("s6e8-1204", "¿Qué hicieron los cruzados en 1204?", ["Conquistar Jerusalén", "Saquear Constantinopla, una ciudad cristiana", "Defender Bizancio de los turcos", "Volver a Europa"], 1, "Fue lo que convirtió el alejamiento en ruptura."),
      question("s6e8-1965", "¿Qué hicieron Pablo VI y Atenágoras en 1965?", ["Unir las dos Iglesias", "Anular las excomuniones de 1054", "Convocar un concilio", "Firmar la paz con los turcos"], 1, "Un año antes se habían abrazado en Jerusalén."),
    ],
    sources: [
      { text: "Declaración común de Pablo VI y Atenágoras I (7 de diciembre de 1965)" },
      { text: "Henry Chadwick, East and West: The Making of a Rift in the Church, Oxford University Press, 2003" },
      { text: "Juan Pablo II, discurso en Atenas (4 de mayo de 2001)" },
    ],
    next: "En el próximo episodio: «¡Dios lo quiere!». Dos siglos de cruzadas: causas, desarrollo y consecuencias.",
  },
});
