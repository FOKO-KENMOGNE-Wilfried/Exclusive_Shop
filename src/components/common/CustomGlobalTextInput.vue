<template>
    <div class="">
        <p class="text-gray-600" v-if="!hasNoLabel" >{{ value }}<span v-if="isRequired" class="text-primary">*</span></p>
        <input v-model="inputValue" :placeholder="value" @change="() => updateInput()" :type="inputType ? inputType : 'text'" class="bg-gray-100 rounded-md h-10 pl-4 w-full outline-primary" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    value: string;
    isRequired?: boolean;
    inputType?: string;
    hasNoLabel?: boolean
}>()

const emit = defineEmits(["value"]);
const inputValue = ref<string>("");

function updateInput(){
    emit("value", inputValue.value);
}
</script>

<style scoped></style>