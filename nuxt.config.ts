import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  components: [
    // Only register .vue files as components, so co-located .ts files
    // (types, barrels, data) are not picked up as components.
    { path: '~/components', extensions: ['.vue'] },
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    // Pre-bundle deps Vite otherwise discovers at runtime (avoids a dev page reload).
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@lucide/vue',
        'gsap',
      ],
    },
  },
})
