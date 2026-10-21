import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { PrintButton } from "@/components/print-button";
import { temaPath, teacherGuidePath } from "@/content/chapter-types";
import type { Level, TemaSummary } from "@/content/levels";
import { findTemaWithSummary, temas } from "@/content/temas";
import type { Tema } from "@/content/tema-types";
import { hasTeacherAccess } from "@/lib/teacher-access";

export const generateStaticParams = () => temas.map((tema) => ({ nivel: tema.level, tema: tema.slug }));

export const metadata: Metadata = { title: "Guía para el profesor", robots: { index: false } };

const trimesterName = { 1: "1.er trimestre", 2: "2.º trimestre", 3: "3.er trimestre" } as const;

const Heading = ({ children }: { children: string }) => (
  <h2 className="mt-12 text-2xl font-bold tracking-tight print:mt-8 print:text-xl">{children}</h2>
);

const List = ({ items }: { items: readonly string[] }) => (
  <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Guide = ({ level, summary, tema }: { level: Level; summary: TemaSummary; tema: Tema }) => {
  const { guide } = tema;
  const totalMinutes = guide.sessions.reduce(
    (sum, session) => sum + session.steps.reduce((sessionSum, step) => sessionSum + step.minutes, 0),
    0,
  );

  return (
    <article className="max-w-4xl">
      <div className="flex flex-wrap items-center gap-3 print:hidden">
        <PrintButton />
        <Link href={temaPath(level.slug, tema.slug)} className="font-semibold underline hover:text-lapis">
          Abrir el tema para proyectarlo
        </Link>
      </div>

      <header className="mt-8">
        <p className="font-bold text-lapis">
          Guía para el profesor · {level.name} · {trimesterName[summary.trimester]} · Tema {summary.number}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl print:text-3xl">{summary.title}</h1>
        <p className="mt-3 text-lg text-piedra">
          {guide.sessions.length} sesiones · unos {totalMinutes} minutos en total. La gran pregunta: «{tema.question}»
        </p>
      </header>

      <Heading>Objetivos</Heading>
      <List items={guide.goals} />

      <Heading>Currículo de Religión Católica</Heading>
      <h3 className="mt-4 font-bold">Competencias específicas</h3>
      <List items={guide.curriculum.competences} />
      <h3 className="mt-4 font-bold">Saberes básicos</h3>
      <List items={guide.curriculum.knowledge} />

      <Heading>Si tu colegio es IB: perfil de la comunidad de aprendizaje</Heading>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 print:grid-cols-1">
        {guide.ibProfile.map((item) => (
          <div key={item.attribute} className="rounded-2xl bg-superficie p-4 ring-1 ring-linea print:break-inside-avoid">
            <dt className="font-bold">{item.attribute}</dt>
            <dd className="mt-1">{item.how}</dd>
          </div>
        ))}
      </dl>

      <Heading>Materiales</Heading>
      <List items={guide.materials} />

      <Heading>Las sesiones paso a paso</Heading>
      <div className="mt-5 space-y-8">
        {guide.sessions.map((session) => (
          <section key={session.title} className="print:break-inside-avoid">
            <h3 className="text-xl font-bold">{session.title}</h3>
            <ol className="mt-3 space-y-3">
              {session.steps.map((step) => (
                <li key={step.title} className="flex gap-5 rounded-2xl bg-superficie p-5 ring-1 ring-linea">
                  <span className="w-14 shrink-0 font-display text-2xl font-bold tabular-nums text-lapis">{step.minutes}′</span>
                  <span>
                    <span className="block text-lg font-bold">{step.title}</span>
                    <span className="mt-1 block leading-relaxed">{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <Heading>Tarea final</Heading>
      <p className="mt-4 text-lg">
        <span className="font-bold">{tema.finalTask.title}.</span> {tema.finalTask.description}
      </p>
      <p className="mt-2 text-lg">
        <span className="font-bold">Producto: </span>
        {tema.finalTask.product}
      </p>

      <Heading>Dinámicas para la clase</Heading>
      <div className="mt-5 grid gap-4 md:grid-cols-2 print:grid-cols-1">
        {guide.dynamics.map((dynamic) => (
          <section key={dynamic.title} className="rounded-2xl border-2 border-tinta p-5 print:break-inside-avoid">
            <h3 className="text-lg font-bold">{dynamic.title}</h3>
            <p className="mt-2 leading-relaxed">{dynamic.description}</p>
          </section>
        ))}
      </div>

      <Heading>Soluciones y orientaciones</Heading>
      <List items={guide.answers} />

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

const ProtectedGuide = async ({ params }: { params: PageProps<"/profesores/[nivel]/[tema]">["params"] }) => {
  const { nivel, tema } = await params;
  const found = findTemaWithSummary(nivel, tema);
  if (!found) notFound();
  if (!(await hasTeacherAccess())) {
    redirect(`/profesores?next=${encodeURIComponent(teacherGuidePath(found.level.slug, found.tema.slug))}`);
  }
  return <Guide level={found.level} summary={found.summary} tema={found.tema} />;
};

export default function TeacherGuidePage({ params }: PageProps<"/profesores/[nivel]/[tema]">) {
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
