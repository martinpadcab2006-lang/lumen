"use client";

import { useState } from "react";
import { pickQuestions, type QuizQuestion } from "@/content/quiz";
import { saveQuizAttempt } from "@/lib/supabase";
import { ShareButtons } from "./share-buttons";

type QuizProps = {
  quizId: string;
  /** Preguntas fijas, en este orden. Si no se pasan, se eligen `count` al azar del banco general. */
  questions?: readonly QuizQuestion[];
  count?: number;
  /** Muestra los botones para compartir el resultado en redes. */
  shareable?: boolean;
};

type Answers = Readonly<Record<string, string>>;

const verdictFor = (score: number, total: number): string => {
  const ratio = score / total;
  if (ratio === 1) return "Pleno. Podrías dar tú la clase.";
  if (ratio >= 0.7) return "Muy bien. Repasa las que fallaste y vas a por el pleno.";
  if (ratio >= 0.4) return "Buen comienzo. Las explicaciones de abajo te ayudan a repasar.";
  return "Aquí empieza lo interesante: repasa las explicaciones y vuelve a intentarlo.";
};

const optionStyle = (isAnswered: boolean, isCorrect: boolean, isChosen: boolean): string => {
  if (!isAnswered) return "border-linea hover:border-tinta active:scale-[0.99]";
  if (isCorrect) return "border-acierto bg-acierto/15";
  if (isChosen) return "border-fallo bg-fallo/12";
  return "border-linea opacity-60";
};

const primaryButton = "rounded-full bg-tinta px-5 py-2.5 font-bold text-niebla active:scale-[0.97]";

const Results = ({
  questions,
  answers,
  score,
  shareable,
  onRestart,
}: {
  questions: readonly QuizQuestion[];
  answers: Answers;
  score: number;
  shareable: boolean;
  onRestart: () => void;
}) => (
  <div className="space-y-10">
    <div className="rounded-3xl bg-superficie p-7 ring-1 ring-linea sm:p-10">
      <p className="font-display text-6xl font-extrabold tabular-nums tracking-tight">
        {score} de {questions.length}
      </p>
      <p className="mt-3 text-lg">{verdictFor(score, questions.length)}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" onClick={onRestart} className={primaryButton}>
          Jugar otra vez
        </button>
      </div>
      {shareable && (
        <div className="mt-8 border-t border-linea pt-6">
          <p className="mb-3 font-bold">Reta a alguien a superarte</p>
          <ShareButtons
            path={`/descubre/quiz/resultado/${score}`}
            text={`He acertado ${score} de ${questions.length} en el quiz de Lumen sobre el cristianismo. ¿Me superas?`}
            imagePath={`/descubre/quiz/resultado/${score}/imagen`}
            imageFileName={`lumen-quiz-${score}-de-${questions.length}.png`}
          />
        </div>
      )}
    </div>
    <ol className="space-y-6">
      {questions.map((item, itemIndex) => {
        const correct = answers[item.id] === item.correctId;
        const correctText = item.options.find((option) => option.id === item.correctId)?.text;
        return (
          <li key={item.id} className={`border-l-4 pl-5 ${correct ? "border-acierto" : "border-fallo"}`}>
            <p className="font-bold">
              {itemIndex + 1}. {item.prompt}
            </p>
            <p className="mt-1">
              {correct ? "Acertaste" : "Respuesta correcta"}: {correctText}
            </p>
            <p className="mt-1 text-piedra">{item.explanation}</p>
          </li>
        );
      })}
    </ol>
  </div>
);

export const Quiz = ({ quizId, questions: fixedQuestions, count = 5, shareable = false }: QuizProps) => {
  const [questions, setQuestions] = useState<readonly QuizQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finished, setFinished] = useState(false);

  const start = () => {
    setQuestions(fixedQuestions ?? pickQuestions(count));
    setIndex(0);
    setAnswers({});
    setFinished(false);
  };

  if (!questions) {
    return (
      <div className="max-w-3xl rounded-3xl bg-superficie p-7 ring-1 ring-linea sm:p-10">
        <p className="font-display text-3xl font-bold tracking-tight">{fixedQuestions?.length ?? count} preguntas, sin prisa</p>
        <p className="mt-2 text-piedra">
          Después de cada respuesta verás la explicación.{fixedQuestions ? "" : " Cada partida trae preguntas distintas."}
        </p>
        <button type="button" onClick={start} className={`${primaryButton} mt-6`}>
          Empezar
        </button>
      </div>
    );
  }

  const score = questions.filter((question) => answers[question.id] === question.correctId).length;
  const question = questions[index];

  if (finished || !question) {
    return <Results questions={questions} answers={answers} score={score} shareable={shareable} onRestart={start} />;
  }

  const chosen = answers[question.id];
  const isAnswered = chosen !== undefined;
  const isLast = index === questions.length - 1;

  const finish = () => {
    setFinished(true);
    void saveQuizAttempt({ quizId, score, total: questions.length });
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4">
        <div
          className="h-2 flex-1 overflow-hidden rounded-full bg-niebla-honda"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={index + 1}
          aria-label="Progreso del quiz"
        >
          <div
            className="h-full rounded-full bg-alba shadow-[0_0_10px_var(--alba)] transition-[width] duration-500"
            style={{ width: `${((index + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
        <p className="text-sm tabular-nums text-piedra">
          Pregunta {index + 1} de {questions.length}
        </p>
      </div>

      <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">{question.prompt}</h2>

      <div className="mt-8 grid gap-3" role="group" aria-label="Opciones">
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            disabled={isAnswered}
            onClick={() => setAnswers((current) => ({ ...current, [question.id]: option.id }))}
            className={`rounded-2xl border-2 px-5 py-4 text-left text-lg transition-[transform,border-color,background-color] ${optionStyle(
              isAnswered,
              option.id === question.correctId,
              option.id === chosen,
            )}`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-8 space-y-5" aria-live="polite">
          <p>
            <span className="font-bold">{chosen === question.correctId ? "Correcto." : "No es esa."}</span>{" "}
            {question.explanation}
          </p>
          <button
            type="button"
            onClick={isLast ? finish : () => setIndex((current) => current + 1)}
            className={primaryButton}
          >
            {isLast ? "Ver resultado" : "Siguiente pregunta"}
          </button>
        </div>
      )}
    </div>
  );
};
