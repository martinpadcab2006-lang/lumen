import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { SeriesList } from "@/components/series-list";
import { UnitList } from "@/components/unit-list";
import { findLevel, levels } from "@/content/levels";

export const generateStaticParams = () => levels.map((level) => ({ nivel: level.slug }));

export const generateMetadata = async ({ params }: PageProps<"/colegios/[nivel]">): Promise<Metadata> => {
  const level = findLevel((await params).nivel);
  return level ? { title: `${level.name}: el cristianismo en clase`, description: level.intro } : {};
};

export default async function LevelPage({ params }: PageProps<"/colegios/[nivel]">) {
  const level = findLevel((await params).nivel);
  if (!level) notFound();

  const otherLevels = levels.filter((other) => other.slug !== level.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro back={{ href: "/colegios", label: "Colegios" }} title={level.name} lead={level.intro} />
      <p className="mt-2 text-piedra">{level.ages}</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-14">
          <section aria-labelledby="historia">
            <h2 id="historia" className="text-2xl font-bold">
              La historia del cristianismo
            </h2>
            <div className="mt-5">
              <SeriesList audience={level.slug} />
            </div>
          </section>
          <section aria-labelledby="unidades">
            <h2 id="unidades" className="text-2xl font-bold">
              Más temas
            </h2>
            <div className="mt-5">
              <UnitList units={level.units} />
            </div>
          </section>
        </div>

        <aside className="space-y-10">
          <section aria-labelledby="herramientas">
            <h2 id="herramientas" className="text-2xl font-bold">
              Ya puedes usar en clase
            </h2>
            <ul className="mt-5 space-y-5">
              {level.tools.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="font-display text-xl font-semibold hover:underline">
                    {tool.title}
                  </Link>
                  <p className="text-piedra">{tool.howTo}</p>
                </li>
              ))}
            </ul>
          </section>
          <nav aria-label="Otras etapas">
            <h2 className="font-bold">Otras etapas</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {otherLevels.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/colegios/${other.slug}`}
                    className="inline-flex rounded-full border border-linea px-4 py-1.5 hover:border-tinta"
                  >
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
