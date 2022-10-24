import type { ComputedRef, Slots } from 'vue';
import type { FetchParams } from '../types/table';
import type { BasicTableProps } from '..';
import { unref, computed, ref } from 'vue';
import type { FormProps } from '../../form/index';
import { isFunction, isNumber, isString, isArray, cloneDeep } from 'lodash-es';
import { Recordable, Fn } from "../../.."
import { asObject } from '../../../utils/util';

export function useSearchForm(
  propsRef: ComputedRef<BasicTableProps>,
  slots: Slots,
  fetch: (opt?: FetchParams | undefined) => Promise<void>,
  getLoading: ComputedRef<boolean | undefined>,
  getDataSource: () => Recordable[],
  setTableData: (data: Recordable[]) => void,
  isFetchRemote: () => boolean,
) {
  const dataSourceCacheRef = ref<Recordable[]>();
  const getFormProps = computed((): Partial<FormProps> => {
    const { searchFormConfig: formConfig } = unref(propsRef);
    const { submitButtonOptions } = formConfig || {};
    return {
      ...formConfig,
      submitButtonOptions: { loading: unref(getLoading), ...submitButtonOptions },
      compact: true,
    };
  });

  const getFormSlotKeys: ComputedRef<string[]> = computed(() => {
    const keys = Object.keys(slots);
    return keys
      .map((item) => (item.startsWith('form-') ? item : null))
      .filter((item) => !!item) as string[];
  });

  function replaceFormSlotKey(key: string) {
    if (!key) return '';
    return key?.replace?.(/form\-/, '') ?? '';
  }

  function handleSearchInfoChange(info: Recordable) {
    const { handleSearchInfoFn } = unref(propsRef);
    if (handleSearchInfoFn && isFunction(handleSearchInfoFn)) {
      info = handleSearchInfoFn(info) || info;
    }
    if (isFetchRemote()) {
      fetch({ searchInfo: info, page: 1 });
    } else {
      const infoFilter = asObject(info);
      const dataSourceCache = unref(dataSourceCacheRef);
      let datas;
      if (!dataSourceCache) {
        dataSourceCacheRef.value = cloneDeep(getDataSource());
      }
      datas = dataSourceCacheRef.value;

      if (!datas || !isArray(datas)) {
        return
      }

      const keys = new Set();
      datas.forEach(item => {
        for (const i of Object.keys(item)) {
          keys.add(i)
        }
      })

      const filterRes = datas.filter(item => {
        for (const [filterKey, filterValue] of Object.entries(infoFilter)) {
          if (!keys.has(filterKey)) {
            continue
          }
          if (isNumber(filterValue) && (!item[filterKey] || filterValue !== item[filterKey])) {
            return false;
          }
          if (isString(filterValue) && (!item[filterKey] || !item[filterKey].toLowerCase().includes(filterValue.toLowerCase()))) {
            return false;
          }
        }
        return true;
      })
      setTableData(filterRes)
    }

    
  }

  return {
    getFormProps,
    replaceFormSlotKey,
    getFormSlotKeys,
    handleSearchInfoChange,
  };
}
