import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterPage } from "@/components/chapter/chapter-page";
import { chapters, findChapter } from "@/content/history";

export const generateStaticParams = () => chapters.map((chapter) => ({ capitulo: chapter.slug }));

export const generateMetadata = async ({ params }: PageProps<"/universidad/historia/[capitulo]">): Promise<Metadata> => {
  const chapter = findChapter((await params).capitulo);
  if (!chapter) return {};
  const version = chapter.versions.universidad;
  return { title: version.title, description: version.inAMinute.join(" ") };
};

export default async function UniversityChapterPage({ params }: PageProps<"/universidad/historia/[capitulo]">) {
  const chapter = findChapter((await params).capitulo);
  if (!chapter) notFound();
  return <ChapterPage chapter={chapter} audience="universidad" />;
}
