<template>
  <BasicTitle :helpMessage="helpMessage">
    {{ title }}
  </BasicTitle>
</template>

<script lang="ts" setup>
import BasicTitle from '../../basic/BasicTitle.vue';
import type { PropType } from 'vue';

const props = defineProps({
  helpMessage: {
    type: [String, Array] as PropType<string | string[]>,
  },
  title: { type: String },
})
const emits = defineEmits(['dblclick'])
</script>
