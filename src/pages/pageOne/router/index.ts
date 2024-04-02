/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 14:50:48
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-more/src/pages/pageOne/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pageOne'
    },
    {
      path: '/pageOne/index.html',
      redirect: '/pageOne'
    },
    {
      path: '/pageOne',
      redirect: '/pageOne/enter',
      children: [
        {
          path: 'enter',
          name: 'Enter',
          component: () => import('../views/enter/index.vue')
        },
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/home/index.vue')
        },
        {
          path: 'empty',
          name: 'Empty',
          component: () => import('../views/empty/index.vue')
        }
      ]
    }
  ]
})

export default router
