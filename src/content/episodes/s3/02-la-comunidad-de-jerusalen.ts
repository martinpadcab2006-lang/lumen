import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = { jerusalen: holyLand.jerusalen, samaria: holyLand.samaria, pella: holyLand.pella, jope: holyLand.jope };

export const laComunidadDeJerusalen = makeEpisode({
  slug: "la-comunidad-de-jerusalen",
  title: "La comunidad de Jerusalén",
  period: "30 – 70",
  cover: "Jerusalem_Modell_BW_2.JPG",
  places,
  stops: [
    { id: "comun", year: "c. 30 – 35", place: "jerusalen" },
    { id: "siete", year: "c. 33 – 35", place: "jerusalen" },
    { id: "esteban", year: "c. 34 – 36", place: "jerusalen" },
    { id: "dispersion", year: "c. 35", place: "samaria" },
    { id: "santiago", year: "40 – 62", place: "jerusalen" },
    { id: "final", year: "66 – 70", place: "pella" },
  ],
  library: { ...library, places },
  version: {
    title: "La comunidad de Jerusalén",
    inAMinute: [
      "Los primeros cristianos vivían en Jerusalén y seguían siendo judíos: rezaban en el Templo.",
      "Según los Hechos, compartían sus bienes y se reunían en las casas para «partir el pan».",
      "Pronto hubo tensiones entre los que hablaban arameo y los que hablaban griego.",
      "Esteban, uno de los «siete», fue apedreado: el primer mártir cristiano.",
      "Santiago, pariente de Jesús, dirigió la comunidad hasta su muerte en el año 62.",
    ],
    intro:
      "Los primeros cristianos no tenían iglesias, ni obispos, ni un nombre propio. Eran un grupo de judíos de Jerusalén convencidos de que Jesús era el Mesías y había resucitado. Así vivían, así se organizaron y así empezaron los problemas.",
    sections: [
      {
        stop: "comun",
        heading: "«Lo tenían todo en común»",
        blocks: [
          { type: "p", text: "Los Hechos de los Apóstoles hacen un retrato idealizado de la primera comunidad. Escuchaban la enseñanza de los apóstoles, rezaban, compartían la comida y «partían el pan» en las casas: es decir, celebraban la cena del Señor." },
          { type: "quote", text: "Todos los creyentes vivían unidos y lo tenían todo en común; vendían sus posesiones y sus bienes y lo repartían entre todos, según la necesidad de cada uno.", source: "Hechos de los Apóstoles 2, 44-45" },
          { type: "p", text: "Seguían yendo cada día al Templo, como cualquier judío piadoso. No se veían como una religión nueva, sino como los judíos que habían reconocido al Mesías." },
          { type: "fact", label: "No todo era perfecto", text: "Los mismos Hechos cuentan el caso de Ananías y Safira, un matrimonio que vendió un terreno y se quedó con parte del dinero mintiendo a la comunidad. El relato es durísimo: los dos mueren al ser descubiertos." },
        ],
      },
      {
        stop: "siete",
        heading: "Los primeros problemas: el reparto",
        blocks: [
          { type: "p", text: "En la comunidad había dos grupos: los «hebreos», judíos de la tierra que hablaban arameo, y los «helenistas», judíos que venían de otras partes del Imperio y hablaban griego. Los helenistas se quejaron de que en el reparto diario de comida se olvidaban de sus viudas." },
          { type: "p", text: "Los apóstoles decidieron elegir a siete hombres para encargarse de ese servicio, todos con nombres griegos. La tradición los considera los primeros diáconos, que en griego significa «servidores»." },
        ],
      },
      {
        stop: "esteban",
        heading: "Esteban, el primer mártir",
        blocks: [
          { type: "character", id: "esteban" },
          { type: "p", text: "Uno de los siete, Esteban, no se limitó a repartir comida. Predicaba con fuerza, y lo acusaron de hablar contra el Templo y contra la Ley. Ante el Sanedrín pronunció un largo discurso que acabó en tumulto: lo sacaron de la ciudad y lo apedrearon." },
          { type: "p", text: "Los Hechos añaden un detalle importante: los que lo apedreaban dejaron sus mantos a los pies de un joven llamado Saulo, que aprobaba su muerte. Ese joven será, muy pronto, el gran protagonista de esta historia." },
          { type: "fact", label: "Mártir", text: "«Mártir» significa en griego «testigo». Esteban es venerado como el primer mártir cristiano, y su fiesta es el 26 de diciembre, el día después de Navidad." },
        ],
      },
      {
        stop: "dispersion",
        heading: "La dispersión",
        blocks: [
          { type: "p", text: "Tras la muerte de Esteban hubo una persecución contra los cristianos helenistas, y muchos huyeron de Jerusalén. Fue un desastre para ellos, pero el mensaje se extendió: Felipe, otro de los siete, predicó en Samaria; otros llegaron hasta Antioquía, donde empezaron a hablar de Jesús también a quienes no eran judíos." },
          { type: "p", text: "Pedro, por su parte, recorrió la costa. En Jope y en Cesarea, según los Hechos, bautizó al primer no judío: un centurión romano llamado Cornelio." },
        ],
      },
      {
        stop: "santiago",
        heading: "Santiago, el hermano del Señor",
        blocks: [
          { type: "p", text: "Con el tiempo, el líder de la comunidad de Jerusalén no fue Pedro, sino Santiago, un pariente de Jesús al que Pablo llama «el hermano del Señor». No era de los Doce, pero tenía mucha autoridad, era muy fiel a la Ley judía y lo respetaban incluso fuera de la comunidad." },
          { type: "character", id: "santiago" },
          { type: "p", text: "Mientras tanto, la persecución también llegó a los apóstoles: hacia el año 44, el rey Herodes Agripa mandó decapitar a Santiago, hijo de Zebedeo, uno de los Doce, y encarcelar a Pedro, que según los Hechos escapó de forma milagrosa." },
        ],
      },
      {
        stop: "final",
        heading: "El final de la comunidad de Jerusalén",
        blocks: [
          { type: "p", text: "En el año 66 estalló la guerra de los judíos contra Roma. Según una tradición que recoge el historiador Eusebio, los cristianos de Jerusalén huyeron a Pella, al otro lado del Jordán, antes del asedio. En el año 70, la ciudad y el Templo fueron destruidos." },
          { type: "p", text: "Con eso, el centro del cristianismo dejó de estar en Jerusalén. A partir de entonces, la historia se escribe en Antioquía, en Éfeso, en Corinto, en Alejandría y en Roma." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo"],
    quiz: [
      question("s3e2-templo", "¿Dónde rezaban los primeros cristianos de Jerusalén?", ["En iglesias propias", "En el Templo, como los demás judíos", "En catacumbas", "En sinagogas romanas"], 1, "No se veían como una religión nueva, sino como judíos que habían reconocido al Mesías."),
      question("s3e2-diacono", "¿Qué significa «diácono»?", ["Sacerdote", "Servidor", "Anciano", "Mensajero"], 1, "Los siete se eligieron para atender el reparto de comida a las viudas."),
      question("s3e2-esteban", "¿Quién aprobaba la muerte de Esteban?", ["Pedro", "Un joven llamado Saulo", "Poncio Pilato", "Santiago"], 1, "Saulo será después el apóstol Pablo."),
    ],
    sources: [
      { text: "Hechos de los Apóstoles 2 – 12; Carta a los Gálatas 1, 19" },
      { text: "Flavio Josefo, Antigüedades judías XX, 200; Eusebio de Cesarea, Historia eclesiástica III, 5" },
    ],
    next: "En el próximo episodio: Pedro. El pescador impulsivo que negó a Jesús y acabó siendo la roca de la Iglesia y el primero de los papas.",
  },
});
