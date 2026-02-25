export type ProjectTag =
  | "Dados"
  | "Automação"
  | "QA"
  | "Backend"
  | "Frontend"
  | "Produto"
  | "Games"
  | "Arquitetura";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: ProjectTag[];
  stack: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  run?: { headless: string; ui?: string };
  caseStudy?: { title: string; text: string }[];
  repoUrl?: string;
  demoUrl?: string;
  status: "Em construção" | "MVP" | "Completo";
  year: string;
};

export const projects: Project[] = [
  {
    slug: "python-etl-automation",
    title: "ETL & Data Quality em Python",
    subtitle:
      "Pipeline de dados com validações, rastreabilidade e geração de relatório em Excel (Data Quality).",
    tags: ["Dados", "Automação"],
    stack: ["Python", "Pandas", "OpenPyXL", "Pytest", "CLI"],
    highlights: [
      "Extract → Transform → Validate → Load",
      "Regras de qualidade: obrigatórios, tipos, duplicados, datas",
      "Relatório final em XLSX com aba Data Quality",
    ],
    repoUrl: "https://github.com/Dev02553/python-etl-automation",
    status: "Em construção",
    year: "2026",
  },
  {
    slug: "parabank-selenium-qa",
    title: "QA E2E — Selenium + JUnit (ParaBank)",
    subtitle:
      "Suíte E2E  em Selenium/JUnit com BaseTest, retry para instabilidade e evidências automáticas em falha.",
    tags: ["QA", "Automação"],
    stack: ["Java", "JUnit 5", "Selenium 4", "Maven", "CI"],
        metrics: [
      { label: "Casos E2E", value: "10+" },
      { label: "Execução", value: "Headless (Maven)" },
      { label: "Evidências", value: "Screenshot em falha" },
    ],
    run: {
      headless: "mvn -Dheadless=true clean test",
      ui: "mvn clean test",
    },
    caseStudy: [
      {
        title: "Problema",
        text: "O ParaBank é um ambiente demo com comportamento e mensagens variáveis, o que pode gerar falsos negativos em testes E2E. Além disso, URLs relativas podem causar erros no WebDriver quando chamadas diretamente.",
      },
      {
        title: "Solução",
        text: "Criei um BaseTest com helper open() para garantir URLs absolutas, login resiliente (evita relogar quando já existe sessão), waits mais estáveis e captura automática de evidências (screenshot) em falha.",
      },
      {
        title: "Arquitetura",
        text: "Estrutura baseada em BaseTest centralizando setup/teardown, helpers reutilizáveis (navegação, waits, validações) e testes separados por funcionalidade (login, contas, transferências, cadastro e perfil).",
      },
      {
        title: "Resultados",
        text: "Suíte rodando de forma consistente via Maven (headless). Cenários frágeis do ambiente demo foram tratados com validações flexíveis e, quando necessário, skip controlado para evitar quebra por instabilidade do site.",
      },
      {
        title: "Próximos passos",
        text: "Evoluir para Page Object Model completo por páginas, adicionar relatório (Allure), paralelizar testes e rodar em pipeline CI com artefatos de evidência.",
      },
    ],
    highlights: [
      "10+ casos de testes E2E ",
      "Execução: headless (Maven)",
      "Evidência: screenshot em falha",
    ],
    repoUrl: "https://github.com/Dev02553/Testes-Automatizados_ParaBank",
    status: "MVP",
    year: "2025",
  },
  {
    slug: "java-api-crud",
    title: "API Java com DB — CRUD + Testes",
    subtitle:
      "API REST com persistência, validação, migrations e documentação (Swagger/OpenAPI).",
    tags: ["Backend", "Arquitetura"],
    stack: ["Java", "Spring Boot", "JPA", "Flyway", "Testcontainers"],
    highlights: [
      "CRUD completo + validação",
      "Tratamento de erros padronizado",
      "Docker compose + testes de integração",
    ],
    repoUrl: "https://github.com/Dev02553/java-api-crud",
    status: "Em construção",
    year: "2026",
  },
  {
    slug: "react-dashboard",
    title: "Dashboard (Next/React) consumindo API",
    subtitle:
      "Interface de produto com tabela, filtros, formulários e integração com backend.",
    tags: ["Frontend", "Produto"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "API"],
    highlights: [
      "DataTable + filtros e busca",
      "Forms com validação",
      "Deploy no Vercel",
    ],
    repoUrl: "https://github.com/Dev02553/react-dashboard",
    status: "Em construção",
    year: "2026",
  },
  {
    slug: "rpg-hub",
    title: "RPG HUB",
    subtitle:
      "Sistema para gerenciar campanhas, NPCs/monstros, mapas e anotações (visão produto).",
    tags: ["Produto", "Games", "Frontend"],
    stack: ["Next.js", "TypeScript", "DB", "Auth (futuro)"],
    highlights: [
      "CRUD de campanhas e entidades",
      "Upload/gestão de mapas e assets",
      "Export/relatórios (futuro)",
    ],
    repoUrl: "https://github.com/Dev02553/rpg-hub",
    status: "Em construção",
    year: "2026",
  },
];
