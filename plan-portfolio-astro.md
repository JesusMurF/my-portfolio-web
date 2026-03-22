# Plan de Desarrollo: Portfolio Astro + Blog

## 📋 Contexto del Proyecto

- **Framework:** Astro 4
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
│   ├── index.astro (home)
│   ├── about.astro
│   ├── work.astro
│   ├── blog/
│   │   ├── index.astro (listado)
│   │   └── [...slug].astro (post dinámico)
│   ├── projects.astro
│   └── now.astro
├── components/
│   ├── navbar/
│   │   ├── Navbar.astro
│   │   └── ThemeToggle.jsx
│   ├── blog/
│   │   ├── BlogCard.astro
│   │   ├── BlogHeader.astro
│   │   └── BlogToc.astro
│   ├── integrations/
│   │   ├── GithubStats.jsx
│   │   └── GoodreadsBooks.jsx
│   └── shared/
│       ├── Footer.astro
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
- Navbar (con ThemeToggle)
- Slot para contenido
- Footer
```

#### Paso 2.2: Página Home (index.astro)

```
Secciones:
1. Hero section (intro breve)
2. CTA al blog
3. Destacados: últimos 3 posts
4. Sección "Now" (preview de GitHub + Goodreads)
5. Footer
```

#### Paso 2.3: Página About

```
Intro como desarrollador
- Quién eres
- Por qué este portfolio/blog
- Invitación a leer el blog
```

#### Paso 2.4: Página Work Experience

```
Timeline de experiencias laborales
- Empresa
- Período
- Logros principales (3-4 puntos)
- Stack tecnológico usado
No timeline visual, cards simples y limpias
```

#### Paso 2.5: Página Projects

```
3-5 proyectos destacados
- Imagen/screenshot
- Título
- Descripción breve
- Tech stack
- Links (GitHub, demo si aplica)
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

#### Paso 4.3: Página "Now"

```
now.astro
- GitHub widget (lenguajes, commits)
- Goodreads widget (libros)
- Última canción en Spotify (opcional)
- Lo que estoy haciendo ahora (texto estático)

Actualización: ISR cada 6 horas
```

#### Paso 4.4: ThemeToggle component

```
Componente interactivo (React/Preact)
- Detecta preferencia del sistema
- Persiste en localStorage
- Toggle suave sin flash
- Default: dark mode
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
Semana 2: Páginas estáticas (Home, About, Work, Projects)
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
3. ✅ Blog core (5 posts)
4. ✅ Home con CTA al blog
5. ✅ About + Work Experience
6. ✅ Deploy en Vercel
7. ⏰ Después: Projects, Now, integraciones

---

## 🔧 Dependencias Clave

```json
{
  "astro": "^4.0.0",
  "tailwindcss": "^3.0.0",
  "@astrojs/tailwind": "^4.0.0",
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

- [ ] Proyecto Astro inicializado
- [ ] Estructura de carpetas creada
- [ ] Paleta de colores aplicada (dark/light)
- [ ] Navbar + ThemeToggle funcionales
- [ ] 5 posts de ejemplo en blog
- [ ] Blog listado funcional
- [ ] Página individual de post funcional
- [ ] Home page con destacados
- [ ] About page completa
- [ ] Work Experience con al menos 3 experiencias
- [ ] Projects page con 3+ proyectos
- [ ] GitHub API integrada
- [ ] Goodreads API integrada
- [ ] Página "Now" funcional
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
