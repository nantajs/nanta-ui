<template>
    <NantaTable @register="registerTable"
        :rowSelection="{ type: 'checkbox', selectedRowKeys: checkedKeys, onChange: onSelectChange }"
        :clickToRowSelect="false">
        <template #headerTop>
            <div style="margin-bottom: 10px;">
                <NantaButton type="primary" @click="handleCopyCreate" :disabled="!operation.copyEnabled"
                    class="button-s" preIcon="ic:baseline-content-copy">Copy create</NantaButton>
                <NantaButton type="primary" @click="handleCreate" :disabled="!operation.createEnabled" class="button-s"
                    preIcon="ic:baseline-plus">Create new</NantaButton>
                <NantaButton color="success" type="primary" @click="handleModify" :disabled="!operation.modifyEnabled"
                    class="button-s" preIcon="ic:baseline-edit">Modify</NantaButton>
                <NantaButton type="primary" danger @click="handleMultiDelete" :disabled="!operation.deleteEnabled"
                    class="button-s" preIcon="ic:baseline-delete">Delete</NantaButton>
            </div>
            <a-alert type="info" show-icon>
                <template #message>
                    <template v-if="checkedKeys.length > 0">
                        <span>Selected {{ checkedKeys.length }} items (pagination support.)</span>
                        <a-button type="link" @click="checkedKeys = []" size="small">清空</a-button>
                    </template>
                    <template v-else>
                        <span>No items selected.</span>
                    </template>
                </template>
            </a-alert>
        </template>
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
import { ref } from "vue"
import { NantaTable, NantaTableAction, useTable, ActionItem, NantaFormModal, ModalInnerRecord, NantaFormModalProps, NantaButton } from "/~/main";
import { columns, data, searchFormSchema, editModalSchema } from "./data"
import { ActionType } from './type'
import { createAxiosFetch } from '/@/utils/http/axiosFetch';
import { useModal } from "/~/main";
// import { url } from '/@/settings/localSetting';
const url = 'https://mock.data/api/mock/meta';

const checkedKeys = ref<Array<string | number>>([]);
const operation = ref({ copyEnabled: false, createEnabled: true, modifyEnabled: false, deleteEnabled: false });

const mProps: NantaFormModalProps = {
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

const [registerTable, { updateTableDataRecord, deleteTableDataRecord, findTableDataRecord }] = useTable({
    title: 'NantaTable Usage Example.',
    columns,
    dataSource: data,
    // api: createAxiosFetch(url),
    afterFetch: transfer,
    fetchSetting,
    actionColumn: {
        title: 'Actions',
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

function handleCopyCreate() {
    console.log('copycreate');
    if (checkedKeys.value.length > 0) {
        const key = checkedKeys.value[0];
        const record = findTableDataRecord(key)
        doModifyAction(key, ActionType.COPY_CREATE, record as Recordable);
    }
}

function handleCreate() {
    doModifyAction(0, ActionType.CREATE);
}

function handleModify() {
    console.log('modify');
    if (checkedKeys.value.length > 0) {
        const key = checkedKeys.value[0];
        const record = findTableDataRecord(key)
        doModifyAction(key, ActionType.MODIFY, record as Recordable);
    }
}

function handleMultiDelete() {
    console.log('delete', checkedKeys);
}

const doModifyAction = (id: string | number, type: ActionType, record?: Recordable) => {
    console.log('id', id, 'type', type);
    let title: string = "Create"
    if (type == ActionType.CREATE) {
        title = "Create"
    } else if (type == ActionType.COPY_CREATE) {
        title = "Copy create"
    } else if (type == ActionType.MODIFY) {
        title = "Modify"
    } else {
        throw new Error('illegal type.');
    }

    const innerRecord: ModalInnerRecord = {
        title,
        record: record || {}
    }

    openModal(true, innerRecord)
};

function onSelectChange(selectedRowKeys: (string | number)[]) {
    console.log(selectedRowKeys);
    checkedKeys.value = selectedRowKeys;
    const size = selectedRowKeys.length;
    if (size <= 0) {
        operation.value = { copyEnabled: false, createEnabled: true, modifyEnabled: false, deleteEnabled: false };
    } else if (size == 1) {
        operation.value = { copyEnabled: true, createEnabled: true, modifyEnabled: true, deleteEnabled: true };
    } else {
        operation.value = { copyEnabled: false, createEnabled: true, modifyEnabled: false, deleteEnabled: true };
    }
}
</script>

<style scoped>
.button-s {
    margin-right: 4px;
}
</style>