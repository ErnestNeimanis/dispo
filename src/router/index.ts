import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/transport",
      name: "transport",
      component: HomeView,
    },
    {
      path: "/tours",
      name: "tours",
      component: HomeView,
    },
    {
      path: "/partners",
      name: "partners",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: HomeView,
    },
  ],
});

export default router
