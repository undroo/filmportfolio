'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8de787d9fa20a6aaf6a365d2d6d3a97e",
"assets/assets/images/1-positive.jpg": "bd6dd75a56badd94d298c02ea9b7bb27",
"assets/assets/images/11%2520(2)-positive.jpg": "8080ec8b5f39e215c34d6694af80b186",
"assets/assets/images/14-positive.jpg": "4fcba2ed0afb83934ab84b2ee187dedf",
"assets/assets/images/18-positive.jpg": "a8ddf6977e89d70ad49dc4a3614576d3",
"assets/assets/images/2-positive.jpg": "fd131a3b10b274111bc45f635246e0be",
"assets/assets/images/20-positive.jpg": "82a59b05a00853f30ffa0d4df4758b84",
"assets/assets/images/26-positive-2.jpg": "da2e281a752e91439b3d3da09e605c6e",
"assets/assets/images/26-positive-3.jpg": "a4f2d0180ad580779937a6b4d621a833",
"assets/assets/images/26-positive.jpg": "d8c778d1c119b6cb20b2670d39f027a1",
"assets/assets/images/27-positive.jpg": "08fe9728da0a12f6637587b91be849d6",
"assets/assets/images/28-positive.jpg": "d040076cca22d759592002bc5b728d3a",
"assets/assets/images/3-positive.JPG": "5bb074ab2380880b516353d3b90199d0",
"assets/assets/images/30-positive.jpg": "b51cc43a113c18588454ede4b2b2ee7e",
"assets/assets/images/31-positive.jpg": "075afea6990be4899cb8973efc63308a",
"assets/assets/images/34-positive.jpg": "dd47c304311e003500775380643985ff",
"assets/assets/images/35-positive.jpg": "ded2b5f4b258f167e97054ad7b81209f",
"assets/assets/images/37-positive.jpg": "29352931534b7ab85ca4fcaf09181fae",
"assets/assets/images/6-positive.jpg": "150c83888ff3ffecb3df124501d6d98f",
"assets/assets/images/7-positive.jpg": "cfc3f7dbb8c267bbf51f659fdf3f8167",
"assets/assets/images/8-positive.jpg": "e4b9b778afc71d6fce2e7cc693d2f120",
"assets/assets/images/9-positive.jpg": "955879fb45a59d2ef6d1df363dbc8208",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fbffd345865a8dc1381f0dbe5d3f406c",
"/": "fbffd345865a8dc1381f0dbe5d3f406c",
"main.dart.js": "d38f7c0cfd1dcbcf1a9bacdb9430add8",
"manifest.json": "19b07ef67043568a01fa44d0512da527",
"version.json": "4a312c948fe44af64b3c1f0bceec5e7c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
