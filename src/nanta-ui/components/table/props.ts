
import type { PropType } from 'vue';
import type { BasicColumn } from './types/table';
import type { Recordable } from '../..'

export interface BasicTableProps<T = any> {
    columns: BasicColumn[];
    dataSource?: Recordable[];
    rowKey?: string | ((record: Recordable) => string);
}

export const tableProps = {
    columns: {
        type: [Array] as PropType<BasicColumn[]>,
        default: () => [],
    },
    dataSource: {
        type: Array as PropType<Recordable[]>,
        default: null,
    },
    rowKey: {
        type: [String, Function] as PropType<string | ((record: Recordable) => string)>,
        default: '',
    },
}