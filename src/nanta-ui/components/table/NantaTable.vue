<template>
    <div>
        <Table ref="tableElRef">
        </Table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Table } from 'ant-design-vue'

const tableElRef = ref(null);

</script>