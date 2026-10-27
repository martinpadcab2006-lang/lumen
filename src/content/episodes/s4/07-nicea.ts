import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("alejandria", "nicea", "cordoba", "constantinopla", "efeso");

export const nicea = makeEpisode({
  slug: "nicea-y-los-concilios",
  title: "Nicea y los grandes concilios",
  period: "325 – 451",
  cover: "First Council of Nicea (icon).jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "arrio", year: "c. 318", place: "alejandria" },
    { id: "concilio", year: "325", place: "nicea" },
    { id: "osio", year: "325", place: "cordoba" },
    { id: "credo", year: "325 – 381", place: "constantinopla" },
    { id: "despues", year: "431 – 2025", place: "nicea" },
  ],
  library: { ...library, places },
  version: {
    title: "Nicea y los grandes concilios",
    inAMinute: [
      "Arrio, un presbítero de Alejandría, enseñaba que el Hijo de Dios era una criatura, no Dios como el Padre.",
      "Para resolver la disputa, Constantino reunió en Nicea, en el año 325, a unos 300 obispos: el primer concilio ecuménico.",
      "El concilio declaró que el Hijo es «de la misma sustancia» que el Padre, y redactó un Credo.",
      "Un obispo de Córdoba, Osio, fue uno de los protagonistas.",
      "Le siguieron otros grandes concilios: Constantinopla, Éfeso y Calcedonia.",
    ],
    intro:
      "En el siglo IV, en Alejandría se discutía de teología en la calle, en la panadería y en el baño público. La pregunta era enorme: ¿es Jesús Dios, igual que el Padre, o algo menos? La respuesta se decidió en una pequeña ciudad de la actual Turquía y todavía se reza cada domingo.",
    sections: [
      {
        stop: "arrio",
        heading: "La pregunta de Arrio",
        blocks: [
          { type: "p", text: "Arrio era un presbítero de Alejandría, culto y buen predicador. Hacia el año 318 empezó a enseñar algo que tenía mucha lógica para la filosofía de su tiempo: si el Hijo ha sido engendrado por el Padre, entonces tuvo un principio. Hubo un tiempo en que no existía. Es la primera y más alta de las criaturas, pero no es Dios como el Padre." },
          { type: "p", text: "Su obispo, Alejandro, lo condenó. Pero Arrio tenía muchos apoyos, y la discusión se extendió por todo el Oriente. Hasta se componían canciones populares con sus ideas. Para Constantino, que quería un Imperio unido, una Iglesia dividida era un problema político." },
        ],
      },
      {
        stop: "concilio",
        heading: "Nicea, año 325",
        blocks: [
          { type: "p", text: "Constantino convocó a todos los obispos del Imperio en Nicea, cerca de su residencia. Pagó los viajes con el correo imperial. Llegaron unos 300, casi todos de Oriente; la tradición fijó la cifra simbólica de 318. Algunos llevaban todavía en el cuerpo las marcas de las persecuciones." },
          { type: "image", id: "nicea" },
          { type: "p", text: "Fue el primer concilio «ecuménico», es decir, de toda la tierra habitada. Tras semanas de debate, la gran mayoría condenó a Arrio. Para dejar claro que el Hijo es Dios igual que el Padre, el concilio usó una palabra griega que no está en la Biblia: homooúsios, «de la misma sustancia»." },
          { type: "fact", label: "También se habló de la Pascua", text: "El concilio fijó también un criterio común para calcular la fecha de la Pascua, que debía celebrarse en domingo y en todas partes el mismo día." },
        ],
      },
      {
        stop: "osio",
        heading: "Un cordobés en Nicea",
        blocks: [
          { type: "p", text: "Uno de los personajes clave del concilio fue un hispano: Osio, obispo de Córdoba. Era consejero de Constantino en asuntos de la Iglesia y probablemente presidió algunas sesiones. Muchos historiadores creen que fue él quien propuso la palabra homooúsios." },
          { type: "p", text: "Osio vivió más de cien años, según la tradición, y en su vejez sufrió la presión de un emperador posterior, partidario de Arrio, que lo obligó a firmar una fórmula ambigua. Aun así, es una de las grandes figuras de la Iglesia en la Hispania romana." },
        ],
      },
      {
        stop: "credo",
        heading: "El Credo",
        blocks: [
          { type: "p", text: "El concilio redactó una declaración de fe. En el año 381, otro concilio, el de Constantinopla, la completó, sobre todo en lo que se refiere al Espíritu Santo. El resultado es el Credo niceno-constantinopolitano, que rezan en la misa católicos, ortodoxos, anglicanos, luteranos y muchos otros." },
          { type: "quote", text: "Creo en un solo Señor, Jesucristo, Hijo único de Dios, nacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza que el Padre.", source: "Credo niceno-constantinopolitano (versión litúrgica)" },
          { type: "fact", label: "¿Se acabó la discusión?", text: "No. Durante más de cincuenta años, el arrianismo siguió vivo, apoyado por varios emperadores. Y se extendió entre los pueblos germánicos: los visigodos que llegaron a Hispania eran arrianos." },
        ],
      },
      {
        stop: "despues",
        heading: "Los grandes concilios",
        blocks: [
          { type: "p", text: "Después de Nicea vinieron otros concilios que fijaron la fe cristiana: Constantinopla (381), sobre el Espíritu Santo; Éfeso (431), que proclamó a María «Madre de Dios»; y Calcedonia (451), que definió que Cristo es verdadero Dios y verdadero hombre. Algunas iglesias orientales no aceptaron Calcedonia y siguieron su propio camino." },
          { type: "p", text: "En noviembre de 2025, al cumplirse 1.700 años del concilio, el papa León XIV y el patriarca ecuménico Bartolomé de Constantinopla rezaron juntos en İznik, la antigua Nicea, como gesto de unidad entre católicos y ortodoxos." },
          { type: "p", text: "Lo que se discutió en estos concilios, la Trinidad y la doble naturaleza de Cristo, lo explicamos con calma en la temporada 5." },
        ],
      },
    ],
    relatedPills: ["nicea-y-el-credo", "por-que-semana-santa-cambia-de-fecha", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s4e7-arrio", "¿Qué enseñaba Arrio?", ["Que Jesús no existió", "Que el Hijo era una criatura, no Dios como el Padre", "Que había tres dioses", "Que no había que bautizarse"], 1, "Fue condenado en Nicea en el año 325."),
      question("s4e7-osio", "¿Qué obispo hispano tuvo un papel clave en Nicea?", ["Isidoro de Sevilla", "Osio de Córdoba", "Fructuoso de Tarragona", "Dámaso"], 1, "Consejero de Constantino, quizá propuso la palabra homooúsios."),
      question("s4e7-efeso", "¿Qué proclamó el Concilio de Éfeso (431)?", ["La infalibilidad del papa", "Que María es Madre de Dios", "La fecha de la Navidad", "El canon de la Biblia"], 1, "En griego, Theotókos."),
    ],
    sources: [
      { text: "Eusebio de Cesarea, Vida de Constantino III; Atanasio, Sobre los decretos de Nicea" },
      { text: "Manlio Simonetti, La crisi ariana nel IV secolo, Augustinianum, 1975" },
      { text: "Santa Sede, viaje apostólico de León XIV a Turquía y Líbano (noviembre-diciembre de 2025)", url: "https://www.vatican.va/content/leo-xiv/en/travels/2025/documents/turchia-libano-2025.html" },
    ],
    next: "En el próximo episodio: de religión permitida a religión obligatoria. Teodosio, un emperador nacido en Hispania, hace del cristianismo la religión oficial del Imperio.",
  },
});
