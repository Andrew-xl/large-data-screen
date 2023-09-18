<template>
  <div :class="styles.container">
    <div :class="styles.left">
      <div :class="styles.title">
        <div class="title-style">设备数据</div>
      </div>
      <div :class="styles.leftContent">
        <div :class="styles.leftItem" v-for="(item, index) in cardList" :key="index">
          <CardTwo :item="item" :map_index="index"/>
        </div>
      </div>
    </div>
    <div :class="styles.right">
      <div :class="styles.rightItem">
        <div class="title-style">SaaS直连客户数据</div>
          <Items2 />
      </div>
      <div :class="styles.rightItem">
        <div class="title-style">SaaS直连商户数据</div>
          <Items2 />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardTwo from "../../components/CardTwo/index.vue";
import { ref } from "vue";
import { number } from "echarts";
import Items2 from "../../components/Items2"
import styles from "./content.module.scss";
const cardList = ref([
  {
    title: "高机",
    icon: 'gj',
    number: 5,
    totalValue: 10000,
  },
  {
    title: "吊机",
    icon: 'dj',
    number: 5,
    totalValue: 10000,
  },
  {
    title: "挖掘机",
    icon: 'wjj',
    number: 5,
    totalValue: 10000,
  },
  {
    title: "叉车",
    icon: 'cc',
    number: 5,
    totalValue: 10000,
  },
]);
</script>
