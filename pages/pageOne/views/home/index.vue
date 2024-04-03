<!--
 * @Author       : 桔子
 * @Date         : 2024-03-26 18:56:14
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 10:14:29
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-more/src/pages/pageOne/views/home/index.vue
-->
<script setup>
import { useRouter } from 'vue-router';

const { push } = useRouter()

const goEmpty = () => {
    push({
        name: 'Empty'
    })
}
</script>

<template>
    <div @click="goEmpty"> {{  'hello world'  }} </div>
</template>