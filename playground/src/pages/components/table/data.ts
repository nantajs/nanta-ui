import { FormSchema } from "~~/components/nanta/form";
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
    field: 'address',
    label: "Address",
    component: 'InputTextArea',
  },
]