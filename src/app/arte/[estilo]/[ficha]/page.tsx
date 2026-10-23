import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { commonsImageUrl } from "@/components/chapter/chapter-image";
import { SafeImg } from "@/components/chapter/safe-img";
import { artKindName, findArtStyle } from "@/content/art";
import { artWorks, findArtWork, type ArtPicture } from "@/content/art-works";

export const generateStaticParams = () => artWorks.map((work) => ({ estilo: work.style, ficha: work.slug }));

export const generateMetadata = async ({ params }: PageProps<"/arte/[estilo]/[ficha]">): Promise<Metadata> => {
  const { estilo, ficha } = await params;
  const work = findArtWork(estilo, ficha);
  if (!work) return {};
  return { title: work.name, description: work.hook };
};

const Picture = ({ picture, priority = false }: { picture: ArtPicture; priority?: boolean }) => (
  <figure>
    <div className="bg-granate p-3 sm:p-5">
      <SafeImg
        src={commonsImageUrl(picture.commonsFile, 1400)}
        alt={picture.alt}
        loading={priority ? "eager" : "lazy"}
        className="mx-auto max-h-[75svh] w-auto"
      />
    </div>
    <figcaption className="mt-2 text-sm text-piedra">
      {picture.caption} <span className="opacity-75">{picture.credit}</span>
    </figcaption>
  </figure>
);

export default async function ArtWorkPage({ params }: PageProps<"/arte/[estilo]/[ficha]">) {
  const { estilo, ficha } = await params;
  const work = findArtWork(estilo, ficha);
  const style = findArtStyle(estilo);
  if (!work || !style) notFound();
  const others = artWorks.filter((item) => item.style === work.style && item.slug !== work.slug);

  return (
    <article>
      <header className="banda">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6">
          <Link href={`/arte/${style.slug}`} className="text-sm opacity-80 hover:underline hover:opacity-100">
            ← {style.title}
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-alba">{artKindName[work.kind]}</p>
          <h1 className="mt-3 max-w-[18ch] text-4xl font-extrabold tracking-tight sm:text-6xl">{work.name}</h1>
          <p className="mt-4 max-w-[52ch] font-display text-xl font-semibold leading-snug opacity-95 sm:text-2xl">{work.hook}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-[1fr_20rem]">
        <div className="min-w-0">
          <Picture picture={work.picture} priority />
          <div className="mt-10 max-w-[65ch] space-y-5 text-lg leading-relaxed">
            {work.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section aria-labelledby="fijate" className="mt-12">
            <h2 id="fijate" className="text-3xl font-bold tracking-tight">
              Fíjate en…
            </h2>
            <ol className="mt-6 space-y-6">
              {work.lookAt.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-alba font-display text-lg font-extrabold text-[#2b1a17]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {work.gallery && (
            <div className="mt-12 space-y-8">
              {work.gallery.map((picture) => (
                <Picture key={picture.commonsFile} picture={picture} />
              ))}
            </div>
          )}

          <aside className="banda mt-12 px-6 py-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-alba">¿Sabías que…?</p>
            <p className="mt-2 text-lg leading-relaxed">{work.curiosity}</p>
          </aside>

          <p className="mt-10 text-sm text-piedra">Fuentes: {work.sources.join(" · ")}.</p>
        </div>

        <aside className="self-start lg:sticky lg:top-6">
          <dl className="border-t-4 border-oro bg-superficie p-6">
            {work.facts.map((fact) => (
              <div key={fact.label} className="border-b border-linea py-3 first:pt-0 last:border-b-0 last:pb-0">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-piedra">{fact.label}</dt>
                <dd className="mt-1 font-display text-lg font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
          {others.length > 0 && (
            <nav aria-label="Más fichas de este estilo" className="mt-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-piedra">Más de {style.title.toLowerCase()}</p>
              <ul className="mt-2 space-y-1">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/arte/${item.style}/${item.slug}`} className="font-bold text-lapis hover:underline">
                      {item.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>
      </div>
    </article>
  );
}
