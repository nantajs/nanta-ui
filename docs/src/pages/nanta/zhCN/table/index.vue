<template>
    <NantaTable @register="registerTable"
        :rowSelection="{ type: 'checkbox', selectedRowKeys: checkedKeys, onChange: onSelectChange }"
        :rowClassName="(_record, index) => (isHighlight(_record, index) ? 'ant-table-row-highlight' : null)"
        :clickToRowSelect="false">
        <template #headerTop>
            <div style="margin-bottom: 10px;">
                <NantaButton type="primary" @click="handleCopyCreate" :disabled="!operation.copyEnabled" class="button-s"
                    preIcon="ic:baseline-content-copy">复制新增</NantaButton>
                <NantaButton type="primary" @click="handleCreate" :disabled="!operation.createEnabled" class="button-s"
                    preIcon="ic:baseline-plus">新增</NantaButton>
                <NantaButton :color="getModifyButtonColor" type="primary" @click="handleModify"
                    :disabled="!operation.modifyEnabled" class="button-s" preIcon="ic:baseline-edit">修改</NantaButton>
                <NantaButton type="primary" danger @click="handleMultiDelete" :disabled="!operation.deleteEnabled"
                    class="button-s" preIcon="ic:baseline-delete">删除</NantaButton>
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
        <template #toolbar>
            <div>
                <NantaButton type="primary" class="button-s">
                    Show details
                </NantaButton>
            </div>
        </template>
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
                <NantaTableAction :actions="getAction(record)" :dropDownActions="[
                    {
                        label: 'More',
                        popConfirm: {
                            title: 'has more ?',
                            confirm: handleMore.bind(null, record),
                        },
                        ifShow: (_action) => {
                            return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
                        },
                    },
                ]" />
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
    <NantaFormModal @register="registerModal2" v-bind="mProps2" @ok="handleOK2" @cancel="handleCancel2" />
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { NantaTable, NantaTableAction, useTable, ActionItem, NantaFormModal, ModalInnerRecord, NantaFormModalProps, NantaButton } from "/~/main";
import { columns, data, searchFormSchema, editModalSchema, editModalSchema2 } from "./data"
import { ActionType } from '/@/pages/nanta/base/type'
import { createAxiosFetch } from '/@/utils/http/axiosFetch';
import { useModal } from "/~/main";
import { sleep } from "/@/utils/sleep";
// import { url } from '/@/settings/localSetting';
const url = 'https://mock.data/api/mock/meta';

const checkedKeys = ref<Array<string | number>>([]);
const operation = ref({ copyEnabled: false, createEnabled: true, modifyEnabled: false, deleteEnabled: false });

const getModifyButtonColor = computed(() => operation.value.modifyEnabled ? "success" : "")

function isHighlight(record: Recordable, index: number) {
    return record.age > 35;
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
            popConfirm: {
                title: 'Are you sure to delete?',
                placement: 'left',
                confirm: handleDelete.bind(null, record),
            },
        },
        {
            icon: 'ic:baseline-api',
            label: 'Detail',
            onClick: handleOther.bind(null, record),
        }
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

const [registerTable, { updateTableDataRecord, deleteTableDataRecord, findTableDataRecord, getSearchFieldsValue }] = useTable({
    title: '基础表格使用示例.',
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
    pagination: {
        showTotal: total => `Now total count is ${total}.`,

    }
})

const mProps: NantaFormModalProps = {
    schemas: editModalSchema,
    colon: true,
    modalProps: {
        okText: "I'm sure.",
        cancelText: 'Reject',
    }
}

const [registerModal, { openModal, closeModal, setModalProps, changeLoading, changeOkLoading }] = useModal();

const mProps2: NantaFormModalProps = {
    schemas: editModalSchema2,
    colon: true
}

const handleOK = async (newRecord: Recordable, oldRecord: Recordable) => {
    console.log('handleOK in outer event callback', newRecord, oldRecord)
    updateTableDataRecord(oldRecord.key, newRecord)
    changeLoading(true);
    changeOkLoading(true);
    await sleep(3)
    // closeModal()
    changeOkLoading(false)
    changeLoading(false)
}

const handleCancel = (newRecord: Recordable, oldRecord: Recordable) => {
    console.log('handle cancel in outer event callback', newRecord, oldRecord);
}

const [registerModal2, { openModal: openModal2, closeModal: closeModal2 }] = useModal();

const handleOK2 = (newRecord: Recordable, oldRecord: Recordable) => {
    console.log('handleOK2 in outer event callback', newRecord, oldRecord)
    updateTableDataRecord(oldRecord.key, newRecord)
    closeModal()
}

const handleCancel2 = (newRecord: Recordable, oldRecord: Recordable) => {
    console.log('handle cancel in outer event callback', newRecord, oldRecord);
}

function handleMore(record: Recordable) {
    console.log('hand more clicked!', record);
}

function handleEdit(record: Recordable) {
    console.log('edit clicked!');
    console.log(record);
    const searchRecords = getSearchFieldsValue()
    console.log(searchRecords)
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

function handleOther(record: Recordable) {
    console.log('handle others', record)
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

    if (type == ActionType.CREATE) {
        openModal2(true, innerRecord);
    } else {
        openModal(true, innerRecord)
    }
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

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: large;
    font-weight: 500;
}

.ant-table-row-highlight {
    background-color: blueviolet;
}
</style>