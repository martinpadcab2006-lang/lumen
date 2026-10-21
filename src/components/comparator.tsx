"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { churches, findChurch, type Church, type ChurchSlug } from "@/content/churches";

type Row = { label: string; pick: (church: Church) => string };

const rows: readonly Row[] = [
  { label: "Cómo nace", pick: (c) => c.splitNote },
  { label: "Quién la guía", pick: (c) => c.authority },
  { label: "La Biblia", pick: (c) => c.bible },
  { label: "Sacramentos", pick: (c) => c.sacraments },
  { label: "Sacerdotes y pastores", pick: (c) => c.clergy },
  { label: "María", pick: (c) => c.mary },
  { label: "Imágenes", pick: (c) => c.images },
  { label: "Eucaristía", pick: (c) => c.eucharist },
  { label: "Fieles hoy", pick: (c) => c.followers },
  { label: "Dónde está", pick: (c) => c.where },
];

const DEFAULT_A: ChurchSlug = "catolica";
const DEFAULT_B: ChurchSlug = "protestante";

type ComparatorProps = { initialA?: ChurchSlug; initialB?: ChurchSlug };

const ChurchSelect = ({
  id,
  label,
  value,
  exclude,
  onChange,
}: {
  id: string;
  label: string;
  value: ChurchSlug;
  exclude: ChurchSlug;
  onChange: (slug: ChurchSlug) => void;
}) => (
  <div className="flex-1">
    <label htmlFor={id} className="mb-1.5 block text-sm text-piedra">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(event) => {
        const church = findChurch(event.target.value);
        if (church) onChange(church.slug);
      }}
      className="w-full rounded-xl border-2 border-tinta bg-superficie px-3 py-2.5 font-display text-lg font-semibold"
    >
      {churches.map((church) => (
        <option key={church.slug} value={church.slug} disabled={church.slug === exclude}>
          {church.name}
        </option>
      ))}
    </select>
  </div>
);

export const Comparator = ({ initialA = DEFAULT_A, initialB = DEFAULT_B }: ComparatorProps) => {
  const [slugA, setSlugA] = useState<ChurchSlug>(initialA);
  const [slugB, setSlugB] = useState<ChurchSlug>(initialA === initialB ? DEFAULT_B : initialB);
  const a = findChurch(slugA);
  const b = findChurch(slugB);
  if (!a || !b) return null;

  const swap = () => {
    setSlugA(slugB);
    setSlugB(slugA);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <ChurchSelect id="iglesia-a" label="Primera iglesia" value={slugA} exclude={slugB} onChange={setSlugA} />
        <button
          type="button"
          onClick={swap}
          className="self-start rounded-full border-2 border-linea px-4 py-2 text-sm font-bold hover:border-tinta active:scale-[0.97] sm:self-auto sm:mb-1"
        >
          Intercambiar
        </button>
        <ChurchSelect id="iglesia-b" label="Segunda iglesia" value={slugB} exclude={slugA} onChange={setSlugB} />
      </div>

      <div className="overflow-hidden rounded-3xl ring-1 ring-linea">
        <div className="grid grid-cols-2 md:grid-cols-[12rem_1fr_1fr]">
          <div className="hidden bg-superficie md:block" />
          {[a, b].map((church) => (
            <Link
              key={church.slug}
              href={`/iglesias/${church.slug}`}
              className="border-t-8 bg-superficie px-5 py-4 font-display text-2xl font-bold hover:underline"
              style={{ borderColor: church.color }}
            >
              {church.shortName}
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
  const a = findChurch(searchParams.get("a") ?? "");
  const b = findChurch(searchParams.get("b") ?? "");
  const initialA = a?.slug ?? DEFAULT_A;
  const initialB = b?.slug ?? (initialA === DEFAULT_B ? DEFAULT_A : DEFAULT_B);
  return <Comparator key={`${initialA}-${initialB}`} initialA={initialA} initialB={initialB} />;
};
