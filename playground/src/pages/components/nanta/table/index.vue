<template>
    <NantaTable :columns="columns" :dataSource="data">
    </NantaTable>
</template>

<script lang="ts" setup>
import { NantaTable } from "/~/main";
import { columns, data } from "./data"
</script>