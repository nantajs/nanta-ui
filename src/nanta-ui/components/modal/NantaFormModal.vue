<template>
  <NantaModal @register="register" @ok="handleOk" @cancel="handleCancel" v-bind="getBindValue">
    <NantaForm @register="registerForm" @submit="handleOk" v-bind="getFormProps" />
  </NantaModal>
</template>
  
<script lang="ts" setup>
import { ref, computed, unref, useAttrs, watch, getCurrentInstance } from 'vue';
import { useForm, FormProps, } from "../form";
import { useModalInner } from '.'
import { Recordable } from '../..'
import type { ModalInnerRecord } from './types/nantaFormModal'
import NantaForm from "../form/NantaForm.vue";
import NantaModal from './NantaModal.vue'
import { nantaFormModalProps } from './types/nantaFormModal'
import type { ReturnFormModalMethods } from "./types/type"

const props = defineProps(nantaFormModalProps);
const getSchemas = computed(() => props.schemas)
const getTitle = ref<string>('')
const recordRef = ref<Recordable>()
const emit = defineEmits(["register", "ok", "cancel", "regmethod"]);
const formProps: FormProps = {
  showActionButtons: false,
}

const getFormProps = computed((): Recordable => ({ ...formProps, ...props }));
const attrs = useAttrs()
const getBindValue = computed((): Recordable => {
  const attr = {
    ...attrs,
    ...unref(props),
    ...unref(props).modalProps,
    title: unref(getTitle)
  };
  return attr;
});

const [registerForm, { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields }] = useForm({
  labelWidth: 100,
  schemas: getSchemas,
})

const [register, innerMethods] = useModalInner(async (data: ModalInnerRecord) => {
  resetFields();
  getTitle.value = data.title;
  recordRef.value = data.record;
  if (data.record) {
    setFieldsValue(data.record);
  }
})

// init
const instance = getCurrentInstance()
if (instance) {
  emit('regmethod', innerMethods)
}

const handleOk = async () => {
  const values = await validateFields();
  // console.log(values);
  emit("ok", values, recordRef.value);
}

const handleCancel = () => {
  const values = getFieldsValue();
  emit("cancel", values, recordRef.value);
}

</script>
  