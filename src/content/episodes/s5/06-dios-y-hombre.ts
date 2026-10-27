import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("jerusalen", "antioquia", "alejandria", "constantinopla", "efeso", "calcedonia");

export const diosYHombre = makeEpisode({
  slug: "dios-y-hombre",
  title: "Jesucristo, Dios y hombre",
  period: "Siglos I – V",
  cover: "Christ Pantocrator Deesis mosaic Hagia Sophia.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "pregunta", year: "c. 30", place: "jerusalen" },
    { id: "escuelas", year: "Siglos IV – V", place: "antioquia" },
    { id: "nestorio", year: "428 – 431", place: "constantinopla" },
    { id: "efeso", year: "431", place: "efeso" },
    { id: "calcedonia", year: "451", place: "calcedonia" },
    { id: "hoy", year: "451 – hoy", place: "alejandria" },
  ],
  library: { ...library, places },
  version: {
    title: "Jesucristo, Dios y hombre",
    inAMinute: [
      "Una vez aclarado que Jesús es Dios, quedaba otra pregunta: ¿cómo es a la vez un hombre de verdad?",
      "La escuela de Antioquía subrayaba su humanidad; la de Alejandría, su unidad con Dios.",
      "El Concilio de Éfeso (431) defendió llamar a María «Madre de Dios».",
      "El Concilio de Calcedonia (451) definió que Cristo es una sola persona con dos naturalezas, divina y humana.",
      "Algunas iglesias de Oriente no aceptaron Calcedonia; hoy se reconoce que gran parte de la diferencia era de palabras.",
    ],
    intro:
      "Jesús tuvo hambre, se cansó, lloró por su amigo Lázaro y murió en una cruz. Y, sin embargo, los cristianos dicen que es Dios. ¿Era un hombre en el que vivía Dios? ¿Un Dios disfrazado de hombre? ¿Una mezcla de los dos? Durante el siglo V, esta pregunta llenó concilios, sacó a la gente a la calle y enfrentó a las grandes ciudades del Imperio.",
    sections: [
      {
        stop: "pregunta",
        heading: "«¿Quién decís que soy yo?»",
        blocks: [
          { type: "p", text: "Según los evangelios, el propio Jesús preguntó a sus discípulos: «Y vosotros, ¿quién decís que soy yo?». Pedro respondió: «Tú eres el Mesías, el Hijo de Dios vivo». Esa pregunta no se ha dejado de hacer nunca." },
          { type: "p", text: "Ya en el siglo I había quienes pensaban que Jesús solo era un hombre muy santo, y otros que creían que su cuerpo era solo una apariencia. Los cristianos rechazaron las dos ideas: Jesús es verdadero Dios y verdadero hombre. El problema era explicar cómo." },
          { type: "image", id: "deesis" },
        ],
      },
      {
        stop: "escuelas",
        heading: "Antioquía y Alejandría",
        blocks: [
          { type: "p", text: "En el siglo IV había dos grandes escuelas de teología, con estilos distintos. En Antioquía insistían en que Jesús era plenamente humano, con alma, inteligencia y voluntad humanas, y leían la Biblia de forma más literal. En Alejandría insistían en que en Jesús es el mismo Dios quien nace, sufre y muere, y leían la Biblia de forma más simbólica." },
          { type: "p", text: "Un obispo llamado Apolinar propuso que en Jesús la mente humana había sido sustituida por Dios. Gregorio Nacianceno respondió con una frase que se volvió clave: «Lo que no ha sido asumido no ha sido sanado». Si Jesús no tuvo una mente humana, no salvó la mente humana." },
        ],
      },
      {
        stop: "nestorio",
        heading: "La disputa por un título",
        blocks: [
          { type: "p", text: "En el año 428, Nestorio, un monje de Antioquía, fue nombrado obispo de Constantinopla. Al poco tiempo dijo que no se debía llamar a María Theotókos, «Madre de Dios», un título muy querido por el pueblo. Proponía llamarla Christotókos, «Madre de Cristo»: María era madre del hombre Jesús, no de Dios." },
          { type: "p", text: "Cirilo, obispo de Alejandría, reaccionó con dureza. Para él, si María no era Madre de Dios, era porque Nestorio separaba a Jesús en dos: un hombre por un lado y Dios por otro. La disputa mezclaba teología, rivalidad entre ciudades y política." },
        ],
      },
      {
        stop: "efeso",
        heading: "Madre de Dios",
        blocks: [
          { type: "p", text: "En el año 431, el emperador convocó un concilio en Éfeso. Fue muy tormentoso: Cirilo lo abrió antes de que llegaran los obispos de Antioquía, que luego celebraron su propia reunión. Al final, Nestorio fue depuesto y se confirmó el título de Theotókos." },
          { type: "image", id: "vladimir" },
          { type: "p", text: "Según cuenta el propio Cirilo en una carta, cuando se conoció la decisión, la gente de Éfeso, que esperaba en la calle, acompañó a los obispos con antorchas e incienso hasta sus casas." },
        ],
      },
      {
        stop: "calcedonia",
        heading: "La fórmula de Calcedonia",
        blocks: [
          { type: "p", text: "Pero el debate no terminó. Algunos, por oposición a Nestorio, se fueron al extremo contrario: un monje de Constantinopla, Eutiques, enseñaba que en Cristo la humanidad había quedado absorbida por la divinidad. En el año 451, más de quinientos obispos se reunieron en Calcedonia, frente a Constantinopla." },
          { type: "image", id: "calcedonia" },
          { type: "p", text: "Se leyó una carta del papa León Magno, y los obispos gritaron: «¡Pedro ha hablado por boca de León!». El concilio definió que Cristo es una sola persona en dos naturalezas, divina y humana, unidas «sin confusión, sin cambio, sin división, sin separación». Es la fórmula que aceptan hoy católicos, ortodoxos y la mayoría de los protestantes." },
        ],
      },
      {
        stop: "hoy",
        heading: "Las iglesias que dijeron no",
        blocks: [
          { type: "p", text: "En Egipto, Siria, Armenia y Etiopía, muchos cristianos vieron en Calcedonia una traición a Cirilo y no la aceptaron. De ahí nacieron iglesias que existen hoy: la copta, la etíope, la armenia, la siria ortodoxa… Se las llama ortodoxas orientales." },
          { type: "p", text: "Durante siglos, unos y otros se acusaron de herejía. Pero en las últimas décadas, los papas y los patriarcas de estas iglesias han firmado declaraciones conjuntas, como la de Pablo VI y el papa copto Shenouda III en 1973, que reconocen que creen lo mismo sobre Cristo aunque lo expresen con palabras distintas." },
        ],
      },
    ],
    relatedPills: ["que-significa-cristo", "iconos-ortodoxos"],
    quiz: [
      question("s5e6-theotokos", "¿Qué significa el título Theotókos, defendido en el Concilio de Éfeso?", ["Madre de Cristo", "Madre de Dios", "Virgen santa", "Reina del cielo"], 1, "Nestorio quería llamarla solo «Madre de Cristo»."),
      question("s5e6-calcedonia", "¿Qué definió el Concilio de Calcedonia (451)?", ["Que Jesús era solo un hombre", "Que Cristo es una persona con dos naturalezas, divina y humana", "Que Jesús no tuvo cuerpo", "La lista de libros de la Biblia"], 1, "«Sin confusión, sin cambio, sin división, sin separación»."),
      question("s5e6-gregorio", "«Lo que no ha sido asumido no ha sido sanado». ¿Qué quería decir Gregorio Nacianceno?", ["Que Jesús no necesitaba ser humano", "Que si Jesús no fue plenamente humano, no salvó al ser humano entero", "Que había que ir al médico", "Que Dios no puede sufrir"], 1, "Era su respuesta a Apolinar."),
    ],
    sources: [
      { text: "Concilio de Calcedonia, definición de fe (451); Gregorio Nacianceno, Carta 101; Cirilo de Alejandría, Carta 24" },
      { text: "Aloys Grillmeier, Cristo en la tradición cristiana, Sígueme, 1997" },
      { text: "Declaración común de Pablo VI y Shenouda III (10 de mayo de 1973)" },
    ],
    next: "En el próximo episodio: gnósticos, donatistas, pelagianos y un obispo de Ávila ejecutado. Los grandes debates y herejías de los primeros siglos.",
  },
});
