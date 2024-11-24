<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-26 15:16:46
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-18 14:59:46
 * @FilePath: \wind-cool\wind-cool-front\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
const userStore = useUserStore();
const userHref = computed(() => {
    return "/user/" + userStore.state.userinfo?.userId + ".html";
});
function logout() {
    userStore.logout();
}
</script>
<template>
    <div class="header">
        <nav>
            <li class="nav-left">
                <NuxtLink class="link" to="/index.html">主页</NuxtLink>
            </li>
            <NuxtLink class="link" :to="userHref" v-if="userStore.state.userinfo?.userId">
                个人信息
            </NuxtLink>
            <NuxtLink class="link" to="/user/login.html" v-else>前往登录</NuxtLink>

            <li class="nav-right">
                <el-popover placement="bottom" :width="60" trigger="click">
                    <template #reference>
                        <el-button class="m-2">
                            更多
                        </el-button>
                    </template>
            <li class="more-li">
                <NuxtLink to="/about.html">关于</NuxtLink>
            </li>
            <li class="more-li">
                <NuxtLink to="/user/login.html" @click="logout">退出登录</NuxtLink>
            </li>
            </el-popover>
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

.link {
    width: 5rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    color: #000;
    background-color: #fff;
    border-radius: 0.3125rem;
    border: 1px solid #ccc;
}

.link:hover {
    background-color: #ecf5ff;
    color: #409eff;
}

.more-li {
    justify-content: center;
    align-items: center;
}

.more-li:hover {
    border-bottom: 1px solid skyblue;
}

img {
    width: 3rem;
    height: 1.5rem;
    border-radius: 50%;
}
</style>
