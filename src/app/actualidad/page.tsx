import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { formatNewsDate, weeklyNews } from "@/content/news";
import { getHeadlines } from "@/lib/news-feeds";

export const metadata: Metadata = {
  title: "Actualidad",
  description: "La noticia de la semana sobre el cristianismo, explicada con contexto, y los últimos titulares de varios medios.",
};

const shortDate = (iso: string | null): string =>
  iso ? new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "short", timeZone: "Europe/Madrid" }).format(new Date(iso)) : "";

const Headlines = async () => {
  const feeds = await getHeadlines();
  if (feeds.length === 0) return <p className="text-piedra">Ahora mismo no se pueden cargar los titulares. Vuelve a probar en un rato.</p>;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {feeds.map((feed) => (
        <section key={feed.id} aria-labelledby={`medio-${feed.id}`} className="rounded-3xl bg-superficie p-6 ring-1 ring-linea">
          <h3 id={`medio-${feed.id}`} className="font-display text-2xl font-bold">
            {feed.name}
          </h3>
          <p className="text-sm text-piedra">{feed.about}</p>
          <ul className="mt-4 divide-y divide-linea">
            {feed.headlines.map((headline) => (
              <li key={headline.link} className="py-3">
                <a href={headline.link} target="_blank" rel="noreferrer" className="group block">
                  <span className="font-semibold group-hover:underline">{headline.title}</span>
                  <span className="mt-1 block text-sm text-piedra">{shortDate(headline.date)}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default function NewsPage() {
  const [latest, ...older] = weeklyNews;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Actualidad"
        lead="Cada semana elegimos una noticia sobre el cristianismo y la contamos con su contexto. Debajo, los últimos titulares de varios medios, para que tengas distintas miradas."
      />

      {latest && (
        <section aria-labelledby="noticia-semana" className="mt-12">
          <h2 id="noticia-semana" className="text-sm font-bold uppercase tracking-wide text-lapis">
            La noticia de la semana · {formatNewsDate(latest.date)}
          </h2>
          <Link href={`/actualidad/${latest.slug}`} className="group mt-3 block rounded-3xl bg-lapis p-7 text-niebla sm:p-10">
            <span className="block font-display text-4xl font-extrabold leading-tight tracking-tight group-hover:underline sm:text-5xl">
              {latest.title}
            </span>
            <span className="mt-4 block max-w-[65ch] text-lg">{latest.lead}</span>
            <span className="mt-6 inline-flex rounded-full bg-alba px-5 py-2 font-bold text-[#17203a]">Leer la noticia explicada</span>
          </Link>
        </section>
      )}

      <section aria-labelledby="titulares" className="mt-16">
        <h2 id="titulares" className="text-3xl font-bold tracking-tight">
          Últimos titulares
        </h2>
        <p className="mt-2 max-w-[65ch] text-piedra">
          Titulares de otros medios, que se actualizan solos cada pocas horas. Al pulsar se abre la noticia en su web. Lumen no
          escribe ni revisa estas noticias.
        </p>
        <div className="mt-8">
          <Suspense fallback={<p className="text-piedra">Cargando titulares…</p>}>
            <Headlines />
          </Suspense>
        </div>
      </section>

      {older.length > 0 && (
        <section aria-labelledby="anteriores" className="mt-16">
          <h2 id="anteriores" className="text-3xl font-bold tracking-tight">
            Noticias de semanas anteriores
          </h2>
          <ul className="mt-6 divide-y divide-linea border-y border-linea">
            {older.map((news) => (
              <li key={news.slug}>
                <Link href={`/actualidad/${news.slug}`} className="group grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
                  <span className="text-piedra">{formatNewsDate(news.date)}</span>
                  <span className="font-display text-xl font-semibold group-hover:underline">{news.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
