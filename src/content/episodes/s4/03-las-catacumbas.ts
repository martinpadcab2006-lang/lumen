import { makeEpisode, question } from "../make";
import { library, pick } from "./library";

const places = pick("roma", "alejandria", "cartago");

export const lasCatacumbas = makeEpisode({
  slug: "las-catacumbas",
  title: "Las catacumbas",
  period: "Siglos II – V",
  cover: "Rom, Calixtus-Katakomben, Krypta der Päpste.jpg",
  mapRegion: "mediterraneo",
  places,
  stops: [
    { id: "mito", year: "Siglos II – V", place: "roma" },
    { id: "como", year: "Siglos II – IV", place: "roma" },
    { id: "calixto", year: "Siglo III", place: "roma" },
    { id: "simbolos", year: "Siglos II – IV", place: "roma" },
    { id: "olvido", year: "Siglos V – XIX", place: "roma" },
  ],
  library: { ...library, places },
  version: {
    title: "Las catacumbas",
    inAMinute: [
      "Las catacumbas eran cementerios subterráneos, no escondites.",
      "Los cristianos enterraban a sus muertos en lugar de incinerarlos, y excavaron galerías bajo las afueras de Roma.",
      "Hay unas sesenta catacumbas en Roma, con kilómetros de pasillos en varios pisos.",
      "En la de San Calixto se enterró a varios papas del siglo III.",
      "Sus paredes conservan algunas de las primeras imágenes cristianas.",
    ],
    intro:
      "Hay una imagen muy popular: cristianos perseguidos escondidos en túneles bajo Roma, celebrando misas secretas a la luz de las velas. Es muy cinematográfica, pero no es del todo verdad. Vamos a bajar a las catacumbas de verdad.",
    sections: [
      {
        stop: "mito",
        heading: "Cementerios, no escondites",
        blocks: [
          { type: "p", text: "Las catacumbas eran cementerios. La ley romana prohibía enterrar dentro de la ciudad, así que estaban a las afueras, junto a las grandes vías, como la Vía Apia. Las autoridades sabían perfectamente dónde estaban: no servían para esconderse." },
          { type: "p", text: "Los cristianos se reunían allí para enterrar a sus muertos, para celebrar el aniversario de los mártires y, a veces, en tiempos de persecución, para alguna celebración. Pero sus reuniones normales eran en casas." },
          { type: "fact", label: "¿De dónde viene el nombre?", text: "«Catacumba» viene del nombre de un lugar concreto de la Vía Apia, ad catacumbas, «junto a las hondonadas», donde estaba el cementerio de San Sebastián. Con el tiempo, se usó para todos." },
        ],
      },
      {
        stop: "como",
        heading: "Cómo se hacían",
        blocks: [
          { type: "p", text: "Los cristianos, como los judíos, preferían enterrar a sus muertos en lugar de incinerarlos, como hacían muchos romanos, porque creían en la resurrección del cuerpo. Y como la tierra era cara, excavaron hacia abajo, en la toba volcánica, una roca blanda que se endurece al contacto con el aire." },
          { type: "p", text: "Las galerías tenían nichos en las paredes, uno encima de otro, para los pobres; pequeñas salas familiares, los cubículos, para quien podía pagarlas; y criptas para los mártires. Cuando se llenaba un nivel, se excavaba otro más abajo. Algunas tienen cuatro y cinco pisos." },
          {
            type: "numbers",
            title: "Las catacumbas de Roma",
            items: [
              { value: "unas 60", label: "catacumbas conocidas alrededor de Roma" },
              { value: "kilómetros", label: "de galerías, en varios niveles de profundidad" },
              { value: "cientos de miles", label: "de tumbas, según las estimaciones" },
            ],
          },
        ],
      },
      {
        stop: "calixto",
        heading: "La cripta de los papas",
        blocks: [
          { type: "p", text: "La catacumba de San Calixto, en la Vía Apia, fue el primer cementerio oficial de la comunidad cristiana de Roma. El papa Ceferino puso al frente al diácono Calixto, que después también sería papa." },
          { type: "image", id: "cripta" },
          { type: "p", text: "En una de sus salas, la cripta de los papas, se enterró a varios obispos de Roma del siglo III. Todavía se pueden leer sus nombres en griego en las lápidas: Ponciano, Antero, Fabiano, Lucio, Eutiquiano." },
          { type: "fact", label: "Ficha de arte", text: "En la sección de Arte tienes la ficha de otra catacumba famosa, la de Priscila, la «reina de las catacumbas»." },
        ],
      },
      {
        stop: "simbolos",
        heading: "Pinturas y símbolos",
        blocks: [
          { type: "p", text: "Las paredes de las catacumbas se decoraban con pinturas sencillas: escenas de la Biblia que hablaban de salvación, como Noé en el arca, Jonás y la ballena o Daniel entre los leones; el Buen Pastor; y símbolos como el pez, el ancla o la paloma." },
          { type: "p", text: "Es el arte cristiano más antiguo que conocemos. No buscaba ser bonito, sino expresar una esperanza: que la muerte no era el final." },
        ],
      },
      {
        stop: "olvido",
        heading: "Olvidadas y redescubiertas",
        blocks: [
          { type: "p", text: "Cuando se legalizó el cristianismo, se dejó de enterrar en las catacumbas, pero se convirtieron en lugares de peregrinación a las tumbas de los mártires. En los siglos VIII y IX, por las invasiones y el abandono, los papas trasladaron muchos restos a iglesias de la ciudad, y las catacumbas se olvidaron." },
          { type: "p", text: "Se redescubrieron a partir del siglo XVI, y en el XIX el arqueólogo Giovanni Battista de Rossi las estudió a fondo. Hoy varias se pueden visitar con guía. Bajar a ellas es una de las experiencias más impresionantes de Roma." },
        ],
      },
    ],
    relatedPills: ["el-pez-simbolo-cristiano"],
    quiz: [
      question("s4e3-que", "¿Qué eran las catacumbas?", ["Escondites secretos", "Cementerios subterráneos", "Iglesias clandestinas", "Cárceles romanas"], 1, "Las autoridades sabían dónde estaban: no servían para esconderse."),
      question("s4e3-porque", "¿Por qué los cristianos enterraban a sus muertos en lugar de incinerarlos?", ["Por ahorrar", "Porque creían en la resurrección del cuerpo", "Porque lo mandaba Roma", "Por la falta de leña"], 1, "Como los judíos."),
      question("s4e3-calixto", "¿Qué hay en la catacumba de San Calixto?", ["La tumba de Jesús", "La cripta de los papas", "El Coliseo", "La biblioteca de Alejandría"], 1, "Allí se enterró a varios papas del siglo III."),
    ],
    sources: [
      { text: "Vincenzo Fiocchi Nicolai, Fabrizio Bisconti y Danilo Mazzoleni, Las catacumbas cristianas de Roma, Schnell & Steiner, 1999" },
      { text: "Pontificia Comisión de Arqueología Sacra, catacumbas de San Calixto" },
    ],
    next: "En el próximo episodio: las grandes persecuciones de los siglos II y III. Decio, Valeriano y Diocleciano intentan acabar con el cristianismo.",
  },
});
