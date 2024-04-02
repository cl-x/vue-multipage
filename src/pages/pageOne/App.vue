<!--
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 19:01:08
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/pages/pageOne/App.vue
-->
<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { pageRedirect } from '@/utils/commonTool'

const { push } = useRouter()

onMounted(() => {
  setTimeout(async() => {
    await nextTick()
    await nextTick()
    pageRedirect(push)
  }, 100)
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped>
</style>
