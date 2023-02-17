import type { Ref } from 'vue';
import type { TableActionType } from '../types/table';
import type { BasicTableProps } from "../props";
import { provide, inject, ComputedRef } from 'vue';
import { Recordable, Nullable } from '../../..'

const key = Symbol('nanta-table');

type Instance = TableActionType & {
  wrapRef: Ref<Nullable<HTMLElement>>;
  getBindValues: ComputedRef<Recordable>;
};

type RetInstance = Omit<Instance, 'getBindValues'> & {
  getBindValues: ComputedRef<BasicTableProps>;
};

export function createTableContext(instance: Instance) {
  provide(key, instance);
}

export function useTableContext(): RetInstance {
  return inject(key) as RetInstance;
}
