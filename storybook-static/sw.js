if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let r = Promise.resolve()
      return (
        s[e] ||
          (r = new Promise(async (r) => {
            if ('document' in self) {
              const s = document.createElement('script')
              ;(s.src = e), document.head.appendChild(s), (s.onload = r)
            } else importScripts(e), r()
          })),
        r.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`)
          return s[e]
        })
      )
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then((e) => s(1 === e.length ? e[0] : e))
    },
    s = { require: Promise.resolve(r) }
  self.define = (r, i, n) => {
    s[r] ||
      (s[r] = Promise.resolve().then(() => {
        let s = {}
        const t = { uri: location.origin + r.slice(1) }
        return Promise.all(
          i.map((r) => {
            switch (r) {
              case 'exports':
                return s
              case 'module':
                return t
              default:
                return e(r)
            }
          })
        ).then((e) => {
          const r = n(...e)
          return s.default || (s.default = r), s
        })
      }))
  }
}
define('./sw.js', ['./workbox-8778d57b'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/X_cFFfrIe73A252YrhWi6/_buildManifest.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/X_cFFfrIe73A252YrhWi6/_ssgManifest.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/X_cFFfrIe73A252YrhWi6/pages/_app.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/X_cFFfrIe73A252YrhWi6/pages/_error.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/X_cFFfrIe73A252YrhWi6/pages/index.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url:
            '/_next/static/chunks/1a2786d5f5708760212a6e9e5e17707fca460ce7.1f79f84f61646b9fae85.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url:
            '/_next/static/chunks/7e3f0c2344bae2c8d3a8eef57ef3aa016520c786.004d1a80a7115aaede0c.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/chunks/framework.c6faae2799416a6da8e8.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/runtime/main-3dc7533e136d1544d3e6.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/runtime/polyfills-b4159d6a0c257fa8becc.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        {
          url: '/_next/static/runtime/webpack-c212667a5f965e81e004.js',
          revision: 'X_cFFfrIe73A252YrhWi6'
        },
        { url: '/favicon.ico', revision: '21b739d43fcb9bbb83d8541fe4fe88fa' },
        {
          url: '/images/download.jpg',
          revision: '34744f94d0454092c733787bf8dc61f0'
        },
        {
          url: '/images/foto.png',
          revision: '79b127f76a3d3363d04f90913bd9f25f'
        },
        {
          url: '/images/home.svg',
          revision: '569e8718e1d1244cee61ab3dcd7f229d'
        },
        { url: '/manifest.json', revision: '7d28c79077c11defdb9bbd33ab3533e8' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    )
})
