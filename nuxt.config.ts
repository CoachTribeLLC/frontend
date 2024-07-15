// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "nuxt-vue3-google-signin"],
  css: [
    '@/assets/css/main.css',
  ],
  googleSignIn: {
    clientId: 'CLIENT ID OBTAINED FROM GOOGLE API CONSOLE',
  },
  app: {
    baseURL: process.env.BASE_URL || '/',
  }
})