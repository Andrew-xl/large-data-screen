<template>
  <div class="home">
    <Nav :title="'刘德华联合数智租赁平台'"></Nav>
    <NavTime />
    <Content />
  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from "vue-class-component";
import { post } from "@/http";
import api from "@/apis";
import Nav from '../../components/Native/index.vue'
import NavTime from '../../components/NativeTime/index.vue'
import Content from './Content.vue'
// eslint-disable-next-line @typescript-eslint/no-empty-function
// const toHttp = () => {
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   post(api.login, {}).then((res) => { })
// }
</script>
<style scoped lang="scss">
.home {
  background-image: url(../../assets/images/bj.jpg);
  width: 100wh;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  overflow:hidden;
  position: relative;
  padding: 55px 40px 0;
  box-sizing: border-box;
}
</style>
