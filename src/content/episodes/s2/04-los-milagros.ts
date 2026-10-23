import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  cana: holyLand.cana,
  cafarnaum: holyLand.cafarnaum,
  betsaida: holyLand.betsaida,
  betania: holyLand.betania,
  jerusalen: holyLand.jerusalen,
};

export const losMilagros = makeEpisode({
  slug: "los-milagros",
  title: "Los milagros",
  period: "c. 28 – 30",
  cover: "Paolo Veronese, The Wedding at Cana.JPG",
  places,
  stops: [
    { id: "fama", year: "c. 28 – 30", place: "cafarnaum" },
    { id: "tipos", year: "c. 28 – 30", place: "betsaida" },
    { id: "cana", year: "c. 28", place: "cana" },
    { id: "lazaro", year: "c. 30", place: "betania" },
    { id: "historia", year: "Hoy", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "Los milagros",
    inAMinute: [
      "Los evangelios cuentan unos treinta milagros de Jesús: curaciones, expulsiones de demonios y prodigios sobre la naturaleza.",
      "Incluso sus enemigos admitían que hacía cosas extraordinarias, aunque decían que con el poder del demonio.",
      "Para los evangelios, los milagros son «signos» de que el Reino de Dios está llegando.",
      "La historia no puede decir si un milagro ocurrió; sí puede decir que Jesús tenía fama de sanador.",
      "Creyentes y no creyentes los interpretan de maneras muy distintas.",
    ],
    intro:
      "Agua convertida en vino, ciegos que recuperan la vista, una tormenta que se calma, un muerto que sale de la tumba. Los milagros son una parte enorme de los evangelios y una de las más difíciles de tratar. Vamos con calma: qué cuentan, qué significaban entonces y qué puede decir un historiador.",
    sections: [
      {
        stop: "fama",
        heading: "Un sanador famoso",
        blocks: [
          { type: "p", text: "Lo que más multitudes atraía hacia Jesús no eran sus palabras, sino su fama de curar. Los evangelios cuentan que le llevaban enfermos de toda Galilea, que la gente intentaba tocar su manto y que a veces no podía ni entrar en los pueblos." },
          { type: "p", text: "Un dato curioso: sus adversarios no negaban que hiciera cosas extraordinarias. Lo que decían es que las hacía con el poder de Belcebú, el príncipe de los demonios. Siglos después, algunos textos judíos lo recuerdan como alguien que practicaba la «hechicería». Es decir, todos coincidían en que pasaba algo; discutían de dónde venía." },
          { type: "fact", label: "Lo que dice Josefo", text: "En el pasaje sobre Jesús de Flavio Josefo, incluso en la parte que los especialistas consideran auténtica, se le describe como alguien que hacía «obras sorprendentes»." },
        ],
      },
      {
        stop: "tipos",
        heading: "Tres tipos de milagros",
        blocks: [
          {
            type: "words",
            items: [
              { term: "Curaciones", meaning: "Las más numerosas: ciegos, sordos, paralíticos, leprosos, una mujer con hemorragias. Muchas veces Jesús toca al enfermo, algo que la ley de pureza desaconsejaba." },
              { term: "Exorcismos", meaning: "Expulsar demonios de personas que, según la mentalidad de la época, estaban poseídas. Hoy muchos de esos casos se interpretarían como enfermedades mentales o epilepsia." },
              { term: "Prodigios sobre la naturaleza", meaning: "Calmar una tormenta, caminar sobre el agua, multiplicar panes y peces. Son los más difíciles de valorar para un historiador." },
            ],
          },
          { type: "p", text: "Junto a ellos, los evangelios cuentan tres resurrecciones: la hija de Jairo, el hijo de una viuda de Naín y Lázaro." },
          { type: "fact", label: "No era el único", text: "En la Antigüedad había otros personajes con fama de hacer milagros, judíos como Honi «el trazador de círculos», que hacía llover, y paganos. Lo que distingue los relatos sobre Jesús es que los presenta como señales del Reino de Dios, no como espectáculo." },
        ],
      },
      {
        stop: "cana",
        heading: "Una boda sin vino",
        blocks: [
          { type: "p", text: "El evangelio de Juan cuenta que el primer «signo» de Jesús fue en una boda en Caná, un pueblo de Galilea. Las bodas duraban varios días, y quedarse sin vino era una vergüenza enorme para la familia." },
          { type: "image", id: "cana" },
          { type: "p", text: "Según el relato, María avisa a Jesús, y él manda llenar de agua seis grandes tinajas de piedra. Cuando sirven, el agua se ha convertido en un vino excelente, mejor que el del principio. Juan no lo cuenta como un truco: el vino abundante era un símbolo de la alegría del tiempo del Mesías." },
          { type: "p", text: "Los evangelios casi nunca usan la palabra «milagro». Marcos, Mateo y Lucas hablan de «obras de poder»; Juan, de «signos». Lo importante no era el prodigio, sino lo que señalaba." },
        ],
      },
      {
        stop: "lazaro",
        heading: "Lázaro, sal fuera",
        blocks: [
          { type: "p", text: "El relato más espectacular está en el evangelio de Juan. Lázaro, amigo de Jesús y hermano de Marta y María, muere en Betania, cerca de Jerusalén. Cuando Jesús llega, lleva cuatro días enterrado. Jesús llora, manda quitar la piedra y lo llama: «¡Lázaro, sal fuera!». Y el muerto sale, envuelto todavía en las vendas." },
          { type: "image", id: "lazaro" },
          { type: "p", text: "Según Juan, este signo fue lo que decidió a las autoridades a acabar con Jesús: si seguía así, todo el mundo creería en él y los romanos intervendrían." },
        ],
      },
      {
        stop: "historia",
        heading: "¿Qué puede decir un historiador?",
        blocks: [
          { type: "p", text: "Un historiador no puede demostrar que un milagro ocurrió, porque su método solo trabaja con lo que se puede explicar con causas naturales. Pero tampoco puede demostrar que no ocurrió. Esa pregunta pertenece a la fe o a la filosofía." },
          { type: "p", text: "Lo que sí acepta la mayoría de los especialistas es que Jesús tuvo fama de sanador y exorcista en vida, que mucha gente que lo conoció creyó verle hacer curaciones extraordinarias, y que eso forma parte del núcleo más antiguo de los recuerdos sobre él." },
          { type: "p", text: "A partir de ahí, las interpretaciones se separan. Para los creyentes, los milagros muestran que en Jesús actuaba Dios. Para otros, pueden explicarse por la fuerza de la sugestión, por enfermedades psicosomáticas o por cómo crecen las historias al contarse. Lumen te cuenta las dos miradas: la decisión es tuya." },
        ],
      },
    ],
    relatedPills: ["existio-jesus"],
    quiz: [
      question("s2e4-cana", "Según Juan, ¿cuál fue el primer «signo» de Jesús?", ["Caminar sobre el agua", "Convertir el agua en vino en Caná", "Resucitar a Lázaro", "Multiplicar los panes"], 1, "En una boda de Caná, en Galilea (Juan 2)."),
      question("s2e4-enemigos", "¿Qué decían de los milagros los adversarios de Jesús?", ["Que eran trucos de magia baratos", "Que los hacía con el poder del demonio", "Que nunca habían ocurrido", "Que eran cosa de los romanos"], 1, "No negaban que hiciera cosas extraordinarias; discutían de dónde venía su poder."),
      question("s2e4-historiador", "¿Qué puede afirmar un historiador sobre los milagros de Jesús?", ["Que ocurrieron todos", "Que ninguno ocurrió", "Que Jesús tenía fama de sanador en vida", "Nada en absoluto"], 2, "Si ocurrieron o no es una pregunta de fe; la fama de sanador es un dato histórico."),
    ],
    sources: [
      { text: "Evangelio de Marcos 3, 22 y 5; evangelio de Juan 2, 1-11 y 11, 1-53" },
      { text: "John P. Meier, Un judío marginal, vol. 2/2: Los milagros, Verbo Divino, 2000" },
    ],
    next: "En el próximo episodio: el Sermón de la Montaña. «Dichosos los pobres», «amad a vuestros enemigos», «poned la otra mejilla». Las palabras de Jesús que más han influido en la historia.",
  },
});
