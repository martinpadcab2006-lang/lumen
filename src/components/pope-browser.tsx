"use client";

import { useMemo, useState } from "react";
import { formatPontificate, isAvignon, popeEras, popes, type Pope } from "@/content/popes";

type Filter = "todos" | "imprescindibles" | "santos" | "hispanos" | "avinon";

const filters: readonly { id: Filter; label: string; test: (pope: Pope) => boolean }[] = [
  { id: "todos", label: "Todos", test: () => true },
  { id: "imprescindibles", label: "Imprescindibles", test: (pope) => pope.featured === true },
  { id: "santos", label: "Santos", test: (pope) => pope.saint === true },
  { id: "hispanos", label: "Españoles y latinoamericanos", test: (pope) => pope.hispanic === true },
  { id: "avinon", label: "En Aviñón", test: isAvignon },
];

const normalize = (text: string): string => text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

const PopeCard = ({ pope }: { pope: Pope }) => (
  <li
    id={`papa-${pope.number}`}
    className={`scroll-mt-24 bg-niebla px-5 py-5 ${pope.featured ? "border-l-4 border-oro" : ""}`}
  >
    <div className="flex items-baseline gap-4">
      <span className="w-12 shrink-0 font-display text-2xl font-extrabold tabular-nums text-oro">{pope.number}</span>
      <div className="min-w-0">
        <h3 className="font-display text-xl font-bold">{pope.name}</h3>
        <p className="text-sm text-piedra">
          {formatPontificate(pope)} · {pope.origin}
          {pope.saint && " · Santo"}
        </p>
        <p className="mt-2 leading-relaxed">{pope.summary}</p>
      </div>
    </div>
  </li>
);

export const PopeBrowser = () => {
  const [filter, setFilter] = useState<Filter>("todos");
  const [query, setQuery] = useState("");
  const active = filters.find((item) => item.id === filter) ?? filters[0];

  const shown = useMemo(() => {
    const words = normalize(query.trim());
    return popes.filter(
      (pope) =>
        active.test(pope) &&
        (words === "" || normalize(`${pope.name} ${pope.origin} ${pope.summary} ${pope.number}`).includes(words)),
    );
  }, [active, query]);

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-4 border-b border-linea bg-niebla/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <label className="sr-only" htmlFor="buscar-papa">
          Buscar un papa
        </label>
        <input
          id="buscar-papa"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busca por nombre, lugar o tema (Lepanto, Galileo, Valencia…)"
          className="w-full rounded-sm border border-linea bg-superficie px-4 py-2.5"
        />
        <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filtrar papas">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`shrink-0 rounded-sm border px-3 py-1.5 text-sm transition-colors ${
                filter === item.id ? "border-tinta bg-tinta text-niebla" : "border-linea hover:border-tinta"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-piedra" aria-live="polite">
          {shown.length === popes.length ? `Los ${popes.length} papas` : `${shown.length} de ${popes.length} papas`}
        </p>
      </div>

      {popeEras.map((era) => {
        const inEra = shown.filter((pope) => pope.number >= era.from && pope.number <= era.to);
        if (inEra.length === 0) return null;
        return (
          <section key={era.slug} aria-labelledby={`era-${era.slug}`} className="pt-10">
            <h2 id={`era-${era.slug}`} className="text-3xl font-bold tracking-tight">
              {era.title}
            </h2>
            <ol className="mt-4 grid gap-px bg-linea">
              {inEra.map((pope) => (
                <PopeCard key={pope.number} pope={pope} />
              ))}
            </ol>
          </section>
        );
      })}
      {shown.length === 0 && <p className="pt-10 text-piedra">Ningún papa coincide con esa búsqueda.</p>}
    </div>
  );
};
