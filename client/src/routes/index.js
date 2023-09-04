import { createRouter, createWebHistory } from "vue-router";
import routes from "./rotues";
import isAuthenticated from "../helpers/isAuthenticated"
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!isAuthenticated()) {
       
        next('/login');
      } else {
        next();
      }
    } else if (to.matched.some((record) => record.meta.guestOnly)) {
      if (isAuthenticated()) {
       
        next('/dashboard');
      } else {
        next();
      }
    } else {
      next();
    }
  });

export default router