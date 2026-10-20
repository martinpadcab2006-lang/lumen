import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Quiz } from "@/components/quiz";
import { quizQuestions } from "@/content/quiz";

export const metadata: Metadata = {
  title: "Quiz",
  description: "Diez preguntas sobre las religiones del mundo, con la explicación de cada respuesta.",
};

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/aprende", label: "Aprende" }}
        title="Quiz: las religiones del mundo"
        lead="Diez preguntas para comprobar lo que sabes. Después de cada respuesta verás por qué es la correcta."
      />
      <div className="mt-12">
        <Quiz quizId="general-1" questions={quizQuestions} />
      </div>
    </div>
  );
}
