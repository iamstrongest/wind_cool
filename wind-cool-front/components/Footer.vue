<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-26 15:16:52
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 17:21:53
 * @FilePath: \wind-cool\wind-cool-front\components\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { reactive } from "vue"
const info = reactive({
    recordText: "赣ICP备2024047900号-1",
    email: "1309***3**@qq.com"
})
const apps = ref([
    {
        id: 1,
        text: "爱聊",
        href: "https://chat.wind-cool.top"
    },
    {
        id: 2,
        text: "轻量级共享健身",
        href: "https://share.wind-cool.top"
    }
])
function cilckHandle(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('文案已复制！');
        })
        .catch(err => {
            console.error('复制失败:', err);
        });
}
</script>
<template>
    <p>
        <span>友情链接:</span>
        <template v-for="app in apps" :key="app.id">
            <span>
                <a :href="app.href" target="_blank">
                    {{ app.text }}
                </a>
            </span>
        </template>
        <span>
            <a href="javascript:void(0);" @click="cilckHandle(info.email)">
                联系我: {{ info.email }}
            </a>
        </span>
        <span>
            <a href="https://beian.miit.gov.cn/" target="_blank" @click="cilckHandle(info.recordText)">
                {{ info.recordText }}
            </a>
        </span>
    </p>
</template>

<style scoped>
p {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}

p span {
    margin-right: 1.25rem;
}

p span i {
    cursor: pointer;
}

p span a {
    text-decoration: none;
    color: #000;
}
</style>