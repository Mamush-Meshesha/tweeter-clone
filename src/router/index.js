import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/explore",
      name: "Explore",
      component: () => import("../views/Explore.vue"),
    },
    {
      path: "/notification",
      name: "Notification",
      component: () => import("../views/Notification.vue"),
    },
    {
      path: "/list",
      name: "List",
      component: () => import("../views/List.vue"),
    },
  ],
});
export default router;
