import { notFound } from "next/navigation";
import { POST_SIZE, renderCard } from "@/lib/share-image";
import { QUICK_QUIZ_LENGTH, parseScore, possibleScores, resultHeadline } from "@/lib/quiz-result";

export const generateStaticParams = () => possibleScores.map((score) => ({ puntos: String(score) }));

/** Tarjeta vertical del resultado, para subir a Instagram o TikTok. */
export async function GET(_request: Request, { params }: RouteContext<"/descubre/quiz/resultado/[puntos]/imagen">) {
  const score = parseScore((await params).puntos);
  if (score === null) notFound();
  return renderCard(
    {
      eyebrow: "Quiz sobre el cristianismo",
      title: resultHeadline(score),
      text: score === QUICK_QUIZ_LENGTH ? "Pleno. ¿Lo igualas?" : "¿Me superas?",
      color: "#2b44a0",
      footer: `Cinco preguntas en Lumen. Ahora te toca a ti.`,
    },
    POST_SIZE,
  );
}
