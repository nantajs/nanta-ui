<script lang="tsx">
import { Col, Divider, Form } from 'ant-design-vue'
import type { Ref, PropType } from 'vue'
import { isBoolean, upperFirst, isFunction } from 'lodash-es'
import type { FormSchema, FormProps } from '../index'
import { useItemLabelWidth } from '../hooks/useLabelWidth'
import { componentMap } from './componentMap'
import type { Nullable, Recordable } from '../../..'
import type { FormItemProps } from '../types/formProps'
import { formItemPorps } from '../types/formProps'
import { ref, unref, getCurrentInstance, toRefs, computed, defineComponent } from 'vue'
import { getSlot } from '../helper'

export default {
  props: formItemPorps,
  // @ts-ignore
  setup(props: FormItemProps, { slots }) {
    const { schema, formProps } = toRefs(props) as {
      schema: Ref<FormSchema>;
      formProps: Ref<FormProps>;
    }
    const propsRef = ref<Partial<FormProps>>({})

    const getValues = computed(() => {
      const { allDefaultValues, formModel, schema } = props;
      return {
        field: schema.field,
        model: formModel,
        values: {
          ...allDefaultValues,
          ...formModel,
        } as Recordable,
        schema: schema,
      };
    });

    const getProps = computed((): FormProps => {
      return { ...props, ...unref(propsRef) } as FormProps
    })

    const itemLabelWidthProp = useItemLabelWidth(schema, formProps)

    const getComponentsProps = computed(() => {
      const { schema, formModel, formActionType } = props;
      let { componentProps = {} } = schema;
      if (isFunction(componentProps)) {
        componentProps = componentProps({ schema, formActionType, formModel }) ?? {};
      }
      if (schema.component === 'Divider') {
        componentProps = Object.assign({ type: 'horizontal' }, componentProps, {
          orientation: 'left',
          plain: true,
        });
      }
      return componentProps as Recordable;
    });

    function renderComponent() {
      const { component, field, changeEvent = 'change', placeholder, renderComponentContent } = props.schema

      const { size, disabled } = props.formProps
      const propsData: Recordable = {
        allowClear: true,
        size,
        ...unref(getComponentsProps),
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

      if (!renderComponentContent) {
        return (<Comp {...compAttr} />)
      } else {
        const compSlot = isFunction(renderComponentContent)
          ? { ...renderComponentContent(unref(getValues)) }
          : {
            default: () => renderComponentContent,
          };
        return <Comp {...compAttr}>{compSlot}</Comp>;
      }
    }

    function renderItem() {
      const { field, component, label, show, required, slot, render, suffix } = props.schema
      const { colon } = props.formProps
      const { labelCol, wrapperCol } = unref(itemLabelWidthProp)
      if (component === 'Divider') {
        return (
          <Col span={24}>
            <Divider {...unref(getComponentsProps)}></Divider>
          </Col>
        );
      } else {
        const getRenderContent = () => {
          return slot ? getSlot(slots, slot, unref(getValues)) : render ? render(unref(getValues)) : renderComponent();
        };

        const showSuffix = !!suffix;
        const getSuffix = isFunction(suffix) ? suffix(unref(getValues)) : suffix;

        return (
          <Form.Item
            name={field}
            colon={colon}
            class={{ 'suffix-item': showSuffix }}
            label={label}
            labelCol={labelCol}
            required={required}
            wrapperCol={wrapperCol}>
            <div style="display:flex">
              <div style="flex:1;">{getRenderContent()}</div>
              {showSuffix && <span class="suffix">{getSuffix}</span>}
            </div>
          </Form.Item>
        )
      }
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