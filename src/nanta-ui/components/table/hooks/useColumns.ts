import { computed, unref, ref, reactive, watch } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import type { BasicColumn, BasicTableProps, PaginationProps, CellFormat } from '..';
import { cloneDeep, isFunction, isString, isMap } from 'lodash-es';
import { ACTION_COLUMN_FLAG, INDEX_COLUMN_FLAG } from "../const";
import { formatToDate, Recordable } from "../../.."
import { isObject } from "../../../utils/is";

function handleActionColumn(propsRef: ComputedRef<BasicTableProps>, columns: BasicColumn[]) {
    const { actionColumn } = unref(propsRef);
    if (!actionColumn) return;
    const hasIndex = columns.findIndex(column => column.flag === ACTION_COLUMN_FLAG);
    if (hasIndex === -1) {
        columns.push({
            ...columns[hasIndex],
            fixed: 'right',
            ...actionColumn,
            flag: ACTION_COLUMN_FLAG,
        });
    }
}

// convert to andt columns config.
export function useColumns(propsRef: ComputedRef<BasicTableProps>, getPaginationRef: ComputedRef<boolean | PaginationProps>): any {
    const columnsRef = ref(unref(propsRef).columns) as unknown as Ref<BasicColumn[]>;
    const getColumnsRef = computed(() => {
        const columns = cloneDeep(unref(columnsRef));

        handleActionColumn(propsRef, columns);
        if (!columns) {
            return [];
        }
        return columns;
    });


    const getViewColumns = computed(() => {
        const viewColumns = sortFixedColumn(unref(getColumnsRef));
        const columns = cloneDeep(viewColumns);
        return columns
            .map((column) => {
                const { slots, customRender, format, edit, editRow, flag } = column;
                if (!slots || !slots?.title) {
                    // column.customTitle = column.title as VueNode;
                    // Reflect.deleteProperty(column, 'title');
                }
                const isDefaultAction = [INDEX_COLUMN_FLAG, ACTION_COLUMN_FLAG].includes(flag!);
                if (!customRender && format && !edit && !isDefaultAction) {
                    column.customRender = ({ text, record, index }) => {
                        return formatCell(text, format, record, index);
                    };
                }

                return reactive(column);
            });
    });

    watch(
        () => unref(propsRef).columns,
        columns => {
            columnsRef.value = columns;
        }
    );

    return { getColumnsRef, getViewColumns }
}

function sortFixedColumn(columns: BasicColumn[]) {
    const fixedLeftColumns: BasicColumn[] = [];
    const fixedRightColumns: BasicColumn[] = [];
    const defColumns: BasicColumn[] = [];
    for (const column of columns) {
        if (column.fixed === 'left') {
            fixedLeftColumns.push(column);
            continue;
        }
        if (column.fixed === 'right') {
            fixedRightColumns.push(column);
            continue;
        }
        defColumns.push(column);
    }
    return [...fixedLeftColumns, ...defColumns, ...fixedRightColumns].filter(item => !item.hidden);
}

export function formatCell(text: any, format: CellFormat, record: Recordable, index: number) {
    if (!format) {
        return text;
    }

    // custom function
    if (isFunction(format)) {
        return format(text, record, index);
    }

    try {
        // date type
        const DATE_FORMAT_PREFIX = 'date|';
        if (isString(format) && format.startsWith(DATE_FORMAT_PREFIX) && text) {
            const dateFormat = format.replace(DATE_FORMAT_PREFIX, '');

            if (!dateFormat) {
                return text;
            }
            return formatToDate(text, dateFormat);
        }

        // Map
        if (isMap(format)) {
            return format.get(text);
        }

        // isObject not includes Array
        if (!isString(format) && isObject(format)) {
            const map = new Map(Object.entries(format));
            return map.get('' + text) || text
        }

        if (Array.isArray(format)) {
            const option = format.find(item => item.value === text)
            return option && option.label || text;
        }

        return text
    } catch (error) {
        return text;
    }
}