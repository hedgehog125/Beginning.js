let toCache = ["bagel.js","/","assets/imgs/bagel.png","assets/imgs/icons/128x128.png","assets/imgs/icons/144x144.png","assets/imgs/icons/152x152.png","assets/imgs/icons/192x192.png","assets/imgs/icons/256x256.png","assets/imgs/icons/512x512.png","manifest.json"];self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open("Bagel.js Bagel").then(cache=>cache.addAll(toCache)))});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(response=>response||fetch(e.request)))});
