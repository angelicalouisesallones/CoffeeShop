'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"assets/AssetManifest.bin": "46935558d325cbbab7a244663e6b71e6",
"assets/AssetManifest.bin.json": "462763e01b740b80d2f8fe7859bb0acd",
"assets/AssetManifest.json": "d5b0936b2344d73f7fbce3bea433bffc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "432a926545165cb26f56e3809e5378a6",
"assets/lib/images/black.png": "a88cd993bb42db7a449bd093039af19e",
"assets/lib/images/expresso.png": "99ce989b01d8c80208409c8f3c139a78",
"assets/lib/images/iced_coffee.png": "eb6d79dad6408e90de22a9cfb617cfc5",
"assets/lib/images/latte1.png": "c7ac878e1cb52f0fdd426e75afd09aac",
"assets/NOTICES": "7c2f925fce9f2d727b585b1f3f85d713",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CoffeeShop/.git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
"CoffeeShop/.git/config": "6c8da9efe38f7e8b468327c8c82b15f6",
"CoffeeShop/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"CoffeeShop/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"CoffeeShop/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"CoffeeShop/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"CoffeeShop/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"CoffeeShop/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"CoffeeShop/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"CoffeeShop/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"CoffeeShop/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"CoffeeShop/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"CoffeeShop/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"CoffeeShop/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"CoffeeShop/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"CoffeeShop/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"CoffeeShop/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"CoffeeShop/.git/index": "a58daec9e038d89a5a77cf4dc6c95753",
"CoffeeShop/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"CoffeeShop/.git/logs/HEAD": "8c9669c90189eed4bd62da0ea939d3b1",
"CoffeeShop/.git/logs/refs/heads/main": "146dedc920f35f273a84e64051231de0",
"CoffeeShop/.git/logs/refs/remotes/origin/main": "516f377502d327895c3114bf0d3dcb73",
"CoffeeShop/.git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
"CoffeeShop/.git/objects/12/c752e9178bec96afa502b8609335d610c46990": "77d2d52a186e7533de2fe8fe5ed97113",
"CoffeeShop/.git/objects/32/6a79a049d419c8b06b2138f1c06707ca46a9f5": "9393114e140f95f04207a3e08a829d3c",
"CoffeeShop/.git/objects/35/2c53d07c0dda42ca2b9fd998a2d730fc78f47f": "ecf1c9c91a2b319eff25b6ffffada0bf",
"CoffeeShop/.git/objects/36/36df79e95de64795e31bd8db1d62edd57da2d0": "e18de6db10419b25740ea3638eaf2ffd",
"CoffeeShop/.git/objects/3b/f4c4829a560d1e86a7d9cb635f4a69a6462497": "2a74846f231e7d8a1200fd1063e3a383",
"CoffeeShop/.git/objects/3c/ba033100b81cf23d5727bca5f1d17257560afd": "025e1a334209c8636262660b78a86280",
"CoffeeShop/.git/objects/3d/e4ac87714f9415db44963558e7c4cd11c64656": "560e96b64a50e192924e5d6715d16caf",
"CoffeeShop/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"CoffeeShop/.git/objects/4e/3f9c9c7073c291fd8a04b1d9fb78d88c9edf2f": "7ccda7c3a7b169bb3f9af6be36eb577d",
"CoffeeShop/.git/objects/51/49780a5fc4720e0a5f4a4061e0f9def5cea280": "6197f4672e3523e7b9c4dd6832c10ef9",
"CoffeeShop/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"CoffeeShop/.git/objects/68/abfa5f068450e72151991aa2a92c4eb0adbab6": "7db084ee1e01b85854f07177d6f28211",
"CoffeeShop/.git/objects/6b/8543aaec6323384ad73a16f3e9b3a2f229e30c": "fb8354997b80c5df54c75c5b98284bdf",
"CoffeeShop/.git/objects/71/f6de0b9285c7ab122e9960816c87ae9720cab4": "82c27fedd0c578529f358dd9df6e9ec3",
"CoffeeShop/.git/objects/72/70ef32b016996459352bd42fbc96f001eb0af7": "0fc7bb1e85b3fea340b4c93ef8b48cb6",
"CoffeeShop/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"CoffeeShop/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"CoffeeShop/.git/objects/a6/4347aa6aa653e9d0b95e8e57d7380aa695730d": "1eddafb1279241f85dd04f02779b2ded",
"CoffeeShop/.git/objects/ad/940493aecdda5312d9fe720859b5a2d3df0cc9": "cc390f841354d3a36405cebc68aaa559",
"CoffeeShop/.git/objects/b3/f93bee4aefcaee2eb4905a4b634cd00d84a7c4": "4d159e59cab06e890eeb402321bd064f",
"CoffeeShop/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"CoffeeShop/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"CoffeeShop/.git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
"CoffeeShop/.git/objects/bb/50fba22a0094a281c7ee291072dfb6b2cc6e8e": "50b9e571f9378d594b5e004d2a3a1782",
"CoffeeShop/.git/objects/c7/728c8f122c7ad399c2187244507457c9aa2692": "d8592a32689fe91cf45e2eae8c1539e1",
"CoffeeShop/.git/objects/d2/1da2bd55120e4700eced472e628615033e14bb": "0c3ed481247740d3c6146bc841d25d12",
"CoffeeShop/.git/objects/d2/6202837efcc47e47bd2732b114d490d3ffd716": "4e8dc70379930511f5a19849f7f53c20",
"CoffeeShop/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"CoffeeShop/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"CoffeeShop/.git/objects/d8/ad3aa1caf04ad83894994a1c0433dae75df207": "7d1bffe072dfc1b46e449847a858c4f4",
"CoffeeShop/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"CoffeeShop/.git/objects/df/afa7078f3a86bcd019d31c485c7ecdcdf04df1": "4098101b9ea0561a8a122d40ecb4cdbb",
"CoffeeShop/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"CoffeeShop/.git/objects/eb/3dff326c3860188b1f91e62b14b51efc079e2d": "5d814a1b571b023276cceb7bbf398413",
"CoffeeShop/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"CoffeeShop/.git/refs/heads/main": "e4f1ba5326496493ec1b6cb1081921b8",
"CoffeeShop/.git/refs/remotes/origin/main": "e4f1ba5326496493ec1b6cb1081921b8",
"CoffeeShop/assets/AssetManifest.bin": "46935558d325cbbab7a244663e6b71e6",
"CoffeeShop/assets/AssetManifest.bin.json": "462763e01b740b80d2f8fe7859bb0acd",
"CoffeeShop/assets/AssetManifest.json": "d5b0936b2344d73f7fbce3bea433bffc",
"CoffeeShop/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"CoffeeShop/assets/fonts/MaterialIcons-Regular.otf": "432a926545165cb26f56e3809e5378a6",
"CoffeeShop/assets/lib/images/black.png": "a88cd993bb42db7a449bd093039af19e",
"CoffeeShop/assets/lib/images/expresso.png": "99ce989b01d8c80208409c8f3c139a78",
"CoffeeShop/assets/lib/images/iced_coffee.png": "eb6d79dad6408e90de22a9cfb617cfc5",
"CoffeeShop/assets/lib/images/latte1.png": "c7ac878e1cb52f0fdd426e75afd09aac",
"CoffeeShop/assets/NOTICES": "7c2f925fce9f2d727b585b1f3f85d713",
"CoffeeShop/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"CoffeeShop/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"CoffeeShop/canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"CoffeeShop/canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"CoffeeShop/canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"CoffeeShop/canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"CoffeeShop/canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"CoffeeShop/canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"CoffeeShop/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CoffeeShop/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"CoffeeShop/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"CoffeeShop/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"CoffeeShop/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"CoffeeShop/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"CoffeeShop/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"CoffeeShop/index.html": "8fc69aa28d826a65058befef0bfbace4",
"/": "60f02dc0143c789f3961ec6351f889c8",
"CoffeeShop/main.dart.js": "818b037a9f5493b3dabe7688d143aeb2",
"CoffeeShop/manifest.json": "e5b14e0b82fc16cb53f908de32df3f5a",
"CoffeeShop/version.json": "b6e349f40e4ab08a7e4a15abe677f8c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "60f02dc0143c789f3961ec6351f889c8",
"main.dart.js": "818b037a9f5493b3dabe7688d143aeb2",
"manifest.json": "e5b14e0b82fc16cb53f908de32df3f5a",
"version.json": "b6e349f40e4ab08a7e4a15abe677f8c5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
