<!--
 * @Author       : 桔子
 * @Date         : 2024-04-08 13:51:28
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-08 16:13:52
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/components/SvgIcon/index.vue
-->
<script setup lang="ts" generic="T">
import { ISvgIconProps } from './interface'

// 声明name
defineOptions({
  name: 'SvgIcon'
})

// 声明props
const props = withDefaults(defineProps<ISvgIconProps>(), {
  prefix: 'icon',
  name: '',
  class_name: ''
})

const symbolId = computed(() => `#${props.name}`)

const svgClass = computed(() => {
  if (props?.class_name) {
    return `svg-icon ${props.class_name}`
  }

  return 'svg-icon'
})
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use class="svg-use" :xlink:href="symbolId" />
  </svg>
</template>

<style scoped lang="scss">
.svg-icon {
  vertical-align: -0.1rem;
  fill: currentColor;
  overflow: hidden;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .svg-use {
    width: 100%;
    height: 100%;
  }
}
</style>
