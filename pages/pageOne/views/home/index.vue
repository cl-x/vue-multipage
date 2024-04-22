<!--
 * @Author       : 桔子
 * @Date         : 2024-03-26 18:56:14
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-22 19:13:02
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/pageOne/views/home/index.vue
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import Worker from '@/worker/index?worker'

const { push } = useRouter()

const data = ref<any>('')
const result_value = ref<any>('')
const worker = ref<any>(null)
const circle = ref<any>(false)

const goEmpty = () => {
  push({
    name: 'Empty'
  })
}

const getResult = () => {
  const number = +data.value
  // result_value.value = fiBoNaCCi(number)

  /* 新建worker实例,注意传入分线程路径 */
  worker.value = new Worker()
  /* 监听postMessage */
  unref(worker).onmessage = (event: any) => {
    console.log('主线程接收到分线程返回的数据' + event.data)
    result_value.value = event.data
  }
  /* 想分线程发送消息 */
  unref(worker).postMessage(number)
  console.log('主线程向分线程发送数据' + number)

  circle.value = true
}

onBeforeUnmount(() => {
  console.log('页面销毁')
  worker.value?.terminate()
})
</script>

<template>
  <input type="text" v-model="data" />
  <div @click="getResult">{{ '结果' }} {{ result_value }}</div>
  <div @click="goEmpty">{{ 'hello world' }}</div>

  <div class="animate-box" :class="{'animate-box-two': circle}"></div>
</template>

<style scoped lang="scss">
.animate-box {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  left: 0;

  &::after {
    content: '';
    width: inherit;
    height: inherit;
    position: fixed;
    left: -100px;
    top: 0;
    border-radius: inherit;
  }
}

.animate-box-two {
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}
</style>
