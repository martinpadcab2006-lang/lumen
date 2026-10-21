import type { Block, Chapter } from "@/content/chapter-types";
import { ChapterImage, commonsImageUrl } from "./chapter-image";

/** "grande" es para los más pequeños: letra mayor y más aire entre líneas. */
export type ReadingSize = "normal" | "grande";

type BlockContext = { chapter: Chapter; narratorName?: string; size: ReadingSize };

const paragraphClass = (size: ReadingSize) =>
  size === "grande" ? "max-w-[60ch] text-2xl leading-loose" : "max-w-[68ch] text-lg leading-relaxed";

const Illustration = ({ id, chapter }: { id: string; chapter: Chapter }) => {
  const illustration = chapter.illustrations[id];
  if (!illustration) return null;
  if (illustration.src) {
    return (
      <figure className="my-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={illustration.src} alt={illustration.alt} loading="lazy" className="w-full rounded-3xl" />
      </figure>
    );
  }
  return (
    <figure
      className="my-8 flex min-h-56 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-alba bg-superficie p-8 text-center"
      aria-label={illustration.alt}
    >
      <span aria-hidden className="text-5xl">
        🎨
      </span>
      <figcaption className="max-w-[48ch] text-piedra">
        <span className="block font-bold text-tinta">Ilustración en camino</span>
        {illustration.description}
      </figcaption>
    </figure>
  );
};

const NarratorAvatar = ({ chapter, name }: { chapter: Chapter; name: string }) => {
  const src = chapter.illustrations.natan?.src;
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" className="size-16 shrink-0 rounded-full object-cover ring-4 ring-alba" />;
  }
  return (
    <span
      aria-hidden
      className="flex size-16 shrink-0 items-center justify-center rounded-full bg-alba font-display text-3xl font-extrabold text-[#17203a]"
    >
      {name.at(0)}
    </span>
  );
};

const CharacterCard = ({ id, chapter }: { id: string; chapter: Chapter }) => {
  const character = chapter.characters[id];
  if (!character) return null;
  const image = character.image ? chapter.images[character.image] : undefined;
  return (
    <aside className="my-8 flex max-w-[68ch] gap-5 rounded-3xl bg-superficie p-5 ring-1 ring-linea sm:p-6">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={commonsImageUrl(image.commonsFile, 300)}
          alt={image.alt}
          loading="lazy"
          className="size-24 shrink-0 rounded-2xl object-cover ring-1 ring-linea sm:size-28"
        />
      )}
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-lapis">Personaje</p>
        <p className="mt-1 font-display text-2xl font-bold leading-tight">{character.name}</p>
        <p className="text-piedra">
          {character.role} · {character.dates}
        </p>
        <p className="mt-3 leading-relaxed">{character.text}</p>
      </div>
    </aside>
  );
};

const BlockView = ({ block, context }: { block: Block; context: BlockContext }) => {
  const { chapter, size } = context;
  switch (block.type) {
    case "p":
      return <p className={paragraphClass(size)}>{block.text}</p>;
    case "image": {
      const image = chapter.images[block.id];
      return image ? <ChapterImage image={image} /> : null;
    }
    case "illustration":
      return <Illustration id={block.id} chapter={chapter} />;
    case "fact":
      return (
        <aside className="my-6 max-w-[60ch] rounded-2xl border-l-4 border-alba bg-superficie px-5 py-4">
          <p className="font-bold">{block.label}</p>
          <p className="mt-1 leading-relaxed">{block.text}</p>
        </aside>
      );
    case "character":
      return <CharacterCard id={block.id} chapter={chapter} />;
    case "numbers":
      return (
        <section className="my-8 rounded-3xl bg-lapis-suave p-6 sm:p-8">
          <p className="font-bold text-lapis">{block.title}</p>
          <dl className="mt-4 grid gap-6 sm:grid-cols-3">
            {block.items.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-extrabold tabular-nums tracking-tight">{item.value}</span>
                  <span className="mt-1 block text-piedra">{item.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );
    case "quote":
      return (
        <figure className="my-10 max-w-[60ch] border-l-4 border-lapis pl-6">
          <blockquote className="font-display text-2xl font-semibold leading-snug sm:text-3xl">«{block.text}»</blockquote>
          <figcaption className="mt-3 text-piedra">{block.source}</figcaption>
        </figure>
      );
    case "words":
      return (
        <aside className="my-8 max-w-[60ch] rounded-3xl bg-[#fff6e0] p-6 text-[#17203a] ring-2 ring-alba">
          <p className="font-display text-xl font-bold">📖 Palabras nuevas</p>
          <dl className="mt-3 space-y-3">
            {block.items.map((item) => (
              <div key={item.term}>
                <dt className="text-lg font-bold">{item.term}</dt>
                <dd className={size === "grande" ? "text-xl" : ""}>{item.meaning}</dd>
              </div>
            ))}
          </dl>
        </aside>
      );
    case "narrator":
      return (
        <div className="my-8 flex max-w-[64ch] items-start gap-4">
          <NarratorAvatar chapter={chapter} name={context.narratorName ?? "?"} />
          <p
            className={`relative rounded-3xl rounded-tl-md bg-alba/25 px-6 py-4 ring-2 ring-alba ${
              size === "grande" ? "text-2xl leading-relaxed" : "text-lg"
            }`}
          >
            <span className="mb-1 block text-sm font-bold uppercase tracking-wide">{context.narratorName}</span>
            {block.text}
          </p>
        </div>
      );
    case "story":
      return (
        <section className="my-10 max-w-[68ch] rounded-3xl bg-superficie p-6 ring-1 ring-linea sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-lapis">Relato</p>
          <h3 className="mt-1 font-display text-2xl font-bold">{block.title}</h3>
          <div className="mt-4 space-y-4 text-lg leading-relaxed">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-5 text-sm text-piedra">
            Relato imaginado, construido con datos históricos de la época. El personaje no existió.
          </p>
        </section>
      );
  }
};

export const Blocks = ({ blocks, context }: { blocks: readonly Block[]; context: BlockContext }) => (
  <div className="space-y-5">
    {blocks.map((block, index) => (
      <BlockView key={`${block.type}-${index}`} block={block} context={context} />
    ))}
  </div>
);
