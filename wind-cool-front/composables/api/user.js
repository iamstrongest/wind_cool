/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-14 10:22:22
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-14 10:22:31
 * @FilePath: \wind-cool\wind-cool-front\composables\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from "./index";
export function login(data) {
  const method = "post";
  const url = "/login";
  return service({
    url,
    method,
    data,
  });
}
export function register(data) {
  const method = "post";
  const url = "/register";
  return service({
    url,
    method,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
export function getUserinfo() {
  const method = "get";
  const url = "/userinfo";
  return service({
    url,
    method,
  });
}
