"use client";

import { useState } from "react";

type ShareButtonsProps = {
  /** Ruta dentro de la web, por ejemplo «/descubre/curiosidades/el-pez-simbolo-cristiano». */
  path: string;
  text: string;
  /** Ruta de una imagen para descargar y subir a Instagram o TikTok. */
  imagePath?: string;
  imageFileName?: string;
};

const absoluteUrl = (path: string): string => new URL(path, window.location.origin).toString();

const buttonClass =
  "inline-flex items-center rounded-sm border-2 border-tinta px-4 py-2 text-sm font-bold transition-transform active:scale-[0.97]";

export const ShareButtons = ({ path, text, imagePath, imageFileName }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = absoluteUrl(path);
    if (navigator.share) {
      try {
        await navigator.share({ title: "Lumen", text, url });
      } catch {
        // La persona ha cerrado el menú de compartir: no hay nada que hacer.
      }
      return;
    }
    await copyLink();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl(path));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const openWhatsApp = () => {
    const message = `${text} ${absoluteUrl(path)}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" onClick={share} className={`${buttonClass} bg-tinta text-niebla`}>
        Compartir
      </button>
      <button type="button" onClick={openWhatsApp} className={buttonClass}>
        WhatsApp
      </button>
      <button type="button" onClick={copyLink} className={buttonClass} aria-live="polite">
        {copied ? "Enlace copiado" : "Copiar enlace"}
      </button>
      {imagePath && (
        <a href={imagePath} download={imageFileName} className={buttonClass}>
          Descargar imagen
        </a>
      )}
    </div>
  );
};
