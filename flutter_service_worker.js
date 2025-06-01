'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a0c4b5e29773d26e23e002bc7b736786",
".git/config": "fb88e0ea34141ed523f28c9e298923e5",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fbeaa9171fa04752cae7a19ec1682571",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71d57085ff309869e586aa4df0b32876",
".git/logs/refs/heads/main": "490200e8a2e437b7f8accd2ceb6e73c3",
".git/logs/refs/remotes/origin/main": "25bfebae3e33e54f8a26132500c94f7a",
".git/objects/09/56a6976ee894a36fc7813b48e647a79c4eb564": "b6ba6962c9f0a107e15487d230606c25",
".git/objects/0f/d4e1abe5fffe27141c11c81cb34cbfbe9cb263": "89f2c00966b278af4f2ec67302f7ecfe",
".git/objects/10/71b57d4b2c5c7e761e66606187b56d3aa2a708": "3ece5864d9ace7e49c81038b3b282823",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/11/befd8c944f2951f3a5595b122f3298c91c0499": "02979737730999d892a0f578b75c9a00",
".git/objects/11/cc96e484a04b503f7331e44a5412c53adbe9b9": "17f0c11f4a0db1460921829edfbdd361",
".git/objects/13/8a9f79a34ad4bb712eb7e4a615106c56dad8eb": "23bba260c4ff8d0c85d07edef75b3956",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/24/22cd50319ee3ef2995a929f63d7d1da39b8d69": "68f7160c8053f4e6a4fb62c983857120",
".git/objects/25/017df7156986c731f1ebd7bebaf5b211a2d376": "2ba572222ddb81f710b22b26763892eb",
".git/objects/27/06b1d2ea64721d1888d15fee2fcc98f0609570": "382994c56cd9e443be8021032348b964",
".git/objects/28/82ef58842dd6c4b0119b036d324e04f96e3861": "7927c696e2d2bb591b71cb31432d2df1",
".git/objects/2c/cd167896146b28ef70740f6ad5d6fb09d070f1": "27c6dcb3e7eced0b421dd533a5bd646e",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/2f/64cc07e53427dc00b3c0f7c4ec6d36d4eac363": "40d46e0bf5ef07862cb268c333497365",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/34/c97758bd79da38c28f8c6692d6eaa738500199": "f62579535f882c313215409fb1bf10f3",
".git/objects/37/de5ef4e7393f7ddc206c499bc6f235c3d72167": "9c90fb89e8420505304f80dda3f3f62d",
".git/objects/38/bcf0653295939694b6e1b8beb09e74f393860f": "8c6026ff9860092ff80cadd2a9ac3d6a",
".git/objects/3b/99814df78672249b10c39112f4d47643230e8e": "0b69144f65af8dd11c3bcaf73518e671",
".git/objects/3d/ff76ffc72a9ee4b8e1438d520a254e20a950c9": "59f532ee83626c4382e75f4eb74ce83a",
".git/objects/45/759b034c871fdb4e709c444ffccfe32b861f7f": "6083fd8143582776a43b017d0bcc77f6",
".git/objects/47/6b28f7766be34f5114bf2432a331c6be1d6eba": "676f08917c832abdcf0c549020bd5b91",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/53/7815fc1b845b3716a24d28d621f645c39ea959": "8c1cf75bf0e285df4d324877cedcfc80",
".git/objects/53/bd87414577af8980c07383fe158b14ca3e842e": "d8fc4426a7761932ee0ebba8eb773fed",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/65/bc68deadeb2c46323001f511ebe144a5c1ece4": "9d689411a94c8a14b08c5d6a8f6c40dc",
".git/objects/6b/331ca5e6a3df8d7baed88aa63a2b5915845ad1": "6dff86d4d5024e5dcf021c152f4054ce",
".git/objects/6b/bd3b7578d3e0b2f29bd68cb3a907e07657103b": "822af81a03d8811da4d2890b85ebc575",
".git/objects/6c/e07d794e517b869e3acb65119bdbed4d50f51c": "77e6cd64c6d381ef6054633e78a65b21",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/71/9a6c8143720c053b532d4319a20bec1cee14c0": "a498852cb638ac0ccdbf10f1a63b5cb7",
".git/objects/7c/5a631afa081dd15f68c764fcb547bab72aae47": "608d82187ed97d1c74262792c692bd50",
".git/objects/7d/d074d2c2c96f2f551fb8a757b6f7e3f5f0e46c": "fd969110512180c453f1471c0c8bcd56",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/2681fac20d09fb0d86a35ccdbabdfb1f62be8f": "132b0026c2d2f510cd5634fa5dcb6dfd",
".git/objects/91/66bbb34d1782107653b1f87cafea3d1fab857e": "3609892a4c0a0609aba7dd27d1ed58b7",
".git/objects/94/3e7ffa97c3c4a3d278719c93bf3db3dfb18840": "e41c0b7433f4db1ba46ca93099c20ea8",
".git/objects/99/e3004c7a5cda61aab298316f941ebf7af8011e": "7862117e2d40dbc665d5fdd1e9eac31d",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a0/ec727a7674e3f3aab423e6966078ae77318f84": "d95a9d8c05fa95c82b0ddc3ec1f17034",
".git/objects/a2/4f1362df5ccc3913364e38dc70c15602dd12ef": "d399f008caacdb43df8d5b47578831fb",
".git/objects/a6/551dd894ceecf54f0880589bd47b351724d2c0": "60caa804046e40d061f038871a886d05",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/ab/dd2d16aebee88fab53c2c1c1cfaa10a3cdbbe9": "2fd9ec0201b2de6019810473d9dc9aab",
".git/objects/ac/a473b1dd1f80086bbaf9344c7ad58e91e97306": "fd9e78ac4ef30ed26383a6b1ace5bb09",
".git/objects/ad/18725fe1e2960967fd1ff238b45e4c6928a94b": "a223f908864ad626d342db2ee9ad0322",
".git/objects/ad/561b2650b199ce6e0ea4bdebe943bc3ccb8cb5": "c0d4792ca83f9f00a93cb10dea45fdaa",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/8e2373b69535f4baf0fae5491b4ed208ad6200": "fabbaf28e582f1a887917d8da95ddad3",
".git/objects/bd/3a4f8f5b51ba94dd8df9a4d17b165682a056db": "2cf56d76f11916075cf9782ff94421d8",
".git/objects/c1/af4ab16985d46244a1fb329dc1c20e1ae05d6f": "83544fb803d301aec45144809d2b5ae7",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c4/ca581b0d1978dcd8a146b10d40b44f0ecf3884": "ed73425b3174796a71a38899bf5bcc73",
".git/objects/c9/4d40f3f6342971e5c363cd8a22fe3ad10f5d9b": "57c253a5ceee5c584b722f56f667f9c6",
".git/objects/c9/93e82216cd9b62f025c441fb65b7b7ccf2f96e": "9605e075088d634aafdfa3a6e73dda6c",
".git/objects/d0/3f14f3950efacb94b44fa8c928a3503fa591d9": "13efd80984ecf73bfb7334297eeef4d5",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/39d90fe138a2a7f4743a9d1bf2743baafdfb9c": "e3b90e9d4f31f5c13b9099c7d56ccf9a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/04815f15e9fa5811383d78f727827807464c1d": "7367998dec8e937919cc023e9bb2c169",
".git/objects/dc/01f0d0bee3d0e9da83525082f0ea901e5ea2c1": "36bc69ff614a1506a60cdb0190284953",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/5c2bd0e8b2284111895718c3980f37ece3892e": "2a060cb6cf447bbcb6d787e71eb28c5b",
".git/objects/e1/3f26ce5a95ada114f7ddcdd9dea94dab6fa23a": "cf4f2bcf1809e346f172378d35120392",
".git/objects/e2/791c11fce29643e11a168d19f0860062c7d3b0": "7aeecc34871c855213302f3ae0297b75",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e6/1bd59e8f335254f55fd989bf3b70d9f8bb3f54": "beccf0cf5c5311718d2cfc20ca4d15fb",
".git/objects/eb/72e955e079c2a2442c8f5462b7b7afd9801068": "a04946b707b10347d3da5960abbd0b07",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/0042d98376ea63ffb2aab92808882b697b82b6": "9413e73acf0d95ae2e9b92a9018a75d6",
".git/objects/f4/73c07cfb2818672ebc49798966e24fe8dd1b62": "08e474228c91bee65d2a3a9877acb8f3",
".git/objects/f7/dad1f759e33763cba63d6874ee4b858edf480f": "a18bcd44c10cbb0d767751a1ed0bd962",
".git/objects/fb/ea6f4228b95bb73d4ea0839ca1fee962fbd78d": "ce1456329c03d8b6f8d8da03edfa98fe",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fc/d99cbc22066c92d0245ce43a5b37eb8c1e073d": "289983eb3e05ce3dcffeca4c19deef41",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/39c71a96fa92bb8d0b854d0dff282d04a2c6b5": "4bde01fd64217439f64199c033353f48",
".git/objects/fe/77243fc7ae5f860243c768fc7bc659839988a5": "3b1c75299f25f48fcfed8983e7d8b1d4",
".git/refs/heads/main": "09e5fbae1bb6cab600048c4c55ce4449",
".git/refs/remotes/origin/main": "09e5fbae1bb6cab600048c4c55ce4449",
"assets/AssetManifest.bin": "a092bcfb738eebc94832d9c459ef96c5",
"assets/AssetManifest.bin.json": "67f80a1eee01f8d07c1fd8e272435c75",
"assets/AssetManifest.json": "c71080888ced5273e7db693cb8ffd9b8",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/icons/dart.png": "8059b04f9cd103d0ca52b8b34fc087ac",
"assets/assets/icons/figma.png": "1e078e19cb9523806fba9701a1999d2d",
"assets/assets/icons/flutter.png": "5e245ab72a51445fee57178048fe5725",
"assets/assets/icons/instagram.png": "0f406cdf860a25318ac3c9603d08f377",
"assets/assets/icons/linkedIn.png": "f9f7cc01127266b7421e34e94660ed17",
"assets/assets/icons/photo.png": "d2547505b3c513dcf44dc35d1ace6680",
"assets/assets/icons/xtwitter.png": "7a5b1b1074ad7aaf1d96ee06ff2328ce",
"assets/assets/icons/youtube.png": "a2b0a4b8436bd9a4484baa1411274c5e",
"assets/assets/images/bento.png": "bd34b7e364fd4c4ea3f01d2d4d4e9f5a",
"assets/assets/images/fazil.jpg": "39bb78a1687b9cf4036f827e8338c0bc",
"assets/assets/images/fazil2.jpg": "53e62a3b785fa9880bd72c852420d3b7",
"assets/assets/images/fazil3.jpg": "25c11f5ba8f6a7fd069632c69d0401fe",
"assets/assets/images/instagram1.jpg": "c5c6add767b72f0bdabd525b8cc6dd7c",
"assets/assets/images/isselo_desk_moc.png": "d6dc1e803f994a96eccfcd6674b9fc57",
"assets/assets/images/isselo_moc.png": "599386ac0de019773da1532c4e640db0",
"assets/assets/images/isselo_multi.png": "d680f7cf96b8d662c74993bb19bfe51a",
"assets/assets/images/linkedIn1.png": "af7f20ca6ac799794033ca45b0044e18",
"assets/assets/images/linkedIn2.png": "fb45478cad757f99a4200e7efc39b133",
"assets/assets/images/linkedIn3.png": "6440bed3d0e50279361f7272591baafe",
"assets/assets/images/linkedIn4.png": "d86885aff28a74f228463c7ae6681f28",
"assets/assets/images/linkedIn5.png": "c2c895be310b6dc8d2c29d283ecc0f25",
"assets/assets/lottie/email.json": "f77521ac094c7b28ca55bb6fade8d5d4",
"assets/assets/lottie/resume.json": "6313ca64269b96dc5b8fac96e61dd41c",
"assets/assets/sounds/tap1.mp3": "7f90c47fcc5f15e0c0e94b3bfb6467f7",
"assets/assets/sounds/tap2.mp3": "34b8b49f1df903b073250aa39a3f79d5",
"assets/assets/sounds/tick.mp3": "3b26715a3a2e8d70c37681ed1d59caa2",
"assets/FontManifest.json": "b829150d82be8a43ba32803cea234afe",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "3b4a8185394227e696f2de3ff8f2860b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2e7d324f3a8f7435c853381cbcdc2732",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ae8897f1f71d43b4ebb5201c9e8d512",
"/": "3ae8897f1f71d43b4ebb5201c9e8d512",
"main.dart.js": "1e5ed694271285aecc2e4b701f18ccfa",
"manifest.json": "b17b21382441e6e02597db2a2e3a6474",
"version.json": "4dc17598192116d9e17a9ca99bd7c4f7"};
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
