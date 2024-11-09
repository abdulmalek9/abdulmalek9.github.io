'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a323598c4dd4b5fb95edbf6c6f1c36db",
"assets/AssetManifest.bin.json": "9c5ecf6966f5e3524b240b94131cb3fb",
"assets/AssetManifest.json": "bc8282696ea403d52ded846b6aa1b897",
"assets/assets/fonts/ReadexPro-Bold.ttf": "37da4efe33b3e774e7585dd4f285058b",
"assets/assets/fonts/ReadexPro-Regular.ttf": "7b7b051bc5a9e8afed7313e794550ab9",
"assets/assets/fonts/ReadexPro-SemiBold.ttf": "88de789da14c49cd8e33611dfeb0636e",
"assets/assets/images/ai-01.png": "fa931a46bc514c35116f1135faeff0cc",
"assets/assets/images/ai.png": "229097d2109aa63dd747b6f2204c759e",
"assets/assets/images/ai_icon-02.png": "dddd79cde67da3c9bb32bce1b92b5ff9",
"assets/assets/images/chat_app.png": "2d9e8d75a83e02f72737654dea1afece",
"assets/assets/images/dashboard.png": "7edb3d34d560743490cb121551ef453b",
"assets/assets/images/dentacity.png": "b0e3456e18a46b4afde6250bf53b8baf",
"assets/assets/images/emale_icon.png": "2d536722ac59f880f7c667b271252047",
"assets/assets/images/facebook_icon.png": "bad76f4e5ee5a671c941c3b8bc05f7aa",
"assets/assets/images/githup_icon.png": "451f2d7f5ea1c066fcf309c4fb6a911d",
"assets/assets/images/instagrame_icon.png": "3b6abbb90bcc9df827e3255b27992617",
"assets/assets/images/linkedin_icon.png": "ff27848b80046e514d41b1cc4f15e9b1",
"assets/assets/images/my_logo-04-white.png": "64d09bcca7c9f4098f82601078e08712",
"assets/assets/images/my_logo-04.png": "598d31de57f590d7b1eafc38cb758352",
"assets/assets/images/my_pic.png": "3d08d9a46574607266650c73a2ea979c",
"assets/assets/images/my_picture.png": "f992acd0740efa1d19b3d5e51f3ba4e1",
"assets/assets/images/news_app.png": "ce08a68a53267b446ec04d503d05fbd8",
"assets/assets/images/notes_app.png": "73fcf37246b19fe779628b9fd3bd7bd9",
"assets/assets/images/programing_screen.png": "1efd58e90e6d2b2a5368ca339a1e16be",
"assets/assets/images/waether_app.png": "51be4767a621f5ba6e5db222cfadd195",
"assets/assets/images/wanees_app.png": "ca960872ddce9109bfee0fd12f8124ca",
"assets/assets/logos/logo-01.png": "12215d00e49d177da92456c556c12862",
"assets/assets/logos/logo-02.png": "8815ef89ee88696286fc28578c8d33ab",
"assets/assets/logos/logo-03.png": "514b8a2a0d3c507c4e6acf2f3fdf8ead",
"assets/assets/logos/logo-04.png": "5325b3351dd8aec90acf17e809d83efe",
"assets/assets/logos/logo-05.png": "67e25fcdab2a8636e280ba2dee073509",
"assets/assets/logos/logo-06.png": "1f22eb0415d453c378e25577b27bb25c",
"assets/assets/logos/logo-07.png": "001b11579195981f7f1601edbde95a58",
"assets/FontManifest.json": "8427f08d4df121aefe2f9cd8209c41e0",
"assets/fonts/MaterialIcons-Regular.otf": "0836ab1ba04adfb65eb111fc4486c40d",
"assets/NOTICES": "ee0132f0dd9956920837289b41bd1c91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "6c8728a9652395180875e2c807cf8db9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "dac5727b0d0f0f905e8a725264c8de0c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "6fd50ac400f88e96a709b2f229a252c3",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "13cd5c616615c2ef43c718b09e331165"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
