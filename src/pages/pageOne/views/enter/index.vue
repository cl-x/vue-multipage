<!--
 * @Author       : 桔子
 * @Date         : 2024-03-27 10:51:42
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-03 16:23:39
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/pages/pageOne/views/enter/index.vue
-->
<script setup>
import { useRouter } from 'vue-router'
import { useCommonModulesStore } from '@/stores/modules/common'
import { JumpType } from "@/const/index";
import { goPageJumps } from "@/utils/goPageJumps";

const commonStore = useCommonModulesStore()

const { push } = useRouter()

const go = () => {
  push({ name: 'Home' })
}

const goTwo = () => {
  goPageJumps(JumpType.PAGETWO_HOME)
}

onMounted(() => {
  console.log('enter')
  commonStore.setName('enter')
//   console.log('enter', commonStore.getName())
})
</script>

<template>
  <div @click="go">{{ '入口' }}</div>
  <div @click="goTwo">{{ '跳到第二个页面' }}</div>
  <p>{{ '这是入口页面' }}</p>
</template>