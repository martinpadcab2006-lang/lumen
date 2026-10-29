import { makeEpisode } from "../make";
import { holyLand, library } from "./library";

const places = { nazaret: holyLand.nazaret, seforis: holyLand.seforis, jerusalen: holyLand.jerusalen, cafarnaum: holyLand.cafarnaum };

export const laInfanciaDeJesus = makeEpisode({
  slug: "la-infancia-de-jesus",
  title: "La infancia y la juventud de Jesús",
  period: "c. 4 a. C. – c. 28 d. C.",
  cover: "Sagrada_Familia_del_pajarito_(Murillo).jpg",
  places,
  stops: [
    { id: "silencio", year: "c. 4 a. C. – 28 d. C.", place: "nazaret" },
    { id: "familia", year: "Siglo I", place: "nazaret" },
    { id: "oficio", year: "Siglo I", place: "seforis" },
    { id: "lenguas", year: "Siglo I", place: "nazaret" },
    { id: "templo", year: "c. 8 d. C.", place: "jerusalen" },
    { id: "pintores", year: "Siglos XVII – XIX", place: "nazaret" },
  ],
  library: { ...library, places },
  version: {
    title: "La infancia y la juventud de Jesús",
    inAMinute: [
      "De los treinta primeros años de Jesús, los evangelios casi no cuentan nada.",
      "Creció en Nazaret, una aldea de unos cientos de habitantes, en una familia judía.",
      "Los evangelios mencionan a sus hermanos y hermanas; las iglesias los interpretan de maneras distintas.",
      "Era tékton: artesano de la madera y la construcción, como José.",
      "Lucas cuenta que a los doce años se quedó en el Templo hablando con los maestros.",
    ],
    intro:
      "Nos pasamos la vida viendo a Jesús niño en los belenes y a Jesús adulto en las procesiones. ¿Y entre medias? Treinta años de los que los evangelios apenas dicen una frase. Vamos a ver qué se sabe, qué se imagina y qué se inventó.",
    sections: [
      {
        stop: "silencio",
        heading: "Treinta años casi en silencio",
        blocks: [
          { type: "p", text: "Después de los relatos del nacimiento, los evangelios dan un salto enorme: de Jesús bebé a Jesús adulto, con unos treinta años, que se hace bautizar en el Jordán. Solo Lucas cuenta un episodio intermedio, a los doce años, y lo resume todo con una frase: el niño «crecía en sabiduría, en estatura y en gracia»." },
          { type: "p", text: "Ese silencio despertó la imaginación. En los siglos II y III aparecieron textos que contaban la infancia de Jesús con todo lujo de milagros: un niño que da vida a pájaros de barro o que castiga a otros niños que le molestan. Son los llamados evangelios apócrifos de la infancia. La Iglesia no los incluyó en la Biblia, y los historiadores los consideran leyendas, aunque algunos detalles pasaron al arte y a las tradiciones." },
          { type: "fact", label: "¿Sabías que…?", text: "Los nombres de los padres de María, Joaquín y Ana, no aparecen en la Biblia. Vienen de un evangelio apócrifo del siglo II, el Protoevangelio de Santiago." },
        ],
      },
      {
        stop: "familia",
        heading: "Una familia de Nazaret",
        blocks: [
          { type: "p", text: "Jesús creció en Nazaret, una aldea agrícola de Galilea de apenas unos cientos de habitantes. Su madre era María y su padre, ante la gente, José. En el evangelio de Marcos, los vecinos se preguntan: «¿No es este el artesano, el hijo de María, el hermano de Santiago, José, Judas y Simón? ¿Y sus hermanas no viven aquí con nosotros?»." },
          { type: "illustration", id: "casa" },
          { type: "p", text: "¿Tuvo Jesús hermanos? Aquí las iglesias no coinciden. Para los católicos y los ortodoxos, María fue siempre virgen, y esos «hermanos» serían primos o hijos de un matrimonio anterior de José: en arameo y en hebreo, «hermano» podía usarse para parientes cercanos. Muchos protestantes y bastantes historiadores entienden que eran hermanos en sentido estricto." },
          { type: "p", text: "Uno de ellos, Santiago, fue después el líder de la comunidad cristiana de Jerusalén. Josefo cuenta su ejecución en el año 62." },
          { type: "illustration", id: "pan" },
        ],
      },
      {
        stop: "oficio",
        heading: "Un artesano de la madera y la piedra",
        blocks: [
          { type: "p", text: "Los evangelios dicen que Jesús, y antes José, era tékton. Solemos traducirlo por «carpintero», pero la palabra griega es más amplia: alguien que trabaja con las manos en la construcción, con madera y también con piedra. Hacía puertas, vigas, arados, muebles sencillos." },
          { type: "image", id: "millais" },
          { type: "p", text: "A unos seis kilómetros de Nazaret estaba Séforis, la ciudad que Herodes Antipas reconstruyó a la romana cuando Jesús era niño. Algunos historiadores piensan que José y Jesús pudieron trabajar allí, donde había mucha obra. Es una hipótesis atractiva, pero no hay ninguna fuente que lo diga." },
          { type: "fact", label: "Ojo a las parábolas", text: "En sus parábolas, Jesús habla de casas construidas sobre roca o sobre arena, de torres que hay que calcular antes de construir, de yugos que deben ser suaves. Son imágenes de alguien que conoce el oficio." },
        ],
      },
      {
        stop: "lenguas",
        heading: "¿Qué hablaba? ¿Sabía leer?",
        blocks: [
          { type: "p", text: "La lengua de Jesús era el arameo, la lengua común de la región. Los evangelios conservan algunas palabras suyas en arameo: «Talitha kum» («niña, levántate») o «Abbá» («papá», «padre»), la forma cariñosa con la que se dirigía a Dios." },
          { type: "p", text: "Probablemente entendía el hebreo de las Escrituras, que se leían en la sinagoga. Quizá chapurreaba algo de griego para tratar con comerciantes. Latín, casi seguro que no." },
          { type: "illustration", id: "sinagoga" },
          { type: "p", text: "¿Sabía leer? En aquella época, la gran mayoría de la gente no sabía. Lucas cuenta que Jesús leyó un pasaje de Isaías en la sinagoga de Nazaret, y discutía con los maestros sobre la Ley. Muchos especialistas creen que sabía leer las Escrituras; otros lo dudan. No dejó nada escrito." },
        ],
      },
      {
        stop: "templo",
        heading: "Perdido en el Templo",
        blocks: [
          { type: "p", text: "El único episodio de la infancia que cuentan los evangelios es este. Cuando Jesús tenía doce años, su familia subió a Jerusalén por la Pascua, como cada año. Al volver, en una caravana con parientes y vecinos, María y José se dieron cuenta de que el niño no iba con ellos." },
          { type: "image", id: "tissotTemplo" },
          { type: "p", text: "Lo encontraron tres días después en el Templo, sentado entre los maestros, escuchándolos y haciéndoles preguntas. Cuando su madre le riñe, Jesús responde algo que ellos no entienden: «¿No sabíais que yo debía estar en las cosas de mi Padre?»." },
          { type: "image", id: "holmanHunt" },
          { type: "p", text: "A los doce o trece años, un chico judío empezaba a ser responsable de cumplir la Ley. Lucas usa la escena para mostrar que Jesús ya era alguien especial, en relación única con Dios." },
        ],
      },
      {
        stop: "pintores",
        heading: "Cómo lo imaginaron los pintores",
        blocks: [
          { type: "p", text: "Como los evangelios no cuentan casi nada, los artistas rellenaron el hueco con su propia época. Murillo pintó a la Sagrada Familia como una familia sevillana del siglo XVII: José en su banco de carpintero, María devanando hilo y el niño jugando con un pajarito y un perrito." },
          { type: "image", id: "murillo" },
          { type: "p", text: "Dos siglos después, el inglés Millais pintó el taller de José con un realismo que escandalizó a muchos: virutas por el suelo, uñas sucias y un niño que se ha herido la mano con un clavo. Su manera de recordar, sin palabras, la cruz que vendría después." },
          { type: "p", text: "Treinta años después, aquel artesano de Nazaret dejó el taller y se fue al desierto, donde predicaba un profeta extraño vestido con piel de camello." },
        ],
      },
    ],
    relatedPills: ["existio-jesus", "por-que-la-navidad-es-el-25-de-diciembre"],
    quiz: [
      { id: "s1e8-tekton", prompt: "¿Qué significa tékton, el oficio de Jesús y de José?", options: [{ id: "a", text: "Pescador" }, { id: "b", text: "Artesano de la madera y la construcción" }, { id: "c", text: "Maestro de la Ley" }, { id: "d", text: "Pastor" }], correctId: "b", explanation: "Solemos traducirlo por «carpintero», pero incluye el trabajo con piedra y la construcción." },
      { id: "s1e8-arameo", prompt: "¿Qué lengua hablaba Jesús en casa?", options: [{ id: "a", text: "Latín" }, { id: "b", text: "Griego" }, { id: "c", text: "Arameo" }, { id: "d", text: "Árabe" }], correctId: "c", explanation: "Los evangelios conservan algunas palabras suyas en arameo, como «Abbá» o «Talitha kum»." },
      { id: "s1e8-templo", prompt: "¿Qué edad tenía Jesús cuando se quedó en el Templo?", options: [{ id: "a", text: "7 años" }, { id: "b", text: "12 años" }, { id: "c", text: "18 años" }, { id: "d", text: "30 años" }], correctId: "b", explanation: "Lo cuenta el evangelio de Lucas (2, 41-52)." },
    ],
    sources: [
      { text: "Evangelio de Marcos 6, 3; evangelio de Lucas 2, 41-52 y 4, 16-30" },
      { text: "Flavio Josefo, Antigüedades judías XX, 200 (Santiago)" },
      { text: "Aurelio de Santos Otero (ed.), Los evangelios apócrifos, BAC" },
    ],
    next: "En el próximo episodio: un profeta en el desierto, un bautismo en el río Jordán y el momento en que Jesús deja Nazaret para siempre.",
  },
});
