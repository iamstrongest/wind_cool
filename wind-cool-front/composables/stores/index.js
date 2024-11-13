/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-12 21:40:10
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 21:11:51
 * @FilePath: \wind-cool\wind-cool-front\composables\stores\glboal.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { clearStorageFn } from "~/utils";
export const useGlboalStore = defineStore("glboal", () => {
  const state = reactive({
    userinfo: {},
  });
  async function login(url, params) {
    const resp = await httpFetch(url, params)
      .then((response) => response)
      .then((response) => response.json());
    const data = resp.data;
    if (resp.code === 200) {
      storageFn(data.token, data.refresh_token, data.uuid);
      await setUserinfo();
      return resp;
    }
  }
  function logout() {
    clearStorageFn();
    state.userinfo = {};
  }
  async function register(url, params) {
    const resp = await httpFetch(url, params)
      .then((response) => response)
      .then((response) => response.json());
    alert(resp.message);
  }
  async function setUserinfo() {
    state.userinfo = await getUserinfo();
  }
  async function getUserinfo() {
    const token = localStorage.getItem("token");
    const url = "/userinfo";
    const params = {
      method: "get",
      query: {},
      headers: {
        authorization: token,
      },
    };
    if (token) {
      const resp = await httpFetch(url, params)
        .then((response) => response)
        .then((response) => response.json());
      return resp.data;
    }
  }
  return { state, login, register, setUserinfo, getUserinfo, logout };
});
