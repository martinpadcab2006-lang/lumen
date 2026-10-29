import { makeEpisode } from "../make";
import { holyLand, library } from "./library";

const places = {
  cafarnaum: holyLand.cafarnaum,
  magdala: holyLand.magdala,
  nazaret: holyLand.nazaret,
  tiberiades: holyLand.tiberiades,
  jerusalen: holyLand.jerusalen,
};

export const elReinoDeDios = makeEpisode({
  slug: "el-reino-de-dios",
  title: "El Reino de Dios",
  period: "c. 28 – 30",
  cover: "Bloch-SermonOnTheMount.jpg",
  places,
  stops: [
    { id: "palabras", year: "c. 28", place: "cafarnaum" },
    { id: "significado", year: "c. 28", place: "cafarnaum" },
    { id: "parabolas", year: "c. 28 – 30", place: "magdala" },
    { id: "ultimos", year: "c. 28 – 30", place: "nazaret" },
    { id: "peligro", year: "c. 30", place: "tiberiades" },
    { id: "final", year: "c. 30", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "El Reino de Dios",
    inAMinute: [
      "La idea central de la predicación de Jesús fue el «Reino de Dios».",
      "No era un lugar, sino que Dios reine: que su voluntad de justicia y de amor se haga realidad.",
      "Jesús lo explicaba con parábolas: un grano de mostaza, un poco de levadura, un tesoro escondido.",
      "Lo anunciaba sobre todo a los pobres, los enfermos y los mal vistos, y comía con ellos.",
      "Hablar de otro «reino» en un territorio de Roma y de Herodes era peligroso.",
    ],
    intro:
      "Si tuviéramos que resumir en dos palabras lo que predicó Jesús, serían estas: Reino de Dios. Aparecen decenas de veces en los evangelios. Pero ¿qué significaban? ¿Un país? ¿El cielo? ¿Una revolución? Con este episodio cerramos la primera temporada.",
    sections: [
      {
        stop: "palabras",
        heading: "Dos palabras que lo cambian todo",
        blocks: [
          { type: "p", text: "Tras el arresto de Juan, Jesús se instaló en Cafarnaúm, un pueblo de pescadores a orillas del lago de Galilea. Según Marcos, su primer mensaje fue este: «Se ha cumplido el plazo, está cerca el Reino de Dios: cambiad de vida y creed en la buena noticia»." },
          { type: "image", id: "cafarnaum" },
          { type: "p", text: "La expresión no era nueva: los judíos rezaban para que Dios reinara sobre el mundo. Lo nuevo era la urgencia y la forma en que Jesús la explicaba. El evangelio de Mateo, por respeto judío al nombre de Dios, dice casi siempre «Reino de los cielos». Significa lo mismo." },
        ],
      },
      {
        stop: "significado",
        heading: "No es un sitio, es que Dios reine",
        blocks: [
          { type: "p", text: "El Reino de Dios no es un territorio con fronteras ni, en primer lugar, el cielo al que se va al morir. Es la situación en la que Dios reina: cuando su voluntad de justicia, de perdón y de cuidado por los débiles se hace realidad." },
          { type: "p", text: "Jesús lo presentaba como algo que ya estaba empezando, en lo que él hacía, pero que todavía no había llegado del todo. Por eso enseñó a sus discípulos a pedir: «Venga tu Reino, hágase tu voluntad en la tierra como en el cielo». Es el Padrenuestro, la oración cristiana más rezada del mundo." },
          { type: "quote", text: "Padre nuestro, que estás en el cielo, santificado sea tu nombre, venga a nosotros tu Reino.", source: "Mateo 6, 9-10 (versión litúrgica)" },
          { type: "fact", label: "Historia y fe", text: "Los historiadores coinciden en que el Reino de Dios estaba en el centro de la predicación de Jesús. Lo que discuten es si él esperaba un final inminente de la historia o un cambio más gradual." },
        ],
      },
      {
        stop: "parabolas",
        heading: "Contado con historias",
        blocks: [
          { type: "p", text: "Jesús casi nunca daba definiciones. Contaba parábolas: historias cortas sacadas de la vida diaria del campo, la pesca o la casa, que acababan con un giro sorprendente y dejaban pensando." },
          {
            type: "words",
            items: [
              { term: "El grano de mostaza", meaning: "La semilla más pequeña se convierte en un arbusto donde anidan los pájaros. El Reino empieza en lo pequeño." },
              { term: "La levadura", meaning: "Una mujer mete un poco de levadura en mucha harina y fermenta toda la masa. El Reino transforma desde dentro." },
              { term: "El tesoro escondido", meaning: "Un hombre encuentra un tesoro en un campo, vende todo lo que tiene y compra el campo. El Reino vale más que todo." },
              { term: "La red", meaning: "Unos pescadores sacan la red con peces buenos y malos, y los separan en la orilla. Al final llegará un juicio." },
            ],
          },
          { type: "image", id: "bruegel" },
          { type: "p", text: "Las parábolas tienen su propio episodio en la temporada 2. Ahí veremos las más famosas: el hijo pródigo, el buen samaritano o el sembrador." },
        ],
      },
      {
        stop: "ultimos",
        heading: "Un Reino para los últimos",
        blocks: [
          { type: "p", text: "Lo que más chocaba es a quién iba dirigido. Según Lucas, en la sinagoga de Nazaret Jesús leyó un texto de Isaías: «El Espíritu del Señor está sobre mí; me ha enviado a anunciar la buena noticia a los pobres, la libertad a los cautivos y la vista a los ciegos»." },
          { type: "image", id: "tissotSinagoga" },
          { type: "p", text: "En el gran sermón que recoge Lucas, sus primeras palabras son: «Dichosos los pobres, porque vuestro es el Reino de Dios». Curaba a enfermos que la sociedad apartaba, tocaba a leprosos y comía con recaudadores de impuestos y gente de mala fama. Sus críticos lo llamaban «comilón y borracho, amigo de publicanos y pecadores»." },
          { type: "image", id: "bloch" },
          { type: "p", text: "Para Jesús, esas comidas compartidas eran una imagen del Reino: un gran banquete donde caben todos, empezando por los que nadie invita." },
        ],
      },
      {
        stop: "peligro",
        heading: "Un mensaje peligroso",
        blocks: [
          { type: "p", text: "Piensa en cómo sonaba. En un territorio dominado por el emperador de Roma y gobernado por Herodes Antipas, un predicador anuncia que llega «otro» reino, el de Dios, en el que los últimos serán los primeros." },
          { type: "p", text: "Jesús no organizó un ejército ni llamó a la rebelión armada. Pero hablar de «reino» y atraer multitudes era suficiente para que las autoridades se pusieran nerviosas. Ya habían visto cómo acabó Juan." },
          { type: "character", id: "pilato" },
          { type: "p", text: "Ese malentendido, o esa amenaza, según quién lo mirara, acabaría resumido en un cartel clavado en una cruz: «Jesús de Nazaret, rey de los judíos». Pero eso pertenece al final de la historia." },
        ],
      },
      {
        stop: "final",
        heading: "Fin de la primera temporada",
        blocks: [
          { type: "p", text: "Hasta aquí, los orígenes. Ya conoces el mundo en el que nació el cristianismo: el Imperio romano, el judaísmo con su Templo y sus esperanzas, las fuentes que tenemos sobre Jesús, su nacimiento, sus años en Nazaret, el profeta Juan y el mensaje del Reino." },
          { type: "p", text: "En la segunda temporada seguiremos a Jesús durante los dos o tres años de su vida pública: los apóstoles, las parábolas, los milagros, los conflictos y la última semana en Jerusalén. Lo que pasó en esos días cambió el calendario del mundo." },
        ],
      },
    ],
    relatedPills: ["por-que-descansamos-el-domingo", "existio-jesus"],
    quiz: [
      { id: "s1e10-reino", prompt: "¿Qué quería decir «Reino de Dios»?", options: [{ id: "a", text: "Un país con fronteras" }, { id: "b", text: "Que Dios reine y su voluntad de justicia se haga realidad" }, { id: "c", text: "El nombre de Jerusalén" }, { id: "d", text: "Un ejército contra Roma" }], correctId: "b", explanation: "No es un lugar, sino una situación: Dios reinando en el mundo." },
      { id: "s1e10-mostaza", prompt: "¿Qué enseña la parábola del grano de mostaza?", options: [{ id: "a", text: "Que hay que ahorrar" }, { id: "b", text: "Que el Reino empieza pequeño y crece" }, { id: "c", text: "Que la mostaza es sagrada" }, { id: "d", text: "Que hay que sembrar en primavera" }], correctId: "b", explanation: "La semilla más pequeña acaba siendo un arbusto donde anidan los pájaros." },
      { id: "s1e10-cafarnaum", prompt: "¿En qué pueblo se instaló Jesús al empezar a predicar?", options: [{ id: "a", text: "Belén" }, { id: "b", text: "Jerusalén" }, { id: "c", text: "Cafarnaúm" }, { id: "d", text: "Jericó" }], correctId: "c", explanation: "Un pueblo de pescadores a orillas del lago de Galilea." },
    ],
    sources: [
      { text: "Evangelio de Marcos 1, 14-15 y 4; evangelio de Mateo 5 – 6 y 13; evangelio de Lucas 4, 16-21 y 7, 34" },
      { text: "José Antonio Pagola, Jesús. Aproximación histórica, PPC, 2007" },
      { text: "John P. Meier, Un judío marginal, vol. 2/1, Verbo Divino, 1999" },
    ],
    next: "Temporada 2, episodio 1: la vida pública de Jesús. Tres años por Galilea y Judea que cambiaron la historia.",
  },
});
