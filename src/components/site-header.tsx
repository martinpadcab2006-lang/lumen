"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

const navItems: readonly NavItem[] = [
  { href: "/descubre", label: "Descubre" },
  { href: "/colegios", label: "Colegios" },
  { href: "/universidad", label: "Universidad" },
  { href: "/mapa", label: "Mapa" },
  { href: "/comparador", label: "Iglesias" },
];

const isActive = (pathname: string, href: string): boolean =>
  pathname === href || pathname.startsWith(`${href}/`) || (href === "/comparador" && pathname.startsWith("/iglesias"));

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-linea">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Lumen, inicio">
          <span
            aria-hidden
            className="size-4 rounded-full bg-alba shadow-[0_0_18px_4px_var(--alba)] transition-transform group-hover:scale-110"
          />
          <span className="font-display text-2xl font-bold tracking-tight">Lumen</span>
        </Link>
        <nav aria-label="Principal" className="-mx-2 flex flex-wrap gap-1">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-[0.95rem] transition-colors ${
                  active ? "bg-tinta text-niebla" : "text-piedra hover:bg-niebla-honda hover:text-tinta"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
