import type { Component } from 'vue'
import {
  Input,
  Select,
  Radio,
  Checkbox,
  AutoComplete,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  TimePicker,
  TreeSelect,
  Slider,
  Rate,
  Divider
} from 'ant-design-vue'
import type { ComponentType } from '../index'

import RadioButtonGroup from './RadioButtonGroup.vue';
import NantaLabel from './NantaLabel.vue';
import ApiSelect from './ApiSelect.vue'
/**
 * Component list, register here to setting it in the form
 */

const componentMap = new Map<ComponentType, Component>()

// @ts-ignore
componentMap.set('Input', Input)
componentMap.set('InputGroup', Input.Group)
componentMap.set('InputPassword', Input.Password)
componentMap.set('InputSearch', Input.Search)
componentMap.set('InputTextArea', Input.TextArea)
componentMap.set('InputNumber', InputNumber)
componentMap.set('AutoComplete', AutoComplete)
componentMap.set('Select', Select)
componentMap.set('ApiSelect', ApiSelect);
componentMap.set('TreeSelect', TreeSelect)
componentMap.set('Switch', Switch)
componentMap.set('RadioGroup', Radio.Group)
componentMap.set('Checkbox', Checkbox)
componentMap.set('CheckboxGroup', Checkbox.Group)
componentMap.set('Cascader', Cascader)
componentMap.set('RadioButtonGroup', RadioButtonGroup);
componentMap.set('Slider', Slider)
componentMap.set('Rate', Rate)
componentMap.set('DatePicker', DatePicker)
componentMap.set('MonthPicker', DatePicker.MonthPicker)
componentMap.set('RangePicker', DatePicker.RangePicker)
componentMap.set('WeekPicker', DatePicker.WeekPicker)
componentMap.set('TimePicker', TimePicker)
componentMap.set('Divider', Divider)
componentMap.set('Label', NantaLabel)

export function add (compName: ComponentType, component: Component) {
  componentMap.set(compName, component)
}

export function del (compName: ComponentType) {
  componentMap.delete(compName)
}

export { componentMap }
