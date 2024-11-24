/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-12 21:40:10
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-18 14:27:23
 * @FilePath: \wind-cool\wind-cool-front\composables\stores\glboal.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { clearStorageFn } from "~/utils";
import { getUserinfo, register, login } from "~/composables/api/user";
export const useUserStore = defineStore("user", () => {
  const state = reactive({
    userinfo: {},
  });
  async function loginFn(params) {
    const { data: resp } = await login(params);
    const data = resp.data;
    if (resp.code === 200) {
      storageFn(data.token, data.refresh_token, data.uuid);
      await setUserinfoFn();
    }
    return resp;
  }
  function logout() {
    clearStorageFn();
    state.userinfo = {};
  }
  async function registerFn(params) {
    const { data: resp } = await register(params);
    return resp;
  }
  async function setUserinfoFn() {
    state.userinfo = await getUserinfoFn();
  }
  async function getUserinfoFn() {
    const { data: resp } = await getUserinfo();
    return resp.data;
  }
  return { state, loginFn, registerFn, setUserinfoFn, getUserinfoFn, logout };
});
