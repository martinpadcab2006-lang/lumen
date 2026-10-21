"use client";

export const PrintButton = () => (
  <button
    type="button"
    onClick={() => window.print()}
    className="rounded-full border-2 border-tinta px-5 py-2 font-bold transition-transform active:scale-[0.97] print:hidden"
  >
    Imprimir o guardar en PDF
  </button>
);
