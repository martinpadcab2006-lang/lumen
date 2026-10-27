import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("coca", "tesalonica", "milan", "constantinopla", "alejandria", "roma");

export const teodosio = makeEpisode({
  slug: "teodosio",
  title: "Teodosio: religión oficial",
  period: "361 – 395",
  cover: "Disco o Missorium Teodosio MPLdC.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "juliano", year: "361 – 363", place: "constantinopla" },
    { id: "teodosio", year: "347 – 379", place: "coca" },
    { id: "edicto", year: "380", place: "tesalonica" },
    { id: "ambrosio", year: "390", place: "milan" },
    { id: "paganos", year: "391 – 395", place: "alejandria" },
  ],
  library: { ...library, places },
  version: {
    title: "Teodosio: religión oficial",
    inAMinute: [
      "Tras Constantino, un emperador, Juliano, intentó volver al paganismo, pero murió pronto.",
      "Teodosio, un militar nacido en Hispania, llegó a emperador en el 379.",
      "En el año 380, con el Edicto de Tesalónica, hizo del cristianismo niceno la religión oficial del Imperio.",
      "El obispo Ambrosio de Milán le obligó a hacer penitencia por una matanza.",
      "En los años siguientes se prohibieron los sacrificios paganos: los perseguidos pasaron a ser mayoría.",
    ],
    intro:
      "En menos de setenta años, el cristianismo pasó de ser perseguido a ser obligatorio. El emperador que dio el paso definitivo era hispano: Teodosio, nacido probablemente en Coca, en la actual provincia de Segovia.",
    sections: [
      {
        stop: "juliano",
        heading: "Un último intento pagano",
        blocks: [
          { type: "p", text: "Los hijos de Constantino siguieron apoyando al cristianismo, aunque algunos favorecieron a los arrianos. Pero en el año 361 llegó al trono Juliano, un sobrino de Constantino que se había educado como cristiano y había abandonado la fe. Los cristianos lo llamaron «el Apóstata»." },
          { type: "p", text: "Juliano intentó restaurar los templos y los sacrificios, quitó privilegios a la Iglesia y prohibió a los cristianos enseñar literatura clásica. Pero murió en el 363, en una campaña contra los persas, con solo 31 años. Fue el último emperador pagano." },
        ],
      },
      {
        stop: "teodosio",
        heading: "Un emperador hispano",
        blocks: [
          { type: "character", id: "teodosio" },
          { type: "p", text: "Teodosio era hijo de un gran general, también llamado Teodosio. Nació hacia el año 347 en Hispania, probablemente en Cauca, la actual Coca. Tras una derrota terrible de Roma ante los godos en Adrianópolis, en el 378, el emperador Graciano lo llamó para gobernar Oriente." },
          { type: "image", id: "missorium" },
          { type: "p", text: "Una enorme bandeja de plata hecha para celebrar sus diez años en el poder, el Missorium, apareció en 1847 en Almendralejo (Badajoz). Muestra a Teodosio sentado en su trono, con un halo, entre otros dos emperadores." },
        ],
      },
      {
        stop: "edicto",
        heading: "El Edicto de Tesalónica",
        blocks: [
          { type: "p", text: "El 27 de febrero del año 380, en Tesalónica, Teodosio publicó un edicto con Graciano y Valentiniano II. Ordenaba que todos los pueblos del Imperio siguieran la fe que el apóstol Pedro había enseñado a los romanos, la de la Trinidad, tal como la enseñaban el obispo de Roma, Dámaso, y el de Alejandría." },
          { type: "p", text: "A los que no la siguieran se les llamaba «herejes», y se les amenazaba con castigos. Era la primera vez que una forma concreta del cristianismo se convertía en la religión oficial del Imperio. Al año siguiente convocó el Concilio de Constantinopla." },
          { type: "fact", label: "Dos hispanos", text: "Un detalle curioso: el edicto cita como modelo al papa Dámaso, que también era hispano, de la antigua Gallaecia. En ese momento, un emperador y un papa de Hispania marcaban el rumbo del cristianismo." },
        ],
      },
      {
        stop: "ambrosio",
        heading: "Un obispo frente al emperador",
        blocks: [
          { type: "p", text: "En el año 390, tras una revuelta en Tesalónica en la que mataron a un general, Teodosio ordenó un castigo brutal: los soldados masacraron a miles de personas reunidas en el circo." },
          { type: "image", id: "ambrosio" },
          { type: "p", text: "Ambrosio, obispo de Milán, le escribió que no podría recibir la comunión hasta que hiciera penitencia pública. Y Teodosio la hizo. Ver al hombre más poderoso del mundo humillado ante un obispo impresionó a sus contemporáneos. Fue el comienzo de una larga historia de tensiones entre la Iglesia y el poder político." },
        ],
      },
      {
        stop: "paganos",
        heading: "Los papeles se invierten",
        blocks: [
          { type: "p", text: "Entre los años 391 y 392, Teodosio prohibió los sacrificios paganos y cerró los templos. En Alejandría, una multitud cristiana destruyó el Serapeo, uno de los grandes templos del mundo antiguo. Los perseguidos de ayer pasaban a perseguir." },
          { type: "p", text: "Aun así, el paganismo no desapareció de golpe: sobrevivió durante generaciones en el campo y entre las familias aristocráticas. De hecho, la palabra «pagano» viene del latín paganus, «aldeano», «del campo»." },
          { type: "fact", label: "El final de los Juegos Olímpicos", text: "Se suele decir que Teodosio prohibió los Juegos Olímpicos en el 393. No hay ninguna ley que lo diga expresamente: probablemente desaparecieron poco a poco por la prohibición de los cultos paganos, de los que formaban parte." },
          { type: "p", text: "Teodosio murió en el 395. Fue el último emperador que gobernó todo el Imperio. Tras él, se dividió para siempre entre sus dos hijos: Oriente y Occidente." },
        ],
      },
    ],
    relatedPills: ["nicea-y-el-credo", "catolicos-ortodoxos-protestantes"],
    quiz: [
      question("s4e8-edicto", "¿Qué hizo el Edicto de Tesalónica (380)?", ["Legalizar el cristianismo", "Hacer del cristianismo niceno la religión oficial del Imperio", "Prohibir el cristianismo", "Dividir el Imperio"], 1, "Lo publicó Teodosio, emperador nacido en Hispania."),
      question("s4e8-ambrosio", "¿Qué exigió el obispo Ambrosio a Teodosio?", ["Dinero para la Iglesia", "Penitencia pública por una matanza en Tesalónica", "Que dimitiera", "Que se bautizara"], 1, "Y el emperador la hizo."),
      question("s4e8-pagano", "¿De dónde viene la palabra «pagano»?", ["Del griego «sin Dios»", "Del latín paganus, «del campo»", "Del nombre de un dios", "De «pagar»"], 1, "El paganismo resistió más en el campo que en las ciudades."),
    ],
    sources: [
      { text: "Código Teodosiano XVI, 1, 2 (Edicto de Tesalónica) y XVI, 10" },
      { text: "Ambrosio de Milán, Carta 51; Teodoreto, Historia eclesiástica V, 17-18" },
      { text: "Real Academia de la Historia, Missorium de Teodosio" },
    ],
    next: "En el próximo episodio, el último de la temporada: los visigodos saquean Roma, el Imperio de Occidente se derrumba y la Iglesia se queda en pie.",
  },
});
