# nathaliafab.github.io

Meu site pessoal, em português e inglês. Feito com [Astro](https://astro.build) e TypeScript, publicado no GitHub Pages.

## Como funciona

Todo o conteúdo mora em **um só lugar**: `src/data/`. As páginas só leem esses arquivos, então atualizar o site é editar dados, não HTML.

| Arquivo | O que controla |
| --- | --- |
| `profile.ts` | Nome, cargo, "Sobre" e links de contato |
| `stack.ts` | Tecnologias com ícone, por grupo |
| `projects.ts` | Projetos: capa, descrição, tags e links |
| `papers.ts` | Artigos publicados e reconhecimentos |
| `events.ts` | Eventos e hackathons |

Cada texto tem uma versão `pt` e outra `en`. Para criar ou ajustar algo, copie um item existente e edite.

- **Novo projeto:** coloque a capa (1200×627) em `src/assets/projects/`, importe em `projects.ts` e copie um item. As imagens são otimizadas no build.
- **Nova tecnologia:** procure o ícone em [icon-sets.iconify.design](https://icon-sets.iconify.design) (prefira o conjunto `devicon`, que é colorido), instale o pacote `@iconify-json/...` se for um conjunto novo e adicione em `stack.ts`.

### Blog

Crie um arquivo `.md` em `src/content/blog/`:

```md
---
title: 'Título do post'
description: 'Resumo de uma linha.'
pubDate: 2026-12-01
tags: ['ia']
---

Texto do post.
```

Enquanto não houver post publicado, o link "Blog" não aparece no menu. Posts com `draft: true` só aparecem no `npm run dev`. O feed RSS fica em `/rss.xml`.

## Rodando localmente

Precisa de Node 22+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # checagem de tipos
npm run build    # gera a pasta dist/
npm run preview  # abre o build
```

## Publicação

Cada push na branch `main` roda `.github/workflows/deploy.yml`, que compila e publica no GitHub Pages.
Na primeira vez: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
