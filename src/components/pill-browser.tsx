"use client";

import { useState } from "react";
import { topicColor, topicName, type Pill, type PillTopic } from "@/content/pills";
import { PillCard } from "./pill-card";

const topics = Object.keys(topicName) as PillTopic[];

export const PillBrowser = ({ pills }: { pills: readonly Pill[] }) => {
  const [topic, setTopic] = useState<PillTopic | null>(null);
  const shown = topic ? pills.filter((pill) => pill.topic === topic) : pills;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tema">
        <button
          type="button"
          aria-pressed={topic === null}
          onClick={() => setTopic(null)}
          className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
            topic === null ? "border-tinta bg-tinta text-niebla" : "border-linea hover:border-tinta"
          }`}
        >
          Todas
        </button>
        {topics.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={topic === item}
            onClick={() => setTopic(item)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors ${
              topic === item ? "border-tinta bg-tinta text-niebla" : "border-linea hover:border-tinta"
            }`}
          >
            <span aria-hidden className="size-2.5 rounded-full" style={{ background: topicColor[item] }} />
            {topicName[item]}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((pill) => (
          <PillCard key={pill.slug} pill={pill} />
        ))}
      </div>
    </div>
  );
};
