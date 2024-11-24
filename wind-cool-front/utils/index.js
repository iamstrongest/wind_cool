/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-13 16:39:34
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-24 00:05:06
 * @FilePath: \Front-end\nuxt\wind-cool\wind-cool-front\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function storageFn(token, refresh_token, uuid) {
  if (token) {
    localStorage.setItem("token", token);
  }
  if (refresh_token) {
    localStorage.setItem("refresh_token", refresh_token);
  }
  if (uuid) {
    localStorage.setItem("uuid", uuid);
  }
}
export function clearStorageFn() {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("uuid");
}
export function getDeviceType() {
  if (import.meta.client) {
    const userAgent = navigator.userAgent.toLowerCase();

    // 判断手机设备
    if (/iphone|ipod|android.*mobile|windows phone/i.test(userAgent)) {
      return "mobile";
    }

    // 判断平板设备
    if (/ipad|android(?!.*mobile)/i.test(userAgent)) {
      return "tablet";
    }

    // 判断桌面设备
    if (/windows|macintosh|linux/i.test(userAgent)) {
      return "desktop";
    }
  }
  // 默认返回pc浏览器的布局
  return "desktop";
}
export async function getCurrentPosition() {
  // 获取用户当前位置并判断是否在范围内
  const data = await new Promise((resolve, reject) => {
    if (import.meta.client) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;
            console.log(
              `用户当前位置：纬度 ${userLatitude}, 经度 ${userLongitude}`
            );
            resolve({
              userLatitude,
              userLongitude,
            });
          },
          function (error) {
            alert("无法获取地理位置，请检查定位设置");
            reject({});
          }
        );
      } else {
        alert("浏览器不支持定位功能");
      }
    }
  });
  return data;
}
