import { makeEpisode } from "../make";
import { library, mediterranean } from "./library";

const places = {
  jerusalen: mediterranean.jerusalen,
  roma: mediterranean.roma,
  alejandria: mediterranean.alejandria,
  antioquia: mediterranean.antioquia,
};

export const lasFuentesSobreJesus = makeEpisode({
  slug: "las-fuentes-sobre-jesus",
  title: "¿Qué sabemos de Jesús?",
  period: "Siglos I – II",
  cover: "P52 recto.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "existio", year: "Hoy", place: "jerusalen" },
    { id: "pablo", year: "c. 50 – 60", place: "antioquia" },
    { id: "evangelios", year: "c. 70 – 100", place: "antioquia" },
    { id: "otros", year: "c. 93 – 120", place: "roma" },
    { id: "metodo", year: "Hoy", place: "alejandria" },
    { id: "seguro", year: "c. 30", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "¿Qué sabemos de Jesús?",
    inAMinute: [
      "Casi todos los historiadores, creyentes o no, están de acuerdo en que Jesús de Nazaret existió.",
      "Los textos más antiguos sobre él son las cartas de Pablo, escritas unos veinte años después de su muerte.",
      "Los cuatro evangelios se escribieron entre los años 70 y 100, en griego, por creyentes.",
      "Historiadores judíos y romanos como Josefo y Tácito también lo mencionan.",
      "Los historiadores usan criterios para separar lo más seguro de lo que solo se puede creer.",
    ],
    intro:
      "Jesús no escribió nada. No se conserva ningún retrato suyo, ni su tumba con su nombre, ni documentos oficiales sobre él. Entonces, ¿cómo sabemos lo que sabemos? En este episodio nos ponemos las gafas de historiador.",
    sections: [
      {
        stop: "existio",
        heading: "¿Existió Jesús?",
        blocks: [
          { type: "p", text: "Es una pregunta que se oye mucho en redes. La respuesta de los especialistas es clara: sí. Prácticamente todos los historiadores de la Antigüedad, incluidos los que no son creyentes, aceptan que Jesús de Nazaret fue un personaje real, un predicador judío de Galilea crucificado en Jerusalén hacia el año 30." },
          { type: "p", text: "Lo que se discute no es si existió, sino qué se puede saber con seguridad de su vida y qué pertenece a la fe de sus seguidores. Que sea el Hijo de Dios o que resucitara son afirmaciones de fe: la historia no puede probarlas ni refutarlas." },
          { type: "fact", label: "Para comparar", text: "De muchos personajes de la Antigüedad sabemos mucho menos. De Jesús hay varias fuentes independientes escritas en el primer siglo después de su muerte, algo poco habitual para un campesino de una provincia lejana." },
        ],
      },
      {
        stop: "pablo",
        heading: "Las cartas de Pablo: lo más antiguo",
        blocks: [
          { type: "p", text: "Los textos cristianos más antiguos no son los evangelios, sino las cartas que Pablo de Tarso escribió a las comunidades que había fundado, entre los años 50 y 60. Es decir, unos veinte años después de la muerte de Jesús." },
          { type: "p", text: "Pablo no conoció a Jesús en vida, pero sí a Pedro y a Santiago, «el hermano del Señor». En sus cartas da algunos datos: que Jesús era judío, de la familia de David, que celebró una cena la noche en que fue entregado y que murió crucificado." },
        ],
      },
      {
        stop: "evangelios",
        heading: "Los cuatro evangelios",
        blocks: [
          { type: "p", text: "Los evangelios son la fuente principal sobre la vida de Jesús. Hay cuatro en el Nuevo Testamento: Marcos, Mateo, Lucas y Juan. La mayoría de los especialistas piensa que el de Marcos es el más antiguo, de hacia el año 70, y que Mateo y Lucas lo usaron, junto a otra colección de dichos de Jesús. El de Juan, distinto en estilo, sería de finales del siglo I." },
          {
            type: "numbers",
            title: "Los evangelios en cifras",
            items: [
              { value: "4", label: "evangelios en el Nuevo Testamento" },
              { value: "c. 40 – 70 años", label: "después de la muerte de Jesús se escribieron" },
              { value: "más de 5.000", label: "manuscritos griegos del Nuevo Testamento se conservan" },
            ],
          },
          { type: "p", text: "No son biografías al estilo moderno ni actas de un notario. Los escribieron creyentes para transmitir su fe, a partir de recuerdos y tradiciones que circulaban de boca en boca. Por eso los historiadores los leen con atención, pero también con espíritu crítico, como cualquier otra fuente antigua." },
          { type: "image", id: "p52" },
          { type: "fact", label: "Un trocito con mucha historia", text: "El papiro P52, encontrado en Egipto, tiene unos versículos del evangelio de Juan. Se suele fechar en la primera mitad del siglo II, lo que demuestra que ese evangelio ya circulaba lejos de donde se escribió." },
        ],
      },
      {
        stop: "otros",
        heading: "Lo que dicen los que no eran cristianos",
        blocks: [
          { type: "p", text: "Varios autores antiguos que no eran cristianos mencionan a Jesús o a sus seguidores. Sus menciones son breves, pero valiosas, porque no tenían ningún interés en promocionarlo." },
          { type: "character", id: "josefo" },
          { type: "p", text: "Flavio Josefo, el historiador judío, escribió hacia el año 93 dos pasajes. En uno cuenta la ejecución de «Santiago, el hermano de Jesús, llamado el Cristo». En el otro habla del propio Jesús, aunque los especialistas creen que un copista cristiano retocó ese texto añadiendo frases de fe." },
          { type: "character", id: "tacito" },
          { type: "image", id: "tacito" },
          { type: "p", text: "Tácito, hacia el 116, explica que el nombre de los cristianos viene de Cristo, «ejecutado en el reinado de Tiberio por el procurador Poncio Pilato». Plinio el Joven, gobernador romano, escribió al emperador Trajano hacia el 112 que los cristianos se reunían antes del amanecer para cantar himnos «a Cristo como a un dios»." },
        ],
      },
      {
        stop: "metodo",
        heading: "Cómo trabajan los historiadores",
        blocks: [
          { type: "p", text: "Para separar lo más probable de lo menos seguro, los investigadores usan algunos criterios. No son infalibles, pero ayudan." },
          {
            type: "words",
            items: [
              { term: "Testimonio múltiple", meaning: "Lo que aparece en varias fuentes independientes es más probable que lo que aparece en una sola." },
              { term: "Dificultad", meaning: "Lo que resultaba incómodo para los primeros cristianos difícilmente se lo inventaron. Por ejemplo, que Jesús fuera bautizado por Juan o que muriera en una cruz, el castigo de los esclavos." },
              { term: "Coherencia", meaning: "Lo que encaja con el judaísmo de Galilea en el siglo I tiene más posibilidades de remontarse a Jesús." },
            ],
          },
          { type: "p", text: "En España hay grandes especialistas en este tema, con posturas distintas: desde el catedrático Antonio Piñero, desde una mirada laica, hasta biblistas católicos como José Antonio Pagola. Leer a varios es la mejor manera de hacerse una idea propia." },
        ],
      },
      {
        stop: "seguro",
        heading: "Lo que casi nadie discute",
        blocks: [
          { type: "p", text: "Con todo eso, la mayoría de los historiadores acepta un núcleo de datos sobre Jesús:" },
          {
            type: "words",
            items: [
              { term: "Origen", meaning: "Nació hacia el 6-4 a. C., al final del reinado de Herodes, y creció en Nazaret de Galilea, en una familia judía." },
              { term: "Comienzo", meaning: "Fue bautizado por Juan el Bautista." },
              { term: "Mensaje", meaning: "Predicó la llegada del «Reino de Dios», con parábolas, y tuvo fama de curar enfermos." },
              { term: "Discípulos", meaning: "Reunió a un grupo de seguidores, entre ellos doce más cercanos, y también mujeres." },
              { term: "Final", meaning: "Tuvo un conflicto en el Templo de Jerusalén y fue crucificado por orden de Poncio Pilato hacia el año 30." },
              { term: "Después", meaning: "Poco después, sus seguidores proclamaron que había resucitado y empezaron a extender su mensaje." },
            ],
          },
          { type: "p", text: "A partir de aquí, la serie te contará lo que dicen los evangelios y lo que dicen los historiadores, sin mezclarlo. Empezamos por el principio de la historia: un nacimiento en Belén." },
        ],
      },
    ],
    relatedPills: ["existio-jesus", "73-o-66-libros"],
    quiz: [
      { id: "s1e6-antiguos", prompt: "¿Cuáles son los textos cristianos más antiguos que se conservan?", options: [{ id: "a", text: "El evangelio de Juan" }, { id: "b", text: "Las cartas de Pablo" }, { id: "c", text: "El Apocalipsis" }, { id: "d", text: "Los Hechos de los Apóstoles" }], correctId: "b", explanation: "Las escribió entre los años 50 y 60, antes que cualquiera de los evangelios." },
      { id: "s1e6-tacito", prompt: "¿Qué historiador romano dice que Cristo fue ejecutado por Poncio Pilato?", options: [{ id: "a", text: "Julio César" }, { id: "b", text: "Tácito" }, { id: "c", text: "Séneca" }, { id: "d", text: "Plutarco" }], correctId: "b", explanation: "En sus Anales (XV, 44), escritos hacia el año 116." },
      { id: "s1e6-dificultad", prompt: "Según el criterio de dificultad, ¿por qué es muy probable que Jesús fuera bautizado por Juan?", options: [{ id: "a", text: "Porque lo cuenta un solo evangelio" }, { id: "b", text: "Porque era incómodo para los cristianos que su maestro se bautizara con otro" }, { id: "c", text: "Porque lo dice Tácito" }, { id: "d", text: "Porque se encontró el bautisterio" }], correctId: "b", explanation: "Un detalle que podía dar a entender que Juan era superior difícilmente se lo habrían inventado." },
    ],
    sources: [
      { text: "Flavio Josefo, Antigüedades judías XVIII, 63-64 y XX, 200" },
      { text: "Tácito, Anales XV, 44; Plinio el Joven, Cartas X, 96" },
      { text: "John P. Meier, Un judío marginal. Nueva visión del Jesús histórico, vol. 1, Verbo Divino, 1998" },
      { text: "Antonio Piñero, Aproximación al Jesús histórico, Trotta, 2018" },
    ],
    next: "En el próximo episodio: el nacimiento de Jesús. Belén, la fecha equivocada, los pastores, los magos y la estrella: qué cuentan los evangelios y qué dicen los historiadores.",
  },
});
