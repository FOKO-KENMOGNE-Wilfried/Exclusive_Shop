<template>
    <div class="flex items-center gap-4">
        <div class="bg-primary w-5 h-9 rounded-md"></div>
        <p class="text-primary font-semibold">{{ label }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>

<style scoped></style>