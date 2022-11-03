<template>
  <div>
    <slot name="insertFooter"></slot>
    <a-button v-bind="cancelButtonProps" @click="handleCancel" v-if="showCancelBtn">
      {{ cancelText }}
    </a-button>
    <slot name="centerFooter"></slot>
    <a-button :type="okType" @click="handleOk" :loading="confirmLoading" v-bind="okButtonProps" v-if="showOkBtn">
      {{ okText }}
    </a-button>
    <slot name="appendFooter"></slot>
  </div>
</template>
<script lang="ts" setup>
import { basicProps } from '../types/props';
const props = defineProps(basicProps);
const emits = defineEmits(['ok', 'cancel'])

function handleOk(e: Event) {
  emits('ok', e);
}

function handleCancel(e: Event) {
  emits('cancel', e);
}
</script>
