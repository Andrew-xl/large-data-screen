<template>
  <div :class="styles.container">
    <div :class="styles.top">
      <div :class="[styles.icon, styles[`icon_${item.icon}`]]"></div>
      <div :class="styles.dep">
        <div :class="styles.depTitle">{{ item.title }}</div>
        <div :class="styles.depContent">
          <div :class="styles.item">
            <div :class="styles.name">设备数</div>
            <div :class="styles.value">
              <div :class="styles.num">{{ item.number }}</div>
              <div :class="styles.unit">台</div>
            </div>
          </div>
          <div :class="styles.item">
            <div :class="styles.name">设备资产价值</div>
            <div :class="styles.value">
              <div :class="styles.num">{{item.totalValue}}</div>
              <div :class="styles.unit">台</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="echarts-dom">
      <Items8 :map_index="map_index"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from "./cardTwo.module.scss";
import { defineProps } from "vue";
import Items8 from "@/components/Items8/index.vue"
defineProps<{
  map_index: number;
  item: {
    title: string;
    icon: string;
    number: number;
    totalValue: number;
  };
}>();
</script>
