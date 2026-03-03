"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectTag, type Project } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

type Status = Project["status"];

const STATUS_ORDER: Record<Status, number> = {
  Completo: 0,
  MVP: 1,
  "Em construção": 2,
};

function uniqueTags(): ProjectTag[] {
  const set = new Set<ProjectTag>();
  for (const p of projects) for (const t of p.tags) set.add(t);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<ProjectTag | "Todos">("Todos");
  const [status, setStatus] = useState<Status | "Todos">("Todos");
  const [sort, setSort] = useState<"Mais recentes" | "Status">("Mais recentes");

  const tags = useMemo(() => uniqueTags(), []);
  const statuses: (Status | "Todos")[] = ["Todos", "Completo", "MVP", "Em construção"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const arr = projects
      .filter((p) => (tag === "Todos" ? true : p.tags.includes(tag)))
      .filter((p) => (status === "Todos" ? true : p.status === status))
      .filter((p) => {
        if (!q) return true;
        const hay = [
          p.title,
          p.subtitle,
          p.year,
          p.status,
          p.tags.join(" "),
          p.stack.join(" "),
          p.highlights.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .slice();

    if (sort === "Mais recentes") {
      arr.sort((a, b) => Number(b.year) - Number(a.year));
    } else {
      arr.sort((a, b) => {
        const sa = STATUS_ORDER[a.status];
        const sb = STATUS_ORDER[b.status];
        if (sa !== sb) return sa - sb;
        return Number(b.year) - Number(a.year);
      });
    }

    return arr;
  }, [query, tag, status, sort]);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Projetos</h1>
        <p className="text-muted-foreground">
          Lista completa com páginas de case study, comandos de execução e links.
        </p>
      </header>

      {/* Controles */}
      <section className="rounded-xl border p-4 space-y-4">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Buscar</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: Selenium, ETL, Java, Tailwind..."
              className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Tag</label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value as ProjectTag | "Todos")}
              className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none"
            >
              <option value="Todos">Todos</option>
              {tags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Status | "Todos")}
              className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-muted-foreground">
            Mostrando <span className="font-medium text-foreground">{filtered.length}</span>{" "}
            de <span className="font-medium text-foreground">{projects.length}</span> projetos
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Ordenar:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none"
            >
              <option value="Mais recentes">Mais recentes</option>
              <option value="Status">Status (Completo → MVP → Em construção)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setQuery("");
              setTag("Todos");
              setStatus("Todos");
              setSort("Mais recentes");
            }}
            className="text-xs rounded-md border px-3 py-1.5 hover:bg-muted transition"
          >
            Limpar filtros
          </button>
        </div>
      </section>

      {/* Lista */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}