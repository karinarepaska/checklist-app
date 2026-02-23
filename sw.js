const CACHE = "checklist-v1";
const ASSETS = [
  "/checklist-app/",
  "/checklist-app/index.html",
  "/checklist-app/manifest.json",
  "/checklist-app/icon-192.png",
  "/checklist-app/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
