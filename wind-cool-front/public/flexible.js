/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-27 14:21:24
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-12 16:24:07
 * @FilePath: \Front-end\Vue\Vue3\nuxt\nuxt-test1\public\flexible.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function resize() {
  const width = window.innerWidth || document.documentElement.clientWidth;
  let designWidth;
  if (width > 750) {
    designWidth = 1528;
  } else {
    designWidth = 375;
  }
  const scale = Number((window.innerWidth / designWidth).toFixed(3));
  const vw = Number((window.innerWidth / 100).toFixed(3));
  let fontSizePxToVw;
  fontSizePxToVw = Number(((16 * scale) / vw).toFixed(3));
  document.documentElement.style.fontSize = fontSizePxToVw + "vw";
}
window.addEventListener("resize", () => {
  resize();
});
resize();
