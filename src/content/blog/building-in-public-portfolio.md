---
title: "Building in public: cómo construí este portfolio"
description: "El proceso, las decisiones y los errores de construir este portfolio desde cero con Astro."
date: 2026-03-31
tags: ["meta", "proceso", "astro"]
draft: false
---

## Por qué empezar de cero

Tenía un portfolio anterior en Next.js. Funcionaba, pero arrastraba decisiones viejas y deuda técnica que hacía difícil actualizarlo. Cada vez que quería cambiar algo pequeño, terminaba tocando cinco archivos.

Decidí rehacerlo desde cero con una condición: **cada decisión tenía que tener una razón concreta**, no solo "porque se usa ahora".

## Las decisiones clave

### Astro en lugar de Next.js

Un portfolio es contenido estático con un par de widgets dinámicos. No necesita SSR, no necesita autenticación, no necesita estado global. Astro encaja perfectamente.

### Markdown para el blog

Sin CMS, sin Notion, sin base de datos. Los posts son archivos `.md` en el repositorio. Ventajas:

- Versioning con Git
- Escribir en cualquier editor
- Sin dependencias externas para publicar

### Tailwind 4

La nueva versión de Tailwind elimina el archivo de configuración. Los tokens se definen directamente en CSS con `@theme`. Menos config, misma potencia.

### Dark mode por defecto

La mayoría de developers tienen el sistema en dark mode. Evito el flash de light mode al cargar leyendo `localStorage` antes del primer render con un inline script en el `<head>`.

## Lo que salió mal

**Tailwind 4 con Astro 6 tiene algunas fricciones.** La configuración no es tan obvia como con Tailwind 3. Tardé un rato en hacer funcionar el `@theme` con las variables CSS para el dark/light mode.

**Las Content Collections con el nuevo Loader API cambiaron la sintaxis.** La documentación a veces muestra la API antigua. Si ves ejemplos con `defineCollection` sin `loader`, son para Astro 4 o anterior.

## Lo que repetiría

- El sistema de variables CSS para theming. Funciona muy bien.
- Componentes `.astro` puros para todo lo que no necesita interactividad.
- Un plan escrito antes de empezar a codear.

## El proceso real

No lo construí de una sentada. Fue en sesiones cortas, con parones de días. El truco fue tener un plan claro que pudiera retomar sin perder el hilo.

Este post es parte de ese proceso de documentar mientras construyo.
