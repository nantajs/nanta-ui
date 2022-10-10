import dayjs from 'dayjs'
import { isNumber, set, isObject } from 'lodash-es'
import type { ComponentType, FieldMapToTime } from './index'
import type { Recordable } from '../types/global'

export function handleInputNumberValue (component?: ComponentType, val?: any) {
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

const DATE_TYPE = ['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker']

function genType () {
  return [...DATE_TYPE, 'RangePicker']
}

export const dateItemType = genType()

export function itemIsDateType (component?: ComponentType) {
  return dateItemType.includes(component)
}

export const dateUtil = dayjs

/**
 * @desription deconstruct array-link key. This method will mutate the target.
 */
export function tryDeconstructArray (
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
export function tryDeconstructObject (
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

export function handleRangeTimeValue (
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
