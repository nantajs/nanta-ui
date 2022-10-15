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
]