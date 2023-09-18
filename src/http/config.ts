/**
 * 配置项
 */

let timeout = 10000;
let baseURL = '/';

// 设置超时时间
const setTime = (time: number): void => {
  timeout = time
};

const setBaseURL = (url: string): void => {
  baseURL = url;
};

export {
  timeout,
  baseURL,
  setTime,
  setBaseURL,
};
