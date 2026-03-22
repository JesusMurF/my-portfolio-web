# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Estado del Proyecto

Portfolio personal con blog como protagonista. **El proyecto aún no está inicializado** — solo existe `plan-portfolio-astro.md`. El primer paso es ejecutar `npm create astro@latest` para inicializarlo.

## Stack Tecnológico

- **Framework:** Astro 4 (sitio estático con ISR para integraciones dinámicas)
- **Estilos:** TailwindCSS 3.x con variables CSS personalizadas para dark/light mode
- **Componentes interactivos:** React (`@astrojs/react`) — solo para ThemeToggle e integraciones de GitHub/Goodreads
- **Hosting:** Vercel con deploy automático desde `main`
- **Content:** Astro Content Collections para blog y proyectos

## Comandos (una vez inicializado)

```bash
npm run dev       # servidor de desarrollo local
npm run build     # build de producción
npm run preview   # previsualizar build
```

## Arquitectura

### Routing (file-based)

```
src/pages/
├── index.astro           # Home: hero + CTA blog + últimos 3 posts + preview "Now"
├── about.astro
├── work.astro            # Timeline de experiencia laboral (cards, no timeline visual)
├── projects.astro        # 3-5 proyectos con tech stack + links
├── now.astro             # Widgets GitHub + Goodreads, actualización ISR cada 6h
└── blog/
    ├── index.astro       # Listado ordenado por fecha desc
    └── [...slug].astro   # Post individual con TOC + nav prev/next
```

### Layouts

- `BaseLayout.astro` — envuelve todo: Navbar (con ThemeToggle) + slot + Footer
- `BlogLayout.astro` — extiende BaseLayout, añade BlogHeader y BlogToc

### Componentes con lógica interactiva (React)

Solo dos componentes usan React (client:load):

- `navbar/ThemeToggle.jsx` — persiste preferencia en localStorage, default dark
- `integrations/GithubStats.jsx` y `integrations/GoodreadsBooks.jsx` — consumen APIs externas

El resto de componentes son `.astro` puros (sin JS en cliente).

### Content Collections

Esquema del blog (`src/content/blog/`):

- `title`, `description`, `date` — requeridos
- `tags` — array de strings
- `image` — opcional (featured image)
- `draft` — boolean, default false (los drafts no se publican)

Esquema de proyectos (`src/content/projects/projects.json`).

### Tema (Minimal Contrast)

Variables CSS en `src/styles/globals.css`:

- Primario: `#3b82f6`, Secundario: `#10b981`
- Fondo dark: `#0a0a0a`, Fondo light: `#ffffff`
- Texto dark: `#e8e8e8`, Texto light: `#1a1a1a`

### Utilidades (`src/utils/`)

- `api.ts` — funciones para consumir GitHub REST API v3 y Goodreads
- `constants.ts` — constantes globales (username, URLs, etc.)
- `types.ts` — tipos TypeScript compartidos

## Variables de Entorno

Crear `.env` con:

```
GITHUB_TOKEN=
GITHUB_USERNAME=
GOODREADS_API_KEY=
```

Los datos de GitHub y Goodreads se cachean con ISR (GitHub: cada 1h, Now page: cada 6h).

## Decisiones de Diseño

- El blog es el protagonista — la home tiene CTA directo al blog
- Dark mode por defecto, sin flash al cargar (localStorage leído antes del render)
- Integraciones dinámicas (GitHub/Goodreads) solo en página `/now` y preview en home
- No usar timeline visual en Work Experience, usar cards limpias
- Target Lighthouse 90+ en todas las páginas

## Instrucciones para Claude.

Como nunca he trabajado Astro dime porque tomas cada una de las decisiones y a la vez enseñame Astro para que yo pueda ir aprendiendo sobre este framework.
