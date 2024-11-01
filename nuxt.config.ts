// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: "https://crazy-gauss.89-253-237-222.plesk.page/api",
    },
  },
  css: ["bootstrap-icons/font/bootstrap-icons.css", "@/assets/css/main.css"],
  devtools: { enabled: false },
});
