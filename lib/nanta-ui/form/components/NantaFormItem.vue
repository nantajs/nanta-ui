<script lang="tsx">
import { Col, Divider, Form } from 'ant-design-vue'
import type { Ref, PropType } from 'vue'
import { isBoolean, upperFirst } from 'lodash-es'
import type { FormSchema, FormProps } from '../index'
import { useItemLabelWidth } from '../hooks/useLabelWidth'
import { componentMap } from './componentMap'
import type { Nullable, Recordable } from '../../types/type'
import type { FormItemProps } from '../types/formProps'
import { formItemPorps } from '../types/formProps'
import { ref, unref, getCurrentInstance, toRefs, computed, defineComponent } from 'vue'

export default {
  props: formItemPorps,
  setup(props : FormItemProps) {
    const { schema, formProps } = toRefs(props) as {
      schema: Ref<FormSchema>;
      formProps: Ref<FormProps>;
    }
    const propsRef = ref<Partial<FormProps>>({})

    const getProps = computed((): FormProps => {
      return { ...props, ...unref(propsRef) } as FormProps
    })

    const itemLabelWidthProp = useItemLabelWidth(schema, formProps)

    function renderComponent() {
      const { component, field, changeEvent = 'change', placeholder } = props.schema

      const { size, disabled } = props.formProps
      const propsData: Recordable = {
        allowClear: true,
        size,
        disabled: !!disabled
      }

      const getValues = computed(() => {
        const { formModel, schema, allDefaultValues } = props
        // console.log('def', allDefaultValues);
        return {
          field: schema.field,
          model: formModel,
          values: {
            ...formModel,
            ...allDefaultValues
          } as Recordable,
          schema
        }
      })

      const isCreatePlaceholder = !propsData.disabled
      propsData.codeField = field
      propsData.formValues = unref(getValues)
      propsData.placeholder = placeholder

      const isCheck = component && ['Switch', 'Checkbox'].includes(component)
      const Comp = componentMap.get(component) as ReturnType<typeof defineComponent>

      const eventKey = `on${upperFirst(changeEvent)}`
      const on = {
        [eventKey]: (...args: Nullable<Recordable>[]) => {
          const [e] = args
          if (propsData[eventKey]) {
            propsData[eventKey](...args)
          }
          const target = e ? e.target : null
          const value = target ? (isCheck ? target.checked : target.value) : e
          props.setFormModel(field, value)
        }
      }

      const bindValue: Recordable = {
        [(isCheck ? 'checked' : 'value')]: props.formModel[field]
      }

      const compAttr: Recordable = {
        ...propsData,
        ...on,
        ...bindValue
      }
      return (<Comp {...compAttr} />)
    }

    function renderItem() {
      const { field, component, label, show, required } = props.schema
      const { colon } = props.formProps
      const { labelCol, wrapperCol } = unref(itemLabelWidthProp)
      return (
        <Form.Item
          name={field}
          colon={colon}
          label={label}
          labelCol={labelCol}
          required={required}
          wrapperCol={wrapperCol}>
          <div style="display:flex">
            <div style="flex:1;">{renderComponent()}</div>
          </div>
        </Form.Item>
      )
    }
    const { show } = props.schema
    // default show:true, otherwise props.shcema.show = false;
    const ifShow = !(isBoolean(show) && show === false)

    return () => {
      return (
        ifShow &&
        <Col class="ant-col-24">
          {renderItem()}
        </Col>
      )
    }
  }
}
</script>
