/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-04 15:53:41
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/bill/router/index.ts
 */
import { createRouter } from 'vue-router';
import * as VueRouter from "vue-router";

const router = createRouter({
  history: VueRouter.createWebHashHistory("../bill.html"),
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
