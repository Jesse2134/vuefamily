/**
 * 统一的请求services
 * @params arg [Object] 调用地方传参数进来
 */
import axios from './axios';

// post
export const add = arg => {
  return axios.post(`api/${arg}`, arg.params)
};

// delete
export const remove = arg => {
  return axios.delete(`api/${arg}/${arg}`);
};
// put
export const update = arg => {
  return axios.put(`api/${arg.className}/${arg.id}`, arg.params);
};

// get
export const findOne = arg => {
  return axios.get(`api/${arg}/${arg}`);
};

// patch
export const invalid = arg => {
  return axios.patch(`api/${arg.className}/close/${arg.id}`);
};
