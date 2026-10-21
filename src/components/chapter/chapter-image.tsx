import type { ChapterImage as ChapterImageData } from "@/content/chapter-types";

const commonsImageUrl = (file: string, width: number): string =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const commonsPageUrl = (file: string): string => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

export const ChapterImage = ({ image }: { image: ChapterImageData }) => (
  <figure className="my-8">
    {/* Imagen externa de Wikimedia Commons: se carga tal cual, con su crédito. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={commonsImageUrl(image.commonsFile, 1200)}
      alt={image.alt}
      loading="lazy"
      className="w-full rounded-2xl bg-niebla-honda object-cover ring-1 ring-linea"
    />
    <figcaption className="mt-3 text-sm text-piedra">
      {image.caption}{" "}
      <a href={commonsPageUrl(image.commonsFile)} className="underline hover:text-tinta" target="_blank" rel="noreferrer">
        {image.credit}
      </a>
    </figcaption>
  </figure>
);
