<template>
  <a-col v-if="showActionButtons" v-bind="getActionColOptions">
    <div style="width: 100%" :style="{ textAlign: getActionColOptions.style.textAlign }">
      <slot name="resetBefore" />
      <a-button
        v-if="showResetButton"
        type="default"
        style="margin-left: .5rem;"
        v-bind="getResetBtnOptions"
        @click="resetAction"
      >
        {{ getResetBtnOptions.text }}
      </a-button>
      <slot name="submitBefore" />

      <a-button
        v-if="showSubmitButton"
        type="primary"
        style="margin-left: .5rem;"
        v-bind="getSubmitBtnOptions"
        @click="submitAction"
      >
        {{ getSubmitBtnOptions.text }}
      </a-button>
    </div>
  </a-col>
</template>

<script lang="ts" setup>
import { Form, Col } from 'ant-design-vue'
import { propTypes } from '../../../utils/propTypes'
import type { PropType } from '../../..'
import type { ColEx, ButtonOptions } from '../types/type'
import { computed } from 'vue'
const props = defineProps({
  actionColOptions: {
    type: Object as PropType<Partial<ColEx>>,
    default: () => ({})
  },
  actionSpan: propTypes.number.def(6),
  resetButtonOptions: {
    type: Object as PropType<ButtonOptions>,
    default: () => ({})
  },
  showActionButtons: propTypes.bool.def(true),
  showResetButton: propTypes.bool.def(true),
  showSubmitButton: propTypes.bool.def(true),
  submitButtonOptions: {
    type: Object as PropType<ButtonOptions>,
    default: () => ({})
  },
  resetAction: Function as PropType<() => Promise<void>>,
  submitAction: Function as PropType<() => Promise<void>>
})

const getActionColOptions = computed(() => {
  const { actionSpan: span, actionColOptions } = props
  const actionColOpt: Partial<ColEx> = {
    style: { textAlign: 'right' },
    span: 4,
    ...actionColOptions
  }
  return actionColOpt
})

const getResetBtnOptions = computed((): ButtonOptions => {
  return Object.assign(
    {
      text: 'Reset'
    },
    props.resetButtonOptions
  )
})

const getSubmitBtnOptions = computed(() => {
  return Object.assign(
    {
      text: 'Submit'
    },
    props.submitButtonOptions
  )
})
</script>
