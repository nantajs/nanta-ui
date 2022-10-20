<script lang="tsx">
import { Col, Divider, Form } from "ant-design-vue";
import type { Ref, PropType } from "vue";
import type { Rule } from "ant-design-vue/lib/form"
import { isBoolean, upperFirst, isFunction, cloneDeep, isNull } from "lodash-es";
import type { FormSchema, FormProps } from "../index";
import { useItemLabelWidth } from "../hooks/useLabelWidth";
import { componentMap } from "./componentMap";
import type { Nullable, Recordable } from "../../..";
import type { FormItemProps } from "../types/formProps";
import { formItemPorps } from "../types/formProps";
import { createPlaceholderMessage, setComponentRuleType } from "../help";
import { ref, unref, getCurrentInstance, toRefs, computed, defineComponent } from "vue";
import { getSlot } from "../helper";

export default {
  props: formItemPorps,
  // @ts-ignore
  setup(props: FormItemProps, { slots }) {
    const { schema, formProps } = toRefs(props) as {
      schema: Ref<FormSchema>;
      formProps: Ref<FormProps>;
    };
    const propsRef = ref<Partial<FormProps>>({});

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

    const getProps = computed(
      (): FormProps => {
        return { ...props, ...unref(propsRef) } as FormProps;
      }
    );

    const itemLabelWidthProp = useItemLabelWidth(schema, formProps);

    const getComponentsProps = computed(() => {
      const { schema, formModel, formActionType } = props;
      let { componentProps = {} } = schema;
      if (isFunction(componentProps)) {
        componentProps = componentProps({ schema, formActionType, formModel }) ?? {};
      }
      if (schema.component === "Divider") {
        componentProps = Object.assign({ type: "horizontal" }, componentProps, {
          orientation: "left",
          plain: true,
        });
      }
      return componentProps as Recordable;
    });
    function getShow(): { isShow: boolean; isIfShow: boolean } {
      const { show, ifShow } = props.schema;
      const itemIsAdvanced = false;

      let isShow = true;
      let isIfShow = true;

      if (isBoolean(show)) {
        isShow = show;
      }
      if (isBoolean(ifShow)) {
        isIfShow = ifShow;
      }
      if (isFunction(show)) {
        isShow = show(unref(getValues));
      }
      if (isFunction(ifShow)) {
        isIfShow = ifShow(unref(getValues));
      }
      isShow = isShow && itemIsAdvanced;
      return { isShow, isIfShow };
    }

    function handleRules(): Rule[] {
      const {
        rules: defRules = [],
        component,
        label,
        dynamicRules,
        required,
      } = props.schema;

      if (isFunction(dynamicRules)) {
        return dynamicRules(unref(getValues)) as Rule[];
      }

      let rules: Rule[] = cloneDeep(defRules) as Rule[];
      const defaultMsg = createPlaceholderMessage(component);

      function validator(rule: any, value: any) {
        const msg = rule.message || defaultMsg;
        if (value === undefined || isNull(value)) {
          // 空值
          return Promise.reject(msg);
        } else if (Array.isArray(value) && value.length === 0) {
          // 数组类型
          return Promise.reject(msg);
        } else if (typeof value === "string" && value.trim() === "") {
          // 空字符串
          return Promise.reject(msg);
        } else if (
          typeof value === "object" &&
          Reflect.has(value, "checked") &&
          Reflect.has(value, "halfChecked") &&
          Array.isArray(value.checked) &&
          Array.isArray(value.halfChecked) &&
          value.checked.length === 0 &&
          value.halfChecked.length === 0
        ) {
          // 非关联选择的tree组件
          return Promise.reject(msg);
        }
        return Promise.resolve();
      }

      const getRequired = isFunction(required) ? required(unref(getValues)) : required;

      /*
       * 1、若设置了required属性，又没有其他的rules，就创建一个验证规则；
       * 2、若设置了required属性，又存在其他的rules，则只rules中不存在required属性时，才添加验证required的规则
       *     也就是说rules中的required，优先级大于required
       */
      if (getRequired) {
        if (!rules || rules.length === 0) {
          rules = [{ required: getRequired, validator }];
        } else {
          const requiredIndex: number = rules.findIndex((rule) =>
            Reflect.has(rule, "required")
          );

          if (requiredIndex === -1) {
            rules.push({ required: getRequired, validator });
          }
        }
      }

      const requiredRuleIndex: number = rules.findIndex(
        (rule) => Reflect.has(rule, "required") && !Reflect.has(rule, "validator")
      );

      if (requiredRuleIndex !== -1) {
        const rule = rules[requiredRuleIndex];
        const { isShow } = getShow();
        if (!isShow) {
          rule.required = false;
        }
        if (component) {
          if (!Reflect.has(rule, "type")) {
            rule.type = component === "InputNumber" ? "number" : "string";
          }

          rule.message = rule.message || defaultMsg;

          if (component.includes("Input") || component.includes("Textarea")) {
            rule.whitespace = true;
          }
          const valueFormat = unref(getComponentsProps)?.valueFormat;
          setComponentRuleType(rule, component, valueFormat);
        }
      }

      // Maximum input length rule check
      const characterInx = rules.findIndex((val) => val.max);
      if (characterInx !== -1 && !rules[characterInx].validator) {
        rules[characterInx].message =
          rules[characterInx].message ||
          'The number of characters should be less than ' + [rules[characterInx].max];
      }
      return rules;
    }

    function renderComponent() {
      const {
        component,
        field,
        changeEvent = "change",
        placeholder,
        renderComponentContent,
      } = props.schema;

      const { size, disabled } = props.formProps;
      const propsData: Recordable = {
        allowClear: true,
        size,
        ...unref(getComponentsProps),
        disabled: !!disabled,
      };

      const getValues = computed(() => {
        const { formModel, schema, allDefaultValues } = props;
        // console.log('def', allDefaultValues);
        return {
          field: schema.field,
          model: formModel,
          values: {
            ...formModel,
            ...allDefaultValues,
          } as Recordable,
          schema,
        };
      });

      const isCreatePlaceholder = !propsData.disabled;
      propsData.codeField = field;
      propsData.formValues = unref(getValues);
      propsData.placeholder = placeholder;

      const isCheck = component && ["Switch", "Checkbox"].includes(component);
      const Comp = componentMap.get(component) as ReturnType<typeof defineComponent>;

      const eventKey = `on${upperFirst(changeEvent)}`;
      const on = {
        [eventKey]: (...args: Nullable<Recordable>[]) => {
          const [e] = args;
          if (propsData[eventKey]) {
            propsData[eventKey](...args);
          }
          const target = e ? e.target : null;
          const value = target ? (isCheck ? target.checked : target.value) : e;
          props.setFormModel(field, value);
        },
      };

      const bindValue: Recordable = {
        [isCheck ? "checked" : "value"]: props.formModel[field],
      };

      const compAttr: Recordable = {
        ...propsData,
        ...on,
        ...bindValue,
      };

      if (!renderComponentContent) {
        return <Comp {...compAttr} />;
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
      const {
        field,
        component,
        label,
        show,
        required,
        slot,
        render,
        suffix,
      } = props.schema;
      const { colon } = props.formProps;
      const { labelCol, wrapperCol } = unref(itemLabelWidthProp);
      if (component === "Divider") {
        return (
          <Col span={24}>
            <Divider {...unref(getComponentsProps)}></Divider>
          </Col>
        );
      } else {
        const getRenderContent = () => {
          return slot
            ? getSlot(slots, slot, unref(getValues))
            : render
              ? render(unref(getValues))
              : renderComponent();
        };

        const showSuffix = !!suffix;
        const getSuffix = isFunction(suffix) ? suffix(unref(getValues)) : suffix;

        return (
          <Form.Item
            name={field}
            colon={colon}
            class={{ "suffix-item": showSuffix }}
            label={label}
            rules={handleRules()}
            labelCol={labelCol}
            required={required}
            wrapperCol={wrapperCol}
          >
            <div style="display:flex">
              <div style="flex:1;">{getRenderContent()}</div>
              {showSuffix && <span class="suffix">{getSuffix}</span>}
            </div>
          </Form.Item>
        );
      }
    }
    const { show } = props.schema;
    // default show:true, otherwise props.shcema.show = false;
    const ifShow = !(isBoolean(show) && show === false);

    return () => {
      return ifShow && <Col class="ant-col-24">{renderItem()}</Col>;
    };
  },
};
</script>
