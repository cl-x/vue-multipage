<!--
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-29 16:28:51
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/pageOne/App.vue
-->
<script setup lang="ts">
import { useWatermark } from '@/hooks/web/useWatermark'

const { setWatermark, clear } = useWatermark(0.2)

onMounted(() => {
  setWatermark('桔子水印')
})

onBeforeUnmount(() => {
  clear()
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
