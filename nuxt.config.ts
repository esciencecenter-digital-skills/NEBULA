// https://nuxt.com/docs/api/configuration/nuxt-config
import { myConfig } from './config.json'

export default defineNuxtConfig({
  runtimeConfig: { 
    public: myConfig, 
    }
  ,

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
  generate: {
      nojekyll: true,
      fallback: '404.html'
  },
  ssr: true,
  target: "static",

})
