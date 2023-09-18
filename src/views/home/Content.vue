<template>
  <div :class="styles.container">
    <div :class="styles.left">
      <div :class="styles.leftItem1">
        <div class="title-style">近6年年度GMV趋势</div>
        <div id="chart1" class="echarts-dom">
          <Items4 />
        </div>
      </div>
      <div :class="styles.leftItem1">
        <div class="title-style">近半年活跃客户与项目数趋势</div>
        <div id="chart2" class="echarts-dom">
          <Items5 />
        </div>
      </div>
      <div :class="styles.leftItem2">
        <div class="title-style">重点项目</div>
        <div id="chart3" class="echarts-dom">
          <Items2 />
        </div>
      </div>
    </div>
    <div :class="styles.middle">
      <div :class="styles.middleTop">
        <TopList />
      </div>
      <div :class="styles.middleBottom">
        <div id="chart4" class="echarts-dom">
          <Items7 />
        </div>
        <div :class="styles.table">
          <div :class="styles.tableContainer">
            <div ref="list" :class="styles['operate-table-header']">
              <div :class="styles['table-header-item']">名称</div>
              <div :class="styles['table-header-item']">在合作项目数</div>
              <div :class="styles['table-header-item']">在合作客户数</div>
              <div :class="styles['table-header-item']">在合作设备数</div>
            </div>
            <vue-seamless-scroll
              :data="listData"
              :class="styles['winners-list-cont']"
            >
              <div
                :class="[
                  styles['operate-table-content'],
                  styles[
                    (index + 1) % 2 ? 'operate-table-content-background' : ''
                  ],
                ]"
                v-for="(item, index) in listData"
                :key="index"
              >
                <div :class="styles['table-body-item1']">
                  <p>{{ item.title }}</p>
                </div>
                <div :class="styles['table-body-item2']">
                  <p>{{ item.num }}</p>
                </div>
                <div :class="styles['table-body-item2']">
                  <p>{{ item.customNum }}</p>
                </div>
                <div :class="styles['table-body-item2']">
                  <p>{{ item.customNum }}</p>
                </div>
              </div>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
    </div>
    <div :class="styles.right">
      <div :class="styles.rightItem1">
        <div class="title-style">各区域项目与在租项目数</div>
        <div id="chart5" class="echarts-dom">
          <Items6 />
        </div>
      </div>
      <div :class="styles.rightItem2">
        <div class="title-style">TOP在租机型</div>
        <div id="chart6" class="echarts-dom">
          <Items3 />
        </div>
      </div>
      <div :class="styles.rightItem3">
        <div class="title-style">当月热门机型</div>
        <div id="chart7" class="echarts-dom">
          <Items1 />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from "./content.module.scss";
import Items1 from "@/components/Items1/index.vue";
import Items2 from "@/components/Items2/index.vue";
import Items3 from "@/components/Items3/index.vue";
import Items4 from "@/components/Items4/index.vue";
import Items5 from "@/components/Items5/index.vue";
import Items6 from "@/components/Items6/index.vue";
import Items7 from "@/components/Items7/index.vue";
import Items8 from "@/components/Items8/index.vue";
import vueSeamlessScroll from "vue-seamless-scroll/src";
import TopList from "../../components/TopList/index.vue"
import { ref } from "vue";
const listData = ref([
  {
    title: "江苏省",
    num: "66",
    customNum: "4",
    // stata: "0",
  },
  {
    title: "安徽省",
    num: "55",
    customNum: "23",
    // stata: "1",
  },
  {
    title: "陕西省",
    num: "3",
    customNum: "20",
    // stata: "2",
  },
  {
    title: "南京",
    num: "20",
    customNum: "5",
    // stata: "0",
  },
  {
    title: "北京",
    num: "1",
    customNum: "11",
    // stata: "1",
  },
  {
    title: "河北省",
    num: "2",
    customNum: "11",
    // stata: "1",
  },
]);
</script>
