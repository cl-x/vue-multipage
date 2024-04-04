/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-04 15:53:50
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/pageOne/router/index.ts
 */
import { createRouter } from "vue-router";
import * as VueRouter from "vue-router";

const router = createRouter({
  history: VueRouter.createWebHashHistory("../pageOne.html"),
  routes: [
    {
      path: "/",
      redirect: "/enter",
    },
    {
      path: "/enter",
      name: "Enter",
      component: () => import("../views/enter/index.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/empty",
      name: "Empty",
      component: () => import("../views/empty/index.vue"),
    },
  ],
});

export default router;
