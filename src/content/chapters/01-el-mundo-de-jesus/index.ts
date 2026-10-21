import type { Chapter } from "../../chapter-types";
import { descubre } from "./descubre";
import { characters, illustrations, images, media, places, stops } from "./shared";
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
  versions: { descubre, universidad },
};
