<template>
  <div>
    <EditTableHeaderCell v-if="getIsEdit">
      {{ getTitle }}
    </EditTableHeaderCell>
    <span v-else>{{ getTitle }}</span>
    <BasicHelp v-if="getHelpMessage" :text="getHelpMessage" :class="`${prefixCls}__help`" />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { BasicColumn } from '../types/table';
import { computed } from 'vue';
import BasicHelp from '../../help/BasicHelp.vue';
import EditTableHeaderCell from './EditTableHeaderIcon.vue';

const props = defineProps({
  column: {
    type: Object as PropType<BasicColumn>,
    default: () => ({}),
  },
})
const prefixCls = 'basic-table-header-cell';
const getIsEdit = computed(() => !!props.column?.edit);
const getTitle = computed(() => props.column?.customTitle || props.column?.title);
const getHelpMessage = computed(() => props.column?.helpMessage);

</script>
<style lang="less">
@prefix-cls: ~'nanta-basic-table-header-cell';

.@{prefix-cls} {
  &__help {
    margin-left: 8px;
    color: rgb(0 0 0 / 65%) !important;
  }
}
</style>
