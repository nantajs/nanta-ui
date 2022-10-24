import type { ComputedRef, Slots } from 'vue';
import type { FetchParams } from '../types/table';
import type { BasicTableProps } from '..';
import { unref, computed } from 'vue';
import type { FormProps } from '../../form/index';
import { isFunction } from 'lodash-es';
import { Recordable } from "../../.."

export function useSearchForm(
  propsRef: ComputedRef<BasicTableProps>,
  slots: Slots,
  fetch: (opt?: FetchParams | undefined) => Promise<void>,
  getLoading: ComputedRef<boolean | undefined>,
) {
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
    fetch({ searchInfo: info, page: 1 });
  }

  return {
    getFormProps,
    replaceFormSlotKey,
    getFormSlotKeys,
    handleSearchInfoChange,
  };
}
