<template>
  <a-layout-header class="header">
    <div class="logo" style="font-size: x-large; color: azure">
      <NuxtLink to="/" aria-label="Back home">
        <img src="/favicon.ico" class="nanta-logo" /> Nanta
      </NuxtLink>
    </div>
    <a-menu
      v-model="selectedKeys"
      theme="dark"
      mode="horizontal"
      @select="onSelect"
      :style="{ lineHeight: '64px', fontSize: 'large' }"
    >
      <a-menu-item v-for="item in navItems" :key="item.key">{{ item.name }}</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { Nav } from "../../types/type";
import { PropType } from "~~/types/global";

defineProps({
  navItems: Array as PropType<Array<Nav>>,
  selectedKeys: Array as PropType<Array<string>>,
});

const onSelect = ({ item, key, selectedKeys }) => {
  console.log("selectd");
  console.log(item);
};
</script>

<style scoped>
.logo {
  float: left;
  width: 150px;
  height: 31px;
  /*background: rgba(255, 255, 255, 0.3);*/
}

.site-layout-background {
  background: #fff;
}

.nanta-logo {
  height: 60px;
  margin-bottom: 10px;
}
</style>
