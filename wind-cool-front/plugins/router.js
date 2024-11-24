/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-18 10:24:18
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-18 10:30:48
 * @FilePath: \Front-end\nuxt\wind-cool\wind-cool-front\plugins\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 在 `plugins` 文件夹下创建一个插件，如 `plugins/router.js`
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载 icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});
export default defineNuxtPlugin((nuxtApp) => {
  // 获取 Vue Router 实例
  const router = nuxtApp.$router;

  // 路由跳转前的钩子
  router.beforeEach((to, from, next) => {
    // 你可以在这里做一些验证，或执行异步操作

    if (import.meta.client) {
      NProgress.start(); // 进度条开始
    }
    next();
  });

  // 路由跳转后的钩子
  router.afterEach((to, from) => {
    // 可以在这里做一些统计或日志记录
    if (import.meta.client) {
      NProgress.done(); // 进度条结束
    }
  });
});
