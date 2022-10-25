import type { ComputedRef, Slots } from 'vue';
import type { BasicTableProps } from '../props'
import { unref, computed, h } from 'vue';
import TableHeader from '../components/TableHeader.vue';
import { isString } from 'lodash-es';
import { getSlot } from "../../../utils/helper/helper";
import { Recordable } from '../../..'

export function useTableHeader(
  propsRef: ComputedRef<BasicTableProps>,
  slots: Slots,
) {
  const getHeaderProps = computed((): Recordable => {
    const { title, titleHelpMessage } = unref(propsRef);
    const showTableSetting = false;
    const hideTitle = !slots.tableTitle && !title && !slots.toolbar && !showTableSetting;
    if (hideTitle && !isString(title)) {
      return {};
    }

    return {
      title: hideTitle
        ? null
        : () =>
          h(
            TableHeader,
            {
              title,
              titleHelpMessage,
              showTableSetting,
            } as Recordable,
            {
              ...(slots.toolbar
                ? {
                  toolbar: () => getSlot(slots, 'toolbar'),
                }
                : {}),
              ...(slots.tableTitle
                ? {
                  tableTitle: () => getSlot(slots, 'tableTitle'),
                }
                : {}),
              ...(slots.headerTop
                ? {
                  headerTop: () => getSlot(slots, 'headerTop'),
                }
                : {}),
            },
          ),
    };
  });
  return { getHeaderProps };
}
