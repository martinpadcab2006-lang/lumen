import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { churches, findChurch } from "@/content/churches";
import { milestones } from "@/content/milestones";
import { formatMilestoneYear } from "@/lib/years";

export const generateStaticParams = () => churches.map((church) => ({ slug: church.slug }));

export const generateMetadata = async ({ params }: PageProps<"/iglesias/[slug]">): Promise<Metadata> => {
  const church = findChurch((await params).slug);
  return church ? { title: church.name, description: church.summary } : {};
};

export default async function ChurchPage({ params }: PageProps<"/iglesias/[slug]">) {
  const church = findChurch((await params).slug);
  if (!church) notFound();

  const churchMilestones = milestones.filter((milestone) => milestone.branch === church.slug);

  const facts: readonly { label: string; value: string }[] = [
    { label: "Cómo nace", value: church.splitNote },
    { label: "Quién la guía", value: church.authority },
    { label: "La Biblia", value: church.bible },
    { label: "Sacramentos", value: church.sacraments },
    { label: "Sacerdotes y pastores", value: church.clergy },
    { label: "María", value: church.mary },
    { label: "Imágenes", value: church.images },
    { label: "Eucaristía", value: church.eucharist },
    { label: "Fieles hoy", value: church.followers },
    { label: "Dónde está", value: church.where },
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <Link href="/comparador" className="text-piedra hover:text-tinta hover:underline">
        Volver a las iglesias
      </Link>
      <div className="mt-8 h-2 w-24 rounded-full" style={{ background: church.color }} />
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">{church.name}</h1>
      <p className="mt-4 max-w-[60ch] text-xl text-piedra">{church.summary}</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <dl className="divide-y divide-linea border-y border-linea">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="font-bold">{fact.label}</dt>
              <dd className="text-piedra">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <aside className="space-y-8">
          {churchMilestones.length > 0 && (
            <section aria-labelledby="hitos">
              <h2 id="hitos" className="text-2xl font-bold">
                Momentos clave
              </h2>
              <ol className="mt-5 space-y-5 border-l-2 pl-5" style={{ borderColor: church.color }}>
                {churchMilestones.map((milestone) => (
                  <li key={`${milestone.place}-${milestone.year}`}>
                    <p className="font-bold tabular-nums">
                      {formatMilestoneYear(milestone.year, milestone.approximate)}, {milestone.place}
                    </p>
                    <p className="text-piedra">{milestone.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/comparador?a=${church.slug}`}
              className="rounded-sm bg-tinta px-5 py-2.5 font-bold text-niebla active:scale-[0.97]"
            >
              Comparar con otra iglesia
            </Link>
            <Link href="/mapa" className="rounded-sm border-2 border-tinta px-5 py-2 font-bold active:scale-[0.97]">
              Ver en el mapa
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
