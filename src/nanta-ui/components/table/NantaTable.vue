<template>
    <div ref="wrapRef" :class="getWrapperClass">
        <NantaForm ref="formRef" submitOnReset v-bind="getFormProps" v-if="getBindValues.useSearchForm"
            :tableAction="tableAction" @register="registerForm" @submit="handleSearchInfoChange">
            <template #[replaceFormSlotKey(item)]="data" v-for="item in getFormSlotKeys">
                <slot :name="item" v-bind="data || {}"></slot>
            </template>
        </NantaForm>
        <Table ref="tableElRef" v-bind="getBindValues" @change="handleTableChange">
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
import { ref, computed, unref, useAttrs, toRaw, useSlots } from "vue";
import HeaderCell from "./components/HeaderCell.vue";
import { omit, isFunction } from "lodash-es";
import { Table } from "ant-design-vue";
import { tableProps, BasicTableProps } from "./props";
import type { Recordable } from '../../core/types/type';
import { useColumns } from "./hooks/useColumns";
import { usePagination } from "./hooks/usePagination";
import { useDataSource } from "./hooks/useDataSource";
import { useSearchForm } from "./hooks/useSearchForm";
import { useRowSelection } from "./hooks/useRowSelection";
import { useLoading } from "./hooks/useLoading";
import { useTableHeader } from "./hooks/useTableHeader";
import { useForm } from "../../components/form";
import NantaForm from "../../components/form/NantaForm.vue"
import type { TableActionType, SizeType } from "./types/table";

const props = defineProps(tableProps);
const emits = defineEmits(["register", "fetch-success", "fetch-error", "selection-change", "change",]);
const wrapRef = ref(null);
const formRef = ref(null);

const attrs = useAttrs();
const slots = useSlots()
const tableElRef = ref(null);
const tableData = ref<Recordable[]>([]);
const prefixCls = 'nanta-basic-table';

const innerPropsRef = ref<Partial<BasicTableProps>>();
const getProps = computed(() => {
    return { ...props, ...unref(innerPropsRef) } as BasicTableProps;
});
const dataSourceRef = ref<Recordable[]>([]);
dataSourceRef.value = props.dataSource;

const { getLoading, setLoading } = useLoading(getProps);

const [registerForm, formActions] = useForm();

const { getPaginationInfo, getPagination, setPagination, setShowPagination, getShowPagination, } = usePagination(getProps);

const { getRowSelection, getRowSelectionRef, getSelectRows, clearSelectedRowKeys, getSelectRowKeys, deleteSelectRowByKey, setSelectedRowKeys,
    // @ts-ignore
} = useRowSelection(getProps, tableData, emits);

const { handleTableChange: onTableChange, getDataSourceRef, getDataSource, getRawDataSource, setTableData, updateTableDataRecord, deleteTableDataRecord,
    insertTableDataRecord, findTableDataRecord, fetch, getRowKey, reload, getAutoCreateKey, updateTableData, isFetchRemote
} = useDataSource(
    getProps,
    {
        tableData, getPaginationInfo, setLoading, setPagination, getFieldsValue: formActions.getFieldsValue, clearSelectedRowKeys,
    },
    // @ts-ignore
    emits
);

const { getHeaderProps } = useTableHeader(getProps, slots);

const { getFormProps, replaceFormSlotKey, getFormSlotKeys, handleSearchInfoChange } = useSearchForm(getProps, slots, fetch, getLoading, getDataSource, setTableData, isFetchRemote);

// @ts-ignore
function handleTableChange(...args) {
    // @ts-ignore
    onTableChange.call(undefined, ...args);
    emits("change", ...args);
    // 解决通过useTable注册onChange时不起作用的问题
    const { onChange } = unref(getProps);
    onChange && isFunction(onChange) && onChange.call(undefined, ...args);
}

const { getColumnsRef, getViewColumns } = useColumns(getProps, getPaginationInfo);

const getBindValues = computed(() => {
    const dataSource = unref(getDataSourceRef);
    let propsData: Recordable = {
        ...attrs,
        ...unref(getProps),
        ...unref(getHeaderProps),
        tableLayout: "fixed",
        loading: unref(getLoading),
        columns: toRaw(unref(getViewColumns)),
        pagination: toRaw(unref(getPaginationInfo)),
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        dataSource,
    };

    propsData = omit(propsData, ["class", "onChange"]);
    return propsData;
});

const getWrapperClass = computed(() => {
    const values = unref(getBindValues);
    return [
        prefixCls,
        attrs.class,
        {
            [`${prefixCls}-form-container`]: values.useSearchForm,
            [`${prefixCls}--inset`]: values.inset,
        },
    ];
});

function setProps(props: Partial<BasicTableProps>) {
    innerPropsRef.value = { ...unref(innerPropsRef), ...props };

    /**
     * Notice: force to get it make cache update, or getProps (useTableHeade) gets the last cache data, 
     * which finally cases to : Hydration node mismatch!
     * 注意：调用下get方法，更新下数据，否则在useTableHeader里拿到的getProps是上次的缓存数据，（computed会缓存）
     * 会导致SSR在服务端渲染的时候获取到的title为null，最终产生: Hydration node mismatch （Nuxt 生态！）
     */
    getProps.value; 
}

const tableAction: TableActionType = {
    clearSelectedRowKeys,
    deleteSelectRowByKey,
    deleteTableDataRecord,
    findTableDataRecord,
    getDataSource,
    getPaginationRef: getPagination,
    getRawDataSource,
    getSelectRows,
    getSelectRowKeys,
    getShowPagination,
    getSize: () => {
        return unref(getBindValues).size as SizeType;
    },
    insertTableDataRecord,
    setLoading,
    setSelectedRowKeys,
    setShowPagination,
    setPagination,
    setProps,
    setTableData,
    updateTableDataRecord,
};

emits("register", tableAction, formActions);
</script>

<style lang="less">
@border-color: #cecece4d;

@prefix-cls: ~'nanta-basic-table';
@component-background: '#151515';

[data-theme='dark'] {

    .ant-table-tbody>tr:hover.ant-table-row-selected>td,
    .ant-table-tbody>tr.ant-table-row-selected td {
        background-color: #262626;
    }
}

.@{prefix-cls} {
    max-width: 100%;
    height: 100%;

    &-row__striped {
        td {
            background-color: @component-background;
        }
    }

    &-form-container {
        padding: 16px;

        .ant-form {
            padding: 12px 10px 6px;
            margin-bottom: 16px;
            background-color: @component-background;
            border-radius: 2px;
        }
    }

    .ant-tag {
        margin-right: 0;
    }

    .ant-table-wrapper {
        padding: 6px;
        background-color: @component-background;
        border-radius: 2px;

        .ant-table-title {
            min-height: 40px;
            padding: 0 0 8px !important;
        }

        .ant-table.ant-table-bordered .ant-table-title {
            border: none !important;
        }
    }

    .ant-table {
        width: 100%;
        overflow-x: hidden;

        &-title {
            display: flex;
            padding: 8px 6px;
            border-bottom: none;
            justify-content: space-between;
            align-items: center;
        }
    }

    .ant-pagination {
        margin: 10px 0 0;
    }

    .ant-table-footer {
        padding: 0;

        .ant-table-wrapper {
            padding: 0;
        }

        table {
            border: none !important;
        }

        .ant-table-body {
            overflow-x: hidden !important;
        }

        td {
            padding: 12px 8px;
        }
    }

    &--inset {
        .ant-table-wrapper {
            padding: 0;
        }
    }
}
</style>
