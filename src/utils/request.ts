// 1.引入axios
import axios from "axios";
// 2.创建axios实例
const request = axios.create({
    baseURL: "https://api.shop.eduwork.cn/",
    timeout: 8000
});

// 3.请求拦截器
request.interceptors.request.use(config => {
    return config;
});

// 4.响应拦截器
request.interceptors.response.use(response => {
    return response.data;
});

// 5.导出axios实例
export default request;

