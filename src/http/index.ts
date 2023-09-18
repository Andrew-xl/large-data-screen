import { App } from "vue";

import { curServer, get, post, exportGet, exportPost } from "./http";

interface OptionsType {
  api: any,
  timeout: number,
  baseURL: string,
}

const install = (Vue: App<any>, opts: OptionsType) => {
  if(!Vue) {console.error('please install Vue')}
  Vue.config.globalProperties.$http = http;
  const { api } = opts || {};
  if (api instanceof Object && Object.keys(api).length >= 0) {
    Vue.config.globalProperties.$api = api;
  }
};

const http = {
  post,
  get,
  exportGet,
  exportPost,
};

export {
  curServer,
  http,
  get,
  post,
  exportGet,
  exportPost,
};

export default install;
