import { FormSchema } from "/~/main";
export const schemes: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: "Name",
    component: 'Input',
    defaultValue: 'nanta',
    required: true,
    helpMessage: 'User name.',
    placeholder: 'Please input user name.',
    componentProps: ({ formActionType }) => {
      return {
        onChange: (value: any) => {
          const name = value.currentTarget.value;
          console.log('----value==', name);
          const { setFieldsValue, getFieldsValue, updateSchema } = formActionType;
          updateSchema({
            field: 'address',            
            rules: [
              {
                required: name === '#',
                validator: async (rule, value) => {
                  if (!value) {
                    /* eslint-disable-next-line */
                    return Promise.reject('Address not empty');
                  }
                }
              }
            ]                        
          });
        }
      }
    }
  },
  {
    field: 'email',
    label: "Email",
    component: 'Input',
    rules: [
      {
        required: true,
        // @ts-ignore
        validator: async (rule, value) => {
          if (!value) {
            /* eslint-disable-next-line */
            return Promise.reject('值不能为空');
          }
          if (value === '1') {
            /* eslint-disable-next-line */
            return Promise.reject('值不能为1');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'age',
    label: "Age",
    component: 'InputNumber',
    defaultValue: 1,
  },
  {
    field: 'type',
    component: 'Select',
    label: 'Type',
    componentProps: {
      options: [
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
      ],
    },
  },
  {
    field: 'tags',
    label: "Tags",
    component: 'Input',
  },
  {
    field: 'address',
    label: "Address",
    component: 'InputTextArea',
  },
  {
    field: 'field1',
    component: 'CheckboxGroup',
    label: 'CheckboxGroup_1',
    defaultValue: ['v2', 'v1'],
    componentProps: {
      options: [
        {
          label: 'Check_1',
          value: 'v1',
        },
        {
          label: 'Check_2',
          value: 'v2',
        },
        {
          label: 'Check_3',
          value: 'v3',
        },
      ],
    },
  },
  {
    field: 'field2',
    component: 'RadioGroup',
    label: 'RadioGroup_2',
    required: true,
    componentProps: {
      options: [
        {
          label: 'Check_1',
          value: 'v1',
        },
        {
          label: 'Check_2',
          value: 'v2',
        },
      ],
    },
  },
  {
    field: 'field3',
    component: 'Checkbox',
    label: 'Checkbox_3',
    renderComponentContent: 'Check',
  },
  {
    field: 'field4',
    component: 'Switch',
    label: 'Switch_4',
  },
  {
    field: 'field5',
    component: 'RadioButtonGroup',
    label: 'RadioButtonGroup_5',
    defaultValue: 'B',
    componentProps: {
      options: [
        {
          label: 'Button_A',
          value: 'A',
        },
        {
          label: 'Button_B',
          value: 'B',
        },
      ],
    },
  },
  {
    field: 'field6',
    component: 'DatePicker',
    label: 'DatePicker_6',
  },
  {
    field: 'field7',
    component: 'Select',
    label: 'Multi Select',
    slot: 'selectA',
    defaultValue: ['value_1'],
    componentProps: {
      options: [
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
      ],
    },
  },
]