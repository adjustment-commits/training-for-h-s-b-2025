const CACHE_NAME = 'adjustment-lab-v1';
const urlsToCache = [
  './',
  './index.html',
  './extra/nutrition/index.html',
  './extra/recovery/index.html',
  './extra/thinking/index.html',
  './images/icon_growth_nutrition.png',
  './images/icon_recovery_lab.png',
  './images/icon_think_lab.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(function() {
      return caches.match('./index.html');
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(name) {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});
