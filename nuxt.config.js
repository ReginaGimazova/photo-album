const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  /*
   ** For get SSR app (not SPA)
   * modern: 'client' property contributes to create 2 bundles:
   * for browsers supported ES6 Modules syntax and Legacy bundle transpiled with Babel
   */

  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './static/favicon.ico' }]
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
  css: ['normalize.css', './assets/scss/global-styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
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
    '@nuxtjs/svg'
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  render: {
    ...(!isDev && {
      http2: {
        push: true,
        pushAssets: (req, res, publicPath, preloadFiles) =>
          preloadFiles.map(
            (f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`
          )
      }
    }),
    compressor: false,
    resourceHints: false,
    etag: false,
    static: {
      etag: false
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
