import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Comparator, ComparatorFromSearchParams } from "@/components/comparator";
import { PageIntro } from "@/components/page-intro";
import { churches } from "@/content/churches";

export const metadata: Metadata = {
  title: "Las iglesias cristianas, frente a frente",
  description: "Compara la Iglesia católica, la ortodoxa, las ortodoxas orientales, las protestantes y la anglicana punto por punto.",
};

export default function ComparatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        title="Las iglesias, frente a frente"
        lead="Todas creen en Jesucristo, pero no todas lo viven igual. Elige dos iglesias y compáralas: quién las guía, qué Biblia leen, cuántos sacramentos tienen y mucho más."
      />
      <div className="mt-10">
        <Suspense fallback={<Comparator />}>
          <ComparatorFromSearchParams />
        </Suspense>
      </div>

      <section className="mt-16" aria-labelledby="fichas">
        <h2 id="fichas" className="text-2xl font-bold">Ficha de cada iglesia</h2>
        <ul className="mt-5 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {churches.map((church) => (
            <li key={church.slug} className="border-b border-linea">
              <Link href={`/iglesias/${church.slug}`} className="group flex items-center gap-3 py-3.5">
                <span aria-hidden className="h-6 w-1.5 rounded-full" style={{ background: church.color }} />
                <span className="font-display text-xl font-semibold group-hover:underline">{church.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
