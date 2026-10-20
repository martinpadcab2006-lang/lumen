import Link from "next/link";

type PageIntroProps = {
  back?: { href: string; label: string };
  title: string;
  lead: string;
};

export const PageIntro = ({ back, title, lead }: PageIntroProps) => (
  <header>
    {back && (
      <Link href={back.href} className="text-piedra hover:text-tinta hover:underline">
        Volver a {back.label}
      </Link>
    )}
    <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
    <p className="mt-4 max-w-[62ch] text-lg text-piedra">{lead}</p>
  </header>
);
