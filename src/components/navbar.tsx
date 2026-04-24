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

function OctoLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="16" cy="12" rx="8.5" ry="8" fill="#7F77DD" opacity="0.92"/>
      <circle cx="12.8" cy="10.5" r="1.8" fill="#080612"/>
      <circle cx="19.2" cy="10.5" r="1.8" fill="#080612"/>
      <circle cx="13.3" cy="10.0" r="0.6" fill="#AFA9EC"/>
      <circle cx="19.7" cy="10.0" r="0.6" fill="#AFA9EC"/>
      <path d="M7.5 17.5 Q6 21 5 24 Q4.5 26.5 6.5 25.5" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M10 19.5 Q9 23 8.5 26 Q8 28.5 10 27.5" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M13 20.5 Q12.5 24.5 12 27.5 Q11.5 30 13.5 29" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M16 21 Q16 25 16 28 Q16 30.5 18 29.5" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M19 20.5 Q19.5 24.5 20 27.5 Q20.5 30 18.5 29" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M22 19.5 Q23 23 23.5 26 Q24 28.5 22 27.5" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M24.5 17.5 Q26 21 27 24 Q27.5 26.5 25.5 25.5" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="6.5"  cy="25.5" r="1.4" fill="#1D9E75" opacity="0.75"/>
      <circle cx="10"   cy="27.5" r="1.4" fill="#1D9E75" opacity="0.75"/>
      <circle cx="13.5" cy="29"   r="1.4" fill="#1D9E75" opacity="0.75"/>
      <circle cx="18"   cy="29.5" r="1.4" fill="#1D9E75" opacity="0.75"/>
      <circle cx="22"   cy="27.5" r="1.4" fill="#1D9E75" opacity="0.75"/>
      <circle cx="25.5" cy="25.5" r="1.4" fill="#1D9E75" opacity="0.75"/>
      <ellipse cx="16" cy="13" rx="5" ry="3" fill="#1D9E75" opacity="0.12"/>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 noc-nav">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">

        <Link href="/" className="flex items-center gap-2.5 min-w-0 group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <OctoLogo />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--noc-text)" }}>
              David Rodrigues
            </div>
            <div className="text-xs hidden sm:block" style={{ color: "var(--noc-text-muted)", fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>
              d-noctopus
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
                className={["noc-nav-link rounded-md px-3 py-2 transition whitespace-nowrap", active ? "active" : ""].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="noc-nav-cta ml-1 whitespace-nowrap">
            Contato
          </Link>
        </nav>

      </div>
    </header>
  );
}