<template>
    <div class="container">
        <span style="font-size: 2.5rem">
            nanta-ui: Ant-design based UI framework.
        </span>
        <div class="version-line">
            <span>
                Docs version: <span style="font-size: 1.5rem;color:#faad14">{{ version }} </span>
            </span>
            <span>
                @nanta/ui verson: <span style="font-size: 1.5rem;color:#faad14">{{ nantVersion }}</span>
            </span>
        </div>
        <div class="fbox-line">
            <div v-for="item in menus" :key="item.key">
                <NantaButton type="dashed" :icon="item.icon">
                    <router-link :to="item.path" style="margin-left: .5rem">{{ item.name }}</router-link>
                </NantaButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getMenus, getMenuList } from "/@/layouts/menu"
import { Menu } from '/@/layouts/types/type'
import { Icon, NantaButton } from "/~/main";
import { version, dependencies } from '../../package.json'
const nantVersion = dependencies['@nanta/ui'];
const menus = getMenuList(getMenus());
</script>

<style scoped>
.fbox-line {
    display: flex;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.version-line {
    display: flex;
    margin-right: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
}

.fbox-line div {
    margin-right: .5rem;
}
</style>
