import Link from "next/link";
import type { Project } from "@/lib/projects";

function statusTone(status: Project["status"]) {
  switch (status) {
    case "Completo":
      return "border-green-500/30 text-green-400 bg-green-500/10";
    case "MVP":
      return "border-blue-500/30 text-blue-400 bg-blue-500/10";
    case "Em construção":
    default:
      return "border-yellow-500/30 text-yellow-400 bg-yellow-500/10";
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  const hasMetrics = Boolean(project.metrics?.length);

  return (
    <div className="rounded-2xl border p-5 transition hover:bg-muted/30 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <h3 className="text-base font-semibold leading-tight">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <span
            className={[
              "text-[11px] rounded-full border px-2.5 py-1 whitespace-nowrap",
              statusTone(project.status),
            ].join(" ")}
          >
            {project.status}
          </span>

          <span className="text-[11px] text-muted-foreground">
            {project.year}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border px-2 py-1 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
        {project.stack.slice(0, 6).map((s) => (
          <span key={s} className="rounded-md bg-muted px-2 py-1">
            {s}
          </span>
        ))}
      </div>

      {project.metrics?.length ? (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="rounded-xl border p-3">
              <div className="text-[11px] text-muted-foreground">{m.label}</div>
              <div className="text-sm font-semibold">{m.value}</div>
              {m.hint ? (
                <div className="mt-1 text-[11px] text-muted-foreground line-clamp-1">
                  {m.hint}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border p-3">
          <div className="text-[11px] text-muted-foreground">
            Conteúdo disponível
          </div>
          <div className="text-sm font-medium">
            {hasMetrics ? "Case study completo" : "Case study básico"}
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-md border px-3 py-1.5 hover:bg-muted transition"
        >
          Ver case
        </Link>

        {project.repoUrl ? (
          <a
            className="rounded-md border px-3 py-1.5 hover:bg-muted transition"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Repositório
          </a>
        ) : null}

        {project.demoUrl ? (
          <a
            className="rounded-md border px-3 py-1.5 hover:bg-muted transition"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}