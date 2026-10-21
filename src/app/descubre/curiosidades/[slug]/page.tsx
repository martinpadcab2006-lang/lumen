import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PillCard } from "@/components/pill-card";
import { ShareButtons } from "@/components/share-buttons";
import { findPill, pills, relatedPills, topicColor, topicName } from "@/content/pills";

export const generateStaticParams = () => pills.map((pill) => ({ slug: pill.slug }));

export const generateMetadata = async ({ params }: PageProps<"/descubre/curiosidades/[slug]">): Promise<Metadata> => {
  const { slug } = await params;
  const pill = findPill(slug);
  if (!pill) return {};
  return {
    title: pill.title,
    description: pill.hook,
    openGraph: { title: pill.title, description: pill.hook, type: "article" },
  };
};

export default async function PillPage({ params }: PageProps<"/descubre/curiosidades/[slug]">) {
  const { slug } = await params;
  const pill = findPill(slug);
  if (!pill) notFound();

  const color = topicColor[pill.topic];

  return (
    <article className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <Link href="/descubre/curiosidades" className="text-piedra hover:text-tinta hover:underline">
        Volver a las curiosidades
      </Link>

      <div className="mt-8 max-w-3xl">
        <p className="font-bold" style={{ color }}>
          {topicName[pill.topic]}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">{pill.title}</h1>
        <p className="mt-6 border-l-4 pl-5 font-display text-2xl font-semibold leading-snug" style={{ borderColor: color }}>
          {pill.hook}
        </p>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          {pill.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-superficie p-6 ring-1 ring-linea sm:p-8">
          <p className="font-bold">¿Te ha gustado? Compártelo</p>
          <p className="mt-1 text-sm text-piedra">
            «Descargar imagen» te da una tarjeta lista para subir a Instagram o TikTok.
          </p>
          <div className="mt-4">
            <ShareButtons
              path={`/descubre/curiosidades/${pill.slug}`}
              text={pill.title}
              imagePath={`/descubre/curiosidades/${pill.slug}/imagen`}
              imageFileName={`lumen-${pill.slug}.png`}
            />
          </div>
        </div>
      </div>

      <section className="mt-20" aria-labelledby="sigue-leyendo">
        <h2 id="sigue-leyendo" className="text-3xl font-bold tracking-tight">
          Sigue leyendo
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {relatedPills(pill).map((related) => (
            <PillCard key={related.slug} pill={related} />
          ))}
        </div>
      </section>
    </article>
  );
}
