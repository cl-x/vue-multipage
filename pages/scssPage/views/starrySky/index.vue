<!--
 * @Author       : 桔子
 * @Date         : 2024-04-19 10:02:03
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-19 16:06:20
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/scssPage/views/starrySky/index.vue
-->
<script setup lang="ts">
const starry_list = ref<any[]>([
  {
    class: 'starry-sky-box-1'
  },
  {
    class: 'starry-sky-box-2'
  },
  {
    class: 'starry-sky-box-3'
  },
  {
    class: 'starry-sky-box-4'
  },
  {
    class: 'starry-sky-box-5'
  }
])
</script>

<template>
  <div class="starry_sky_wrap">
    <div
      v-for="(item, index) in starry_list"
      :key="index"
      :class="item.class"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.starry_sky_wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #000;
}

@function randomShadow($num) {
  $shadow: '#{random(100)}vw #{random(100)}vh #fff';
  @for $i from 1 through $num {
    $shadow: '#{$shadow}, #{random(100)}vw #{random(100)}vh #fff';
  }
  @return unquote($shadow);
}

@for $i from 1 through 5 {
  $diffDuration: calc($i * 15s);
  $diffSize: calc(4vw * calc(6 - $i));
  $diffNum: calc($i * 8);

  $duration: calc(40s + $diffDuration);
  $size: calc($diffSize / 10);
  $num: calc(15 + $diffNum);
  .starry-sky-box-#{$i} {
    width: $size;
    height: $size;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0%;
    border-radius: 50%;
    box-shadow: randomShadow(floor($num));
    animation: moveUp $duration linear infinite;

    &::after {
      content: '';
      position: fixed;
      top: 100vh;
      left: 0;
      border-radius: inherit;
      width: inherit;
      height: inherit;
      box-shadow: inherit;
    }
  }
}

@keyframes moveUp {
  to {
    transform: translateY(-100vh);
  }
}
</style>
