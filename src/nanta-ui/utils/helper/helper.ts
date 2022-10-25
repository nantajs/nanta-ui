import { Slots } from 'vue';
import dayjs from 'dayjs'
import { set, isFunction } from 'lodash-es'
import type { ComponentType, FieldMapToTime } from '../../components/form/index'
import type { Recordable } from '../..'
import { isObject } from '../is'

const DATE_TYPE = ['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker']

function genType() {
  return [...DATE_TYPE, 'RangePicker']
}

export const dateItemType = genType()

export function itemIsDateType(component?: ComponentType) {
  return component && dateItemType.includes(component)
}

export const dateUtil = dayjs

/**
 * @desription deconstruct array-link key. This method will mutate the target.
 */
export function tryDeconstructArray(
  key: string,
  value: any,
  target: Recordable
) {
  const pattern = /^\[(.+)\]$/
  if (pattern.test(key)) {
    const match = key.match(pattern)
    if (match && match[1]) {
      const keys = match[1].split(',')
      value = Array.isArray(value) ? value : [value]
      keys.forEach((k, index) => {
        set(target, k.trim(), value[index])
      })
      return true
    }
  }
}

/**
 * @desription deconstruct object-link key. This method will mutate the target.
 */
export function tryDeconstructObject(
  key: string,
  value: any,
  target: Recordable
) {
  const pattern = /^\{(.+)\}$/
  if (pattern.test(key)) {
    const match = key.match(pattern)
    if (match && match[1]) {
      const keys = match[1].split(',')
      value = isObject(value) ? value : {}
      keys.forEach((k) => {
        set(target, k.trim(), value[k.trim()])
      })
      return true
    }
  }
}

export function handleRangeTimeValue(
  values: Recordable,
  fieldMapToTime?: FieldMapToTime
) {
  if (!fieldMapToTime || !Array.isArray(fieldMapToTime)) {
    return values
  }

  for (const [
    field,
    [startTimeKey, endTimeKey],
    format = 'YYYY-MM-DD'
  ] of fieldMapToTime) {
    if (!field || !startTimeKey || !endTimeKey || !values[field]) {
      continue
    }

    const [startTime, endTime]: string[] = values[field]

    values[startTimeKey] = dateUtil(startTime).format(format)
    values[endTimeKey] = dateUtil(endTime).format(format)
    Reflect.deleteProperty(values, field)
  }

  return values
}

export const defaultValueComponents = ['Input', 'InputPassword', 'InputSearch', 'InputTextArea']

export function getSlot(slots: Slots, slot = 'default', data?: any) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null;
  }
  if (!isFunction(slots[slot])) {
    console.error(`${slot} is not a function!`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn) return null;
  return slotFn(data);
}