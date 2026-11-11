/*
 * Chaves do Firebase (projeto "portal-gesso"). Não são secretas: o Google fez para elas ficarem no site.
 * A chave secreta (arquivo .json da conta de serviço) fica SÓ no Apps Script, nunca aqui.
 *
 * FIREBASE_CONFIG: o bloco firebaseConfig de Configurações do projeto > Geral > Seus apps.
 * VAPID_KEY: Configurações do projeto > Cloud Messaging > Certificados push da Web.
 */
self.FIREBASE_CONFIG = {
  apiKey: 'COLE_AQUI',
  authDomain: 'COLE_AQUI',
  projectId: 'COLE_AQUI',
  storageBucket: 'COLE_AQUI',
  messagingSenderId: 'COLE_AQUI',
  appId: 'COLE_AQUI'
};
self.VAPID_KEY = 'COLE_AQUI';
