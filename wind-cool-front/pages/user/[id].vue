<!--
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-26 14:49:43
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-16 11:23:29
 * @FilePath: \wind-cool\wind-cool-front\pages\user\[id].vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang='ts' setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const glboalStore = useGlboalStore();
const route = useRoute();
const { id } = route.params;
const userinfo = computed(() => glboalStore.state.userinfo);
useHead({
    title: "个人信息",
})
onMounted(() => {
    userinfo.value = glboalStore.state.userinfo;
})

</script>
<template>
    <div class="user-info">
        <div class="detail-container" v-if="userinfo?.id">
            <img :src="userinfo.avatar" alt="用户头像">
            <div>
                <div>
                    <span>账号:{{ userinfo.userId }}</span>
                    <span>昵称：{{ userinfo.username }}</span>
                </div>
                <div>
                    邮箱：{{ userinfo.email }}
                </div>
                <div>
                    留言： {{ userinfo.description }}
                </div>
            </div>
        </div>
        <div class="user-calendar" v-if="userinfo?.userId">
            <UserCalendar></UserCalendar>
        </div>
    </div>

</template>

<style scoped>
.user-info {
    flex: 1;
    min-height: 90vh;
    display: flex;
}

.user-calendar {
    flex: 1;
}

.detail-container {
    flex: 2;
    justify-content: center;
    align-items: center;
}

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
}

span {
    margin-right: 20px;
}
</style>