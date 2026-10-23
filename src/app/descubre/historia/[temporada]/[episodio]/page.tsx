import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterPage } from "@/components/chapter/chapter-page";
import { findEpisode, nextEpisode, writtenEpisodes } from "@/content/episodes";
import { episodeCode, findSeason } from "@/content/seasons";

export const generateStaticParams = () =>
  writtenEpisodes.map((episode) => ({ temporada: episode.season, episodio: episode.slug }));

export const generateMetadata = async ({ params }: PageProps<"/descubre/historia/[temporada]/[episodio]">): Promise<Metadata> => {
  const { temporada, episodio } = await params;
  const episode = findEpisode(temporada, episodio);
  if (!episode) return {};
  const version = episode.content.versions.descubre;
  return { title: version.title, description: version.inAMinute.join(" ") };
};

export default async function EpisodePage({ params }: PageProps<"/descubre/historia/[temporada]/[episodio]">) {
  const { temporada, episodio } = await params;
  const season = findSeason(temporada);
  const episode = findEpisode(temporada, episodio);
  if (!season || !episode) notFound();
  const next = nextEpisode(season.slug, episode.slug);

  return (
    <ChapterPage
      chapter={episode.content}
      audience="descubre"
      episode={{
        code: episodeCode(season, episode.slug),
        back: { href: `/descubre/historia/${season.slug}`, label: `Temporada ${season.number}: ${season.title}` },
        cover: season.cover,
        next: next && { href: next.href, label: `${episodeCode(next.season, next.episode.slug)} ${next.episode.title}`, written: next.written },
      }}
    />
  );
}
