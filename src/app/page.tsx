import Link from "next/link";
import { commonsImageUrl } from "@/components/chapter/chapter-image";
import { SafeImg } from "@/components/chapter/safe-img";
import { EpisodeRail } from "@/components/episode-rail";
import { PillCard } from "@/components/pill-card";
import { TimeSpectrum } from "@/components/time-spectrum";
import { chapterPath } from "@/content/chapter-types";
import { levels } from "@/content/levels";
import { formatNewsDate, weeklyNews } from "@/content/news";
import { pills } from "@/content/pills";
import { schoolSectionsVisible } from "@/lib/visibility";

const HERO_PAINTING = "1602-3 Caravaggio,Supper at Emmaus National Gallery, London.jpg";

const SectionTitle = ({ id, kicker, title, link }: { id: string; kicker: string; title: string; link?: { href: string; label: string } }) => (
  <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">{kicker}</p>
      <h2 id={id} className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
    {link && (
      <Link href={link.href} className="font-bold text-lapis hover:underline">
        {link.label} →
      </Link>
    )}
  </div>
);

export default function HomePage() {
  const latestNews = weeklyNews.at(0);

  return (
    <>
      <section className="banda relative overflow-hidden">
        <figure className="absolute inset-y-0 right-0 w-full md:w-[62%]">
          <SafeImg src={commonsImageUrl(HERO_PAINTING, 1600)} alt="" className="size-full object-cover object-[60%_center] opacity-70 md:opacity-90" />
          <figcaption className="absolute bottom-3 right-4 text-xs opacity-70">Caravaggio, La cena de Emaús (1601)</figcaption>
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-granate via-granate/85 to-granate/30 md:bg-gradient-to-r md:from-granate md:from-35% md:via-granate/70 md:to-transparent" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-40 sm:px-6 md:min-h-[38rem] md:justify-center md:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-alba">Historia · Fe · Cultura</p>
          <h1 className="mt-4 max-w-[12ch] text-5xl font-extrabold tracking-tight sm:text-7xl">El cristianismo, contado a fondo</h1>
          <p className="mt-5 max-w-[44ch] text-lg opacity-90">
            Dos mil años de historia contados como una serie, con curiosidades, arte y mapas. Sin necesidad de saber nada antes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={chapterPath("descubre", "el-mundo-de-jesus")}
              className="rounded-sm bg-alba px-6 py-3 font-bold text-[#2b1a17] transition-transform active:scale-[0.97]"
            >
              Empezar por el capítulo 1
            </Link>
            <Link href="/descubre/curiosidades" className="rounded-sm border border-current px-6 py-3 font-bold transition-transform active:scale-[0.97]">
              Ver curiosidades
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="la-serie" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionTitle id="la-serie" kicker="La serie" title="Dos mil años en doce capítulos" link={{ href: "/descubre/historia", label: "Ver todos" }} />
        <div className="mt-8">
          <EpisodeRail />
        </div>
      </section>

      <section aria-labelledby="curiosidades" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <SectionTitle
          id="curiosidades"
          kicker="En un minuto"
          title="Curiosidades"
          link={{ href: "/descubre/curiosidades", label: `Las ${pills.length} curiosidades` }}
        />
        <div className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory [scroll-padding-inline:1rem] gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {pills.slice(0, 4).map((pill) => (
            <div key={pill.slug} className="w-64 shrink-0 snap-start lg:w-auto">
              <PillCard pill={pill} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="explora" className="mx-auto mt-20 grid max-w-6xl gap-px bg-linea sm:grid-cols-2">
        {latestNews && (
          <Link href={`/actualidad/${latestNews.slug}`} className="group bg-niebla px-4 py-10 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">Actualidad · {formatNewsDate(latestNews.date)}</p>
            <h2 id="explora" className="mt-3 text-3xl font-bold tracking-tight group-hover:underline">
              {latestNews.title}
            </h2>
            <p className="mt-3 text-piedra">{latestNews.lead}</p>
            <p className="mt-5 font-bold text-lapis">La noticia, explicada →</p>
          </Link>
        )}
        <Link href="/mapa" className="group bg-niebla px-4 py-10 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-piedra">El mapa</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight group-hover:underline">De Jerusalén al mundo</h2>
          <p className="mt-3 text-piedra">Un viaje guiado por cómo el cristianismo salió de una ciudad y llegó a todos los continentes.</p>
          <p className="mt-5 font-bold text-lapis">Empezar el viaje →</p>
        </Link>
      </section>

      <section id="linea-del-tiempo" aria-labelledby="linea" className="mx-auto max-w-6xl scroll-mt-8 px-4 pt-20 sm:px-6">
        <SectionTitle id="linea" kicker="Las iglesias" title="Dos mil años en una línea" />
        <p className="mt-3 max-w-[60ch] text-piedra">
          Arrastra la luz y mira cuándo se separan las grandes iglesias. Pulsa un nombre para conocerla.
        </p>
        <div className="mt-10">
          <TimeSpectrum />
        </div>
      </section>

      {schoolSectionsVisible && (
        <section aria-labelledby="para-clase" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
          <SectionTitle id="para-clase" kicker="Para clase" title="Colegios y universidad" link={{ href: "/colegios", label: "Ver todo" }} />
          <ul className="mt-8 grid gap-px bg-linea sm:grid-cols-3">
            {levels.map((level) => (
              <li key={level.slug} className="bg-niebla">
                <Link href={`/colegios/${level.slug}`} className="flex items-baseline justify-between gap-4 px-4 py-4 hover:underline">
                  <span className="font-display text-xl font-semibold">{level.name}</span>
                  <span className="text-sm text-piedra">{level.ages}</span>
                </Link>
              </li>
            ))}
            <li className="bg-niebla">
              <Link href="/universidad" className="block px-4 py-4 font-display text-xl font-semibold hover:underline">
                Universidad
              </Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}
