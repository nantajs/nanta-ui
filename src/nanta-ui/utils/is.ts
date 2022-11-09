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

/**
 * current isObject is different with lodash-es's `isObject`
 * _.isObject([1, 2, 3]); // ==> false   (lodash-es => true)
 * _.isObject({}); // ==> true (lodash-es => true)
 * 
 * @param val 
 * @returns 
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
