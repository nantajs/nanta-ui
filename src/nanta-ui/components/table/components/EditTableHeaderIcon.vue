<template>
  <span>
    <slot></slot>
    {{ title }}
    <FormOutlined />
  </span>
</template>
<script lang="ts" setup>
import { FormOutlined } from '@ant-design/icons-vue';
const props = defineProps({ title: { type: String, default: '' } })
</script>
