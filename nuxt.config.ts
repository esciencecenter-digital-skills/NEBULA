// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
import { publicProps } from '../content_config/config.json'

export default defineNuxtConfig({
  runtimeConfig: {
    public: publicProps,
  }
  ,

  devtools: {
    enabled: true,
    pages: true
  },
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
    documentDriven: true,

    markdown: {
      remarkPlugins: [
        'remark-directive'
      ]
    },

    sources: {
      local_fs: {
        prefix: `/`, 
        driver: `fs`,
        base: `../${publicProps.repoName}`, 
      }
    }
  },
  app: {
    baseURL: `/${publicProps.repoName}/`
  },
  generate: {
    nojekyll: true,
    fallback: '404.html'
  },
  ssr: true,
  target: "static",

  css: ['~/layouts/style.scss'],

  // https://nuxt.com/docs/api/configuration/nuxt-config
  postcss: {
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
