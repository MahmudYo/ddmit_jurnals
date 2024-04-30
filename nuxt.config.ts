// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'usebootstrap',
    ],
    css: [
      'bootstrap/dist/css/bootstrap.css' ,
      '@/assets/css/main.css'
    ],
  devtools: { enabled: true },
})
