self.addEventListener("install", event => {
  var urlsToCache = [
    "/",
    //If in production - must update with latest build
    "/static/js/main.9b3b27dd.js",
    "/static/css/main.cc27d12e.css",
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