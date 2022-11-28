<template>
  <div>
    <div style="margin-bottom: 1rem;">
      <a-button type="primary" @click="handleCreateNew" style="margin-right: .5rem;">
        <Icon icon="uil:plus" />Create New
      </a-button>
      <a-button color="success" type="primary" @click="handleEdit" style="margin-right: .5rem;">
        <Icon icon="uil:edit" />Edit
      </a-button>
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag v-for="tag in record.tags" :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a @click="handleEdit(record)">Edit</a>
            <a-divider type="vertical" />
            <a-popconfirm title="Sure to delete?" @confirm="onDeleteUser(record.key)">
              <IconRiDeleteBin6Line style="color: red; cursor: pointer" />
            </a-popconfirm>
          </span>
        </template>
      </template>
    </a-table>

    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <NantaFormModal @register="registerModal" v-bind="mProps" @ok="handleOK" @cancel="handleCancel" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SmileOutlined } from "@ant-design/icons-vue";
import { useModal, Icon, NantaFormModal, NantaFormModalProps } from "/~/main";
import IconRiDeleteBin6Line from "~icons/ri/delete-bin6-line";
import { schemes, columns } from "./data";

const mProps : NantaFormModalProps = {
    schemas: schemes,
    colon: true
}

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    email: "john.brown@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    email: "jim.green@gmail.com",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    email: "joe.black@gmail.com",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

// Basic Model的示例
const [registerModal, { openModal, closeModal }] = useModal();

const handleCreateNew = () => {
  console.log('basic modal show')
  openModal(true, {
    title: 'Create new',
    record: null,
  })
}

const handleOK = (newRecord: Recordable, oldRecord: Recordable) => {
  console.log('basic table: handle ok in outer event callback', newRecord, oldRecord)
  closeModal()
}

const handleCancel = (newRecord: Recordable, oldRecord: Recordable) => {
  console.log('basic table: handle cancel in outer evnet callback', newRecord, oldRecord);
}

// end

const onDeleteUser = (id: string | number) => {
  console.log("id click deleted, ", id);
};

const mdata = {
  visible: false,
};

const visible = ref<boolean>(false);

const showModal = () => {
  console.log("showModal");
  visible.value = true;
};

const handleChange = (status) => {
  console.log(status);
  if ("cancel" === status || "ok" === status) {
    visible.value = false;
  }
};

const handleEdit = (record: Recordable) => {
  console.log(record);
  openModal(true, {
    title: "Edit",
    record
  })
};
</script>
