/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-02 16:30:30
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/pages/pageTwo/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes: [
    {
      path: '/pageTwo/index.html',
      redirect: '/pageTwo'
    },
    {
      path: "/pageTwo",
      redirect: '/pageTwo/home',
      children: [
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
    },
  ]
})

export default router
