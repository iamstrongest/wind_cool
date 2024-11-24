/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-11-18 14:26:46
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-18 14:47:23
 * @FilePath: \Front-end\nuxt\wind-cool\wind-cool-front\composables\stores\global.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const useGlboalStore = defineStore("glboal", () => {
  const state = reactive({
    DeviceType: "desktop",
  });
  async function setDeviceType(type) {
    state.DeviceType = type;
  }
  const getDeviceType = computed(() => {
    return state.DeviceType;
  });
  return { state, setDeviceType, getDeviceType };
});
