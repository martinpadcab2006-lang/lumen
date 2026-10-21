import Link from "next/link";
import { temaPath, teacherGuidePath } from "@/content/chapter-types";
import type { Level, TemaSummary } from "@/content/levels";
import { isTemaWritten } from "@/content/temas";
import type { Tema } from "@/content/tema-types";
import { Blocks, type ReadingSize } from "../chapter/blocks";
import { MediaShelf } from "../chapter/media-shelf";
import { Quiz } from "../quiz";

const trimesterName = { 1: "1.er trimestre", 2: "2.º trimestre", 3: "3.er trimestre" } as const;

type TemaPageProps = { level: Level; summary: TemaSummary; tema: Tema };

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-sm font-bold uppercase tracking-wide text-lapis">{children}</p>
);

export const TemaPage = ({ level, summary, tema }: TemaPageProps) => {
  const size: ReadingSize = level.slug === "primaria-1" ? "grande" : "normal";
  const isKids = level.slug.startsWith("primaria");
  const context = { library: tema, narratorName: tema.narrator?.name, size };
  const index = level.programme.findIndex((item) => item.slug === tema.slug);
  const written = (item: TemaSummary | undefined) => (item && isTemaWritten(level.slug, item.slug) ? item : undefined);
  const previous = written(level.programme[index - 1]);
  const next = written(level.programme[index + 1]);
  const textSize = size === "grande" ? "text-2xl" : "text-lg";

  const contents = [
    { id: "arranque", label: "Para empezar" },
    ...tema.lessons.map((lesson, lessonIndex) => ({ id: `leccion-${lessonIndex + 1}`, label: lesson.title })),
    { id: "tarea-final", label: "Tarea final" },
    { id: "quiz", label: "¿Lo has entendido?" },
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <Link href={`/colegios/${level.slug}`} className="text-piedra hover:text-tinta hover:underline print:hidden">
        Volver a {level.name}
      </Link>

      <header className="mt-8 max-w-4xl">
        <p className="font-bold text-lapis">
          {level.name} · {trimesterName[summary.trimester]} · Tema {summary.number}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl">{summary.title}</h1>
        <p className={`mt-5 leading-relaxed ${size === "grande" ? "text-2xl" : "text-xl"}`}>{tema.intro}</p>
        {tema.narrator && <p className="mt-4 max-w-[70ch] text-sm text-piedra">{tema.narrator.presentation}</p>}
        <p className="mt-6">
          <Link
            href={teacherGuidePath(level.slug, tema.slug)}
            className="inline-flex items-center gap-2 rounded-full bg-tinta px-4 py-2 text-sm font-semibold text-niebla hover:bg-lapis"
          >
            <span aria-hidden>🔒</span> Guía para el profesor
          </Link>
        </p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <section aria-labelledby="pregunta" className="rounded-3xl bg-alba p-7 text-[#17203a] sm:p-9">
          <h2 id="pregunta" className="text-sm font-bold uppercase tracking-wide">
            La gran pregunta
          </h2>
          <p className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">{tema.question}</p>
        </section>
        <section aria-labelledby="vas-a-aprender" className="rounded-3xl bg-lapis p-7 text-niebla sm:p-9">
          <h2 id="vas-a-aprender" className="text-xl font-bold">
            En este tema vas a aprender
          </h2>
          <ul className={`mt-4 list-disc space-y-2 pl-5 marker:text-alba ${size === "grande" ? "text-xl" : "text-lg"}`}>
            {tema.learn.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </div>

      <nav aria-label="Partes del tema" className="mt-10 print:hidden">
        <ol className="flex flex-wrap gap-2 text-sm">
          {contents.map((item, itemIndex) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="inline-flex rounded-full border border-linea px-3 py-1 hover:border-tinta">
                {itemIndex > 0 && itemIndex <= tema.lessons.length ? `${itemIndex}. ` : ""}
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-6 max-w-4xl">
        <section id="arranque" aria-labelledby="arranque-titulo" className="scroll-mt-6 py-10">
          <SectionLabel>Para empezar</SectionLabel>
          <h2 id="arranque-titulo" className="mt-1 text-3xl font-bold tracking-tight">
            Antes de nada
          </h2>
          <div className="mt-5">
            <Blocks blocks={tema.opening} context={context} />
          </div>
        </section>

        {tema.lessons.map((lesson, lessonIndex) => (
          <section
            key={lesson.title}
            id={`leccion-${lessonIndex + 1}`}
            aria-labelledby={`leccion-${lessonIndex + 1}-titulo`}
            className="scroll-mt-6 border-t border-linea py-10"
          >
            <SectionLabel>{`Lección ${lessonIndex + 1}`}</SectionLabel>
            <h2 id={`leccion-${lessonIndex + 1}-titulo`} className={`mt-1 font-bold tracking-tight ${size === "grande" ? "text-4xl" : "text-3xl"}`}>
              {lesson.title}
            </h2>
            <div className="mt-5">
              <Blocks blocks={lesson.blocks} context={context} />
            </div>
            <aside className="mt-8 rounded-3xl border-2 border-dashed border-lapis p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold">{isKids ? "✏️ Ahora te toca a ti" : "Actividades"}</h3>
              <ol className={`mt-3 list-decimal space-y-2 pl-6 marker:font-bold ${textSize}`}>
                {lesson.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ol>
            </aside>
          </section>
        ))}

        <section id="tarea-final" aria-labelledby="tarea-final-titulo" className="scroll-mt-6 border-t border-linea py-10">
          <SectionLabel>Tarea final</SectionLabel>
          <div className="mt-3 rounded-3xl border-2 border-tinta p-7 sm:p-9">
            <h2 id="tarea-final-titulo" className="text-3xl font-bold tracking-tight">
              {tema.finalTask.title}
            </h2>
            <p className={`mt-3 leading-relaxed ${textSize}`}>{tema.finalTask.description}</p>
            <ol className={`mt-5 list-decimal space-y-2 pl-6 marker:font-bold ${textSize}`}>
              {tema.finalTask.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl bg-superficie px-5 py-4">
              <span className="font-bold">Lo que entregamos: </span>
              {tema.finalTask.product}
            </p>
          </div>
        </section>

        <section id="quiz" aria-labelledby="quiz-titulo" className="scroll-mt-6 border-t border-linea py-10">
          <h2 id="quiz-titulo" className="mb-6 text-3xl font-bold tracking-tight">
            ¿Lo has entendido?
          </h2>
          <Quiz quizId={`${level.slug}-${tema.slug}`} questions={tema.quiz} />
        </section>
      </div>

      {tema.media.length > 0 && (
        <section aria-labelledby="ver-y-escuchar" className="border-t border-linea py-10">
          <h2 id="ver-y-escuchar" className="text-3xl font-bold tracking-tight">
            Para ver y escuchar
          </h2>
          <div className="mt-8">
            <MediaShelf media={tema.media} />
          </div>
        </section>
      )}

      <section aria-labelledby="mas" className="max-w-4xl border-t border-linea py-10">
        <h2 id="mas" className="text-3xl font-bold tracking-tight">
          {isKids ? "¿Quieres más?" : "Para ir más allá"}
        </h2>
        <ul className={`mt-5 list-disc space-y-2 pl-6 ${textSize}`}>
          {tema.extension.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
      </section>

      <nav aria-label="Otros temas" className="mt-6 grid gap-4 sm:grid-cols-2 print:hidden">
        {previous ? (
          <Link href={temaPath(level.slug, previous.slug)} className="rounded-3xl p-6 ring-1 ring-linea hover:ring-tinta">
            <span className="text-sm text-piedra">Tema anterior</span>
            <span className="mt-1 block font-display text-xl font-semibold">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={temaPath(level.slug, next.slug)} className="rounded-3xl p-6 text-right ring-1 ring-linea hover:ring-tinta">
            <span className="text-sm text-piedra">Tema siguiente</span>
            <span className="mt-1 block font-display text-xl font-semibold">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
};
