<template>
    <div class="h-8 relative">
        <div :class="!inputValue ? 'relative h-8 top-1 emptyInput transition-all duration-150 ease-in-out' : 'relative h-8 -top-2 fillInput transition-all duration-150 ease-in-out'">
            <legend class="absolute">{{ value }}</legend>
        </div>
        <input v-model="inputValue" @change="() => updateInput()" type="text" class="border-b border-black absolute bottom-0 w-full bg-transparent outline-none" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    value: string;
}>()

const emit = defineEmits(["value"]);
const inputValue = ref<string>("");

function updateInput(){
    emit("value", inputValue.value);
}
</script>

<style scoped>
.fillInput legend {
    color: black;
    /* bottom: 0px; */
    font-size: 12px;
    /* transition: all 0.2s ease-in-out; */
}
.emptyInput legend {
    /* top: 0px; */
    color: gray;
    /* transition: all 0.2s ease-in-out; */
}
</style>