import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export default function HomePage() {
  const featured = projects
    .filter((p) => p.status === "MVP" || p.status === "Completo")
    .slice(0, 2);

  const recent = [...projects]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, 4);

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">
          David Rodrigues — Portfólio
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          QA / Automação / Dados. Projetos com foco em qualidade, testes E2E,
          pipelines e organização de entregas.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
          >
            Ver projetos
          </Link>
          <Link
            href="/contact"
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
          >
            Contato
          </Link>
        </div>
      </section>

      {/* DESTAQUES */}
      {featured.length ? (
        <section className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Destaques</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:underline"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      ) : null}

      {/* RECENTES */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Recentes</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {recent.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}