<template>
    <div>        
        <a-card title="基础表单" :bordered="false">
            <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm"
                @registered="onRegisted" @submit="handleSubmit" @reset="handleReset">
                <template #selectA="{ model, field, schema }">
                    <a-select :options="optionsA" mode="multiple" v-model:value="model[field]"
                        :placeholder="schema.placeholder" allowClear />
                </template>
                <template #selectB="{ model, field, schema }">
                    <a-select :options="optionsB" mode="tags" :token-separators="[',']" v-model:value="model[field]"
                        :placeholder="schema.placeholder" allowClear />
                </template>
                <template #localSearch="{ model, field }">
                    <ApiSelect :api="optionsListApi" showSearch v-model:value="model[field]" optionFilterProp="label"
                        resultField="list" labelField="name" mode="multiple" valueField="value" @change="changedAction" />
                </template>
                <template #remoteSearch="{ model, field }">
                    <ApiSelect :api="optionsListApi" showSearch v-model:value="model[field]" :filterOption="false"
                        @change="changedAction" resultField="list" labelField="name" valueField="value"
                        :params="searchParams" @search="onSearch" />
                </template>
            </NantaForm>
        </a-card>
    </div>
</template>
  
<script setup lang="ts">
import { NantaForm, useForm, FormProps, Recordable, ApiSelect } from '/~/main'
import type { SelectProps } from 'ant-design-vue';
import { ref, unref } from 'vue';
import { schemes, optionsListApi } from "./data";
import { computed } from "vue";

const keyword = ref<string>('');
const searchParams = computed<Recordable>(() => {
    return { keyword: unref(keyword) };
});

function onSearch(value: string) {
    keyword.value = value;
}

const changedAction = (options) => {
    console.log('选中了:', options)
}

const optionsA = [
    {
        label: 'Option1',
        value: 'value_1',
        key: '1',
    },
    {
        label: 'Option2',
        value: 'value_2',
        key: '2',
    },
    {
        label: 'Option3',
        value: 'value_3',
        key: '3',
    },
]

const optionsB = ref<SelectProps['options']>([
]);

const [
    registerForm,
    { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields },
] = useForm({
    submitButtonOptions: {
        text: '提交',
    },
    labelWidth: 150,
    schemas: schemes,
    actionColOptions: {
        span: 24,
    },
});

const onRegisted = () => {
    setFieldsValue({
        age: 100,
        email: "aborn@aborn.me"
    })
}

const customizeResetFn = (): Promise<void> => {
    const values = getFieldsValue()
    console.log(values)

    console.log("here is a customize resetFn called!");
    setFieldsValue({
        age: 0,
        email: "nanta-ui@nantajs.dev",
        name: "Nanta",
    });
    return new Promise((resolve, reject) => {
        try {
            resolve();
        } catch (err) {
            reject(err);
        }
    });
};

const formProps: FormProps = {
    resetFn: customizeResetFn,
    colon: true,
};

const getFormProps = computed((): Recordable => ({ ...formProps }));

const handleSubmit = (values: any) => {
    console.log("values", values);
    console.log("handleSubmit btn clicked!");
};

const handleReset = () => {
    console.log("handleReset but click");
};

</script>
  
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
  