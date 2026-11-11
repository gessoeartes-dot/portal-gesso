/* Recebe os avisos do Portal mesmo com o app fechado. */
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
importScripts('config.js');

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

firebase.initializeApp(self.FIREBASE_CONFIG);
firebase.messaging();   // mostra sozinho os avisos que chegam com o app fechado

/* Toque num aviso mostrado com o app aberto: traz o Portal para a frente. */
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var link = (e.notification.data && e.notification.data.link) || self.registration.scope;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (lista) {
    for (var i = 0; i < lista.length; i++) if (lista[i].url.indexOf(self.registration.scope) === 0) return lista[i].focus();
    return self.clients.openWindow(link);
  }));
});
