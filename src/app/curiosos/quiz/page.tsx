import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Quiz } from "@/components/quiz";
import { QUICK_QUIZ_LENGTH } from "@/lib/quiz-result";

export const metadata: Metadata = {
  title: "Quiz rápido",
  description: "Cinco preguntas sobre la historia y la cultura del cristianismo. ¿Cuántas aciertas?",
};

export default function QuickQuizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/curiosos", label: "Curiosos" }}
        title="¿Cuánto sabes del cristianismo?"
        lead="Cinco preguntas de historia y cultura. Al terminar, reta a tus amigos a superarte."
      />
      <div className="mt-12">
        <Quiz quizId="curiosos-rapido" count={QUICK_QUIZ_LENGTH} shareable />
      </div>
    </div>
  );
}
