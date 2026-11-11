/*
 * Chaves do Firebase (projeto "portal-da-gesso"). Não são secretas: o Google fez para elas ficarem no site.
 * A chave secreta (arquivo .json da conta de serviço) fica SÓ no Apps Script, nunca aqui.
 *
 * FIREBASE_CONFIG: o bloco firebaseConfig de Configurações do projeto > Geral > Seus apps.
 * VAPID_KEY: Configurações do projeto > Cloud Messaging > Certificados push da Web.
 */
self.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAeKUO_9jjtIQigvpXZS5hThZnZDSUKClg',
  authDomain: 'portal-da-gesso.firebaseapp.com',
  projectId: 'portal-da-gesso',
  storageBucket: 'portal-da-gesso.firebasestorage.app',
  messagingSenderId: '607681194734',
  appId: '1:607681194734:web:aa7c05257880b1de7621ff'
};
self.VAPID_KEY = 'BL2c4R1OAUEHU9kP6YMVWHLe2P9z8DCK0EOxhfGoJR_Dl7S7HQxXFVbtaPK3PSSmrMFPzTrohd2TngmnSUJXWIo';
