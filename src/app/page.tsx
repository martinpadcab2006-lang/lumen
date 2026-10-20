import Link from "next/link";
import { TimeSpectrum } from "@/components/time-spectrum";
import { facts } from "@/content/discover";
import { findReligion } from "@/content/religions";

type Door = { href: string; title: string; detail: string };

const classroomTools: readonly Door[] = [
  { href: "/aprende/mapa", title: "Mapa con línea del tiempo", detail: "Mueve los siglos y mira cómo se expande cada tradición." },
  { href: "/aprende/comparador", title: "Comparador", detail: "Dos religiones frente a frente, punto por punto." },
  { href: "/aprende/quiz", title: "Quiz", detail: "Diez preguntas con la explicación de cada respuesta." },
];

const curiousPaths: readonly Door[] = [
  { href: "/descubre#sabias-que", title: "¿Sabías que…?", detail: "Por qué descansamos el domingo y otras historias." },
  { href: "/descubre#fiestas", title: "Fiestas del año", detail: "Qué se celebra cada mes en el mundo." },
  { href: "/descubre#diluvio", title: "Un mismo diluvio", detail: "Cuatro versiones de una historia muy antigua." },
];

export default function HomePage() {
  const featuredFacts = facts.slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20">
        <h1 className="max-w-[16ch] text-5xl font-extrabold tracking-tight sm:text-7xl">
          Cuatro mil años de creencias en una sola línea
        </h1>
        <p className="mt-5 max-w-[56ch] text-lg text-piedra">
          Arrastra la luz por la historia y mira cuándo nace cada gran tradición y por dónde se extiende.
          Pulsa un nombre para conocerla mejor.
        </p>
        <div className="mt-12">
          <TimeSpectrum />
        </div>
      </section>

      <section aria-label="Dos formas de usar Lumen" className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="rounded-3xl bg-lapis p-7 text-niebla sm:p-10">
          <h2 className="text-4xl font-bold tracking-tight">Aprende</h2>
          <p className="mt-2 max-w-[44ch] opacity-85">
            Para clase: herramientas pensadas para ESO, Bachillerato y universidad, que se usan en pocos minutos.
          </p>
          <ul className="mt-8 divide-y divide-current/20 border-y border-current/20">
            {classroomTools.map((tool) => (
              <li key={tool.href}>
                <Link href={tool.href} className="group flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="font-display text-xl font-semibold group-hover:underline sm:w-64 sm:shrink-0">
                    {tool.title}
                  </span>
                  <span className="opacity-80">{tool.detail}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/aprende"
            className="mt-8 inline-flex rounded-full bg-niebla px-5 py-2.5 font-bold text-lapis transition-transform active:scale-[0.97]"
          >
            Ver todo para clase
          </Link>
        </div>

        <div className="rounded-3xl border-2 border-tinta p-7 sm:p-10">
          <h2 className="text-4xl font-bold tracking-tight">Descubre</h2>
          <p className="mt-2 max-w-[44ch] text-piedra">
            Por curiosidad: historias cortas, fiestas y mitos para leer en cinco minutos.
          </p>
          <ul className="mt-8 space-y-5">
            {curiousPaths.map((path) => (
              <li key={path.href}>
                <Link href={path.href} className="group block">
                  <span className="font-display text-xl font-semibold group-hover:underline">{path.title}</span>
                  <span className="block text-piedra">{path.detail}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">¿Sabías que…?</h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {featuredFacts.map((fact) => {
            const religion = findReligion(fact.religion);
            return (
              <article key={fact.title} className="border-l-4 pl-5" style={{ borderColor: religion?.color }}>
                <h3 className="text-xl font-semibold">{fact.title}</h3>
                <p className="mt-2 text-piedra">{fact.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
