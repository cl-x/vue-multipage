/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 14:16:13
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-more/src/pages/pageOne/main.ts
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'reset-css';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
