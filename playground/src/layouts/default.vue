<template>
  <a-layout>
    <NavBar :navItems="navItems" :selectedKeys="selectedKeys" />
    <a-layout>
      <SideBar :sideMenus="sideMenus" @menu-selected="onMenuSelected" :selectedKeys="selectedKeys"
        :openKeys="openKeys" />
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{ item }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <slot />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <Footer />
  </a-layout>
</template>

<script lang="ts" setup>
import { Menu, Nav } from "./types/type";
import NavBar from "./default/components/NavBar.vue";
import SideBar from "./default/components/SideBar.vue";
import Footer from "./default/components/Footer.vue";
import { makeid } from "./default/index";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getAsyncMenus } from "./menu";

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

const breadcrumbList = ref<string[]>([]);
const sideMenus = await getAsyncMenus();
const path = useRoute().path;
console.log(path); // path 路径

function iteratorMenu(
  item: Menu,
  fn: (item: Menu, keyPath?: string[]) => void,
  keyPath?: string[]
) {
  fn(item, keyPath);
  if (item.children && item.children.length > 0) {
    item.children.forEach((i) => {
      iteratorMenu(i, fn, item.keyPath);
    });
  }
}

const getKeyAttributeMenuMap = (() => {
  const res = {};

  // make sure each menu has key attribute else random makeid!
  sideMenus.forEach((item) => {
    iteratorMenu(
      item,
      (item, keyPath) => {
        if (!item.key || item.key.length == 0) {
          item.key = makeid(5);
        }
        item.keyPath = [];
        if (keyPath && keyPath.length > 0) {
          keyPath.forEach((i) => {
            item.keyPath.push(i);
          });
        }
        item.keyPath.push(item.key);
      },
      []
    );
  });

  console.log(sideMenus);

  sideMenus.forEach((item) => {
    iteratorMenu(item, (item) => {
      const { name, path } = item;
      res[item.key] = { name, path };
    });
  });

  return res;
})();

function findKeyPath(path: string) {
  let res = null;
  sideMenus.forEach((item) => {
    iteratorMenu(item, (item) => {
      if (item.path === path) {
        res = item.keyPath;
      }
    });
  });
  return res;
}

const keyPath = findKeyPath(path);
console.log(keyPath);
if (keyPath && keyPath.length > 0) {
  const leng = keyPath.length;
  selectedKeys.value = [keyPath[leng - 1]];
  openKeys.value = keyPath.slice(0, leng - 1);
}

function initBreadcrumbList(keyPath: string[]) {
  // init it!
  breadcrumbList.value = [];
  if (keyPath && keyPath.length > 0) {
    for (let i = 0; i < keyPath.length; i++) {
      if (getKeyAttributeMenuMap[keyPath[i]]) {
        breadcrumbList.value.push(getKeyAttributeMenuMap[keyPath[i]].name);
      }
    }
  }
}

initBreadcrumbList(keyPath);

const onMenuSelected = (item) => {
  initBreadcrumbList(item.keyPath);
};

const navItems : Nav[]= [
  {
    name: "Nav-1",
    key: "1",
  },
  {
    name: "Nav-2",
    key: "2",
  },
  {
    name: "Nav-3",
    key: "3",
  },
];
</script>

<style>
.site-layout-background {
  background: #fff;
}
</style>
