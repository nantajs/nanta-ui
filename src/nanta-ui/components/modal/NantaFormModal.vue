<template>
  <NantaModal @register="register" @ok="handleOk" @cancel="handleCancel" :title="getTitle">
    <NantaForm @register="registerForm" @submit="handleOk" v-bind="getFormProps" />
  </NantaModal>
</template>
  
<script lang="ts" setup>
import { ref, computed, unref } from 'vue';
import { useForm, FormProps, } from "../form";
import { useModalInner } from '.'
import { Recordable } from '../..'
import type { ModalInnerRecord } from './types/nantaFormModal'
import NantaForm from "../form/NantaForm.vue";
import NantaModal from './NantaModal.vue'
import { nantaFormModalProps } from './types/nantaFormModal'

const props = defineProps(nantaFormModalProps);
const getSchemas = computed(() => props.schemas)
const getTitle = ref<string>('')
const recordRef = ref<Recordable>()
const emit = defineEmits(["register", "ok", "cancel"]);
const isUpdate = ref(true);
const formProps: FormProps = {
  showActionButtons: false,
  colon: true,
}

const getFormProps = computed((): Recordable => ({ ...formProps }));

const [registerForm, { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields }] = useForm({
  labelWidth: 100,
  schemas: getSchemas,
})

const [register] = useModalInner(async (data : ModalInnerRecord) => {
  resetFields();
  getTitle.value = data.title;
  recordRef.value = data.record;
  if (data.record) {
    setFieldsValue(data.record);
  }
})

const handleOk = async () => {
  console.log('ok clicked....')
  const values = await validateFields();
  console.log(values);
  emit("ok", values, recordRef.value);
}

const handleCancel = async () => {
  console.log('cancel clicked....')
  const values = await validateFields();
  console.log(values);
  emit("cancel", values, recordRef.value);
}

</script>
  