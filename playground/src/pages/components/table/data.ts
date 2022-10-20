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
    field: 'tags',
    label: "Tags",
    component: 'Input',
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
    field: 'address',
    label: "Address",
    component: 'InputTextArea',
  },
]