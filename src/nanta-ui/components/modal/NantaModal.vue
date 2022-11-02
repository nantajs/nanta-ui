<template>
  <a-modal v-bind="getBindValue" @ok="handleOk" @cancel="handleCancel">
    <slot />
  </a-modal>
</template>

<script lang="ts" setup>
import { deepMerge } from '../../utils/util'
import { ModalMethods, ModalProps } from './types/type'
import type { Nullable, Recordable } from "../..";
import { omit } from 'lodash-es'
import { ref, unref, getCurrentInstance, computed, useAttrs, } from 'vue'
const visibleRef = ref(false)
const propsRef = ref<Partial<ModalProps> | null>(null)
const modalWrapperRef = ref<any>(null)

const props = defineProps({
  visible: { type: Boolean, default: false },
  title: { type: String, default: '' }
})

const attrs = useAttrs()

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

const getMergeProps = computed((): Recordable => {
  return {
    ...props,
    ...(unref(propsRef) as any),
  };
});

const getBindValue = computed((): Recordable => {
  const attr = {
    ...attrs,
    ...unref(getMergeProps),
    visible: unref(visibleRef),
  };
  return attr;
});

// init
const instance = getCurrentInstance()
if (instance) {
  emit('register', modalMethods, instance.uid)
}

// OK Button
const handleOk = (e: MouseEvent) => {
  emit('ok', e)
}

// Cancel Button
const handleCancel = (e: any) => {
  visibleRef.value = false
  emit('cancel', e)
}

</script>
