import Link from "next/link";
import { audienceName, chapterPath, type Chapter, type ChapterAudience } from "@/content/chapter-types";
import { nextInSeries, series } from "@/content/history";
import { findPill, type Pill } from "@/content/pills";
import { buildHolyLandMap } from "@/lib/holy-land-map";
import { schoolSectionsVisible } from "@/lib/visibility";
import { PillCard } from "../pill-card";
import { Quiz } from "../quiz";
import { Blocks } from "./blocks";
import { commonsImageUrl } from "./chapter-image";
import { ChapterReader } from "./chapter-reader";
import { HolyLandMapView } from "./holy-land-map-view";
import { MediaShelf } from "./media-shelf";
import { SafeImg } from "./safe-img";

const audiences: readonly ChapterAudience[] = ["descubre", "universidad"];

const backLink = (audience: ChapterAudience): { href: string; label: string } =>
  audience === "descubre"
    ? { href: "/descubre/historia", label: "La historia del cristianismo" }
    : { href: "/universidad", label: "Universidad" };

type ChapterPageProps = { chapter: Chapter; audience: ChapterAudience };

export const ChapterPage = ({ chapter, audience }: ChapterPageProps) => {
  const version = chapter.versions[audience];
  const map = buildHolyLandMap(chapter.places);
  const media = chapter.media.filter((item) => item.audiences.includes(audience));
  const next = nextInSeries(chapter.number);
  const back = backLink(audience);
  const context = { library: chapter, size: "normal" as const };
  const sections = version.sections.map((section) => ({
    heading: section.heading,
    stop: section.stop,
    content: <Blocks blocks={section.blocks} context={context} />,
  }));
  const cover = series.find((item) => item.slug === chapter.slug)?.cover;
  const related = (version.relatedPills ?? []).map(findPill).filter((pill): pill is Pill => pill !== undefined);

  return (
    <article>
      <header className="banda relative overflow-hidden">
        {cover && (
          <figure className="absolute inset-0">
            <SafeImg src={commonsImageUrl(cover, 1600)} alt="" className="size-full object-cover opacity-45" />
          </figure>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-granate via-granate/80 to-granate/40" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16">
          <Link href={back.href} className="text-sm opacity-80 hover:underline hover:opacity-100">
            ← {back.label}
          </Link>
          <div className="mt-16 max-w-4xl sm:mt-24">
            <p className="flex items-baseline gap-4">
              <span className="font-display text-7xl font-extrabold leading-none tabular-nums text-oro-claro sm:text-8xl">
                {String(chapter.number).padStart(2, "0")}
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-alba">{chapter.period}</span>
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{version.title}</h1>
            <p className="mt-5 max-w-[60ch] text-xl leading-relaxed opacity-90">{version.intro}</p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {schoolSectionsVisible && (
        <nav aria-label="Este capítulo en otras versiones" className="mt-8 flex flex-wrap items-center gap-2 text-sm">
          <span className="mr-1 text-piedra">Contado desde la historia y la cultura. Otra versión:</span>
          {audiences.map((other) => (
            <Link
              key={other}
              href={chapterPath(other, chapter.slug)}
              aria-current={other === audience ? "page" : undefined}
              className={`rounded-sm border px-3 py-1 ${
                other === audience ? "border-tinta bg-tinta text-niebla" : "border-linea hover:border-tinta"
              }`}
            >
              {audienceName[other]}
            </Link>
          ))}
        </nav>
      )}

      <section aria-labelledby="en-un-minuto" className="mt-10 border-y border-linea py-8">
        <h2 id="en-un-minuto" className="text-2xl font-bold">
          En un minuto
        </h2>
        <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 text-lg marker:text-oro">
          {version.inAMinute.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10 overflow-hidden rounded-sm ring-1 ring-linea lg:hidden">
        <HolyLandMapView map={map} activePlace={null} />
      </div>

      <div className="mt-14">
        <ChapterReader sections={sections} stops={chapter.stops} places={chapter.places} map={map} />
      </div>

      {version.activities && (
        <section aria-labelledby="actividades" className="mt-16 max-w-4xl">
          <h2 id="actividades" className="text-3xl font-bold tracking-tight">
            Actividades
          </h2>
          <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg marker:font-bold">
            {version.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ol>
        </section>
      )}

      {version.debates && (
        <section aria-labelledby="debates" className="mt-16 max-w-4xl">
          <h2 id="debates" className="text-3xl font-bold tracking-tight">
            Lo que se debate
          </h2>
          <dl className="mt-6 space-y-6">
            {version.debates.map((debate) => (
              <div key={debate.question} className="border-l-4 border-lapis pl-5">
                <dt className="text-xl font-semibold">{debate.question}</dt>
                <dd className="mt-1 text-piedra">{debate.positions}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {media.length > 0 && (
        <section aria-labelledby="ver-y-escuchar" className="mt-16">
          <h2 id="ver-y-escuchar" className="text-3xl font-bold tracking-tight">
            Para ver y escuchar
          </h2>
          <p className="mt-2 max-w-[60ch] text-piedra">Vídeos, podcasts, entrevistas, películas y series sobre esta época.</p>
          <div className="mt-8">
            <MediaShelf media={media} />
          </div>
        </section>
      )}

      {version.quiz && (
        <section aria-labelledby="quiz-capitulo" className="mt-16">
          <h2 id="quiz-capitulo" className="mb-6 text-3xl font-bold tracking-tight">
            ¿Lo has entendido?
          </h2>
          <Quiz quizId={`${chapter.slug}-${audience}`} questions={version.quiz} />
        </section>
      )}

      {related.length > 0 && (
        <section aria-labelledby="curiosidades" className="mt-16">
          <h2 id="curiosidades" className="text-3xl font-bold tracking-tight">
            Curiosidades relacionadas
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {related.map((pill) => (
              <PillCard key={pill.slug} pill={pill} />
            ))}
          </div>
        </section>
      )}

      {version.sources && (
        <section aria-labelledby="fuentes" className="mt-16 max-w-4xl">
          <h2 id="fuentes" className="text-3xl font-bold tracking-tight">
            Fuentes y bibliografía
          </h2>
          <ul className="mt-6 space-y-2 text-piedra">
            {version.sources.map((source) => (
              <li key={source.text}>
                {source.url ? (
                  <a href={source.url} className="underline hover:text-tinta" target="_blank" rel="noreferrer">
                    {source.text}
                  </a>
                ) : (
                  source.text
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="banda mt-20 px-6 py-10 sm:px-10">
        <p className="text-xl">{version.next}</p>
        {next && (
          <p className="mt-3 text-oro-claro">
            Capítulo {next.number}: {next.title}. Próximamente.
          </p>
        )}
      </section>
      </div>
    </article>
  );
};
