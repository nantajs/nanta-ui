//package/pig-button/index.vue
<template>
    <div>
        <button :onclick="handClick">Button-
            <slot />-{{count}}
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const handClick = () => {
    console.log("clicked!")
    count.value++
}
</script>
<style scoped>
button {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
</style>