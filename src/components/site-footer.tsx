import Link from "next/link";

export const SiteFooter = () => (
  <footer className="mt-24 border-t border-linea">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-[0.95rem] text-piedra sm:px-6 md:grid-cols-[2fr_1fr]">
      <div className="max-w-prose space-y-3">
        <p className="font-display text-lg font-semibold text-tinta">Cómo contamos las cosas</p>
        <p>
          Lumen explica las religiones desde la historia y la cultura, sin defender ninguna. Cuando algo se
          basa en la tradición de una fe y no en datos históricos, lo decimos. Las fechas antiguas son
          aproximadas y las cifras de seguidores son estimaciones de 2020.
        </p>
      </div>
      <nav aria-label="Pie de página" className="flex flex-col gap-2">
        <Link className="hover:text-tinta" href="/aprende">Aprende, para clase</Link>
        <Link className="hover:text-tinta" href="/descubre">Descubre, por curiosidad</Link>
        <Link className="hover:text-tinta" href="/religiones/cristianismo">Fichas de cada religión</Link>
      </nav>
    </div>
  </footer>
);
