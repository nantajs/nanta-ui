<template>
  <div>
    <ConfigProvider>
      <AppProvider>
        <RouterView />
      </AppProvider>
    </ConfigProvider>
  </div>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue';
import { AppProvider } from '/@/components/Application';
import DefaultLayout from './layouts/default.vue';
</script>
