<template>
  <Form v-bind="getBindValue" :class="getFormClass" ref="formElRef" :model="formModel" @keypress.enter="handleEnterPress">
    <Row v-bind="getRow">
      <slot name="formHeader" />
      <template v-for="schema in getSchema" :key="schema.field">
        <NantaFormItem :schema="schema" :form-props="getProps" :form-model="formModel" :set-form-model="setFormModel"
          :all-default-values="defaultValueRef" :formActionType="formActionType">
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </NantaFormItem>
      </template>

      <NantaFormAction v-bind="getFormActionBindProps">
        <template v-for="item in ['resetBefore', 'submitBefore', 'advanceBefore', 'advanceAfter']" #[item]="data">
          <slot :name="item" v-bind="data || {}" />
        </template>
      </NantaFormAction>
      <slot name="formFooter" />
    </Row>
  </Form>
</template>

<script lang="ts" setup>
import { Form, Row } from "ant-design-vue";
import type { NamePath } from "ant-design-vue/lib/form/interface";
import { cloneDeep, set, isFunction } from "lodash-es";
import { formProps, FormProps } from "./types/formProps";
import { FormSchema, FormActionType } from './types/type';
import { useFormSchema } from "./hooks/useFormSchema";
import NantaFormItem from "./components/NantaFormItem.vue";
import NantaFormAction from "./components/NantaFormAction.vue";
import type { Ref } from "vue";
import { itemIsDateType, dateUtil, tryDeconstructArray, tryDeconstructObject, handleRangeTimeValue, defaultValueComponents } from "../../utils/helper/helper";
import { handleInputNumberValue } from "./help"
import { isNullOrUnDef, isObject, isArray, isString } from "../../utils/is";
import { deepMerge } from "../../utils/util";
import type { Nullable, Recordable } from "../../core/types/type";
import { ref, unref, getCurrentInstance, reactive, computed, toRaw, watch, onMounted, nextTick, useAttrs } from "vue";

const props = defineProps(formProps);
const emits = defineEmits(["register", "field-value-change", "reset", "submit", "registered"]);
const attrs = useAttrs();
const propsRef = ref<Partial<FormProps>>({});
const schemaRef = ref<Nullable<FormSchema[]>>(null);
const formElRef = ref<Nullable<FormActionType>>(null);
const formModel = reactive<Recordable>({});
const defaultValueRef = ref<Recordable>({});
const isInitedDefaultRef = ref(false);

const getProps = computed((): FormProps => {
  /* @ts-ignore */
  return { ...props, ...unref(propsRef) } as FormProps;
}
);

const getRow = computed((): Recordable => {
  const { baseRowStyle = {}, rowProps } = unref(getProps);
  return {
    style: baseRowStyle,
    ...rowProps,
  };
}
);

const prefixCls = 'nanta-basic-form';
const getFormClass = computed(() => {
  return [
    prefixCls,
    {
      [`${prefixCls}--compact`]: unref(getProps).compact,
    },
  ];
});

const actionProps = {
  resetAction: handleReset,
  submitAction: handleSubmit,
};
const getFormActionBindProps = computed(
  (): Recordable => ({ ...getProps.value, ...actionProps })
);

const getSchema = computed((): FormSchema[] => {
  const schemas: FormSchema[] = unref(schemaRef) || (unref(getProps).schemas as any);
  // console.log('dddd', schemas)
  for (const schema of schemas) {
    const { defaultValue, component } = schema;
    // todo handle date type (make a transfer)
  }
  const res = cloneDeep(schemas as FormSchema[]);
  // console.log('res...', res)
  return res;
});

const getBindValue = computed(
  () => ({ ...attrs, ...props, ...unref(getProps) } as Recordable)
);

async function setProps(formProps: Partial<FormProps>): Promise<void> {
  propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
}

const { updateSchema, resetSchema, appendSchemaByField, removeSchemaByFiled, scrollToField, } = useFormSchema({
  getProps, formModel, getSchema,
  defaultValueRef, formElRef: formElRef as Ref<FormActionType>, schemaRef: schemaRef as Ref<FormSchema[]>,
  handleFormValues, getFieldsValue, setFieldsValue,
});

function getFieldsValue(): Recordable {
  const formEl = unref(formElRef);
  if (!formEl) {
    return {};
  }
  return handleFormValues(toRaw(unref(formModel)));
}

async function resetFields(): Promise<void> {
  const { resetFn, submitOnReset } = unref(getProps);
  if (resetFn && isFunction(resetFn)) {
    await resetFn();
    return;
  }

  const formEl = unref(formElRef);
  if (!formEl) {
    return;
  }

  Object.keys(formModel).forEach((key) => {
    const schema = unref(getSchema).find((item) => item.field === key);
    const isInput =
      schema?.component && defaultValueComponents.includes(schema.component);
    // TODO 处理默认值！！
    const defaultValue = cloneDeep(defaultValueRef.value[key]);
    formModel[key] = isInput ? defaultValue || "" : defaultValue;
  });

  emits("reset", toRaw(formModel));
  submitOnReset && handleSubmit();
}

async function setFieldsValue(values: Recordable): Promise<void> {
  const fields = unref(getSchema)
    .map((item) => item.field)
    .filter(Boolean);

  // TODO key 支持 a.b.c 的嵌套写法
  const delimiter = ".";
  const nestKeyArray = fields.filter((item) => item.includes(delimiter));

  const validKeys: string[] = [];
  Object.keys(values).forEach((key) => {
    const schema = unref(getSchema).find((item) => item.field === key);
    let value = values[key];

    const hasKey = Reflect.has(values, key);

    value = handleInputNumberValue(schema?.component, value);
    // 0| '' is allow
    if (hasKey && fields.includes(key)) {
      // time type
      if (itemIsDateType(schema?.component)) {
        if (Array.isArray(value)) {
          const arr: any[] = [];
          for (const ele of value) {
            arr.push(ele ? dateUtil(ele) : null);
          }
          formModel[key] = arr;
        } else {
          // TODO 字段联动没有处理!
          formModel[key] = value || null;
        }
      } else {
        formModel[key] = value;
      }
      validKeys.push(key);
    }
  });
  validateFields(validKeys).catch((_) => { });
}

async function validateFields(nameList?: NamePath[] | undefined) {
  return unref(formElRef)?.validateFields(nameList);
}

async function validate(nameList?: NamePath[] | undefined) {
  return await unref(formElRef)?.validate(nameList);
}

async function clearValidate(name?: string | string[]) {
  await unref(formElRef)?.clearValidate(name);
}

function setFormModel(key: string, value: any) {
  formModel[key] = value;
  emits("field-value-change", key, value);
}

function handleEnterPress(e: KeyboardEvent) {
  const { autoSubmitOnEnter } = unref(getProps);
  if (!autoSubmitOnEnter) {
    return;
  }
  if (e.key === "Enter" && e.target && e.target instanceof HTMLElement) {
    const target: HTMLElement = e.target as HTMLElement;
    if (target && target.tagName && target.tagName.toUpperCase() == "INPUT") {
      handleSubmit();
    }
  }
}

async function handleSubmit(e?: Event): Promise<void> {
  e && e.preventDefault();
  const { submitFn } = unref(getProps);
  if (submitFn && isFunction(submitFn)) {
    await submitFn();
    return;
  }
  const formEl = unref(formElRef);
  if (!formEl) {
    return;
  }
  try {
    const values = await validate();
    const res = handleFormValues(values);
    emits("submit", res);
  } catch (error: any) {
    throw new Error(error);
  }
}

async function handleReset(e?: Event): Promise<void> {
  e && e.preventDefault();
  resetFields();
}

function handleFormValues(values: Recordable) {
  if (!isObject(values)) {
    return {};
  }
  const res: Recordable = {};
  for (const item of Object.entries(values)) {
    let [, value] = item;
    const [key] = item;
    if (!key || (isArray(value) && value.length === 0) || isFunction(value)) {
      continue;
    }
    const transformDateFunc = unref(getProps).transformDateFunc;
    if (isObject(value)) {
      value = transformDateFunc?.(value);
    }

    if (isArray(value) && value[0]?.format && value[1]?.format) {
      value = value.map((item: any) => transformDateFunc?.(item));
    }
    // Remove spaces
    if (isString(value)) {
      value = value.trim();
    }
    if (!tryDeconstructArray(key, value, res) && !tryDeconstructObject(key, value, res)) {
      // 没有解构成功的，按原样赋值
      set(res, key, value);
    }
  }
  const fieldMapToTime = unref(getProps).fieldMapToTime;
  return handleRangeTimeValue(res, fieldMapToTime);
}

watch(
  () => unref(getProps).model,
  () => {
    const { model } = unref(getProps);
    if (!model) {
      return;
    }
    setFieldsValue(model);
  },
  {
    immediate: true,
  }
);

watch(
  () => getSchema.value,
  (schema) => {
    nextTick(() => { });
    if (unref(isInitedDefaultRef)) {
      return;
    }
    if (schema?.length) {
      initDefault();
      isInitedDefaultRef.value = true;
    }
  }
);

function initDefault() {
  const schemas = unref(getSchema);
  const obj: Recordable = {};
  schemas.forEach((item) => {
    const { defaultValue } = item;
    if (!isNullOrUnDef(defaultValue)) {
      obj[item.field] = defaultValue;

      if (formModel[item.field] === undefined) {
        formModel[item.field] = defaultValue;
      }
    }
  });
  defaultValueRef.value = cloneDeep(obj);
}

const formActionType: Partial<FormActionType> = {
  getFieldsValue,
  setFieldsValue,
  resetFields,
  updateSchema,
  resetSchema,
  removeSchemaByFiled,
  appendSchemaByField,
  setProps,
  clearValidate,
  validateFields,
  validate,
  submit: handleSubmit,
  scrollToField: scrollToField,
};

onMounted(() => {
  const instance = getCurrentInstance();
  // console.log("NantaForm inited, id", instance?.uid);
  initDefault();
  emits("register", formActionType);
  emits("registered");
});
</script>
<style lang="less">
@prefix-cls: ~'nanta-basic-form';

.@{prefix-cls} {
  padding: 16px;

  .ant-form-item {
    &-label label::after {
      margin: 0 6px 0 2px;
    }

    &-with-help {
      margin-bottom: 0;
    }

    &:not(.ant-form-item-with-help) {
      margin-bottom: 20px;
    }

    &.suffix-item {
      .ant-form-item-children {
        display: flex;
      }

      .ant-form-item-control {
        margin-top: 4px;
      }

      .suffix {
        display: inline-flex;
        padding-left: 6px;
        margin-top: 1px;
        line-height: 1;
        align-items: center;
      }
    }
  }

  .ant-form-explain {
    font-size: 14px;
  }

  &--compact {
    .ant-form-item {
      margin-bottom: 8px !important;
    }
  }
}
</style>
