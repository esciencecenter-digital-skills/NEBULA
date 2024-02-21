// https://nuxt.com/docs/api/configuration/nuxt-config
import { publicProps } from './config.json'
import tailwindTypography from '@tailwindcss/typography'


export default defineNuxtConfig({
  runtimeConfig: { 
    public: publicProps, 
    }
  ,

  devtools: { enabled: true,
              pages: true },
  modules: [
    'nuxt-content-assets', // should be loaded before the content module!
    '@nuxt/content',
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
