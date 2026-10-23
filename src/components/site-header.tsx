"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { schoolSectionsVisible } from "@/lib/visibility";
import { LumenMark } from "./lumen-mark";

type NavItem = { href: string; label: string; school?: boolean };

const navItems: readonly NavItem[] = [
  { href: "/descubre", label: "Descubre" },
  { href: "/colegios", label: "Colegios", school: true },
  { href: "/universidad", label: "Universidad", school: true },
  { href: "/arte", label: "Arte" },
  { href: "/mapa", label: "Mapa" },
  { href: "/actualidad", label: "Actualidad" },
].filter((item) => schoolSectionsVisible || !item.school);

const isActive = (pathname: string, href: string): boolean =>
  pathname === href ||
  pathname.startsWith(`${href}/`) ||
  (href === "/descubre" && (pathname.startsWith("/comparador") || pathname.startsWith("/iglesias")));

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="banda print:hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2" aria-label="Lumen, inicio">
          <LumenMark className="size-10 transition-transform group-hover:scale-105" />
          <span className="font-display text-2xl font-bold tracking-tight text-oro-claro">Lumen</span>
        </Link>
        <nav aria-label="Principal" className="no-scrollbar -mx-4 flex w-[calc(100%+2rem)] gap-1 overflow-x-auto px-3 sm:mx-0 sm:w-auto sm:px-0">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 border-b-2 px-2.5 py-1.5 text-[0.95rem] transition-colors ${
                  active ? "border-oro-claro text-oro-claro" : "border-transparent opacity-80 hover:opacity-100"
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
