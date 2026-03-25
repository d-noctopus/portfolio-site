# David Rodrigues · Portfólio

Portfólio desenvolvido com **Next.js**, **React**, **TypeScript** e **Tailwind CSS** para apresentar projetos em **QA**, **automação**, **dados** e **desenvolvimento**.

A proposta do site é reunir projetos com contexto, stack, métricas, instruções de execução, links de repositório/demo e páginas de **case study**, tornando a navegação mais clara para recrutadores, gestores e pessoas técnicas.

## Acesso

- **Portfólio online:** https://portfolio-site-nine-tau-41.vercel.app/
- **GitHub:** https://github.com/Dev02553

---

## Sobre o projeto

Este projeto foi criado para servir como vitrine técnica e profissional, organizando experiências práticas em uma interface moderna, responsiva e fácil de navegar.

O portfólio apresenta:
- página inicial com visão geral
- página de projetos
- páginas dinâmicas por projeto
- informações de stack, highlights e métricas
- links para repositórios e demos
- case studies em português e inglês
- previews visuais dos sistemas

Além da parte visual, o projeto também foi estruturado para facilitar manutenção e crescimento, com dados centralizados e páginas geradas de forma consistente.

---

## Principais funcionalidades

- **Listagem de projetos** com foco em clareza visual
- **Páginas dinâmicas** por slug (`/projects/[slug]`)
- **Case studies** com contexto, abordagem, aprendizados e próximos passos
- **Preview visual** dos projetos
- **Links para repositório e demo**
- **Seções bilíngues** em partes do conteúdo
- **Layout responsivo**
- **Deploy na Vercel**

---

## Stack utilizada

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **App Router**
- **Vercel**

---

## Estrutura do projeto

```bash
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   │   └── [slug]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
│   ├── projects.ts
│   └── types.ts
└── styles/
Organização principal
src/app → rotas e páginas
src/components → componentes reutilizáveis
src/lib/projects.ts → dados dos projetos
src/lib/types.ts → tipagem dos projetos e seções
public/ → imagens, previews e assets
Como executar localmente
1. Clonar o repositório
git clone https://github.com/Dev02553/portfolio-site.git
cd portfolio-site
2. Instalar dependências
npm install
3. Rodar em desenvolvimento
npm run dev

A aplicação ficará disponível em:

http://localhost:3000
Scripts disponíveis
npm run dev
npm run build
npm run start
npm run dev → inicia o ambiente de desenvolvimento
npm run build → gera a build de produção
npm run start → executa a build em modo de produção
Como adicionar um novo projeto

Os projetos são centralizados em:

src/lib/projects.ts

Para adicionar um novo item ao portfólio, basta criar um novo objeto com campos como:

slug
title
subtitle
tags
stack
highlights
repoUrl
demoUrl
previewUrl
metrics
run
caseStudy

Se houver preview visual, a imagem deve ser colocada na pasta:

public/
Objetivo do portfólio

Este portfólio foi desenvolvido para:

apresentar projetos de forma mais estratégica
mostrar não só código, mas também contexto e aplicação prática
facilitar leitura por recrutadores e pessoas técnicas
reunir em um só lugar projetos de QA, automação, backend, frontend e dados
Próximos passos

Como evolução do projeto, os próximos passos naturais são:

adicionar mais projetos e estudos de caso
refinar SEO e metadados sociais
expandir a personalização visual
incluir novas seções de experiência e trajetória
melhorar ainda mais a apresentação dos previews e demos
Deploy

O projeto está publicado na Vercel e pode ser atualizado automaticamente a cada novo push no GitHub.

Para gerar a build localmente antes do deploy:

npm run build
Autor

David Rodrigues

GitHub: https://github.com/Dev02553
LinkedIn: https://www.linkedin.com/in/david-silva-rodrigues-500190284/
E-mail: David_2553@hotmail.com
