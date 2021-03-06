// Plugins https://developers.google.com/web/tools/workbox/guides/using-plugins

const success = new workbox.cacheableResponse.Plugin({
  statuses: [0, 200]
})

const expire1y = new workbox.expiration.Plugin({
  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
})

// Styles

workbox.routing.registerRoute(
  new RegExp(".+fonts.googleapis.com.*"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "google-styles"
  })
)

// Fonts

workbox.routing.registerRoute(
  new RegExp(".+fonts.gstatic.com.*"),
  workbox.strategies.cacheFirst({
    cacheName: "google-fonts",
    plugins: [success, expire1y]
  })
)

workbox.routing.registerRoute(
  new RegExp("/fonts.*"),
  workbox.strategies.cacheFirst({
    cacheName: "local-fonts",
    plugins: [success, expire1y]
  })
)

// Contentful

workbox.routing.registerRoute(
  new RegExp(".+cdn.contentful.com.*"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "contentful-cdn"
  })
)

workbox.routing.registerRoute(
  new RegExp(".+preview.contentful.com.*"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "contentful-preview"
  })
)
