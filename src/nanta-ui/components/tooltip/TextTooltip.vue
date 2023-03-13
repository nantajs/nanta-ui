<template>
    <Tooltip v-if="visiable" :overlayClassName="`${prefixCls}__wrap`" :title="getContent" :autoAdjustOverflow="true"
        :overlayStyle="getOverlayStyle" placement="right" :getPopupContainer="getPopupContainer">
        <span class="content" :style="getContentStyle" id="saveRef" ref="contRef">{{ getContent }}</span>
    </Tooltip>
    <span v-else class="content" :style="getContentStyle" id="saveRef" ref="contRef">{{ getContent }}</span>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, useSlots, watch } from 'vue';
import { Tooltip } from 'ant-design-vue';
import { getPopupContainer } from '../../utils/util';


const props = defineProps({
    /**
     * Help text max-width
     * @default: 600px
     */
    maxWidth: { type: String, default: '80px' },

    /**
     * Help text font color
     * @default: #ffffff
     */
    color: { type: String, default: '#ffffff' },
    /**
     * Help text font size
     * @default: 14px
     */
    fontSize: { type: String, default: '14px' },
    /**
     * Help text list
     */
    placement: { type: String, default: 'right' },
    /**
     * Help text list
     */
    text: { type: String, default: null },
});

const slots = useSlots()
const prefixCls = 'basic-help';
const getOverlayStyle = computed(() => ({ "max": props.maxWidth }));
const getContentStyle = computed(() => `max-width: ${props.maxWidth};`)

const getContent = computed(() => {
    if (props.text) {
        return props.text;
    } else if (slots.default) {
        const slotV = slots.default();
        return slotV[0].children
    }
})

const contRef = ref(null)
const visiable = ref(false)

function updateVisiable() {
    if (contRef.value) {
        const contV = contRef.value as any;
        // console.log(contV.offsetWidth)
        // console.log(contV.scrollWidth)
        if (contV.offsetWidth === contV.scrollWidth) {
            // console.log(contV.innerHTML, ':不提示')
            visiable.value = false;
        } else { // if (contV.offsetWidth < contV.scrollWidth)
            // console.log(contV.innerHTML, ':需要提示')
            visiable.value = true;
        }
    }
}

onMounted(() => {
    updateVisiable()
})

watch(() => props.maxWidth, (newV, oldV) => {
    updateVisiable()
})

watch(() => getContent, (newV, oldV) => {
    console.log('content changed.')
    updateVisiable()
}, {
    immediate: true,
    deep: true
})

</script>

<style lang="less">
@prefix-cls: ~'nanta-basic-help';

.content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    cursor: pointer;
}

.@{prefix-cls} {
    display: inline-block;
    margin-left: 6px;
    font-size: 14px;
    color: #909399;
    cursor: pointer;

    &:hover {
        color: #606266;
    }

    &__wrap {
        p {
            margin-bottom: 0;
        }
    }
}
</style>
