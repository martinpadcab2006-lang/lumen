import { findPill, pills, topicName } from "@/content/pills";
import { LINK_PREVIEW_SIZE, renderCard, topicHex } from "@/lib/share-image";

export const alt = "Historia de Lumen sobre el cristianismo";
export const size = LINK_PREVIEW_SIZE;
export const contentType = "image/png";

export const generateStaticParams = () => pills.map((pill) => ({ slug: pill.slug }));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pill = findPill(slug) ?? pills[0];
  if (!pill) throw new Error("No hay píldoras");
  return renderCard(
    {
      eyebrow: topicName[pill.topic],
      title: pill.title,
      text: pill.hook,
      color: topicHex[pill.topic],
      footer: "Una historia de un minuto en Lumen",
    },
    size,
  );
}
