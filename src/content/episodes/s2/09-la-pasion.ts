import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  jerusalen: holyLand.jerusalen,
};

export const laPasion = makeEpisode({
  slug: "la-pasion",
  title: "La Pasión y la crucifixión",
  period: "c. 30",
  cover: "Cristo crucificado.jpg",
  places,
  stops: [
    { id: "getsemani", year: "c. 30, noche del jueves", place: "jerusalen" },
    { id: "sanedrin", year: "c. 30, madrugada", place: "jerusalen" },
    { id: "pilato", year: "c. 30, viernes por la mañana", place: "jerusalen" },
    { id: "cruz", year: "c. 30, viernes", place: "jerusalen" },
    { id: "sepultura", year: "c. 30, viernes por la tarde", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "La Pasión y la crucifixión",
    inAMinute: [
      "La muerte de Jesús en una cruz es uno de los hechos más seguros de su vida.",
      "Fue detenido de noche en Getsemaní, interrogado por las autoridades del Templo y llevado ante Pilato.",
      "Pilato, el gobernador romano, lo condenó a la crucifixión, el castigo de esclavos y rebeldes.",
      "Sobre la cruz pusieron la causa: «Jesús de Nazaret, rey de los judíos».",
      "Murió un viernes, hacia el año 30, y fue enterrado esa misma tarde.",
    ],
    intro:
      "Este es el episodio más duro de la serie. En menos de veinticuatro horas, Jesús pasó de cenar con sus amigos a morir en una cruz. Los cuatro evangelios dedican a estas horas más espacio que a ninguna otra parte de su vida. Y los historiadores, creyentes o no, coinciden en lo esencial.",
    sections: [
      {
        stop: "getsemani",
        heading: "Getsemaní",
        blocks: [
          { type: "p", text: "Después de la cena, Jesús salió con sus discípulos a un huerto de olivos al pie del monte de los Olivos, llamado Getsemaní, «molino de aceite». Allí rezó con angustia: «Padre, aparta de mí este cáliz; pero no se haga lo que yo quiero, sino lo que tú quieres». Los discípulos se quedaron dormidos." },
          { type: "image", id: "huerto" },
          { type: "p", text: "Llegó Judas con un grupo armado enviado por los sumos sacerdotes, y lo señaló con un beso. Hubo un pequeño forcejeo: uno de los discípulos sacó una espada e hirió a un criado. Jesús lo detuvo. Los discípulos huyeron." },
          { type: "fact", label: "Todavía se puede ver", text: "En Getsemaní siguen en pie olivos milenarios. Un estudio de 2012 fechó algunos de ellos en el siglo XII, pero podrían brotar de raíces más antiguas." },
        ],
      },
      {
        stop: "sanedrin",
        heading: "Ante el sumo sacerdote",
        blocks: [
          { type: "p", text: "Esa noche llevaron a Jesús a casa del sumo sacerdote Caifás, donde se reunieron algunos miembros del Sanedrín, el consejo de los judíos. Lo acusaron de haber amenazado con destruir el Templo y de presentarse como el Mesías. Lo consideraron reo de muerte." },
          { type: "p", text: "Mientras tanto, en el patio, Pedro, que lo había seguido de lejos, negó tres veces conocerlo antes de que cantara el gallo. Es otro de esos detalles vergonzosos que difícilmente se habría inventado nadie." },
          { type: "fact", label: "Por qué ir a Pilato", text: "Las autoridades judías no podían ejecutar a nadie sin permiso de Roma. Por eso, al amanecer, llevaron a Jesús ante el gobernador, y cambiaron la acusación: ya no era religiosa, sino política. Decía que era rey." },
        ],
      },
      {
        stop: "pilato",
        heading: "Ante Poncio Pilato",
        blocks: [
          { type: "character", id: "pilato" },
          { type: "p", text: "Pilato estaba en Jerusalén por la Pascua, precisamente para evitar disturbios. Preguntó a Jesús: «¿Eres tú el rey de los judíos?». Los evangelios lo presentan dudando, intentando liberarlo y finalmente cediendo ante la multitud. Los historiadores recuerdan que, según otras fuentes, Pilato era duro y no solía dudar en ejecutar." },
          { type: "image", id: "eccehomo" },
          { type: "p", text: "Lo mandó azotar, un castigo brutal con látigos de tiras de cuero con trozos de hueso o metal. Los soldados se burlaron de él poniéndole una corona de espinas y un manto de rey. Después, lo condenó a morir crucificado." },
          { type: "fact", label: "Barrabás", text: "Los evangelios cuentan que Pilato ofreció a la gente liberar a un preso por la fiesta y eligieron a Barrabás, un rebelde. No hay ninguna otra fuente que mencione esa costumbre." },
        ],
      },
      {
        stop: "cruz",
        heading: "La cruz",
        blocks: [
          { type: "p", text: "La crucifixión era la muerte más cruel y humillante de Roma, reservada a esclavos, rebeldes y criminales sin derechos. El condenado cargaba con el palo horizontal hasta el lugar de la ejecución, donde lo clavaban o ataban y lo dejaban morir, a veces durante días, a la vista de todos." },
          { type: "p", text: "Jesús, debilitado por los azotes, no podía con el madero, y obligaron a un hombre que pasaba, Simón de Cirene, a llevárselo. Lo crucificaron en el Gólgota, una antigua cantera a las afueras de la ciudad, entre dos bandidos. Sobre la cruz pusieron un cartel con la causa: «Jesús de Nazaret, rey de los judíos», en hebreo, latín y griego. En latín, sus iniciales son INRI." },
          { type: "image", id: "crucificado" },
          { type: "p", text: "Según los evangelios, murió hacia las tres de la tarde. Estaban allí, mirando, algunas mujeres que lo habían seguido desde Galilea, entre ellas María Magdalena. Juan añade a su madre y al «discípulo amado»." },
          { type: "fact", label: "Una prueba arqueológica", text: "En 1968 apareció en Jerusalén un hueso de talón de un hombre del siglo I, llamado Yehohanan, atravesado todavía por un clavo de hierro. Es una de las pocas pruebas físicas de cómo se crucificaba en tiempos de Jesús." },
        ],
      },
      {
        stop: "sepultura",
        heading: "Un sepulcro nuevo",
        blocks: [
          { type: "p", text: "Normalmente, los cuerpos de los crucificados se dejaban en la cruz o se echaban a una fosa común. Pero los evangelios cuentan que un miembro del Sanedrín, José de Arimatea, pidió a Pilato el cuerpo de Jesús y lo enterró en un sepulcro excavado en la roca, cerrado con una gran piedra. Había que hacerlo deprisa: al ponerse el sol empezaba el sábado." },
          { type: "image", id: "sepulcro" },
          { type: "p", text: "En el siglo IV, el emperador Constantino mandó construir una gran basílica sobre el lugar que los cristianos de Jerusalén veneraban como el Gólgota y la tumba. Es la actual basílica del Santo Sepulcro, que comparten hoy varias iglesias cristianas." },
          { type: "p", text: "Los discípulos estaban escondidos y hundidos. Su maestro había muerto como un criminal. Para casi todo el mundo, la historia terminaba aquí." },
        ],
      },
    ],
    relatedPills: ["que-significa-inri", "nazarenos-y-capirotes", "por-que-semana-santa-cambia-de-fecha"],
    quiz: [
      question("s2e9-quien", "¿Quién condenó a muerte a Jesús?", ["El sumo sacerdote Caifás", "Herodes Antipas", "El gobernador romano Poncio Pilato", "El emperador Tiberio"], 2, "Solo el gobernador romano podía ordenar una ejecución en Judea."),
      question("s2e9-inri", "¿Qué significa INRI?", ["Iglesia Nueva de Roma e Israel", "Jesús de Nazaret, rey de los judíos (en latín)", "In nomine Regis Israel", "Es un nombre propio"], 1, "Iesus Nazarenus Rex Iudaeorum: la causa de la condena."),
      question("s2e9-getsemani", "¿Qué significa «Getsemaní»?", ["Huerto de rosas", "Molino de aceite", "Monte de la oración", "Lugar de la calavera"], 1, "Era un huerto de olivos al pie del monte de los Olivos."),
    ],
    sources: [
      { text: "Evangelio de Marcos 14 – 15; evangelio de Juan 18 – 19" },
      { text: "Tácito, Anales XV, 44" },
      { text: "Raymond E. Brown, La muerte del Mesías, Verbo Divino, 2005-2006" },
      { text: "V. Tzaferis, «Jewish Tombs at and near Giv'at ha-Mivtar», Israel Exploration Journal 20 (1970)" },
    ],
    next: "En el próximo episodio: el domingo por la mañana, unas mujeres van al sepulcro y lo encuentran vacío. Lo que pasó después cambió la historia.",
  },
});
