import { ButtonProps } from 'ant-design-vue/es/button/buttonTypes';
import { TooltipProps } from 'ant-design-vue/es/tooltip/Tooltip';
import { Fn, Recordable } from '../../../../main';

export interface ActionType {
  actions: ActionItem[],
  ifShow?: boolean | ((action: ActionItem, record: Recordable) => boolean);
}

export interface ActionItem extends ButtonProps {
  color?: 'success' | 'error' | 'warning';
  disabled?: boolean;
  divider?: boolean;
  icon?: string;
  // 业务控制是否显示
  ifShow?: boolean | ((action: ActionItem) => boolean);
  label?: string;
  onClick?: Fn;
  popConfirm?: PopConfirm;
  tooltip?: string | TooltipProps;
}

export interface PopConfirm {
  title: string;
  okText?: string;
  cancelText?: string;
  confirm: Fn;
  cancel?: Fn;
  icon?: string;
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'
    | 'bottomLeft'
    | 'bottomRight';
}