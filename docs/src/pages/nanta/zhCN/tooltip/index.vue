<template>
    <div>
        <TextTooltip>这是一个很长的标题处理情况 dddddddddd</TextTooltip>
        <a-input v-model:value="value" placeholder="文字长度，单位px" />
        <TextTooltip :maxWidth="value" text="跟Width长度进行动态调整，这也是一个很长的文本"></TextTooltip>
        <TextTooltip text="这是一个很长的标题处理情况 dddddddddd"></TextTooltip>
        <TextTooltip text="不提示"></TextTooltip>
        <a-input v-model:value="textValue" placeholder="文字输入时动太调整" />
        <TextTooltip :text="textValue"></TextTooltip>
        <TextTooltip>Slot:{{textValue}}</TextTooltip>
    </div>
</template>
  
<script setup lang="ts">
import { TextTooltip } from '/~/main'
import { ref } from 'vue'
const value = ref('180px')
const textValue = ref('文字输入')
</script>
  
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
  