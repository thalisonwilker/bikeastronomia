import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: 'sobre', component: () => import('pages/SobrePage.vue'), name: 'sobre' },
      { path: 'acoes-educativas', component: () => import('pages/AcoesPage.vue'), name: 'acoes' },
      { path: 'acoes-educativas/:slug', component: () => import('pages/AcaoDetailPage.vue'), name: 'acao-detail' },
      { path: 'eventos', component: () => import('pages/EventosPage.vue'), name: 'eventos' },
      { path: 'galeria', component: () => import('pages/GaleriaPage.vue'), name: 'galeria' },
      { path: 'blog', component: () => import('pages/BlogPage.vue'), name: 'blog' },
      { path: 'contato', component: () => import('pages/ContatoPage.vue'), name: 'contato' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
