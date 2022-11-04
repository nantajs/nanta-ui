<template>
    <div class="fbox">
        <div class="fbox-line">
            <NantaButton type="primary">Basic Modal</NantaButton>
            <NantaButton>Default Button</NantaButton>
            <NantaButton type="dashed">Dashed Button</NantaButton>
            <NantaButton type="text">Text Button</NantaButton>
            <NantaButton type="link">Link Button</NantaButton>
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