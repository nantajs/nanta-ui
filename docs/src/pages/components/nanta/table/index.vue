<template>
    <NantaTable @register="registerTable">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
                <NantaTableAction :actions="getAction(record)" />
            </template>
            <template v-else-if="column.key === 'tags'">
                <span>
                    <a-tag v-for="tag in record.tags" :key="tag"
                        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                        {{ tag.toUpperCase() }}
                    </a-tag>
                </span>
            </template>
        </template>
    </NantaTable>

    <NantaFormModal @register="registerModal" v-bind="mProps" @ok="handleOK" @cancel="handleCancel" />
</template>

<script lang="ts" setup>
import { NantaTable, NantaTableAction, useTable, ActionItem, NantaFormModal, ModalInnerRecord, NantaFormModalProps } from "/~/main";
import { columns, data, searchFormSchema, editModalSchema } from "./data"
import { createAxiosFetch } from '/@/utils/http/axiosFetch';
import { useModal } from "/~/main";
// import { url } from '/@/settings/localSetting';
const url = 'https://mock.data/api/mock/meta';

const mProps : NantaFormModalProps = {
    schemas: editModalSchema,
    colon: true
}

function getAction(record: Recordable): ActionItem[] {
    const ifShow = (action: ActionItem) => {
        const value = (record.gender && (record.gender === 1 || record.gender === 2));
        if (!value && action.label === 'Delete') {
            return false;
        }
        return true;
    };

    const actions: ActionItem[] = [
        {
            icon: 'clarity:note-edit-line',
            label: 'Edit',
            onClick: handleEdit.bind(null, record),
        },
        {
            icon: 'ant-design:delete-outlined',
            color: 'error',
            label: 'Delete',
            onClick: handleDelete.bind(null, record),
        },
    ]
    actions.forEach(item => { item.ifShow = ifShow })

    return actions;
}

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

const [registerTable, { updateTableDataRecord }] = useTable({
    columns,
    dataSource: data,
    // api: createAxiosFetch(url),
    afterFetch: transfer,
    fetchSetting,
    actionColumn: {
        title: '操作',
        dataIndex: 'action',
        // slots: { customRender: 'action' },
        fixed: undefined,
    },
    useSearchForm: true,
    searchFormConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true,
        submitButtonOptions: { text: 'search' }
    },
})

const [registerModal, { openModal, closeModal }] = useModal();

const handleOK = (newRecord: Recordable, oldRecord: Recordable) => {
    console.log('handle ok in outer event callback', newRecord, oldRecord)
    updateTableDataRecord(oldRecord.key, newRecord)
    closeModal()
}

const handleCancel = (newRecord: Recordable, oldRecord: Recordable) => {
    console.log('handle cancel in outer event callback', newRecord, oldRecord);
}

function handleEdit(record: Recordable) {
    console.log('edit clicked!');
    console.log(record);
    const innerRecord: ModalInnerRecord = {
        title: "Edit",
        record
    }

    openModal(true, innerRecord)
}

function handleDelete(record: Recordable) {
    console.log('delete action clicked!');
    console.log(record);
}
</script>