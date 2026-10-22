import type { ArtImage, ChapterImage as ChapterImageData, PhotoImage } from "@/content/chapter-types";
import { SafeImg } from "./safe-img";

export const commonsImageUrl = (file: string, width: number): string =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const commonsPageUrl = (file: string): string => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const Photo = ({ image }: { image: PhotoImage }) => (
  <figure className="my-8">
    {/* Imagen externa de Wikimedia Commons: se carga tal cual, con su crédito. */}
    <SafeImg
      src={commonsImageUrl(image.commonsFile, 1200)}
      alt={image.alt}
      loading="lazy"
      className="w-full rounded-sm bg-niebla-honda object-cover ring-1 ring-linea"
    />
    <figcaption className="mt-3 text-sm text-piedra">
      {image.caption}{" "}
      <a href={commonsPageUrl(image.commonsFile)} className="underline hover:text-tinta" target="_blank" rel="noreferrer">
        {image.credit}
      </a>
    </figcaption>
  </figure>
);

/** Las obras de arte se cuelgan como en un museo: marco oscuro y cartela. */
const Artwork = ({ image }: { image: ArtImage }) => (
  <figure className="my-10 rounded-sm bg-[#1d1a17] p-4 sm:p-8">
    <SafeImg
      src={commonsImageUrl(image.commonsFile, 1400)}
      alt={image.alt}
      loading="lazy"
      className="mx-auto max-h-[80vh] w-auto max-w-full shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-8 ring-[#3a2f22]"
    />
    <figcaption className="mx-auto mt-6 max-w-[60ch] text-[#e9e2d6]">
      <p className="border-l-2 border-alba pl-4 text-sm leading-relaxed">
        <span className="block font-display text-lg font-semibold italic">{image.title}</span>
        <span className="block">
          {image.artist}, {image.date}
        </span>
        <span className="block text-[#b8ad9c]">
          {image.museum} ·{" "}
          <a href={commonsPageUrl(image.commonsFile)} className="underline hover:text-white" target="_blank" rel="noreferrer">
            Dominio público
          </a>
        </span>
      </p>
      <p className="mt-4 leading-relaxed">{image.caption}</p>
    </figcaption>
  </figure>
);

export const ChapterImage = ({ image }: { image: ChapterImageData }) =>
  image.kind === "arte" ? <Artwork image={image} /> : <Photo image={image} />;
