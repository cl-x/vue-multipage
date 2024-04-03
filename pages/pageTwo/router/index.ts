/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-03 17:28:16
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/pages/pageTwo/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import * as VueRouter from "vue-router";

const router = createRouter({
  history: VueRouter.createWebHashHistory("../pageTwo.html"),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/empty',
      name: 'Empty',
      component: () => import('../views/empty/index.vue')
    }
  ]
})

export default router
