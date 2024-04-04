<!--
 * @Author       : 桔子
 * @Date         : 2024-03-25 17:27:09
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-04 16:01:42
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/pages/index/App.vue
-->
<script setup lang="ts">
import { ref } from "vue";
import { JumpType } from "@/const/index";
import { goPageJumps } from "@/utils/goPageJumps";

const page_list = ref<any[]>([]);

const getAllPages = async () => {
  let result = await fetch("pagesData.json").then((response) =>
    response.json()
  );
  result = Array.isArray(result) ? result : [];
  page_list.value = result;
  page_list.value.forEach((item: any, index: number) => {
    item.type = JumpType.PAGEONE_ENTER;

    if (index === 1) {
      item.type = JumpType.PAGETWO_HOME;
    }

    if (index === 2) {
      item.type = JumpType.DETAIL_HOME;
    }

    if (index === 3) {
      item.type = JumpType.BILL_HOME;
    }
  });

  console.log(page_list.value);
};

const onPush = (item: any) => {
  goPageJumps(item.type);
};

const init = async () => {
  await getAllPages();
};

init();
</script>

<template>
  <div>
    <h1 v-for="(item, index) in page_list" :key="index" @click="onPush(item)">
      {{ item.chunkName }}
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>
