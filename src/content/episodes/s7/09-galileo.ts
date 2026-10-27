import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("frombork", "pisa", "padua", "roma", "florencia");

export const galileo = makeEpisode({
  slug: "galileo",
  title: "Galileo: ciencia y fe",
  period: "1543 – 1992",
  cover: "Galileo facing the Roman Inquisition.jpg",
  mapRegion: "europa",
  places,
  stops: [
    { id: "copernico", year: "1543", place: "frombork" },
    { id: "pisa", year: "1564 – 1592", place: "pisa" },
    { id: "telescopio", year: "1609 – 1610", place: "padua" },
    { id: "juicio", year: "1616 – 1633", place: "roma" },
    { id: "arcetri", year: "1633 – 1992", place: "florencia" },
  ],
  library: { ...library, places },
  version: {
    title: "Galileo: ciencia y fe",
    inAMinute: [
      "En 1543, el canónigo Copérnico propuso que la Tierra gira alrededor del Sol.",
      "Galileo, con su telescopio, descubrió las lunas de Júpiter y las fases de Venus, que apoyaban esa idea.",
      "En 1616 la Iglesia prohibió defender el sistema de Copérnico. En 1633 Galileo fue juzgado y condenado.",
      "Pasó sus últimos años arrestado en su casa, pero siguió investigando.",
      "En 1992, el papa Juan Pablo II reconoció que la condena fue un error.",
    ],
    intro:
      "El caso Galileo es el ejemplo más citado de choque entre ciencia y religión. Lo que pasó fue real, y grave. Pero la historia es más complicada que la de un sabio valiente contra unos curas ignorantes: también hubo eclesiásticos científicos, celos, política y mucha soberbia por ambas partes.",
    sections: [
      {
        stop: "copernico",
        heading: "Un canónigo pone el Sol en el centro",
        blocks: [
          { type: "p", text: "Durante siglos, casi todos pensaban, siguiendo a Aristóteles y a Ptolomeo, que la Tierra estaba quieta en el centro del universo y que el Sol y los planetas giraban a su alrededor. Además, algunos pasajes de la Biblia parecían decirlo." },
          { type: "p", text: "Nicolás Copérnico, un canónigo de la catedral de Frombork, en Polonia, propuso que era al revés: la Tierra y los planetas giran alrededor del Sol. Publicó su libro en 1543, el año de su muerte, y se lo dedicó al papa Pablo III. Al principio, a la Iglesia católica no le preocupó demasiado; a algunos reformadores protestantes, sí." },
        ],
      },
      {
        stop: "pisa",
        heading: "El joven Galileo",
        blocks: [
          { type: "character", id: "galileo" },
          { type: "p", text: "Galileo nació en Pisa en 1564. Fue un gran experimentador: estudió el movimiento de los péndulos y la caída de los cuerpos, y defendió que la naturaleza está escrita en lenguaje matemático. La famosa historia de que dejó caer bolas desde la torre inclinada de Pisa la contó un discípulo suyo, y muchos historiadores dudan de que ocurriera." },
        ],
      },
      {
        stop: "telescopio",
        heading: "Lo que se ve por el telescopio",
        blocks: [
          { type: "p", text: "En 1609, siendo profesor en Padua, Galileo oyó hablar de un invento holandés para ver de lejos. Construyó su propio telescopio, lo mejoró y lo apuntó al cielo. Lo que vio cambió la astronomía: montañas y cráteres en la Luna, miles de estrellas invisibles a simple vista, cuatro lunas que giraban alrededor de Júpiter y, poco después, las fases de Venus." },
          { type: "image", id: "galileo" },
          { type: "p", text: "Publicó sus descubrimientos en 1610 y se hizo famoso en toda Europa. Los astrónomos jesuitas del Colegio Romano comprobaron sus observaciones y le recibieron con honores en Roma en 1611." },
        ],
      },
      {
        stop: "juicio",
        heading: "La condena",
        blocks: [
          { type: "p", text: "Las fases de Venus y las lunas de Júpiter apoyaban a Copérnico, pero todavía no eran una prueba definitiva de que la Tierra se moviera. Galileo defendió la teoría con mucha seguridad, y también sostuvo que la Biblia no enseña astronomía: «enseña cómo se va al cielo, no cómo va el cielo»." },
          { type: "p", text: "En 1616, unos teólogos consultados por la Inquisición declararon que la teoría de Copérnico era contraria a la Escritura, y el cardenal Roberto Belarmino advirtió a Galileo de que no la defendiera. En 1632, Galileo publicó un libro, el «Diálogo», en el que la defendía de forma apenas disimulada y ponía los argumentos del papa en boca de un personaje llamado Simplicio. El papa Urbano VIII, que había sido su amigo, se sintió traicionado." },
          { type: "image", id: "galileoJuicio" },
          { type: "p", text: "En 1633, con casi setenta años, Galileo fue juzgado por la Inquisición en Roma, amenazado con la tortura y obligado a abjurar, es decir, a declarar de rodillas que rechazaba la idea de que la Tierra se mueve." },
          { type: "fact", label: "«Y sin embargo, se mueve»", text: "Se dice que, al levantarse, Galileo murmuró: «Eppur si muove», «y sin embargo, se mueve». La frase aparece por primera vez más de un siglo después, en 1757. Es casi seguro que nunca la dijo." },
        ],
      },
      {
        stop: "arcetri",
        heading: "Arresto en casa y rehabilitación",
        blocks: [
          { type: "p", text: "Galileo fue condenado a prisión, que se convirtió en arresto domiciliario en su villa de Arcetri, junto a Florencia. No dejó de trabajar: allí escribió su obra científica más importante, sobre el movimiento y la resistencia de los materiales, que se publicó en Holanda en 1638. Se quedó ciego y murió en 1642, el año en que nació Isaac Newton." },
          { type: "p", text: "Con el tiempo, la Iglesia rectificó. En el siglo XVIII se retiraron de la lista de libros prohibidos las obras que defendían que la Tierra se mueve. Y en 1992, tras años de estudio por una comisión, el papa Juan Pablo II reconoció públicamente que la condena de Galileo fue un error." },
          { type: "fact", label: "Curas científicos", text: "La relación entre ciencia y fe ha tenido muchos más capítulos de colaboración que de conflicto. Por ejemplo, la teoría del Big Bang la propuso en 1927 un sacerdote católico belga, Georges Lemaître, y las leyes de la herencia genética las descubrió un monje agustino, Gregor Mendel." },
        ],
      },
    ],
    quiz: [
      question("s7e9-copernico", "¿Quién propuso en 1543 que la Tierra gira alrededor del Sol?", ["Galileo", "Copérnico, un canónigo polaco", "Newton", "Aristóteles"], 1, "Dedicó su libro al papa Pablo III."),
      question("s7e9-telescopio", "¿Qué descubrió Galileo con su telescopio?", ["Los anillos de Saturno y Plutón", "Las lunas de Júpiter, las fases de Venus y las montañas de la Luna", "La gravedad", "Que la Tierra es plana"], 1, "Lo publicó en 1610."),
      question("s7e9-1992", "¿Qué hizo el papa Juan Pablo II en 1992?", ["Canonizar a Galileo", "Reconocer que la condena de Galileo fue un error", "Prohibir sus libros", "Fundar un observatorio"], 1, "Tras el trabajo de una comisión de estudio."),
    ],
    sources: [
      { text: "Galileo Galilei, El mensajero sideral (1610) y Carta a Cristina de Lorena (1615)" },
      { text: "Juan Pablo II, discurso a la Academia Pontificia de las Ciencias (31 de octubre de 1992)" },
      { text: "William R. Shea y Mariano Artigas, Galileo en Roma, Encuentro, 2003" },
    ],
    next: "En el próximo episodio, el último de la temporada: razón, tolerancia y críticas a las Iglesias. La Ilustración.",
  },
});
