import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findReligion, religions } from "@/content/religions";
import { milestones } from "@/content/milestones";
import { formatMilestoneYear } from "@/lib/years";

export const generateStaticParams = () => religions.map((religion) => ({ slug: religion.slug }));

export const generateMetadata = async ({ params }: PageProps<"/religiones/[slug]">): Promise<Metadata> => {
  const { slug } = await params;
  const religion = findReligion(slug);
  return religion ? { title: religion.name, description: religion.summary } : {};
};

export default async function ReligionPage({ params }: PageProps<"/religiones/[slug]">) {
  const { slug } = await params;
  const religion = findReligion(slug);
  if (!religion) notFound();

  const religionMilestones = milestones.filter((milestone) => milestone.religion === religion.slug);

  const facts: readonly { label: string; value: string }[] = [
    { label: "Dónde nace", value: religion.originPlace },
    { label: "Cuándo", value: religion.originNote },
    { label: "Figura fundadora", value: religion.founder },
    { label: "Lo divino", value: religion.divine },
    { label: "Textos sagrados", value: religion.texts },
    { label: "Lugar de culto", value: religion.worship },
    { label: "Fiestas", value: religion.festival },
    { label: "Después de la muerte", value: religion.afterlife },
    { label: "Seguidores hoy", value: religion.followers },
    { label: "Símbolo", value: religion.symbol },
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
      <div className="h-2 w-24 rounded-full" style={{ background: religion.color }} />
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">{religion.name}</h1>
      <p className="mt-4 max-w-[60ch] text-xl text-piedra">{religion.summary}</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <dl className="divide-y divide-linea border-y border-linea">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="font-bold">{fact.label}</dt>
              <dd className="text-piedra">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <section aria-labelledby="hitos">
          <h2 id="hitos" className="text-2xl font-bold">Hitos en el mapa</h2>
          <ol className="mt-5 space-y-5 border-l-2 pl-5" style={{ borderColor: religion.color }}>
            {religionMilestones.map((milestone) => (
              <li key={`${milestone.place}-${milestone.year}`}>
                <p className="font-bold tabular-nums">
                  {formatMilestoneYear(milestone.year, milestone.approximate)}, {milestone.place}
                </p>
                <p className="text-piedra">{milestone.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/aprende/mapa" className="rounded-full bg-tinta px-5 py-2.5 font-bold text-niebla active:scale-[0.97]">
              Abrir el mapa
            </Link>
            <Link
              href={`/aprende/comparador?a=${religion.slug}`}
              className="rounded-full border-2 border-tinta px-5 py-2 font-bold active:scale-[0.97]"
            >
              Comparar con otra
            </Link>
          </div>
        </section>
      </div>

      <nav aria-label="Otras religiones" className="mt-16">
        <h2 className="text-xl font-bold">Otras tradiciones</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {religions
            .filter((other) => other.slug !== religion.slug)
            .map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/religiones/${other.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-linea px-4 py-1.5 hover:border-tinta"
                >
                  <span aria-hidden className="size-2.5 rounded-full" style={{ background: other.color }} />
                  {other.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </article>
  );
}
