import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { commonsImageUrl } from "@/components/chapter/chapter-image";
import { SafeImg } from "@/components/chapter/safe-img";
import { artKindName, artStyles, findArtStyle } from "@/content/art";
import { findSeason } from "@/content/seasons";

export const generateStaticParams = () => artStyles.map((style) => ({ estilo: style.slug }));

export const generateMetadata = async ({ params }: PageProps<"/arte/[estilo]">): Promise<Metadata> => {
  const style = findArtStyle((await params).estilo);
  if (!style) return {};
  return { title: style.title, description: style.hook };
};

export default async function ArtStylePage({ params }: PageProps<"/arte/[estilo]">) {
  const style = findArtStyle((await params).estilo);
  if (!style) notFound();
  const index = artStyles.indexOf(style);
  const previous = artStyles[index - 1];
  const following = artStyles[index + 1];
  const season = findSeason(style.season);

  return (
    <article>
      <header className="banda">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[1fr_1fr] md:items-end md:pb-16">
          <div>
            <Link href="/arte" className="text-sm opacity-80 hover:underline hover:opacity-100">
              ← El arte cristiano
            </Link>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-alba">{style.period}</p>
            <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">{style.title}</h1>
            <p className="mt-4 max-w-[46ch] font-display text-2xl font-semibold leading-snug opacity-95">{style.hook}</p>
          </div>
          <figure>
            <SafeImg src={commonsImageUrl(style.cover, 1200)} alt={style.coverCaption} className="w-full object-cover" />
            <figcaption className="mt-2 text-sm opacity-75">{style.coverCaption}</figcaption>
          </figure>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-12 sm:px-6 lg:grid-cols-[1fr_20rem]">
        <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed">
          {style.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="self-start border-t-4 border-oro bg-superficie p-6">
          <h2 className="text-2xl font-bold">Cómo reconocerlo</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-oro">
            {style.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </aside>
      </div>

      <section aria-labelledby="fichas" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <h2 id="fichas" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Obras, lugares y artistas
        </h2>
        <ul className="mt-6 grid gap-px bg-linea sm:grid-cols-2">
          {style.works.map((item) => (
            <li key={item.slug} className="bg-niebla px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-piedra">
                {artKindName[item.kind]} · Ficha próximamente
              </p>
              <p className="mt-1 font-display text-xl font-semibold">{item.name}</p>
              <p className="text-piedra">{item.where}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {season && (
          <Link href={`/descubre/historia/${season.slug}`} className="banda mt-16 block px-6 py-8 sm:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-alba">En la serie</p>
            <p className="mt-2 font-display text-2xl font-bold text-oro-claro hover:underline">
              Temporada {season.number}: {season.title} →
            </p>
            <p className="mt-1 opacity-85">La historia de la época en la que nació este arte.</p>
          </Link>
        )}
        <nav aria-label="Otros estilos" className="mt-10 flex flex-wrap justify-between gap-4 font-bold text-lapis">
          {previous ? (
            <Link href={`/arte/${previous.slug}`} className="hover:underline">
              ← {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {following && (
            <Link href={`/arte/${following.slug}`} className="hover:underline">
              {following.title} →
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
