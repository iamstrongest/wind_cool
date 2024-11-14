<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-25 23:27:41
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-14 11:25:57
 * @FilePath: \nuxt\nuxt-test1\app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>
const glboalStore = useGlboalStore();
onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    glboalStore.setUserinfoFn();
  }
})
</script>
<template>
  <div id="app">
    <header>
      <Header></Header>
    </header>
    <main class="main">
      <NuxtPage></NuxtPage>
    </main>
    <footer class="footer">
      <Footer></Footer>
    </footer>
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

a {
  text-decoration: none;
  color: #000;
}

#app {
  min-height: 100vh;
  box-sizing: border-box;
}

header {
  height: 5vh;
  display: flex;
  align-items: center;
}

.main {
  min-height: 90vh;
}

.footer {
  width: 100%;
  height: 5vh;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>