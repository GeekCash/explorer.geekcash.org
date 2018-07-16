import axios from "axios";
import config from '../config';

const API = axios.create({ baseURL: config.BASE_API_URL });

export default {
  put(url, data) {
    return API.put(url, data);
  },
  get(url, data) {
    return API.get(url, data);
  },
  post(url, data) {
    return API.post(url, data);
  },
  delete(url, data) {
    return API.delete(url, data);
  }
};
