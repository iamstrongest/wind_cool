<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-25 23:58:13
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-18 13:14:20
 * @FilePath: \wind-cool\wind-cool-front\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>
const getDevice = ref(getDeviceType());
definePageMeta({
    title: '首页',
    path: "/index.html",
    alias: ["/", "/home"]
})
</script>
<template>
    <div>
        <span>欢迎来到首页</span>
        <p>目前还不知道想要写点儿什么，占个位置就行了</p>
        <NuxtPage></NuxtPage>
    </div>
</template>

<style scoped></style>