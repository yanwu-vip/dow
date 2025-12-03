import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import UserModuleLayout from '@/views/modules/user/UserModuleLayout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/modules/user',
    name: 'user-module',
    component: UserModuleLayout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


