import { notFound } from "next/navigation";
import { findPill, pills, topicName } from "@/content/pills";
import { POST_SIZE, renderCard, topicHex } from "@/lib/share-image";

export const generateStaticParams = () => pills.map((pill) => ({ slug: pill.slug }));

/** Tarjeta vertical (1080 × 1350) lista para subir a Instagram o TikTok. */
export async function GET(_request: Request, { params }: RouteContext<"/curiosos/[slug]/imagen">) {
  const { slug } = await params;
  const pill = findPill(slug);
  if (!pill) notFound();
  return renderCard(
    {
      eyebrow: topicName[pill.topic],
      title: pill.title,
      text: pill.hook,
      color: topicHex[pill.topic],
      footer: "Lee la historia completa en Lumen",
    },
    POST_SIZE,
  );
}
