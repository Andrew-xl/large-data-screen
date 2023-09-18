<template>
  <div class="home">
    <!-- 标签云 -->
    <Items1 />
    <div style="width: 100px"></div>
    <!-- 列表滚动 -->
    <Items2 />
    <div style="width: 100px"></div>
    <!-- 图表 -->
    <Items3 />

  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from 'vue-class-component';
import { post } from '@/http'
import api from '@/apis'
import Items1 from '@/components/Items1/index.vue'
import Items2 from '@/components/Items2/index.vue'
import Items3 from '@/components/items3/index.vue'
</script>
<style scoped lang="scss">
.home {
  background-image: url(../assets/images/bj.jpg);
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 24px;
  h1 {
    color: white
  }
  div {
    display: inline-block;
    margin-bottom: 20px;
  }
}
</style>
