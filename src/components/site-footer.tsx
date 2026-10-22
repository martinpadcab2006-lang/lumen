import Link from "next/link";
import { schoolSectionsVisible } from "@/lib/visibility";

export const SiteFooter = () => (
  <footer className="mt-24 border-t border-linea print:hidden">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-[0.95rem] text-piedra sm:px-6 md:grid-cols-[2fr_1fr]">
      <div className="max-w-prose space-y-3">
        <p className="font-display text-lg font-semibold text-tinta">Cómo contamos las cosas</p>
        {schoolSectionsVisible ? (
          <p>
            En <strong className="font-semibold text-tinta">Descubre</strong> y{" "}
            <strong className="font-semibold text-tinta">Universidad</strong> explicamos el cristianismo desde la
            historia y la cultura, y distinguimos lo que afirma la fe de lo que establece la investigación histórica.
            En <strong className="font-semibold text-tinta">Colegios</strong> lo contamos desde la fe católica.
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
        <Link className="hover:text-tinta" href="/descubre">Descubre</Link>
        {schoolSectionsVisible && (
          <>
            <Link className="hover:text-tinta" href="/colegios">Colegios: Primaria, ESO y Bachillerato</Link>
            <Link className="hover:text-tinta" href="/universidad">Universidad</Link>
          </>
        )}
        <Link className="hover:text-tinta" href="/actualidad">Actualidad</Link>
        <Link className="hover:text-tinta" href="/mapa">Mapa</Link>
        <Link className="hover:text-tinta" href="/comparador">Las iglesias cristianas</Link>
      </nav>
    </div>
  </footer>
);
