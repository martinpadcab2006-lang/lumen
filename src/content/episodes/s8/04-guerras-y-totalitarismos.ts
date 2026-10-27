import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "madrid", "munich", "auschwitz", "varsovia");

export const guerrasYTotalitarismos = makeEpisode({
  slug: "guerras-y-totalitarismos",
  title: "Guerras mundiales y totalitarismos",
  period: "1914 – 1989",
  cover: "Fr.Maximilian Kolbe 1939.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "granGuerra", year: "1914 – 1918", place: "roma" },
    { id: "espana", year: "1931 – 1975", place: "madrid" },
    { id: "nazismo", year: "1933 – 1945", place: "munich" },
    { id: "auschwitz", year: "1941 – 1942", place: "auschwitz" },
    { id: "comunismo", year: "1945 – 1989", place: "varsovia" },
  ],
  library: { ...library, places },
  version: {
    title: "Guerras mundiales y totalitarismos",
    inAMinute: [
      "Durante la Primera Guerra Mundial, el papa Benedicto XV llamó a la guerra «inútil matanza» y propuso la paz.",
      "En la guerra civil española fueron asesinados casi siete mil religiosos y sacerdotes; la Iglesia apoyó mayoritariamente a Franco.",
      "Frente al nazismo hubo cristianos que resistieron y murieron, y también silencios y complicidades.",
      "En Auschwitz murieron, entre otros, el franciscano Maximiliano Kolbe y la filósofa judía convertida Edith Stein.",
      "Bajo el comunismo, las Iglesias fueron perseguidas. En Polonia, la Iglesia fue clave en la caída del régimen.",
    ],
    intro:
      "El siglo XX fue el más sangriento de la historia. Dos guerras mundiales y varios regímenes totalitarios intentaron dominar por completo la vida de las personas, también su fe. Hubo cristianos que dieron la vida por resistir, y hubo cristianos, e Iglesias enteras, que callaron o se acomodaron. Este episodio intenta contar las dos cosas.",
    sections: [
      {
        stop: "granGuerra",
        heading: "Una «inútil matanza»",
        blocks: [
          { type: "p", text: "En 1914 estalló la Primera Guerra Mundial. En todos los países, los obispos y pastores bendijeron a sus ejércitos: católicos franceses contra católicos alemanes, protestantes ingleses contra protestantes alemanes." },
          { type: "p", text: "El papa Benedicto XV fue una excepción. Se mantuvo neutral, organizó la ayuda a los prisioneros y en 1917 propuso a los gobiernos un plan de paz. Llamó a la guerra «inútil matanza». Nadie le hizo caso, y unos y otros le acusaron de favorecer al enemigo." },
        ],
      },
      {
        stop: "espana",
        heading: "La guerra civil española",
        blocks: [
          { type: "p", text: "En España, la Segunda República (1931) quiso separar la Iglesia y el Estado y limitar su influencia, con medidas como la disolución de los jesuitas. Hubo quemas de iglesias y conventos en 1931 y en la revolución de Asturias de 1934." },
          { type: "p", text: "Al estallar la guerra civil en 1936, en la zona republicana se desató una persecución religiosa terrible: fueron asesinados 13 obispos, más de 4.000 sacerdotes, unos 2.400 frailes y religiosos y casi 300 monjas, además de muchos laicos por ser católicos. Se quemaron miles de iglesias y obras de arte. Más de dos mil de estas víctimas han sido beatificadas." },
          { type: "p", text: "La mayoría de los obispos apoyaron al bando de Franco, al que presentaron como una «cruzada». Durante la dictadura, la Iglesia tuvo enormes privilegios, el llamado nacionalcatolicismo, y guardó silencio ante la represión, que también fue brutal. Hubo sacerdotes, sin embargo, que fueron fusilados por los sublevados, sobre todo en el País Vasco. En 1971, en una asamblea de obispos y sacerdotes españoles, la mayoría votó una propuesta para pedir perdón por no haber sabido ser «ministros de reconciliación» durante la guerra, aunque no alcanzó los votos necesarios para aprobarse." },
        ],
      },
      {
        stop: "nazismo",
        heading: "Frente al nazismo",
        blocks: [
          { type: "p", text: "Cuando Hitler llegó al poder en 1933, muchos cristianos alemanes, protestantes y católicos, lo apoyaron o se adaptaron. Una parte de los protestantes, los «Cristianos alemanes», mezcló el evangelio con el racismo nazi. Frente a ellos surgió la «Iglesia confesante», que se negó a someterse." },
          { type: "p", text: "En 1937, el papa Pío XI publicó una encíclica escrita en alemán, «Con ardiente preocupación», que se leyó a escondidas en todas las iglesias católicas de Alemania y condenaba la ideología nazi. En Múnich, los estudiantes cristianos de la Rosa Blanca, como los hermanos Sophie y Hans Scholl, repartieron panfletos contra Hitler y fueron guillotinados en 1943. El pastor protestante Dietrich Bonhoeffer fue ahorcado en un campo de concentración en abril de 1945." },
          { type: "fact", label: "El debate sobre Pío XII", text: "El papa durante la Segunda Guerra Mundial, Pío XII, es objeto de un gran debate. Sus críticos le reprochan que no condenara públicamente el Holocausto con claridad. Sus defensores recuerdan que la Iglesia ayudó a esconder a miles de judíos, también en conventos de Roma, y que hablar más alto podía empeorar la persecución. En 2020 se abrieron a los investigadores los archivos vaticanos de su pontificado." },
        ],
      },
      {
        stop: "auschwitz",
        heading: "Dos santos en Auschwitz",
        blocks: [
          { type: "character", id: "kolbe" },
          { type: "image", id: "kolbe" },
          { type: "p", text: "En el campo de Auschwitz, donde los nazis asesinaron a más de un millón de personas, sobre todo judíos, murieron también muchos cristianos. En julio de 1941, tras la fuga de un preso, el comandante eligió a diez para morir de hambre. Uno de ellos gritó que tenía mujer e hijos. Maximiliano Kolbe dio un paso al frente y pidió morir en su lugar. El hombre al que salvó, Franciszek Gajowniczek, vivió hasta 1995." },
          { type: "p", text: "En agosto de 1942 llegó a Auschwitz Edith Stein, una brillante filósofa judía alemana que se había hecho católica y monja carmelita con el nombre de Teresa Benedicta de la Cruz. Fue asesinada en la cámara de gas por ser judía, como millones de otros. Es santa y copatrona de Europa." },
        ],
      },
      {
        stop: "comunismo",
        heading: "Bajo el comunismo",
        blocks: [
          { type: "p", text: "En la Unión Soviética, desde 1917, el ateísmo fue doctrina oficial: decenas de miles de sacerdotes, monjes y fieles fueron asesinados o enviados a campos de trabajo, y la mayoría de las iglesias se cerraron. Tras 1945, la persecución se extendió a Europa del Este." },
          { type: "p", text: "En Polonia, sin embargo, la Iglesia católica se convirtió en el gran refugio de la libertad. En 1978, el arzobispo de Cracovia, Karol Wojtyła, fue elegido papa con el nombre de Juan Pablo II. En su primer viaje a Polonia, en 1979, millones de personas acudieron a escucharle. Al año siguiente nació el sindicato libre Solidaridad. En 1989 cayó el régimen comunista polaco, y con él, uno tras otro, los del resto de Europa del Este." },
        ],
      },
    ],
    quiz: [
      question("s8e4-benedicto", "¿Cómo llamó el papa Benedicto XV a la Primera Guerra Mundial?", ["«Guerra santa»", "«Inútil matanza»", "«Cruzada»", "«Guerra justa»"], 1, "Propuso un plan de paz en 1917."),
      question("s8e4-kolbe", "¿Qué hizo Maximiliano Kolbe en Auschwitz?", ["Escapar del campo", "Ofrecerse a morir en lugar de un padre de familia", "Esconder judíos en su convento", "Escribir una encíclica"], 1, "El hombre al que salvó vivió hasta 1995."),
      question("s8e4-polonia", "¿Qué papa ayudó con su influencia a la caída del comunismo en Polonia?", ["Pío XII", "Juan Pablo II", "Juan XXIII", "Benedicto XVI"], 1, "Su viaje de 1979 movilizó a millones de polacos."),
    ],
    sources: [
      { text: "Pío XI, Mit brennender Sorge (1937); Benedicto XV, nota a los jefes de los pueblos beligerantes (1917)" },
      { text: "Antonio Montero Moreno, Historia de la persecución religiosa en España 1936-1939, BAC, 1961" },
      { text: "Hilari Raguer, La pólvora y el incienso. La Iglesia y la guerra civil española, Península, 2001" },
    ],
    next: "En el próximo episodio: un papa anciano sorprende al mundo convocando un concilio. El Vaticano II, la gran renovación de la Iglesia católica.",
  },
});
