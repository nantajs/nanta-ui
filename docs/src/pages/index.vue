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
import { getMenus } from "/@/layouts/menu"
import { Menu } from '/@/layouts/types/type'
import { Icon, NantaButton } from "/~/main";

function getMenuList(rootMenus: Menu[]): Menu[] {
    const menuList = [] as Menu[];
    rootMenus.forEach((item: Menu) => {
        if (!item.children || item.children.length == 0) {
            menuList.push(item)
        } else {
            const childMenuList = getMenuList(item.children);
            childMenuList.forEach((item: Menu) => {
                menuList.push(item);
            })
        }

    })
    return menuList;
}

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
