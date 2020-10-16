import axios from "axios";
import store from "/@/store";
// import {
//   getToken
// } from '@/utils/auth'

// create an axios instance
const BASE_API = import.meta.env['VITE_API_DOMAIN']
const service = axios.create({
  baseURL: BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // token
    if (store.getters.userInfo) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['x-3rdsession'] = getToken()
      // config.headers['Authorization'] = getToken()
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.status == 200) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        // Dialog.confirm({
        //   title: '只管向前吧！女孩',
        //   message: '登录时效过期你需要 重新登录'
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // }).catch(() => {
        //   // on cancel
        // })
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log(error.response); // for debug
    // Notify({
    //   type: 'danger',
    //   message: error.response.statusText
    // })
    return Promise.reject(error);
  }
);

export default service;
