import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Caching the listed asset below
const assetsToCache = [
  './',
  './icons/dinner-xnimrodx-72x72.png',
  './icons/dinner-xnimrodx-96x96.png',
  './icons/dinner-xnimrodx-128x128.png',
  './icons/dinner-xnimrodx-144x144.png',
  './icons/dinner-xnimrodx-152x152.png',
  './icons/dinner-xnimrodx-192x192.png',
  './icons/dinner-xnimrodx-384x384.png',
  './icons/dinner-xnimrodx-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
