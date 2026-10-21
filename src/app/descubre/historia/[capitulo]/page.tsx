import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterPage } from "@/components/chapter/chapter-page";
import { chapters, findChapter } from "@/content/history";

export const generateStaticParams = () => chapters.map((chapter) => ({ capitulo: chapter.slug }));

export const generateMetadata = async ({ params }: PageProps<"/descubre/historia/[capitulo]">): Promise<Metadata> => {
  const chapter = findChapter((await params).capitulo);
  if (!chapter) return {};
  const version = chapter.versions.descubre;
  return { title: version.title, description: version.inAMinute.join(" ") };
};

export default async function DiscoverChapterPage({ params }: PageProps<"/descubre/historia/[capitulo]">) {
  const chapter = findChapter((await params).capitulo);
  if (!chapter) notFound();
  return <ChapterPage chapter={chapter} audience="descubre" />;
}
