import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("filipos", "corinto", "efeso", "roma", "jerusalen");

export const lasMujeresEnLasComunidades = makeEpisode({
  slug: "las-mujeres-en-las-comunidades",
  title: "Las mujeres en las primeras comunidades",
  period: "Siglo I",
  cover: "Giotto - Scrovegni - -37- - Resurrection (Noli me tangere).jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "lidia", year: "c. 49", place: "filipos" },
    { id: "priscila", year: "c. 50 – 57", place: "corinto" },
    { id: "febe", year: "c. 57", place: "roma" },
    { id: "pablo", year: "c. 50 – 60", place: "efeso" },
    { id: "despues", year: "Siglos II – hoy", place: "roma" },
  ],
  library: { ...library, places },
  version: {
    title: "Las mujeres en las primeras comunidades",
    inAMinute: [
      "Las mujeres tuvieron un papel importante en los primeros años del cristianismo.",
      "Lidia, una comerciante, fundó con Pablo la primera comunidad de Europa en su casa.",
      "Priscila enseñaba y dirigía una comunidad junto a su marido Áquila.",
      "Pablo llama «diaconisa» a Febe y dice que Junia era «ilustre entre los apóstoles».",
      "Con el tiempo, su papel se fue reduciendo. Hoy las iglesias siguen debatiendo sobre ello.",
    ],
    intro:
      "Cuando se habla de los primeros cristianos se piensa en Pedro, Pablo y los apóstoles. Pero si lees con atención las cartas de Pablo y los Hechos, aparecen muchas mujeres con nombre propio: anfitrionas, misioneras, maestras, diaconisas. Cerramos la temporada con ellas.",
    sections: [
      {
        stop: "lidia",
        heading: "Lidia, la comerciante de púrpura",
        blocks: [
          { type: "p", text: "En Filipos, el primer lugar de Europa donde predicó Pablo, la primera persona en bautizarse fue una mujer: Lidia, una comerciante de tejidos teñidos de púrpura, el color más caro de la Antigüedad. Venía de Tiatira, en Asia Menor, y simpatizaba con el judaísmo." },
          { type: "p", text: "Se bautizó «con toda su casa» e insistió en que Pablo y sus compañeros se alojaran con ella. Su casa se convirtió en el lugar de reunión de la comunidad. Es decir, la primera iglesia cristiana de Europa se reunía en casa de una empresaria." },
        ],
      },
      {
        stop: "priscila",
        heading: "Priscila y Áquila",
        blocks: [
          { type: "p", text: "Priscila (o Prisca) y su marido Áquila eran judíos cristianos expulsados de Roma. En Corinto acogieron a Pablo y trabajaron juntos fabricando tiendas. Después se fueron con él a Éfeso, y más tarde volvieron a Roma." },
          { type: "p", text: "Los Hechos cuentan que en Éfeso le explicaron con más detalle «el camino de Dios» a Apolo, un predicador muy elocuente de Alejandría. Es decir, Priscila enseñaba a un hombre, y además importante. Un detalle curioso: en varias ocasiones se la nombra a ella antes que a su marido, algo poco habitual que quizá indica que era la más conocida de los dos." },
        ],
      },
      {
        stop: "febe",
        heading: "Febe, Junia y las demás",
        blocks: [
          { type: "p", text: "Al final de su carta a los Romanos, Pablo recomienda a «Febe, nuestra hermana, diaconisa de la iglesia de Cencreas», el puerto de Corinto, y pide que la reciban bien. Muchos especialistas creen que fue ella quien llevó la carta a Roma." },
          { type: "p", text: "En la misma lista de saludos aparecen más de veinte personas, y casi un tercio son mujeres: Prisca, María, Trifena, Trifosa, Pérside, «que tanto ha trabajado en el Señor»… Y Junia, a la que Pablo llama, junto a Andrónico, «ilustres entre los apóstoles»." },
          { type: "fact", label: "El caso de Junia", text: "Durante siglos, muchas traducciones convirtieron a Junia en un hombre, «Junias», porque parecía imposible que una mujer fuera llamada apóstol. Hoy la mayoría de los especialistas y de las traducciones recientes reconocen que era una mujer." },
        ],
      },
      {
        stop: "pablo",
        heading: "Pablo y las mujeres",
        blocks: [
          { type: "p", text: "Pablo dejó frases muy distintas. Por un lado, escribió una de las más revolucionarias de la Antigüedad: en Cristo «ya no hay judío ni griego, esclavo ni libre, hombre ni mujer». Y trabajó codo con codo con muchas mujeres." },
          { type: "p", text: "Por otro, en la Primera carta a los Corintios aparece la frase «que las mujeres callen en las asambleas». Algunos especialistas creen que es un añadido posterior, porque contradice otras partes de la misma carta en las que Pablo da por hecho que las mujeres rezan y profetizan en público. Otros creen que responde a un problema concreto de Corinto. Y otras cartas atribuidas a Pablo, escritas probablemente más tarde, ya piden que las mujeres estén sometidas a sus maridos." },
          { type: "fact", label: "Entre líneas", text: "Los textos reflejan una tensión: el mensaje de igualdad de los inicios frente a las normas de una sociedad en la que el lugar de la mujer era la casa." },
        ],
      },
      {
        stop: "despues",
        heading: "Fin de la tercera temporada",
        blocks: [
          { type: "p", text: "A medida que las comunidades se organizaron y se parecieron más a las instituciones de la sociedad romana, los cargos de dirección quedaron en manos de hombres. Las mujeres siguieron siendo muy importantes como mártires, como viudas consagradas, como diaconisas en Oriente y, más adelante, como monjas, abadesas y místicas." },
          { type: "p", text: "Hoy las iglesias responden de forma distinta: la católica y las ortodoxas no ordenan mujeres sacerdotes; muchas iglesias protestantes, como la anglicana o la luterana, sí tienen pastoras y obispas. Es uno de los debates abiertos del cristianismo actual." },
          { type: "p", text: "Así termina la tercera temporada. En unos setenta años, el movimiento de Jesús ha salido de Jerusalén, ha llegado a Roma y se ha separado del judaísmo. Pero el emperador Nerón está a punto de buscar un culpable para el incendio de Roma. Empieza la época de las persecuciones." },
        ],
      },
    ],
    relatedPills: ["por-que-los-curas-no-se-casan", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s3e9-lidia", "¿Quién fue la primera persona bautizada en Europa, según los Hechos?", ["María Magdalena", "Lidia, comerciante de púrpura", "Priscila", "Febe"], 1, "En Filipos, Grecia (Hechos 16)."),
      question("s3e9-febe", "¿Cómo llama Pablo a Febe?", ["Profetisa", "Diaconisa de la iglesia de Cencreas", "Esposa de Pedro", "Reina"], 1, "Probablemente fue ella quien llevó la carta a los Romanos."),
      question("s3e9-junia", "¿Qué le pasó a Junia en muchas traducciones antiguas?", ["Desapareció del texto", "La convirtieron en un hombre, «Junias»", "La llamaron santa", "Nada"], 1, "Hoy la mayoría de las traducciones reconocen que era una mujer."),
    ],
    sources: [
      { text: "Hechos de los Apóstoles 16, 11-15 y 18; Romanos 16; Gálatas 3, 28; Primera carta a los Corintios 11, 5 y 14, 34-35" },
      { text: "Eldon Jay Epp, Junia: The First Woman Apostle, Fortress, 2005" },
      { text: "Carmen Bernabé (ed.), Mujeres con autoridad en el cristianismo antiguo, Verbo Divino, 2007" },
    ],
    next: "Temporada 4, episodio 1: Nerón y las primeras persecuciones. Roma arde y alguien tiene que pagarlo.",
  },
});
