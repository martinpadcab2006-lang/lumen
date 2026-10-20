import type { Metadata } from "next";
import { Suspense } from "react";
import { Comparator, ComparatorFromSearchParams } from "@/components/comparator";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Comparador",
  description: "Compara dos religiones punto por punto: origen, textos, fiestas, creencias y más.",
};

export default function ComparatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <PageIntro
        back={{ href: "/aprende", label: "Aprende" }}
        title="Comparador"
        lead="Elige dos tradiciones y míralas frente a frente. Sirve para encontrar parecidos que sorprenden y diferencias que conviene conocer."
      />
      <div className="mt-10">
        <Suspense fallback={<Comparator />}>
          <ComparatorFromSearchParams />
        </Suspense>
      </div>
    </div>
  );
}
