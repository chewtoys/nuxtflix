import generate from "./nuxt.generate"
import hooks from "./nuxt.hooks"

const LANG = "en"
const NAME = "Nuxtflix"
const DESCRIPTION = "Nuxt + Netlify + Contentful = Awesome"
const KEYWORDS = ["nuxt", "netlify", "contentful"]

export default {
  // Server https://nuxtjs.org/api/configuration-server
  server: {
    host: "0.0.0.0",
    port: "5000"
  },
  // Meta https://pwa.nuxtjs.org/modules/meta
  meta: {
    lang: LANG,
    name: NAME,
    description: DESCRIPTION,
    mobileAppIOS: true,
    ogHost: "https://nuxtflix.com/",
    ogImage: "og.png",
    twitterSite: "@wagerfield",
    twitterCard: "summary"
  },
  // Manifest https://developer.mozilla.org/docs/web/manifest
  manifest: {
    name: NAME,
    short_name: NAME,
    theme_color: "#17171a", // Browser chrome colour
    background_color: "#ffffff", // Splash screen background colour
    description: DESCRIPTION
  },
  // Workbox https://pwa.nuxtjs.org/modules/workbox
  workbox: {
    cachingExtensions: "sw/caching.js",
    routingExtensions: "sw/routing.js"
  },
  // Head https://nuxtjs.org/api/configuration-head
  head: {
    htmlAttrs: {
      lang: LANG
    },
    meta: [{
      hid: "keywords",
      name: "keywords",
      content: KEYWORDS.join(",")
    }]
  },
  // Router https://nuxtjs.org/api/configuration-router
  router: {
    linkActiveClass: "link-active",
    linkExactActiveClass: "link-active-exact"
  },
  // Loading https://nuxtjs.org/api/configuration-loading
  loading: {
    color: "#4c92d9" // Blue
  },
  // Modules https://nuxtjs.org/guide/modules
  modules: [
    "nuxt-svg-loader",
    "@nuxtjs/style-resources",
    "@nuxtjs/pwa"
  ],
  // Plugins https://nuxtjs.org/guide/plugins
  plugins: [{
    src: "plugins/components",
    ssr: true
  }, {
    src: "plugins/static",
    ssr: true
  }, {
    src: "plugins/install",
    ssr: true
  }, {
    src: "plugins/offline",
    ssr: false
  }, {
    src: "plugins/outline",
    ssr: false
  }],
  // Styles https://nuxtjs.org/api/configuration-css
  css: [
    "normalize.css",
    "styles/index.scss"
  ],
  // Style Resources https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      "styles/mixins.scss",
      "styles/theme.scss"
    ]
  },
  // Messages https://git.io/fpy8U
  messages: {
    back_to_home: "Home",
    error_404: "Page not found"
  },
  // Build
  srcDir: "src",
  generate,
  hooks
}
