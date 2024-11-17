/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-13 09:20:27
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-17 10:34:19
 * @FilePath: \wind-cool\wind-cool-server\src\config\api.params.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const apiNormalParmas = [
  {
    path: "/api/login",
    method: "post",
    params: ["account", "password"],
  },
  {
    path: "/api/refresh",
    method: "get",
    params: [],
  },
  {
    path: "/api/userinfo",
    method: "get",
    params: [],
  },
  {
    path: "/api/userinfo",
    method: "put",
    params: ["id", "username", "description", "theme"],
  },
  {
    path: "/api/detail",
    method: "get",
    params: ["id"],
  },
  {
    path: "/api/attendance",
    method: "get",
    params: ["userId", "attendance_year_month"],
  },
  {
    path: "/api/attendance",
    method: "post",
    params: ["userId"],
  },
  {
    path: "/api/userattendance",
    method: "get",
    params: ["userId", "attendance_year_month"],
  },
  {
    path: "/api/absence",
    method: "post",
    params: ["userId","description","time"],
  },
];
export const apiSpeciallParmas = [
  {
    path: "/api/avatar",
    method: "put",
    params: ["file", "fileName", "timestamp"],
  },
  {
    path: "/api/register",
    method: "post",
    params: ["file", "password", "email", "username", "fileName", "timestamp"],
  },
];
