import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("pispir", "escete", "qalatSiman", "capadocia", "hipona");

export const losPrimerosMonjes = makeEpisode({
  slug: "los-primeros-monjes",
  title: "Los orígenes del monacato",
  period: "Siglos III – V",
  cover: "Velázquez - San Antonio Abad y San Pablo, primer ermitaño (Museo del Prado, 1635-38).jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "antonio", year: "c. 270 – 356", place: "pispir" },
    { id: "desierto", year: "Siglos IV – V", place: "escete" },
    { id: "simeon", year: "c. 423 – 459", place: "qalatSiman" },
    { id: "basilio", year: "c. 360 – 379", place: "capadocia" },
    { id: "occidente", year: "Siglos IV – V", place: "hipona" },
  ],
  library: { ...library, places },
  version: {
    title: "Los orígenes del monacato",
    inAMinute: [
      "Cuando el cristianismo dejó de ser perseguido, algunos cristianos buscaron una vida más radical en el desierto.",
      "El primero famoso fue Antonio, un joven egipcio que lo vendió todo hacia el año 270.",
      "Unos vivían solos (ermitaños) y otros en comunidad (cenobitas), siguiendo una regla.",
      "Hubo casos extremos, como Simeón, que vivió más de treinta años encima de una columna.",
      "Basilio en Oriente y Agustín en Occidente dieron forma a la vida monástica en las ciudades.",
    ],
    intro:
      "Empieza la sexta temporada: mil años de historia en los que el cristianismo da forma a Europa. Y empezamos por un lugar inesperado, el desierto de Egipto, donde unos hombres y mujeres decidieron dejarlo todo para buscar a Dios en el silencio. De ahí salieron los monjes, que serán protagonistas de toda la Edad Media.",
    sections: [
      {
        stop: "antonio",
        heading: "Antonio lo deja todo",
        blocks: [
          { type: "p", text: "Hacia el año 270, un joven egipcio de unos veinte años, Antonio, oyó en la iglesia una frase del evangelio: «Si quieres ser perfecto, ve, vende lo que tienes y dáselo a los pobres». Se la tomó al pie de la letra. Repartió sus tierras, dejó a su hermana con unas mujeres consagradas y se fue a vivir solo, primero cerca de su pueblo y después en un fuerte abandonado del desierto." },
          { type: "character", id: "antonio" },
          { type: "image", id: "ermitanos" },
          { type: "p", text: "Cuando murió, con más de cien años, Atanasio de Alejandría escribió su vida. El libro fue un éxito en todo el Imperio. Agustín cuenta en las «Confesiones» que oír hablar de él fue uno de los empujones de su conversión." },
        ],
      },
      {
        stop: "desierto",
        heading: "Los Padres y las Madres del desierto",
        blocks: [
          { type: "p", text: "Siguiendo a Antonio, miles de personas se fueron a vivir al desierto egipcio, sobre todo a lugares como Escete o Nitria. Ahora que ya no había mártires, el desierto era una nueva forma de entregarlo todo. Había también mujeres, a las que se llamaba amma, «madre», como Sinclética." },
          { type: "p", text: "Sus enseñanzas, breves y a veces con mucho humor, se recogieron en los «Dichos de los Padres del desierto». Un joven monje le pidió a un anciano un consejo, y este le respondió: «Ve, siéntate en tu celda, y tu celda te lo enseñará todo»." },
          {
            type: "words",
            items: [
              { term: "Monje", meaning: "Del griego monachos, «solo», «solitario»." },
              { term: "Ermitaño", meaning: "Del griego eremos, «desierto»: el que vive solo." },
              { term: "Cenobita", meaning: "El que vive en comunidad (koinos bios, «vida en común»), con una regla. Hacia el año 320, Pacomio fundó en el sur de Egipto los primeros monasterios de este tipo." },
              { term: "Abad", meaning: "Del arameo abba, «padre»: el que guía a los monjes." },
            ],
          },
        ],
      },
      {
        stop: "simeon",
        heading: "Un hombre encima de una columna",
        blocks: [
          { type: "p", text: "Hubo monjes de penitencias extremas. El más famoso fue Simeón, un pastor sirio que, hacia el año 423, se subió a una columna para huir de la multitud que acudía a verle. Fue subiendo a columnas cada vez más altas, hasta unos quince metros, y vivió encima más de treinta años, hasta su muerte en el 459." },
          { type: "image", id: "simeon" },
          { type: "p", text: "Lo paradójico es que la columna atraía todavía más gente: peregrinos de todo el Imperio, incluso árabes y persas, venían a pedirle consejo, y él predicaba desde arriba. Un obispo que lo visitó, Teodoreto de Ciro, lo describió en un libro. Tras su muerte se construyó allí una basílica enorme, cuyas ruinas todavía se conservan." },
        ],
      },
      {
        stop: "basilio",
        heading: "Monjes al servicio de los demás",
        blocks: [
          { type: "p", text: "Basilio de Capadocia, a quien conocimos en la temporada anterior, visitó a los monjes de Egipto y Siria, pero no le convencían del todo los ermitaños: «Si vives solo, ¿a quién lavarás los pies?», escribió." },
          { type: "p", text: "Basilio escribió unas reglas para monasterios en los que se vivía en comunidad, se rezaba, se trabajaba y se atendía a los pobres y enfermos. Las Iglesias ortodoxas siguen inspirándose en ellas hoy." },
        ],
      },
      {
        stop: "occidente",
        heading: "Los monjes llegan a Occidente",
        blocks: [
          { type: "p", text: "La vida monástica llegó pronto a Occidente. En la Galia, Martín, un antiguo soldado, fundó comunidades de monjes cerca de Poitiers y de Tours. En el norte de África, Agustín vivió con un grupo de compañeros en comunidad y escribió para ellos una regla breve, que siglos después adoptarían muchas órdenes religiosas." },
          { type: "fact", label: "También en Hispania", text: "En Hispania también hubo pronto ascetas y monasterios. En el siglo VII, Fructuoso de Braga fundó tantos en el noroeste de la península que se cuenta que muchas familias enteras se hicieron monjes, y los nobles se quejaban de que no quedaba nadie para el ejército." },
          { type: "p", text: "Pero quien organizaría la vida monástica de toda Europa todavía no había nacido. Era un joven italiano llamado Benito." },
        ],
      },
    ],
    quiz: [
      question("s6e1-antonio", "¿Qué hizo Antonio al oír «ve, vende lo que tienes y dáselo a los pobres»?", ["Se hizo obispo", "Lo vendió todo y se fue a vivir al desierto", "Fundó una universidad", "Viajó a Roma"], 1, "Hacia el año 270. Es el padre de los monjes."),
      question("s6e1-monje", "¿Qué significa la palabra «monje»?", ["Hermano", "Solo, solitario", "Sabio", "Sacerdote"], 1, "Viene del griego monachos."),
      question("s6e1-simeon", "¿Por qué es famoso Simeón el Estilita?", ["Por escribir la Biblia", "Por vivir más de treinta años encima de una columna", "Por ser papa", "Por fundar Constantinopla"], 1, "Paradójicamente, atraía a multitudes de peregrinos."),
    ],
    sources: [
      { text: "Atanasio, Vida de Antonio; Dichos de los Padres del desierto (Apophthegmata Patrum); Teodoreto de Ciro, Historia religiosa 26" },
      { text: "Basilio de Cesarea, Reglas mayores 7" },
      { text: "Peter Brown, El cuerpo y la sociedad, Muchnik, 1993" },
    ],
    next: "En el próximo episodio: «reza y trabaja». San Benito y la regla que organizó los monasterios de Europa.",
  },
});
