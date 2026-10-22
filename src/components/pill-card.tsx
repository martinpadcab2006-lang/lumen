import Link from "next/link";
import { topicColor, topicName, type Pill } from "@/content/pills";

/** Una curiosidad en formato «story»: vertical, como los vídeos de redes. */
export const PillCard = ({ pill }: { pill: Pill }) => (
  <Link
    href={`/descubre/curiosidades/${pill.slug}`}
    className="group relative flex aspect-[9/13] flex-col overflow-hidden bg-granate p-4 sm:p-6 text-papel-claro transition-transform active:scale-[0.98]"
  >
    <span
      aria-hidden
      className="absolute -right-16 -top-16 size-56 rounded-full opacity-35 blur-2xl transition-opacity group-hover:opacity-60"
      style={{ background: topicColor[pill.topic] }}
    />
    <span className="relative self-start border-b-2 pb-0.5 text-xs font-bold sm:text-sm uppercase tracking-wider" style={{ borderColor: topicColor[pill.topic] }}>
      {topicName[pill.topic]}
    </span>
    <span className="relative mt-auto font-display text-lg font-bold leading-snug sm:text-[1.6rem] sm:leading-tight leading-tight text-oro-claro">{pill.title}</span>
    <span className="relative mt-3 hidden opacity-85 sm:line-clamp-3">{pill.hook}</span>
    <span className="relative mt-3 text-sm font-bold sm:mt-5 group-hover:underline">Leer en un minuto →</span>
  </Link>
);
