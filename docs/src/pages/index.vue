<template>
    <div class="container">
        <span style="font-size: 2.5rem">
            nanta-ui: Ant-design based UI framework.
        </span>
        <div class="fbox-line">
            <div v-for="item in menus" :key="item.key">
                <NantaButton type="dashed" :icon="item.icon">
                    <router-link :to="item.path" style="margin-left: .5rem">{{item.name}}</router-link>
                </NantaButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getMenus, getMenuList } from "/@/layouts/menu"
import { Menu } from '/@/layouts/types/type'
import { Icon, NantaButton } from "/~/main";

const menus = getMenuList(getMenus());
</script>

<style scoped>
.fbox-line {
    display: flex;
    margin-right: 1rem;
}

.fbox-line div {
    margin-right: .5rem;
}
</style>
