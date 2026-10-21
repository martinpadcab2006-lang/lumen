"use client";

import { useEffect, useRef, type ComponentProps } from "react";

/** Imagen externa que, si no carga, oculta su figura entera en lugar de dejar un hueco roto. */
export const SafeImg = (props: ComponentProps<"img">) => {
  const ref = useRef<HTMLImageElement>(null);
  const hide = () => ref.current?.closest("figure")?.setAttribute("hidden", "");

  useEffect(() => {
    const image = ref.current;
    if (image?.complete && image.naturalWidth === 0) hide();
  }, []);

  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img ref={ref} onError={hide} {...props} />;
};
