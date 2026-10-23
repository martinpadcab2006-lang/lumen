/** Comprueba que cada bloque cita imágenes, dibujos, personajes y lugares que existen. Uso: npx tsx scripts/comprobar-contenido.ts */
import type { Block, Library } from "../src/content/chapter-types";
import { writtenEpisodes } from "../src/content/episodes";
import { chapters } from "../src/content/history";
import { findSeason } from "../src/content/seasons";
import { levels } from "../src/content/levels";
import { temas } from "../src/content/temas";

const problems: string[] = [];

const check = (where: string, library: Library, blocks: readonly Block[]) => {
  for (const block of blocks) {
    if (block.type === "image" && !library.images[block.id]) problems.push(`${where}: falta la imagen «${block.id}»`);
    if (block.type === "illustration" && !library.illustrations[block.id]) problems.push(`${where}: falta el dibujo «${block.id}»`);
    if (block.type === "character" && !library.characters[block.id]) problems.push(`${where}: falta el personaje «${block.id}»`);
    if (block.type === "map" && (!library.places || (block.place && !library.places[block.place])))
      problems.push(`${where}: falta el lugar «${block.place}» o el mapa`);
  }
};

for (const chapter of chapters)
  for (const [audience, version] of Object.entries(chapter.versions))
    for (const section of version.sections) check(`${chapter.slug}/${audience}/${section.heading}`, chapter, section.blocks);

for (const episode of writtenEpisodes) {
  const where = `${episode.season}/${episode.slug}`;
  if (!findSeason(episode.season)?.episodes.some((item) => item.slug === episode.slug)) problems.push(`${where}: no está en la temporada`);
  const version = episode.content.versions.descubre;
  const stops = new Set(episode.content.stops.map((stop) => stop.id));
  for (const stop of episode.content.stops)
    if (!episode.content.places[stop.place]) problems.push(`${where}: la parada «${stop.id}» usa un lugar que no existe`);
  for (const section of version.sections) {
    if (!stops.has(section.stop)) problems.push(`${where}/${section.heading}: falta la parada «${section.stop}»`);
    check(`${where}/${section.heading}`, episode.content, section.blocks);
  }
  for (const question of version.quiz ?? [])
    if (!question.options.some((option) => option.id === question.correctId)) problems.push(`${where}: pregunta ${question.id} sin respuesta válida`);
}

for (const tema of temas) {
  const level = levels.find((item) => item.slug === tema.level);
  if (!level?.programme.some((item) => item.slug === tema.slug)) problems.push(`${tema.level}/${tema.slug}: no está en la programación`);
  check(`${tema.level}/${tema.slug}/arranque`, tema, tema.opening);
  for (const lesson of tema.lessons) check(`${tema.level}/${tema.slug}/${lesson.title}`, tema, lesson.blocks);
  if (tema.lessons.length !== 3) problems.push(`${tema.level}/${tema.slug}: tiene ${tema.lessons.length} lecciones`);
  for (const question of tema.quiz)
    if (!question.options.some((option) => option.id === question.correctId)) problems.push(`${tema.slug}: pregunta ${question.id} sin respuesta válida`);
}

console.log(problems.length ? problems.join("\n") : `Todo correcto: ${chapters.length} capítulo(s), ${writtenEpisodes.length} episodio(s) y ${temas.length} tema(s).`);
process.exitCode = problems.length ? 1 : 0;
