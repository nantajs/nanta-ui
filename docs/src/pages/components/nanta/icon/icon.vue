<template>
    
    <div class="fbox-line">
        <div>
            <Icon icon="ant-design:delete-outlined" color="error" size="25" /><span style="font-size:25px">error</span>
        </div>
        <div>
            <Icon icon="ant-design:delete-outlined" color="success" /><span>success</span>
        </div>
        <div>
            <Icon icon="ant-design:delete-outlined" color="warning" /><span>warning</span>
        </div>
        <div>
            <Icon icon="ant-design:delete-outlined" color="red" /><span>red</span>
        </div>
        <div>
            <Icon icon="ant-design:delete-outlined" color="#39a4fd" /><span>#39a4fd</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "/~/main";

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

.fbox-line div {
    margin-right: .5rem;
}
</style>