# Plan de Desarrollo: Portfolio Astro + Blog

## 📋 Contexto del Proyecto

- **Framework:** Astro 6
- **Hosting:** Vercel
- **Paleta:** Minimal Contrast (Dark/Light mode)
- **Protagonista:** Blog
- **Integraciones:** GitHub API + Goodreads API
- **Desplegado:** Vercel

---

## 🎯 Fases de Desarrollo

### **FASE 1: Setup Base (Semana 1)**

#### Paso 1.1: Inicializar proyecto Astro

```
Crear nuevo proyecto Astro con template minimalista
Instalaciones necesarias:
- astro
- @astrojs/react (para componentes interactivos)
- typescript
- tailwindcss
```

#### Paso 1.2: Estructura de carpetas

```
src/
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogLayout.astro
├── pages/
│   ├── index.astro (home - contiene todas las secciones)
│   └── blog/
│       ├── index.astro (listado completo de posts)
│       └── [...slug].astro (post dinámico)
├── components/
│   ├── home/
│   │   ├── HeroSection.astro
│   │   ├── AboutSection.astro
│   │   ├── WorkSection.astro
│   │   └── ProjectsSection.astro
│   ├── blog/
│   │   ├── BlogCard.astro
│   │   ├── BlogHeader.astro
│   │   └── BlogToc.astro
│   ├── integrations/
│   │   ├── GithubStats.jsx
│   │   └── GoodreadsBooks.jsx
│   └── shared/
│       ├── ThemeToggle.jsx
│       └── Head.astro
├── content/
│   ├── blog/
│   │   ├── primer-post.md
│   │   └── segundo-post.md
│   └── projects/
│       └── projects.json
├── styles/
│   └── globals.css
└── utils/
    ├── api.ts
    ├── constants.ts
    └── types.ts
```

#### Paso 1.3: Configurar tema (paleta Minimal Contrast)

```
Crear sistema de variables CSS para dark/light mode
Integrar TailwindCSS con colores personalizados
- Primario: #3b82f6
- Secundario: #10b981
- Fondo dark: #0a0a0a
- Fondo light: #ffffff
- Texto oscuro: #e8e8e8
- Texto claro: #1a1a1a
```

---

### **FASE 2: Estructura Core (Semana 2)**

#### Paso 2.1: Crear layout base

```
BaseLayout.astro
- ThemeToggle (flotante o en el hero)
- Slot para contenido

BlogLayout.astro
- Link "← Volver a home" al inicio
- Slot para contenido del post
```

#### Paso 2.2: Página Home (index.astro) — página única con todas las secciones

```
Secciones en orden:
1. Hero section (intro breve)
2. About section (quién eres, por qué este blog)
3. Work Experience section (cards de experiencia laboral)
   - Empresa, período, logros principales (3-4 puntos), stack tecnológico
   - Cards simples y limpias, sin timeline visual
4. Projects section (3-5 proyectos destacados)
   - Título, descripción breve, tech stack, links (GitHub + demo)
5. Blog section (3-4 extractos de posts recientes + CTA a /blog)
6. GitHub widget (actividad reciente)
7. Goodreads widget (últimos libros leídos)
```

---

### **FASE 3: Sistema de Blog (Semana 3)**

#### Paso 3.1: Configurar Astro Content Collections

```
Crear colección "blog" con esquema:
- title (string, requerido)
- description (string, requerido)
- date (Date, requerido)
- author (string, default: "You")
- tags (array de strings)
- image (string, opcional - featured image)
- draft (boolean, default: false)

Crear colección "projects" con esquema similar
```

#### Paso 3.2: Crear 5 posts dummy

```
Crear 5 posts MD de ejemplo para estructura:
1. "Bienvenido a mi blog" (intro)
2. "Por qué uso Web Components" (opinion)
3. "Deep dive: Arquitectura escalable" (técnico)
4. "Building in Public: Portfolio" (proceso)
5. "Recursos que vale la pena leer" (curado)

Cada post debe tener:
- Frontmatter completo
- Estructura clara (H2/H3)
- Párrafos cortos
- Destacados en negrita
```

#### Paso 3.3: Crear páginas de blog

```
blog/index.astro
- Listado de todos los posts
- Ordenados por fecha (más reciente primero)
- Filtro por tags (opcional v2)
- Búsqueda (opcional v2)

blog/[...slug].astro
- Renderizar post individual
- Tabla de contenidos (automática)
- Autor + fecha
- Tags al final
- Navegación prev/next
- Sección comentarios (opcional v2)
```

#### Paso 3.4: Componentes de blog

```
BlogCard.astro - Card para listado
BlogHeader.astro - Header del post (título, fecha, autor, tags)
BlogToc.astro - Tabla de contenidos
CustomCodeBlock - Syntax highlighting personalizado
```

---

### **FASE 4: Integraciones Dinámicas (Semana 4)**

#### Paso 4.1: GitHub API Integration

```
Crear composable/hook para traer datos:
- Lenguajes usados esta semana
- Último commit
- Streak de días
- Top repos públicos

Datos se cachean y se actualizan cada hora (ISR)
Usar API REST v3 de GitHub (token en .env)
```

#### Paso 4.2: Goodreads Integration

```
Opción 1: Goodreads API (deprecada pero aún funciona)
Opción 2: Goodreads scraping suave + cache
Opción 3: Notion como source (si usas Notion)

Mostrar:
- Libro actual (si está leyendo)
- Últimos 3 completados
- Rating
- Pequeña descripción
```

#### Paso 4.3: ThemeToggle component

```
Componente interactivo (React)
- Detecta preferencia del sistema
- Persiste en localStorage
- Toggle suave sin flash
- Default: dark mode
- Posición: flotante (esquina superior derecha) o dentro del HeroSection
```

---

### **FASE 5: SEO + Deployment (Semana 5)**

#### Paso 5.1: SEO Setup

```
Meta tags en cada página:
- Open Graph (para compartir)
- Twitter cards
- Canonical URLs
- Sitemap automático
- Robots.txt

Para posts:
- Slug optimizado
- Meta description
- Palabras clave en contenido
```

#### Paso 5.2: Performance

```
Lighthouse audit
- Lazy loading de imágenes
- Code splitting automático (Astro ya lo hace)
- Minificación CSS/JS
- Imagen optimizada de perfil (WebP)

Target: 90+ en Lighthouse
```

#### Paso 5.3: Configurar Vercel

```
Conectar repo GitHub a Vercel
Variables de entorno:
- GITHUB_TOKEN
- GOODREADS_API_KEY
- (otras según integraciones)

Deploy automático en push a main
```

#### Paso 5.4: Domain + SSL

```
Apuntar dominio personal a Vercel
SSL automático
Email de contacto (opcional)
```

---

## 📊 Timeline Sugerido

```
Semana 1: Setup base + estructura
Semana 2: Home page completa (Hero, About, Work, Projects, Blog preview)
Semana 3: Blog completamente funcional con 5 posts
Semana 4: Integraciones GitHub + Goodreads
Semana 5: SEO, optimización y deploy

MVP funcional: 5 semanas
MVP + pulido: 6-7 semanas
```

---

## 🎯 MVP Mínimo Viable

Si quieres ir más rápido, enfócate en esto (2-3 semanas):

1. ✅ Setup Astro + estructura base
2. ✅ Navbar + Theme toggle
3. ✅ Home page completa (Hero, About, Work, Projects, Blog preview)
4. ✅ Blog core (5 posts) + página /blog
5. ✅ Deploy en Vercel
6. ⏰ Después: Now, integraciones GitHub + Goodreads

---

## 🔧 Dependencias Clave

```json
{
  "astro": "^6.0.8",
  "tailwindcss": "^4.2.2",
  "@tailwindcss/vite": "^4.2.2",
  "@astrojs/react": "^3.0.0",
  "@astrojs/sitemap": "^2.0.0",
  "typescript": "^5.0.0",
  "lucide-react": "^0.x.0",
  "clsx": "^2.0.0"
}
```

---

## 📝 Variables de Entorno Necesarias

```env
# GitHub API
GITHUB_TOKEN=tu_github_token
GITHUB_USERNAME=tu_usuario

# Goodreads (si usas API)
GOODREADS_API_KEY=tu_key

# Email (opcional, para contacto)
EMAIL_SERVICE_ID=
EMAIL_TEMPLATE_ID=
EMAIL_PUBLIC_KEY=
```

---

## ✅ Checklist de Finalización

- [x] Proyecto Astro inicializado (Astro 6 + Node 22 vía NVM)
- [x] Paleta de colores aplicada (dark/light) — variables CSS + Tailwind 4 configurado
- [x] ThemeToggle funcional — isla React, persiste en localStorage, sin flash al cargar
- [x] BaseLayout.astro — incluye Head.astro + ThemeToggle + slot + import global.css
- [x] Head.astro — meta tags, favicon, script anti-flash
- [x] HeroSection.astro — saludo, tagline, bio, CTA al blog, links sociales
- [x] AboutSection.astro — bio, párrafos y chips de skills
- [ ] Home page completa (Work + Projects + Blog preview)
- [ ] Work Experience con al menos 3 experiencias (sección en home)
- [ ] Projects con 3+ proyectos (sección en home)
- [ ] 5 posts de ejemplo en blog
- [ ] Blog listado funcional
- [ ] Página individual de post funcional
- [ ] GitHub API integrada
- [ ] Goodreads API integrada
- [ ] GitHub widget integrado en home
- [ ] Goodreads widget integrado en home
- [ ] SEO setup (meta tags, sitemap)
- [ ] Lighthouse 90+
- [ ] Desplegado en Vercel
- [ ] Dominio apuntando a Vercel

---

## 🚀 Próximos Pasos Post-MVP

- Comentarios en posts (Giscus o Disqus)
- Newsletter signup
- Dark mode animations mejoradas
- Versión en español + English
- Analytics (Vercel Analytics)
- Search en blog
- Tags funcionales
- Related posts
