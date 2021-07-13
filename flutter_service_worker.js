'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "60cafc1c257617acb54bd309771b3ae6",
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
".git/index": "16075887c703e7e3b1bf2e8f29866965",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0130b444874952fa8b4ba4b899939a71",
".git/logs/refs/heads/master": "0130b444874952fa8b4ba4b899939a71",
".git/logs/refs/remotes/origin/master": "c50e56bb34613cdc291164b18b4aa02f",
".git/objects/03/f89abb388285e58ba41349b03decda5de52d4b": "88733aff2bf089ba59b39fc7d963443f",
".git/objects/0c/8d5e3f44ffefeef40b95483c2783dee1a4df0c": "fcd9476a06bf369cf996ee62b11518e6",
".git/objects/11/59a7e4c722ed2db32b24cb47a4f8e177a0c484": "1f30b49faaa8222eb4017275a62a8639",
".git/objects/17/7f8005d3701633d7a4dfbbe20dc5fb62c318c3": "9de7a8aa128253bd37b2c87aa67a8f1e",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/2b/3e02769ef2a748a05503f83dd36dc1c087c38b": "795477bb621171971215a695595de99b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/ba3ed976a2cd3507bb90bae37fe9c319d88565": "6ee76a6ffa6b73091e03d9517a036b09",
".git/objects/38/ba3be440f4c42092feb462db4b89435a8ef097": "2344317f5f7f619ec71783adf76de7e1",
".git/objects/3a/7ae1bf52cb9983a391f9cc9f81eca2690353a9": "5e5737b8d04584236aacde05cdff9eca",
".git/objects/3b/b88f6bd32a238a3e50ec68aea3ca89e850b427": "c3446f04331f34de905354fd72cd4733",
".git/objects/3d/f44ff1d3bdfd8c85d321d669adc2cae4942371": "664c126f6a953079b829bca74c90b333",
".git/objects/40/fb9b67e4cd1f5e298fffc3104034650286c6ec": "78057552b8a0dde3d80caded9da795e7",
".git/objects/43/35b12587864c4e06635c08e08e8e4f3161a2f3": "6edb7d08a66b21642f9ebe165acfb644",
".git/objects/43/4ce674a1b91609b1fabf22ed261a69406463ec": "d9518b288551634399aeb9d8c59988c5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/9b663e847e74a309ca42c5576d2f932b0f6947": "96a8024c3d7c41af28b871e15fd17411",
".git/objects/53/9641cd5258f450fe3d7e53bd509f44fda66bfe": "1bfb90a51d2886f8090f353aa5cb962b",
".git/objects/55/745008280570f81830620c94891a17c421f8ac": "520c06ebc8c337a68134c8a85c275efa",
".git/objects/56/bd39be920644e8b5f216370cdd75032c4fa924": "031bc694eb2cfc801a3bc46abbda5c51",
".git/objects/59/2301fdcfe19f40b46a0c9d3554d7118a2f0089": "8082d931786322a4aa95fa5f8d2f942c",
".git/objects/5f/04f555aaf4f8ef3e9febbc972907e2dad04ebe": "eeaaf9b9d0ec7b7823cdfb217bad8d86",
".git/objects/63/aef65b267b7cc02358ceba32b101a7262ca249": "aaf529f6726ad4b5e1502ce863542bf7",
".git/objects/65/4a87ab50ae1d5fefdaa6a5e7177e152d5967f7": "75da8a7d909838999e49da25051ff5dc",
".git/objects/67/211cc44eecab42804c07de7b22f0bf371bd4aa": "8ca085ea1909a43d4b99103c6f57fd36",
".git/objects/67/5f0ca9bfb06cacf1d462751a22872edabcad6f": "1bfa27a98fcf93c4b78166bab7a3b031",
".git/objects/69/98772dfc939615284cde0d092aff8b62f5dced": "7ad416944b30362b4db73b324867e0c2",
".git/objects/6a/bf1797f59ece24e26deb245708129f97e02468": "624d8f03416aedfe7fab000b85f189a9",
".git/objects/6b/69f2d204202276fe274066a8af8db6023309cf": "d053a01784d5593e2401f58e405cc152",
".git/objects/6c/cb7e8646ebc2842dc8dbf5ff66fff2eed5c7b7": "43fbf6fc99e5bebb3d12961094aa52e6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ef166bc87875be0e4b83ef4114a3d0a0e6acf6": "af5d722051c58a832c3b20510ce137b6",
".git/objects/80/19bfe034ebf249b037e607a56d8817f07a6fa1": "f5f9906f59cb943a22ae0339a4fb6a42",
".git/objects/84/d7ebba2a56ec042718820f3298a625600d636d": "71a9d2f82c522ddfda2630625aa37b1d",
".git/objects/85/33ebb5d2729cf2abd7e022a4e1bf064716c93d": "c281f9ab6c9af4566d4d75e08df794f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cb4c98ee1eb8c0551c335107f0825d431220db": "eaed1d50e64358376ab9d888ffabd1be",
".git/objects/95/8edd1061c13567ddd4be80e6a44d8104ba7776": "34184bf758c1aa03f577c2dd81385b63",
".git/objects/9a/2fb52f6bebfd6543346c10cf42e44785c0eec3": "0cd065253497edbb866081888bfafa94",
".git/objects/9a/a4ce420ae2d28e7a8f348dea1ef153f3b94973": "f151d6916c16e7078404d211fd68bb1b",
".git/objects/9c/5ed446e2a8a2cf3f8185d1f2ffad36171396af": "9db88bc82d545e061a37d81e6690da6b",
".git/objects/9c/b08b69bf886262c8380d0da2220e9bdb6af71d": "84a3a98b106b3c1647e7ddf6629f0e5a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/a80d3e5c106e58a660d6449ec90ce011619d3f": "e950646e3504f7971899b1ca11e5d53c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/3877573e8ecffe0eee31ae42f5995414bf4a3e": "b221b9f4c48f20a11f0c7ebfc6546f6c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/48461e7bbaedaa555c46fae57923020393d411": "c746b04ba5d7f6a57f427ab707755e43",
".git/objects/ab/90b3a2868fa4523aadc558fc40d95dfd29076b": "5a8e0b9129b09b8b95b6d7d8d77b5d73",
".git/objects/b4/13556f1f322b62fd6b05bbc74c6b6dc6f0ac2c": "77b9a889911bb51aca85f79aa7ffb41d",
".git/objects/b7/086d65b94db8443587a7f19b3671ed906c20ad": "e0559c34736a9b87bfbfe0b151e5d839",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/687686ff2e105c2f1834eada57498bf4073c27": "81668841e93698b48d2edae759895d75",
".git/objects/bc/ab48af62546c24f15d17d1a36dc43eda2554ee": "379fcd3ecf92ed047f0acfe4067ec0a5",
".git/objects/c9/c774785d93ee395e46424e8909320fdefa192a": "d3be4a2425226939aaa7dea988a8eb26",
".git/objects/cd/9d5db21719d4c834aa068a47c93b53bb2300f8": "0f609096ad55857abd1514f043573fb3",
".git/objects/ce/2b8f257b67bcd75a915b0394b63a664470e516": "133be78a8d9c7e61e168698df0d2193e",
".git/objects/cf/d665c1e461f77be7822fb1171a5c61bbc36e44": "023b84b884ee20fa30a14482d72929ef",
".git/objects/d5/1f55ba0f3b2ec511d6df03b369c7c1902d1464": "30f60a628d124d97d9a2389186bbe953",
".git/objects/d6/20014ba45b08a5b21e3c16a59a57b7b57bd399": "878235ab2dfa4258ea4c756e85192ac8",
".git/objects/d6/f423697a850dd033ff6dcebc36825388b5f358": "c25170f37fc13a7e2ea5111f21e4d838",
".git/objects/dd/fbf601b6d6f7a98335eb624247bea9fc715b30": "b2b85aa07c65918c645c1d547b1dc98b",
".git/objects/df/da3bdb4e34fa53ccfa58c76499c3010f64cef1": "a48bd282d092703c6afd1b868df61702",
".git/objects/e1/97f2374e0b3ae7ba41ca81999cac07abc3ae6b": "6fc8fa53a308205e260329905bb462e3",
".git/objects/e3/599da1cf9db71e018575a3f8dc8dd69149a1a1": "f7cd3b4118a0f65c81ba12468e5417bc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c038670eb4100b588f3decdc4c9ee075204ea2": "e27761b3c2ce12200f3efe7dbbf57908",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/ab50eb32a69476d4ff5d6e6945740078a112a0": "f96d7b94d71670197c9fe1c6d76bae35",
".git/objects/e9/22f6d38678643cf6eb15fbc249b5227567ce95": "0b09c4dda2d3d5961c7c15fa7e30ad19",
".git/objects/f0/1983aaef2fd8ce1189e5be8db9b3ddef0c5379": "423b348f48bdcd1cf83a49e0f0d02641",
".git/objects/f1/c502d6ceecd5f5210f5f43a8c9781f10bc806e": "271a2c797dc445a4c1c6d3455bed8abf",
".git/objects/f3/a1af0e22c4be21fb34175a60a9a55ce6a21f64": "b4f9baf8a416b77bce6b7d6be9ca6e9c",
".git/objects/f6/9bee348f0d83579a6ea1ca8506a5e5530dd3a8": "0f2ae4727a9c521af82bc5875793bd12",
".git/objects/f8/e0581fe35747d185f83e5182a306762ca496eb": "9a58da8caa38b8c1b3e91f67d8b53a79",
".git/objects/f9/1f9f57eac879dbc4f1fa1334ec762df8ad6c2c": "f24a696d121786e2b36994caf9656869",
".git/objects/fd/87e37e896246f41ddad903af5312ba88a77ee1": "f1cdef8a2cef3beadbe94816e0468e6c",
".git/refs/heads/master": "2bf28859cb47a218314255f3e40be4a3",
".git/refs/remotes/origin/master": "2bf28859cb47a218314255f3e40be4a3",
"assets/AssetManifest.json": "46ad243fe28b4fdfc0216965291bf08a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1-positive.jpg": "bd6dd75a56badd94d298c02ea9b7bb27",
"assets/images/11%2520(2)-positive.jpg": "8080ec8b5f39e215c34d6694af80b186",
"assets/images/14-positive.jpg": "4fcba2ed0afb83934ab84b2ee187dedf",
"assets/images/18-positive.jpg": "a8ddf6977e89d70ad49dc4a3614576d3",
"assets/images/19-positive.JPG": "5db0e565e9d3000cce4a6d3c16fe185c",
"assets/images/2-positive.jpg": "fd131a3b10b274111bc45f635246e0be",
"assets/images/20-positive.jpg": "82a59b05a00853f30ffa0d4df4758b84",
"assets/images/21-positive.JPG": "b8945d0727759461d2959ae19a891cfd",
"assets/images/22-positive.JPG": "d816b00b2209fc1263f3b6759d7eab17",
"assets/images/26-positive-2.jpg": "da2e281a752e91439b3d3da09e605c6e",
"assets/images/26-positive-3.jpg": "a4f2d0180ad580779937a6b4d621a833",
"assets/images/26-positive.jpg": "d8c778d1c119b6cb20b2670d39f027a1",
"assets/images/27-positive.jpg": "08fe9728da0a12f6637587b91be849d6",
"assets/images/28-positive.jpg": "d040076cca22d759592002bc5b728d3a",
"assets/images/3-positive.JPG": "5bb074ab2380880b516353d3b90199d0",
"assets/images/30-positive.jpg": "b51cc43a113c18588454ede4b2b2ee7e",
"assets/images/31-positive.jpg": "075afea6990be4899cb8973efc63308a",
"assets/images/34-positive.jpg": "dd47c304311e003500775380643985ff",
"assets/images/35-positive.jpg": "ded2b5f4b258f167e97054ad7b81209f",
"assets/images/37-positive.jpg": "29352931534b7ab85ca4fcaf09181fae",
"assets/images/6-positive.jpg": "150c83888ff3ffecb3df124501d6d98f",
"assets/images/7-positive.jpg": "cfc3f7dbb8c267bbf51f659fdf3f8167",
"assets/images/8-positive.jpg": "e4b9b778afc71d6fce2e7cc693d2f120",
"assets/images/9-positive.jpg": "955879fb45a59d2ef6d1df363dbc8208",
"assets/images/Compressed/City-Vibes/1.jpg": "ba7753565e2f65030f39f41cb776bb5d",
"assets/images/Compressed/City-Vibes/2.jpg": "b5bc64239aa0681c5b0093e3a7c15d21",
"assets/images/Compressed/City-Vibes/3.jpg": "df6b67f1c4806d431ed62946d6fee853",
"assets/images/Compressed/City-Vibes/4.jpg": "58888ebbdd870e9a5e53f69345d5f47c",
"assets/images/Compressed/City-Vibes/5.jpg": "371622832987ddda64188982920a238b",
"assets/images/Compressed/Everything-Else/1.jpg": "589128d937f5e162a8cfdfef6c4c9fa8",
"assets/images/Compressed/Everything-Else/2.jpg": "3687e5c54061a1b2c6993e78d971aa0c",
"assets/images/Compressed/Everything-Else/3.jpg": "ff7dfb3330be05cc99863c9eefc81e76",
"assets/images/Compressed/Everything-Else/4.jpg": "2047899900c109450d5f664c50eb30ae",
"assets/images/Compressed/Everything-Else/5.jpg": "b5db2ee46e2241213e79fa4143d5567f",
"assets/images/Compressed/People/1.jpg": "dd8bf88d04be4259f56e5db64e607f4c",
"assets/images/Compressed/People/2.jpg": "d1c12dc68a3061a6e49e8ac928a335bc",
"assets/images/Compressed/People/26.jpg": "58b313698fd1ffaa4926d3b84d6030f9",
"assets/images/Compressed/People/29.jpg": "dbf44d816464ae3db4343b4f493b0372",
"assets/images/Compressed/People/32.jpg": "587ab8011433bb7947f17e8efffe9633",
"assets/images/Compressed/People/35.jpg": "a8ceae4c6593e5edc60c8efc210d3194",
"assets/images/Compressed/People/6.jpg": "346fe5e9cd1158805de6d8b5d6a7f1db",
"assets/images/Compressed/People/8.jpg": "97c0b493d1284090b78563c192c819b5",
"assets/images/Compressed/People/9.jpg": "c6a392a55b332353f4a929e72d0d0d83",
"assets/NOTICES": "8c5328bdb475fb7f2fea39f61f5bceac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "280a31852b53c5f7d868bc994ea1537f",
"/": "280a31852b53c5f7d868bc994ea1537f",
"main.dart.js": "5790b9d439f9a2e42dbdc2f499cc9943",
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
