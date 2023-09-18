import axios from "axios";

import { timeout } from "./config";
import { responseHandler } from "./responseHandler";

const baseURL = '/boss';

const curServer = axios.create({
  timeout,
  baseURL,
});

const setHeader = (config: any) => {
  return {
    "Content-Type": "application/json; charset=UTF-8",
  }
};

/**
 * 注入统一请求头
 */
curServer.interceptors.request.use((config) => {
  const baseConfig = { ...config  } as any;
  const curEnv = localStorage.getItem('curEnv') || 'dev';
  if (curEnv) {
    baseConfig.baseURL = `${baseURL}/${curEnv}`;
  }
  baseConfig.headers = {
    ...setHeader(baseConfig),
    ...baseConfig.headers,
  };
  return baseConfig;
});


/**
 * get 请求
 * @param url
 * @param params
 * @param options
 */
const get = <T>(url: string, params?: any, options?: any) => curServer({
  method: 'get',
  url,
  params,
  ...options,
}).then((res) => responseHandler<T>(res));

/**
 * post 请求
 * @param url
 * @param params
 * @param options
 */
const post = <T>(url: string, params?: any, options?: any) => curServer({
  method: 'post',
  url,
  data: params,
  ...options,
}).then((res) => responseHandler<T>(res));

/**
 * get 导出
 * @param url
 * @param params
 * @param options
 */
const exportGet = (url: string, params?: any, options?: any) => curServer({
  method: 'get',
  url,
  params,
  timeout: 600000,
  headers: {
    "Content-Type": "application/octet-stream;",
    "Content-Disposition": "attachment",
  },
  responseType: "blob",
  ...options,
}).then(res => (res));

/**
 * post 导出
 * @param url
 * @param params
 * @param options
 */
const exportPost = (url: string, params?: any, options?: any) => curServer({
  method: 'post',
  url,
  data: params,
  responseType: "blob",
  timeout: 600000,
}).then(res => (res));

export {
  curServer,
  get,
  post,
  exportGet,
  exportPost,
};
