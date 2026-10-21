export const QUICK_QUIZ_LENGTH = 5;

export const possibleScores = Array.from({ length: QUICK_QUIZ_LENGTH + 1 }, (_, score) => score);

/** Convierte el segmento de la URL en una puntuación válida, o null si no lo es. */
export const parseScore = (value: string): number | null => {
  const score = Number(value);
  return Number.isInteger(score) && score >= 0 && score <= QUICK_QUIZ_LENGTH ? score : null;
};

export const resultHeadline = (score: number): string => `He acertado ${score} de ${QUICK_QUIZ_LENGTH}`;

export const resultChallenge = (score: number): string =>
  score === QUICK_QUIZ_LENGTH
    ? "Pleno en el quiz de Lumen sobre el cristianismo. ¿Lo igualas?"
    : "en el quiz de Lumen sobre el cristianismo. ¿Me superas?";
