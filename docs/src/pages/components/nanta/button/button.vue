<template>
    <div class="fbox">
        <div class="fbox-line">
            <NantaButton icon="ant-design:delete-outlined" color="error">Error Color</NantaButton>
            <NantaButton type="primary" color="success" icon="ant-design:delete-outlined">primary</NantaButton>
            <NantaButton type="primary" danger icon="ant-design:delete-outlined" color="warning">warning</NantaButton>
            <NantaButton icon="mdi:post-outline" color="red">red</NantaButton>
            <NantaButton icon="mdi:post-outline" color="error">#39a4fd</NantaButton>
            <NantaButton icon="mdi:post-outline" color="#39a4fd">#39a4fd</NantaButton>
        </div>
        <div class="fbox-line">
            <NantaButton icon="ant-design:delete-outlined" color="error">Error Color</NantaButton>
            <NantaButton type="primary" color="success" icon="ant-design:delete-outlined">primary</NantaButton>
            <NantaButton type="primary" danger icon="ant-design:delete-outlined" color="warning">warning</NantaButton>
            <NantaButton icon="mdi:post-outline" color="red">red</NantaButton>
            <NantaButton icon="mdi:post-outline" color="#39a4fd" shape="round">round</NantaButton>
            <NantaButton icon="mdi:post-outline" color="#39a4fd" disabled>disabled</NantaButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon, NantaButton } from "/~/main";


</script>

<style scoped>
.fbox {
    display: grid;
    grid-gap: 1rem;
    margin: 0 auto;
    width: 100%;
}

.fbox-line {
    display: flex;
    margin-right: 1rem;
}
</style>