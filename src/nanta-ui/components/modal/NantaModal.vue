<template>
  <a-modal :visible="visibleRef" :title="title" @ok="handleOk" @cancel="handleCancel">
    <slot />
  </a-modal>
</template>

<script lang="ts" setup>
import { deepMerge } from '../../utils/util'
import { ModalMethods, ModalProps } from './type'
import { ref, unref, getCurrentInstance } from 'vue'
const visibleRef = ref(false)
const propsRef = ref<Partial<ModalProps> | null>(null)
const modalWrapperRef = ref<any>(null)

const props = defineProps({
  visible: { type: Boolean, default: false },
  title: { type: String, default: 'Edit' }
})

const emit = defineEmits(['register', 'ok', 'cancel'])
function setModalProps(props: Partial<ModalProps>): void {
  // Keep the last setModalProps
  propsRef.value = deepMerge(unref(propsRef) || ({} as any), props)
  if (Reflect.has(props, 'visible')) {
    visibleRef.value = !!props.visible
  }
}

const modalMethods: ModalMethods = {
  setModalProps,
  emitVisible: undefined
}

// 初始化
const instance = getCurrentInstance()
if (instance) {
  emit('register', modalMethods, instance.uid)
}

// 确认的Button
const handleOk = (e: MouseEvent) => {
  emit('ok', e)
}

// 取消的Button
const handleCancel = (e: any) => {
  visibleRef.value = false
  emit('cancel', e)
}

</script>
