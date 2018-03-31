self.addEventListener("install", event => {
  var urlsToCache = [
    "/",
    //If in production - must update with latest build
    "/static/js/main.2f7b3d96.js",
    "/static/css/main.cdafd870.css",
    "/images/logo.svg",
    "/index.html" 
  ]

  event.waitUntil(
    caches.open("variadic-v7").then(cache => {
      return cache.addAll(urlsToCache);
    })
  )
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.delete("variadic-v6")
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      if(res) return res;
      return fetch(event.request);
    })
  );
});