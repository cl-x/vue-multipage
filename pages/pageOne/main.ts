/*
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-08 16:21:56
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/pageOne/main.ts
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgIcon from '@/components/SvgIcon/index.vue'

import 'reset-css'
import 'vant/lib/index.css'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
