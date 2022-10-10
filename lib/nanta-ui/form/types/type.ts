import type { ExtractPropTypes } from 'vue';
import type { NamePath, RuleObject } from "ant-design-vue/lib/form/interface";
import { FormProps } from "./formProps";
import { FormItem } from "./formItem";
import type { Recordable, PropType } from '../../types/global'

export type FieldMapToTime = [string, [string, string], string?][];

export interface FormActionType {
  submit: () => Promise<void>;
  setFieldsValue: <T>(values: Recordable) => Promise<void>;
  resetFields: () => Promise<void>;
  getFieldsValue: () => Recordable;
  clearValidate: (name?: string | string[]) => Promise<void>;
  updateSchema: (
    data: Partial<FormSchema> | Partial<FormSchema>[]
  ) => Promise<void>;
  resetSchema: (
    data: Partial<FormSchema> | Partial<FormSchema>[]
  ) => Promise<void>;
  setProps: (formProps: Partial<FormProps>) => Promise<void>;
  removeSchemaByFiled: (field: string | string[]) => Promise<void>;
  appendSchemaByField: (
    schema: FormSchema,
    prefixField: string | undefined,
    first?: boolean | undefined
  ) => Promise<void>;
  validateFields: (nameList?: NamePath[]) => Promise<any>;
  validate: (nameList?: NamePath[]) => Promise<any>;
  scrollToField: (name: NamePath, options?: ScrollOptions) => Promise<void>;
}

type RegisterFn = (formInstance: FormActionType) => void;

export type UseFormReturnType = [RegisterFn, FormActionType];

type ColSpanType = number | string;
export interface ColEx {
  style?: any;
  /**
   * raster number of cells to occupy, 0 corresponds to display: none
   * @default none (0)
   * @type ColSpanType
   */
  span?: ColSpanType;

  /**
   * raster order, used in flex layout mode
   * @default 0
   * @type ColSpanType
   */
  order?: ColSpanType;

  /**
   * the layout fill of flex
   * @default none
   * @type ColSpanType
   */
  flex?: ColSpanType;

  /**
   * the number of cells to offset Col from the left
   * @default 0
   * @type ColSpanType
   */
  offset?: ColSpanType;

  /**
   * the number of cells that raster is moved to the right
   * @default 0
   * @type ColSpanType
   */
  push?: ColSpanType;

  /**
   * the number of cells that raster is moved to the left
   * @default 0
   * @type ColSpanType
   */
  pull?: ColSpanType;

  /**
   * <576px and also default setting, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xs?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥576px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  sm?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥768px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  md?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥992px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  lg?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥1200px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥1600px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xxl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
}

export const buttonProps = {
  color: { type: String, validator: (v: string) => ['error', 'warning', 'success', ''].includes(v) },
  loading: { type: Boolean },
  disabled: { type: Boolean },
  /**
   * Text before icon.
   */
  preIcon: { type: String },
  /**
   * Text after icon.
   */
  postIcon: { type: String },
  /**
   * preIcon and postIcon icon size.
   * @default: 14
   */
  iconSize: { type: Number, default: 14 },
  onClick: { type: Function as PropType<(...args: any) => any>, default: null },
};

declare type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
export type ButtonOptions = Partial<ButtonProps> & { text: string };

export interface FormSchema {
  changeEvent?: string;
  component: ComponentType;
  defaultValue?: any;
  disabledLabelWidth?: boolean;
  field: string;
  itemProps?: Partial<FormItem>;
  label: string;
  labelWidth?: string | number;
  placeholder?: string;
  required?: boolean;
  show?: boolean;
}

export type ComponentType =
  | "Input"
  | "InputGroup"
  | "InputPassword"
  | "InputSearch"
  | "InputTextArea"
  | "InputNumber"
  | "InputCountDown"
  | "Select"
  | "ApiSelect"
  | "TreeSelect"
  | "ApiTree"
  | "ApiTreeSelect"
  | "ApiRadioGroup"
  | "RadioButtonGroup"
  | "RadioGroup"
  | "Checkbox"
  | "CheckboxGroup"
  | "AutoComplete"
  | "ApiCascader"
  | "Cascader"
  | "DatePicker"
  | "MonthPicker"
  | "RangePicker"
  | "WeekPicker"
  | "TimePicker"
  | "Switch"
  | "StrengthMeter"
  | "Upload"
  | "IconPicker"
  | "Render"
  | "Slider"
  | "Rate"
  | "Divider"
  | "ApiTransfer";
