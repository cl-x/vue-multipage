/*
 * @Author       : 桔子
 * @Date         : 2024-03-27 20:05:24
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 20:05:52
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/stores/index.ts
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export const setupStore = (app: App<Element>) => {
  app.use(store)
}

export { store }
