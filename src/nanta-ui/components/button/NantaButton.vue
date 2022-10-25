
<template>
    <Button v-bind="getBindValue" :class="getButtonClass" @click="onClick" :style="getWrapStyle">
        <template #default="data">
            <Icon :icon="icon || preIcon" v-if="icon || preIcon" :size="iconSize" />
            <slot v-bind="data || {}"></slot>
            <Icon :icon="postIcon" v-if="postIcon" :size="iconSize" />
        </template>
    </Button>
</template>

<script setup lang="ts">
import { computed, unref, useAttrs, CSSProperties } from 'vue';
import { Button } from 'ant-design-vue';
import Icon from '../icon';
import { buttonProps } from './types/buttonProps';
import { omit } from "lodash-es";

const props = defineProps(buttonProps);
// get component class
const attrs = omit(useAttrs(), ['class', 'style']);
const getButtonClass = computed(() => {
    const { color, disabled } = props;
    return [
        {
            [`ant-btn-${color}`]: !!color,
            [`is-disabled`]: disabled,
        },
    ];
});

const colorMap = new Map(Object.entries({
    'success': '#55D187',
    'error': '#ff4d4f',
    'warning': '#EFBD47'
}));

const getWrapStyle = computed((): CSSProperties => {
    const { color } = props;
    const colorValue = color && colorMap.get(color)
    return colorValue ? {
        'background': colorValue,
        'border-color': colorValue,
    } : {};
});

// get inherit binding value
const getBindValue = computed(() => (omit({ ...unref(attrs), ...props }, ['icon'])));
console.log(getBindValue.value)
</script>