import type { Unit } from "@/content/levels";

/** Lista de unidades de un nivel. Son una secuencia de curso, por eso van numeradas. */
export const UnitList = ({ units }: { units: readonly Unit[] }) => (
  <ol className="divide-y divide-linea border-y border-linea">
    {units.map((unit, index) => (
      <li key={unit.title} className="grid gap-1 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6">
        <span className="font-display text-2xl font-bold tabular-nums text-piedra">{index + 1}</span>
        <div>
          <p className="font-display text-xl font-semibold">{unit.title}</p>
          <p className="mt-1 text-piedra">{unit.summary}</p>
        </div>
        <span className="text-sm text-piedra">En preparación</span>
      </li>
    ))}
  </ol>
);
