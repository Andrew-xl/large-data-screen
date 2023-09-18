<template>
  <div :class="styles.container">
    <div :class="styles.item" v-for="(item, index) in cardList" :key="index">
      <Card :item="item" :map_index="index"></Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from "./content.module.scss";
import Card from "../../components/Card/index.vue";
import { ref } from "vue";
const cardList = ref([
  {
    title: "客户分布",
    tableHeaderData: ["名称", "省份", "客户数(个)", "在租设备(台)"],
    tableData: [
      {
        serial: 1,
        title: "江苏省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 2,
        title: "陕西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 3,
        title: "河北省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 4,
        title: "湖南省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 5,
        title: "浙江省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 6,
        title: "福建省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 7,
        title: "广州省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 8,
        title: "四川省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 9,
        title: "广西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 10,
        title: "山东省",
        num1: "66",
        num2: "4",
      },
    ],
    echartsId: "chart1",
  },
  {
    title: "商户分布",
    tableHeaderData: ["名称", "省份", "商户数(个)", "在租设备(台)"],
    tableData: [
      {
        serial: 1,
        title: "江苏省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 2,
        title: "陕西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 3,
        title: "河北省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 4,
        title: "湖南省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 5,
        title: "浙江省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 6,
        title: "福建省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 7,
        title: "广州省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 8,
        title: "四川省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 9,
        title: "广西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 10,
        title: "山东省",
        num1: "66",
        num2: "4",
      },
    ],
    echartsId: "chart2",
  },
  {
    title: "物流分布",
    tableHeaderData: ["名称", "省份", "物流单(个)", "车辆数(台)"],
    tableData: [
      {
        serial: 1,
        title: "江苏省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 2,
        title: "陕西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 3,
        title: "河北省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 4,
        title: "湖南省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 5,
        title: "浙江省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 6,
        title: "福建省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 7,
        title: "广州省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 8,
        title: "四川省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 9,
        title: "广西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 10,
        title: "山东省",
        num1: "66",
        num2: "4",
      },
    ],
    echartsId: "chart3",
  },
  {
    title: "仓储分布",
    tableHeaderData: ["名称", "省份", "仓库数(个)", "所有设备(台)"],
    tableData: [
      {
        serial: 1,
        title: "江苏省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 2,
        title: "陕西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 3,
        title: "河北省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 4,
        title: "湖南省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 5,
        title: "浙江省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 6,
        title: "福建省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 7,
        title: "广州省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 8,
        title: "四川省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 9,
        title: "广西省",
        num1: "66",
        num2: "4",
      },
      {
        serial: 10,
        title: "山东省",
        num1: "66",
        num2: "4",
      },
    ],
    echartsId: "chart4",
  },
]);
</script>
