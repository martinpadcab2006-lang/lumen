import { makeEpisode, question } from "../make";
import { holyLand, library } from "./library";

const places = {
  jerusalen: holyLand.jerusalen,
  cafarnaum: holyLand.cafarnaum,
};

export const laAscension = makeEpisode({
  slug: "la-ascension",
  title: "La Ascensión",
  period: "c. 30",
  cover: "Giotto - Scrovegni - -38- - Ascension.jpg",
  places,
  stops: [
    { id: "cuarenta", year: "c. 30", place: "jerusalen" },
    { id: "monte", year: "c. 30", place: "jerusalen" },
    { id: "significado", year: "Siglo I", place: "jerusalen" },
    { id: "final", year: "c. 30", place: "jerusalen" },
  ],
  library: { ...library, places },
  version: {
    title: "La Ascensión",
    inAMinute: [
      "Según Lucas, Jesús resucitado se apareció a sus discípulos durante cuarenta días.",
      "Después «subió al cielo» ante ellos, cerca de Betania, en el monte de los Olivos.",
      "No es una cuestión de geografía: significa que Jesús está ahora junto a Dios.",
      "Antes de irse, encargó a los discípulos llevar su mensaje «hasta los confines de la tierra».",
      "Los cristianos celebran la Ascensión cuarenta días después de Pascua.",
    ],
    intro:
      "Las apariciones de Jesús resucitado no duraron para siempre. Según el relato de Lucas, hubo una última vez, en un monte junto a Jerusalén. Es el final de los evangelios y el principio de otra historia.",
    sections: [
      {
        stop: "cuarenta",
        heading: "Cuarenta días",
        blocks: [
          { type: "p", text: "Lucas es el único que cuenta la Ascensión como una escena, y lo hace dos veces: al final de su evangelio y al principio de su segundo libro, los Hechos de los Apóstoles. Allí dice que Jesús se apareció a los discípulos durante cuarenta días, hablándoles del Reino de Dios." },
          { type: "p", text: "Cuarenta es un número simbólico en la Biblia: los cuarenta días del diluvio, los cuarenta años del pueblo en el desierto, los cuarenta días de Jesús en el desierto. Indica un tiempo completo de preparación." },
        ],
      },
      {
        stop: "monte",
        heading: "En el monte de los Olivos",
        blocks: [
          { type: "p", text: "Según Lucas, Jesús llevó a los discípulos hacia Betania, en el monte de los Olivos, frente a Jerusalén. Les prometió que recibirían la fuerza del Espíritu Santo y les dio un encargo: ser sus testigos «en Jerusalén, en toda Judea, en Samaria y hasta los confines de la tierra»." },
          { type: "image", id: "ascension" },
          { type: "p", text: "Mientras los bendecía, «fue elevado al cielo» y una nube lo ocultó. Los discípulos se quedaron mirando hacia arriba, hasta que dos hombres vestidos de blanco les dijeron: «¿Qué hacéis ahí plantados mirando al cielo?»." },
          { type: "fact", label: "Una huella en la roca", text: "En lo alto del monte de los Olivos hay una pequeña capilla octogonal, hoy en manos musulmanas, donde se enseña una roca con lo que la tradición dice que es la huella del pie de Jesús." },
        ],
      },
      {
        stop: "significado",
        heading: "¿Subir adónde?",
        blocks: [
          { type: "p", text: "Para la gente del siglo I, el cielo estaba «arriba». Hoy sabemos que subir al cielo no se puede tomar como un viaje espacial, y la mayoría de los teólogos tampoco lo entiende así. La Ascensión expresa una idea de fe: que Jesús resucitado ya no está presente como antes, sino junto a Dios, «sentado a su derecha», como dice el Credo." },
          { type: "p", text: "Para los cristianos, eso no significa que se haya ido lejos, sino que su presencia ya no está atada a un lugar. Mateo termina su evangelio con una frase de Jesús en ese sentido: «Yo estoy con vosotros todos los días, hasta el fin del mundo»." },
        ],
      },
      {
        stop: "final",
        heading: "El final de un libro, el principio de otro",
        blocks: [
          { type: "p", text: "Los discípulos volvieron a Jerusalén y se reunieron a rezar, junto con María, la madre de Jesús, y algunas mujeres. Eran unas ciento veinte personas, según los Hechos. Esperaban algo, pero no sabían muy bien qué." },
          { type: "p", text: "La Ascensión cierra la historia de Jesús en la tierra y abre la de sus seguidores. Ese encargo, «hasta los confines de la tierra», es el resumen de todo lo que contará la temporada 3." },
          { type: "fact", label: "En el calendario", text: "La Ascensión se celebra cuarenta días después del Domingo de Resurrección, siempre en jueves. En España y en otros países se traslada al domingo siguiente." },
        ],
      },
    ],
    relatedPills: ["por-que-semana-santa-cambia-de-fecha"],
    quiz: [
      question("s2e11-cuantos", "Según Lucas, ¿durante cuántos días se apareció Jesús resucitado?", ["Tres", "Siete", "Cuarenta", "Cincuenta"], 2, "Cuarenta es un número simbólico en la Biblia: un tiempo completo de preparación."),
      question("s2e11-donde", "¿Dónde sitúa Lucas la Ascensión?", ["En Galilea", "En el monte de los Olivos, cerca de Betania", "En el Templo", "En Belén"], 1, "Frente a Jerusalén."),
      question("s2e11-encargo", "¿Qué encargo dio Jesús a los discípulos antes de la Ascensión?", ["Construir un templo", "Ser sus testigos hasta los confines de la tierra", "Volver a pescar", "Esperar en silencio"], 1, "Es el programa de los Hechos de los Apóstoles."),
    ],
    sources: [
      { text: "Evangelio de Lucas 24, 50-53; Hechos de los Apóstoles 1, 1-14; evangelio de Mateo 28, 20" },
    ],
    next: "En el próximo episodio, el último de la temporada: ¿quién es Jesucristo? El Jesús de la historia, el Cristo de la fe y lo que dicen de él otras religiones.",
  },
});
