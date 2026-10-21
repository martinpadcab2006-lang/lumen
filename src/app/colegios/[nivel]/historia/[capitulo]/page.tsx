import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterPage } from "@/components/chapter/chapter-page";
import { chapters, findChapter } from "@/content/history";
import { findLevel, levels } from "@/content/levels";

export const generateStaticParams = () =>
  levels.flatMap((level) => chapters.map((chapter) => ({ nivel: level.slug, capitulo: chapter.slug })));

const resolve = async (params: PageProps<"/colegios/[nivel]/historia/[capitulo]">["params"]) => {
  const { nivel, capitulo } = await params;
  const level = findLevel(nivel);
  const chapter = findChapter(capitulo);
  return level && chapter ? { level, chapter } : null;
};

export const generateMetadata = async ({ params }: PageProps<"/colegios/[nivel]/historia/[capitulo]">): Promise<Metadata> => {
  const found = await resolve(params);
  if (!found) return {};
  const version = found.chapter.versions[found.level.slug];
  return { title: `${version.title} (${found.level.name})`, description: version.inAMinute.join(" ") };
};

export default async function SchoolChapterPage({ params }: PageProps<"/colegios/[nivel]/historia/[capitulo]">) {
  const found = await resolve(params);
  if (!found) notFound();
  return <ChapterPage chapter={found.chapter} audience={found.level.slug} />;
}
