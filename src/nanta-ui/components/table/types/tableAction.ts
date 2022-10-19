import { ButtonProps } from 'ant-design-vue/es/button/buttonTypes';
import { TooltipProps } from 'ant-design-vue/es/tooltip/Tooltip';
import { Fn, Recordable } from '../../../../main';

export interface ActionType {
  actions: ActionItem[],
  ifShow?: boolean | ((action: ActionItem, record: Recordable) => boolean);
}

export interface ActionItem extends ButtonProps {
  onClick?: Fn;
  label?: string;
  color?: 'success' | 'error' | 'warning';
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  // 业务控制是否显示
  ifShow?: boolean | ((action: ActionItem) => boolean);
  tooltip?: string | TooltipProps;
}
