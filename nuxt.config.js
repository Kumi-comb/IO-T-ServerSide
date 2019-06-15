const meta = {
  title: 'I/O-T',
  description: 'I/O-T Module Control App',
  themeColor: '#ff8800'
}

export default {
  mode: 'spa',
  srcDir: './view',

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
      },
      { name: 'theme-color', content: meta.themeColor }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/scss/reset.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

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
  },

  meta: {
    mobileAppIOS: true,
    name: meta.title,
    description: meta.description,
    theme_color: meta.themeColor,
    lang: 'ja'
  },

  manifest: {
    name: meta.title,
    short_name: meta.title,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    description: meta.description,
    lang: 'ja'
  },

  serverMiddleware: ['~~/api']
}
