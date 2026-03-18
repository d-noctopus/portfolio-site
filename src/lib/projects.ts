export type ProjectTag =
  | "Dados"
  | "Automação"
  | "QA"
  | "Backend"
  | "Frontend"
  | "Produto"
  | "Games"
  | "Arquitetura";

export type ProjectMetric = {
  label: string;
  value: string;
  hint?: string;
};

export type ProjectRun = {
  headless: string;
  ui?: string;
};

export type CaseStudySection = {
  id: string;
  title: { pt: string; en: string };
  body?: { pt: string; en: string };
  bullets?: { pt: string[]; en: string[] };
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: ProjectTag[];
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  status: "Em construção" | "MVP" | "Completo";
  year: string;

  // Página detalhada
  metrics?: ProjectMetric[];
  run?: ProjectRun;
  caseStudy?: CaseStudySection[];
};

export const projects: Project[] = [
  // =========================
  // 1) Python ETL
  // =========================
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
    status: "Completo",
    year: "2024",

    metrics: [
      { label: "Foco", value: "Qualidade de dados", hint: "regras + evidências" },
      { label: "Saída", value: "Excel (XLSX)", hint: "aba de Data Quality" },
      { label: "Testes", value: "Pytest", hint: "validações automatizadas" },
      { label: "Uso", value: "CLI", hint: "execução simples por comando" },
    ],

    run: {
      headless: "python -m pytest -q",
      ui: "python main.py --input ./data --output ./output/report.xlsx",
    },

    caseStudy: [
      {
        id: "context",
        title: { pt: "Contexto", en: "Context" },
        body: {
          pt: "Em rotinas operacionais/ETL, erros pequenos (tipos, datas, duplicados) viram problemas grandes em relatórios e decisões. O objetivo aqui é reduzir falhas com validações explícitas e rastreabilidade.",
          en: "In operational ETL routines, small issues (types, dates, duplicates) become big problems in reports and decisions. This project focuses on preventing failures with explicit validations and traceability.",
        },
      },
      {
        id: "goal",
        title: { pt: "Objetivo", en: "Goal" },
        bullets: {
          pt: [
            "Extrair e padronizar dados de entrada.",
            "Aplicar regras de Data Quality e gerar evidência.",
            "Entregar um relatório final reutilizável e fácil de auditar.",
          ],
          en: [
            "Extract and standardize input data.",
            "Apply Data Quality rules and generate evidence.",
            "Deliver a reusable final report that is easy to audit.",
          ],
        },
      },
      {
        id: "approach",
        title: { pt: "Abordagem", en: "Approach" },
        bullets: {
          pt: [
            "Pipeline por etapas com logs e checkpoints.",
            "Validações separadas por regra (obrigatórios, tipos, duplicados, datas).",
            "Saída em Excel com resumo e detalhes por regra.",
          ],
          en: [
            "Step-based pipeline with logs and checkpoints.",
            "Validations split by rule (required, types, duplicates, dates).",
            "Excel output with a summary and rule-by-rule details.",
          ],
        },
      },
      {
        id: "results",
        title: { pt: "Resultados", en: "Results" },
        bullets: {
          pt: [
            "Menos retrabalho: erros são detectados antes do consumo em relatórios.",
            "Rastreabilidade: é possível explicar o “porquê” de cada inconsistência.",
            "Base pronta para evoluir (CI, novas fontes, novas métricas).",
          ],
          en: [
            "Less rework: issues are detected before reporting/consumption.",
            "Traceability: you can explain the reason behind each inconsistency.",
            "Ready-to-evolve base (CI, new sources, new metrics).",
          ],
        },
      },
      {
        id: "next",
        title: { pt: "Próximos passos", en: "Next steps" },
        bullets: {
          pt: [
            "Adicionar validações por domínio (regras de negócio).",
            "Gerar relatório HTML além do XLSX.",
            "Rodar automaticamente via GitHub Actions.",
          ],
          en: [
            "Add domain/business validations.",
            "Generate HTML report in addition to XLSX.",
            "Run automatically via GitHub Actions.",
          ],
        },
      },
    ],
  },

  // =========================
  // 2) ParaBank QA
  // =========================
  {
    slug: "parabank-selenium-qa",
    title: "QA E2E — Selenium + JUnit (ParaBank)",
    subtitle:
      "Suíte E2E em Selenium/JUnit com BaseTest robusto, evidências automáticas e mitigação de instabilidade do ambiente demo.",
    tags: ["QA", "Automação"],
    stack: ["Java", "JUnit 5", "Selenium 4", "Maven"],
    highlights: [
      "10 casos E2E cobrindo fluxos críticos",
      "Execução headless via Maven",
      "Evidência automática (screenshot) em falha",
    ],
    repoUrl: "https://github.com/Dev02553/Testes-Automatizados_ParaBank",
    status: "Completo",
    year: "2025",

    metrics: [
      { label: "Casos E2E", value: "10" },
      { label: "Execução", value: "Headless + UI", hint: "Maven / ChromeDriver" },
      { label: "Evidências", value: "Screenshots em falha" },
      { label: "Padrão", value: "BaseTest + Helpers", hint: "reuso e estabilidade" },
    ],

    run: {
      headless: "mvn -Dheadless=true clean test",
      ui: "mvn clean test -Dheadless=false",
    },

    caseStudy: [
      {
        id: "context",
        title: { pt: "Contexto", en: "Context" },
        body: {
          pt: "O ParaBank (Parasoft) é um sistema demo usado para praticar automação E2E. Por ser público, pode variar a UI/mensagens e ficar instável.",
          en: "ParaBank (Parasoft) is a demo banking app used to practice E2E automation. As a public environment, UI/messages may vary and it can be unstable.",
        },
      },
      {
        id: "goal",
        title: { pt: "Objetivo", en: "Goal" },
        bullets: {
          pt: [
            "Cobrir fluxos críticos (login, contas, transferências, perfil).",
            "Aplicar boas práticas (setup/teardown, waits, evidências).",
            "Executar em headless (CI) e visual (UI).",
          ],
          en: [
            "Cover critical flows (login, accounts, transfers, profile).",
            "Apply best practices (setup/teardown, waits, evidence).",
            "Run headless (CI) and visual (UI).",
          ],
        },
      },
      {
        id: "approach",
        title: { pt: "Abordagem", en: "Approach" },
        bullets: {
          pt: [
            "BaseTest centraliza WebDriver, waits e helpers.",
            "Seletores mais estáveis + waits explícitos para reduzir flakiness.",
            "Screenshot automático em falha.",
          ],
          en: [
            "BaseTest centralizes WebDriver, waits and helpers.",
            "More stable selectors + explicit waits to reduce flakiness.",
            "Automatic screenshot on failure.",
          ],
        },
      },
      {
        id: "results",
        title: { pt: "Resultados", en: "Results" },
        bullets: {
          pt: [
            "Suíte executável via Maven com logs claros.",
            "Cobertura dos cenários principais com maior estabilidade.",
            "Estrutura pronta para evoluir com Page Objects.",
          ],
          en: [
            "Maven-runnable suite with clear logs.",
            "Main scenario coverage with improved stability.",
            "Structure ready to evolve with Page Objects.",
          ],
        },
      },
      {
        id: "next",
        title: { pt: "Próximos passos", en: "Next steps" },
        bullets: {
          pt: [
            "Adicionar Page Object Model (POM).",
            "Relatórios HTML + anexar screenshots no CI.",
            "Pipeline no GitHub Actions com artefatos.",
          ],
          en: [
            "Add Page Object Model (POM).",
            "HTML reports + attach screenshots in CI.",
            "GitHub Actions pipeline with artifacts.",
          ],
        },
      },
    ],
  },

  // =========================
  // 3) Java API CRUD
  // =========================
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
      "Migrations (Flyway) + testes de integração",
    ],
    repoUrl: "https://github.com/Dev02553/java-api-crud",
    status: "Completo",
    year: "2025",

    metrics: [
      { label: "API", value: "REST", hint: "padrão de endpoints" },
      { label: "Banco", value: "JPA + Migrations", hint: "Flyway" },
      { label: "Testes", value: "Integração", hint: "Testcontainers" },
      { label: "Docs", value: "OpenAPI", hint: "Swagger UI" },
    ],

    run: {
      headless: "mvn -q test",
      ui: "mvn spring-boot:run",
    },

    caseStudy: [
      {
        id: "context",
        title: { pt: "Contexto", en: "Context" },
        body: {
          pt: "APIs de CRUD são comuns em produtos, mas precisam consistência: validação, erros padronizados e banco versionado por migrations.",
          en: "CRUD APIs are common in products, but they require consistency: validation, standardized errors, and versioned database via migrations.",
        },
      },
      {
        id: "goal",
        title: { pt: "Objetivo", en: "Goal" },
        bullets: {
          pt: [
            "Construir uma API CRUD com boas práticas de backend.",
            "Garantir consistência do banco com migrations.",
            "Cobrir com testes de integração reproduzíveis.",
          ],
          en: [
            "Build a CRUD API with backend best practices.",
            "Ensure database consistency with migrations.",
            "Cover with reproducible integration tests.",
          ],
        },
      },
      {
        id: "approach",
        title: { pt: "Abordagem", en: "Approach" },
        bullets: {
          pt: [
            "Camadas bem separadas (controller/service/repository).",
            "Validação de entrada + respostas de erro padronizadas.",
            "Testcontainers para testes mais próximos do real.",
          ],
          en: [
            "Well-separated layers (controller/service/repository).",
            "Input validation + standardized error responses.",
            "Testcontainers for more realistic integration tests.",
          ],
        },
      },
      {
        id: "next",
        title: { pt: "Próximos passos", en: "Next steps" },
        bullets: {
          pt: [
            "Adicionar autenticação/autorização.",
            "Observabilidade (logs estruturados + métricas).",
            "CI rodando testes e publicando artefatos.",
          ],
          en: [
            "Add authentication/authorization.",
            "Observability (structured logs + metrics).",
            "CI running tests and publishing artifacts.",
          ],
        },
      },
    ],
  },

  // =========================
  // 4) React Dashboard
  // =========================
  {
  slug: "react-dashboard",
  title: "Dashboard (Next/React) consumindo API",
  subtitle:
    "Interface de produto com tabela, filtros, formulários e integração com backend.",
  tags: ["Frontend", "Produto"],
  stack: ["Next.js", "React", "TypeScript", "Tailwind", "Zod", "API"],
  highlights: [
    "Schema Zod compartilhado entre cliente e API route",
    "Tipos centralizados em lib/types.ts com PRODUCT_STATUSES as const",
    "Skeleton de loading, empty state e labels acessíveis",
    "Estrutura pronta para deploy no Vercel",
  ],
  repoUrl: "https://github.com/Dev02553/dashboard-next-react-api",
  demoUrl: "https://dashboard-next-react-api.vercel.app",
  status: "Completo",
  year: "2026",

  metrics: [
    { label: "UI", value: "Tabela + filtros", hint: "busca e ordenação" },
    { label: "Forms", value: "Zod", hint: "validação cliente e servidor" },
    { label: "Tipos", value: "Centralizados", hint: "lib/types.ts" },
    { label: "Deploy", value: "Vercel-ready", hint: "build estável" },
  ],

  run: {
    headless: "npm run build",
    ui: "npm run dev",
  },

  caseStudy: [
    {
      id: "context",
      title: { pt: "Contexto", en: "Context" },
      body: {
        pt: "Dashboards precisam ser rápidos e claros: listar dados, filtrar, editar e manter consistência visual.",
        en: "Dashboards must be fast and clear: list data, filter, edit, and keep visual consistency.",
      },
    },
    {
      id: "goal",
      title: { pt: "Objetivo", en: "Goal" },
      bullets: {
        pt: [
          "Criar UI focada em produto: tabela, filtros e formulários.",
          "Centralizar tipos e constantes para escala e manutenção.",
          "Compartilhar schema Zod entre cliente e API sem duplicação.",
        ],
        en: [
          "Create a product-focused UI: table, filters and forms.",
          "Centralize types and constants for scale and maintenance.",
          "Share Zod schema between client and API without duplication.",
        ],
      },
    },
    {
      id: "approach",
      title: { pt: "Abordagem", en: "Approach" },
      bullets: {
        pt: [
          "PRODUCT_STATUSES as const como única fonte de verdade para status.",
          "useMemo para derivar lista filtrada sem efeitos colaterais.",
          "htmlFor + id em todos os campos para acessibilidade.",
          "Skeleton com animate-pulse nativo do Tailwind no loading.",
        ],
        en: [
          "PRODUCT_STATUSES as const as the single source of truth for statuses.",
          "useMemo to derive filtered list without side effects.",
          "htmlFor + id on all fields for accessibility.",
          "Skeleton with Tailwind's native animate-pulse on loading.",
        ],
      },
    },
    {
      id: "next",
      title: { pt: "Próximos passos", en: "Next steps" },
      bullets: {
        pt: [
          "Paginação na tabela.",
          "Custom hook useProducts para encapsular fetch e estado.",
          "Testes com Vitest + Testing Library.",
          "Integração com backend real e autenticação.",
        ],
        en: [
          "Table pagination.",
          "Custom hook useProducts to encapsulate fetch and state.",
          "Tests with Vitest + Testing Library.",
          "Real backend integration and authentication.",
        ],
      },
    },
  ],
},

  // =========================
  // 5) RPG HUB
  // =========================
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
      "Base para features de produto (permissões, colaboração)",
    ],
    repoUrl: "https://github.com/Dev02553/rpg-hub",
    status: "Em construção",
    year: "2026",

    metrics: [
      { label: "Domínio", value: "RPG/Produto", hint: "organização e UX" },
      { label: "Core", value: "CRUD", hint: "campanhas e entidades" },
      { label: "Assets", value: "Upload/mapas", hint: "organização de mídia" },
      { label: "Futuro", value: "Auth/roles", hint: "permissões" },
    ],

    run: {
      headless: "npm run build",
      ui: "npm run dev",
    },

    caseStudy: [
      {
        id: "context",
        title: { pt: "Contexto", en: "Context" },
        body: {
          pt: "Mestres e grupos acumulam informações: NPCs, sessões, mapas e itens. Sem organização, o jogo perde ritmo.",
          en: "GMs and groups accumulate information: NPCs, sessions, maps and items. Without organization, the game loses pacing.",
        },
      },
      {
        id: "goal",
        title: { pt: "Objetivo", en: "Goal" },
        bullets: {
          pt: [
            "Centralizar informações da campanha com boa UX.",
            "Facilitar consulta rápida durante sessões.",
            "Criar base para features futuras (auth, colaboração, export).",
          ],
          en: [
            "Centralize campaign info with good UX.",
            "Enable quick lookup during sessions.",
            "Create a base for future features (auth, collaboration, export).",
          ],
        },
      },
      {
        id: "next",
        title: { pt: "Próximos passos", en: "Next steps" },
        bullets: {
          pt: [
            "Definir modelo de dados (DB) e endpoints.",
            "Adicionar upload com organização por campanha.",
            "Permissões por papel (mestre/jogador).",
          ],
          en: [
            "Define the data model (DB) and endpoints.",
            "Add uploads organized per campaign.",
            "Role-based permissions (GM/player).",
          ],
        },
      },
    ],
  },
];