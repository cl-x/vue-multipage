/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-03 17:27:46
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/pages/detail/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import * as VueRouter from "vue-router";

const router = createRouter({
  history: VueRouter.createWebHashHistory("../detail.html"),
  routes: [
    {
      path: "/",
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home/index.vue')
    }
  ]
})

export default router
