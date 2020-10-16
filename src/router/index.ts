import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "/@/layout/index.vue";

export const constantRoutes: any = [
  {
    path: "/404",
    component: () => import("/@/views/404.vue"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("/@/views/home/index.vue"),
        meta: {
          title: "只管向前吧！女孩"
        }
      }
    ]
  }
];
export const asyncRoutes: any = [
  {
    path: "/rolestest",
    component: Layout,
    redirect: "/rolestest/index",
    meta: {
      roles: ["editor"]
    },
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("/@/views/rolestest/index.vue"),
        meta: {
          title: "只管向前吧！女孩"
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
    hidden: true
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

export default router;
