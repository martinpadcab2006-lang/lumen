import Link from "next/link";
import { topicColor, topicName, type Pill } from "@/content/pills";

export const PillCard = ({ pill }: { pill: Pill }) => (
  <Link
    href={`/curiosos/${pill.slug}`}
    className="group flex flex-col rounded-3xl bg-superficie p-6 ring-1 ring-linea transition-[box-shadow] hover:ring-2 hover:ring-tinta"
    style={{ borderTop: `6px solid ${topicColor[pill.topic]}` }}
  >
    <span className="text-sm font-bold" style={{ color: topicColor[pill.topic] }}>
      {topicName[pill.topic]}
    </span>
    <span className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight group-hover:underline">
      {pill.title}
    </span>
    <span className="mt-3 text-piedra">{pill.hook}</span>
  </Link>
);
