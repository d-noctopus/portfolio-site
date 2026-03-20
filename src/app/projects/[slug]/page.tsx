import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
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
        <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
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
            <span key={t} className="text-xs rounded-full border px-2 py-1 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-muted px-2 py-1">{s}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.repoUrl ? (
            <a className="rounded-md border px-4 py-2 hover:bg-muted transition" href={project.repoUrl} target="_blank" rel="noreferrer">
              Repositório
            </a>
          ) : null}
          {project.demoUrl ? (
            <a className="rounded-md border px-4 py-2 hover:bg-muted transition" href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : null}
        </div>

        {project.previewUrl ? (
          <div className="mt-2 overflow-hidden rounded-2xl border">
            <Image
              src={project.previewUrl}
              alt={`Preview de ${project.title}`}
              width={1200}
              height={630}
              className="w-full object-cover"
              priority
            />
          </div>
        ) : null}
      </header>

      {project.metrics?.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Métricas</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border p-4">
                <div className="text-xs text-muted-foreground">{m.label}</div>
                <div className="text-lg font-semibold">{m.value}</div>
                {m.hint ? <div className="mt-1 text-xs text-muted-foreground">{m.hint}</div> : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.run ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Como executar</h2>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-sm font-medium">Headless</div>
              <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 text-sm">
                <code>{project.run.headless}</code>
              </pre>
            </div>
            {project.run.ui ? (
              <div className="rounded-lg border p-4">
                <div className="mb-2 text-sm font-medium">UI (visual)</div>
                <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 text-sm">
                  <code>{project.run.ui}</code>
                </pre>
              </div>
            ) : null}
          </div>
          <p className="text-sm text-muted-foreground">
            Dica: rode dentro da pasta que contém o <code>package.json</code> ou o <code>pom.xml</code> do projeto.
          </p>
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Destaques</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Case Study</h2>
        {project.caseStudy?.length ? (
          <div className="space-y-6">
            {project.caseStudy.map((sec) => (
              <div key={sec.id} className="rounded-lg border p-5 space-y-3">
                <div className="space-y-1">
                  <div className="text-base font-semibold">{sec.title.pt}</div>
                  <div className="text-sm text-muted-foreground">{sec.title.en}</div>
                </div>
                {sec.body ? (
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{sec.body.pt}</p>
                    <p className="italic opacity-90 text-muted-foreground">{sec.body.en}</p>
                  </div>
                ) : null}
                {sec.bullets ? (
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                      <div className="mb-2 text-sm font-medium">PT</div>
                      <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                        {sec.bullets.pt.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium">EN</div>
                      <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                        {sec.bullets.en.map((b) => <li key={b}>{b}</li>)}
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