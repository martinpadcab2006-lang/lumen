import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { PillTopic } from "@/content/pills";

/** Las imágenes no entienden variables CSS: aquí van los mismos colores en hex. */
const INK = "#17203a";
const MIST = "#eef1f5";
const STONE = "#5f6780";
const DAWN = "#f2b53a";

export const topicHex: Readonly<Record<PillTopic, string>> = {
  fiestas: "#b7791f",
  simbolos: "#2b44a0",
  historia: "#8a5a2b",
  biblia: "#13855f",
  costumbres: "#b4234c",
  iglesias: "#6c43b8",
};

export type ImageSize = { width: number; height: number };

/** Para la vista previa de enlaces (WhatsApp, X, Facebook…). */
export const LINK_PREVIEW_SIZE: ImageSize = { width: 1200, height: 630 };
/** Para publicar en Instagram o TikTok (formato vertical 4:5). */
export const POST_SIZE: ImageSize = { width: 1080, height: 1350 };

const loadFonts = async () => {
  const fontsDir = join(process.cwd(), "src/assets/fonts");
  const [display, body] = await Promise.all([
    readFile(join(fontsDir, "bricolage-grotesque-latin-800-normal.woff")),
    readFile(join(fontsDir, "lexend-latin-400-normal.woff")),
  ]);
  return [
    { name: "Bricolage", data: display, weight: 800 as const, style: "normal" as const },
    { name: "Lexend", data: body, weight: 400 as const, style: "normal" as const },
  ];
};

const Brand = ({ scale }: { scale: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14 * scale }}>
    <div
      style={{
        width: 22 * scale,
        height: 22 * scale,
        borderRadius: 999,
        background: DAWN,
        boxShadow: `0 0 ${28 * scale}px ${8 * scale}px ${DAWN}`,
      }}
    />
    <div style={{ fontFamily: "Bricolage", fontSize: 34 * scale, color: INK }}>Lumen</div>
  </div>
);

type CardProps = { eyebrow: string; title: string; text: string; color: string; footer: string };

const Card = ({ eyebrow, title, text, color, footer, size }: CardProps & { size: ImageSize }) => {
  const isTall = size.height > size.width;
  const scale = isTall ? 1.2 : 1;
  const titleSize = isTall ? (title.length > 50 ? 84 : 100) : title.length > 50 ? 60 : 72;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: MIST,
        padding: isTall ? 90 : 70,
        borderTop: `${isTall ? 28 : 20}px solid ${color}`,
        fontFamily: "Lexend",
      }}
    >
      <Brand scale={scale} />
      <div style={{ display: "flex", flexDirection: "column", gap: 28 * scale }}>
        <div style={{ fontSize: 30 * scale, color }}>{eyebrow}</div>
        <div style={{ fontFamily: "Bricolage", fontSize: titleSize, lineHeight: 1.05, color: INK, letterSpacing: -1.5 }}>
          {title}
        </div>
        <div style={{ fontSize: isTall ? 40 : 32, lineHeight: 1.4, color: STONE }}>{text}</div>
      </div>
      <div style={{ fontSize: 26 * scale, color: STONE }}>{footer}</div>
    </div>
  );
};

export const renderCard = async (props: CardProps, size: ImageSize): Promise<ImageResponse> =>
  new ImageResponse(<Card {...props} size={size} />, { ...size, fonts: await loadFonts() });
