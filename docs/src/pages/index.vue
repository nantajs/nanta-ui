<template>
    <div class="section-container">
        <div>
            <span style="font-size: 2.5rem">
                nanta-ui: Ant-design based UI framework.
            </span>
            <div class="fbox-line">
                <div v-for="item in menus" :key="item.key">
                    <NantaButton type="dashed" :icon="item.icon">
                        <router-link :to="item.path" style="margin-left: .5rem">{{ item.name }}</router-link>
                    </NantaButton>
                </div>
            </div>
        </div>

    </div>
    <div class="section-container" style="background-color: #fff; margin-top: 10px;">
        <NantaTable @register="registerTable" />
    </div>
</template>

<script lang="ts" setup>
import { getMenus, getMenuList } from "/@/layouts/menu"
import { NantaButton, useTable, NantaTable, BasicColumn, FormSchema } from "/~/main";
import { version as docsVersion, dependencies } from '../../package.json'
import { version as nantaVersion, dependencies as nantaDeps } from '../../node_modules/@nanta/ui/package.json'
import { h } from "vue";

const nantaLocalVersion = dependencies['@nanta/ui'];
const vueVersion = nantaDeps["vue"];
const antdVersion = nantaDeps["ant-design-vue"];
const versions = [{ nantaVersion }, { vueVersion }, { antdVersion }, { antdVersion }];
console.log(versions);

const menus = getMenuList(getMenus());

const columns: BasicColumn[] = [
    {
        title: "Package Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Package Version",
        dataIndex: "version",
        key: "version",
        format: (text) => {
            return h('span', { class: 'version-style', style: "font-size: 1.5rem;color:#faad14" }, text)
        }
    },
]

const data = [
    {
        "name": "Docs version",
        "version": docsVersion
    },
    {
        "name": "@nanta/ui",
        "version": nantaVersion
    }
]

const searchFormSchema: FormSchema[] = [
    {
        field: 'name',
        label: 'Package Name',
        component: 'Input',
        colProps: { span: 8 },
    },
];

const [registerTable] = useTable({
    title: '@nant/ui version list.',
    columns,
    dataSource: data,
    pagination: false,
    useSearchForm: true,
    searchFormConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true,
        submitButtonOptions: { text: 'search' },
    },
})

for (let [key, value] of Object.entries(nantaDeps)) {
    data.push({
        "name": key,
        "version": value,
    })
}


</script>

<style scoped>
.fbox-line {
    display: flex;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.version-line {
    display: flex;
    margin-right: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
}

.version-style {
    font-size: 1.5rem;
    color: #faad14;
}

.fbox-line div {
    margin-right: .5rem;
}
</style>
