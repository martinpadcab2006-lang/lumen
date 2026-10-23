import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("tarso", "jerusalen", "damasco", "antioquia", "roma");

export const pablo = makeEpisode({
  slug: "pablo",
  title: "Pablo de Tarso",
  period: "c. 5 – c. 64-67",
  cover: "Conversion on the Way to Damascus-Caravaggio (c.1600-1).jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "tarso", year: "c. 5", place: "tarso" },
    { id: "perseguidor", year: "c. 33", place: "jerusalen" },
    { id: "damasco", year: "c. 33 – 36", place: "damasco" },
    { id: "antioquia", year: "c. 40 – 46", place: "antioquia" },
    { id: "persona", year: "Siglo I", place: "antioquia" },
    { id: "final", year: "c. 64 – 67", place: "roma" },
  ],
  library: { ...library, places },
  version: {
    title: "Pablo de Tarso",
    inAMinute: [
      "Saulo era un judío de Tarso, fariseo y ciudadano romano, que perseguía a los cristianos.",
      "Según los Hechos, camino de Damasco se le apareció Jesús y cambió de bando.",
      "Se convirtió en el gran misionero de los no judíos: el «apóstol de los gentiles».",
      "Sus cartas son los textos cristianos más antiguos que se conservan.",
      "Según la tradición, murió decapitado en Roma, en tiempos de Nerón.",
    ],
    intro:
      "Sin Pablo, el cristianismo quizá se habría quedado en un grupo judío más. Fue él quien más empujó para que el mensaje de Jesús llegara a todos los pueblos, y quien escribió sus primeros textos. Lo curioso es que empezó persiguiéndolo.",
    sections: [
      {
        stop: "tarso",
        heading: "Un judío del mundo griego",
        blocks: [
          { type: "p", text: "Saulo nació a principios del siglo I en Tarso, una ciudad próspera de la actual Turquía, en una familia judía. Tenía doble nombre, como muchos judíos de la diáspora: Saulo en hebreo, Paulo en latín. Según los Hechos, era ciudadano romano de nacimiento, un privilegio que le salvaría más de una vez." },
          { type: "p", text: "Hablaba griego, conocía las Escrituras en hebreo y se formó como fariseo, según los Hechos, en Jerusalén. Se ganaba la vida fabricando tiendas de campaña con lona y cuero, un oficio que siguió ejerciendo durante sus viajes para no depender de nadie." },
          { type: "character", id: "pablo" },
        ],
      },
      {
        stop: "perseguidor",
        heading: "El perseguidor",
        blocks: [
          { type: "p", text: "Pablo no conoció a Jesús en vida. Lo que conoció fueron sus seguidores, y no le gustaron nada. Para un fariseo celoso de la Ley, anunciar como Mesías a un hombre crucificado era intolerable: la Ley decía que el que muere colgado de un madero está maldito." },
          { type: "p", text: "Él mismo lo reconoce en sus cartas: «Perseguía con saña a la Iglesia de Dios y trataba de destruirla». Los Hechos lo sitúan en la muerte de Esteban y cuentan que entraba en las casas para llevarse presos a hombres y mujeres." },
        ],
      },
      {
        stop: "damasco",
        heading: "Camino de Damasco",
        blocks: [
          { type: "p", text: "Hacia el año 33 o 34, Saulo iba a Damasco con cartas del sumo sacerdote para detener a los cristianos de la ciudad. Según los Hechos, en el camino lo envolvió una luz del cielo, cayó a tierra y oyó una voz: «Saulo, Saulo, ¿por qué me persigues?». «¿Quién eres, Señor?». «Soy Jesús, a quien tú persigues»." },
          { type: "image", id: "conversion" },
          { type: "p", text: "Quedó ciego tres días. En Damasco, un cristiano llamado Ananías le impuso las manos, recuperó la vista y se bautizó. Pablo, en sus cartas, lo cuenta de forma más sobria: Dios «tuvo a bien revelarme a su Hijo»." },
          { type: "fact", label: "¿Y el caballo?", text: "En casi todos los cuadros, Pablo cae de un caballo. Pero los Hechos no mencionan ningún caballo: es un detalle que añadieron los pintores. Aun así, «caerse del caballo» se usa en español para hablar de un cambio radical de opinión." },
        ],
      },
      {
        stop: "antioquia",
        heading: "De Damasco a Antioquía",
        blocks: [
          { type: "p", text: "Tras su conversión, Pablo pasó un tiempo en Arabia y en Damasco, y unos tres años después subió a Jerusalén para conocer a Pedro. Los cristianos desconfiaban de él: ¿no sería una trampa? Un discípulo llamado Bernabé lo avaló." },
          { type: "p", text: "Después volvió a Tarso, hasta que Bernabé fue a buscarlo para trabajar juntos en Antioquía, la tercera ciudad del Imperio, donde había una comunidad mixta de judíos y no judíos. Desde allí empezaron sus viajes misioneros, que tienen su propio episodio." },
        ],
      },
      {
        stop: "persona",
        heading: "¿Cómo era Pablo?",
        blocks: [
          { type: "p", text: "Un texto del siglo II, los Hechos de Pablo y Tecla, lo describe como un hombre bajo, calvo, de cejas juntas y nariz un poco grande. Es tardío, pero es la descripción más antigua que tenemos." },
          { type: "p", text: "Por sus cartas sabemos que era apasionado, a veces tierno y a veces durísimo, capaz de discutir con Pedro en público y de escribir uno de los textos más bellos sobre el amor: «El amor es paciente, es servicial; el amor no tiene envidia… Todo lo excusa, todo lo cree, todo lo espera, todo lo soporta»." },
          { type: "p", text: "También sabemos lo que sufrió. En una carta enumera: cinco veces azotado por los judíos, tres veces apaleado por los romanos, una vez apedreado, tres naufragios, peligros de ríos, de bandidos, hambre, frío… Y además, una misteriosa «espina clavada en la carne», que nadie sabe qué era." },
        ],
      },
      {
        stop: "final",
        heading: "Roma",
        blocks: [
          { type: "p", text: "Pablo fue detenido en Jerusalén hacia el año 57, pasó dos años preso en Cesarea y, como ciudadano romano, apeló al emperador. Lo enviaron a Roma, donde, según los Hechos, vivió dos años bajo arresto domiciliario, predicando a quien iba a verlo. Ahí termina el libro." },
          { type: "p", text: "La tradición dice que murió en Roma durante la persecución de Nerón, decapitado, porque los ciudadanos romanos no podían ser crucificados. Sobre su tumba, a las afueras de la ciudad, se levanta la basílica de San Pablo Extramuros." },
          { type: "fact", label: "¿Estuvo en España?", text: "En su carta a los Romanos, Pablo dice que piensa viajar a Hispania. Hacia el año 96, un texto de Roma afirma que llegó «hasta los límites de Occidente». Algunos lo interpretan como España; otros, como Roma. No sabemos si llegó a venir." },
        ],
      },
    ],
    relatedPills: ["por-que-los-curas-no-se-casan"],
    quiz: [
      question("s3e4-tarso", "¿De dónde era Pablo?", ["De Jerusalén", "De Tarso, en la actual Turquía", "De Roma", "De Nazaret"], 1, "Una ciudad griega próspera, en la provincia romana de Cilicia."),
      question("s3e4-oficio", "¿En qué trabajaba Pablo?", ["Era pescador", "Fabricaba tiendas de campaña", "Era soldado", "Era sacerdote del Templo"], 1, "Lo siguió haciendo durante sus viajes para no depender de nadie."),
      question("s3e4-caballo", "¿Mencionan los Hechos que Pablo cayera de un caballo?", ["Sí", "No: el caballo lo añadieron los pintores", "Solo el evangelio de Juan", "Lo dice Pablo en sus cartas"], 1, "Los Hechos solo dicen que cayó a tierra."),
    ],
    sources: [
      { text: "Hechos de los Apóstoles 7 – 9 y 21 – 28; Gálatas 1, 13-24; Primera carta a los Corintios 13; Segunda carta a los Corintios 11, 23-29; Romanos 15, 24" },
      { text: "Primera carta de Clemente 5, 7" },
      { text: "Jerome Murphy-O'Connor, Paul: His Story, Oxford University Press, 2004" },
    ],
    next: "En el próximo episodio: los viajes de Pablo. Miles de kilómetros a pie y en barco, motines, naufragios y comunidades nuevas de Turquía a Grecia.",
  },
});
