<template>
    <div>        
        <a-card title="基础表单" :bordered="false">
            <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm"
                @registered="onRegisted" @submit="handleSubmit" @reset="handleReset">                
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

  