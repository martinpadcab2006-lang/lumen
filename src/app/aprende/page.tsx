import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { religions } from "@/content/religions";

export const metadata: Metadata = {
  title: "Aprende",
  description: "Herramientas para estudiar las religiones del mundo en clase: mapa, comparador, quiz y fichas.",
};

type Tool = { href: string; title: string; body: string; levels: string };

const tools: readonly Tool[] = [
  {
    href: "/aprende/mapa",
    title: "Mapa con línea del tiempo",
    body: "Reproduce cuatro mil años de historia y mira cómo se extiende cada tradición. Ideal para abrir un tema en la pizarra digital.",
    levels: "ESO, Bachillerato y universidad",
  },
  {
    href: "/aprende/comparador",
    title: "Comparador",
    body: "Dos religiones frente a frente en diez puntos. Funciona muy bien para trabajos por parejas.",
    levels: "ESO y Bachillerato",
  },
  {
    href: "/aprende/quiz",
    title: "Quiz",
    body: "Diez preguntas con explicación. Útil para repasar al final de una unidad.",
    levels: "ESO y Bachillerato",
  },
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Aprende"
        lead="Herramientas para estudiar las religiones del mundo desde la historia y la cultura, sin defender ninguna. Funcionan en el proyector, en el ordenador y en el móvil."
      />

      <ul className="mt-12 divide-y divide-linea border-y border-linea">
        {tools.map((tool) => (
          <li key={tool.href}>
            <Link href={tool.href} className="group grid gap-2 py-7 md:grid-cols-[20rem_1fr_14rem] md:gap-8">
              <span className="font-display text-2xl font-bold group-hover:underline">{tool.title}</span>
              <span className="text-piedra">{tool.body}</span>
              <span className="text-sm text-piedra md:text-right">{tool.levels}</span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-16" aria-labelledby="fichas">
        <h2 id="fichas" className="text-3xl font-bold tracking-tight">Fichas de cada religión</h2>
        <p className="mt-2 max-w-[60ch] text-piedra">
          Origen, textos, fiestas, creencias y sus hitos principales, en una sola página.
        </p>
        <ul className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {religions.map((religion) => (
            <li key={religion.slug} className="border-b border-linea">
              <Link href={`/religiones/${religion.slug}`} className="group flex items-center gap-3 py-3.5">
                <span aria-hidden className="h-6 w-1.5 rounded-full" style={{ background: religion.color }} />
                <span className="font-display text-xl font-semibold group-hover:underline">{religion.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 max-w-3xl rounded-3xl bg-lapis-suave p-7 sm:p-9" aria-labelledby="proximamente">
        <h2 id="proximamente" className="text-2xl font-bold">Lo que viene para el profesorado</h2>
        <p className="mt-3">
          Modo clase con código para que el alumnado se una al quiz desde el móvil, panel para seguir el
          progreso y fichas imprimibles.
        </p>
      </section>
    </div>
  );
}
