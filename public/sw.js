self.addEventListener("install", event => {
  console.log("Service Worker instalado");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/public/font.otf'
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker activado");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


caches.open("pwa-assets")
.then(cache => {
  cache.add("styles.css"); // it stores only one resource
  cache.addAll(["styles.css", "app.js"]); // it stores two resources
});
