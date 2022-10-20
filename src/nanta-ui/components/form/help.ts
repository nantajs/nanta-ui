import type { ComponentType } from './index'
import type { ValidationRule } from 'ant-design-vue/lib/form/Form';

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
  rule: ValidationRule,
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