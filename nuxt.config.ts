// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["usebootstrap", "@nuxt/ui", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: "http://127.0.0.1:8000/api",
    },
  },
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
