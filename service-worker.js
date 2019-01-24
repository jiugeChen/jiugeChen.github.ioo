/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bc68bb7879e99a62998fdedcd8023bff"
  },
  {
    "url": "assets/css/0.styles.7e266b29.css",
    "revision": "c8991c11c6aa9d7393eb33834c8ce037"
  },
  {
    "url": "assets/img/my.b6dac963.jpg",
    "revision": "b6dac963d3eb7b7fbcc0712efc296281"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b2674951.js",
    "revision": "80853a031adb02e471c7a7575cfedcd3"
  },
  {
    "url": "assets/js/11.758a44cf.js",
    "revision": "e5a9300bd659ec0e9f1a0acb58b17a7a"
  },
  {
    "url": "assets/js/12.5dcab2f3.js",
    "revision": "39990e266ddc5ecf5ac4743ba6a71de0"
  },
  {
    "url": "assets/js/13.ccafcdd5.js",
    "revision": "deea1d846e2640be9281fd9669eb56a5"
  },
  {
    "url": "assets/js/14.6cf93aa0.js",
    "revision": "67bf0a6591091cf54ee1ee1b40ce08ab"
  },
  {
    "url": "assets/js/15.6529ffc1.js",
    "revision": "d6dd948263fc958a362c62fe6e92fc86"
  },
  {
    "url": "assets/js/16.53b0d5e6.js",
    "revision": "e05a2ff388abbb41429b18f48cf99baf"
  },
  {
    "url": "assets/js/2.7e7a9887.js",
    "revision": "bdea36a925383c16d73574b422b01cb5"
  },
  {
    "url": "assets/js/3.9e3b7d42.js",
    "revision": "57b139c564807840d9444a8f54dfa497"
  },
  {
    "url": "assets/js/4.34973d24.js",
    "revision": "7bbe7237ae20a6d5505ad485aed0b192"
  },
  {
    "url": "assets/js/5.530654b4.js",
    "revision": "374224f7c99201a431bc4b35627f706a"
  },
  {
    "url": "assets/js/6.55e263cd.js",
    "revision": "aa9e21c18ae4e185535668958ddacf07"
  },
  {
    "url": "assets/js/7.e9eba7f5.js",
    "revision": "db343e67022078b6504dd84d80d4f5d4"
  },
  {
    "url": "assets/js/8.bbfd0666.js",
    "revision": "9cf58ec4e6c7cf6ac4c9d448301f3b19"
  },
  {
    "url": "assets/js/9.452850de.js",
    "revision": "cb8e5ba03738fd9680108c384f5a691f"
  },
  {
    "url": "assets/js/app.806fd99b.js",
    "revision": "16242e3603fedc507f47569273eb3849"
  },
  {
    "url": "index.html",
    "revision": "118604a262d6e75b3a4935fd9e86655a"
  },
  {
    "url": "my.jpg",
    "revision": "b6dac963d3eb7b7fbcc0712efc296281"
  },
  {
    "url": "MyLife/index.html",
    "revision": "c4828ed7b6afabd23c408f87bb7360f2"
  },
  {
    "url": "MyLife/life.html",
    "revision": "f5be8e115ede1d305d04c1ad4ba23035"
  },
  {
    "url": "notes/be/php.html",
    "revision": "1e7598a073dadd940f00feb133f14e82"
  },
  {
    "url": "notes/fe/es6.html",
    "revision": "abf6dd054e0a91593f47d8d342d62e9f"
  },
  {
    "url": "notes/fe/index.html",
    "revision": "97e49d3d61e7de1d63405db795840358"
  },
  {
    "url": "notes/fe/js.html",
    "revision": "229133ea2fef652de65125a2c8188a47"
  },
  {
    "url": "notes/fe/mobile.html",
    "revision": "5efa54c3346d7b211f92cbd5246a606b"
  },
  {
    "url": "notes/fe/vue.html",
    "revision": "dd7759895db71d7764dcf7ba322c5c9b"
  },
  {
    "url": "notes/other/git.html",
    "revision": "8df9fd39e57b53fe7f34e0fb8c8a9c3f"
  },
  {
    "url": "notes/other/index.html",
    "revision": "4538a8c3082f17f7e6cee44f24f2667e"
  },
  {
    "url": "photo.jpg",
    "revision": "b6dac963d3eb7b7fbcc0712efc296281"
  },
  {
    "url": "README.1xxxxxxx.html",
    "revision": "adcc8c11432f99f15df1d35bda6f5fb0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
