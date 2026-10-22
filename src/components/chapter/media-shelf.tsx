import type { Media, MediaKind } from "@/content/chapter-types";
import { YouTubeEmbed } from "./youtube-embed";

const kindName: Readonly<Record<MediaKind, string>> = {
  video: "Vídeo",
  podcast: "Podcast",
  entrevista: "Entrevista",
  pelicula: "Película",
  serie: "Serie",
};

const linkClass = "inline-flex rounded-sm border-2 border-tinta px-4 py-1.5 text-sm font-bold active:scale-[0.97]";

const MediaCard = ({ media }: { media: Media }) => {
  const videoId = media.youtubeId ?? media.trailerYoutubeId;
  const isScreen = media.kind === "pelicula" || media.kind === "serie";

  return (
    <article className="flex flex-col gap-4 rounded-sm bg-superficie p-5 ring-1 ring-linea sm:p-6">
      {videoId && (
        <YouTubeEmbed
          videoId={videoId}
          title={isScreen ? `Tráiler de ${media.title}` : media.title}
          startAt={media.startAt}
        />
      )}
      <div>
        <p className="text-sm font-bold text-lapis">
          {kindName[media.kind]}
          {isScreen && videoId ? ", tráiler" : ""}
        </p>
        <h3 className="mt-1 text-xl font-semibold leading-snug">{media.title}</h3>
        <p className="text-sm text-piedra">{media.by}</p>
        <p className="mt-2">{media.note}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        {media.kind === "podcast" && (
          <a href={media.url} target="_blank" rel="noreferrer" className={linkClass}>
            Escuchar
          </a>
        )}
        {media.whereToWatch && (
          <a href={media.whereToWatch} target="_blank" rel="noreferrer" className={linkClass}>
            Dónde verla
          </a>
        )}
      </div>
    </article>
  );
};

export const MediaShelf = ({ media }: { media: readonly Media[] }) => {
  if (media.length === 0) return null;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {media.map((item) => (
        <MediaCard key={item.url} media={item} />
      ))}
    </div>
  );
};
