/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-12 18:11:25
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 11:32:36
 * @FilePath: \wind-cool\middleware\auth,global.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const no_need_routes = ["/about", "/login"];
  if (!no_need_routes.some((path) => new RegExp(path).test(to.path))) {
    if (import.meta.client) {
      const token = localStorage.getItem("token");
      if (!token) {
        return navigateTo("/user/login.html");
      }
    }
  }
});
