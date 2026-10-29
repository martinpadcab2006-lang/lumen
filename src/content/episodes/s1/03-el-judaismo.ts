import { descubre as chapterOne } from "../../chapters/01-el-mundo-de-jesus/descubre";
import type { Section } from "../../chapter-types";
import { makeEpisode } from "../make";
import { holyLand, library } from "./library";

const fromChapterOne = (stop: string): Section["blocks"] => chapterOne.sections.find((section) => section.stop === stop)?.blocks ?? [];

export const elJudaismo = makeEpisode({
  slug: "el-judaismo-en-tiempos-de-jesus",
  title: "El judaísmo en tiempos de Jesús",
  period: "Siglo I",
  cover: "Western Wall, Jerusalem, Shavuot.JPG",
  places: holyLand,
  stops: [
    { id: "ley", year: "Siglo I", place: "jerusalen" },
    { id: "templo", year: "Siglo I", place: "jerusalen" },
    { id: "sinagoga", year: "Siglo I", place: "magdala" },
    { id: "fiestas", year: "Siglo I", place: "jerusalen" },
    { id: "grupos", year: "Siglo I", place: "qumran" },
    { id: "judio", year: "Siglo I", place: "nazaret" },
  ],
  library,
  version: {
    title: "El judaísmo en tiempos de Jesús",
    inAMinute: [
      "Jesús y todos sus primeros seguidores eran judíos. Sin el judaísmo no se entiende nada de lo que vino después.",
      "Los judíos creían en un solo Dios, que había hecho una alianza con su pueblo y le había dado la Ley.",
      "El Templo de Jerusalén era el centro de todo; en cada pueblo, la sinagoga era el lugar de lectura y oración.",
      "Las grandes fiestas, como la Pascua, llenaban Jerusalén de peregrinos.",
      "No todos pensaban igual: fariseos, saduceos, esenios y rebeldes discutían cómo ser fieles a Dios.",
    ],
    intro:
      "El cristianismo no cayó del cielo en un mundo vacío. Nació dentro de una religión muy antigua, con su Dios, su libro, su Templo y sus fiestas. Jesús rezaba como judío, iba a la sinagoga cada sábado y subía a Jerusalén por Pascua. Vamos a entrar en ese mundo.",
    sections: [
      {
        stop: "ley",
        heading: "Un solo Dios y una Ley",
        blocks: [
          { type: "p", text: "En un mundo lleno de dioses, los judíos eran una rareza: creían en un único Dios, creador de todo, que no se podía representar con estatuas. Cada mañana y cada tarde rezaban una oración que empieza así: «Escucha, Israel: el Señor es nuestro Dios, el Señor es uno». Se llama Shemá, «escucha», y los judíos la siguen rezando hoy." },
          { type: "p", text: "Creían que ese Dios había elegido a su pueblo y había hecho con él una alianza, un pacto. Él los protegería; ellos vivirían según su Ley. Esa Ley, la Torá, está en los cinco primeros libros de la Biblia, que según la tradición recibió Moisés." },
          { type: "image", id: "tora" },
          { type: "p", text: "La Ley tocaba toda la vida: qué se podía comer y qué no, cómo tratar al extranjero y al pobre, cómo rezar, cómo descansar. Tres prácticas distinguían a los judíos de sus vecinos: descansar el sábado, no comer ciertos alimentos, como el cerdo, y circuncidar a los niños varones." },
          { type: "fact", label: "¿Sabías que…?", text: "El sábado judío empieza el viernes al anochecer y termina el sábado al anochecer. En la Biblia, el día empieza con la puesta de sol." },
        ],
      },
      { stop: "templo", heading: "El Templo, la casa de Dios", blocks: fromChapterOne("templo").filter((block) => block.type !== "fact") },
      {
        stop: "sinagoga",
        heading: "La sinagoga del pueblo",
        blocks: [
          { type: "p", text: "Al Templo solo se iba unas pocas veces al año. La fe del día a día se vivía en casa y en la sinagoga, una sala de reunión que había en muchos pueblos. Allí se juntaban los sábados para rezar, leer las Escrituras y comentarlas. No había sacerdotes ni sacrificios: cualquier hombre adulto podía leer y explicar." },
          { type: "image", id: "magdala" },
          { type: "p", text: "Los evangelios cuentan que Jesús enseñaba en las sinagogas de Galilea. En la de Nazaret, su pueblo, leyó un pasaje del profeta Isaías y dijo que se estaba cumpliendo ese mismo día. A muchos vecinos no les gustó nada." },
          { type: "image", id: "cafarnaum" },
          { type: "fact", label: "Un hallazgo de 2009", text: "En Magdala, a orillas del lago de Galilea, apareció una sinagoga del siglo I con una piedra tallada con el candelabro del Templo. Es una de las pocas sinagogas de la época de Jesús que se han encontrado." },
        ],
      },
      {
        stop: "fiestas",
        heading: "Un año marcado por las fiestas",
        blocks: [
          { type: "p", text: "El calendario judío tenía grandes fiestas que recordaban la historia del pueblo. Tres de ellas eran de peregrinación: quien podía, subía a Jerusalén." },
          {
            type: "words",
            items: [
              { term: "Pascua (Pésaj)", meaning: "En primavera. Recuerda la liberación de la esclavitud en Egipto. Cada familia comía un cordero con pan sin levadura. Jesús murió en una Pascua." },
              { term: "Pentecostés (Shavuot)", meaning: "Cincuenta días después de Pascua. Fiesta de la cosecha del trigo y del regalo de la Ley." },
              { term: "Tabernáculos (Sukot)", meaning: "En otoño. Durante una semana se vivía en cabañas para recordar los años en el desierto." },
              { term: "Día del Perdón (Yom Kipur)", meaning: "El día más solemne: ayuno y petición de perdón. Era el único día en que el sumo sacerdote entraba en el Santo de los Santos." },
            ],
          },
          { type: "illustration", id: "peregrinos" },
          { type: "p", text: "Muchas fiestas cristianas nacieron de estas: la Pascua cristiana celebra la resurrección de Jesús, que ocurrió en la Pascua judía, y Pentecostés cristiano recuerda la venida del Espíritu Santo, cincuenta días después." },
        ],
      },
      { stop: "grupos", heading: "Muchas maneras de ser fiel", blocks: fromChapterOne("grupos") },
      {
        stop: "judio",
        heading: "Jesús, un judío de Galilea",
        blocks: [
          { type: "p", text: "Durante siglos, muchos cristianos olvidaron algo evidente: Jesús era judío. Lo eran María, José, los doce apóstoles y casi todos los primeros creyentes. Jesús rezaba los salmos, conocía la Ley, discutía con los fariseos como discutían entre ellos los maestros judíos y celebraba las fiestas en Jerusalén." },
          { type: "p", text: "Olvidarlo tuvo consecuencias terribles. Durante siglos se acusó a los judíos de la muerte de Jesús, y ese antijudaísmo alimentó persecuciones en la Europa cristiana. En 1965, el Concilio Vaticano II rechazó oficialmente esa acusación y recordó las raíces judías del cristianismo." },
          { type: "image", id: "muro" },
          { type: "p", text: "Para entender lo que Jesús dijo e hizo, hay que leerlo dentro de su judaísmo. Por ejemplo: cuando hablaba de un «Mesías» o del «Reino de Dios», usaba palabras que su gente llevaba siglos esperando. De esa espera trata el episodio que viene después del siguiente." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo", "por-que-semana-santa-cambia-de-fecha", "73-o-66-libros"],
    quiz: [
      { id: "s1e3-shema", prompt: "¿Qué es el Shemá?", options: [{ id: "a", text: "Una fiesta de otoño" }, { id: "b", text: "Una oración que proclama que Dios es uno" }, { id: "c", text: "El nombre del sumo sacerdote" }, { id: "d", text: "Un grupo de rebeldes" }], correctId: "b", explanation: "«Escucha, Israel: el Señor es nuestro Dios, el Señor es uno». Los judíos la rezan dos veces al día." },
      { id: "s1e3-sinagoga", prompt: "¿Qué se hacía en la sinagoga?", options: [{ id: "a", text: "Sacrificios de animales" }, { id: "b", text: "Leer y comentar las Escrituras y rezar" }, { id: "c", text: "Cobrar impuestos para Roma" }, { id: "d", text: "Coronar a los reyes" }], correctId: "b", explanation: "Los sacrificios solo se ofrecían en el Templo de Jerusalén." },
      { id: "s1e3-pascua", prompt: "¿Qué recuerda la Pascua judía?", options: [{ id: "a", text: "La construcción del Templo" }, { id: "b", text: "La cosecha del trigo" }, { id: "c", text: "La liberación de la esclavitud en Egipto" }, { id: "d", text: "La llegada de los romanos" }], correctId: "c", explanation: "Por eso se come pan sin levadura: el pueblo salió de Egipto con prisa." },
    ],
    sources: [
      { text: "Flavio Josefo, Antigüedades judías, libro XVIII" },
      { text: "E. P. Sanders, Judaism: Practice and Belief, 63 BCE – 66 CE, SCM Press, 1992" },
      { text: "Concilio Vaticano II, declaración Nostra aetate, n. 4 (1965)", url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_nostra-aetate_sp.html" },
    ],
    next: "En el próximo episodio: salimos de Judea para ver el gigante que lo controlaba todo. El Imperio romano del siglo I: sus emperadores, sus calzadas, sus legiones y sus dioses.",
  },
});
