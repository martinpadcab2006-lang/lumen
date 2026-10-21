import Link from "next/link";
import { audienceName, chapterPath, type Audience, type Chapter } from "@/content/chapter-types";
import { nextInSeries } from "@/content/history";
import { buildHolyLandMap } from "@/lib/holy-land-map";
import { Quiz } from "../quiz";
import { ChapterReader } from "./chapter-reader";
import { HolyLandMapView } from "./holy-land-map-view";
import { MediaShelf } from "./media-shelf";

const audiences: readonly Audience[] = ["descubre", "primaria", "eso", "bachillerato", "universidad"];

const backLink = (audience: Audience): { href: string; label: string } => {
  switch (audience) {
    case "descubre":
      return { href: "/descubre/historia", label: "La historia del cristianismo" };
    case "universidad":
      return { href: "/universidad", label: "Universidad" };
    case "primaria":
    case "eso":
    case "bachillerato":
      return { href: `/colegios/${audience}`, label: audienceName[audience] };
  }
};

const voiceNote = (audience: Audience): string =>
  audience === "descubre" || audience === "universidad"
    ? "Contado desde la historia y la cultura."
    : "Contado desde la fe católica.";

type ChapterPageProps = { chapter: Chapter; audience: Audience };

export const ChapterPage = ({ chapter, audience }: ChapterPageProps) => {
  const version = chapter.versions[audience];
  const map = buildHolyLandMap(chapter.places);
  const media = chapter.media.filter((item) => item.audiences.includes(audience));
  const next = nextInSeries(chapter.number);
  const back = backLink(audience);

  return (
    <article className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <Link href={back.href} className="text-piedra hover:text-tinta hover:underline">
        Volver a {back.label}
      </Link>

      <header className="mt-8 max-w-4xl">
        <p className="font-bold text-lapis">
          Capítulo {chapter.number}, {chapter.period}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl">{version.title}</h1>
        <p className="mt-5 text-xl leading-relaxed">{version.intro}</p>
      </header>

      <nav aria-label="Este capítulo en otras versiones" className="mt-8 flex flex-wrap items-center gap-2 text-sm">
        <span className="mr-1 text-piedra">{voiceNote(audience)} Otras versiones:</span>
        {audiences.map((other) => (
          <Link
            key={other}
            href={chapterPath(other, chapter.slug)}
            aria-current={other === audience ? "page" : undefined}
            className={`rounded-full border px-3 py-1 ${
              other === audience ? "border-tinta bg-tinta text-niebla" : "border-linea hover:border-tinta"
            }`}
          >
            {audienceName[other]}
          </Link>
        ))}
      </nav>

      <section aria-labelledby="en-un-minuto" className="mt-10 rounded-3xl bg-lapis p-7 text-niebla sm:p-9">
        <h2 id="en-un-minuto" className="text-2xl font-bold">
          En un minuto
        </h2>
        <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 text-lg marker:text-alba">
          {version.inAMinute.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-linea lg:hidden">
        <HolyLandMapView map={map} activePlace={null} />
      </div>

      <div className="mt-14">
        <ChapterReader
          sections={version.sections}
          stops={chapter.stops}
          places={chapter.places}
          images={chapter.images}
          map={map}
        />
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

      <section aria-labelledby="quiz-capitulo" className="mt-16">
        <h2 id="quiz-capitulo" className="mb-6 text-3xl font-bold tracking-tight">
          ¿Lo has entendido?
        </h2>
        <Quiz quizId={`${chapter.slug}-${audience}`} questions={version.quiz} />
      </section>

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

      <section className="mt-20 rounded-3xl border-2 border-tinta p-7 sm:p-9">
        <p className="text-xl">{version.next}</p>
        {next && (
          <p className="mt-3 text-piedra">
            Capítulo {next.number}: {next.title}. Próximamente.
          </p>
        )}
      </section>
    </article>
  );
};
