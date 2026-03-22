# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Estado del Proyecto

Portfolio personal con blog como protagonista. Proyecto inicializado con **Astro 6** y Node 22 (vía NVM).

## Stack Tecnológico

- **Framework:** Astro 6 (sitio estático con ISR para integraciones dinámicas)
- **Estilos:** TailwindCSS 3.x con variables CSS personalizadas para dark/light mode
- **Componentes interactivos:** React (`@astrojs/react`) — solo para ThemeToggle e integraciones de GitHub/Goodreads
- **Hosting:** Vercel con deploy automático desde `main`
- **Content:** Astro Content Collections para blog y proyectos

## Comandos

```bash
npm run dev       # servidor de desarrollo local
npm run build     # build de producción
npm run preview   # previsualizar build
```

## Arquitectura

### Routing (file-based)

```
src/pages/
├── index.astro           # Home: Hero → About → Work → Projects → Blog preview (3-4 posts) → GitHub widget → Goodreads widget
└── blog/
    ├── index.astro       # Listado completo de posts, ordenado por fecha desc
    └── [...slug].astro   # Post individual con TOC + nav prev/next
```

Todo el contenido vive en `index.astro` como secciones. Las únicas páginas independientes son `/blog` y `/blog/[slug]`.

### Navegación

Sin navbar ni footer global. La navegación es contextual:
- El CTA "Ver todos los posts" en la sección blog de home enlaza a `/blog`
- Las páginas de blog y `/now` tienen un link "← Volver a home" en la parte superior
- El ThemeToggle va flotante (esquina superior derecha) o dentro del HeroSection

### Layouts

- `BaseLayout.astro` — incluye `Head.astro` (SEO) + ThemeToggle + slot
- `BlogLayout.astro` — extiende BaseLayout, añade link de vuelta a home + BlogHeader + BlogToc

### Componentes con lógica interactiva (React)

Solo estos componentes usan React (client:load):

- `shared/ThemeToggle.jsx` — persiste preferencia en localStorage, default dark
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

Como nunca he trabajado Astro dime porque tomas cada una de las decisiones y a la vez enseñame Astro para que yo pueda ir aprendiendo sobre este framework. También muestra links a la documentación de Astro donde se haga referencia al tema que estamos tratando.
