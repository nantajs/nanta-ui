
import type { PropType } from 'vue';
import type { BasicColumn } from './types/table';
import type { PaginationProps } from './types/pagination';
import type { Recordable } from '../..'

export interface BasicTableProps<T = any> {
    actionColumn?: BasicColumn;
    columns: BasicColumn[];
    dataSource?: Recordable[];
    pagination?: PaginationProps | boolean;
    rowKey?: string | ((record: Recordable) => string);
}

export const tableProps = {
    actionColumn: {
        type: Object as PropType<BasicColumn>,
        default: null,
    },
    columns: {
        type: [Array] as PropType<BasicColumn[]>,
        default: () => [],
    },
    dataSource: {
        type: Array as PropType<Recordable[]>,
        default: null,
    },
    pagination: {
        type: [Object, Boolean] as PropType<PaginationProps | boolean>,
        default: null,
    },
    rowKey: {
        type: [String, Function] as PropType<string | ((record: Recordable) => string)>,
        default: '',
    },
}