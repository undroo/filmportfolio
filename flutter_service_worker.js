'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9df221a0514a10399bf83463e3797beb",
".git/config": "fd29df6f30de0d6b0eba04bdab030842",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "620bfd278ab129c60bb4828c80c019fc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "852e41b3a67305f5c64c1905c58f5256",
".git/logs/refs/heads/master": "852e41b3a67305f5c64c1905c58f5256",
".git/logs/refs/remotes/origin/master": "cd1252023e366c6a59899edc3ace7070",
".git/objects/11/59a7e4c722ed2db32b24cb47a4f8e177a0c484": "1f30b49faaa8222eb4017275a62a8639",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/ba3be440f4c42092feb462db4b89435a8ef097": "2344317f5f7f619ec71783adf76de7e1",
".git/objects/3b/b88f6bd32a238a3e50ec68aea3ca89e850b427": "c3446f04331f34de905354fd72cd4733",
".git/objects/3d/f44ff1d3bdfd8c85d321d669adc2cae4942371": "664c126f6a953079b829bca74c90b333",
".git/objects/40/fb9b67e4cd1f5e298fffc3104034650286c6ec": "78057552b8a0dde3d80caded9da795e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/9b663e847e74a309ca42c5576d2f932b0f6947": "96a8024c3d7c41af28b871e15fd17411",
".git/objects/53/9641cd5258f450fe3d7e53bd509f44fda66bfe": "1bfb90a51d2886f8090f353aa5cb962b",
".git/objects/63/aef65b267b7cc02358ceba32b101a7262ca249": "aaf529f6726ad4b5e1502ce863542bf7",
".git/objects/65/4a87ab50ae1d5fefdaa6a5e7177e152d5967f7": "75da8a7d909838999e49da25051ff5dc",
".git/objects/69/98772dfc939615284cde0d092aff8b62f5dced": "7ad416944b30362b4db73b324867e0c2",
".git/objects/6a/bf1797f59ece24e26deb245708129f97e02468": "624d8f03416aedfe7fab000b85f189a9",
".git/objects/6b/69f2d204202276fe274066a8af8db6023309cf": "d053a01784d5593e2401f58e405cc152",
".git/objects/6c/cb7e8646ebc2842dc8dbf5ff66fff2eed5c7b7": "43fbf6fc99e5bebb3d12961094aa52e6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ef166bc87875be0e4b83ef4114a3d0a0e6acf6": "af5d722051c58a832c3b20510ce137b6",
".git/objects/85/33ebb5d2729cf2abd7e022a4e1bf064716c93d": "c281f9ab6c9af4566d4d75e08df794f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cb4c98ee1eb8c0551c335107f0825d431220db": "eaed1d50e64358376ab9d888ffabd1be",
".git/objects/95/8edd1061c13567ddd4be80e6a44d8104ba7776": "34184bf758c1aa03f577c2dd81385b63",
".git/objects/9a/2fb52f6bebfd6543346c10cf42e44785c0eec3": "0cd065253497edbb866081888bfafa94",
".git/objects/9a/a4ce420ae2d28e7a8f348dea1ef153f3b94973": "f151d6916c16e7078404d211fd68bb1b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/48461e7bbaedaa555c46fae57923020393d411": "c746b04ba5d7f6a57f427ab707755e43",
".git/objects/b4/13556f1f322b62fd6b05bbc74c6b6dc6f0ac2c": "77b9a889911bb51aca85f79aa7ffb41d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/687686ff2e105c2f1834eada57498bf4073c27": "81668841e93698b48d2edae759895d75",
".git/objects/cf/d665c1e461f77be7822fb1171a5c61bbc36e44": "023b84b884ee20fa30a14482d72929ef",
".git/objects/d5/1f55ba0f3b2ec511d6df03b369c7c1902d1464": "30f60a628d124d97d9a2389186bbe953",
".git/objects/d6/f423697a850dd033ff6dcebc36825388b5f358": "c25170f37fc13a7e2ea5111f21e4d838",
".git/objects/dd/fbf601b6d6f7a98335eb624247bea9fc715b30": "b2b85aa07c65918c645c1d547b1dc98b",
".git/objects/e3/599da1cf9db71e018575a3f8dc8dd69149a1a1": "f7cd3b4118a0f65c81ba12468e5417bc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/22f6d38678643cf6eb15fbc249b5227567ce95": "0b09c4dda2d3d5961c7c15fa7e30ad19",
".git/objects/f1/c502d6ceecd5f5210f5f43a8c9781f10bc806e": "271a2c797dc445a4c1c6d3455bed8abf",
".git/objects/f3/a1af0e22c4be21fb34175a60a9a55ce6a21f64": "b4f9baf8a416b77bce6b7d6be9ca6e9c",
".git/objects/f8/e0581fe35747d185f83e5182a306762ca496eb": "9a58da8caa38b8c1b3e91f67d8b53a79",
".git/objects/f9/1f9f57eac879dbc4f1fa1334ec762df8ad6c2c": "f24a696d121786e2b36994caf9656869",
".git/refs/heads/master": "4215151c5417478f13d4b57ee793fe11",
".git/refs/remotes/origin/master": "4215151c5417478f13d4b57ee793fe11",
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
"index.html": "d0560f148d21b5a8f780738450b063b8",
"/": "d0560f148d21b5a8f780738450b063b8",
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
