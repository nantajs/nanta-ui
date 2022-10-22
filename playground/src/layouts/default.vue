<template>
  <a-layout>
    <NavBar :navItems="navItems" :selectedKeys="selectedKeys" />
    <a-layout>
      <SideBar :sideMenus="sideMenus" @menu-selected="onMenuSelected" :selectedKeys="selectedKeys"
        :openKeys="openKeys" />
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{
          item
          }}</a-breadcrumb-item>
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
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getMenus } from "./menu";

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

const breadcrumbList = ref<string[]>([]);
const sideMenus = getMenus();
const route = useRoute();
const path = route.path;

console.log("current path=", path);

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
  sideMenus.forEach((item: Menu) => {
    iteratorMenu(
      item,
      (item, keyPath) => {
        if (!item.key || item.key.length == 0) {
          item.key = makeid(5);
        }
        item.keyPath = [];
        if (keyPath && keyPath.length > 0) {
          keyPath.forEach((i) => {
            item.keyPath && item.keyPath.push(i);
          });
        }
        item.keyPath.push(item.key);
      },
      []
    );
  });

  console.log(sideMenus);

  sideMenus.forEach((item: Menu) => {
    iteratorMenu(item, (item) => {
      const { name, path } = item;
      if (item.key) {
        res[item.key] = { name, path };
      }
    });
  });

  return res;
})();

function findKeyPath(path: string) {
  let res: string[] | undefined;
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

function initBreadcrumbList(keyPath: string[] | undefined) {
  if (!keyPath) {
    return;
  }
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

const navItems: Nav[] = [
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
