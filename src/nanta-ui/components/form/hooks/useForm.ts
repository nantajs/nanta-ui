import type { NamePath } from 'ant-design-vue/lib/form/interface'
import { ref, onUnmounted, unref, nextTick, watch } from 'vue'
import type { FormProps, FormActionType, UseFormReturnType, FormSchema } from '../index'
import { isProdMode } from '../../../utils/env'
import { getDynamicProps, error } from '../../../utils/util'
import type { Nullable, Recordable, DynamicProps, Fn } from '../../..'

export declare type ValidateFields = (nameList?: NamePath[]) => Promise<Recordable>;

type Props = Partial<DynamicProps<FormProps>>;

export function useForm (props?: Props): UseFormReturnType {
  const formRef = ref<Nullable<FormActionType>>(null)
  const loadedRef = ref<Nullable<boolean>>(false)

  async function getForm () {
    const form = unref(formRef)
    if (!form) {
      error('The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!')
    }
    await nextTick()
    return form as FormActionType
  }

  function register (instance: FormActionType) {
    isProdMode() &&
      onUnmounted(() => {
        formRef.value = null
        loadedRef.value = null
      })
    if (unref(loadedRef) && isProdMode() && instance === unref(formRef)) { return }

    formRef.value = instance
    loadedRef.value = true

    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props))
      },
      {
        immediate: true,
        deep: true
      }
    )
  }

  const methods: FormActionType = {
    appendSchemaByField: async (schema: FormSchema, prefixField: string | undefined, first?: boolean) => {
      const form = await getForm()
      form.appendSchemaByField(schema, prefixField, first)
    },

    clearValidate: async (name?: string | string[]) => {
      const form = await getForm()
      form.clearValidate(name)
    },

    // TODO promisify
    getFieldsValue: <T>() => {
      return unref(formRef)?.getFieldsValue() as T
    },
    setFieldsValue: async <T>(values: Recordable) => {
      const form = await getForm()
      form.setFieldsValue<T>(values)
    },

    resetFields: async () => {
      getForm().then(async (form) => {
        await form.resetFields()
      })
    },

    removeSchemaByFiled: async (field: string | string[]) => {
      unref(formRef)?.removeSchemaByFiled(field)
    },

    resetSchema: async (data: Partial<FormSchema> | Partial<FormSchema>[]) => {
      const form = await getForm()
      form.resetSchema(data)
    },

    submit: async (): Promise<any> => {
      const form = await getForm()
      return form.submit()
    },

    scrollToField: async (name: NamePath, options?: ScrollOptions | undefined) => {
      const form = await getForm()
      form.scrollToField(name, options)
    },
    setProps: async (formProps: Partial<FormProps>) => {
      const form = await getForm()
      form.setProps(formProps)
    },

    updateSchema: async (data: Partial<FormSchema> | Partial<FormSchema>[]) => {
      const form = await getForm()
      form.updateSchema(data)
    },

    validate: async (nameList?: NamePath[]): Promise<Recordable> => {
      const form = await getForm()
      return form.validate(nameList)
    },

    validateFields: async (nameList?: NamePath[]): Promise<Recordable> => {
      const form = await getForm()
      return form.validateFields(nameList)
    }    
  }

  return [register, methods]
}
