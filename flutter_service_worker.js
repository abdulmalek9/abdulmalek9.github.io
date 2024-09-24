'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f51f07d3afb7b76eb5ea36fe49254e71",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "250cdb4d3afbc9d13560b43cee44ba5f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "813bf8dd6f5214d652e17174e2ce5c4f",
".git/logs/refs/heads/main": "9738444fa0c24d9d10b737e70d49547c",
".git/objects/03/9fe53114f77b01da041f64536c781cfac8796c": "7d7b9509c3dee98b7478f8c699fd7581",
".git/objects/0a/2ec2c24fbfa8e11645016e726aa891852806dd": "e4c2e23f8a6b485d2af38c31e9cfce46",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "f8f6b511803d1ec2105c6b98b1e575e4",
".git/objects/1c/90bc17180b03351607ff3a97caf4768afaa397": "d0767602b67dde86d12e56fe2bf7bf92",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "713ece98accf8e1918ac61ef3d102d03",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/21/8096434ccc776e2337d0a7d1da5424d3d3c2f2": "50cb2a9e07d6318227dbf262f8cc5aa8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/25/dfc0470c2edafdcf8a733a2645aa544e1bebd0": "c46850acdec90e8593ae2c58cf40ab90",
".git/objects/29/7d4fc5d7eb54203a56e189c18e2b9ef6dc6291": "ee40a730f5f70d7fbecb631cc718ee88",
".git/objects/2c/d3105fb73e2700e7beabfe721c9875b1088e25": "211d94c13ef1237ef5ca4e037c0d3137",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "67e9a2aebb12f11de5263029a66617c5",
".git/objects/35/5e4a8ce68723c5e16476c385762805b24439d2": "910c86c07ad62979d01c2c2b0796b12a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/42/2f224fd02800a34cbf9e3b72d312ea3162a954": "d62d496920f8a886146f1c45af368016",
".git/objects/49/87a0ff71b12a9677bdc23037553a67cfdeb369": "ec010eacbec43f3cc363d5ec32fe7658",
".git/objects/4a/61e8adcc66c204d37417b18824c630c50053cc": "5558a89c3c7459901c63eecb4dc878ab",
".git/objects/51/d570dfbbb195a0e2a92345bb21859e5e8ce62f": "af1f0f1c180b708c32bb8a1a06c203b9",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "f074d68db6a8d60f7a342d33a00bd1e5",
".git/objects/5c/a7312224ba9497ba7f895203029488545a6ec5": "fef2106d6c8127f97eea93d289c503ce",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "0b30f43422760406bff290ede5e4dee5",
".git/objects/68/8a670234b2ecd230b194af84b054ea25e2367b": "aa65e9ca0ad08a9f82592271f06e924a",
".git/objects/69/ed3ddcb2d4729dd2a531ccc02871c1e6906975": "9768520a93e99ab9386da33946a1d195",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "1c08d08ed1a5c8d90382c9cf10562547",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/7f/56cba41c9574053ac7650f43b3d3175ecf9a96": "fb29d4a897ac36240a0552c2d3fa3d59",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/84/cea42b0a98b68c86293b9f7ea122f107ea7ade": "91d462b4d532d3a3133b54004f35e957",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/da955bf9d6deaf38358357c1130b10ff2dccb0": "34305260d4d6623369e6bb0ea00534a3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/91/1a14eb43f9de0b6f76de85427bc4c8a316c413": "5e4274801c4ce039aac88e421cbbfddb",
".git/objects/93/fc8922a4430521fce41f95efb4f557ef28139f": "a4bef871801a2fe83af1811e36508c0e",
".git/objects/96/48e3185aa8347306cc369c878aa44165f77b08": "823a98fa8def4398bb06a7bdb949589b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/99/a9102de5bacaef94345c6d2fdf7811fc8c957c": "9a6bf78cde1fcf12dcc4c7f160371fcc",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "82e430c7914db0541e984f274d07421f",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "fd3f356e1f2a487fe56c676afaf8b4f2",
".git/objects/a5/823db0f8d31500e89773ee32a93fe5a945152f": "bd3b98348ecc864e113508e9580f54fe",
".git/objects/a9/5188256ef585cfd9d8bfd822068a78f30cc383": "948fddaa49d99f4d53d4f4949ce7c967",
".git/objects/aa/eaf769ab7884a4cd9810eb292ebd9fd6ded9b5": "8b5240132ad1baf326bdeeca893e823a",
".git/objects/b0/9e2aa7f80665f8ea341c9edd23208efc99b496": "505a90b1e594bdfd0bcd337e4f5d81fa",
".git/objects/b1/a0855bb4f2c8ec426961eae44d7a759263c653": "324fc8376e2797ebf5718c42d0b5be47",
".git/objects/b5/8b32defadb41c9e231561f3dd8d88d7d7b7d1c": "af4979dcfbd7bb9e4e169b3e7ed1cca6",
".git/objects/b6/9fe1d45842591d140a561802f871a7b86bbfb1": "a30eb50a30763af5ecf3c8dad0ba8de6",
".git/objects/b7/2db3c2ed831653de9488a6771a7089d535b014": "538167bbc6f44aca969495a363f8acd3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "335043d4459101b7d18e321be7579883",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bb/2cc0236d9201816886bc55991002bcdd2e3175": "65236d3b22076cb5f9c1a7b189e134d0",
".git/objects/c1/0bb39d85285db4171407948c213976e619e822": "74c8a58ab1560d4b27dff6dcb1ec55c6",
".git/objects/ca/3173e645df4438276931ecbfd66720d70b7c75": "a7f99d5959d3dc2267a9d3a9a16bf9f0",
".git/objects/cb/06e729a376d8a97b1daee1e61f92b56ec998b8": "99a00f68331c50d3ee2530deb7beca3d",
".git/objects/d1/5017ad71b6bad120f5cb711046dbde09fe0c6a": "c31218484a94003292cd765423ad4dd8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e0/d5987e3b23208013b8a92043d84e493ca570b9": "eafe0aeafd43e8af37c5d643a6a1704c",
".git/objects/e0/e9a7ca5497dbcbb7c5a71b97d8c310cf4158e9": "5c9dddcbce0ea7e99109b1d6c87ad926",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/1dc0a90ff286fe5454fd9aaae9bebc9e0749e4": "09e7b7dcb47a6fc811d3732f80c1fa99",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/50c3695333012fc321c38b767e2913a7649265": "4f6da3b15af70a70f25e51ffbd348050",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "f05cd6518ce8707c95991516f18e1588",
".git/objects/fa/11c0f845023bb7384f2816032c38820b9d8d01": "dcf514d57020a34de9e3cb514dc59a53",
".git/objects/fc/4534d81d027650c144d8181f180bfe91718612": "fedcbadce483e1121fa753af14d5fb7e",
".git/objects/fd/9633b1b8b261de708e5f246cd591c371c22641": "b88f5eca30d16d183ba5f8ea09272be7",
".git/objects/ff/524b0461a8eec6aaab3fbed31468947011558c": "13f66d6d55060e87d61bb28695459d31",
".git/refs/heads/main": "6d62b9d435f2f6fee2b412f782fa559f",
"assets/AssetManifest.bin": "9ee469cb716fd31429efc14b2b566a75",
"assets/AssetManifest.bin.json": "97b31d15cfa216807bb0a54410ac7e8e",
"assets/AssetManifest.json": "528978bb7d4c9c988c45efc1960b11b2",
"assets/assets/fonts/ReadexPro-Bold.ttf": "37da4efe33b3e774e7585dd4f285058b",
"assets/assets/fonts/ReadexPro-Regular.ttf": "7b7b051bc5a9e8afed7313e794550ab9",
"assets/assets/fonts/ReadexPro-SemiBold.ttf": "88de789da14c49cd8e33611dfeb0636e",
"assets/assets/images/ai-01.png": "fa931a46bc514c35116f1135faeff0cc",
"assets/assets/images/ai.png": "229097d2109aa63dd747b6f2204c759e",
"assets/assets/images/ai_icon-02.png": "dddd79cde67da3c9bb32bce1b92b5ff9",
"assets/assets/images/chat_app.png": "2d9e8d75a83e02f72737654dea1afece",
"assets/assets/images/dashboard.png": "7edb3d34d560743490cb121551ef453b",
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
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6c8728a9652395180875e2c807cf8db9",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "f6d481d1204341149d2a7575f5034d36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "76ee0e7376fee6b2e5c9b433f5a04574",
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
