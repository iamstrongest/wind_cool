<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-10-20 17:41:28
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 20:39:12
 * @FilePath: \Front-end\Vue\Vue3\IM\socket_io\socket_io_front\src\components\form\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>

const LoginForm = reactive({
    account: "",
    password: ""
})
const glboalStore = useGlboalStore();
const router = useRouter();
const onSubmit = async () => {
    try {
        // 使用 axios 发送 POST 请求
        const url = "/login"
        const pamams = {
            method: "post",
            body: JSON.stringify(LoginForm),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const resp = await glboalStore.login(url, pamams);
        const flag = confirm(resp.message);
        if (flag) {
            router.push("/index.html");
        }
        LoginForm.accout = '';
        LoginForm.password = '';
    } catch (error) {
        console.error('登录失败:', error);
    }
}
</script>
<template>
    <div class="form_container">
        <form @submit.prevent="onSubmit">
            <div class="form_col">
                <label for="accout"><input type="text" v-model="LoginForm.account" id="accout"
                        placeholder="请输入账号或者邮箱"></label>
            </div>
            <div class="form_col">
                <label for="password"><input type="password" v-model="LoginForm.password" name="password" id="password"
                        placeholder="输入密码"></label>
            </div>
            <div class="form_col submit">
                <label for="submit"> <button type="submit" name="submit">登录</button></label>
            </div>
        </form>
    </div>
</template>
<style scoped>
.form_container {
    width: 300px;
    min-height: 200px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
}

.form_col {
    margin-bottom: 20px;
    color: #fff;
}

.submit {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form_col button {
    width: 50px;
    height: 30px;
    border: 2px solid #55bfa0;
    border-radius: 4px;
    color: #50b9fe;
    background-color: #fff;
}

input {
    width: 200px;
    height: 40px;
    border-radius: 20px;
}
</style>