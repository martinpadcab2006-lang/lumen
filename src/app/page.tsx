import Link from "next/link";
import { PillCard } from "@/components/pill-card";
import { TimeSpectrum } from "@/components/time-spectrum";
import { levels } from "@/content/levels";
import { pills } from "@/content/pills";

type DoorLink = { href: string; label: string };

const universityLinks: readonly DoorLink[] = [
  { href: "/comparador", label: "Comparador de iglesias" },
  { href: "/mapa", label: "Mapa de la expansión" },
  { href: "/#linea-del-tiempo", label: "Línea del tiempo" },
];

export default function HomePage() {
  const featuredPills = pills.slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
        <h1 className="max-w-[15ch] text-5xl font-extrabold tracking-tight sm:text-7xl">
          El cristianismo, contado a fondo
        </h1>
        <p className="mt-5 max-w-[58ch] text-lg text-piedra">
          Dos mil años de historia, fe y cultura. Elige por dónde quieres entrar.
        </p>
      </section>

      <section aria-label="Tres formas de entrar" className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-3">
        <div className="flex flex-col rounded-3xl bg-lapis p-7 text-niebla sm:p-8">
          <h2 className="text-3xl font-bold tracking-tight">Curiosos</h2>
          <p className="mt-2 opacity-85">
            Historias de un minuto sobre fiestas, símbolos e historia. Para leer y compartir.
          </p>
          <ul className="mt-6 flex-1 space-y-3">
            {pills.slice(3, 6).map((pill) => (
              <li key={pill.slug}>
                <Link href={`/curiosos/${pill.slug}`} className="font-display text-lg font-semibold leading-snug hover:underline">
                  {pill.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/curiosos"
            className="mt-7 self-start rounded-full bg-niebla px-5 py-2.5 font-bold text-lapis transition-transform active:scale-[0.97]"
          >
            Ver todas las historias
          </Link>
        </div>

        <div className="flex flex-col rounded-3xl border-2 border-tinta p-7 sm:p-8">
          <h2 className="text-3xl font-bold tracking-tight">Colegios</h2>
          <p className="mt-2 text-piedra">Unidades para clase, contadas desde la fe cristiana.</p>
          <ul className="mt-6 flex-1 divide-y divide-linea border-y border-linea">
            {levels.map((level) => (
              <li key={level.slug}>
                <Link href={`/colegios/${level.slug}`} className="group flex items-baseline justify-between gap-4 py-3">
                  <span className="font-display text-xl font-semibold group-hover:underline">{level.name}</span>
                  <span className="text-sm text-piedra">{level.ages}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/colegios" className="mt-7 self-start rounded-full border-2 border-tinta px-5 py-2 font-bold transition-transform active:scale-[0.97]">
            Ver todo para clase
          </Link>
        </div>

        <div className="flex flex-col rounded-3xl border-2 border-tinta p-7 sm:p-8">
          <h2 className="text-3xl font-bold tracking-tight">Universidad</h2>
          <p className="mt-2 text-piedra">Historia y cultura del cristianismo para estudiar a fondo.</p>
          <ul className="mt-6 flex-1 divide-y divide-linea border-y border-linea">
            {universityLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-3 font-display text-xl font-semibold hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/universidad" className="mt-7 self-start rounded-full border-2 border-tinta px-5 py-2 font-bold transition-transform active:scale-[0.97]">
            Ver los temas
          </Link>
        </div>
      </section>

      <section id="linea-del-tiempo" className="mx-auto max-w-6xl scroll-mt-8 px-4 pt-24 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dos mil años en una línea</h2>
        <p className="mt-3 max-w-[60ch] text-piedra">
          Arrastra la luz y mira cuándo se separan las grandes iglesias. Pulsa un nombre para conocerla.
        </p>
        <div className="mt-10">
          <TimeSpectrum />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Para leer en un minuto</h2>
          <Link href="/curiosos" className="font-bold hover:underline">
            Todas las historias
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredPills.map((pill) => (
            <PillCard key={pill.slug} pill={pill} />
          ))}
        </div>
      </section>
    </>
  );
}
