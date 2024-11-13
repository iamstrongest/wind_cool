/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-12 21:39:58
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 17:00:23
 * @FilePath: \wind-cool\composables\api\index.glboal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const noNeedApiRoutes = ["/api/login", "/api/register"];
export async function httpFetch(url, params) {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;
  if (import.meta.client) {
    const resp = await fetch(baseUrl + url, params);
    return resp;
  }
}
