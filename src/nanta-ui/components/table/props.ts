import type { PropType, VNodeChild } from 'vue';
import type { BasicColumn } from './types/table';
import type { PaginationProps } from './types/pagination';
import type { Recordable, Fn } from '../..'
import type { FormProps } from '../form'
import { propTypes } from '../../utils/propTypes'
import type { SorterResult, FetchSetting, TableRowSelection } from './types/table'
import { DEFAULT_FILTER_FN, DEFAULT_SORT_FN, FETCH_SETTING, DEFAULT_SIZE } from './const';

export interface BasicTableProps<T = any> {
    actionColumn?: BasicColumn;
    afterFetch?: Fn;
    api?: (...arg: any) => Promise<any>;
    autoCreateKey?: boolean;
    beforeFetch?: Fn;
    childrenColumnName?: string;
    clearSelectOnPageChange?: boolean;
    columns: BasicColumn[];
    dataSource?: Recordable[];
    defSort?: Recordable;
    fetchSetting?: Partial<FetchSetting>;
    filterFn?: (data: Partial<Recordable<string[]>>) => any;
    handleSearchInfoFn?: Fn;
    immediateFetchApi?: boolean;
    loading?: boolean;
    onChange?: (pagination: any, filters: any, sorter: any, extra: any) => void;
    pagination?: PaginationProps | boolean;
    rowKey?: number | string | ((record: Recordable) => string);
    rowSelection?: TableRowSelection;
    searchInfo?: Recordable;
    searchFormConfig?: Partial<FormProps>;
    sortFn?: (sortInfo: SorterResult) => any;
    title?: VNodeChild | JSX.Element | string | ((data: Recordable) => string);
    titleHelpMessage?: string | string[];
    useSearchForm?: boolean;
}

export const tableProps = {
    actionColumn: {
        type: Object as PropType<BasicColumn>,
        default: null,
    },
    afterFetch: {
        type: Function as PropType<Fn>,
        default: null,
    },
    api: {
        type: Function as PropType<(...arg: any[]) => Promise<any>>,
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
    handleSearchInfoFn: {
        type: Function as PropType<Fn>,
        default: null,
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
    searchFormConfig: {
        type: Object as PropType<Partial<FormProps>>,
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
    title: {
        type: [String, Function] as PropType<string | ((data: Recordable) => string)>,
        default: null,
    },
    titleHelpMessage: {
        type: [String, Array] as PropType<string | string[]>,
    },
    useSearchForm: propTypes.bool,
}