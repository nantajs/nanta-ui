<template>
  <BasicTitle :class="prefixCls" v-if="getTitle" :helpMessage="helpMessage">
    {{ getTitle }}
  </BasicTitle>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue';
import BasicTitle from '../../basic/BasicTitle.vue';
import { isFunction } from 'lodash-es';
import { Recordable } from '../../..'

const props = defineProps({
  title: {
    type: [Function, String] as PropType<string | ((data: Recordable) => string)>,
  },
  getSelectRows: {
    type: Function as PropType<() => Recordable[]>,
  },
  helpMessage: {
    type: [String, Array] as PropType<string | string[]>,
  },
})

const prefixCls = 'basic-table-title';

const getTitle = computed(() => {
  const { title, getSelectRows = () => { } } = props;
  let tit = title;

  if (isFunction(title)) {
    tit = title({
      selectRows: getSelectRows(),
    });
  }
  return tit;
});

</script>
<style lang="less">
@prefix-cls: ~'nanta-basic-table-title';

.@{prefix-cls} {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
