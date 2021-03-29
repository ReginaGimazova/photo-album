require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  /*
   ** For get SSR app (not SPA)
   * modern: 'client' property contributes to create 2 bundles:
   * for browsers supported ES6 Modules syntax and Legacy bundle transpiled with Babel
   */

  mode: 'universal',
  ...(!isDev && {
    modern: 'client',
  }),
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0', // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '~static/favicon.ico' }],
  },
  rootDir: __dirname,

  serverMiddleware: [],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css', '~assets/scss/global-styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-tippy'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/nuxt-trailingslash-module
    'nuxt-trailingslash-module',
    // Doc: https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    '@nuxtjs/svg',
  ],
  styleResources: {
    scss: ['~assets/scss/*.scss'],
  },
  render: {
    ...(!isDev && {
      http2: {
        push: true,
        pushAssets: (req, res, publicPath, preloadFiles) =>
          preloadFiles.map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
      },
    }),
    compressor: false,
    resourceHints: false,
    etag: false,
    static: {
      etag: false,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  auth: {
    redirect: {
      home: false
    },
    strategies: {
      google: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: process.env.GOOGLE_REDIRECT_URL,
        scope: ['profile', 'email', process.env.GOOGLE_PHOTO_API_URL, process.env.GOOGLE_USER_API_URL],
        response_type: 'token',
        grant_type: 'authorization_code',
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
