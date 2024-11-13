<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-26 14:51:08
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2023-08-27 17:30:16
 * @FilePath: \Front-end\Vue\Vue3\nuxt\nuxt-test1\pages\user\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>
</script>
<template>
    <div class="user-nav-container">
        <nav>
            <NuxtLink class="link" to="/user/login">跳转用户登录页面</NuxtLink>
            <NuxtLink class="link" to="/user/help">跳转帮助中心</NuxtLink>
            <NuxtLink class="link" to="/user/1">跳转用户1</NuxtLink>
        </nav>
    </div>
</template>

<style scoped>
.user-nav-container {
    margin-top: 0.5px;
}

a {
    margin: 10px;
}
</style>