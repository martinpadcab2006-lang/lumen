import type { Chapter } from "../../chapter-types";
import { descubre } from "./descubre";
import { bachillerato, eso } from "./eso-bachillerato";
import { primaria1, primaria2 } from "./primaria";
import { characters, illustrations, images, media, places, stops } from "./shared";
import { teacherGuides } from "./teacher-guides";
import { universidad } from "./universidad";

export const chapter01: Chapter = {
  slug: "el-mundo-de-jesus",
  number: 1,
  title: "El mundo en el que nació Jesús",
  period: "63 a. C. – 70 d. C.",
  places,
  stops,
  images,
  illustrations,
  characters,
  media,
  versions: {
    descubre,
    "primaria-1": primaria1,
    "primaria-2": primaria2,
    eso,
    bachillerato,
    universidad,
  },
  teacherGuides,
};
