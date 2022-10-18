import type { SorterResult } from './types/table'
import type { Recordable } from '../..'

export const ACTION_COLUMN_FLAG = 'ACTION';
export const INDEX_COLUMN_FLAG = 'INDEX';

const defaultPageSize = 10;
const pageSizeOptions = ['10', '50', '80', '100'];

export const PAGE_SIZE_OPTIONS = pageSizeOptions;
export const PAGE_SIZE = defaultPageSize;

export const ROW_KEY = 'key';
const fetchSetting = {
    // The field name of the current page passed to the background
    pageField: 'page',
    // The number field name of each page displayed in the background
    sizeField: 'pageSize',
    // Field name of the form data returned by the interface
    listField: 'items',
    // Total number of tables returned by the interface field name
    totalField: 'total',
}
export const FETCH_SETTING = fetchSetting;


const defaultSortFn = (sortInfo: SorterResult) => {
    const { field, order } = sortInfo;
    if (field && order) {
        return {
            // The sort field passed to the backend you
            field,
            // Sorting method passed to the background asc/desc
            order,
        };
    } else {
        return {};
    }
}

const defaultFilterFn = (data: Partial<Recordable<string[]>>) => {
    return data;
}

export const DEFAULT_SORT_FN = defaultSortFn;

export const DEFAULT_FILTER_FN = defaultFilterFn;

const defaultSize = 'middle';

export const DEFAULT_SIZE = defaultSize;