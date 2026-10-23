import { makeEpisode } from "../make";
import { library, mediterranean } from "./library";

const places = {
  roma: mediterranean.roma,
  jerusalen: mediterranean.jerusalen,
  antioquia: mediterranean.antioquia,
  alejandria: mediterranean.alejandria,
  atenas: mediterranean.atenas,
  efeso: mediterranean.efeso,
  cartago: mediterranean.cartago,
  tarraco: mediterranean.tarraco,
};

export const elImperioRomano = makeEpisode({
  slug: "el-imperio-romano",
  title: "El Imperio romano en el siglo I",
  period: "27 a. C. – siglo I",
  cover: "Statue-Augustus.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "mar", year: "Siglo I", place: "roma" },
    { id: "augusto", year: "27 a. C. – 14 d. C.", place: "roma" },
    { id: "caminos", year: "Siglo I", place: "tarraco" },
    { id: "ciudades", year: "Siglo I", place: "alejandria" },
    { id: "dioses", year: "Siglo I", place: "efeso" },
    { id: "importa", year: "Siglo I", place: "antioquia" },
  ],
  library: { ...library, places },
  version: {
    title: "El Imperio romano en el siglo I",
    inAMinute: [
      "Cuando nació Jesús, Roma dominaba todas las tierras alrededor del Mediterráneo, de Hispania a Siria.",
      "Augusto, el primer emperador, trajo una larga época de paz: la Pax Romana.",
      "Calzadas, rutas por mar y una lengua común, el griego, unían a millones de personas.",
      "Roma aceptaba muchos dioses, pero exigía respeto a los suyos y al emperador.",
      "Todo eso facilitó que el cristianismo se extendiera… y también que chocara con Roma.",
    ],
    intro:
      "La tierra de Jesús era una provincia pequeña de un imperio gigantesco. Para entender cómo un mensaje nacido en Galilea llegó en pocas décadas a Roma, Corinto o Hispania, hay que conocer ese imperio: sus emperadores, sus caminos, sus ciudades y sus dioses.",
    sections: [
      {
        stop: "mar",
        heading: "Un imperio alrededor de un mar",
        blocks: [
          { type: "p", text: "En el siglo I, Roma controlaba todas las costas del Mediterráneo. Los romanos lo llamaban Mare Nostrum, «nuestro mar». Su imperio iba de Hispania y la Galia, en el oeste, hasta Siria y Egipto, en el este; y del norte de África hasta el Danubio y el Rin." },
          {
            type: "numbers",
            title: "El Imperio en tiempos de Jesús",
            items: [
              { value: "50 – 60 millones", label: "de habitantes, según las estimaciones de los historiadores" },
              { value: "unos 300.000", label: "soldados entre legionarios y tropas auxiliares" },
              { value: "más de 80.000 km", label: "de calzadas principales al final de su expansión" },
            ],
          },
          { type: "p", text: "Hispania era una parte importante de ese mundo. De aquí salían aceite, vino, salazones y metales, y aquí nacieron el filósofo Séneca, en Córdoba, y poco después el emperador Trajano, en Itálica, junto a Sevilla." },
        ],
      },
      {
        stop: "augusto",
        heading: "Augusto y la paz romana",
        blocks: [
          { type: "p", text: "Durante el siglo I a. C., Roma se desangró en guerras civiles. Las ganó Octavio, sobrino nieto de Julio César. En el año 27 a. C. recibió el título de Augusto, «el venerable», y se convirtió en el primer emperador, aunque él prefería llamarse simplemente princeps, «el primer ciudadano»." },
          { type: "character", id: "augusto" },
          { type: "p", text: "Empezó entonces un largo periodo de estabilidad dentro de las fronteras: la Pax Romana. No significaba que no hubiera guerras ni violencia, sino que el comercio y los viajes eran más seguros que nunca. La propaganda de Augusto lo presentaba como un salvador que había traído la paz al mundo." },
          { type: "image", id: "augusto" },
          { type: "p", text: "A Augusto le sucedió Tiberio, que gobernó del 14 al 37. Es el emperador de la vida adulta de Jesús: fue en su reinado cuando Jesús predicó y cuando fue crucificado." },
          { type: "character", id: "tiberio" },
        ],
      },
      {
        stop: "caminos",
        heading: "Calzadas, barcos y una lengua común",
        blocks: [
          { type: "p", text: "Los romanos construyeron una red de calzadas empedradas que unía todo el Imperio. Se hicieron para mover deprisa a las legiones, pero por ellas viajaban también comerciantes, funcionarios, estudiantes… y, pronto, misioneros." },
          { type: "image", id: "viaApia" },
          { type: "p", text: "El mar era todavía más rápido. En verano, un barco podía ir de Alejandría a Roma en unas semanas. En invierno se paraba casi todo: era demasiado peligroso. Pablo de Tarso lo sufrió en sus propias carnes, con un naufragio frente a Malta." },
          { type: "p", text: "Y había una lengua que entendía casi todo el mundo en las ciudades del este: el griego común, la koiné. En latín se hablaba en Roma y en el oeste, pero quien sabía griego podía hacerse entender de Antioquía a Roma. Por eso todo el Nuevo Testamento se escribió en griego." },
          { type: "fact", label: "Para situarte", text: "La Vía Augusta recorría Hispania de los Pirineos a Cádiz pasando por Tarraco (Tarragona) y Valencia. Algunos de sus miliarios, las piedras que marcaban las millas, todavía se conservan." },
        ],
      },
      {
        stop: "ciudades",
        heading: "Ciudades gigantes y aldeas olvidadas",
        blocks: [
          { type: "p", text: "Roma era la ciudad más grande del mundo conocido: quizá un millón de habitantes, apiñados en bloques de pisos de varias alturas, con acueductos, termas, teatros y el Circo Máximo. Le seguían Alejandría, en Egipto, con su gran biblioteca, y Antioquía, en Siria." },
          { type: "p", text: "Pero la inmensa mayoría de la gente no vivía en ciudades. Vivía en el campo, de lo que cultivaba, y muchos eran pobres. Había además millones de esclavos: personas compradas y vendidas, sin derechos, que hacían de todo, desde trabajar en las minas hasta enseñar a los hijos de los ricos." },
          { type: "image", id: "columnaTrajano" },
          { type: "p", text: "La sociedad estaba muy jerarquizada. Lo que eras dependía de tu nacimiento: ciudadano romano o no, libre o esclavo, hombre o mujer, rico o pobre. Por eso llamaba tanto la atención una frase que Pablo escribiría pocos años después: entre los cristianos «ya no hay judío ni griego, esclavo ni libre, hombre ni mujer»." },
        ],
      },
      {
        stop: "dioses",
        heading: "Un imperio lleno de dioses",
        blocks: [
          { type: "p", text: "Los romanos tenían muchos dioses: Júpiter, Juno, Minerva, Marte… Cada ciudad tenía además los suyos, y cada casa honraba a sus dioses del hogar. Roma era tolerante con los dioses de los pueblos conquistados: a menudo los añadía a su lista." },
          { type: "p", text: "Lo que no toleraba era que se despreciara a los dioses oficiales, porque se creía que de ellos dependía la prosperidad del Imperio. Y había un culto especial: el del emperador. A Augusto se le declaró dios tras su muerte, y en muchas ciudades del este había templos dedicados a Roma y al emperador." },
          { type: "p", text: "Los judíos eran una excepción tolerada: tenían un solo Dios, no aceptaban estatuas y Roma les permitía no participar en esos cultos. Al principio, los cristianos se beneficiaron de esa situación porque se los veía como un grupo judío. Cuando dejaron de parecerlo, empezaron los problemas." },
          { type: "fact", label: "¿Sabías que…?", text: "Los romanos llamaban «ateos» a los cristianos: no porque no creyeran en Dios, sino porque no creían en los dioses de Roma." },
        ],
      },
      {
        stop: "importa",
        heading: "Por qué importa para esta historia",
        blocks: [
          { type: "p", text: "Muchos historiadores lo han señalado: sin el Imperio romano, el cristianismo no se habría extendido tan deprisa. Las calzadas, los barcos, la paz y el griego permitieron que en apenas treinta años hubiera comunidades cristianas en Antioquía, Éfeso, Corinto o Roma." },
          { type: "p", text: "Pero el mismo imperio que les abrió los caminos acabaría persiguiéndolos, porque se negaban a ofrecer sacrificios a los dioses y al emperador. Y tres siglos después ocurriría lo que nadie habría imaginado: un emperador cristiano. Pero eso es otra temporada." },
        ],
      },
    ],
    relatedPills: ["por-que-la-navidad-es-el-25-de-diciembre", "el-pez-simbolo-cristiano"],
    quiz: [
      { id: "s1e4-augusto", prompt: "¿Quién era emperador cuando nació Jesús?", options: [{ id: "a", text: "Julio César" }, { id: "b", text: "Nerón" }, { id: "c", text: "Augusto" }, { id: "d", text: "Constantino" }], correctId: "c", explanation: "Augusto gobernó del 27 a. C. al 14 d. C. Julio César había muerto en el 44 a. C." },
      { id: "s1e4-griego", prompt: "¿En qué lengua se escribió el Nuevo Testamento?", options: [{ id: "a", text: "En latín" }, { id: "b", text: "En hebreo" }, { id: "c", text: "En griego" }, { id: "d", text: "En arameo" }], correctId: "c", explanation: "El griego común era la lengua que se entendía en todo el este del Imperio." },
      { id: "s1e4-ateos", prompt: "¿Por qué algunos romanos llamaban «ateos» a los cristianos?", options: [{ id: "a", text: "Porque no creían en ningún dios" }, { id: "b", text: "Porque no adoraban a los dioses de Roma" }, { id: "c", text: "Porque no tenían templos" }, { id: "d", text: "Porque eran filósofos griegos" }], correctId: "b", explanation: "Creían en un solo Dios, pero rechazaban los dioses oficiales y el culto al emperador." },
    ],
    sources: [
      { text: "Mary Beard, SPQR. Una historia de la antigua Roma, Crítica, 2016" },
      { text: "Carta de Pablo a los Gálatas 3, 28" },
      { text: "Hechos de los Apóstoles 27 – 28 (el viaje de Pablo a Roma)" },
    ],
    next: "En el próximo episodio: volvemos a Jerusalén para entender qué esperaba aquel pueblo. Profetas, reyes, un exilio en Babilonia y una palabra que lo cambia todo: Mesías.",
  },
});
