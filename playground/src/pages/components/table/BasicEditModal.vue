<template>
  <NantaModal @register="register" @ok="handleOk" @cancel="handleCancel" :title="getTitle">
    <NantaForm @register="registerForm" @submit="handleOk" v-bind="getFormProps" />
  </NantaModal>
</template>

<script lang="ts" setup>
import { ref, computed, unref } from 'vue';
import { useModalInner } from "/~/modal";
import { useForm, FormProps } from "/~/form";
import NantaForm from "/~/NantaForm.vue";
import { schemes } from "./data";
import NantaModal from "/~/NantaModal.vue"
const emit = defineEmits(["register", "ok", "cancel"]);
const isUpdate = ref(true);
const formProps: FormProps = {
  showActionButtons: false,
  colon: true,
}

const getFormProps = computed((): Recordable => ({ ...formProps }));

const [registerForm, { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields }] = useForm({
  labelWidth: 100,
  schemas: schemes,
})

const [register, { closeModal }] = useModalInner(async data => {
  resetFields();
  isUpdate.value = !!data?.isUpdate;
  console.log(data);
  if (data.record) {
    setFieldsValue(data.record);
  }
})

const getTitle = computed(() => (!unref(isUpdate) ? 'Create New' : 'Edit'));

const handleOk = async (e) => {
  const values = await validateFields();
  console.log(values);
  emit("ok", e);
  closeModal();
}

const handleCancel = (e) => {
  emit("cancel", e);
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
</script>
