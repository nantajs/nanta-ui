<template>
    <NantaTable @register="registerTable">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
                <NantaTableAction :actions="[
                  {
                    icon: 'clarity:note-edit-line',
                    onClick: handleEdit.bind(null, record),
                  },
                  {
                    icon: 'ant-design:delete-outlined',
                    color: 'error',
                    onClick: handleDelete.bind(null, record),
                  },
                ]" />
            </template>
        </template>
    </NantaTable>
</template>

<script lang="ts" setup>
import { NantaTable, NantaTableAction, useTable } from "/~/main";
import { columns, data } from "./data"

const [registerTable] = useTable({
    columns,
    dataSource: data,
    actionColumn: {
        width: 80,
        title: '操作',
        dataIndex: 'action',
        // slots: { customRender: 'action' },
        fixed: undefined,
    },
})

function handleEdit(record: Recordable) {

}

function handleDelete(record: Recordable) {
    console.log(record);
    console.log('noww exxxxxx');
}
</script>