<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-25 23:58:47
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 11:24:43
 * @FilePath: \nuxt\nuxt-test1\pages\user\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>

definePageMeta({
    path: "/user/login.html",
    alias: ["/user/login"],
});
useHead({
    title: "登录中心",
})

const FormLogin = defineAsyncComponent(() => import('~/components/form/Login.vue'));
const FormRegister = defineAsyncComponent(() => import('~/components/form/Register.vue'));
const componentId = shallowRef(FormLogin);
const btnText = ref("注册");
function toggle() {
    if (componentId.value === FormLogin) {
        btnText.value = "登录"
        componentId.value = FormRegister
    } else {
        btnText.value = "注册"
        componentId.value = FormLogin
    }
}
</script>
<template>
    <div class="login_view">
        <button class="toggle" type="button" @click="toggle">{{ btnText }}</button>
        <keep-alive>
            <component :is="componentId"></component>
        </keep-alive>
    </div>
</template>
<style scoped>
.login_view {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
}

button {
    width: 50px;
    height: 30px;
    border: 2px solid #55bfa0;
    border-radius: 4px;
    color: #50b9fe;
    background-color: #fff;
}
</style>