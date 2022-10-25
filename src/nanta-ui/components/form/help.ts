import type { ComponentType } from './index'
import type { Rule } from "ant-design-vue/lib/form"
import { isNumber } from "lodash-es"

export function createPlaceholderMessage(component: ComponentType) {
  if (component.includes('Input') || component.includes('Complete')) {
    return 'Please enter';
  }
  if (component.includes('Picker')) {
    return 'Please choose';
  }
  if (
    component.includes('Select') ||
    component.includes('Cascader') ||
    component.includes('Checkbox') ||
    component.includes('Radio') ||
    component.includes('Switch')
  ) {
    // return `请选择${label}`;
    return 'Please choose';
  }
  return '';
}

export function setComponentRuleType(
  rule: Rule,
  component: ComponentType,
  valueFormat: string,
) {
  if (['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'].includes(component)) {
    rule.type = valueFormat ? 'string' : 'object';
  } else if (['RangePicker', 'Upload', 'CheckboxGroup', 'TimePicker'].includes(component)) {
    rule.type = 'array';
  } else if (['InputNumber'].includes(component)) {
    rule.type = 'number';
  }
}

export function handleInputNumberValue(component?: ComponentType, val?: any) {
  if (!component) { return val }
  if (
    ['Input', 'InputPassword', 'InputSearch', 'InputTextArea'].includes(
      component
    )
  ) {
    return val && isNumber(val) ? `${val}` : val
  }
  return val
}