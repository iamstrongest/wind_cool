<script lang='ts' setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { serach } = route.query;
const detalisId = ref(serach);
</script>
<template>
    <div>
        <span>详情列表</span>
        <div>详情-- {{ detalisId }}</div>
    </div>
</template>

<style scoped></style>