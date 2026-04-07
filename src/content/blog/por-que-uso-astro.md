---
title: "Por qué uso Astro (y no Next.js)"
description: "Mi razonamiento para elegir Astro como framework para este portfolio y blog, viniendo de años con Next.js."
date: 2026-03-17
tags: ["astro", "opinión", "frontend"]
draft: false
---

## El contexto

Llevo años trabajando con Next.js. Lo conozco bien, me fío de él para proyectos de trabajo. Pero cuando decidí rehacerme el portfolio, quise replantearlo desde cero.

La pregunta que me hice: **¿qué necesita realmente un portfolio con blog?**

- Páginas estáticas mayoritariamente
- Muy poco JavaScript en cliente
- Build rápido
- Markdown como fuente de contenido

Next.js puede hacer todo eso. Pero viene con bastante overhead para un caso de uso tan simple.

## Qué me convenció de Astro

### El modelo mental es más honesto

En Astro, **por defecto no hay JavaScript en el cliente**. Si quieres interactividad, tienes que pedirla explícitamente con directivas como `client:load` o `client:idle`.

Esto me parece el modelo correcto para un blog. Un post de texto no necesita React hidratado. Una card de proyecto tampoco.

### Islands Architecture

Astro llama "islas" a los componentes interactivos. En todo mi portfolio, solo hay dos islas:
- El `ThemeToggle` (React, `client:load`)
- Las integraciones de GitHub y Goodreads

El resto es HTML estático generado en build time. Resultado: páginas que cargan instantáneamente.

### Content Collections

La gestión de contenido en Astro es elegante. Defines un schema con Zod, y Astro valida todos tus archivos Markdown en build time. Si te olvidas de un campo requerido, falla el build — no en producción.

```typescript
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});
```

### Integración con cualquier framework UI

Puedo mezclar componentes de React, Vue o Svelte en el mismo proyecto. En la práctica no lo necesito mucho, pero la flexibilidad está ahí.

## Lo que echo de menos de Next.js

Honestamente, no mucho para este caso de uso. Si tuviera que construir una aplicación con autenticación, rutas protegidas y datos dinámicos, volvería a Next sin dudarlo.

Pero para un blog estático con un par de integraciones dinámicas, Astro gana por simplicidad.

## Conclusión

Usa la herramienta correcta para cada trabajo. Astro no es mejor que Next.js — es mejor *para esto*.
