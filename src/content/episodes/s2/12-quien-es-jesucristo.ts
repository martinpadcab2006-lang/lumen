import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  nazaret: holyLand.nazaret,
  jerusalen: holyLand.jerusalen,
  cafarnaum: holyLand.cafarnaum,
};

export const quienEsJesucristo = makeEpisode({
  slug: "quien-es-jesucristo",
  title: "¿Quién es Jesucristo?",
  period: "Del siglo I a hoy",
  cover: "Spas vsederzhitel sinay.jpg",
  places,
  stops: [
    { id: "dos", year: "Hoy", place: "nazaret" },
    { id: "titulos", year: "Siglo I", place: "jerusalen" },
    { id: "fe", year: "Siglos I – V", place: "jerusalen" },
    { id: "otros", year: "Hoy", place: "jerusalen" },
    { id: "huella", year: "Hoy", place: "cafarnaum" },
  ],
  library: { ...library, places },
  version: {
    title: "¿Quién es Jesucristo?",
    inAMinute: [
      "Los especialistas distinguen entre el «Jesús histórico» y el «Cristo de la fe».",
      "Sus seguidores le dieron títulos como Mesías, Hijo de Dios, Señor o Hijo del hombre.",
      "Para los cristianos, Jesús es Dios hecho hombre: verdadero Dios y verdadero hombre.",
      "Para el islam es un gran profeta; para el judaísmo, un maestro judío, pero no el Mesías.",
      "Creas o no, es una de las personas que más han influido en la historia.",
    ],
    intro:
      "Hemos seguido a Jesús desde Belén hasta el sepulcro vacío. Cerramos la temporada con la gran pregunta que él mismo hizo a sus discípulos: «¿Quién decís que soy yo?». La respuesta depende de a quién se lo preguntes.",
    sections: [
      {
        stop: "dos",
        heading: "El Jesús de la historia y el Cristo de la fe",
        blocks: [
          { type: "p", text: "Desde el siglo XIX, los estudiosos distinguen dos maneras de hablar de Jesús. El «Jesús histórico» es lo que se puede reconstruir con los métodos de la historia: un judío de Galilea, predicador del Reino de Dios, crucificado hacia el año 30. Es lo que hemos intentado contar en esta temporada cuando hablábamos de «lo que dicen los historiadores»." },
          { type: "p", text: "El «Cristo de la fe» es lo que creen de él sus seguidores: que es el Hijo de Dios, que resucitó y que sigue vivo. No se puede demostrar con documentos, pero es lo que ha movido a miles de millones de personas durante dos mil años." },
          { type: "p", text: "Para un creyente, los dos son la misma persona. Para un no creyente, el primero es un personaje histórico y el segundo, una interpretación. Lumen te cuenta los dos, sin mezclarlos." },
        ],
      },
      {
        stop: "titulos",
        heading: "Los nombres de Jesús",
        blocks: [
          { type: "p", text: "Muy pronto, sus seguidores empezaron a darle títulos que venían de las Escrituras judías. Cada uno dice algo distinto de él." },
          {
            type: "words",
            items: [
              { term: "Mesías o Cristo", meaning: "El ungido esperado por Israel. Se volvió tan habitual que acabó pareciendo un apellido: Jesucristo." },
              { term: "Hijo de Dios", meaning: "En la Biblia se llamaba así al rey o al pueblo. Los cristianos lo entendieron en un sentido único." },
              { term: "Señor", meaning: "En griego, Kýrios: la palabra con la que la Biblia griega traducía el nombre de Dios." },
              { term: "Hijo del hombre", meaning: "El título que Jesús usa más en los evangelios para hablar de sí mismo. Puede significar simplemente «este hombre» o aludir a la figura misteriosa del libro de Daniel." },
            ],
          },
          { type: "fact", label: "En un pez", text: "El símbolo del pez resume varios títulos: en griego, ICHTHYS («pez») son las iniciales de «Jesús, Cristo, de Dios, Hijo, Salvador»." },
        ],
      },
      {
        stop: "fe",
        heading: "Dios y hombre",
        blocks: [
          { type: "p", text: "Durante los primeros siglos, los cristianos discutieron muchísimo cómo entender a Jesús. ¿Era Dios disfrazado de hombre? ¿Un hombre muy especial adoptado por Dios? Los grandes concilios de Nicea (325) y Calcedonia (451) llegaron a una respuesta que hoy aceptan la mayoría de las iglesias: Jesús es verdadero Dios y verdadero hombre, a la vez." },
          { type: "image", id: "pantocrator" },
          { type: "p", text: "Fíjate en el icono del Sinaí: las dos mitades de la cara de Cristo son ligeramente distintas. Una es serena; la otra, más severa. Hay quien ve en ello las dos naturalezas, divina y humana, aunque también puede ser simplemente el estilo del pintor." },
          { type: "p", text: "De estos debates trata la temporada 5, «Qué creen los cristianos»." },
        ],
      },
      {
        stop: "otros",
        heading: "Lo que dicen otras religiones",
        blocks: [
          { type: "p", text: "El judaísmo ve en Jesús a un judío de su tiempo, un maestro, pero no al Mesías: el Mesías debía traer la paz al mundo y eso no ha ocurrido. Algunos pensadores judíos modernos lo han reivindicado como «un hermano judío»." },
          { type: "p", text: "El islam tiene a Jesús, Isa, por uno de los grandes profetas, nacido de la Virgen María, que aparece muchas veces en el Corán; su madre da nombre a una sura entera, la de María. El Corán lo llama incluso Mesías. Pero no lo considera Hijo de Dios, y el Corán dice que no murió en la cruz." },
          { type: "p", text: "Muchos no creyentes lo admiran como un maestro moral, un reformador social o un ejemplo de compasión, sin aceptar nada sobrenatural. Y para algunos hindúes y budistas es un gran maestro espiritual." },
        ],
      },
      {
        stop: "huella",
        heading: "Fin de la segunda temporada",
        blocks: [
          { type: "p", text: "Un artesano de una aldea sin importancia, que no escribió nada, no tuvo ejército ni cargo, predicó quizá dos o tres años y murió ejecutado como un criminal. Dos mil años después, casi tres de cada diez personas del planeta se llaman cristianas, y el mundo cuenta los años a partir de su nacimiento." },
          { type: "p", text: "En la próxima temporada veremos cómo pasó: un puñado de discípulos asustados en Jerusalén se convirtió, en pocas décadas, en comunidades repartidas por todo el Imperio romano. Empieza con un viento fuerte y unas lenguas de fuego." },
        ],
      },
    ],
    relatedPills: ["el-pez-simbolo-cristiano", "que-significa-cristo", "nicea-y-el-credo", "existio-jesus"],
    quiz: [
      question("s2e12-historico", "¿Qué es el «Jesús histórico»?", ["Un evangelio perdido", "Lo que se puede reconstruir de Jesús con los métodos de la historia", "Una película", "La versión católica de Jesús"], 1, "Frente al «Cristo de la fe», lo que creen de él sus seguidores."),
      question("s2e12-islam", "¿Cómo ve el islam a Jesús?", ["No lo menciona", "Como un gran profeta, nacido de la Virgen María", "Como el Hijo de Dios", "Como un falso profeta"], 1, "Se llama Isa y aparece muchas veces en el Corán."),
      question("s2e12-kyrios", "¿Qué significa el título Kýrios, que se le da a Jesús?", ["Maestro", "Señor", "Rey", "Salvador"], 1, "Es la palabra con la que la Biblia griega traducía el nombre de Dios."),
    ],
    sources: [
      { text: "Evangelio de Marcos 8, 27-30; Concilio de Calcedonia (451)" },
      { text: "Corán, sura 3, 45-59; sura 4, 157; sura 19 (Maryam)" },
      { text: "Joseph Ratzinger (Benedicto XVI), Jesús de Nazaret, La Esfera de los Libros, 2007-2012" },
      { text: "Geza Vermes, Jesús el judío, Muchnik, 1977" },
    ],
    next: "Temporada 3, episodio 1: Pentecostés. Cincuenta días después de la Pascua nace la Iglesia.",
  },
});
