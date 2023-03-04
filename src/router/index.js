import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FCView from "../views/FCView.vue";
import HOView from "../views/HOView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/fcauth",
    name: "FC",
    component: FCView,
  },
  {
    path: "/hoauth",
    name: "HO",
    component: HOView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
