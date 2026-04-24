import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

const stack = [
  { label: "Python",     color: "cyan" },
  { label: "Java",       color: "cyan" },
  { label: "SQL",        color: "cyan" },
  { label: "Selenium",   color: "purple" },
  { label: "JUnit",      color: "purple" },
  { label: "Next.js",    color: "purple" },
  { label: "TypeScript", color: "purple" },
  { label: "Pandas",     color: "cyan" },
  { label: "Tailwind",   color: "purple" },
  { label: "Git",        color: "purple" },
] as const;

function OctoDecor() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity: 0.55 }}>
      <ellipse cx="55" cy="40" rx="28" ry="26" fill="#7F77DD"/>
      <circle cx="44" cy="34" r="5.5" fill="#080612"/>
      <circle cx="66" cy="34" r="5.5" fill="#080612"/>
      <circle cx="45.5" cy="32.5" r="1.8" fill="#AFA9EC"/>
      <circle cx="67.5" cy="32.5" r="1.8" fill="#AFA9EC"/>
      <path d="M27 58 Q22 68 19 80 Q17 89 22 86" stroke="#7F77DD" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M35 65 Q31 76 30 87 Q29 96 34 93" stroke="#7F77DD" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M45 68 Q43 80 42 91 Q41 100 46 97" stroke="#7F77DD" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M55 69 Q55 81 55 92 Q55 101 60 98" stroke="#7F77DD" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M65 68 Q67 80 68 91 Q69 100 64 97" stroke="#7F77DD" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M75 65 Q79 76 80 87 Q81 96 76 93" stroke="#7F77DD" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M83 58 Q88 68 91 80 Q93 89 88 86" stroke="#7F77DD" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <circle cx="22" cy="86" r="4" fill="#1D9E75" opacity="0.8"/>
      <circle cx="34" cy="93" r="4" fill="#1D9E75" opacity="0.8"/>
      <circle cx="46" cy="97" r="4" fill="#1D9E75" opacity="0.8"/>
      <circle cx="60" cy="98" r="4" fill="#1D9E75" opacity="0.8"/>
      <circle cx="64" cy="97" r="4" fill="#1D9E75" opacity="0.8"/>
      <circle cx="76" cy="93" r="4" fill="#1D9E75" opacity="0.8"/>
      <circle cx="88" cy="86" r="4" fill="#1D9E75" opacity="0.8"/>
      <ellipse cx="55" cy="43" rx="16" ry="8" fill="#1D9E75" opacity="0.15"/>
    </svg>
  );
}

export default function HomePage() {
  const featured = projects
    .slice()
    .sort((a, b) => {
      const byYear = Number(b.year) - Number(a.year);
      if (byYear !== 0) return byYear;
      const order = (s: typeof a.status) =>
        s === "Completo" ? 0 : s === "MVP" ? 1 : 2;
      return order(a.status) - order(b.status);
    })
    .slice(0, 4);

  const total     = projects.length;
  const totalDemo = projects.filter((p) => Boolean(p.demoUrl)).length;
  const totalDone = projects.filter((p) => p.status === "Completo").length;

  return (
    <div className="space-y-12">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="card-noc overflow-hidden animate-fade-up">
        <div className="grid lg:grid-cols-[1fr_auto] gap-0">

          {/* Coluna esquerda — texto */}
          <div className="p-7 sm:p-10 space-y-7">

            {/* Badge disponível */}
            <div className="badge badge-available w-fit animate-fade-up animate-delay-1">
              <span className="dot-pulse" />
              Disponível para oportunidades
            </div>

            {/* Nome + descrição */}
            <div className="space-y-3 animate-fade-up animate-delay-2">
              <h1 style={{ fontFamily: "var(--font-display)" }}>
                David Rodrigues
              </h1>
              <p style={{ color: "var(--noc-text-mid)", maxWidth: "520px" }}>
              Portfólio com projetos em{" "}
              <strong style={{ color: "var(--noc-purple-lite)" }}>QA</strong>,{" "}
              <strong style={{ color: "var(--noc-purple-lite)" }}>automação</strong> e{" "}
              <strong style={{ color: "var(--noc-cyan-lite)" }}>dados</strong>, com base em
              desenvolvimento. Busco oportunidades para crescer em ambientes com processo,
              aprendizado contínuo e entregas bem estruturadas.
            </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-up animate-delay-3">
              <Link
                href="/projects"
                className="rounded-lg px-5 py-2 text-sm transition"
                style={{
                  border: "1px solid var(--noc-cyan)",
                  color: "var(--noc-cyan-lite)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Ver projetos
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-5 py-2 text-sm transition"
                style={{
                  border: "1px solid var(--noc-border-mid)",
                  color: "var(--noc-text-mid)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Sobre mim
              </Link>
              <a
                href="/cv-david-rodrigues.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-5 py-2 text-sm transition"
                style={{
                  border: "1px solid var(--noc-border)",
                  color: "var(--noc-text-muted)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Currículo
              </a>
              <a
                href="https://github.com/d-noctopus"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-5 py-2 text-sm transition"
                style={{
                  border: "1px solid var(--noc-border)",
                  color: "var(--noc-text-muted)",
                  fontFamily: "var(--font-display)",
                }}
              >
                GitHub
              </a>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-3 animate-fade-up animate-delay-4" style={{ maxWidth: "380px" }}>
              {[
                { label: "Projetos",     value: total },
                { label: "Demos online", value: totalDemo },
                { label: "Completos",    value: totalDone },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-4"
                  style={{ background: "var(--noc-elevated)", border: "1px solid var(--noc-border)" }}
                >
                  <div className="text-xs" style={{ color: "var(--noc-text-muted)", fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>
                    {m.label}
                  </div>
                  <div className="text-xl font-semibold mt-1" style={{ fontFamily: "var(--font-display)", color: "var(--noc-text)" }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div className="space-y-2 animate-fade-up animate-delay-4">
              <div className="text-xs uppercase tracking-widest" style={{ color: "var(--noc-text-faint)", fontFamily: "var(--font-display)" }}>
                Tecnologias principais
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span key={t.label} className={`skill-tag skill-tag-${t.color}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna direita — foto + polvo */}
          <div
            className="hidden lg:flex flex-col items-center justify-center gap-6 p-10"
            style={{
              borderLeft: "1px solid var(--noc-border)",
              background: "linear-gradient(160deg, var(--noc-surface) 0%, var(--noc-void) 100%)",
              minWidth: "260px",
            }}
          >
            {/* Foto circular */}
            <div
              className="relative glow-purple"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "2px solid var(--noc-border-mid)",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/foto.jpg"
                alt="David Rodrigues"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* Arte do polvo */}
            <OctoDecor />

            <div className="text-center space-y-1" style={{ fontFamily: "var(--font-display)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--noc-text)" }}>
                David Rodrigues
              </div>
              <div className="text-xs" style={{ color: "var(--noc-text-muted)", letterSpacing: "0.06em" }}>
                QA · Automação · Dados
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── DESTAQUES ────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 style={{ fontFamily: "var(--font-display)" }}>Destaques</h2>
            <p className="text-sm" style={{ color: "var(--noc-text-muted)" }}>
              Alguns projetos recentes para explorar rapidamente.
            </p>
          </div>
          <Link href="/projects" className="text-sm transition" style={{ color: "var(--noc-cyan-lite)" }}>
            Ver todos →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

    </div>
  );
}