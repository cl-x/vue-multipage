<!--
 * @Author       : 桔子
 * @Date         : 2024-03-27 10:10:27
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 10:29:03
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-more/src/pages/pageOne/views/empty/index.vue
-->
<script setup>
const msg = ref('empty')

const goTwoPage = () => {
    window.location.href = 'http://localhost:9530/pages/pageTwo/index.html'
}
console.log('window.location.href')
</script>

<template>
  <div>
    <p @click="goTwoPage">{{ msg }}</p>
  </div>
  </template>