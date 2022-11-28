import type { ColumnProps } from 'ant-design-vue/lib/table';
import type { Recordable, VueNode, EmitType } from '../../..';
import type { PaginationProps } from './pagination';
import type { BasicTableProps } from '../props'
import type { TableRowSelection as ITableRowSelection } from 'ant-design-vue/lib/table/interface';

export type CellFormat = string | ((text: string, record: Recordable, index: number) => string | number | VueNode) | Map<string | number, any> | object;

export declare type SortOrder = 'ascend' | 'descend';

export interface SorterResult {
    column: ColumnProps;
    order: SortOrder;
    field: string;
    columnKey: string;
}

export interface FetchSetting {
    // 请求接口当前页数
    pageField: string;
    // 每页显示多少条
    sizeField: string;
    // 请求结果列表字段  支持 a.b.c
    listField: string;
    // 请求结果总数字段  支持 a.b.c
    totalField: string;
}

export interface BasicColumn extends ColumnProps<Recordable> {
    customTitle?: VueNode;
    edit?: boolean;
    editRow?: boolean;
    flag?: 'INDEX' | 'DEFAULT' | 'CHECKBOX' | 'RADIO' | 'ACTION';
    format?: CellFormat;
    helpMessage?: string | string[];
    // whether hiddle current column.
    hidden?: boolean;
    slots?: Recordable;
}

export interface TableCurrentDataSource<T = Recordable> {
    currentDataSource: T[];
}

export declare type Key = string | number;

export interface TableRowSelection<T = any> extends ITableRowSelection {
    /**
     * Callback executed when selected rows change
     * @type Function
     */
    onChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;
    /**
     * Callback executed when select/deselect one row
     * @type Function
     */
    onSelect?: (record: T, selected: boolean, selectedRows: Object[], nativeEvent: Event) => any;

    /**
     * Callback executed when select/deselect all rows
     * @type Function
     */
    onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => any;

    /**
     * Callback executed when row selection is inverted
     * @type Function
     */
    onSelectInvert?: (selectedRows: Key[]) => any;
}

export interface FetchParams {
    searchInfo?: Recordable;
    page?: number;
    sortInfo?: Recordable;
    filterInfo?: Recordable;
}

export interface GetColumnsParams {
    ignoreIndex?: boolean;
    ignoreAction?: boolean;
    sort?: boolean;
}

export type SizeType = 'default' | 'middle' | 'small' | 'large';

export interface TableActionType {
    clearSelectedRowKeys: () => void;
    deleteSelectRowByKey: (key: string) => void;
    deleteTableDataRecord: (rowKey: string | number | string[] | number[]) => void;
    findTableDataRecord: (rowKey: string | number) => Recordable | void;
    getDataSource: <T = Recordable>() => T[];
    getPaginationRef: () => PaginationProps | boolean;
    getRawDataSource: <T = Recordable>() => T;
    getSelectRows: <T = Recordable>() => T[];
    getSelectRowKeys: () => string[] | number[];
    getSize: () => SizeType;
    getShowPagination: () => boolean;
    insertTableDataRecord: (record: Recordable, index?: number) => Recordable | void;
    reload: (opt?: FetchParams) => Promise<void>;    // reload data from remote api
    setLoading: (loading: boolean) => void;
    setSelectedRowKeys: (rowKeys: string[] | number[]) => void;
    setShowPagination: (show: boolean) => Promise<void>;
    setPagination: (info: Partial<PaginationProps>) => void;
    setProps: (props: Partial<BasicTableProps>) => void;
    setTableData: <T = Recordable>(values: T[]) => void;
    updateTableDataRecord: (rowKey: string | number, record: Recordable) => Recordable | void;
}