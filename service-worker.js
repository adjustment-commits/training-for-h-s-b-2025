const CACHE_NAME = 'adjustment-lab-v2';

const urlsToCache = [
  './',
  './index.html',

  /* ---- 番外編 ---- */
  './extra/nutrition/index.html',
  './extra/recovery/index.html',
  './extra/thinking/index.html',
  './images/icon_growth_nutrition.png',
  './images/icon_recovery_lab.png',
  './images/icon_think_lab.png',

  /* ---- レッスン 00〜16 ---- */
  './lesson00/index.html',

  './players/lesson01/index.html',
  './players/lesson01/style.css',
  './players/lesson01/main.js',

  './players/lesson02/index.html',
  './players/lesson02/style.css',
  './players/lesson02/main.js',

  './players/lesson03/index.html',
  './players/lesson03/style.css',
  './players/lesson03/main.js',

  './players/lesson04/index.html',
  './players/lesson04/style.css',
  './players/lesson04/main.js',

  './players/lesson05/index.html',
  './players/lesson05/style.css',
  './players/lesson05/main.js',

  './players/lesson06/index.html',
  './players/lesson06/style.css',
  './players/lesson06/main.js',

  './players/lesson07/index.html',
  './players/lesson07/style.css',
  './players/lesson07/main.js',

  './players/lesson08/index.html',
  './players/lesson08/style.css',
  './players/lesson08/main.js',

  './players/lesson09/index.html',
  './players/lesson09/style.css',
  './players/lesson09/main.js',

  './players/lesson10/index.html',
  './players/lesson10/style.css',
  './players/lesson10/main.js',

  './players/lesson11/index.html',
  './players/lesson11/style.css',
  './players/lesson11/main.js',

  './players/lesson12/index.html',
  './players/lesson12/style.css',
  './players/lesson12/main.js',

  './players/lesson13/index.html',
  './players/lesson13/style.css',
  './players/lesson13/main.js',

  './players/lesson14/index.html',
  './players/lesson14/style.css',
  './players/lesson14/main.js',

  './players/lesson15/index.html',
  './players/lesson15/style.css',
  './players/lesson15/main.js',

  './players/lesson16/index.html',
  './players/lesson16/style.css',
  './players/lesson16/main.js',

  /* ---- コーチ専用 ---- */
  './coach/lesson01/index.html'
];

/* ===== INSTALL ===== */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

/* ===== FETCH ===== */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    ).catch(() =>
      caches.match('./index.html')
    )
  );
});

/* ===== ACTIVATE ===== */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.map(name => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      );
    })
  );
});
