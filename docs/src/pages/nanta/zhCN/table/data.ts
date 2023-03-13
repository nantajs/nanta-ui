import { BasicColumn, CellFormat, FormSchema } from "/~/main";



export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: 'Name',
    component: 'Input',
    colProps: { span: 8 }, 
  },
  {
    field: 'gender',
    label: 'Gender',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'male', value: 1 },
        { label: 'female', value: 2 },
      ],
    },
    colProps: { span: 8 },
  },
];

export const editModalSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    ifShow: false,
    colProps: { span: 24 },
  }, 
  {
    field: 'name',
    label: 'Name',
    component: 'Input',
    colProps: { span: 24 },
  }, 
  {
    field: 'age',
    label: 'Age',
    component: 'InputNumber', 
    colProps: { span: 24 },
  },
  {
    field: 'email',
    label: 'Email',
    component: 'Input', 
    colProps: { span: 24 },
  },
  {
    field: 'gender',
    label: 'Gender',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'male', value: 1 },
        { label: 'female', value: 2 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: 'address',
    label: 'address',
    component: 'InputTextArea',
    colProps: { span: 24 },
  }, 
  {
    field: 'tags',
    label: 'Tags',
    component: 'Select',
    colProps: { span: 24 },
    slot: 'selectTag',
    placeholder: 'Please input your tag and then press return.'
  },
  {
    field: 'date',
    label: 'Date',
    component: 'DatePicker',   
    componentProps: {
      format: 'YYYY/MM/DD'
    }
  },
  {
    field: 'date2',
    label: 'Date',
    component: 'DatePicker',   
    componentProps: {
      format: 'YYYY-MM/DD'
    }
  },
  {
    field: 'date3',
    label: 'Date',
    component: 'DatePicker',   
    componentProps: {
      format: 'YYYY:MM/DD'
    }
  }
]

export const editModalSchema2: FormSchema[] = [
  {
    field: 'name2',
    label: 'Name2',
    component: 'Input',
    colProps: { span: 24 },
  }, 
  {
    field: 'age2',
    label: 'Age2',
    component: 'InputNumber', 
    colProps: { span: 24 },
  }
]

const GENDER = {
  1: 'male',
  2: 'female'
};

/**
 * options类型format
 * 保持与form表单里的一致
 */
const options = [
  {
      label: '在职',
      value: 1,
      key: '1',
  },
  {
      label: '离职',
      value: 2,
      key: '2',
  },
  {
    label: '未知',
    value: 0,  // 未填值，或者为空时的处理
    key: '3',
},
]

export const columns: BasicColumn[] = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "邮件地址",
    dataIndex: "email",
    key: "email",
    helpMessage: "use email address.",
  },
  {
    title: "家庭地址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: '员工状态',
    key: 'status',      
    dataIndex: "status",
    format: options, // 与form表单一样的状态
  },
  {
    title: "性别",
    key: "gender",
    dataIndex: "gender",
    format: GENDER,  // 对象类型format

  },
  /**
  {
    title: "Action",
    key: "action",
    dataIndex: 'action',
    flag: 'ACTION'
  }, */
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    email: "john.brown@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    status: 1,
    gender: 1,
  },
  {
    key: "2",
    name: "Jim Green",
    email: "jim.green@gmail.com",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    status: 2,
    gender: 1,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    email: "joe.black@gmail.com",
    address: "Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake ParkSidney No. 1 Lake Park ",
    tags: ["cool", "teacher"],
    gender: 2,
  },
  {
    key: "4",
    name: "Aborn Jiang",
    age: 32,
    email: "aborn.jiang@gmail.com",
    address: "Shanghai China",
    tags: ["coder", "engineer"],
  },
  {
    key: "5",
    name: "Jack Gre",
    age: 32,
    email: "jack.gre@gmail.com",
    address: "Hangzhou China",
    tags: ["coder", "engineer"],
  },
  {
    key: "6",
    name: "Kitty Hello",
    age: 32,
    email: "he@gmail.com",
    address: "Berlin No. 991 Geek Park",
    tags: ["coder", "engineer"],
    gender: 3,
  },
  {
    key: "7",
    name: "Mike",
    age: 32,
    email: "mike@gmail.com",
    address: "Paris No. 1 Lake Park",
    tags: ["coder", "engineer"],
  },
  {
    key: "8",
    name: "Cook",
    age: 67,
    email: "cook@gmail.com",
    address: "Taipei No. 101 Tower",
    tags: ["coder", "engineer"],
  },
  {
    key: "9",
    name: "Jack Ma",
    age: 42,
    email: "jack.ma@gmail.com",
    address: "Paris No. 1 Lake Park",
    tags: ["coder", "engineer"],
  },
  {
    key: "10",
    name: "Xu",
    age: 10,
    email: "xu@gmail.com",
    address: "Nanjing No. 1 Golden Park",
    tags: ["coder", "engineer"],
  },
  {
    key: "11",
    name: "Google",
    age: 33,
    email: "google@gmail.com",
    address: "Osaka No. 1 Lake Park",
    tags: ["coder", "engineer"],
  },
  {
    key: "12",
    name: "Orode100",
    age: 100,
    email: "100@gmail.com",
    address: "London No. 1 Center Park",
    tags: ["coder", "engineer"],
  },
];