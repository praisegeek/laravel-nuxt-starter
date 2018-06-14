module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  plugins: [
    './plugins/mixins/user.js',
    './plugins/mixins/validation.js',
    './plugins/axios.js'
  ],

  axios: {
    baseURL: 'http://vmc.test/api/v1'
  },

  auth: {
    endpoints: {
      login: {
        url: 'login', method: 'post', propertyName: 'meta.token'
      },
      user: {
        url: 'me', method: 'get', propertyName: 'data'
      },
      logout: {
        url: 'logout', method: 'post'
      },
    },
    // strategies: {
    //   local: {
    //     endpoints: {
    //       login: {
    //         url: 'login', method: 'post', propertyName: 'meta.token'
    //       },
    //       user: {
    //         url: 'me', method: 'get', propertyName: 'data'
    //       },
    //       logout: {
    //         url: 'logout', method: 'post'
    //       },
    //     }
    //   }
    // },
    redirect: {
      login: '/auth/signin',
      home: '/'
    },
  },

  toast: {
    position: 'top-right'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
