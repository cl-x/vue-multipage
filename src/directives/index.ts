/*
 * @Author       : 桔子
 * @Date         : 2024-03-27 19:29:01
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 19:34:46
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/directives/index.ts
 */
import type { App } from 'vue'
import { setupInputNumDirective } from './inputNum/inputNum'


/**
 * 导出指令：v-xxx
 * @methods hasPermi ，用法: v-hasPermi
 */
export const setupPermission = (app: App<Element>) => {
  setupInputNumDirective(app)
}
