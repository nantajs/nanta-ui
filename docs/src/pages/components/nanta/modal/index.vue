<template>
    <div>
        <div class="fbox">
            <div class="fbox-line">
                <NantaButton type="primary" @click="clickBasicModal">NantaModal</NantaButton>
                <NantaButton @click="clickFormModal">NantaFormModal</NantaButton>
                <NantaButton type="dashed" @click="clickModal">ConfirmModal</NantaButton>
                <NantaButton type="text">Text Button</NantaButton>
                <NantaButton type="link">Link Button</NantaButton>
            </div>
        </div>

        <NantaModal @register="registerBasic"></NantaModal>
        <NantaFormModal @register="registerFormModal" v-bind="mProps" @ok="onSubmit">
            <template #selectTag="{ model, field, schema }">
                <a-select :options="optionsTag" mode="tags" :token-separators="[',']" v-model:value="model[field]"
                    :placeholder="schema.placeholder" allowClear />
            </template>
        </NantaFormModal>

        <DatePicker v-model:value="value1" :format="dateFormat" />
    </div>
</template>

<script setup lang="ts">
import {
    NantaButton,
    NantaFormModal,
    NantaModal,
    useModal,
    NantaFormModalProps,
} from "/~/main";
import { editModalSchema } from "../table/data";
import type { SelectProps } from 'ant-design-vue';
import { DatePicker, Modal } from 'ant-design-vue';
import { ref, createVNode } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

const [registerBasic, { openModal }] = useModal({ title: "Basic Modal" });
const [registerFormModal, { openModal: openFormModal }] = useModal();

function clickBasicModal() {
    openModal(true, { title: "Basic Nanta Modal", record: { name: "Nanta UI" } });
}

const dateFormat = 'YYYY/MM/DD';
const value1 = ref<Dayjs>(dayjs('2015/01/01', dateFormat));

const date = new Date('2023-02-11T07:29:09.000+00:00');
const date2 = '2023-02-14T07:29:09.000+00:00';
const date3 = '2023-02-17T07:29:09.000+00:00';
function clickFormModal() {
    openFormModal(true, {
        title: "Nanta Form Modal",
        record: { name: "Aborn Jiang", id: "20220412", tags: ['init', 'ie'], date: date, date2: date2, date3: dayjs(date3) },
    });
}

function clickModal() {
    Modal.confirm({
        title: 'Confirm',
        icon: createVNode(ExclamationCircleOutlined as any),
        content: 'Bla bla ...',
        okText: '确认',
        cancelText: '取消',
        onCancel: (...args: any[]) => {
            console.log('cancel...', args)
        },
        onOk: (...args: any[]) => {
            console.log('ok...', args)
        }
    });
}

const optionsTag = ref<SelectProps['options']>([
]);

const mProps: NantaFormModalProps = {
    schemas: editModalSchema,
    colon: true,
    modalProps: {
        okText: "I'm sure.",
        cancelText: "Reject",
    },
};

function onSubmit(newValue: Recordable, oldValue: Recordable) {
    console.log('newValue:', newValue, 'oldValue:', oldValue)
}
</script>

<style scoped>
.fbox {
    display: grid;
    grid-gap: 1rem;
    margin: 0 auto;
    width: 100%;
}

.fbox-line {
    display: flex;
    margin-right: 1rem;
}

.fbox-line .ant-btn {
    margin-right: 0.5rem;
}
</style>
