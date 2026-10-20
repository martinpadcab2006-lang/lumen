"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/content/quiz";
import { saveQuizAttempt } from "@/lib/supabase";

type QuizProps = { quizId: string; questions: readonly QuizQuestion[] };

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

export const Quiz = ({ quizId, questions }: QuizProps) => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finished, setFinished] = useState(false);

  const score = questions.filter((question) => answers[question.id] === question.correctId).length;
  const question = questions[index];

  const restart = () => {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  };

  const finish = () => {
    setFinished(true);
    void saveQuizAttempt({ quizId, score, total: questions.length });
  };

  if (finished || !question) {
    return (
      <div className="space-y-10">
        <div className="rounded-3xl bg-superficie p-7 ring-1 ring-linea sm:p-10">
          <p className="font-display text-6xl font-extrabold tabular-nums tracking-tight">
            {score} de {questions.length}
          </p>
          <p className="mt-3 text-lg">{verdictFor(score, questions.length)}</p>
          <button
            type="button"
            onClick={restart}
            className="mt-6 rounded-full bg-tinta px-5 py-2.5 font-bold text-niebla active:scale-[0.97]"
          >
            Volver a jugar
          </button>
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
  }

  const chosen = answers[question.id];
  const isAnswered = chosen !== undefined;
  const isLast = index === questions.length - 1;

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
        {question.options.map((option) => {
          const isCorrect = option.id === question.correctId;
          const isChosen = option.id === chosen;
          return (
            <button
              key={option.id}
              type="button"
              disabled={isAnswered}
              onClick={() => setAnswers((current) => ({ ...current, [question.id]: option.id }))}
              className={`rounded-2xl border-2 px-5 py-4 text-left text-lg transition-[transform,border-color,background-color] ${optionStyle(isAnswered, isCorrect, isChosen)}`}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-8 space-y-5" aria-live="polite">
          <p>
            <span className="font-bold">
              {chosen === question.correctId ? "Correcto." : "No es esa."}
            </span>{" "}
            {question.explanation}
          </p>
          <button
            type="button"
            onClick={isLast ? finish : () => setIndex((current) => current + 1)}
            className="rounded-full bg-tinta px-5 py-2.5 font-bold text-niebla active:scale-[0.97]"
          >
            {isLast ? "Ver resultado" : "Siguiente pregunta"}
          </button>
        </div>
      )}
    </div>
  );
};
