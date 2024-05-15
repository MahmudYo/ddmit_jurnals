// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["usebootstrap", "@nuxt/ui"],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/css/main.css",
  ],
  devtools: { enabled: true },
});
