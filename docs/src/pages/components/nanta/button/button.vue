<template>
    <div class="fbox">
        <div class="fbox-line">
            <NantaButton type="primary">Primary Button</NantaButton>
            <NantaButton>Default Button</NantaButton>
            <NantaButton type="dashed">Dashed Button</NantaButton>
            <NantaButton type="text">Text Button</NantaButton>
            <NantaButton type="link">Link Button</NantaButton>
        </div>
        <div class="fbox-line">
            <NantaButton type="primary" icon="ant-design:delete-outlined">primary</NantaButton>
            <NantaButton type="primary" color="error" icon="ant-design:delete-outlined">Error Color</NantaButton>
            <NantaButton type="primary" color="success" icon="ant-design:delete-outlined">default</NantaButton>
            <NantaButton type="primary" danger icon="ant-design:delete-outlined">danger</NantaButton>
            <NantaButton type="primary" color="red" icon="mdi:post-outline">red</NantaButton>
            <NantaButton type="primary" color="#39a4fd" icon="mdi:post-outline">#39a4fd</NantaButton>
        </div>
        <div class="fbox-line">
            <NantaButton type="text" icon="ant-design:delete-outlined" size="small">small</NantaButton>
            <NantaButton type="primary" size="small" icon="ant-design:delete-outlined">small</NantaButton>
            <NantaButton type="primary" danger icon="ant-design:delete-outlined" size="middle">middle</NantaButton>
            <NantaButton type="primary" icon="ant-design:delete-outlined" size="middle">middle</NantaButton>
            <NantaButton icon="mdi:post-outline" size="large">large</NantaButton>
            <NantaButton type="dashed" icon="mdi:post-outline" size="large">large</NantaButton>
        </div>
        <div class="fbox-line">
            <NantaButton type="primary" icon="ant-design:delete-outlined" ghost>ghost</NantaButton>
            <NantaButton type="dashed" icon="ant-design:delete-outlined" ghost>dashed ghost</NantaButton>
            <NantaButton type="primary" loading>loading</NantaButton>
            <NantaButton type="primary" shape="circle" icon="ic:outline-download"></NantaButton>
            <NantaButton icon="mdi:post-outline" color="#39a4fd" shape="round">round</NantaButton>
            <NantaButton icon="mdi:post-outline" color="#39a4fd" disabled>disabled</NantaButton>
            <NantaButton type="dashed" icon="ant-design:delete-outlined">dashed</NantaButton>
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

.fbox-line .ant-btn {
    margin-right: .5rem;
}
</style>