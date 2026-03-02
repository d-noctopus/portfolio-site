import Link from "next/link";
import { projects } from "@/lib/projects";

type RouteParams = { slug: string };

// Ajuda o build do Next/Vercel a conhecer os slugs (principalmente se usar export/static)
export function generateStaticParams(): RouteParams[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: RouteParams | Promise<RouteParams>;
}) {
  // ✅ Compatível com Next que entrega params como Promise
  const { slug } = await Promise.resolve(params);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
        <Link href="/projects" className="text-muted-foreground hover:underline">
          Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:underline"
        >
          ← Voltar
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
          <span className="text-xs rounded-full border px-2 py-1 text-muted-foreground">
            {project.status} • {project.year}
          </span>
        </div>

        <p className="text-muted-foreground">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border px-2 py-1 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-muted px-2 py-1">
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.repoUrl ? (
            <a
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          ) : null}

          {project.demoUrl ? (
            <a
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : null}
        </div>
      </header>

      {/* Métricas */}
      {project.metrics?.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Métricas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border p-4">
                <div className="text-xs text-muted-foreground">{m.label}</div>
                <div className="text-lg font-semibold">{m.value}</div>
                {m.hint ? (
                  <div className="text-xs text-muted-foreground mt-1">
                    {m.hint}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Run guide */}
      {project.run ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Como executar</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="rounded-lg border p-4">
              <div className="text-sm font-medium mb-2">Headless</div>
              <pre className="rounded-lg bg-black/40 p-4 overflow-x-auto text-sm">
                <code>{project.run.headless}</code>
              </pre>
            </div>

            {project.run.ui ? (
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium mb-2">UI (visual)</div>
                <pre className="rounded-lg bg-black/40 p-4 overflow-x-auto text-sm">
                  <code>{project.run.ui}</code>
                </pre>
              </div>
            ) : null}
          </div>

          <p className="text-sm text-muted-foreground">
            Dica: rode dentro da pasta que contém o <code>pom.xml</code>{" "}
            (Java/Maven) ou o <code>package.json</code> (Node).
          </p>
        </section>
      ) : null}

      {/* Destaques */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Destaques</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* Case Study PT + EN */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Case Study</h2>

        {project.caseStudy?.length ? (
          <div className="space-y-6">
            {project.caseStudy.map((sec) => (
              <div key={sec.id} className="rounded-lg border p-5 space-y-3">
                <div className="space-y-1">
                  <div className="text-base font-semibold">{sec.title.pt}</div>
                  <div className="text-sm text-muted-foreground">
                    {sec.title.en}
                  </div>
                </div>

                {sec.body ? (
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{sec.body.pt}</p>
                    <p className="text-muted-foreground italic opacity-90">
                      {sec.body.en}
                    </p>
                  </div>
                ) : null}

                {sec.bullets ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium mb-2">PT</div>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {sec.bullets.pt.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-2">EN</div>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {sec.bullets.en.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Em breve: problema, solução, arquitetura, testes, resultados e próximos passos (PT + EN).
          </p>
        )}
      </section>
    </div>
  );
}