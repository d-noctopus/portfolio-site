import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export default function HomePage() {
  // pega 4 projetos (ordena por ano desc, e dá prioridade pra Completo/MVP)
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

  const total = projects.length;
  const totalMvp = projects.filter((p) => p.status === "MVP").length;
  const totalDone = projects.filter((p) => p.status === "Completo").length;

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-2xl border p-6 sm:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              David — Portfólio
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Projetos em QA, automação, dados e desenvolvimento. Páginas com case study (PT+EN),
              comandos de execução e links.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
            >
              Ver projetos
            </Link>

            <Link
              href="/about"
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
            >
              Sobre mim
            </Link>

            <a
              href="https://github.com/Dev02553"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
            >
              GitHub
            </a>
          </div>

          {/* mini-métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Projetos</div>
              <div className="text-lg font-semibold">{total}</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">MVP</div>
              <div className="text-lg font-semibold">{totalMvp}</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Completos</div>
              <div className="text-lg font-semibold">{totalDone}</div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Destaques</h2>
            <p className="text-sm text-muted-foreground">
              Alguns projetos recentes pra você ver rápido.
            </p>
          </div>

          <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
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