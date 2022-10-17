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
const props = defineProps(tableProps)
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

const getBindValues = computed(() => {
    const dataSource = unref(getDataSourceRef);
    let propsData: Recordable = {
        ...attrs,
        ...unref(getProps),
        tableLayout: 'fixed',
        dataSource,
    };    

    propsData = omit(propsData, ['class', 'onChange']);
    return propsData;
});

</script>