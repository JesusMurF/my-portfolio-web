# Plan de Desarrollo: Portfolio Astro + Blog

## 📋 Contexto del Proyecto

- **Framework:** Astro 6
- **Hosting:** Vercel
- **Paleta:** Minimal Contrast (Dark/Light mode)
- **Protagonista:** Blog
- **Integraciones:** Ninguna (sitio estático puro)
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

### **FASE 4: ThemeToggle (Semana 4)**

#### Paso 4.1: ThemeToggle component

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
Variables de entorno: ninguna requerida para el deploy

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
Semana 4: ThemeToggle + ajustes de UI
Semana 5: SEO, optimización y deploy

MVP funcional: 4-5 semanas
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
- [x] Work Experience con al menos 3 experiencias (sección en home)
- [x] Projects con 3+ proyectos (sección en home)
- [x] 5 posts de ejemplo en blog
- [x] Blog listado funcional
- [x] Página individual de post funcional
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
