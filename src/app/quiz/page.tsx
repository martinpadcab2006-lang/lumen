import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Quiz } from "@/components/quiz";

export const metadata: Metadata = {
  title: "Quiz para clase",
  description: "Diez preguntas sobre el cristianismo para jugar en clase, con la explicación de cada respuesta.",
};

export default function ClassQuizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/colegios", label: "Colegios" }}
        title="Quiz para clase"
        lead="Diez preguntas para jugar en grupo con el proyector o cada uno en su dispositivo. Después de cada respuesta aparece la explicación."
      />
      <div className="mt-12">
        <Quiz quizId="clase-10" count={10} />
      </div>
    </div>
  );
}
