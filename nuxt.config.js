
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: "Aclevo",
    meta: [
      { charset: 'utf-8' },
      { name: 'norton-safeweb-site-verification', content: '4do8zxxpkzxizmjswja194272-g4rfij0q2c0f6fxdr0xjgmfnzldkdjho4vvf961vok0qwm4flyfrwqrmyjkbmntsr12jyr4xj7s3fgo27erw4g1vcmial41b-f-j9d' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Aclevo is a community-orientated content-creation group created by Reasonably Selenium on November 2nd, 2015." },
      { name: "theme-color", content: "#2196F3" },
      // Twitter SEO
      { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
      { hid: 'twitter:site', name: 'twitter:site', content: "@AclevoReal" },
      { hid: 'twitter:creator', name: 'twitter:creator', content: "@AclevoReal" },
      { hid: 'twitter:title', name: 'twitter:title', content: "Aclevo Website" },
      { hid: 'twitter:description', name: 'twitter:description', content: "Aclevo is a community-orientated content-creation group created by Reasonably Selenium on November 2nd, 2015." },
      // OG SEO
      { hid: 'og:url', property: 'og:url', content: "https://aclevo.xyz/" },
      { hid: 'og:site_name', property: 'og:site_name', content: "Aclevo Website" },
      { hid: 'og:title', property: 'og:title', content: "Aclevo" },
      { hid: 'og:description', property: 'og:description', content: "Aclevo is a community-orientated content-creation group created by Reasonably Selenium on November 2nd, 2015." },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: "@/assets/scss/main.scss",
      lang: 'scss'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vue2-filters'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@/utils/sitemapRouteGenerator',
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },

  googleAnalytics: {
    id: 'UA-63265906-2'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://aclevo.xyz/',
    lastmod: "2021-05-30"
  },

  robots: {
    UserAgent: '*',
    Allow: "/",
    Sitemap: "https://aclevo.xyz/sitemap.xml"
  },



  pwa: {
    manifest: {
      name: "The Aclevo Website",
      short_name: "Aclevo",
      description: "Aclevo is a content-creation group made by Reasonably Selenium in 2015.",
      background_color: "#2196F3",
      theme_color: "#2196F3",

    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },

  generate: {
    fallback: true
  }
}
