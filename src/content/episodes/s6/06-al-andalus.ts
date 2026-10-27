import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("guadalete", "covadonga", "cordoba", "escalada", "toledo", "granada");

export const alAndalus = makeEpisode({
  slug: "al-andalus",
  title: "Al-Ándalus y la Reconquista",
  period: "711 – 1492",
  cover: "Arcos Mezquita Cordoba.jpg",
  mapRegion: "peninsula",
  places,
  stops: [
    { id: "711", year: "711", place: "guadalete" },
    { id: "covadonga", year: "c. 722", place: "covadonga" },
    { id: "cordoba", year: "Siglos VIII – X", place: "cordoba" },
    { id: "mozarabes", year: "Siglos IX – X", place: "escalada" },
    { id: "toledo", year: "1085 – 1252", place: "toledo" },
    { id: "granada", year: "1492", place: "granada" },
  ],
  library: { ...library, places },
  version: {
    title: "Al-Ándalus y la Reconquista",
    inAMinute: [
      "En el año 711, un ejército musulmán cruzó el estrecho y en pocos años conquistó casi toda la península.",
      "En el norte surgieron pequeños reinos cristianos que fueron avanzando hacia el sur durante siglos.",
      "En al-Ándalus, cristianos y judíos podían practicar su fe, pero con impuestos y limitaciones.",
      "En Toledo, cristianos, judíos y musulmanes tradujeron juntos la ciencia y la filosofía antiguas.",
      "En 1492 cayó Granada. Ese mismo año se expulsó a los judíos, y después se obligó a los musulmanes a convertirse.",
    ],
    intro:
      "Durante casi ocho siglos, la península ibérica fue un lugar único en Europa: un territorio dividido entre reinos cristianos y musulmanes, con comunidades judías en ambos. Hubo guerras, pero también comercio, alianzas, matrimonios y un intercambio cultural enorme. Es una historia que no cabe ni en la leyenda heroica ni en la de una convivencia idílica.",
    sections: [
      {
        stop: "711",
        heading: "Un reino que se derrumba",
        blocks: [
          { type: "p", text: "A principios del siglo VIII, el reino visigodo estaba dividido por luchas entre nobles. En el año 711, un ejército de bereberes y árabes dirigido por Tariq cruzó el estrecho que hoy lleva su nombre: Gibraltar viene de Yabal Tariq, «el monte de Tariq». Cerca del río Guadalete derrotó al rey Rodrigo, que murió en la batalla." },
          { type: "p", text: "En pocos años, los musulmanes controlaron casi toda la península, a menudo mediante pactos con los nobles y las ciudades. A su territorio lo llamaron al-Ándalus." },
          { type: "fact", label: "Protegidos, pero no iguales", text: "Según la ley islámica, cristianos y judíos eran «gentes del Libro» y podían conservar su religión, sus iglesias y sus leyes. A cambio pagaban un impuesto especial, no podían construir iglesias nuevas ni hacer procesiones públicas, y tenían otras limitaciones. Con el tiempo, muchos se convirtieron al islam." },
        ],
      },
      {
        stop: "covadonga",
        heading: "Covadonga y el norte",
        blocks: [
          { type: "p", text: "En las montañas de Asturias, un noble llamado Pelayo derrotó hacia el año 722 a un pequeño ejército musulmán en Covadonga. Fue una batalla pequeña, que las crónicas cristianas posteriores agrandaron hasta convertirla en un símbolo, pero de ahí nació el reino de Asturias." },
          { type: "p", text: "A lo largo de los siglos, los reinos cristianos del norte (Asturias, León, Castilla, Navarra, Aragón, los condados catalanes y Portugal) fueron avanzando hacia el sur. A ese largo proceso se le llamó después Reconquista, porque los reyes cristianos se veían como herederos del reino visigodo. Muchos historiadores prefieren hoy hablar de «conquista cristiana»." },
        ],
      },
      {
        stop: "cordoba",
        heading: "Córdoba, la gran capital",
        blocks: [
          { type: "p", text: "Córdoba fue la capital de al-Ándalus y, en el siglo X, bajo el califa Abderramán III, una de las ciudades más grandes y refinadas de Europa, con grandes bibliotecas, baños públicos y palacios." },
          { type: "image", id: "mezquita" },
          { type: "p", text: "Su gran mezquita se levantó, según la tradición, en el lugar de la antigua basílica visigoda de San Vicente. Tras la conquista cristiana de 1236 se convirtió en catedral, y en el siglo XVI se construyó una catedral renacentista en su interior." },
          { type: "fact", label: "Los mártires de Córdoba", text: "Entre los años 850 y 859, unos cincuenta cristianos de Córdoba fueron ejecutados, la mayoría por criticar públicamente al islam ante los jueces, sabiendo que se castigaba con la muerte. Su defensor, el sacerdote Eulogio, también murió. Muchos cristianos de la ciudad no aprobaban su actitud: preferían vivir en paz." },
        ],
      },
      {
        stop: "mozarabes",
        heading: "Los mozárabes",
        blocks: [
          { type: "p", text: "A los cristianos que vivían en al-Ándalus se les llama mozárabes, «arabizados»: hablaban árabe, vestían como sus vecinos y adoptaron muchas costumbres musulmanas, pero conservaron su fe y su rito hispano." },
          { type: "p", text: "Algunos emigraron al norte cristiano y llevaron consigo su arte. En León, unos monjes llegados de Córdoba construyeron San Miguel de Escalada, consagrada en el año 913, con arcos de herradura como los de la mezquita. Y en los monasterios del norte se copiaron e ilustraron con colores intensos los «Beatos», comentarios al Apocalipsis escritos por un monje de Liébana." },
          { type: "image", id: "escalada" },
        ],
      },
      {
        stop: "toledo",
        heading: "Toledo, ciudad de traductores",
        blocks: [
          { type: "p", text: "En 1085, el rey Alfonso VI conquistó Toledo, la antigua capital visigoda. En la ciudad vivían cristianos, musulmanes y judíos, y allí se produjo algo extraordinario: durante los siglos XII y XIII se tradujeron al latín y después al castellano cientos de obras escritas en árabe." },
          { type: "p", text: "Así llegaron a Europa Aristóteles y otros autores griegos que los árabes habían conservado, y la ciencia árabe: medicina, astronomía, matemáticas. Muchas veces trabajaban en equipo: un judío o un mozárabe traducía del árabe a la lengua hablada y un clérigo lo ponía en latín. Alfonso X el Sabio impulsó estas traducciones en el siglo XIII." },
          { type: "fact", label: "Las Navas de Tolosa", text: "En 1212, los reyes de Castilla, Aragón y Navarra derrotaron a los almohades en las Navas de Tolosa (Jaén). Fue el principio del fin de al-Ándalus: en pocas décadas cayeron Córdoba, Sevilla y Valencia." },
        ],
      },
      {
        stop: "granada",
        heading: "1492",
        blocks: [
          { type: "p", text: "El último reino musulmán, Granada, se rindió a los Reyes Católicos el 2 de enero de 1492. Las capitulaciones prometían a los musulmanes conservar su religión, sus mezquitas y sus leyes." },
          { type: "p", text: "La promesa no se cumplió. Ese mismo año, en marzo, los reyes ordenaron que los judíos de sus reinos se convirtieran o se marcharan; decenas de miles se fueron. A partir de 1499 se presionó a los musulmanes de Granada para que se bautizaran, y en 1502 se les obligó en toda Castilla. Sus descendientes, los moriscos, fueron expulsados de España a partir de 1609." },
          { type: "p", text: "La historia de al-Ándalus dejó una huella enorme en España: miles de palabras de origen árabe, como «aceite», «azúcar» o «almohada», monumentos como la Alhambra y una manera de ver la propia historia que todavía hoy se discute." },
        ],
      },
    ],
    quiz: [
      question("s6e6-gibraltar", "¿De dónde viene el nombre de Gibraltar?", ["Del latín «puerta del mar»", "Del árabe Yabal Tariq, «el monte de Tariq»", "De un rey visigodo", "Del griego"], 1, "Tariq dirigió el ejército que cruzó el estrecho en el 711."),
      question("s6e6-mozarabes", "¿Quiénes eran los mozárabes?", ["Musulmanes que vivían en reinos cristianos", "Cristianos que vivían en al-Ándalus", "Judíos de Toledo", "Soldados bereberes"], 1, "Hablaban árabe, pero conservaron su fe y su rito."),
      question("s6e6-toledo", "¿Qué pasó en Toledo en los siglos XII y XIII?", ["Se construyó la Alhambra", "Se tradujeron al latín y al castellano cientos de obras escritas en árabe", "Se fundó la primera universidad", "Se celebró el Concilio de Trento"], 1, "Así llegaron a Europa Aristóteles y la ciencia árabe."),
    ],
    sources: [
      { text: "Crónica de Alfonso III; Eulogio de Córdoba, Memorial de los santos" },
      { text: "Eduardo Manzano Moreno, Épocas medievales (Historia de España, vol. 2), Crítica/Marcial Pons, 2010" },
      { text: "Maribel Fierro, Al-Ándalus: saberes e intercambios culturales, Icaria, 2001" },
    ],
    next: "En el próximo episodio: el día de Navidad del año 800, el papa corona a un rey franco como emperador. Carlomagno, la Iglesia y el poder.",
  },
});
