export function isNull (val: unknown): val is null {
  return val === null
}

export function isDef<T = unknown> (val?: T): val is T {
  return typeof val !== 'undefined'
}

export function isUnDef<T = unknown> (val?: T): val is T {
  return !isDef(val)
}

export function isNullOrUnDef (val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

const toString = Object.prototype.toString

export function is (val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isNumber (val: unknown): val is number {
  return is(val, 'Number')
}
