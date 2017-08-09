/**
 * Created By Jesse
 * axios 配置
 */
import axios from 'axios';

// axios 基础配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// request 请求拦截器
axios.interceptors.request.use(
  config => {
    // 请求前进行拦截, 验证是否已经登录等
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// response 响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应结果统一处理
    // return {
    //   status: response.status,
    //   result: response.data,
    // }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)

export default axios;