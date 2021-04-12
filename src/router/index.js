import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "Invite",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Invite.vue"),
  },
  {
    path: "/request",
    name: "Request",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Request.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
