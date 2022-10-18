import type { TableActionType, BasicColumn, FetchParams } from '../types/table';
import type { PaginationProps } from '../types/pagination';
import type { DynamicProps, Nullable, Recordable } from '../../..'
import type { FormActionType } from '../../form'
import type { BasicTableProps } from '../props'
import type { WatchStopHandle } from 'vue';
import { ref, onUnmounted, unref, watch, toRaw } from 'vue';
import { getDynamicProps, error } from '../../../utils/util'
import { ACTION_COLUMN_FLAG, INDEX_COLUMN_FLAG } from "../const";

type Props = Partial<DynamicProps<BasicTableProps>>;

type UseTableMethod = TableActionType & {
    getForm: () => FormActionType;
};

export function useTable(tableProps?: Props): [
    (instance: TableActionType, formInstance: UseTableMethod) => void,
    TableActionType
] {
    const tableRef = ref<Nullable<TableActionType>>(null);
    const loadedRef = ref<Nullable<boolean>>(false);
    const formRef = ref<Nullable<UseTableMethod>>(null);
    const { columns, actionColumn } = tableProps as BasicTableProps;

    // deal with actionColumn
    if (actionColumn) {
        const hasIndex = columns.findIndex(column => column.flag === ACTION_COLUMN_FLAG);
        if (hasIndex === -1) {
            columns.push({
                key: 'action',
                fixed: 'right',
                ...actionColumn,
                flag: ACTION_COLUMN_FLAG,
            });
        }
    }

    let stopWatch: WatchStopHandle;

    function register(instance: TableActionType, formInstance: UseTableMethod) {
        onUnmounted(() => {
            tableRef.value = null;
            loadedRef.value = null;
        });

        if (unref(loadedRef) && instance === unref(tableRef)) return;

        tableRef.value = instance;
        formRef.value = formInstance;
        tableProps && instance.setProps(getDynamicProps(tableProps));
        loadedRef.value = true;

        stopWatch?.();

        stopWatch = watch(
            () => tableProps,
            () => {
                tableProps && instance.setProps(getDynamicProps(tableProps));
            },
            {
                immediate: true,
                deep: true,
            }
        );
    }

    function getTableInstance(): TableActionType {
        const table = unref(tableRef);
        if (!table) {
            error('The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!');
        }
        return table as TableActionType;
    }

    const methods: TableActionType = {
        getDataSource: () => {
            return getTableInstance().getDataSource();
        },
        getPaginationRef: () => {
            return getTableInstance().getPaginationRef();
        },
        getRawDataSource: () => {
            return getTableInstance().getRawDataSource();
        },
        getShowPagination: () => {
            return toRaw(getTableInstance().getShowPagination());
        },
        getSize: () => {
            return toRaw(getTableInstance().getSize());
        },
        setPagination: (info: Partial<PaginationProps>) => {
            return getTableInstance().setPagination(info);
        },
        setShowPagination: async (show: boolean) => {
            getTableInstance().setShowPagination(show);
        },
        setProps: (props: Partial<BasicTableProps>) => {
            getTableInstance().setProps(props);
        },
    };

    return [register, methods];
}