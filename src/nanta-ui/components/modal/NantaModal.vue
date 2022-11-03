<template>
  <Modal v-bind="getBindValue" @ok="handleOk" @cancel="handleCancel">
    <template #closeIcon v-if="!$slots.closeIcon">
      <ModalClose :canFullscreen="getProps.canFullscreen" :fullScreen="fullScreenRef" @cancel="handleCancel"
        @fullscreen="handleFullScreen" />
    </template>

    <template #title v-if="!$slots.title">
      <ModalHeader :helpMessage="getProps.helpMessage" :title="getMergeProps.title" @dblclick="handleTitleDbClick" />
    </template>

    <template #footer v-if="!$slots.footer">
      <ModalFooter v-bind="getBindValue" @ok="handleOk" @cancel="handleCancel">
        <template #[item]="data" v-for="item in Object.keys($slots)">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
      </ModalFooter>
    </template>

    <ModalWrapper :useWrapper="getProps.useWrapper" :footerOffset="wrapperFooterOffset" :fullScreen="fullScreenRef"
      ref="modalWrapperRef" :loading="getProps.loading" :loading-tip="getProps.loadingTip"
      :minHeight="getProps.minHeight" :height="getWrapperHeight" :visible="visibleRef"
      :modalFooterHeight="footer !== undefined && !footer ? 0 : undefined"
      v-bind="omit(getProps.wrapperProps, 'visible', 'height', 'modalFooterHeight')" @ext-height="handleExtHeight"
      @height-change="handleHeightChange">
      <slot></slot>
    </ModalWrapper>
  </Modal>
</template>

<script lang="ts" setup>
import { deepMerge } from '../../utils/util'
import { ModalMethods, ModalProps } from './types/type'
import type { Nullable, Recordable } from "../..";
import { omit } from 'lodash-es'
import { toRef, ref, unref, getCurrentInstance, computed, useAttrs, watch, watchEffect, nextTick } from 'vue'
import { useFullScreen } from './hooks/useModalFullScreen'
import Modal from './components/Modal';
import ModalWrapper from './components/ModalWrapper.vue';
import ModalClose from './components/ModalClose.vue';
import ModalFooter from './components/ModalFooter.vue';
import ModalHeader from './components/ModalHeader.vue';
import { basicProps } from './types/props';
const props = defineProps(basicProps);

const visibleRef = ref(false)
const propsRef = ref<Partial<ModalProps> | null>(null)
const modalWrapperRef = ref<any>(null)
// modal   Bottom and top height
const extHeightRef = ref(0);
const attrs = useAttrs()

const emit = defineEmits(['register', 'ok', 'cancel', 'height-change', 'visible-change', 'update:visible'])
function setModalProps(props: Partial<ModalProps>): void {
  // Keep the last setModalProps
  propsRef.value = deepMerge(unref(propsRef) || ({} as any), props)
  if (Reflect.has(props, 'visible')) {
    visibleRef.value = !!props.visible
  }

  if (Reflect.has(props, 'defaultFullscreen')) {
    fullScreenRef.value = !!props.defaultFullscreen;
  }
}

const modalMethods: ModalMethods = {
  setModalProps,
  emitVisible: undefined,
  redoModalHeight: () => {
    nextTick(() => {
      if (unref(modalWrapperRef)) {
        (unref(modalWrapperRef) as any).setModalHeight();
      }
    });
  },
}

const getMergeProps = computed((): Recordable => {
  return {
    ...props,
    ...(unref(propsRef) as any),
  };
});

const { handleFullScreen, getWrapClassName, fullScreenRef } = useFullScreen({
  modalWrapperRef,
  extHeightRef,
  wrapClassName: toRef(getMergeProps.value, 'wrapClassName'),
});

// modal component does not need title and origin buttons
const getProps = computed((): Recordable => {
  const opt = {
    ...unref(getMergeProps),
    visible: unref(visibleRef),
    okButtonProps: undefined,
    cancelButtonProps: undefined,
    title: undefined,
  };
  return {
    ...opt,
    wrapClassName: unref(getWrapClassName),
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

function handleExtHeight(height: number) {
  extHeightRef.value = height;
}

function handleTitleDbClick(e: any) {
  if (!props.canFullscreen) return;
  e.stopPropagation();
  handleFullScreen(e);
}

function handleHeightChange(height: string) {
  emit('height-change', height);
}

const getWrapperHeight = computed(() => {
  if (unref(fullScreenRef)) return undefined;
  return unref(getProps).height;
});

watchEffect(() => {
  visibleRef.value = !!props.visible;
  fullScreenRef.value = !!props.defaultFullscreen;
});

watch(
  () => unref(visibleRef),
  v => {
    emit('visible-change', v);
    emit('update:visible', v);
    instance && modalMethods.emitVisible?.(v, instance.uid);
    nextTick(() => {
      if (props.scrollTop && v && unref(modalWrapperRef)) {
        (unref(modalWrapperRef) as any).scrollTop();
      }
    });
  },
  {
    immediate: false,
  }
);

</script>
