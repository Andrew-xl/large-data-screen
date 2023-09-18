<template>
  <div :class="styles.container">
    <div :class="styles.left">
      <div :class="styles.title">{{ item.title }}</div>
      <div :class="styles.table">
        <div ref="list" :class="styles['operate-table-header']">
          <div :class="styles['table-header-item']" v-for="data in item.tableHeaderData">{{ data }}</div>
        </div>
        <vue-seamless-scroll
          :data="item.tableData"
          :class="styles['winners-list-cont']"
          :class-option="{
            // autoPlay:false,
          }"
        >
          <div
            :class="[
              styles['operate-table-content'],
              styles[(index + 1) % 2 ? 'operate-table-content-background' : ''],
            ]"
            v-for="(data, index) in item.tableData"
            :key="index"
          >
            <div :class="styles['table-body-item1']">
              <p>{{ data.serial }}</p>
            </div>
            <div :class="styles['table-body-item2']">
              <p>{{ data.title }}</p>
            </div>
            <div :class="styles['table-body-item3']">
              <p>{{ data.num1 }}</p>
            </div>
            <div :class="styles['table-body-item3']">
              <p>{{ data.num2 }}</p>
            </div>
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
    <div :class="styles.right">
      <div class="echarts-dom">
        <CardMap :map_index="map_index"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from "./card.module.scss";
import vueSeamlessScroll from "vue-seamless-scroll/src";
import { defineProps } from "vue";
import CardMap from "../../components/CardMap/index.vue"
defineProps<{
  map_index: number;
  item: {
    title: string;
    tableHeaderData: string[];
    tableData: {
      serial: number;
      title: string;
      num1: string;
      num2: string;
    }[];
    echartsId: string;
  };
}>();
</script>
