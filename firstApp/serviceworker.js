var cacheName = 'myfirstpwa2';
var filesToCache = [
  './',
  './index.html',
  './styles.css',
  './offline.html'
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] caching app');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
   event.waitUntil(
     caches.keys()
       .then(function(cacheNames) {
         console.log('[ServiceWorker] Activate cacheNames = ' + cacheNames);
          return Promise.all(
            cacheNames.map(function(cName) {
              if (cName !== cacheName){
                 console.log('[ServiceWorker] Activate delete cName = ' + cName);
                 return caches.delete(cName);
              }
            })
         );
     })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    // try cache
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          console.log('[ServiceWorker] Fetch Cache: ' + response.url);
          return response;
        }
        console.log('[ServiceWorker] Fetch Request: ' + event.request.url);
        return fetch(event.request);
      }).catch(function() { 
        console.log("both fail, show a generic fallback");
        return caches.match('./offline.html');
      })
  );
});