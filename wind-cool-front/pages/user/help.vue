<script lang='ts' setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params;
const paramsId = ref(id);
</script>
<template>
    <div>
        帮助中心
    </div>
</template>

<style scoped>
a {
    margin: 10px;
}
</style>