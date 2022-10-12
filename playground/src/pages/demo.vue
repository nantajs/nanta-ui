<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '../components/HelloWorld.vue'
import { NantaButton, NantaForm, useForm, FormProps, Recordable } from '@nanta/ui'
import { schemes } from "../nanta/data";
import { computed } from "vue";

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

const customizeResetFn = (): Promise<void> => {
  console.log("here is a customize resetFn called!");
  setFieldsValue({
    age: 0,
    email: "nanta@nantajs.dev",
    name: "Nanta",
  });
  return new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const formProps: FormProps = {
  resetFn: customizeResetFn,
  colon: true,
};

const getFormProps = computed((): Recordable => ({ ...formProps }));

const handleSubmit = (values: any) => {
  console.log("values", values);
  console.log("handleSubmit btn clicked!");
};

const handleReset = () => {
  console.log("handleReset but click");
};

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
  <HelloWorld msg="nant-ui playground" />
  <NantaButton>1</NantaButton>
  <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm" @submit="handleSubmit"
    @reset="handleReset" />
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
