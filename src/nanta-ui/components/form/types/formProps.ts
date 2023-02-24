import type { CSSProperties, PropType } from 'vue';
import { FormSchema, FieldMapToTime, ColEx, FormActionType } from './type';
import { propTypes } from '../../../utils/propTypes';
import type { RowProps } from 'ant-design-vue/lib/grid/Row';
import type { Fn, Recordable } from '../../..'
import type { ButtonOptions } from '../../button'

export interface FormProps {
  actionColOptions?: Partial<ColEx>;
  autoSubmitOnEnter?: boolean;
  baseColProps?: Partial<ColEx>;
  baseRowStyle?: CSSProperties;
  colon?: boolean;
  compact?: boolean;
  disabled?: boolean;
  fieldMapToTime?: FieldMapToTime;
  layout?: 'vertical' | 'inline' | 'horizontal';
  // Col configuration for the entire form
  labelCol?: Partial<ColEx>;
  // The width of all items in the entire form
  labelWidth?: number | string;
  model?: Recordable;
  rowProps?: RowProps;
  resetButtonOptions?: Partial<ButtonOptions>;
  resetFn?: () => Promise<void>;
  // Check whether the information is added to the label
  rulesMessageJoinLabel?: boolean;
  schemas?: FormSchema[];
  showActionButtons?: boolean;
  showResetButton?: boolean;
  showSubmitButton?: boolean;
  size?: 'default' | 'small' | 'large';
  submitOnReset?: boolean;
  submitButtonOptions?: Partial<ButtonOptions>;
  submitFn?: () => Promise<void>;
  transformDateFunc?: (date: any) => string;
  // Col configuration for the entire form
  wrapperCol?: Partial<ColEx>;
}

export const formProps = {
  actionColOptions: Object as PropType<Partial<ColEx>>,
  autoSubmitOnEnter: propTypes.bool.def(false),
  baseRowStyle: {
    type: Object as PropType<CSSProperties>,
  },
  baseColProps: {
    type: Object as PropType<Partial<ColEx>>,
  },
  colon: propTypes.bool,
  compact: propTypes.bool,
  disabled: propTypes.bool,
  fieldMapToTime: {
    type: Array as PropType<FieldMapToTime>,
    default: () => [],
  },
  layout: propTypes.oneOf(['horizontal', 'vertical', 'inline']).def('horizontal'),
  labelCol: Object as PropType<Partial<ColEx>>,
  // 标签宽度  固定宽度
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  model: {
    type: Object as PropType<Recordable>,
    default: {},
  },
  rowProps: Object as PropType<RowProps>,
  resetButtonOptions: {
    type: Object as PropType<ButtonOptions>,
  },
  resetFn: Function as PropType<() => Promise<void>>,
  rulesMessageJoinLabel: propTypes.bool.def(true),
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
  },
  showActionButtons: propTypes.bool.def(true),
  showResetButton: propTypes.bool.def(true),
  showSubmitButton: propTypes.bool.def(true),
  size: propTypes.oneOf(['default', 'small', 'large']).def('default'),
  submitButtonOptions: Object as PropType<ButtonOptions>,
  submitFn: Function as PropType<() => Promise<void>>,
  submitOnReset: propTypes.bool,
  transformDateFunc: {
    type: Function as PropType<Fn>,
    default: (date: any) => {
      return date?.format?.('YYYY-MM-DD HH:mm:ss') ?? date;
    },
  },
  wrapperCol: Object as PropType<Partial<ColEx>>,
}

export interface FormItemProps {
  allDefaultValues: Recordable,
  schema: FormSchema,
  formProps: FormProps,
  formModel: Recordable,
  setFormModel: (key: string, value: any) => void,
  formActionType: FormActionType,
}

export const formItemPorps = {
  allDefaultValues: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  schema: {
    type: Object as PropType<FormSchema>,
    default: () => ({})
  },
  formProps: {
    type: Object as PropType<FormProps>,
    default: () => ({})
  },
  formModel: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  setFormModel: {
    type: Function as PropType<(key: string, value: any) => void>,
    default: null
  },
  formActionType: {
    type: Object as PropType<FormActionType>,
  },
}