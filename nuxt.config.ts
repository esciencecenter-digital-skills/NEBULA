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
  generate:{
      nojekyll: true,
      fallback: '404.html'
  },
  ssr: false,
  target: "static"
})
