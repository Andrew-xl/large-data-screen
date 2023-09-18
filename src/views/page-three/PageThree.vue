<template>
  <div class="card-map">
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
