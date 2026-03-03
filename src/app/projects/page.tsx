import { projects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Projetos</h1>
        <p className="text-muted-foreground">
          Lista completa com links e páginas de case study.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}