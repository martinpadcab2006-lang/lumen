import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { teacherGuidePath } from "@/content/chapter-types";
import { chapters } from "@/content/history";
import { levels } from "@/content/levels";
import { hasTeacherAccess, teacherPasswordConfigured } from "@/lib/teacher-access";
import { enterTeacherZone, leaveTeacherZone } from "./actions";

export const metadata: Metadata = {
  title: "Zona Profesores",
  description: "Guías didácticas de Lumen para el profesorado de Religión.",
  robots: { index: false },
};

const LoginForm = ({ next, failed }: { next: string; failed: boolean }) => (
  <form action={enterTeacherZone} className="max-w-md rounded-3xl bg-superficie p-7 ring-1 ring-linea sm:p-9">
    <input type="hidden" name="next" value={next} />
    <label htmlFor="password" className="block text-lg font-bold">
      Contraseña del profesorado
    </label>
    <input
      id="password"
      name="password"
      type="password"
      required
      autoComplete="current-password"
      className="mt-3 w-full rounded-xl border-2 border-linea bg-niebla px-4 py-3 text-lg focus:border-lapis focus:outline-none"
    />
    {failed && (
      <p role="alert" className="mt-3 font-semibold text-fallo">
        La contraseña no es correcta. Inténtalo de nuevo.
      </p>
    )}
    <button
      type="submit"
      className="mt-5 rounded-full bg-lapis px-6 py-3 font-bold text-niebla transition-transform active:scale-[0.97]"
    >
      Entrar
    </button>
    <p className="mt-5 text-sm text-piedra">
      Si eres profesor y no tienes la contraseña, pídesela al responsable de Lumen en tu centro.
    </p>
  </form>
);

const GuideIndex = () => (
  <div className="space-y-10">
    {levels.map((level) => (
      <section key={level.slug} aria-labelledby={`guias-${level.slug}`}>
        <h2 id={`guias-${level.slug}`} className="text-2xl font-bold">
          {level.name} <span className="text-base font-normal text-piedra">· {level.ages}</span>
        </h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {chapters.map((chapter) => (
            <li key={chapter.slug}>
              <Link
                href={teacherGuidePath(level.slug, chapter.slug)}
                className="group block rounded-3xl border-2 border-tinta p-6 hover:bg-superficie"
              >
                <span className="text-sm text-piedra">Capítulo {chapter.number}</span>
                <span className="mt-1 block font-display text-xl font-semibold group-hover:underline">
                  {chapter.versions[level.slug].title}
                </span>
                <span className="mt-2 block text-piedra">{chapter.teacherGuides[level.slug].duration}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    ))}
    <form action={leaveTeacherZone}>
      <button type="submit" className="text-piedra underline hover:text-tinta">
        Salir de la Zona Profesores
      </button>
    </form>
  </div>
);

const TeacherArea = async ({ searchParams }: { searchParams: PageProps<"/profesores">["searchParams"] }) => {
  const query = await searchParams;
  const hasAccess = await hasTeacherAccess();
  if (!teacherPasswordConfigured()) {
    return (
      <p className="max-w-[60ch] rounded-3xl bg-superficie p-7 ring-1 ring-linea">
        La Zona Profesores todavía no tiene contraseña. Hay que añadir la variable TEACHER_PASSWORD en la
        configuración del proyecto en Vercel.
      </p>
    );
  }
  if (hasAccess) return <GuideIndex />;

  const next = typeof query.next === "string" ? query.next : "/profesores";
  return <LoginForm next={next} failed={query.error === "1"} />;
};

export default function TeachersPage({ searchParams }: PageProps<"/profesores">) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/colegios", label: "Colegios" }}
        title="Zona Profesores"
        lead="Guías para dar cada capítulo en clase: objetivos, una sesión paso a paso, dinámicas, soluciones, rúbrica y adaptaciones. Se pueden imprimir."
      />
      <div className="mt-10">
        <Suspense fallback={<p className="text-piedra">Cargando…</p>}>
          <TeacherArea searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
