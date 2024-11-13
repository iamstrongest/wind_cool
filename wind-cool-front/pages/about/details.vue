<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-26 11:06:32
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2023-08-26 11:18:15
 * @FilePath: \nuxt\nuxt-test1\pages\user\[id]\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
    <div class="container">
        <span>详情列表</span>
        <div>
            <NuxtPage></NuxtPage>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: auto;
}
</style>