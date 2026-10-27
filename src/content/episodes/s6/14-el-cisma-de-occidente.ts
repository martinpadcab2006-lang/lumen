import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "avinon", "siena", "pisa", "constanza", "peniscola");

export const elCismaDeOccidente = makeEpisode({
  slug: "el-cisma-de-occidente",
  title: "Aviñón y el Cisma de Occidente",
  period: "1303 – 1423",
  cover: "Palais des Papes,Avignon.JPG",
  mapRegion: "europa",
  places,
  stops: [
    { id: "anagni", year: "1303", place: "roma" },
    { id: "avinon", year: "1309 – 1377", place: "avinon" },
    { id: "catalina", year: "1376 – 1377", place: "siena" },
    { id: "cisma", year: "1378 – 1409", place: "pisa" },
    { id: "constanza", year: "1414 – 1418", place: "constanza" },
    { id: "luna", year: "1415 – 1423", place: "peniscola" },
  ],
  library: { ...library, places },
  version: {
    title: "Aviñón y el Cisma de Occidente",
    inAMinute: [
      "Tras un choque con el rey de Francia, los papas se instalaron en Aviñón, donde vivieron casi setenta años.",
      "Catalina de Siena ayudó a convencer al papa de que volviera a Roma en 1377.",
      "Al año siguiente, una elección polémica dio lugar a dos papas, uno en Roma y otro en Aviñón. Luego hubo tres.",
      "El Concilio de Constanza resolvió el cisma en 1417 con la elección de Martín V.",
      "El papa de Aviñón, el aragonés Pedro de Luna, nunca aceptó renunciar y murió en Peñíscola en 1423.",
    ],
    intro:
      "Cerramos la temporada con una de las crisis más extrañas de la historia del papado. Durante casi setenta años, los papas no vivieron en Roma. Y después, durante casi cuarenta, la cristiandad occidental no supo con seguridad quién era el verdadero papa: había dos, y en algún momento tres, cada uno excomulgando a los otros.",
    sections: [
      {
        stop: "anagni",
        heading: "La bofetada de Anagni",
        blocks: [
          { type: "p", text: "A finales del siglo XIII, el papa Bonifacio VIII sostenía que el papa tenía autoridad sobre todos los reyes. El rey de Francia, Felipe IV el Hermoso, no estaba de acuerdo, y se enfrentaron por el dinero de la Iglesia francesa." },
          { type: "p", text: "En 1303, enviados del rey asaltaron la residencia del papa en Anagni, cerca de Roma, y lo retuvieron. Según la tradición, uno de ellos le dio una bofetada. Bonifacio, anciano, murió un mes después. Fue el final de las pretensiones del papa de gobernar sobre los reyes." },
        ],
      },
      {
        stop: "avinon",
        heading: "Los papas en Aviñón",
        blocks: [
          { type: "p", text: "En 1305 fue elegido un papa francés, Clemente V, que nunca llegó a ir a Roma: en 1309 se instaló en Aviñón, una ciudad junto al Ródano. Allí vivieron siete papas, todos franceses, durante casi setenta años." },
          { type: "image", id: "avinon" },
          { type: "p", text: "Aviñón tuvo cosas buenas: los papas organizaron una administración muy eficaz y construyeron un palacio impresionante. Pero muchos lo vieron como un escándalo: el obispo de Roma vivía lejos de Roma y parecía depender del rey de Francia. El poeta Petrarca llamó a Aviñón «la Babilonia de Occidente»." },
        ],
      },
      {
        stop: "catalina",
        heading: "Catalina de Siena",
        blocks: [
          { type: "character", id: "catalina" },
          { type: "p", text: "Catalina, una joven de Siena dedicada a la oración y a cuidar enfermos, escribió cartas durísimas al papa Gregorio XI para que volviera a Roma. Llegó a viajar a Aviñón en 1376 para pedírselo en persona." },
          { type: "image", id: "catalinaAvinon" },
          { type: "p", text: "En enero de 1377, Gregorio XI regresó a Roma. Parecía el final de la crisis. No lo era." },
        ],
      },
      {
        stop: "cisma",
        heading: "Dos papas… y luego tres",
        blocks: [
          { type: "p", text: "Gregorio XI murió en 1378. Los cardenales se reunieron en Roma mientras una multitud rodeaba el lugar gritando que querían un papa romano, o al menos italiano. Eligieron a un italiano, Urbano VI. Pero el nuevo papa resultó ser autoritario y violento, y meses después la mayoría de los cardenales declararon que la elección no era válida porque la habían hecho bajo amenaza. Eligieron a otro, Clemente VII, que se instaló en Aviñón." },
          { type: "p", text: "Europa se dividió. Francia, Castilla, Aragón, Navarra o Escocia obedecían al papa de Aviñón; Inglaterra, el Imperio y gran parte de Italia, al de Roma. Había santos en los dos bandos: Catalina de Siena apoyaba a Roma; el valenciano Vicente Ferrer, a Aviñón." },
          { type: "p", text: "En 1409, un concilio reunido en Pisa intentó arreglarlo deponiendo a los dos papas y eligiendo a un tercero. Como ninguno de los otros dos aceptó, el resultado fue que hubo tres papas a la vez." },
        ],
      },
      {
        stop: "constanza",
        heading: "El Concilio de Constanza",
        blocks: [
          { type: "p", text: "La solución llegó en un gran concilio celebrado en Constanza, en el sur de Alemania, entre 1414 y 1418, impulsado por el emperador Segismundo. El papa de Pisa fue depuesto, el de Roma renunció y el de Aviñón fue declarado depuesto. El 11 de noviembre de 1417 se eligió a Martín V, aceptado por casi todos." },
          { type: "fact", label: "La hoguera de Jan Hus", text: "El mismo concilio juzgó al reformador checo Jan Hus, que criticaba la riqueza del clero. Había acudido con un salvoconducto del emperador que garantizaba su seguridad, pero fue condenado como hereje y quemado en 1415. Un siglo después, Lutero se sentiría muy cerca de él." },
        ],
      },
      {
        stop: "luna",
        heading: "El papa Luna",
        blocks: [
          { type: "character", id: "papaLuna" },
          { type: "p", text: "El papa de Aviñón era entonces un aragonés, Pedro de Luna, que se hacía llamar Benedicto XIII. Nunca aceptó la decisión de Constanza: sostenía que era el único cardenal que quedaba de los nombrados antes del cisma y, por tanto, el único papa legítimo." },
          { type: "image", id: "peniscola" },
          { type: "p", text: "Abandonado por casi todos, incluido el rey de Aragón, se refugió en el castillo de Peñíscola con un puñado de fieles, y allí murió en 1423, con más de noventa años. Puedes ver su historia, y la de otros antipapas, en la sección de los papas." },
          { type: "p", text: "Así termina la sexta temporada. La crisis del papado, la peste negra y las críticas al clero prepararon el terreno para lo que vendría: en la próxima temporada, el Renacimiento, Lutero y la división de la cristiandad occidental." },
        ],
      },
    ],
    quiz: [
      question("s6e14-avinon", "¿En qué ciudad vivieron los papas entre 1309 y 1377?", ["París", "Aviñón", "Constanza", "Peñíscola"], 1, "Siete papas, todos franceses."),
      question("s6e14-catalina", "¿Quién ayudó a convencer al papa de que volviera a Roma?", ["Juana de Arco", "Catalina de Siena", "Isabel la Católica", "Clara de Asís"], 1, "Le escribió cartas y viajó a Aviñón en 1376."),
      question("s6e14-luna", "¿Dónde murió el papa Luna, Benedicto XIII?", ["En Roma", "En Peñíscola", "En Aviñón", "En Zaragoza"], 1, "Nunca aceptó renunciar."),
    ],
    sources: [
      { text: "Actas del Concilio de Constanza; Catalina de Siena, Cartas" },
      { text: "Walter Ullmann, The Origins of the Great Schism, Burns & Oates, 1948" },
    ],
    next: "Temporada 7, episodio 1: el Renacimiento y el cristianismo. Papas mecenas, Miguel Ángel y una nueva mirada.",
  },
});
