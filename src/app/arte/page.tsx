import type { Metadata } from "next";
import Link from "next/link";
import { commonsImageUrl } from "@/components/chapter/chapter-image";
import { SafeImg } from "@/components/chapter/safe-img";
import { artStyles } from "@/content/art";

export const metadata: Metadata = {
  title: "El arte cristiano",
  description: "De las catacumbas al Barroco: los grandes estilos del arte cristiano, sus obras, lugares y artistas.",
};

export default function ArtPage() {
  return (
    <>
      <section className="banda">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-alba">Patrimonio</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">El arte cristiano</h1>
          <p className="mt-4 max-w-[56ch] text-lg opacity-90">
            Dos mil años de fe contados en piedra, pintura y luz. Seis grandes estilos para aprender a mirar una iglesia, un
            cuadro o una catedral y saber de cuándo es y qué quiere decir.
          </p>
        </div>
      </section>

      <ol className="mx-auto mt-12 grid max-w-6xl gap-x-5 gap-y-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {artStyles.map((style, index) => (
          <li key={style.slug}>
            <Link href={`/arte/${style.slug}`} className="group block">
              <figure className="relative aspect-[4/3] overflow-hidden bg-granate">
                <SafeImg
                  src={commonsImageUrl(style.cover, 800)}
                  alt={style.coverCaption}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-2 font-display text-5xl font-extrabold text-oro-claro drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figure>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-piedra">{style.period}</p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight group-hover:underline">{style.title}</h2>
              <p className="mt-2 text-piedra">{style.hook}</p>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
