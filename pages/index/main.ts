/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-03 14:22:31
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/pages/main.ts
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import 'reset-css';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
