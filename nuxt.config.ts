// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography';
import dotenv from 'dotenv';
import fs from 'fs'

dotenv.config();
console.log(`Checking for content specified by CONTENT_PATH: `, process.env.CONTENT_PATH)

if(!process.env.CONTENT_PATH) {
  throw new Error(`
    Required environment variable CONTENT_PATH is not set.\n
    In bash, use e.g. export CONTENT_PATH=/path/to/content/dir to set this\n\n
    The content directory should have the same structure as shown in:\n
    https://github.com/esciencecenter-digital-skills/NEBULA-content-template
  `)
}

var publicProps = JSON.parse(fs.readFileSync(`${process.env.CONTENT_PATH}/config.json`, 'utf-8')).publicProps
console.log(`config file title =`, publicProps.title)
console.log(`baseURL =`, publicProps.baseURL)
if("BASE_URL" in process.env) {
  publicProps.baseURL = process.env.BASE_URL
  console.log(`baseURL updated to =`, publicProps.baseURL)
}

export default defineNuxtConfig({
  runtimeConfig: {
    public: publicProps,
  },

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
        base: `${process.env.CONTENT_PATH}`
      }
    }
  },

  app: {
    baseURL: `/${publicProps.baseURL}`
  },

  generate: {
    nojekyll: true,
    fallback: '404.html'
  },

  ssr: true,
  target: "static",
  css: ['~/assets/style.scss'],

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

  compatibilityDate: '2024-09-04'
})
