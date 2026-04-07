// content.config.ts — Content Layer API (Astro 5+).
// En Astro 5/6 se introdujo el nuevo sistema de "loaders" que permite
// cargar contenido desde cualquier fuente (archivos, APIs, bases de datos...).
// El loader `glob` es el más común: busca archivos por patrón en el disco.
// Docs: https://docs.astro.build/en/guides/content-collections/#defining-the-collection-loader

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // glob() busca archivos que coincidan con el patrón y los carga como entries.
  // Cada archivo JSON en la carpeta se convierte en un entry con su nombre como id.
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

// La colección blog usa glob para archivos .md.
// z.coerce.date() convierte automáticamente el string del frontmatter a un objeto Date.
// draft: true = borrador (no se publica). Por defecto false, así los posts se publican salvo que lo indiques.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
