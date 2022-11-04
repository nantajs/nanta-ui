<template>
    <div>
        <div class="fbox">
            <div class="fbox-line">
                <NantaButton type="primary" @click="clickBasicModal">Basic Modal</NantaButton>
                <NantaButton @click="clickFormModal">FormModal</NantaButton>
                <NantaButton type="dashed">Dashed Button</NantaButton>
                <NantaButton type="text">Text Button</NantaButton>
                <NantaButton type="link">Link Button</NantaButton>
            </div>
        </div>

        <NantaModal @register="registerBasic"></NantaModal>
        <NantaFormModal @register="registerFormModal" v-bind="mProps"></NantaFormModal>
    </div>
</template>

<script setup lang="ts">
import { NantaButton, NantaFormModal, NantaModal, useModal, NantaFormModalProps } from "/~/main";
import { editModalSchema } from '../table/data'

const [registerBasic, { openModal, closeModal }] = useModal({ title: 'Basic Modal', okText: 'Yes' });
const [registerFormModal, { openModal: openFormModal }] = useModal();

function clickBasicModal() {
    openModal(true, { title: 'Basic Nanta Modal', record: { "a": "value" } });
}

function clickFormModal() {
    openFormModal(true, { title: "Nanta Form Modal", record: { "name": "Aborn Jiang" } })
}

const mProps: NantaFormModalProps = {
    schemas: editModalSchema,
    colon: true,
    modalProps: {
        okText: "I'm sure.",
        cancelText: 'Reject',
    }
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
    margin-right: .5rem;
}
</style>