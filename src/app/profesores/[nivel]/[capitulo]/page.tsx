import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { PrintButton } from "@/components/print-button";
import { chapterPath, teacherGuidePath, type Chapter, type SchoolAudience } from "@/content/chapter-types";
import { chapters, findChapter } from "@/content/history";
import { findLevel, levels, type Level } from "@/content/levels";
import { hasTeacherAccess } from "@/lib/teacher-access";

export const generateStaticParams = () =>
  levels.flatMap((level) => chapters.map((chapter) => ({ nivel: level.slug, capitulo: chapter.slug })));

export const metadata: Metadata = { title: "Guía para el profesor", robots: { index: false } };

const Heading = ({ children }: { children: string }) => (
  <h2 className="mt-12 text-2xl font-bold tracking-tight print:mt-8 print:text-xl">{children}</h2>
);

const Guide = ({ chapter, level }: { chapter: Chapter; level: Level & { slug: SchoolAudience } }) => {
  const guide = chapter.teacherGuides[level.slug];
  const version = chapter.versions[level.slug];
  const total = guide.session.reduce((sum, step) => sum + step.minutes, 0);

  return (
    <article className="max-w-4xl">
      <div className="flex flex-wrap items-center gap-3 print:hidden">
        <PrintButton />
        <Link href={chapterPath(level.slug, chapter.slug)} className="font-semibold underline hover:text-lapis">
          Abrir el capítulo para proyectarlo
        </Link>
      </div>

      <header className="mt-8">
        <p className="font-bold text-lapis">
          Guía para el profesor · {level.name} · Capítulo {chapter.number}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl print:text-3xl">{version.title}</h1>
        <p className="mt-3 text-lg text-piedra">{guide.duration}</p>
      </header>

      <Heading>Objetivos</Heading>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
        {guide.goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>

      <Heading>Materiales</Heading>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
        {guide.materials.map((material) => (
          <li key={material}>{material}</li>
        ))}
      </ul>

      <Heading>{`La sesión paso a paso (${total} minutos)`}</Heading>
      <ol className="mt-5 space-y-4">
        {guide.session.map((step) => (
          <li key={step.title} className="flex gap-5 rounded-2xl bg-superficie p-5 ring-1 ring-linea print:break-inside-avoid">
            <span className="w-16 shrink-0 font-display text-2xl font-bold tabular-nums text-lapis">{step.minutes}′</span>
            <span>
              <span className="block text-lg font-bold">{step.title}</span>
              <span className="mt-1 block leading-relaxed">{step.description}</span>
            </span>
          </li>
        ))}
      </ol>

      <Heading>Dinámicas para la clase</Heading>
      <div className="mt-5 grid gap-4 md:grid-cols-2 print:grid-cols-1">
        {guide.dynamics.map((dynamic) => (
          <section key={dynamic.title} className="rounded-2xl border-2 border-tinta p-5 print:break-inside-avoid">
            <h3 className="text-lg font-bold">{dynamic.title}</h3>
            <p className="mt-2 leading-relaxed">{dynamic.description}</p>
          </section>
        ))}
      </div>

      {version.activities && (
        <>
          <Heading>Actividades del alumno (están en el capítulo)</Heading>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg">
            {version.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ol>
        </>
      )}

      <Heading>Soluciones y orientaciones</Heading>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
        {guide.answers.map((answer) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>

      <Heading>Rúbrica de evaluación</Heading>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-tinta">
              <th className="py-3 pr-4">Criterio</th>
              <th className="py-3 pr-4">En proceso</th>
              <th className="py-3 pr-4">Conseguido</th>
              <th className="py-3">Destacado</th>
            </tr>
          </thead>
          <tbody>
            {guide.rubric.map((row) => (
              <tr key={row.criterion} className="border-b border-linea align-top">
                <th className="py-3 pr-4 font-semibold">{row.criterion}</th>
                {row.levels.map((text) => (
                  <td key={text} className="py-3 pr-4">
                    {text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Heading>Atención a la diversidad</Heading>
      <dl className="mt-4 space-y-4 text-lg">
        <div>
          <dt className="font-bold">Refuerzo</dt>
          <dd>{guide.adaptations.support}</dd>
        </div>
        <div>
          <dt className="font-bold">Ampliación</dt>
          <dd>{guide.adaptations.extension}</dd>
        </div>
      </dl>
    </article>
  );
};

const ProtectedGuide = async ({ params }: { params: PageProps<"/profesores/[nivel]/[capitulo]">["params"] }) => {
  const { nivel, capitulo } = await params;
  const level = findLevel(nivel);
  const chapter = findChapter(capitulo);
  if (!level || !chapter) notFound();
  if (!(await hasTeacherAccess())) {
    redirect(`/profesores?next=${encodeURIComponent(teacherGuidePath(level.slug, chapter.slug))}`);
  }
  return <Guide chapter={chapter} level={level} />;
};

export default function TeacherGuidePage({ params }: PageProps<"/profesores/[nivel]/[capitulo]">) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <Link href="/profesores" className="text-piedra hover:text-tinta hover:underline print:hidden">
        Volver a la Zona Profesores
      </Link>
      <div className="mt-6">
        <Suspense fallback={<p className="text-piedra">Cargando la guía…</p>}>
          <ProtectedGuide params={params} />
        </Suspense>
      </div>
    </div>
  );
}
