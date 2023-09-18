/**
 * 返回逻辑处理
 */

import {AxiosResponse} from "axios";

const responseHandler = <T>(response: AxiosResponse) => new Promise<T>((resolve, reject) => {
  if (response && +response.status === 200 && response.data) {
    const { errCode, message, data } = response.data;
    if (errCode) {
      // 网关错误
      if (errCode.indexOf('A030030') >= 0) {
        console.error('token过期，请重新登录');
        reject();
      } else {
        // 业务错误
        if (errCode === '0') {
          resolve(data);
        } else {
          if (message) console.error(message);
          reject();
        }
      }
    } else {
      console.error('哎呀，系统异常，请联系管理员！');
      reject();
    }
  } else {
    console.error('哎呀，系统异常，请联系管理员！');
    reject();
  }
});

export {
  responseHandler,
};
