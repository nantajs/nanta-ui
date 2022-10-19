<template>
    <NantaTable @register="registerTable">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
                <NantaTableAction :actions="[
                  {
                    icon: 'clarity:note-edit-line',
                    label: '编辑',
                    onClick: handleEdit.bind(null, record),
                  },
                  {
                    icon: 'ant-design:delete-outlined',
                    color: 'error',
                    label: '删除',
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
import { createAxiosFetch } from '/@/utils/http/axiosFetch';
// import { url } from '/@/settings/localSetting';
const url = 'https://mock.data/api/mock/meta';

interface DemoResult {
    createBy?: string;
    updateBy?: string;
    createTime?: number;
    updateTime?: number;
    id: number;
    articleid: string;
    title: string;
    desc: string;
    tags?: string;
    space?: string;
    category?: string;
    refArticleid?: string;
}

function transfer(params: DemoResult[]) {
    const tData = params.map((item) => {
        return {
            key: item.articleid,
            name: item.title,
            age: item.id,
            email: item.space,
            address: item.desc.substring(0, 10),
            tags: [item.tags],
            gender: 1,
        }
    })
    console.log(tData)
    return tData;
}

const fetchSetting = {
    pageField: 'page',
    sizeField: 'pageSize',
    listField: 'content',
    totalField: 'totalElements',
};

const [registerTable] = useTable({
    columns,
    // dataSource: data,
    api: createAxiosFetch(url),
    afterFetch: transfer,
    fetchSetting,
    actionColumn: {
        title: '操作',
        dataIndex: 'action',
        // slots: { customRender: 'action' },
        fixed: undefined,
    },
})

function handleEdit(record: Recordable) {
    console.log('edit clicked!');
    console.log(record);
}

function handleDelete(record: Recordable) {
    console.log('delete action clicked!');
    console.log(record);
}
</script>