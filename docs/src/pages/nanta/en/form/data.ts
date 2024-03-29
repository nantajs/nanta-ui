import { FormSchema, VALIDATORS } from "/~/main";
export const schemes: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'info',
    label: "Info",
    component: "Label",
    componentProps: {
      label: 'Here is an label show.'
    }
  },
  {
    field: 'name2',
    label: "Info",
    component: "Label",
  },
  {
    field: 'homepage',
    label: "URL",
    component: "Input",
    colProps: { span: 24 },
    placeholder: 'Validate whether url is valid.',
    rules: [
      {
        required: true,
        validator: VALIDATORS.url,
        trigger: 'change',
      }
    ]
  },
  {
    field: 'num',
    label: 'Number Value',
    component: 'InputNumber',
    rules: [
      {
        required: true,
        validator: VALIDATORS.notNegative,
        trigger: 'change',
      }
    ]
  },
  {
    field: 'textV',
    label: 'Length Validate 3-5',
    component: 'Input',
    colProps: { span: 24 },
    rules: [
      {
        required: true,
        validator: VALIDATORS.len(3, 5),
        trigger: 'change',
      }
    ]
  },
  {
    field: 'textV3',
    label: 'Length Validate 3',
    component: 'Input',
    colProps: { span: 24 },
    rules: [
      {
        required: true,
        validator: VALIDATORS.len(3, 3),
        trigger: 'change',
      }
    ]
  },
  {
    field: 'description',
    label: "Desc",
    component: "InputTextArea",
    componentProps: {
      'auto-size': { minRows: 2, maxRows: 5 },
    },
    placeholder: 'Autosize height with minimum and maximum number of lines',
    colProps: { span: 24 },
    rules: [
      {
        required: true,
        validator: VALIDATORS.notBlank,
        trigger: 'change',
      }
    ]
  },
  {
    field: 'name',
    label: "Name",
    component: 'Input',
    defaultValue: 'nanta',
    required: true,
    helpMessage: 'User name.',
    placeholder: 'Please input user name.',
    colProps: { span: 12 },
    componentProps: ({ formActionType }) => {
      return {
        onChange: (value: any) => {
          const name = value.currentTarget.value;
          console.log('----value==', name);
          const { setFieldsValue, getFieldsValue, updateSchema } = formActionType;
          const ruleValue = [
            {
              required: true,
              validator: async (rule, value) => {
                if (!value) {
                  /* eslint-disable-next-line */
                  return Promise.reject('Address cannot be empty');
                }
              }
            }
          ];
          if (name === '#') {
            updateSchema({
              field: 'address',
              rules: ruleValue
            });
          } else {
            updateSchema({
              field: 'address',
              required: false,
              rules: []
            });
          }
        }
      }
    }
  },
  {
    field: 'email',
    label: "Email",
    component: 'Input',
    colProps: { lg: 12, md: 8 },
    rules: [
      {
        required: true,
        // @ts-ignore
        validator: VALIDATORS.email,
        trigger: 'change',
        message: 'Please input an valid email address.'
      },
    ],
  },
  {
    field: 'age',
    label: "Age",
    component: 'InputNumber',
    defaultValue: 1,
    colProps: { span: 12 },
  },
  {
    field: 'type',
    component: 'Select',
    label: 'Type',
    ifHideLabel: true,
    colProps: { span: 12 },
    placeholder: 'Please select type.',
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
    field: 'nickName',
    label: "Nick Name",
    required: true,
    colProps: { span: 12 },
    component: 'Input',
  },
  {
    field: 'address',
    label: "Address",
    colProps: { span: 12 },
    component: 'InputTextArea',
  },
  {
    field: 'field1',
    component: 'CheckboxGroup',
    label: 'CheckboxGroup_1',
    colProps: { span: 12 },
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
    colProps: { span: 12 },
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
    colProps: { span: 12 },
    renderComponentContent: 'Check',
  },
  {
    field: 'field4',
    component: 'Switch',
    label: 'Switch_4',
    colProps: { span: 12 },
  },
  {
    field: 'field5',
    component: 'RadioButtonGroup',
    label: 'RadioButtonGroup_5',
    defaultValue: 'B',
    colProps: { span: 12 },
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
    colProps: { span: 12 },
    label: 'DatePicker_6',
  },
  {
    field: 'tags',
    label: "Tags",
    colProps: { span: 12 },
    component: 'Select',
    slot: 'selectB',
    placeholder: 'Please input your tag and then press return.'
  },
  {
    field: 'field7',
    component: 'Select',
    label: 'Multi Select',
    slot: 'selectA',
    colProps: { span: 12 },
    //    defaultValue: ['value_1'],
    placeholder: 'Pls select mulit options.',
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