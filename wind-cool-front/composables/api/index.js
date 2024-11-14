import axios from "axios";
const service = axios.create({
  baseURL: "http://localhost:3030/api",
  timeout: 30000,
});
service.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    const uuid = localStorage.getItem("uuid");
    if (token) {
      config.headers.authorization = token;
    }
    if (uuid) {
      config.headers.uuid = uuid;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  async (response) => {
    const {
      data: { code, message },
    } = response;
    if (code == 401) {
      alert(message);
      clearStorageFn();
      return navigateTo("/user/login.html");
    }
    if (code !== 200) {
      alert(message);
    }
    return response;
  },
  function (error) {
    alert("当前用户请过过多，服务器超时");
    return Promise.reject(error);
  }
);

export default service;
