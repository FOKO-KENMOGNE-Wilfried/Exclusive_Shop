<template>
    <div @click="() => handleClick()" class="bg-primary text-white h-10 flex justify-center items-center cursor-pointer hover:bg-primary/90">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    handleClick: () => void,
}>()

</script>

<style scoped>

</style>