self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('shank-calc-store').then((cache) => {
      return cache.addAll(['shank-calculator.html', 'manifest.json']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});