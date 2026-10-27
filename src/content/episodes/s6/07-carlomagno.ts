import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("poitiers", "roncesvalles", "roma", "aquisgran", "york");

export const carlomagno = makeEpisode({
  slug: "carlomagno",
  title: "Carlomagno: la Iglesia y el poder",
  period: "732 – 814",
  cover: "Albrecht Dürer - Emperor Charlemagne.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "francos", year: "732 – 756", place: "poitiers" },
    { id: "roncesvalles", year: "778", place: "roncesvalles" },
    { id: "coronacion", year: "800", place: "roma" },
    { id: "aquisgran", year: "794 – 814", place: "aquisgran" },
    { id: "escuelas", year: "Siglos VIII – IX", place: "york" },
  ],
  library: { ...library, places },
  version: {
    title: "Carlomagno: la Iglesia y el poder",
    inAMinute: [
      "Los reyes francos se convirtieron en los grandes protectores del papa en el siglo VIII.",
      "Carlomagno conquistó buena parte de Europa occidental. En Roncesvalles sufrió una derrota que dio origen a una leyenda.",
      "El día de Navidad del año 800, el papa León III lo coronó emperador en Roma.",
      "Impulsó escuelas y la copia de libros: casi todos los clásicos latinos que leemos nos han llegado en copias de su época.",
      "Las letras minúsculas que usamos hoy vienen de la escritura que se desarrolló en su imperio.",
    ],
    intro:
      "Trescientos años después de la caída de Roma, un rey franco reunió bajo su mando a la mayor parte de Europa occidental. Lo llamaron Carlos el Grande: Carlomagno. Su alianza con el papa marcó la relación entre la Iglesia y el poder durante toda la Edad Media.",
    sections: [
      {
        stop: "francos",
        heading: "El papa busca protector",
        blocks: [
          { type: "p", text: "En el año 732, cerca de Poitiers, el jefe franco Carlos Martel, abuelo de Carlomagno, detuvo a un ejército musulmán que había cruzado los Pirineos. Los francos se convirtieron en la gran potencia de Occidente." },
          { type: "p", text: "Mientras, el papa estaba en apuros: los lombardos amenazaban Roma y el emperador bizantino, lejano, no le ayudaba. Así que buscó la protección de los francos. El hijo de Carlos Martel, Pipino, fue ungido rey con el apoyo del papa, y a cambio le derrotó a los lombardos y le entregó un territorio en el centro de Italia. Así nacieron los Estados Pontificios, que existieron hasta 1870." },
        ],
      },
      {
        stop: "roncesvalles",
        heading: "La derrota de Roncesvalles",
        blocks: [
          { type: "character", id: "carlomagno" },
          { type: "p", text: "Carlomagno se pasó la vida guerreando: conquistó el reino lombardo, Baviera y Sajonia, donde obligó a los sajones a bautizarse por la fuerza. En el año 778 entró en Hispania, pero su expedición a Zaragoza fracasó. Al volver, en el paso de Roncesvalles, los vascones atacaron su retaguardia y la aniquilaron." },
          { type: "p", text: "Entre los muertos estaba un noble llamado Roldán. Tres siglos después, un poema francés, el «Cantar de Roldán», convirtió aquella emboscada en una gran batalla heroica contra los musulmanes. Más al este, los francos sí lograron controlar una franja al sur de los Pirineos, la Marca Hispánica, de donde surgirían los condados catalanes." },
        ],
      },
      {
        stop: "coronacion",
        heading: "Emperador en Navidad",
        blocks: [
          { type: "p", text: "El 25 de diciembre del año 800, mientras Carlomagno rezaba en la basílica de San Pedro, el papa León III le puso una corona en la cabeza y la multitud lo aclamó como emperador de los romanos. Por primera vez desde el 476 había un emperador en Occidente." },
          { type: "p", text: "Su biógrafo, Eginardo, asegura que Carlomagno no sabía nada y que, de haberlo sabido, no habría entrado en la iglesia. Los historiadores lo dudan. Lo cierto es que el gesto era importante: era el papa quien coronaba. Durante siglos, papas y emperadores discutirían quién estaba por encima de quién." },
          { type: "fact", label: "Enfado en Constantinopla", text: "En Bizancio no les hizo ninguna gracia: para ellos, el único emperador romano era el suyo. Ese emperador era en realidad una mujer, Irene, que gobernaba sola. Desde Occidente se argumentó que, al no haber un hombre en el trono, el puesto estaba vacante." },
        ],
      },
      {
        stop: "aquisgran",
        heading: "Aquisgrán",
        blocks: [
          { type: "p", text: "Carlomagno estableció su corte en Aquisgrán, en la actual Alemania, por sus aguas termales. Allí construyó un palacio y una capilla octogonal inspirada en San Vital de Rávena, con columnas de mármol traídas de Italia." },
          { type: "image", id: "aquisgran" },
          { type: "p", text: "Murió en el año 814 y fue enterrado en esa capilla, que hoy forma parte de la catedral. Su imperio se dividió entre sus nietos pocos años después, pero la idea de un imperio cristiano en Occidente sobrevivió: el Sacro Imperio Romano Germánico duró, con muchos cambios, hasta 1806." },
        ],
      },
      {
        stop: "escuelas",
        heading: "Escuelas y libros",
        blocks: [
          { type: "p", text: "Carlomagno quería un clero mejor formado y llamó a su corte a sabios de toda Europa. El más importante fue Alcuino, un monje de York, en Inglaterra, que dirigió la escuela de palacio. Una ley del año 789 pidió que en cada monasterio y catedral hubiera escuelas para enseñar a leer." },
          { type: "p", text: "En los escritorios se copiaron miles de libros: la Biblia, los Padres de la Iglesia y también los autores latinos paganos. Muchas obras de Cicerón, Virgilio o César nos han llegado gracias a copias de esta época." },
          { type: "fact", label: "Las letras que estás leyendo", text: "Para copiar mejor, se desarrolló una letra clara y redonda, la minúscula carolina. Siglos después, los humanistas del Renacimiento la recuperaron creyendo que era romana, y de ahí pasó a la imprenta. Las letras minúsculas de este texto descienden de ella." },
        ],
      },
    ],
    quiz: [
      question("s6e7-coronacion", "¿Cuándo fue coronado emperador Carlomagno?", ["El 1 de enero del 800", "El 25 de diciembre del año 800", "En el 476", "En el 1054"], 1, "En la basílica de San Pedro, por el papa León III."),
      question("s6e7-roncesvalles", "¿Qué pasó en Roncesvalles en el año 778?", ["Carlomagno conquistó Zaragoza", "Los vascones atacaron la retaguardia de Carlomagno", "Se fundó el Camino de Santiago", "Se coronó a Carlomagno"], 1, "De ahí nació la leyenda de Roldán."),
      question("s6e7-minuscula", "¿Qué tiene que ver la época de Carlomagno con las letras minúsculas actuales?", ["Nada", "Nuestras minúsculas descienden de la minúscula carolina", "Carlomagno inventó la imprenta", "Las inventó Alcuino en el siglo XX"], 1, "Los humanistas la recuperaron y pasó a la imprenta."),
    ],
    sources: [
      { text: "Eginardo, Vida de Carlomagno; Admonitio generalis (789)" },
      { text: "Rosamond McKitterick, Carlomagno, PUV, 2013" },
      { text: "Alessandro Barbero, Carlomagno, Ariel, 2001" },
    ],
    next: "En el próximo episodio: en 1054, Roma y Constantinopla se excomulgan mutuamente. El Gran Cisma entre Oriente y Occidente.",
  },
});
