<template>
  <div @click="onCellClick">
    <template v-for="(action, index) in getActions" :key="`${index}-${action.label}`">      
      <Tooltip v-if="action.tooltip" v-bind="getTooltip(action.tooltip)">
        <PopConfirmButton v-bind="action">
          <Icon :icon="action.iconName" :class="{ 'mr-1': !!action.label }" v-if="action.iconName" :color="action.color"/>
          <template v-if="action.label">{{ action.label }}</template>
        </PopConfirmButton>
      </Tooltip>
      <PopConfirmButton v-else v-bind="action">
        <Icon :icon="action.iconName" :class="{ 'mr-1': !!action.label }" v-if="action.iconName" :color="action.color"/>
        <template v-if="action.label">{{ action.label }}</template>
      </PopConfirmButton>
      <Divider type="vertical" class="action-divider" v-if="divider && index < getActions.length - 1" />
    </template>
</div>
</template>
<script lang="ts" setup>
import { PropType, computed, toRaw, unref } from 'vue';
import { Divider, Tooltip, TooltipProps, Button } from 'ant-design-vue';
import Icon from '../../icon';
import { ActionItem, ActionType } from '../types/tableAction';
import type { TableActionType } from '../types/table';
import { propTypes } from '../../../utils/propTypes';
import { omit, isBoolean, isFunction, isString } from 'lodash-es';
import { useTableContext } from '../hooks/useTableContext';
import type { ButtonType, SizeType } from '../../button/types/button'
import PopConfirmButton from '../../button/PopConfirmButton.vue'

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

let table: Partial<TableActionType> = {};
if (!props.outside) {
  table = useTableContext();
}

function isIfShow(action: ActionItem): boolean {
  const ifShow = action.ifShow;

  let isIfShow = true;

  if (isBoolean(ifShow)) {
    isIfShow = ifShow;
  }
  if (isFunction(ifShow)) {
    isIfShow = ifShow(action);
  }
  return isIfShow;
}

const getActions = computed(() => {
  return (toRaw(props.actions) || [])
    .filter(action => {
      return isIfShow(action);
    })
    .map((action) => {
      const { popConfirm } = action;
      return {
        type: 'link' as ButtonType,
        size: 'small' as SizeType,
        iconName: action?.icon,
        ...(popConfirm || {}),
        onConfirm: popConfirm?.confirm,
        onCancel: popConfirm?.cancel,
        enable: !!popConfirm,
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

function getTooltip(data: string | TooltipProps): TooltipProps {
  return {
    getPopupContainer: () => unref((table as any)?.wrapRef.value) ?? document.body,
    placement: 'bottom',
    ...(isString(data) ? { title: data } : data),
  };
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
