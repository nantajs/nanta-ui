<template>
  <div style="width: 100%">
    <div v-if="$slots.headerTop" style="margin: 5px">
      <slot name="headerTop"></slot>
    </div>
    <div style="display:flex;justify-content:space-between">
      <div>
        <slot name="tableTitle" v-if="$slots.tableTitle"></slot>
        <TableTitle :helpMessage="titleHelpMessage" :title="title" v-if="!$slots.tableTitle && title" />
      </div>
      <div>
        <div :class="`${prefixCls}__toolbar`" v-if="$slots.toolbar">
          <slot name="toolbar"></slot>
          <Divider type="vertical" v-if="$slots.toolbar && showTableSetting" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { defineProps } from 'vue';
import { Divider } from 'ant-design-vue';
import TableTitle from './TableTitle.vue';
import { Recordable } from '../../..'

const props = defineProps({
  title: {
    type: [Function, String] as PropType<string | ((data: Recordable) => string)>,
  },
  showTableSetting: {
    type: Boolean,
  },
  titleHelpMessage: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
})

const prefixCls = 'basic-table-header';

</script>
<style lang="less">
@prefix-cls: ~'nanta-basic-table-header';

.@{prefix-cls} {
  &__toolbar {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    >* {
      margin-right: 8px;
    }
  }
}
</style>
