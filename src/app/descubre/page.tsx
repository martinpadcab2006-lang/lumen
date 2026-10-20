import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { facts, festivals, floodMyths } from "@/content/discover";
import { findReligion } from "@/content/religions";

export const metadata: Metadata = {
  title: "Descubre",
  description: "Historias cortas, fiestas del mundo y mitos comparados para leer por curiosidad.",
};

const ReligionTag = ({ slug }: { slug: Parameters<typeof findReligion>[0] }) => {
  const religion = findReligion(slug);
  if (!religion) return null;
  return (
    <Link href={`/religiones/${religion.slug}`} className="inline-flex items-center gap-2 text-sm text-piedra hover:text-tinta">
      <span aria-hidden className="size-2.5 rounded-full" style={{ background: religion.color }} />
      {religion.name}
    </Link>
  );
};

export default function DiscoverPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Descubre"
        lead="Las religiones están en el calendario, en las palabras que usamos y en historias que se repiten de una cultura a otra. Aquí van algunas, para leer en cinco minutos."
      />

      <section id="sabias-que" className="mt-16 scroll-mt-8" aria-labelledby="sabias-que-titulo">
        <h2 id="sabias-que-titulo" className="text-3xl font-bold tracking-tight">¿Sabías que…?</h2>
        <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <article key={fact.title}>
              <ReligionTag slug={fact.religion} />
              <h3 className="mt-2 text-2xl font-semibold">{fact.title}</h3>
              <p className="mt-2 text-piedra">{fact.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="fiestas" className="mt-24 scroll-mt-8" aria-labelledby="fiestas-titulo">
        <h2 id="fiestas-titulo" className="text-3xl font-bold tracking-tight">Fiestas a lo largo del año</h2>
        <p className="mt-2 max-w-[62ch] text-piedra">
          Muchas fechas cambian cada año porque siguen calendarios lunares. Aquí tienes cuándo suelen caer.
        </p>
        <ol className="mt-8 divide-y divide-linea border-y border-linea">
          {festivals.map((festival) => (
              <li key={festival.name} className="grid gap-1 py-5 md:grid-cols-[12rem_16rem_1fr] md:gap-8">
                <p className="tabular-nums text-piedra">{festival.when}</p>
                <div>
                  <p className="font-display text-xl font-semibold">{festival.name}</p>
                  <ReligionTag slug={festival.religion} />
                </div>
                <p className="text-piedra">{festival.about}</p>
              </li>
          ))}
        </ol>
      </section>

      <section id="diluvio" className="mt-24 scroll-mt-8" aria-labelledby="diluvio-titulo">
        <h2 id="diluvio-titulo" className="text-3xl font-bold tracking-tight">Un mismo diluvio, cuatro relatos</h2>
        <p className="mt-2 max-w-[62ch] text-piedra">
          La historia de una gran inundación de la que se salvan unos pocos aparece en muchas culturas. Compara
          quién avisa, quién se salva y cómo termina.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {floodMyths.map((version) => (
            <article key={version.source} className="rounded-3xl bg-superficie p-6 ring-1 ring-linea sm:p-8">
              <p className="text-sm text-piedra">{version.culture}</p>
              <h3 className="mt-1 text-2xl font-semibold">{version.hero}</h3>
              <p className="text-sm text-piedra">{version.source}</p>
              <p className="mt-4">{version.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
