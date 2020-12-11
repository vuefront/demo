require('dotenv').config()
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

export default {
  env: {
    FEATURED_PRODUCT: process.env.FEATURED_PRODUCT
  },
  generate: {
    concurrency: 5,
    subFolders: false
  },
  head: {
    title: 'vuefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VueFront' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ],
    script: []
  },
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'vuefront-nuxt',
    'cookie-universal-nuxt'
  ],
  build: {
    babel: {
      plugins: ['lodash', 'preval']
    },
    // extractCSS: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false
        }
      },
      plugins: {
        'tailwindcss': {}
      }
    },
    plugins: [
      new LodashModuleReplacementPlugin({
        shorthands: true
      })
    ]
  }
}
