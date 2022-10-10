import type { CSSProperties, PropType } from 'vue';
import { FormSchema, FieldMapToTime, ColEx } from "./type"
import { propTypes } from "../../utils/propTypes";
import type { RowProps } from 'ant-design-vue/lib/grid/Row';
import type { Fn, Recordable } from '../..'

export interface FormProps {
  actionColOptions?: Partial<ColEx>;
  autoSubmitOnEnter?: boolean;
  baseRowStyle?: CSSProperties;
  colon?: boolean;
  disabled?: boolean;
  fieldMapToTime?: FieldMapToTime;
  layout?: 'vertical' | 'inline' | 'horizontal';
  // Col configuration for the entire form
  labelCol?: Partial<ColEx>;
  // The width of all items in the entire form
  labelWidth?: number | string;
  model?: Recordable;
  rowProps?: RowProps;
  resetFn?: () => Promise<void>;
  schemas?: FormSchema[];
  showActionButtons?: boolean;
  size?: 'default' | 'small' | 'large';
  submitFn?: () => Promise<void>;
  transformDateFunc?: (date: any) => string;
  // Col configuration for the entire form
  wrapperCol?: Partial<ColEx>;
}

export const formPorps = {
  actionColOptions: Object as PropType<Partial<ColEx>>,
  autoSubmitOnEnter: propTypes.bool.def(false),
  baseRowStyle: {
    type: Object as PropType<CSSProperties>,
  },
  colon: propTypes.bool,
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
  resetFn: Function as PropType<() => Promise<void>>,
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
  },
  showActionButtons: propTypes.bool.def(true),
  size: propTypes.oneOf(['default', 'small', 'large']).def('default'),
  submitFn: Function as PropType<() => Promise<void>>,
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
  setFormModel:(key: string, value: any) => void
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
  }
}