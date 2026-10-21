import { LINK_PREVIEW_SIZE, renderCard } from "@/lib/share-image";
import { QUICK_QUIZ_LENGTH, parseScore, possibleScores, resultHeadline } from "@/lib/quiz-result";

export const alt = "Resultado del quiz de Lumen";
export const size = LINK_PREVIEW_SIZE;
export const contentType = "image/png";

export const generateStaticParams = () => possibleScores.map((score) => ({ puntos: String(score) }));

export default async function Image({ params }: { params: Promise<{ puntos: string }> }) {
  const score = parseScore((await params).puntos) ?? 0;
  return renderCard(
    {
      eyebrow: "Quiz sobre el cristianismo",
      title: `${resultHeadline(score)}`,
      text: score === QUICK_QUIZ_LENGTH ? "Pleno. ¿Lo igualas?" : "¿Me superas?",
      color: "#2b44a0",
      footer: "Cinco preguntas en Lumen",
    },
    size,
  );
}
