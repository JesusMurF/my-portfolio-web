// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  // Shiki es el motor de syntax highlighting que Astro usa por defecto para bloques de código.
  // Con "themes" (plural) activamos el modo dual: Shiki genera variables CSS --shiki-light-*
  // y --shiki-dark-* en lugar de colores fijos, y nosotros decidimos cuál aplicar en el CSS
  // según el data-theme activo.
  // Docs: https://docs.astro.build/en/guides/syntax-highlighting/#dual-themes
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});