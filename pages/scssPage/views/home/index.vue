<!--
 * @Author       : 桔子
 * @Date         : 2024-03-26 18:56:14
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-19 10:33:38
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/scssPage/views/home/index.vue
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const { push } = useRouter()

const goStarrySky = () => {
  push({ name: 'StarrySky' })
}
</script>

<template>
  <div>{{ 'hello world scss page' }}</div>
  <div @click="goStarrySky">{{ 'scss星空' }}</div>
</template>
