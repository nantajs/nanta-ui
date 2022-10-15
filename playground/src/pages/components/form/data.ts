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
    placeholder: 'Please input user name.',
  },
  {
    field: 'email',
    label: "Email",
    component: 'Input',
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
    label: 'field1',
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
    field: 'field2',
    component: 'RadioGroup',
    label: 'field2',
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
    label: 'field3',
  },
  {
    field: 'field4',
    component: 'Switch',
    label: 'field4',
  },
  {
    field: 'field5',
    component: 'RadioButtonGroup',
    label: 'field5',
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
    label: 'field6',
  },
  {
    field: 'field7',
    component: 'Select',
    label: 'Multi Select',
    slot: 'selectA',
    defaultValue: [],
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