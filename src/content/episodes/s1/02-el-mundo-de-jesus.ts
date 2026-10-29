import { descubre as chapterOne } from "../../chapters/01-el-mundo-de-jesus/descubre";
import { makeEpisode } from "../make";
import { holyLand, library } from "./library";

const keep = new Set(["roma", "herodes", "galilea", "impuestos", "guerra"]);

export const elMundoDeJesus = makeEpisode({
  slug: "el-mundo-de-jesus",
  title: "El mundo en el que nació Jesús",
  period: "63 a. C. – 70 d. C.",
  cover: "Pompée_dans_le_Temple_de_Jérusalem.jpg",
  places: holyLand,
  stops: [
    { id: "roma", year: "63 a. C.", place: "jerusalen" },
    { id: "herodes", year: "37 – 4 a. C.", place: "cesarea" },
    { id: "galilea", year: "Siglo I", place: "nazaret" },
    { id: "impuestos", year: "Siglo I", place: "cafarnaum" },
    { id: "guerra", year: "66 – 73 d. C.", place: "masada" },
  ],
  library,
  version: {
    ...chapterOne,
    inAMinute: [
      "Jesús nació en un rincón pequeño del Imperio romano, en tierra judía.",
      "Roma llegó en el año 63 a. C. y mandaba a través de reyes locales como Herodes el Grande.",
      "Herodes fue un gran constructor y un gobernante implacable.",
      "La mayoría de la gente vivía del campo y de la pesca, y pagaba muchos impuestos.",
      "La tensión con Roma acabó en una guerra que destruyó Jerusalén en el año 70.",
    ],
    intro:
      "Para entender a Jesús hay que entender su mundo. Imagina un país del tamaño de la Comunidad Valenciana, ocupado por la mayor potencia de la época, gobernado por un rey constructor y desconfiado, con aldeas de campesinos endeudados y pescadores que trabajaban de noche. Así era la tierra donde nació el cristianismo.",
    sections: chapterOne.sections.filter((section) => keep.has(section.stop)),
    next: "En el próximo episodio: entramos en el Templo de Jerusalén y en las sinagogas de los pueblos para conocer el judaísmo de la época. Fariseos, saduceos, esenios y rebeldes: un mismo pueblo, muchas maneras de vivir su fe.",
  },
});
