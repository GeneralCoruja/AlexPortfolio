import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UIUXView from '../views/UIUXView.vue'
import AboutView from '../views/AboutView.vue'
import LogosView from '../views/LogosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/uiux',
      name: 'uiux',
      component: UIUXView,
    },
    {
      path: '/logos',
      name: 'logos',
      component: LogosView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
  ],
})

export default router
