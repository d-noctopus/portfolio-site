"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="min-w-0">
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">David Rodrigues</div>
            <div className="text-xs text-muted-foreground hidden sm:block">
              QA · Automação · Dados · Desenvolvimento
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-md px-3 py-2 text-sm transition whitespace-nowrap",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="rounded-md border px-3 py-2 text-sm hover:bg-muted transition whitespace-nowrap"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}