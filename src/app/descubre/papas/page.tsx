import type { Metadata } from "next";
import Link from "next/link";
import { PopeBrowser } from "@/components/pope-browser";
import { popeRecords, popes } from "@/content/popes";

export const metadata: Metadata = {
  title: "Los papas",
  description: `Los ${popes.length} papas de la historia, de san Pedro a León XIV, y qué hizo cada uno.`,
};

export default function PopesPage() {
  return (
    <>
      <section className="banda">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 sm:pt-10">
          <Link href="/descubre" className="text-sm opacity-80 hover:underline hover:opacity-100">
            ← Descubre
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-alba">De san Pedro a León XIV</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">Los {popes.length} papas</h1>
          <p className="mt-4 max-w-[58ch] text-lg opacity-90">
            Dos mil años de obispos de Roma, uno a uno: de dónde eran, cuánto duraron y qué hicieron. Hay santos, sabios,
            guerreros, reformadores y algún escándalo.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-px bg-papel-claro/15 sm:grid-cols-3">
            {popeRecords.map((record) => (
              <li key={record.label} className="bg-granate p-4">
                <p className="font-display text-3xl font-extrabold text-oro-claro">{record.value}</p>
                <p className="mt-1 text-sm opacity-85">{record.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
        <PopeBrowser />

        <aside className="mt-16 border-t-4 border-oro bg-superficie p-6 sm:p-8">
          <h2 className="text-2xl font-bold">¿Y los antipapas?</h2>
          <div className="mt-3 space-y-3 leading-relaxed">
            <p>
              Un antipapa es alguien que se proclamó papa sin ser reconocido como tal por la Iglesia. Hubo una treintena. El
              primero fue Hipólito, en el siglo III, y la mayoría aparecieron en épocas de enfrentamiento con los emperadores
              o durante el Cisma de Occidente (1378-1417).
            </p>
            <p>
              El más famoso para nosotros es el aragonés Pedro Martínez de Luna, el «Papa Luna» (Benedicto XIII). Nunca
              aceptó renunciar y siguió considerándose papa en el castillo de Peñíscola hasta su muerte en 1423. Se suele decir
              que de su terquedad viene la expresión «mantenerse en sus trece».
            </p>
          </div>
        </aside>

        <p className="mt-10 text-sm text-piedra">
          La numeración sigue la lista habitual (Anuario Pontificio y Wikipedia), en la que Benedicto IX cuenta tres veces.
          Las fechas de los primeros siglos son aproximadas. Fuentes: Anuario Pontificio; J. N. D. Kelly, Diccionario de los
          papas; Wikipedia, «Anexo:Papas».
        </p>
      </div>
    </>
  );
}
