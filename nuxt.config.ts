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
    '@nuxtjs/tailwindcss',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true
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

  // https://nuxt.com/docs/api/configuration/nuxt-config
  postcss: {
    css: ['./layouts/style.scss'],
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  hooks: {
    close: () => {
      // @see https://github.com/nuxt/cli/issues/169#issuecomment-1729300497
      // Workaround for https://github.com/nuxt/cli/issues/169
      process.exit(0)
    }
  },
})
