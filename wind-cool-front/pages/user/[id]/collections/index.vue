<script lang='ts' setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params;
const paramsId = ref(id);
</script>
<template>
    <div>
        <span>用户-- {{ paramsId }}</span>
        <NuxtPage></NuxtPage>
    </div>
</template>

<style scoped></style>