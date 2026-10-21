import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findWeeklyNews, formatNewsDate, weeklyNews } from "@/content/news";

export const generateStaticParams = () => weeklyNews.map((news) => ({ noticia: news.slug }));

export const generateMetadata = async ({ params }: PageProps<"/actualidad/[noticia]">): Promise<Metadata> => {
  const news = findWeeklyNews((await params).noticia);
  return news ? { title: news.title, description: news.lead } : {};
};

const Section = ({ title, items }: { title: string; items: readonly string[] }) => (
  <section className="mt-12">
    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    <div className="mt-4 space-y-4 text-lg leading-relaxed">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  </section>
);

export default async function WeeklyNewsPage({ params }: PageProps<"/actualidad/[noticia]">) {
  const news = findWeeklyNews((await params).noticia);
  if (!news) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
      <Link href="/actualidad" className="text-piedra hover:text-tinta hover:underline">
        Volver a Actualidad
      </Link>
      <p className="mt-8 font-bold text-lapis">La noticia de la semana · {formatNewsDate(news.date)}</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{news.title}</h1>
      <p className="mt-5 text-xl leading-relaxed">{news.lead}</p>

      <section className="mt-12 rounded-3xl bg-superficie p-7 ring-1 ring-linea">
        <h2 className="text-2xl font-bold">Qué ha pasado</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-relaxed">
          {news.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>

      <Section title="Por qué importa" items={news.why} />
      <Section title="Un poco de historia" items={news.history} />

      <section className="mt-12 rounded-3xl border-2 border-dashed border-lapis p-7">
        <h2 className="text-2xl font-bold">Para comentar en clase</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg">
          {news.classroom.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>

      {news.related && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Sigue aprendiendo en Lumen</h2>
          <ul className="mt-3 space-y-2">
            {news.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold text-lapis underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Fuentes</h2>
        <ul className="mt-3 space-y-2 text-piedra">
          {news.sources.map((source) => (
            <li key={source.text}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noreferrer" className="underline hover:text-tinta">
                  {source.text}
                </a>
              ) : (
                source.text
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
