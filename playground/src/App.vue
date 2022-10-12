<template>
  <div>
    <ConfigProvider>
      <DefaultLayout>
        Hello, nanta-ui example project.
      </DefaultLayout>
    </ConfigProvider>
  </div>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue';
import { AppProvider } from '/@/components/Application';
import DefaultLayout from './layouts/default.vue';
// Listening to page changes and dynamically changing site titles

</script>
