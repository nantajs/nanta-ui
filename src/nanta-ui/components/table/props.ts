import type { PropType } from 'vue';
import type { BasicColumn } from './types/table';
import type { PaginationProps } from './types/pagination';
import type { Recordable, Fn } from '../..'
import { propTypes } from '../../utils/propTypes'
import type { SorterResult, FetchSetting, TableRowSelection } from './types/table'
import { DEFAULT_FILTER_FN, DEFAULT_SORT_FN, FETCH_SETTING, DEFAULT_SIZE } from './const';

export interface BasicTableProps<T = any> {
    actionColumn?: BasicColumn;
    api?: (...arg: any) => Promise<any>;
    autoCreateKey?: boolean;
    afterFetch?: Fn;
    beforeFetch?: Fn;
    childrenColumnName?: string;
    clearSelectOnPageChange?: boolean;
    columns: BasicColumn[];
    dataSource?: Recordable[];
    defSort?: Recordable;
    fetchSetting?: Partial<FetchSetting>;
    filterFn?: (data: Partial<Recordable<string[]>>) => any;
    immediateFetchApi?: boolean;
    loading?: boolean;
    pagination?: PaginationProps | boolean;
    rowKey?: string | ((record: Recordable) => string);
    rowSelection?: TableRowSelection;
    searchInfo?: Recordable;
    sortFn?: (sortInfo: SorterResult) => any;
    useSearchForm?: boolean;
}

export const tableProps = {
    actionColumn: {
        type: Object as PropType<BasicColumn>,
        default: null,
    },
    api: {
        type: Function as PropType<(...arg: any[]) => Promise<any>>,
        default: null,
    },
    afterFetch: {
        type: Function as PropType<Fn>,
        default: null,
    },
    autoCreateKey: { type: Boolean, default: true },
    beforeFetch: {
        type: Function as PropType<Fn>,
        default: null,
    },
    childrenColumnName: { type: String, default: 'children' },
    clearSelectOnPageChange: propTypes.bool,
    columns: {
        type: [Array] as PropType<BasicColumn[]>,
        default: () => [],
    },
    dataSource: {
        type: Array as PropType<Recordable[]>,
        default: null,
    },
    defSort: {
        type: Object as PropType<Recordable>,
        default: null,
    },
    fetchSetting: {
        type: Object as PropType<FetchSetting>,
        default: () => {
            return FETCH_SETTING;
        },
    },
    filterFn: {
        type: Function as PropType<(data: Partial<Recordable<string[]>>) => any>,
        default: DEFAULT_FILTER_FN,
    },
    immediateFetchApi: { type: Boolean, default: true },
    loading: propTypes.bool,
    pagination: {
        type: [Object, Boolean] as PropType<PaginationProps | boolean>,
        default: null,
    },
    rowKey: {
        type: [String, Function] as PropType<string | ((record: Recordable) => string)>,
        default: '',
    },
    rowSelection: {
        type: Object as PropType<TableRowSelection | null>,
        default: null,
    },
    searchInfo: {
        type: Object as PropType<Recordable>,
        default: null,
    },
    sortFn: {
        type: Function as PropType<(sortInfo: SorterResult) => any>,
        default: DEFAULT_SORT_FN,
    },
    useSearchForm: propTypes.bool,
}