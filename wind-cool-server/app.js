/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-10-26 08:46:03
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-15 13:46:01
 * @FilePath: \Front-end\Vue\Vue3\IM\socket_io\socket_io_server\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入 express 模块
import express from "express";
// 创建 express 的服务器实例
const app = express();
import http from "http";
import https from "https";
import { serverConfig } from "./src/config/constraint.js";
// TODO_01：请配置 Session 中间件
import cors from "cors";
import "./src/db/index.js";
import routes from "./src/router/index.js";
import middlewares from "./src/middlewares/index.js";
import { credentials } from "./src/config/ssl/index.js";
app.use(cors());
app.use(express.json({ extended: true, limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
// 静态资源目录
app.use(express.static("./src/public"));
app.use(middlewares.cacheFn);
app.use(middlewares.proxyFn);
app.use(middlewares.authFn);
app.use(middlewares.validateFn);
app.use(middlewares.noRoutesFn);
app.use(middlewares.checkNoramlParamsFn);
app.use(routes);
app.use(middlewares.serverErrorFn);
// 根据不同的环境指令，启动服务器
function initServer() {
  const httpArr = ["http_devlopment", "http_preview", "http_production"];
  const httpSArr = ["https_devlopment", "https_preview", "https_production"];
  if (httpArr.some((item) => item === process.env.NODE_ENV)) {
    const http_Server = http.createServer(app);
    http_Server.listen(serverConfig.httpPort, function () {
      console.log(serverConfig.message);
    });
  } else if (httpSArr.some((item) => item === process.env.NODE_ENV)) {
    const https_Server = https.createServer(credentials, app);
    https_Server.listen(serverConfig.httpPort, function () {
      console.log(serverConfig.message);
    });
  } else {
    console.log("启动指令未找到");
  }
}
initServer();
