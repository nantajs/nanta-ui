<template>
    <div>
        <Table ref="tableElRef" v-bind="getBindValues">
        </Table>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, unref, useAttrs, toRaw } from 'vue'
import { omit } from 'lodash-es';
import { Table } from 'ant-design-vue'
import { tableProps, BasicTableProps } from './props'
import { Recordable } from '../..'
import { useColumns } from './hooks/useColumns'
import { usePagination } from './hooks/usePagination'
import { useForm } from '../../components/form'
import type { TableActionType, SizeType } from './types/table'

const props = defineProps(tableProps)
const emits = defineEmits(['register'])

const attrs = useAttrs()
const tableElRef = ref(null);

const innerPropsRef = ref<Partial<BasicTableProps>>();
const getProps = computed(() => {
    return { ...props, ...unref(innerPropsRef) } as BasicTableProps;
});
const dataSourceRef = ref<Recordable[]>([]);
dataSourceRef.value = props.dataSource

const getDataSourceRef = computed(() => {
    const dataSource = unref(dataSourceRef);
    if (!dataSource || dataSource.length === 0) {
        return unref(dataSourceRef);
    }
    return unref(dataSourceRef);
});
const { getPaginationInfo, getPagination, setPagination, setShowPagination, getShowPagination } = usePagination(getProps);

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
    console.log('****')
    console.log(unref(innerPropsRef))
}

const tableAction: TableActionType = {
    getPaginationRef: getPagination,
    getShowPagination,
    getSize: () => {
        return unref(getBindValues).size as SizeType;
    },
    setPagination,
    setShowPagination,
    setProps,
};

const [registerForm, formActions] = useForm();

emits('register', tableAction, formActions);
</script>