<template>
    <div>
        <a-card title="联动表单" :bordered="false">
            <template #extra>
                显示表单两个字段之间的联动效果
            </template>
            <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm"
                @submit="handleSubmit" @reset="handleReset">
            </NantaForm>
        </a-card>
    </div>
</template>
  
<script setup lang="ts">
import { NantaForm, useForm, FormProps, Recordable, ApiSelect } from '/~/main'
import { schemes } from "./datalinkage";
import { computed } from "vue";

const [
    registerForm,
    { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields, clearValidate },
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

const customizeResetFn = (): Promise<void> => {
    const values = getFieldsValue()
    console.log(values)

    console.log("here is a customize resetFn called!");
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

  