<template>
    <div>
        <Table ref="tableElRef" v-bind="getBindValues" @change="handleTableChange">
            <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
                <slot :name="item" v-bind="data || {}"></slot>
            </template>
            <template #headerCell="{ column }">
                <HeaderCell :column="column" />
            </template>
            <template #bodyCell="data">
                <slot name="bodyCell" v-bind="data || {}"></slot>
            </template>
        </Table>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, unref, useAttrs, toRaw } from 'vue'
import HeaderCell from './components/HeaderCell.vue';
import { omit, isFunction } from 'lodash-es';
import { Table } from 'ant-design-vue'
import { tableProps, BasicTableProps } from './props'
import { Recordable } from '../..'
import { useColumns } from './hooks/useColumns'
import { usePagination } from './hooks/usePagination'
import { useDataSource } from './hooks/useDataSource'
import { useRowSelection } from './hooks/useRowSelection'
import { useLoading } from './hooks/useLoading'
import { useForm } from '../../components/form'
import type { TableActionType, SizeType } from './types/table'

const props = defineProps(tableProps)
const emits = defineEmits(['register', 'fetch-success', 'fetch-error', 'selection-change', 'change'])

const attrs = useAttrs()
const tableElRef = ref(null);
const tableData = ref<Recordable[]>([]);

const innerPropsRef = ref<Partial<BasicTableProps>>();
const getProps = computed(() => {
    return { ...props, ...unref(innerPropsRef) } as BasicTableProps;
});
const dataSourceRef = ref<Recordable[]>([]);
dataSourceRef.value = props.dataSource

const { getLoading, setLoading } = useLoading(getProps);

const [registerForm, formActions] = useForm();

const { getPaginationInfo, getPagination, setPagination, setShowPagination, getShowPagination } = usePagination(getProps);

// @ts-ignore
const { getRowSelection, getRowSelectionRef, getSelectRows, clearSelectedRowKeys, getSelectRowKeys, deleteSelectRowByKey, setSelectedRowKeys } = useRowSelection(getProps, tableData, emits);

const {
    handleTableChange: onTableChange, getDataSourceRef, getDataSource, getRawDataSource, setTableData, updateTableDataRecord,
    deleteTableDataRecord, insertTableDataRecord, findTableDataRecord, fetch, getRowKey, reload, getAutoCreateKey, updateTableData,
    // @ts-ignore
} = useDataSource(getProps, { tableData, getPaginationInfo, setLoading, setPagination, getFieldsValue: formActions.getFieldsValue, clearSelectedRowKeys, }, emits);

// @ts-ignore
function handleTableChange(...args) {
    // @ts-ignore
    onTableChange.call(undefined, ...args);
    emits('change', ...args);
    // 解决通过useTable注册onChange时不起作用的问题
    const { onChange } = unref(getProps);
    onChange && isFunction(onChange) && onChange.call(undefined, ...args);
}

const { getColumnsRef, getViewColumns } = useColumns(getProps, getPaginationInfo)

const getBindValues = computed(() => {
    const dataSource = unref(getDataSourceRef);
    let propsData: Recordable = {
        ...attrs,
        ...unref(getProps),
        tableLayout: 'fixed',
        columns: toRaw(unref(getViewColumns)),
        pagination: toRaw(unref(getPaginationInfo)),
        dataSource,
    };

    propsData = omit(propsData, ['class', 'onChange']);
    return propsData;
});

function setProps(props: Partial<BasicTableProps>) {
    innerPropsRef.value = { ...unref(innerPropsRef), ...props };
}

const tableAction: TableActionType = {
    getDataSource,
    getPaginationRef: getPagination,
    getRawDataSource,
    getShowPagination,
    getSize: () => {
        return unref(getBindValues).size as SizeType;
    },
    setPagination,
    setShowPagination,
    setProps,
};

emits('register', tableAction, formActions);
</script>