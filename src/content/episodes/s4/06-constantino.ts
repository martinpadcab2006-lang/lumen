import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("treveris", "roma", "milan", "constantinopla", "jerusalen", "nicea");

export const constantino = makeEpisode({
  slug: "constantino",
  title: "Constantino y el Edicto de Milán",
  period: "306 – 337",
  cover: "Giulio Romano - The Battle of the Milvian Bridge.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "ascenso", year: "306", place: "treveris" },
    { id: "puente", year: "312", place: "roma" },
    { id: "milan", year: "313", place: "milan" },
    { id: "iglesia", year: "313 – 337", place: "jerusalen" },
    { id: "constantinopla", year: "330 – 337", place: "constantinopla" },
  ],
  library: { ...library, places },
  version: {
    title: "Constantino y el Edicto de Milán",
    inAMinute: [
      "Constantino llegó al poder en una época de guerras entre varios emperadores.",
      "Antes de la batalla del puente Milvio (312), según la tradición, vio una señal de la cruz.",
      "En el 313, con el acuerdo de Milán, el cristianismo pasó a ser legal.",
      "Constantino favoreció a la Iglesia: construyó basílicas, dio privilegios al clero y convocó el Concilio de Nicea.",
      "Fundó Constantinopla y se bautizó poco antes de morir, en el 337.",
    ],
    intro:
      "En el año 303, la Iglesia sufría la peor persecución de su historia. Diez años después, era legal, tenía de su parte al hombre más poderoso del mundo y empezaba a construir basílicas enormes. Este cambio de guion tiene un nombre: Constantino.",
    sections: [
      {
        stop: "ascenso",
        heading: "Un imperio con cuatro emperadores",
        blocks: [
          { type: "p", text: "Diocleciano había dividido el poder entre cuatro gobernantes. Cuando se retiró, el sistema saltó por los aires. En el año 306, en Britania, las tropas proclamaron emperador a Constantino, hijo de uno de ellos. Empezaron casi veinte años de guerras civiles." },
          { type: "character", id: "constantino" },
        ],
      },
      {
        stop: "puente",
        heading: "«Con este signo vencerás»",
        blocks: [
          { type: "p", text: "En el año 312, Constantino marchó sobre Roma contra su rival Majencio. Antes de la batalla, junto al puente Milvio, sobre el Tíber, ocurrió algo que cambiaría la historia. Lo cuentan dos autores de la época, y no de la misma manera." },
          { type: "p", text: "Lactancio dice que Constantino soñó que debía poner en los escudos de sus soldados un signo de Cristo: las letras griegas X y P entrelazadas, el crismón. Eusebio de Cesarea, que lo oyó años después del propio emperador, cuenta que vio en el cielo una cruz de luz con las palabras «Con este signo vencerás»." },
          { type: "image", id: "puenteMilvio" },
          { type: "p", text: "Constantino ganó. Majencio se ahogó en el Tíber. Y el nuevo señor de Occidente atribuyó su victoria al Dios de los cristianos. Los historiadores discuten hasta qué punto fue una conversión sincera o una decisión política. Probablemente, las dos cosas." },
        ],
      },
      {
        stop: "milan",
        heading: "El Edicto de Milán",
        blocks: [
          { type: "p", text: "En el año 313, Constantino se reunió en Milán con Licinio, que gobernaba Oriente. Acordaron dar libertad de culto a todos, «tanto a los cristianos como a cualquier otro», y devolver a la Iglesia los edificios y bienes confiscados." },
          { type: "image", id: "arcoConstantino" },
          { type: "p", text: "Aunque se le llama «Edicto de Milán», en realidad fue un acuerdo que se publicó en forma de cartas a los gobernadores. Lo importante es lo que significó: después de dos siglos y medio, ser cristiano dejaba de ser un delito." },
          { type: "fact", label: "No fue religión oficial", text: "Un error muy común: Constantino no hizo del cristianismo la religión oficial del Imperio. Lo legalizó y lo favoreció. La religión oficial llegaría casi setenta años después, con Teodosio." },
        ],
      },
      {
        stop: "iglesia",
        heading: "El emperador y la Iglesia",
        blocks: [
          { type: "p", text: "Constantino colmó de favores a la Iglesia. Regaló al obispo de Roma el palacio de Letrán y construyó grandes basílicas: San Juan de Letrán, San Pedro en el Vaticano, el Santo Sepulcro en Jerusalén y la Natividad en Belén. Su madre, Helena, viajó a Tierra Santa; la tradición dice que encontró allí la cruz de Cristo." },
          { type: "p", text: "Dio privilegios al clero, permitió a los obispos actuar como jueces y en el año 321 declaró el domingo, «el venerable día del Sol», día de descanso. Y cuando los cristianos se dividieron por una gran disputa teológica, convocó él mismo un concilio en Nicea. Lo vemos en el próximo episodio." },
          { type: "fact", label: "Una relación peligrosa", text: "La Iglesia ganó libertad, dinero y poder, pero también empezó a depender de los emperadores, que se sentían con derecho a intervenir en sus asuntos. Esa relación entre Iglesia y poder será uno de los grandes temas de los próximos siglos." },
        ],
      },
      {
        stop: "constantinopla",
        heading: "Una nueva Roma",
        blocks: [
          { type: "p", text: "En el año 324 Constantino derrotó a Licinio y quedó como único emperador. Decidió construir una nueva capital en Oriente, sobre la antigua ciudad griega de Bizancio, junto al Bósforo. La inauguró en el año 330 y le dio su nombre: Constantinopla, la actual Estambul." },
          { type: "p", text: "Constantino se bautizó en su lecho de muerte, en el año 337. No era raro entonces: muchos esperaban al final de su vida para bautizarse y morir limpios de pecados. Las iglesias ortodoxas lo veneran como santo, «igual a los apóstoles»." },
        ],
      },
    ],
    relatedPills: ["nicea-y-el-credo", "por-que-descansamos-el-domingo", "el-pez-simbolo-cristiano"],
    quiz: [
      question("s4e6-puente", "¿En qué batalla, según la tradición, vio Constantino el signo de la cruz?", ["En Actium", "En el puente Milvio", "En Adrianópolis", "En Lepanto"], 1, "En el año 312, a las puertas de Roma, contra Majencio."),
      question("s4e6-milan", "¿Qué hizo el Edicto de Milán (313)?", ["Hacer el cristianismo religión oficial", "Dar libertad de culto y legalizar el cristianismo", "Prohibir el paganismo", "Elegir un papa"], 1, "La religión oficial llegó con Teodosio, en el 380."),
      question("s4e6-capital", "¿Qué ciudad fundó Constantino como nueva capital?", ["Milán", "Rávena", "Constantinopla", "Alejandría"], 2, "Sobre la antigua Bizancio. Hoy es Estambul."),
    ],
    sources: [
      { text: "Lactancio, Sobre la muerte de los perseguidores 44 y 48; Eusebio de Cesarea, Vida de Constantino I, 28-31" },
      { text: "Código Teodosiano II, 8, 1 (ley del domingo, 321)" },
      { text: "Paul Veyne, El sueño de Constantino, Paidós, 2008" },
    ],
    next: "En el próximo episodio: ¿es Jesús Dios? Un presbítero de Alejandría dice que no del todo, y el emperador reúne a los obispos en Nicea para decidirlo.",
  },
});
