<script lang='ts' setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const glboalStore = useGlboalStore();
const route = useRoute();
const { id } = route.params;
const userinfo = ref();
useHead({
    title: "个人信息",
})
onMounted(async () => {
    const data = await glboalStore.getUserinfo();
    userinfo.value = data;
    console.log(userinfo.value);
})

</script>
<template>
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
</template>

<style scoped>
.detail-container {
    flex: 1;
    min-height: 90vh;
    display: flex;
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