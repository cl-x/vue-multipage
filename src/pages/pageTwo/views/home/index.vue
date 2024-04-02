<!--
 * @Author       : 桔子
 * @Date         : 2024-03-26 18:56:14
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-02 16:24:56
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/pages/pageTwo/views/home/index.vue
-->
<script setup>
import { useCommonModulesStore } from '@/stores/modules/common'

const commonStore = useCommonModulesStore()


onMounted(() => {
  // const aa = commonStore.getName()
  // console.log('home', aa)
})

</script>

<template>
    <div> {{  '第二个页面的 hello world'  }} </div>
</template>