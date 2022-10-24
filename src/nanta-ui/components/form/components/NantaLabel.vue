<template>
    <label v-if="ifShow">{{ getLabel }}</label>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import { propTypes } from '../../../utils/propTypes';

export default defineComponent({
    name: "NantaLabel",
    props: {
        value: {
            type: [Number, String] as PropType<number | string>,
            default: "",
        },
        label: propTypes.string,
    },
    setup(props) {
        const getLabel = computed(() => {
            return props.label || props.value;
        });

        const ifShow = computed(() => {
            return getLabel && new String(getLabel).length > 0
        })
        return { getLabel, ifShow };
    },
});
</script>
