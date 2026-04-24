"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";

const skills = [
  { label: "Linguagens", value: "Python, Java, SQL" },
  { label: "QA/Testes", value: "Selenium, JUnit, planejamento de testes, evidências" },
  { label: "Dados/Automação", value: "Pandas, Excel, validações, relatórios" },
  { label: "Dev/Infra", value: "Git/GitHub, Maven, noções de CI" },
];

const nowLearning = [
  "Boas práticas de QA (estratégia de testes, pirâmide e critérios de aceite)",
  "Escrita de casos de teste e relatórios de bugs mais claros e completos",
  "Comunicação em inglês para contexto técnico e profissional",
];

const experience = [
  {
    role: "Balconista (único colaborador) — Petshop",
    points: [
      "Atendimento presencial e suporte ao cliente do início ao fim",
      "Expedição, organização de estoque e rotina operacional completa",
      "Disciplina, priorização e atenção a detalhes em ambiente de alta demanda",
    ],
  },
  {
    role: "Assistente de E-commerce — Operação multi-canal",
    points: [
      "Emissão de pedidos e acompanhamento de fluxo de vendas",
      "Gestão de marketplaces: Shein, Shopee, Mercado Livre e Amazon",
      "Uso de ERPs e ferramentas: Tiny, Bling (e afins)",
      "Edição/atualização de itens e catálogo + atendimento online",
      "Expedição e organização operacional diária com foco em consistência",
    ],
  },
];

const projectHighlights = [
  {
    title: "QA E2E — Selenium + JUnit (ParaBank)",
    desc: "Casos E2E, evidências automáticas e organização por suíte.",
    href: "/projects/parabank-selenium-qa",
  },
  {
    title: "ETL & Data Quality em Python",
    desc: "Pipeline com validações e Excel final com aba “Data Quality”.",
    href: "/projects/python-etl-automation",
  },
  {
    title: "API Java + DB (em evolução)",
    desc: "CRUD com boas práticas, validação e documentação (Swagger/OpenAPI).",
    href: "/projects/java-api-crud",
  },
];

const CONTACT = {
  email: "david.ds_74@proton.me",
  github: "https://github.com/d-noctopus",
  linkedin: "https://www.linkedin.com/in/david-silva-rodrigues-500190284/",
};

function CopyEmailButton() {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(CONTACT.email)}
      className="rounded-md border px-3 py-1.5 hover:bg-muted transition text-sm"
    >
      Copiar e-mail
    </button>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* HERO (substitui o header antigo + toggle) */}
      <PageHero
        title="Sobre"
        badge="Objetivo: Trainee / Júnior · QA / Automação / Dados"
        subtitle="Formado em Análise e Desenvolvimento de Sistemas, com foco em Qualidade de Software (QA), automação e organização de processos. Gosto de construir projetos completos, com código, testes e documentação bem estruturados."
        imageSrc="/contact-hero.jpg"
        rightSlot={
          <div className="rounded-xl border bg-background/70 backdrop-blur p-4">
            <div className="text-sm font-medium">Links</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                className="rounded-md border px-3 py-1.5 hover:bg-muted transition text-sm"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-md border px-3 py-1.5 hover:bg-muted transition text-sm"
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-md border px-3 py-1.5 hover:bg-muted transition text-sm"
                href={`mailto:${CONTACT.email}?subject=Contato%20-%20Portf%C3%B3lio`}
              >
                E-mail
              </a>
            </div>
          </div>
        }
      >
        <div className="space-y-3">
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Minha base profissional vem de ambientes com ritmo, responsabilidade e atenção
            a detalhes. Atuei em operação, atendimento, expedição e organização de
            processos, primeiro como único colaborador de um petshop e depois em operação
            de e-commerce multi-canal, com marketplaces, ERPs, catálogo e atendimento.
          </p>

          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Essa vivência reforçou uma forma de trabalhar muito próxima de QA:
            padronização, consistência, redução de erros e melhoria contínua. Hoje,
            direciono essa base para projetos de testes, automação e dados, buscando
            crescer em uma posição de entrada com boa mentoria e espaço para evolução.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link className="rounded-md border px-4 py-2 hover:bg-muted transition" href="/projects">
              Ver projetos
            </Link>
            <Link className="rounded-md border px-4 py-2 hover:bg-muted transition" href="/contact">
              Falar comigo
            </Link>
          </div>
        </div>
      </PageHero>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Experiência (base forte de processo)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((exp) => (
            <div key={exp.role} className="rounded-xl border p-5 space-y-3">
              <h3 className="font-semibold">{exp.role}</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills + Learning */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-5 space-y-4">
          <h2 className="text-lg font-semibold">Tecnologias e ferramentas</h2>
          <div className="space-y-3">
            {skills.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-sm font-medium">{s.label}</span>
                <span className="text-sm text-muted-foreground">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Meu foco é construir entregáveis completos:{" "}
              <span className="text-foreground font-medium">
                código + testes + documentação + organização
              </span>
              .
            </p>
          </div>
        </div>

        <div className="rounded-xl border p-5 space-y-4">
          <h2 className="text-lg font-semibold">Atualmente aprendendo</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            {nowLearning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Busco crescer em ambientes com feedback e melhoria contínua.
            </p>
          </div>
        </div>
      </section>

      {/* Projects highlight */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold">Projetos em destaque</h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
            Ver todos
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="rounded-xl border p-5 hover:bg-muted/30 transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <span className="mt-3 inline-block text-sm text-muted-foreground hover:text-foreground">
                Ver case →
              </span>
            </Link>
          ))}
        </div>
      </section>


      {/* CTA (mantém sua ideia, só deixa mais “universal”) */}
      <section className="rounded-xl border p-5 space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Contato</h2>
            <p className="text-sm text-muted-foreground">
              Aberto para estágio/trainee/júnior, freela e colaborações — QA, automação, dados/ETL e
              desenvolvimento.
            </p>
          </div>

          <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
            Ir para página de contato →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border p-4">
            <div className="text-xs text-muted-foreground">E-mail</div>
            <div className="text-sm font-medium break-all">{CONTACT.email}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="rounded-md border px-3 py-1.5 hover:bg-muted transition text-sm"
                href={`mailto:${CONTACT.email}?subject=Contato%20-%20Portf%C3%B3lio`}
              >
                Enviar e-mail
              </a>
              <CopyEmailButton />
            </div>
          </div>

          <div className="rounded-xl border p-4">
            <div className="text-xs text-muted-foreground">Links</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="rounded-md border px-3 py-1.5 hover:bg-muted transition text-sm"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-md border px-3 py-1.5 hover:bg-muted transition text-sm"
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              EN: Open to internships/junior roles, freelance and collaborations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}