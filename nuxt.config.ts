// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true,
              pages: true },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  app: {
    baseURL: '/NEBULA/'
  },
  generate:{
      nojekyll: true,
      fallback: '404.html'
  },
  ssr: true,
  target: "static"
})
