"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { findReligion, religions, type Religion, type ReligionSlug } from "@/content/religions";

type Row = { label: string; pick: (religion: Religion) => string };

const rows: readonly Row[] = [
  { label: "Dónde nace", pick: (r) => r.originPlace },
  { label: "Cuándo", pick: (r) => r.originNote },
  { label: "Figura fundadora", pick: (r) => r.founder },
  { label: "Lo divino", pick: (r) => r.divine },
  { label: "Textos sagrados", pick: (r) => r.texts },
  { label: "Lugar de culto", pick: (r) => r.worship },
  { label: "Fiestas", pick: (r) => r.festival },
  { label: "Después de la muerte", pick: (r) => r.afterlife },
  { label: "Seguidores hoy", pick: (r) => r.followers },
  { label: "Símbolo", pick: (r) => r.symbol },
];

const DEFAULT_A: ReligionSlug = "cristianismo";
const DEFAULT_B: ReligionSlug = "islam";

type ComparatorProps = { initialA?: ReligionSlug; initialB?: ReligionSlug };

const ReligionSelect = ({
  id,
  label,
  value,
  exclude,
  onChange,
}: {
  id: string;
  label: string;
  value: ReligionSlug;
  exclude: ReligionSlug;
  onChange: (slug: ReligionSlug) => void;
}) => (
  <div className="flex-1">
    <label htmlFor={id} className="mb-1.5 block text-sm text-piedra">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(event) => {
        const religion = findReligion(event.target.value);
        if (religion) onChange(religion.slug);
      }}
      className="w-full rounded-xl border-2 border-tinta bg-superficie px-3 py-2.5 font-display text-lg font-semibold"
    >
      {religions.map((religion) => (
        <option key={religion.slug} value={religion.slug} disabled={religion.slug === exclude}>
          {religion.name}
        </option>
      ))}
    </select>
  </div>
);

export const Comparator = ({ initialA = DEFAULT_A, initialB = DEFAULT_B }: ComparatorProps) => {
  const [slugA, setSlugA] = useState<ReligionSlug>(initialA);
  const [slugB, setSlugB] = useState<ReligionSlug>(initialA === initialB ? DEFAULT_B : initialB);
  const a = findReligion(slugA);
  const b = findReligion(slugB);
  if (!a || !b) return null;

  const swap = () => {
    setSlugA(slugB);
    setSlugB(slugA);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <ReligionSelect id="religion-a" label="Primera religión" value={slugA} exclude={slugB} onChange={setSlugA} />
        <button
          type="button"
          onClick={swap}
          className="self-start rounded-full border-2 border-linea px-4 py-2 text-sm font-bold hover:border-tinta active:scale-[0.97] sm:self-auto sm:mb-1"
        >
          Intercambiar
        </button>
        <ReligionSelect id="religion-b" label="Segunda religión" value={slugB} exclude={slugA} onChange={setSlugB} />
      </div>

      <div className="overflow-hidden rounded-3xl ring-1 ring-linea">
        <div className="grid grid-cols-2 md:grid-cols-[12rem_1fr_1fr]">
          <div className="hidden bg-superficie md:block" />
          {[a, b].map((religion) => (
            <Link
              key={religion.slug}
              href={`/religiones/${religion.slug}`}
              className="border-t-8 bg-superficie px-5 py-4 font-display text-2xl font-bold hover:underline"
              style={{ borderColor: religion.color }}
            >
              {religion.name}
            </Link>
          ))}
        </div>
        <dl>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-2 border-t border-linea bg-superficie md:grid-cols-[12rem_1fr_1fr]"
            >
              <dt className="col-span-2 px-5 pt-4 font-bold md:col-span-1 md:py-4">{row.label}</dt>
              <dd className="px-5 py-4 text-piedra md:border-l md:border-linea">{row.pick(a)}</dd>
              <dd className="border-l border-linea px-5 py-4 text-piedra">{row.pick(b)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export const ComparatorFromSearchParams = () => {
  const searchParams = useSearchParams();
  const a = findReligion(searchParams.get("a") ?? "");
  const b = findReligion(searchParams.get("b") ?? "");
  const initialA = a?.slug ?? DEFAULT_A;
  const initialB = b?.slug ?? (initialA === DEFAULT_B ? DEFAULT_A : DEFAULT_B);
  return <Comparator key={`${initialA}-${initialB}`} initialA={initialA} initialB={initialB} />;
};
