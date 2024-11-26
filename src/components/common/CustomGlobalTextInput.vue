<template>
    <div class="">
        <p class="text-gray-400">{{ value }}</p>
        <input v-model="inputValue" placeholder="tst" @change="() => updateInput()" type="text" class="bg-gray-100 rounded-md h-10 pl-4 w-full outline-primary" />
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

<style scoped></style>