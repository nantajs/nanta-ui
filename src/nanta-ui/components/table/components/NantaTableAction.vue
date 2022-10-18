<template>
  <div @click="onCellClick">
    <template v-for="(action, index) in getActions" :key="`${index}-${action.label}`">
      <Button v-bind="action">
        <Icon :icon="action.iconName" :class="{ 'mr-1': !!action.label }" v-if="action.iconName" />
        <template v-if="action.label">{{ action.label }}</template>
      </Button>
      <Divider type="vertical" class="action-divider" v-if="divider && index < getActions.length - 1" />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed, toRaw, unref } from 'vue';
import { Divider, Tooltip, TooltipProps, Button } from 'ant-design-vue';
import Icon from '../../icon';
import { ActionItem } from '../types/tableAction';
import { propTypes } from '../../../utils/propTypes';
import { omit } from 'lodash-es';

const props = defineProps(
  {
    actions: {
      type: Array as PropType<ActionItem[]>,
      default: null,
    },
    dropDownActions: {
      type: Array as PropType<ActionItem[]>,
      default: null,
    },
    divider: propTypes.bool.def(true),
    outside: propTypes.bool,
    stopButtonPropagation: propTypes.bool.def(false),
  })

const getActions = computed(() => {
  return (toRaw(props.actions) || [])
    .map((action) => {
      return {
        type: 'link',
        size: 'small',
        iconName: action?.icon,
        ...omit(action, 'icon'),  // 去掉icon属性，否则会和antd原生的icon冲突。
      };
    });
});

function onCellClick(e: MouseEvent) {
  if (!props.stopButtonPropagation) return;
  const path = e.composedPath() as HTMLElement[];
  const isInButton = path.find((ele) => {
    return ele.tagName?.toUpperCase() === 'BUTTON';
  });
  isInButton && e.stopPropagation();
}

</script>

<style lang="less">
@prefix-cls: ~'nanta-basic-table-action';

.@{prefix-cls} {
  display: flex;
  align-items: center;

  .action-divider {
    display: table;
  }

  &.left {
    justify-content: flex-start;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }

  button {
    display: flex;
    align-items: center;

    span {
      margin-left: 0 !important;
    }
  }

  button.ant-btn-circle {
    span {
      margin: auto !important;
    }
  }

  .ant-divider,
  .ant-divider-vertical {
    margin: 0 2px;
  }

  .icon-more {
    transform: rotate(90deg);

    svg {
      font-size: 1.1em;
      font-weight: 700;
    }
  }
}
</style>
