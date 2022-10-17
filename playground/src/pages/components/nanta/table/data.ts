import { BasicColumn } from "/~/main";

export const columns: BasicColumn[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
    format: (text: string, record: Recordable, index: number) => {
      if (!record.gender) {
        return "unknown"
      } else if (record.gender === 1) {
        return "male"
      } else if (record.gender === 2) {
        return "female"
      } else {
        return "unknown"
      }
    }
  },
  {
    title: "Action",
    key: "action",
  },
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    email: "john.brown@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    gender: 1,
  },
  {
    key: "2",
    name: "Jim Green",
    email: "jim.green@gmail.com",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    gender: 1,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    email: "joe.black@gmail.com",
    address: "Sidney No. 1 Lake Park",
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
    address: "Shanghai China",
    tags: ["coder", "engineer"],
  },
  {
    key: "6",
    name: "Kitty Hello",
    age: 32,
    email: "he@gmail.com",
    address: "Paris No. 1 Lake Park",
    tags: ["coder", "engineer"],
  },
];