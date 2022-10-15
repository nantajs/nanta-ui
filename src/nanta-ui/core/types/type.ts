import type { ComputedRef, Ref, PropType as VuePropType } from "vue"

export declare type Nullable<T> = T | null;

export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export declare type EmitType = (event: string, ...args: any[]) => void;

export declare type Recordable<T = any> = Record<string, T>;

export declare type PropType<T> = VuePropType<T>;

export declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export declare type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>;
};

export declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
