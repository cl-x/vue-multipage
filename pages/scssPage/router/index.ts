/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-19 10:01:14
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/scssPage/router/index.ts
 */
import { createRouter } from 'vue-router'
import * as VueRouter from 'vue-router'

const router = createRouter({
  history: VueRouter.createWebHashHistory('../scssPage.html'),
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
      path: '/starrySky',
      name: 'StarrySky',
      component: () => import('../views/starrySky/index.vue')
    }
  ]
})

export default router
