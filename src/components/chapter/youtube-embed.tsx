"use client";

import { useState } from "react";

type YouTubeEmbedProps = { videoId: string; title: string; startAt?: number };

/**
 * Muestra la miniatura y solo carga el reproductor al pulsar: la página va rápida
 * y YouTube no pone cookies hasta que alguien decide ver el vídeo.
 */
export const YouTubeEmbed = ({ videoId, title, startAt }: YouTubeEmbedProps) => {
  const [playing, setPlaying] = useState(false);
  const start = startAt ? `&start=${startAt}` : "";

  if (playing) {
    return (
      <iframe
        className="aspect-video w-full rounded-2xl"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0${start}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-tinta"
      aria-label={`Ver el vídeo: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="size-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-16 place-items-center rounded-full bg-alba shadow-[0_0_24px_6px_var(--alba)] transition-transform group-hover:scale-110 group-active:scale-95">
          <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-tinta" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
};
