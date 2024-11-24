<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-25 23:27:41
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-24 10:36:48
 * @FilePath: \nuxt\nuxt-test1\app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>
const glboalStore = useGlboalStore();
const userStore = useUserStore();
glboalStore.setDeviceType(getDeviceType())
// const getDevice = ref(getDeviceType());
const footClass = computed(() => {
  switch (glboalStore.getDeviceType) {
    case 'desktop':
      return 'desktop-footer';
    case 'mobile':
      return 'mobile-footer';
    case 'tablet':
      return 'tablet-footer';
    default:
    case 'desktop':
      return 'desktop-footer';
  }
})
onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    userStore.setUserinfoFn();
  }
})
</script>
<template>
  <div id="app">
    <NuxtLayout>
      <header>
        <desktop-header v-if="glboalStore.getDeviceType === 'desktop'"></desktop-header>
        <mobile-header v-if="glboalStore.getDeviceType === 'mobile'"></mobile-header>
        <tablet-header v-if="glboalStore.getDeviceType === 'tablet'"></tablet-header>
      </header>
      <main>
        <NuxtPage />
      </main>
      <footer :class="footClass">
        <desktop-footer v-if="glboalStore.getDeviceType === 'desktop'"></desktop-footer>
        <mobile-footer v-if="glboalStore.getDeviceType === 'mobile'"></mobile-footer>
        <desktop-footer v-if="glboalStore.getDeviceType === 'tablet'"></desktop-footer>
      </footer>
    </NuxtLayout>
  </div>
</template>
<script setup>
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}



#app {
  min-height: 100vh;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000;
}

header {
  height: 5vh;
  display: flex;
  align-items: center;
}

main {
  box-sizing: border-box;
  min-height: 90vh;
  padding-top: 0.2rem;
}

.desktop-footer {
  width: 100%;
  height: 5vh;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-footer {
  width: 100%;
  height: 5vh;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>