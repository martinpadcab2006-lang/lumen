import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PillBrowser } from "@/components/pill-browser";
import { pills, topicColor, topicName } from "@/content/pills";

export const metadata: Metadata = {
  title: "Curiosos",
  description: "Historias de un minuto sobre el cristianismo: fiestas, símbolos, historia y costumbres. Para leer y compartir.",
};

export default function CuriousPage() {
  const [featured, ...rest] = pills;
  if (!featured) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Historias de un minuto"
        lead="Por qué la Navidad es el 25 de diciembre, qué significa INRI o de dónde viene Halloween. El cristianismo explicado desde la historia y la cultura, para leer en un minuto y compartir."
      />

      <Link
        href={`/curiosos/${featured.slug}`}
        className="group mt-12 grid gap-6 rounded-3xl bg-tinta p-7 text-niebla sm:p-10 md:grid-cols-[1.4fr_1fr] md:items-end"
      >
        <div>
          <p className="font-bold" style={{ color: topicColor[featured.topic] }}>
            {topicName[featured.topic]}
          </p>
          <p className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight group-hover:underline sm:text-5xl">
            {featured.title}
          </p>
        </div>
        <p className="text-lg opacity-80">{featured.hook}</p>
      </Link>

      <section className="mt-16" aria-labelledby="todas">
        <h2 id="todas" className="sr-only">
          Todas las historias
        </h2>
        <PillBrowser pills={rest} />
      </section>

      <section className="mt-20 grid gap-6 rounded-3xl bg-lapis-suave p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">¿Cuánto sabes del cristianismo?</h2>
          <p className="mt-2 max-w-[52ch]">Cinco preguntas rápidas. Al final puedes retar a tus amigos a superarte.</p>
        </div>
        <Link
          href="/curiosos/quiz"
          className="self-start rounded-full bg-tinta px-6 py-3 font-bold text-niebla transition-transform active:scale-[0.97] md:self-auto"
        >
          Hacer el quiz
        </Link>
      </section>
    </div>
  );
}
