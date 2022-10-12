<template>
  <div>
    <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm" @submit="handleSubmit"
      @reset="handleReset" />
  </div>
</template>

<script setup lang="ts">
import { NantaButton, NantaForm, useForm, FormProps, Recordable } from '@nanta/ui'
import { schemes } from "./data";
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
    email: "nanta-ui@nantajs.dev",
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
