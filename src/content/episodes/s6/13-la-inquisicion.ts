import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("albi", "tolosa", "sevilla", "logrono", "roma");

export const laInquisicion = makeEpisode({
  slug: "la-inquisicion",
  title: "La Inquisición",
  period: "1184 – 1834",
  cover: "Pedro Berruguete Saint Dominic Presiding over an Auto-da-fe 1495.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "cataros", year: "1184 – 1231", place: "albi" },
    { id: "como", year: "Siglo XIII", place: "tolosa" },
    { id: "espanola", year: "1478 – 1834", place: "sevilla" },
    { id: "brujas", year: "1610 – 1614", place: "logrono" },
    { id: "roma", year: "1542 – 2000", place: "roma" },
  ],
  library: { ...library, places },
  version: {
    title: "La Inquisición",
    inAMinute: [
      "La Inquisición fue un tribunal de la Iglesia para perseguir la herejía. Nació en el siglo XIII contra los cátaros.",
      "Usaba procedimientos que hoy nos parecen injustos: denuncias secretas y tortura. Los condenados a muerte se entregaban a las autoridades civiles.",
      "La Inquisición española, creada en 1478, dependía de los reyes. Persiguió sobre todo a los judeoconversos.",
      "Fue menos sangrienta de lo que dice la leyenda, pero causó miles de muertes y mucho miedo. Se abolió en 1834.",
      "En el año 2000, el papa Juan Pablo II pidió perdón por la violencia usada en nombre de la fe.",
    ],
    intro:
      "Pocas palabras suenan tan siniestras como «Inquisición». Es uno de los episodios más oscuros de la historia de la Iglesia, y también uno de los más rodeados de mitos, tanto para exagerarlo como para disculparlo. Vamos a intentar contarlo con datos.",
    sections: [
      {
        stop: "cataros",
        heading: "Contra los cátaros",
        blocks: [
          { type: "p", text: "En el siglo XII, en el sur de Francia, se extendió el catarismo, una religión con ideas parecidas a las de los antiguos gnósticos: el mundo material era obra del mal, y rechazaba la Iglesia y sus sacramentos. Por la ciudad de Albi, se les llamó también albigenses." },
          { type: "p", text: "La predicación no los frenó, y en 1209 el papa Inocencio III convocó una cruzada contra ellos que fue brutal, con matanzas como la de Béziers. En 1184, el papa ya había pedido a los obispos que investigaran, inquirieran, la herejía en sus diócesis. Y en 1231, Gregorio IX nombró inquisidores especiales, sobre todo frailes dominicos y franciscanos." },
        ],
      },
      {
        stop: "como",
        heading: "Cómo funcionaba",
        blocks: [
          { type: "p", text: "Los inquisidores llegaban a una zona y daban un «tiempo de gracia»: quien confesaba voluntariamente recibía una penitencia leve. Después recibían denuncias. Los acusados no sabían quién los había denunciado, y desde 1252 el papa permitió el uso de la tortura para obtener confesiones, algo que ya hacían los tribunales civiles de la época." },
          { type: "p", text: "La mayoría de las condenas eran penitencias: oraciones, peregrinaciones, llevar una cruz cosida en la ropa, multas o cárcel. Pero a los que no se arrepentían o volvían a caer se les entregaba al «brazo secular», es decir, a las autoridades civiles, que los quemaban en la hoguera. La Iglesia no ejecutaba directamente, pero sabía perfectamente lo que iba a pasar." },
          { type: "fact", label: "Montségur", text: "En 1244, tras el asedio del castillo de Montségur, último refugio cátaro, unas doscientas personas que se negaron a renunciar a su fe fueron quemadas juntas." },
        ],
      },
      {
        stop: "espanola",
        heading: "La Inquisición española",
        blocks: [
          { type: "p", text: "La Inquisición española fue distinta: la creó en 1478 el papa Sixto IV a petición de los Reyes Católicos, pero dependía de la Corona, que nombraba al inquisidor general. Su primer objetivo fueron los conversos: judíos que se habían bautizado, muchas veces forzados por persecuciones como las de 1391, y a los que se acusaba de seguir practicando el judaísmo en secreto." },
          { type: "image", id: "autoDeFe" },
          { type: "p", text: "El primer auto de fe se celebró en Sevilla en 1481. Los primeros cincuenta años fueron los más duros. Después persiguió también a moriscos, protestantes, místicos sospechosos, bígamos o blasfemos, y controló los libros que se podían leer." },
          {
            type: "numbers",
            title: "Algunas cifras (estimaciones de los historiadores)",
            items: [
              { value: "826", label: "de unos 44.000 procesos estudiados entre 1540 y 1700 terminaron con la ejecución del acusado (menos del 2 %)" },
              { value: "3.000-5.000", label: "personas ejecutadas en total entre 1478 y 1834, según distintas estimaciones; la mayoría, en los primeros cincuenta años" },
              { value: "1834", label: "año de su abolición definitiva" },
            ],
          },
          { type: "p", text: "Durante siglos, la propaganda de los enemigos de España, la llamada «leyenda negra», exageró enormemente las cifras. Pero las cifras reales no quitan lo esencial: miles de personas murieron y muchas más vivieron con miedo, sometidas a un tribunal secreto por lo que creían." },
        ],
      },
      {
        stop: "brujas",
        heading: "Las brujas de Zugarramurdi",
        blocks: [
          { type: "p", text: "Entre los siglos XVI y XVII, Europa vivió una auténtica caza de brujas: decenas de miles de personas, sobre todo mujeres, fueron ejecutadas, la mayoría por tribunales civiles en Alemania, Suiza, Escocia o Francia." },
          { type: "p", text: "En 1610, la Inquisición de Logroño celebró un gran auto de fe contra supuestas brujas del pueblo navarro de Zugarramurdi, y varias personas murieron en la hoguera. Pero uno de los inquisidores, Alonso de Salazar y Frías, investigó a fondo durante meses y concluyó que no había pruebas de ninguna brujería: todo eran fantasías, miedos y acusaciones. Desde entonces, la Inquisición española prácticamente dejó de condenar a muerte a supuestas brujas, mientras en otros lugares de Europa las hogueras seguían ardiendo." },
        ],
      },
      {
        stop: "roma",
        heading: "La Inquisición romana y el perdón",
        blocks: [
          { type: "p", text: "En 1542, ante el avance del protestantismo, el papa creó en Roma su propia Inquisición, que también vigilaba los libros a través del Índice de libros prohibidos. Sus casos más famosos fueron la ejecución del filósofo Giordano Bruno en 1600 y la condena de Galileo en 1633, que veremos en la próxima temporada." },
          { type: "p", text: "El 12 de marzo del año 2000, en una ceremonia en San Pedro, el papa Juan Pablo II pidió perdón por los pecados de los cristianos a lo largo de la historia, entre ellos «la intolerancia» y el uso de la violencia al servicio de la verdad. Hoy, aquella Inquisición romana se ha transformado en el Dicasterio para la Doctrina de la Fe, que no tiene nada que ver con tribunales penales." },
        ],
      },
    ],
    quiz: [
      question("s6e13-origen", "¿Contra quién se crearon los primeros inquisidores en el siglo XIII?", ["Contra los musulmanes", "Contra los cátaros del sur de Francia", "Contra los protestantes", "Contra los vikingos"], 1, "Gregorio IX nombró inquisidores especiales en 1231."),
      question("s6e13-espanola", "¿De quién dependía la Inquisición española?", ["Del papa", "De la Corona", "De los obispos", "De las universidades"], 1, "La creó Sixto IV en 1478 a petición de los Reyes Católicos."),
      question("s6e13-salazar", "¿Qué concluyó el inquisidor Alonso de Salazar y Frías sobre las brujas de Zugarramurdi?", ["Que eran culpables", "Que no había pruebas de brujería", "Que había que quemarlas a todas", "Que eran protestantes"], 1, "Desde entonces, la Inquisición española casi dejó de condenar a muerte por brujería."),
    ],
    sources: [
      { text: "Henry Kamen, La Inquisición española. Una revisión histórica, Crítica, 1999" },
      { text: "Gustav Henningsen, El abogado de las brujas, Alianza, 1983" },
      { text: "Jaime Contreras y Gustav Henningsen, «Forty-four thousand cases of the Spanish Inquisition (1540-1700)», 1986" },
    ],
    next: "En el próximo episodio, el último de la temporada: el papa se va a vivir a Francia, y luego hay dos y hasta tres papas a la vez. Uno de ellos, aragonés y muy cabezota.",
  },
});
