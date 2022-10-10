<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { NantaButton } from '@nanta/ui'
import NantaForm from '../lib/nanta-ui/NantaForm.vue'
import { useForm, FormProps } from '../lib/nanta-ui/form'
import { schemes } from "./nanta/data";

const [
  registerForm,
  { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields },
] = useForm({
  labelWidth: 120,
  schemas: schemes,
  actionColOptions: {
    span: 24,
  },
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="nant-ui: vue3 + antd + vite + ts" />
  <NantaButton>1</NantaButton>
  <NantaForm
    :actionColOptions="{ span: 24 }"
    @register="registerForm"
  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
