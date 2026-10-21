import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemaPage } from "@/components/tema/tema-page";
import { findTemaWithSummary, temas } from "@/content/temas";

export const generateStaticParams = () => temas.map((tema) => ({ nivel: tema.level, tema: tema.slug }));

export const generateMetadata = async ({ params }: PageProps<"/colegios/[nivel]/[tema]">): Promise<Metadata> => {
  const { nivel, tema } = await params;
  const found = findTemaWithSummary(nivel, tema);
  return found ? { title: `${found.summary.title} · ${found.level.name}`, description: found.tema.intro } : {};
};

export default async function TemaRoute({ params }: PageProps<"/colegios/[nivel]/[tema]">) {
  const { nivel, tema } = await params;
  const found = findTemaWithSummary(nivel, tema);
  if (!found) notFound();
  return <TemaPage level={found.level} summary={found.summary} tema={found.tema} />;
}
