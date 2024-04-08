// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
import { publicProps } from '/home/runner/work/NEBULA/NEBULA/content_config/config.json'

const config_path = process.env.CONFIG_PATH;
console.log("This path is not being used, but should be used to import dynamically:", config_path);
// let publicProps = null;

// import(config_path)
//   .then((config) => {
//     // Module is imported successfully
//     console.log("print config", config);
//     publicProps = config["publicProps"];
//   })
//   .catch((error) => {
//     // Handle any errors that occurred during import
//     console.error('Error importing module:', error);
//   });

console.log("print publicprops", publicProps)

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
    documentDriven: true,
    sources: {
      github: {
        prefix: '/', // Prefix for routes used to query contents
        driver: 'github', // Driver used to fetch contents (view unstorage documentation)
        repo: `${publicProps.repoOwner}/${publicProps.repoName}`,
        branch: `${publicProps.repoTag}`,
        dir: "/", // Directory where contents are located. It could be a subdirectory of the repository.
    // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
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

  // https://nuxt.com/docs/api/configuration/nuxt-config
  postcss: {
    css: ['./layouts/'],
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
