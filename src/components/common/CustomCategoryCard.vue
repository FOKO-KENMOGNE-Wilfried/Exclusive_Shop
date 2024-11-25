<template>
    <div class="relative border w-48 h-48 flex flex-col cursor-pointer items-center justify-center rounded-md categoriesContainer">
        <div class="bg-white rounded-full p-1 relative z-10">
            <img :src="categoryImg" alt="gaming" />
        </div>
        <p class="z-10">{{ categoryName }}</p>
        <div class="ColorChanging absolute"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    categoryImg?: string,
    categoryName?: string,
}>()

</script>

<style scoped>

.categoriesContainer:hover .ColorChanging {
    background-color: #DB4444;
    transition: all 0.3s ease-out;
    height: 100%;
}
.categoriesContainer:hover {
    color: white;
    transition: all 0.3s ease-out;
}
.ColorChanging {
    width: 100%;
    height: 0px;
    bottom: 0;
    transition: all 0.3s ease-in;
}
</style>