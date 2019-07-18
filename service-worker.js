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
    "revision": "570c0f746460369f171e4db73d6600c2"
  },
  {
    "url": "adv_bg.jpg",
    "revision": "ad2f1725407aeec1ae9c5c00ff9b1e47"
  },
  {
    "url": "assets/css/0.styles.9ea33017.css",
    "revision": "c37f78b9d61ae976b33700857d94f1c7"
  },
  {
    "url": "assets/img/adv_bg.ad2f1725.jpg",
    "revision": "ad2f1725407aeec1ae9c5c00ff9b1e47"
  },
  {
    "url": "assets/img/photo.b6dac963.jpg",
    "revision": "b6dac963d3eb7b7fbcc0712efc296281"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tuli.f08d339d.jpg",
    "revision": "f08d339d6b5aa3124430ba051c4b8101"
  },
  {
    "url": "assets/js/10.d9cf219a.js",
    "revision": "193d5a368f937e08a580719b4fc1811b"
  },
  {
    "url": "assets/js/11.05ee1d29.js",
    "revision": "daf39ab5c674dd7a4b6c0ec9d91e3684"
  },
  {
    "url": "assets/js/12.3ae0a13a.js",
    "revision": "d40ea9cf7ce762c4b4a3ba231cd9a5e0"
  },
  {
    "url": "assets/js/13.c72d8840.js",
    "revision": "8ba13b575a1b6ae198ec2e81980b577a"
  },
  {
    "url": "assets/js/14.f79e526f.js",
    "revision": "406024eb1b5aff4c0e8506d130111c21"
  },
  {
    "url": "assets/js/15.cabe1383.js",
    "revision": "49d7530c1d6e1f4515c5e849a871d555"
  },
  {
    "url": "assets/js/16.539c97a7.js",
    "revision": "3bbc10a0900bfecb347a87721768018d"
  },
  {
    "url": "assets/js/17.5f4db0de.js",
    "revision": "6db58baae1c44797d7a132d60d6a86bc"
  },
  {
    "url": "assets/js/18.0227b4a4.js",
    "revision": "45775be9630990f1e61a6b7dbc8b972c"
  },
  {
    "url": "assets/js/2.f7136dce.js",
    "revision": "73e0cfadcf591bad2521204b8de6166c"
  },
  {
    "url": "assets/js/3.4e72543d.js",
    "revision": "aeceb2fb1ffdc48d16de3868cf629e91"
  },
  {
    "url": "assets/js/4.023dda9d.js",
    "revision": "c0f330fbb049cb99dd679464d0155da3"
  },
  {
    "url": "assets/js/5.2cd2d04c.js",
    "revision": "f670f697816363bb7bcc66a0674bee89"
  },
  {
    "url": "assets/js/6.a88ef98f.js",
    "revision": "bb7c0f98b7fa51ee521cffcb504fc1b6"
  },
  {
    "url": "assets/js/7.c5a5ec86.js",
    "revision": "f139fc3f48d49ab4c186b3a0bf238094"
  },
  {
    "url": "assets/js/8.9eac7bd6.js",
    "revision": "af26859e261cfdd6b280010520ea68b0"
  },
  {
    "url": "assets/js/9.17877069.js",
    "revision": "076e8edf85bd3a1fed542c12b6147b6c"
  },
  {
    "url": "assets/js/app.8e4024e1.js",
    "revision": "328275ad15ebd33cdeec09dc6de6312f"
  },
  {
    "url": "index.html",
    "revision": "779092cda6e888101d7b25d7a1990b0e"
  },
  {
    "url": "MyLife/index.html",
    "revision": "1937befe58db568e0751521dcc5020b5"
  },
  {
    "url": "MyLife/life.html",
    "revision": "4c69d8fd60c8a5efb1f0c634db988629"
  },
  {
    "url": "notes/be/node.html",
    "revision": "1b3dfaf4e81076927cdf6c60513f1195"
  },
  {
    "url": "notes/be/php.html",
    "revision": "dbac03f367b14f5476733ba5d04961ea"
  },
  {
    "url": "notes/fe/data.html",
    "revision": "5f995dace5e80cf44d284fca91e38dd8"
  },
  {
    "url": "notes/fe/es6.html",
    "revision": "552aed4608661df131da62bfe3d0ae6e"
  },
  {
    "url": "notes/fe/index.html",
    "revision": "56c12dbb3741b2810253099e5041e9d7"
  },
  {
    "url": "notes/fe/js.html",
    "revision": "1da6db3ec4a624365b8ded860302e2e8"
  },
  {
    "url": "notes/fe/mobile.html",
    "revision": "a2c5c438746352bde8dbbfde3b4a619c"
  },
  {
    "url": "notes/fe/vue.html",
    "revision": "44af7d18e21386286c2d6e5595f3ab8b"
  },
  {
    "url": "notes/other/git.html",
    "revision": "42706f8726097140df328a7b939b1669"
  },
  {
    "url": "notes/other/index.html",
    "revision": "178809f82b212f31d8035388238d0208"
  },
  {
    "url": "photo.jpg",
    "revision": "b6dac963d3eb7b7fbcc0712efc296281"
  },
  {
    "url": "README.1xxxxxxx.html",
    "revision": "55c419d6a7e3ba1a1765accd3b5659d7"
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
