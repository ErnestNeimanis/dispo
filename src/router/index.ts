import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripDetails from '@/components/rental-profile/trip-details/TripDetails.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      query: { details: "trip-details" },
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
      path: "/contact",
      name: "contact",
      component: HomeView,
    },
    {
      path: "/booking",
      name: "booking",
      component: HomeView,
   
    },
    {
      path: "/auth",
      name: "auth",
      component: HomeView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next({ path: "/booking", query: { details: "trip-details" } }); 
  } else {
    next();
  }
});


export default router
