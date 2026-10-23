import Link from "next/link";
import { schoolSectionsVisible } from "@/lib/visibility";
import { LumenMark } from "./lumen-mark";

export const SiteFooter = () => (
  <footer className="banda mt-24 print:hidden">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-[0.95rem] sm:px-6 md:grid-cols-[2fr_1fr]">
      <div className="max-w-prose space-y-3 opacity-90">
        <p className="flex items-center gap-2 font-display text-lg font-semibold text-oro-claro">
          <LumenMark className="size-8" />
          Cómo contamos las cosas
        </p>
        {schoolSectionsVisible ? (
          <p>
            En <strong className="font-semibold text-oro-claro">Descubre</strong> y{" "}
            <strong className="font-semibold text-oro-claro">Universidad</strong> explicamos el cristianismo desde la
            historia y la cultura, y distinguimos lo que afirma la fe de lo que establece la investigación histórica.
            En <strong className="font-semibold text-oro-claro">Colegios</strong> lo contamos desde la fe católica.
          </p>
        ) : (
          <p>
            Explicamos el cristianismo desde la historia y la cultura, y distinguimos lo que afirma la fe de lo que
            establece la investigación histórica.
          </p>
        )}
        <p>Las fechas con «c.» son aproximadas y las cifras de fieles son estimaciones.</p>
      </div>
      <nav aria-label="Pie de página" className="flex flex-col gap-2">
        <Link className="opacity-80 hover:opacity-100" href="/descubre">Descubre</Link>
        {schoolSectionsVisible && (
          <>
            <Link className="opacity-80 hover:opacity-100" href="/colegios">Colegios: Primaria, ESO y Bachillerato</Link>
            <Link className="opacity-80 hover:opacity-100" href="/universidad">Universidad</Link>
          </>
        )}
        <Link className="opacity-80 hover:opacity-100" href="/descubre/historia">La serie</Link>
        <Link className="opacity-80 hover:opacity-100" href="/descubre/papas">Los papas</Link>
        <Link className="opacity-80 hover:opacity-100" href="/arte">Arte</Link>
        <Link className="opacity-80 hover:opacity-100" href="/actualidad">Actualidad</Link>
        <Link className="opacity-80 hover:opacity-100" href="/mapa">Mapa</Link>
        <Link className="opacity-80 hover:opacity-100" href="/comparador">Las iglesias cristianas</Link>
      </nav>
    </div>
  </footer>
);
