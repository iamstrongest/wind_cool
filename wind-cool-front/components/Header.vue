<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-26 15:16:46
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 21:21:15
 * @FilePath: \wind-cool\wind-cool-front\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>
const glboalStore = useGlboalStore();
const userHref = computed(() => {
    return "/user/" + glboalStore.state.userinfo?.userId + ".html"
})
function logout() {
    glboalStore.logout();
}
</script>
<template>
    <div class="header">
        <nav>
            <li class="nav-left">
                <NuxtLink class="link" to="/index.html">主页</NuxtLink>
            </li>
            <li class="nav-right">
                <NuxtLink class="link" :to="userHref" v-if="glboalStore.state.userinfo?.userId">
                    个人信息
                </NuxtLink>
                <NuxtLink class="link" to="/user/login.html" v-else>前往登录</NuxtLink>
                <NuxtLink class="link" to="/more.html">更多</NuxtLink>
                <NuxtLink class="link" to="/about.html">关于</NuxtLink>
                <NuxtLink class="link" to="/user/login.html" @click="logout">退出登录</NuxtLink>
            </li>

        </nav>
    </div>
</template>

<style scoped>
.header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding-top: 0.5rem;
}

nav {
    width: 100%;
    height: 100%;
    display: flex;
}

li {
    list-style: none;
    display: flex;
}

.nav-left {
    flex: 2;
    padding-left: 2rem;
}

.nav-right {
    flex: 1;
    align-items: center;
    justify-content: space-around;
}

li .link {
    width: 5rem;
    height: 1.5rem;
    text-align: center;
    color: #fff;
    background-color: #000;
    border-radius: 0.3125rem;
}

.link:hover {
    text-decoration: underline;
    color: #09c36f;
}

img {
    width: 3rem;
    height: 1.5rem;
    border-radius: 50%
}
</style>