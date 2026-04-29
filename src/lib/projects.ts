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
  period?: string;
  metrics?: ProjectMetric[];
  run?: ProjectRun;
  caseStudy?: CaseStudySection[];
};

export const projects: Project[] = [
  // =========================
  // 1) React Dashboard
  // =========================
  {
    slug: "react-dashboard",
    title: "Dashboard de Catálogo com Busca em Linguagem Natural",
    subtitle:
      "Dashboard administrativo com KPIs, filtros e busca em linguagem natural para identificar ruptura, itens inativos e oportunidades no catálogo.",
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
      "Busca em linguagem natural para consultas como 'sem estoque', 'estoque baixo' e 'mais caro'",
      "Filtros, ordenação e resumo visual dos critérios ativos",
      "KPIs para leitura rápida de estoque, atividade e ticket médio",
      "API mock integrada com validação no cliente e no servidor",
      "Testes automatizados e build de produção validada",
    ],
    repoUrl: "https://github.com/d-noctopus/dashboard-next-react-api",
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
    period: "jan 2026 – mar 2026",

    metrics: [
      { label: "Busca", value: "Linguagem natural", hint: "consultas operacionais" },
      { label: "Decisão", value: "KPIs + filtros", hint: "leitura rápida do catálogo" },
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
  // 2) ParaBank QA
  // =========================
  {
    slug: "parabank-selenium-qa",
    title: "QA E2E — Selenium + JUnit (ParaBank)",
    subtitle:
      "Automação end-to-end com 10 casos passando, relatório Allure e execução estruturada para uso local e integração contínua.",
    tags: ["QA", "Automação"],
    stack: [
      "Java",
      "JUnit 5",
      "Selenium 4",
      "Maven",
      "Allure Report",
      "WebDriverManager",
      "GitHub Actions",
    ],
    highlights: [
      "Suite E2E com 10 casos automatizados cobrindo fluxos relevantes do ParaBank",
      "Relatório Allure com visão consolidada da execução e evidências dos testes",
      "WebDriverManager para gerenciamento automático de drivers",
      "Estrutura organizada para reduzir flakiness e facilitar manutenção",
      "Execução compatível com ambiente local e pipeline de CI",
    ],
    repoUrl: "https://github.com/d-noctopus/Testes-Automatizados_ParaBank",
    previewUrl: "/parabank-preview-1.png",
    gallery: [
      {
        src: "/parabank-preview-1.png",
        alt: "Allure Report do projeto ParaBank com 10 casos de teste e 100% de aprovação",
      },
      {
        src: "/parabank-preview-2.png",
        alt: "Detalhamento das suítes automatizadas do projeto ParaBank no Allure Report",
      },
    ],
    status: "Completo",
    year: "2025",
    period: "abr 2025 – dez 2025",

    metrics: [
      { label: "Cobertura", value: "10 casos E2E", hint: "fluxos principais" },
      { label: "Resultado", value: "100% pass", hint: "execução reportada no Allure" },
      { label: "Relatório", value: "Allure", hint: "visão consolidada da suíte" },
      { label: "Execução", value: "Maven", hint: "local e CI" },
    ],

    run: {
      headless: "mvn test -Dheadless=true",
      ui: "mvn test; mvn allure:serve",
    },

    caseStudy: [
      {
        id: "context",
        title: { pt: "Contexto", en: "Context" },
        body: {
          pt: "O ParaBank, da Parasoft, foi utilizado como ambiente público para praticar automação E2E em uma aplicação web com fluxos reais de cadastro, autenticação, contas, transferências e atualização de perfil.",
          en: "ParaBank, by Parasoft, was used as a public environment to practice E2E automation in a web application with real flows such as registration, authentication, accounts, transfers and profile updates.",
        },
      },
      {
        id: "goal",
        title: { pt: "Objetivo", en: "Goal" },
        bullets: {
          pt: [
            "Cobrir fluxos relevantes da aplicação com foco em comportamento real do usuário.",
            "Aplicar boas práticas de automação, incluindo waits, setup e teardown consistentes.",
            "Executar a suíte de forma confiável em modo local e em integração contínua.",
          ],
          en: [
            "Cover relevant application flows with a focus on real user behavior.",
            "Apply automation best practices, including waits and consistent setup/teardown.",
            "Run the suite reliably in local mode and continuous integration.",
          ],
        },
      },
      {
        id: "approach",
        title: { pt: "Abordagem", en: "Approach" },
        bullets: {
          pt: [
            "Uso de Selenium 4 com Java para interação com a interface web.",
            "Organização dos testes com JUnit 5 para manter execução previsível.",
            "WebDriverManager para evitar dependência manual de binários no repositório.",
            "Relatórios com Allure para leitura rápida de resultados e evidências da execução.",
            "Execução compatível com pipeline de CI via GitHub Actions.",
          ],
          en: [
            "Use of Selenium 4 with Java for web UI interaction.",
            "Test organization with JUnit 5 to keep execution predictable.",
            "WebDriverManager to avoid manual binary dependencies in the repository.",
            "Allure reports for quick reading of results and execution evidence.",
            "Execution compatible with CI pipelines through GitHub Actions.",
          ],
        },
      },
      {
        id: "results",
        title: { pt: "Resultados", en: "Results" },
        bullets: {
          pt: [
            "Suite com 10 casos de teste passando.",
            "Relatório Allure indicando 100% de sucesso na execução registrada.",
            "Melhor visibilidade dos resultados por meio de overview e suites organizadas.",
            "Projeto mais sólido para demonstração técnica em portfólio.",
          ],
          en: [
            "Test suite with 10 passing test cases.",
            "Allure report showing a 100% success rate in the recorded run.",
            "Better visibility of results through organized overview and suites.",
            "A stronger project for technical portfolio presentation.",
          ],
        },
      },
      {
        id: "learning",
        title: { pt: "Aprendizados", en: "Learnings" },
        bullets: {
          pt: [
            "Prática de automação E2E com foco em fluxos reais de navegação e validação.",
            "Uso de relatórios como apoio para leitura rápida da qualidade da suíte.",
            "Organização de testes pensando em manutenção e previsibilidade.",
            "Integração entre execução local e pipeline automatizada.",
          ],
          en: [
            "Practice with E2E automation focused on real navigation and validation flows.",
            "Use of reports to support quick reading of suite quality.",
            "Test organization with maintainability and predictability in mind.",
            "Integration between local execution and automated pipelines.",
          ],
        },
      },
      {
        id: "next",
        title: { pt: "Próximos passos", en: "Next steps" },
        bullets: {
          pt: [
            "Expandir cobertura para cenários negativos e validações adicionais.",
            "Aprimorar isolamento de massa de dados entre execuções.",
            "Publicar relatórios Allure como artefatos no GitHub Actions.",
          ],
          en: [
            "Expand coverage to negative scenarios and additional validations.",
            "Improve test data isolation between runs.",
            "Publish Allure reports as artifacts in GitHub Actions.",
          ],
        },
      },
    ],
  },

  // =========================
  // 3) Python ETL
  // =========================
  {
    slug: "python-etl-automation",
    title: "ETL & Data Quality em Python",
    subtitle:
      "Pipeline em Python que lê arquivos CSV, identifica problemas de qualidade nos dados e gera relatórios claros em Excel e HTML.",
    tags: ["Dados", "Automação"],
    stack: ["Python", "Pandas", "openpyxl", "XlsxWriter", "Pytest", "CLI", "GitHub Actions"],
    highlights: [
      "Lê arquivos CSV e valida automaticamente a qualidade dos dados",
      "Identifica problemas como campos vazios, duplicidades, datas inválidas e valores inconsistentes",
      "Gera relatórios em Excel e HTML para facilitar revisão e auditoria",
      "Conta com 12 testes automatizados para garantir a estabilidade da pipeline",
    ],
    repoUrl: "https://github.com/d-noctopus/etl-data-quality-em-python",
    demoUrl: "https://portfolio-site-nine-tau-41.vercel.app/reports/etl-data-quality/report.html",
    previewUrl: "/etl-preview.png",
    status: "Completo",
    year: "2025",
    period: "mar 2025 – nov 2025",

    metrics: [
      { label: "Validações", value: "9 regras", hint: "campos obrigatórios, formato, duplicidade, datas e domínio" },
      { label: "Testes", value: "12 testes", hint: "cobrindo regras e pipeline" },
      { label: "Saída", value: "XLSX + HTML", hint: "relatórios prontos para análise" },
      { label: "Execução", value: "CLI", hint: "rodando por comando simples" },
    ],

    run: {
      headless: "python -m pytest -q",
      ui: ".\\run.ps1",
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
            "Pipeline organizada por etapas, com logs e checkpoints para facilitar acompanhamento.",
            "Validações separadas por regra, cobrindo obrigatoriedade, formato, duplicidade, datas e domínio.",
            "Geração de relatórios em XLSX e HTML com visão executiva e detalhamento por regra.",
          ],
          en: [
            "Step-based pipeline with logs and checkpoints for easier monitoring.",
            "Validations split by rule, covering required fields, format, duplicates, dates and domain.",
            "XLSX and HTML reports with executive summary and rule-by-rule detail.",
          ],
        },
      },
      {
        id: "results",
        title: { pt: "Resultados", en: "Results" },
        bullets: {
          pt: [
            "Menos retrabalho: os problemas são detectados antes do consumo em relatórios e análises.",
            "Mais rastreabilidade: cada inconsistência pode ser explicada com clareza.",
            "Saída pronta para revisão em XLSX e HTML, facilitando auditoria da base.",
          ],
          en: [
            "Less rework: issues are detected before reporting and downstream analysis.",
            "More traceability: each inconsistency can be clearly explained.",
            "Output ready for review in XLSX and HTML, making data auditing easier.",
          ],
        },
      },
      {
        id: "next",
        title: { pt: "Próximos passos", en: "Next steps" },
        bullets: {
          pt: [
            "Adicionar validações por domínio de negócio.",
            "Expandir a entrada para formatos como JSON e Parquet.",
            "Publicar o relatório HTML como demonstração estática.",
          ],
          en: [
            "Add business-domain validations.",
            "Expand input support to formats such as JSON and Parquet.",
            "Publish the HTML report as a static demo.",
          ],
        },
      },
    ],
  },

  // =========================
  // 4) Java API CRUD
  // =========================
  {
    slug: "java-api-crud",
    title: "API REST em Java — CRUD de Produtos",
    subtitle:
      "API REST em Java com CRUD completo de produtos, persistência em banco, validação de dados, migrations com Flyway e documentação via Swagger/OpenAPI.",
    tags: ["Backend", "Arquitetura"],
    stack: ["Java", "Spring Boot", "JPA", "Flyway", "Swagger", "JUnit"],
    highlights: [
      "CRUD completo de produtos com validação de entrada",
      "Tratamento de erros padronizado para respostas mais consistentes",
      "Migrations com Flyway e documentação interativa com Swagger",
    ],
    repoUrl: "https://github.com/d-noctopus/api-java-com-db-crud-testes",
    previewUrl: "/java-api-crud-preview.png",
    gallery: [
      {
        src: "/java-api-crud-preview.png",
        alt: "Swagger UI da API Java com endpoints de produtos",
      },
      {
        src: "/java-api-crud-post-success.png",
        alt: "Execução do endpoint POST com resposta 201 Created no Swagger",
      },
    ],
    status: "Completo",
    year: "2024",
    period: "ago 2024 – dez 2024",

    metrics: [
      { label: "API", value: "REST", hint: "endpoints para listar, cadastrar, editar e remover" },
      { label: "Banco", value: "JPA + Flyway", hint: "persistência e versionamento do schema" },
      { label: "Docs", value: "Swagger UI", hint: "documentação interativa via OpenAPI" },
      { label: "Execução", value: "Spring Boot", hint: "subida local com Maven" },
    ],

    run: {
      headless: "mvn test",
      ui: "mvn spring-boot:run",
    },

    caseStudy: [
      {
        id: "context",
        title: { pt: "Contexto", en: "Context" },
        body: {
          pt: "O projeto foi desenvolvido para demonstrar uma API backend em Java com estrutura mais próxima de um ambiente profissional, indo além do CRUD básico ao incluir persistência, validação, versionamento do banco e documentação navegável.",
          en: "The project was built to demonstrate a Java backend API with a structure closer to a professional environment, going beyond basic CRUD by including persistence, validation, database versioning, and browsable documentation.",
        },
      },
      {
        id: "goal",
        title: { pt: "Objetivo", en: "Goal" },
        bullets: {
          pt: [
            "Construir uma API CRUD com boas práticas de backend.",
            "Garantir consistência do banco com migrations.",
            "Documentar os endpoints para facilitar testes e exploração da API.",
          ],
          en: [
            "Build a CRUD API with backend best practices.",
            "Ensure database consistency with migrations.",
            "Document endpoints to make API testing and exploration easier.",
          ],
        },
      },
      {
        id: "approach",
        title: { pt: "Abordagem", en: "Approach" },
        bullets: {
          pt: [
            "Separação em camadas com controller, service, repository e DTOs.",
            "Validação de entrada e respostas de erro padronizadas.",
            "Uso de Swagger/OpenAPI para documentação interativa dos endpoints.",
          ],
          en: [
            "Layered separation with controller, service, repository and DTOs.",
            "Input validation and standardized error responses.",
            "Use of Swagger/OpenAPI for interactive endpoint documentation.",
          ],
        },
      },
      {
        id: "results",
        title: { pt: "Resultados", en: "Results" },
        bullets: {
          pt: [
            "API funcional com operações completas de CRUD.",
            "Documentação acessível pelo navegador para demonstração do projeto.",
            "Base pronta para evoluções como autenticação, CI e deploy em nuvem.",
          ],
          en: [
            "Functional API with complete CRUD operations.",
            "Documentation accessible through the browser for project showcase.",
            "A solid base for future improvements such as authentication, CI, and cloud deployment.",
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
    repoUrl: "https://github.com/d-noctopus/rpg-hub",
    status: "Em construção",
    year: "2024",

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