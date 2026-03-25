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

export type ProjectImage = {
  src: string;
  alt?: string;
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
  previewUrl?: string;
  gallery?: ProjectImage[];
  status: "Em construção" | "MVP" | "Completo";
  year: string;
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
  "Extract → Transform → Validate → Load com logs por etapa",
  "9 regras de Data Quality: obrigatórios, tipos, duplicados, datas, domínio",
  "DQIssue como modelo de dados para evidências rastreáveis",
  "12 testes com Pytest cobrindo todas as regras e cenários de pipeline",
],
    repoUrl: "https://github.com/Dev02553/python-etl-automation",
    previewUrl: "/etl-preview.png",
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
      "Suite E2E com 10 casos passando, Allure Report, WebDriverManager e CI via GitHub Actions.",
    tags: ["QA", "Automação"],
    stack: ["Java", "JUnit 5", "Selenium 4", "Maven", "Allure Report", "WebDriverManager", "GitHub Actions"],
    highlights: [
      "10 casos E2E: login, cadastro, contas, extrato, seguranca e perfil",
        "Relatorio Allure com dashboard, timeline e screenshots em falha",
        "WebDriverManager: sem chromedriver.exe no repositorio",
        "Locators centralizados por classe",
        "CI via GitHub Actions com execucao headless",
        "Cenarios positivos, negativos e de seguranca cobertos",
    ],
    repoUrl: "https://github.com/Dev02553/Testes-Automatizados_ParaBank",
    status: "Completo",
    year: "2025",

    metrics: [
      { label: "Casos E2E", value: "10", hint: "100% passando" },
        { label: "Relatorio", value: "Allure", hint: "dashboard + screenshots" },
        { label: "Driver", value: "WebDriverManager", hint: "sem binario no repo" },
        { label: "CI", value: "GitHub Actions", hint: "headless a cada push" },
    ],

    run: {
      headless: "mvn test -Dheadless=true",
        ui: "mvn test && mvn allure:serve",
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
            "Implementar Page Object Model (POM) para separar seletores dos testes.",
              "Execucao paralela com TestNG e threads.",
              "Publicar relatorio Allure como artefato no GitHub Actions.",
          ],
          en: [
            "Implement Page Object Model (POM) to separate selectors from tests.",
              "Parallel execution with TestNG and threads.",
              "Publish Allure report as artifact in GitHub Actions.",
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
  title: "Dashboard de Catálogo com Busca em Linguagem Natural",
  subtitle:
    "Como transformar dados em decisões — uma interface que faz o dado trabalhar por você.",
  tags: ["Frontend", "Produto"],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Zod",
    "Vitest",
    "Testing Library",
    "API Routes",
  ],
  highlights: [
    "Busca em linguagem natural para consultas como “sem estoque”, “estoque baixo” e “mais caro”",
    "Filtros, ordenação e resumo visual dos critérios ativos",
    "KPIs para leitura rápida de estoque, atividade e ticket médio",
    "API mock integrada com validação no cliente e no servidor",
    "Testes automatizados e build de produção validada",
  ],
  repoUrl: "https://github.com/Dev02553/dashboard-next-react-api",
  demoUrl: "https://dashboard-next-react-api.vercel.app",
  previewUrl: "/dashboard-preview-1.png",
gallery: [
  {
    src: "/dashboard-preview-1.png",
    alt: "Visão geral do dashboard com KPIs, filtros e tabela de produtos",
  },
  {
    src: "/dashboard-preview-2.png",
    alt: "Dashboard com filtros aplicados e resumo de resultados ativos",
  },
],
  status: "Completo",
  year: "2026",

  metrics: [
    { label: "Busca", value: "Linguagem natural", hint: "consultas operacionais" },
    { label: "UI", value: "KPIs + filtros", hint: "leitura rápida" },
    { label: "Validação", value: "Cliente + API", hint: "dados consistentes" },
    { label: "Qualidade", value: "Testes + build", hint: "pronto para deploy" },
  ],

  run: {
    headless: "npm run test && npm run build",
    ui: "npm run dev",
  },

  caseStudy: [
    {
      id: "context",
      title: { pt: "Contexto", en: "Context" },
      body: {
        pt: "Em operações de varejo, os dados só geram valor quando conseguem chegar rápido à decisão. Se informações como estoque, status e categoria exigem esforço demais para serem interpretadas, a operação perde tempo e resposta. Este projeto nasceu para transformar uma listagem comum em uma interface mais clara, navegável e útil para análise.",
        en: "In retail operations, data only creates value when it reaches decision-making quickly. If information such as stock, status and category takes too much effort to interpret, operations lose time and responsiveness. This project was created to turn a simple listing into a clearer, navigable and more useful interface for analysis.",
      },
    },
    {
      id: "goal",
      title: { pt: "Objetivo", en: "Goal" },
      bullets: {
        pt: [
          "Reduzir o atrito na leitura do catálogo com uma interface mais clara.",
          "Destacar rapidamente produtos sem estoque, itens inativos e sinais relevantes da operação.",
          "Combinar busca, filtros, ordenação e indicadores para apoiar decisões mais rápidas.",
        ],
        en: [
          "Reduce friction when reading the catalog with a clearer interface.",
          "Quickly highlight out-of-stock products, inactive items and relevant operational signals.",
          "Combine search, filters, sorting and indicators to support faster decisions.",
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