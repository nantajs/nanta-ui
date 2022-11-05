<template>
  <div>
    <NantaForm @register="registerSearch"></NantaForm>

    <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm" @submit="handleSubmit"
      @reset="handleReset">
      <template #selectA="{ model, field, schema }">
        <a-select :options="optionsA" mode="multiple" v-model:value="model[field]" :placeholder="schema.placeholder"
          allowClear />
      </template>
    </NantaForm>
  </div>
</template>

<script setup lang="ts">
import { NantaButton, NantaForm, useForm, FormProps, Recordable, FormSchema } from '/~/main'
import { schemes } from "./data";
import { computed } from "vue";

const optionsA = [
  {
    label: 'Option1',
    value: 'value_1',
    key: '1',
  },
  {
    label: 'Option2',
    value: 'value_2',
    key: '2',
  },
  {
    label: 'Option3',
    value: 'value_3',
    key: '3',
  },
]

const [
  registerForm,
  { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields },
] = useForm({
  labelWidth: 150,
  schemas: schemes,
  actionColOptions: {
    span: 24,
  },
});

const schemes2: FormSchema[] = [{
  field: 'name',
  label: "Name",
  component: 'Input',
}]

const [registerSearch] = useForm({ labelWidth: 150, schemas: schemes2, layout: 'horizontal' })

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
