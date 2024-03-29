import type { ExtractPropTypes, VNode } from 'vue';
import type { NamePath, RuleObject } from "ant-design-vue/lib/form/interface";
import { FormProps } from "./formProps";
import { FormItem } from "./formItem";
import type { Recordable, PropType, Fn } from '../../..'
import type { ButtonProps } from '../../button'

export type FieldMapToTime = [string, [string, string], string?][];

export interface FormActionType {
  appendSchemaByField: (
    schema: FormSchema,
    prefixField: string | undefined,
    first?: boolean | undefined
  ) => Promise<void>;
  clearValidate: (name?: string | string[]) => Promise<void>;
  getFieldsValue: () => Recordable;
  resetFields: () => Promise<void>;
  removeSchemaByFiled: (field: string | string[]) => Promise<void>;
  setFieldsValue: <T>(values: Recordable) => Promise<void>;
  setProps: (formProps: Partial<FormProps>) => Promise<void>;
  resetSchema: (
    data: Partial<FormSchema> | Partial<FormSchema>[]
  ) => Promise<void>;
  scrollToField: (name: NamePath, options?: ScrollOptions) => Promise<void>;
  submit: () => Promise<void>;
  updateSchema: (
    data: Partial<FormSchema> | Partial<FormSchema>[]
  ) => Promise<void>;
  validateFields: (nameList?: NamePath[]) => Promise<any>;
  validate: (nameList?: NamePath[]) => Promise<any>;
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

export interface RenderCallbackParams {
  schema: FormSchema;
  values: Recordable;
  model: Recordable;
  field: string;
}

export type Rule = RuleObject & {
  trigger?: 'blur' | 'change' | ['change', 'blur'];
};

export interface HelpComponentProps {
  maxWidth: string;
  // Whether to display the serial number
  showIndex: boolean;
  // Text list
  text: any;
  // colour
  color: string;
  // font size
  fontSize: string;
  icon: string;
  absolute: boolean;
  // Positioning
  position: any;
}

export interface FormSchema {
  changeEvent?: string;
  colProps?: Partial<ColEx>;
  colSlot?: string;
  component: ComponentType;
  componentProps?: ((opt: { schema: FormSchema; formActionType: FormActionType; formModel: Recordable }) => Recordable) | object;
  defaultValue?: any;
  disabledLabelWidth?: boolean;
  dynamicRules?: (renderCallbackParams: RenderCallbackParams) => Rule[];
  field: string;
  helpMessage?: string | string[] | ((renderCallbackParams: RenderCallbackParams) => string | string[]);
  helpComponentProps?: Partial<HelpComponentProps>;
  itemProps?: Partial<FormItem>;
  ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  ifHideLabel?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  label: string;
  labelWidth?: string | number;
  placeholder?: string;
  required?: boolean;
  renderColContent?: (renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string;
  renderComponentContent?: string;
  // Check whether the information is added to the label
  rulesMessageJoinLabel?: boolean;
  rules?: Rule[];
  show?: boolean;
  slot?: string;
  suffix?: string | number | ((values: RenderCallbackParams) => string | number);
  subLabel?: string;
  render?: (renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string;
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
  | "ApiTransfer"
  | "Label";
