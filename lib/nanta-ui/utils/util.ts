import { unref } from 'vue'
import type { Recordable } from '../types/global'
import { isObject } from 'lodash-es'

const projectName = import.meta.env.VITE_GLOB_APP_TITLE

export function warn (message: string) {
  console.warn(`[${projectName} warn]:${message}`)
}

export function error (message: string) {
  throw new Error(`[${projectName} error]:${message}`)
}

export function getDynamicProps<T, U> (props: T): Partial<U> {
  const ret: Recordable = {}

  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key])
  })

  return ret as Partial<U>
}

export function deepMerge<T = any> (src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key])
  }
  return src
}
