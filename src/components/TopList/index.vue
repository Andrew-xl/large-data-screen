<template>
  <div class="top-list">
    <TopListItem v-for="item, index in listData" :item="item" :key="index"/>
  </div>
</template>

<script lang="ts" setup>
import TopListItem from "./TopListItem.vue";
import { ref } from "vue";
const listData = ref([
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计创建客户数",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计创建项目数",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
  {
    dep: "累计GMV",
    number: "66",
    unit: "亿",
    // stata: "0",
  },
]);
</script>
<style scoped>
.top-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: aqua; */
}
</style>
