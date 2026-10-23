import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("antioquia", "pafos", "efeso", "filipos", "tesalonica", "atenas", "corinto", "jerusalen", "malta", "roma", "alejandria", "tarraco");

export const losViajesDePablo = makeEpisode({
  slug: "los-viajes-de-pablo",
  title: "Los viajes de Pablo y la expansión por el Mediterráneo",
  period: "c. 46 – 62",
  cover: "V&A - Raphael, St Paul Preaching in Athens (1515).jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "primero", year: "c. 46 – 48", place: "pafos" },
    { id: "europa", year: "c. 49 – 50", place: "filipos" },
    { id: "atenas", year: "c. 50", place: "atenas" },
    { id: "corinto", year: "c. 50 – 52", place: "corinto" },
    { id: "efeso", year: "c. 52 – 55", place: "efeso" },
    { id: "roma", year: "c. 59 – 62", place: "malta" },
    { id: "otros", year: "Siglo I", place: "alejandria" },
  ],
  library: { ...library, places },
  version: {
    title: "Los viajes de Pablo y la expansión por el Mediterráneo",
    inAMinute: [
      "Entre los años 46 y 58, Pablo hizo tres grandes viajes misioneros por Turquía y Grecia.",
      "Fundaba comunidades en las ciudades, empezando por las sinagogas, y seguía en contacto con ellas por carta.",
      "En Filipos nació la primera comunidad cristiana de Europa; en Atenas habló a los filósofos.",
      "Pasó año y medio en Corinto y casi tres en Éfeso, donde provocó un motín.",
      "Viajó preso a Roma tras naufragar en Malta. Pero el cristianismo ya había llegado a Roma antes que él.",
    ],
    intro:
      "A pie por calzadas romanas y en barcos de mercancías, Pablo recorrió miles de kilómetros en unos doce años. Su ruta es la mejor manera de ver cómo el cristianismo pasó de Asia a Europa. Y no viajaba solo: con él iban Bernabé, Silas, Timoteo, Lucas, Priscila y Áquila.",
    sections: [
      {
        stop: "primero",
        heading: "El primer viaje: Chipre y Turquía",
        blocks: [
          { type: "p", text: "Hacia el año 46, la comunidad de Antioquía envió a Bernabé y a Pablo a predicar fuera. Fueron primero a Chipre, la tierra de Bernabé, y después al interior de la actual Turquía: Antioquía de Pisidia, Iconio, Listra, Derbe." },
          { type: "p", text: "El método era siempre el mismo. Llegaban a una ciudad, iban a la sinagoga y hablaban de Jesús. Algunos judíos se interesaban, y también los «temerosos de Dios», paganos simpatizantes del judaísmo. Cuando había conflicto, se iban a predicar fuera. En Listra, la multitud llegó a apedrear a Pablo y lo dieron por muerto." },
          { type: "fact", label: "El gran debate", text: "A la vuelta, en Jerusalén, hubo una reunión clave, hacia el año 49: ¿tenían que circuncidarse y cumplir la Ley judía los no judíos que se hacían cristianos? Se decidió que no. Lo contamos en el episodio «Cristianos y judíos»." },
        ],
      },
      {
        stop: "europa",
        heading: "El segundo viaje: el salto a Europa",
        blocks: [
          { type: "p", text: "Hacia el año 49, Pablo emprendió un segundo viaje con Silas y, más tarde, con un joven llamado Timoteo. Desde Troas, en la costa de Turquía, cruzaron a Macedonia, en Grecia. Por primera vez, el cristianismo llegaba a Europa." },
          { type: "p", text: "En Filipos, una colonia romana, conocieron a Lidia, una comerciante de tejidos de púrpura que se bautizó con toda su casa y los alojó. Fue la primera comunidad cristiana de Europa. Después pasaron por Tesalónica, donde tuvieron que huir de noche." },
        ],
      },
      {
        stop: "atenas",
        heading: "En Atenas, ante los filósofos",
        blocks: [
          { type: "p", text: "En Atenas, la ciudad de los filósofos, Pablo paseó entre templos y estatuas y se fijó en un altar dedicado «al dios desconocido». Según los Hechos, habló en el Areópago, ante filósofos estoicos y epicúreos: «Ese Dios que veneráis sin conocerlo es el que yo os anuncio»." },
          { type: "image", id: "atenas" },
          { type: "p", text: "Lo escucharon con curiosidad hasta que habló de la resurrección de los muertos. Entonces unos se burlaron y otros dijeron, educadamente: «Ya te escucharemos otro día». Muy pocos se unieron. Atenas fue uno de sus fracasos." },
        ],
      },
      {
        stop: "corinto",
        heading: "Corinto, año y medio",
        blocks: [
          { type: "p", text: "Corinto era un gran puerto comercial, rico, cosmopolita y con fama de ciudad de vicio. Pablo se quedó año y medio. Allí trabajó en el taller de tiendas de un matrimonio judío expulsado de Roma, Priscila y Áquila, que se convirtieron en sus grandes colaboradores." },
          { type: "p", text: "La comunidad de Corinto le dio muchos dolores de cabeza: grupos enfrentados, pleitos, desórdenes en la cena del Señor. Para resolverlos les escribió varias cartas, dos de las cuales están en la Biblia." },
          { type: "fact", label: "Una fecha segura", text: "Los Hechos cuentan que en Corinto acusaron a Pablo ante el gobernador Galión, hermano del filósofo cordobés Séneca. Una inscripción hallada en Delfos sitúa a Galión en Corinto hacia el año 51-52. Es una de las pocas fechas firmes de la vida de Pablo." },
        ],
      },
      {
        stop: "efeso",
        heading: "Éfeso y el motín de los plateros",
        blocks: [
          { type: "p", text: "En su tercer viaje, Pablo pasó casi tres años en Éfeso, una de las mayores ciudades del Imperio, famosa por el gran templo de la diosa Artemisa, una de las siete maravillas del mundo." },
          { type: "image", id: "efeso" },
          { type: "p", text: "Los Hechos cuentan un episodio muy vivo: un platero llamado Demetrio, que fabricaba figuritas de la diosa para los peregrinos, reunió a los artesanos porque la predicación de Pablo les estaba hundiendo el negocio. Se montó un motín en el teatro, y durante dos horas la multitud gritó: «¡Grande es la Artemisa de los efesios!»." },
        ],
      },
      {
        stop: "roma",
        heading: "Preso, naufragio y Roma",
        blocks: [
          { type: "p", text: "Pablo volvió a Jerusalén con una colecta para los pobres de la comunidad. Allí lo detuvieron tras un alboroto en el Templo. Tras dos años preso en Cesarea, apeló al emperador y lo embarcaron hacia Roma, hacia el año 59 o 60." },
          { type: "p", text: "El viaje lo cuenta Lucas en primera persona, como si fuera con él: una tormenta de catorce días, el barco destrozado y todos los pasajeros salvados a nado en la isla de Malta, donde pasaron el invierno. En primavera llegaron por fin a Roma." },
          {
            type: "numbers",
            title: "Los viajes de Pablo",
            items: [
              { value: "3", label: "grandes viajes misioneros, más el viaje preso a Roma" },
              { value: "miles de km", label: "a pie y en barco, en unos doce años" },
              { value: "3", label: "naufragios, según cuenta él mismo" },
            ],
          },
        ],
      },
      {
        stop: "otros",
        heading: "No estaba solo",
        blocks: [
          { type: "p", text: "Pablo es el misionero del que más sabemos, pero no fue el único. Cuando llegó a Roma ya había allí una comunidad cristiana: él mismo les había escrito una larga carta años antes. El historiador Suetonio cuenta que el emperador Claudio expulsó de Roma a los judíos, hacia el año 49, por disturbios causados por un tal «Cresto». Muchos creen que eran discusiones sobre Cristo." },
          { type: "p", text: "Otros misioneros anónimos llevaron el mensaje a Alejandría, a Egipto, al norte de África. En apenas treinta años, había comunidades en las principales ciudades del Mediterráneo oriental y en Roma. ¿Y en Hispania? Hay tradiciones sobre Santiago y sobre Pablo, pero las primeras pruebas seguras de cristianos en Hispania son del siglo II." },
        ],
      },
    ],
    relatedPills: ["el-camino-de-santiago", "el-pez-simbolo-cristiano"],
    quiz: [
      question("s3e5-europa", "¿Dónde nació la primera comunidad cristiana de Europa?", ["En Roma", "En Atenas", "En Filipos (Grecia)", "En Corinto"], 2, "Allí se bautizó Lidia, una comerciante de púrpura."),
      question("s3e5-efeso", "¿Por qué hubo un motín en Éfeso?", ["Por los impuestos", "Porque los plateros que vendían figuras de Artemisa perdían negocio", "Por un partido en el estadio", "Por la llegada de Nerón"], 1, "Lo cuentan los Hechos de los Apóstoles (19, 23-40)."),
      question("s3e5-galion", "¿Qué hermano de un filósofo cordobés juzgó a Pablo en Corinto?", ["Galión, hermano de Séneca", "Lucano", "Marcial", "Columela"], 0, "Una inscripción de Delfos permite fechar su mandato hacia el 51-52."),
    ],
    sources: [
      { text: "Hechos de los Apóstoles 13 – 28; Segunda carta a los Corintios 11, 25; Romanos 1, 7 y 15, 24" },
      { text: "Suetonio, Vida de Claudio 25; inscripción de Galión en Delfos" },
      { text: "Rodney Stark, La expansión del cristianismo, Trotta, 2009" },
    ],
    next: "En el próximo episodio: cartas antes que evangelios. Los primeros escritos cristianos y cómo se formó el Nuevo Testamento.",
  },
});
