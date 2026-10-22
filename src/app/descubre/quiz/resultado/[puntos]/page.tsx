import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QUICK_QUIZ_LENGTH, parseScore, possibleScores, resultChallenge, resultHeadline } from "@/lib/quiz-result";

export const generateStaticParams = () => possibleScores.map((score) => ({ puntos: String(score) }));

export const generateMetadata = async ({ params }: PageProps<"/descubre/quiz/resultado/[puntos]">): Promise<Metadata> => {
  const score = parseScore((await params).puntos);
  if (score === null) return {};
  const title = `${resultHeadline(score)} en el quiz de Lumen`;
  return { title, description: "¿Cuánto sabes del cristianismo? Cinco preguntas de historia y cultura.", openGraph: { title } };
};

export default async function QuizResultPage({ params }: PageProps<"/descubre/quiz/resultado/[puntos]">) {
  const score = parseScore((await params).puntos);
  if (score === null) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6">
      <p className="text-piedra">Alguien te ha retado</p>
      <p className="mt-4 font-display text-7xl font-extrabold tabular-nums tracking-tight sm:text-8xl">
        {score} de {QUICK_QUIZ_LENGTH}
      </p>
      <p className="mx-auto mt-4 max-w-[40ch] text-xl">
        {score === QUICK_QUIZ_LENGTH ? resultChallenge(score) : `${resultHeadline(score)} ${resultChallenge(score)}`}
      </p>
      <Link
        href="/descubre/quiz"
        className="mt-10 inline-flex rounded-sm bg-tinta px-7 py-3.5 text-lg font-bold text-niebla transition-transform active:scale-[0.97]"
      >
        Aceptar el reto
      </Link>
      <p className="mt-6">
        <Link href="/descubre/curiosidades" className="text-piedra hover:text-tinta hover:underline">
          O lee antes algunas historias de un minuto
        </Link>
      </p>
    </div>
  );
}
