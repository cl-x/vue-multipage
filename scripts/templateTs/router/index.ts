/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 14:52:50
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-more/scripts/templateTs/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/页面名称',
    },
    {
      path: "/页面名称/index.html",
      redirect: '/页面名称',
    },
    {
      path: '/页面名称',
      redirect: '/页面名称/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/home/index.vue')
        }
      ]
    },
  ]
})

export default router
