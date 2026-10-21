import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { temaPath } from "@/content/chapter-types";
import { series } from "@/content/history";
import { findLevel, levels, type TemaSummary, type Trimester } from "@/content/levels";
import { isTemaWritten } from "@/content/temas";

export const generateStaticParams = () => levels.map((level) => ({ nivel: level.slug }));

export const generateMetadata = async ({ params }: PageProps<"/colegios/[nivel]">): Promise<Metadata> => {
  const level = findLevel((await params).nivel);
  return level ? { title: `${level.name}: Religión en clase`, description: level.intro } : {};
};

const trimesters: readonly { number: Trimester; name: string; months: string }[] = [
  { number: 1, name: "1.er trimestre", months: "Septiembre a diciembre" },
  { number: 2, name: "2.º trimestre", months: "Enero a marzo" },
  { number: 3, name: "3.er trimestre", months: "Abril a junio" },
];

const historyTitle = (slug: string): string | undefined => series.find((chapter) => chapter.slug === slug)?.title;

const TemaCard = ({ levelSlug, item }: { levelSlug: Parameters<typeof temaPath>[0]; item: TemaSummary }) => {
  const written = isTemaWritten(levelSlug, item.slug);
  const history = item.history ? historyTitle(item.history) : undefined;
  const content = (
    <>
      <span className="text-sm font-bold text-lapis">Tema {item.number}</span>
      <span className={`mt-1 block font-display text-xl font-semibold leading-tight ${written ? "group-hover:underline" : ""}`}>
        {item.title}
      </span>
      <span className="mt-2 block text-piedra">{item.summary}</span>
      {history && <span className="mt-3 block text-sm text-piedra">Historia: {history}</span>}
      <span className={`mt-4 block text-sm font-bold ${written ? "text-lapis" : "text-piedra"}`}>
        {written ? "Abrir el tema" : "En preparación"}
      </span>
    </>
  );
  const cardClass = "flex h-full flex-col rounded-3xl p-6 ring-1 ring-linea";
  return written ? (
    <Link href={temaPath(levelSlug, item.slug)} className={`group bg-superficie hover:ring-2 hover:ring-tinta ${cardClass}`}>
      {content}
    </Link>
  ) : (
    <div className={`${cardClass} opacity-75`}>{content}</div>
  );
};

export default async function LevelPage({ params }: PageProps<"/colegios/[nivel]">) {
  const level = findLevel((await params).nivel);
  if (!level) notFound();

  const otherLevels = levels.filter((other) => other.slug !== level.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro back={{ href: "/colegios", label: "Colegios" }} title={level.name} lead={level.intro} />
      <p className="mt-2 text-piedra">{level.ages}</p>

      <div className="mt-12 space-y-14">
        {trimesters.map((trimester) => (
          <section key={trimester.number} aria-labelledby={`trimestre-${trimester.number}`}>
            <h2 id={`trimestre-${trimester.number}`} className="text-2xl font-bold">
              {trimester.name} <span className="text-base font-normal text-piedra">· {trimester.months}</span>
            </h2>
            <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {level.programme
                .filter((item) => item.trimester === trimester.number)
                .map((item) => (
                  <li key={item.slug}>
                    <TemaCard levelSlug={level.slug} item={item} />
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <section aria-labelledby="herramientas">
          <h2 id="herramientas" className="text-2xl font-bold">
            También para clase
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
          <h2 className="text-2xl font-bold">Otras etapas</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {otherLevels.map((other) => (
              <li key={other.slug}>
                <Link href={`/colegios/${other.slug}`} className="inline-flex rounded-full border border-linea px-4 py-1.5 hover:border-tinta">
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
