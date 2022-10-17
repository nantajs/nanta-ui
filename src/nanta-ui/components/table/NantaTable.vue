<template>
    <div>
        <Table ref="tableElRef">
        </Table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Table } from 'ant-design-vue'
import { tableProps } from './props'
const props = defineProps(tableProps)

const tableElRef = ref(null);

</script>