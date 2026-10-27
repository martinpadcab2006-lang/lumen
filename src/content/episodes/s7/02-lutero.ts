import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "wittenberg", "worms", "wartburg", "augsburgo");

export const lutero = makeEpisode({
  slug: "lutero",
  title: "Lutero y la Reforma",
  period: "1517 – 1555",
  cover: "Lucas Cranach d.Ä. - Martin Luther, 1528 (Veste Coburg).jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "indulgencias", year: "1506 – 1517", place: "roma" },
    { id: "tesis", year: "1517", place: "wittenberg" },
    { id: "worms", year: "1521", place: "worms" },
    { id: "wartburg", year: "1521 – 1534", place: "wartburg" },
    { id: "augsburgo", year: "1530 – 1999", place: "augsburgo" },
  ],
  library: { ...library, places },
  version: {
    title: "Lutero y la Reforma",
    inAMinute: [
      "Para pagar la nueva basílica de San Pedro, se predicaban indulgencias a cambio de dinero.",
      "En 1517, el fraile Martín Lutero publicó 95 tesis contra ese comercio. La imprenta las difundió por toda Alemania.",
      "Lutero llegó a la conclusión de que el ser humano se salva solo por la fe, y que la única autoridad es la Biblia.",
      "Excomulgado, se negó a retractarse ante el emperador Carlos V en Worms (1521) y tradujo la Biblia al alemán.",
      "La cristiandad occidental se dividió. En 1999, católicos y luteranos firmaron un acuerdo sobre su gran tema de discusión.",
    ],
    intro:
      "El 31 de octubre de 1517, un profesor de Biblia de una pequeña universidad alemana envió a su arzobispo una lista de 95 tesis para discutir. Quería un debate académico. Provocó la mayor ruptura de la historia del cristianismo occidental.",
    sections: [
      {
        stop: "indulgencias",
        heading: "El negocio de las indulgencias",
        blocks: [
          { type: "p", text: "Una indulgencia era, según la doctrina de la Iglesia, el perdón de las penas que quedan por los pecados ya perdonados, que se podía aplicar también a los difuntos en el purgatorio. Se conseguía con oraciones, peregrinaciones, limosnas…" },
          { type: "p", text: "En 1506 se empezó a construir la nueva basílica de San Pedro, carísima. El papa León X concedió una indulgencia especial para financiarla, y en Alemania la predicó un fraile dominico, Johann Tetzel, de forma muy comercial. Se le atribuye un pareado: «Cuando la moneda en el cofre suena, un alma sale del purgatorio»." },
        ],
      },
      {
        stop: "tesis",
        heading: "Las 95 tesis",
        blocks: [
          { type: "character", id: "lutero" },
          { type: "p", text: "Lutero llevaba años angustiado por una pregunta: ¿cómo puede un pecador ser justo ante Dios? Leyendo la carta de Pablo a los romanos llegó a una respuesta que le liberó: no por nuestras obras, sino por la fe en Cristo, que Dios regala gratuitamente." },
          { type: "p", text: "Con esa convicción, la venta de indulgencias le pareció un engaño. El 31 de octubre de 1517 envió sus 95 tesis al arzobispo de Maguncia. Según la tradición, además las clavó en la puerta de la iglesia del castillo de Wittenberg; algunos historiadores lo dudan. Lo decisivo fue la imprenta: en pocas semanas las tesis circulaban por toda Alemania." },
          { type: "image", id: "puerta" },
          {
            type: "words",
            items: [
              { term: "Solo la fe", meaning: "Nos salvamos por la fe en Cristo, no por nuestros méritos." },
              { term: "Solo la gracia", meaning: "La salvación es un regalo de Dios, no algo que se gane." },
              { term: "Solo la Escritura", meaning: "La Biblia es la única autoridad en la fe, por encima de papas y concilios." },
            ],
          },
        ],
      },
      {
        stop: "worms",
        heading: "«Aquí estoy»",
        blocks: [
          { type: "p", text: "El conflicto fue creciendo. Lutero negó la autoridad del papa y de los concilios. En 1520 el papa le dio sesenta días para retractarse; Lutero quemó públicamente la bula. En enero de 1521 fue excomulgado." },
          { type: "image", id: "worms" },
          { type: "p", text: "En abril de 1521 compareció en la ciudad de Worms ante el nuevo emperador, Carlos V, que también era rey de España. Le pidieron que se retractara. Lutero respondió que no podía ir contra su conciencia mientras no le convencieran con la Escritura. Según la versión impresa poco después, terminó: «Aquí estoy. No puedo hacer otra cosa. Que Dios me ayude»." },
        ],
      },
      {
        stop: "wartburg",
        heading: "La Biblia en alemán",
        blocks: [
          { type: "p", text: "El emperador lo declaró fuera de la ley, y cualquiera podía matarlo. Pero su protector, el príncipe Federico de Sajonia, simuló un secuestro y lo escondió en el castillo de Wartburg. Allí, disfrazado de caballero, Lutero tradujo el Nuevo Testamento al alemán en solo once semanas. La Biblia completa salió en 1534 y ayudó a formar la lengua alemana moderna." },
          { type: "p", text: "La Reforma se extendió rápidamente por Alemania y Escandinavia. Pero también tuvo caras oscuras: cuando los campesinos se rebelaron en 1525, en parte inspirados por sus ideas, Lutero pidió a los príncipes que los aplastaran sin piedad. Y en sus últimos años escribió textos terribles contra los judíos, que siglos después utilizaron los nazis." },
        ],
      },
      {
        stop: "augsburgo",
        heading: "Augsburgo: de la división al diálogo",
        blocks: [
          { type: "p", text: "En 1530, los luteranos presentaron su credo en la ciudad de Augsburgo: la «Confesión de Augsburgo». Tras años de guerra, en 1555 la Paz de Augsburgo estableció que cada príncipe decidiría la religión de su territorio, y sus súbditos tendrían que seguirla o marcharse." },
          { type: "p", text: "Durante siglos, católicos y luteranos se acusaron de herejía. Pero el 31 de octubre de 1999, en la misma ciudad de Augsburgo, la Iglesia católica y la Federación Luterana Mundial firmaron una declaración conjunta en la que reconocen que comparten lo esencial sobre la justificación por la fe, el tema que les había separado." },
          { type: "fact", label: "500 años después", text: "En 2016, el papa Francisco viajó a Lund (Suecia) para participar con los luteranos en la conmemoración de los 500 años de la Reforma. Algo impensable durante siglos." },
        ],
      },
    ],
    relatedPills: ["catolicos-ortodoxos-protestantes", "73-o-66-libros"],
    quiz: [
      question("s7e2-tesis", "¿Contra qué protestaban principalmente las 95 tesis de Lutero?", ["Contra el emperador", "Contra la venta de indulgencias", "Contra los turcos", "Contra la Biblia"], 1, "Se predicaban para pagar la nueva basílica de San Pedro."),
      question("s7e2-sola", "¿Qué significa «solo la Escritura» para Lutero?", ["Que solo hay que leer el Nuevo Testamento", "Que la Biblia es la única autoridad en la fe", "Que no hay que leer la Biblia", "Que solo los curas pueden leerla"], 1, "Por encima de papas y concilios."),
      question("s7e2-1999", "¿Qué firmaron católicos y luteranos en Augsburgo en 1999?", ["Una paz tras una guerra", "Una declaración conjunta sobre la justificación por la fe", "La unión de las dos Iglesias", "Un nuevo Credo"], 1, "Reconocen que comparten lo esencial en el tema que les separó."),
    ],
    sources: [
      { text: "Martín Lutero, 95 tesis (1517); Declaración conjunta sobre la doctrina de la justificación (1999)" },
      { text: "Heinz Schilling, Martín Lutero. Rebelde en una época de cambio radical, Herder, 2016" },
      { text: "Lyndal Roper, Martín Lutero. Renegado y profeta, Taurus, 2017" },
    ],
    next: "En el próximo episodio: Zúrich, Ginebra, Londres. La Reforma se multiplica: Zuinglio, Calvino, los anabaptistas y el rey Enrique VIII.",
  },
});
