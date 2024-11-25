<template>
    <div class="px-16 py-16 flex flex-col gap-8">
        <div class="flex justify-between items-center">
            <p>wishlist (4)</p>
            <div class="cursor-pointer border border-black w-fit  px-4 py-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ease-in-out">Move All To Bag</div>
        </div>
        <div class="flex gap-4 flex-wrap">
            <CustomProductCard v-for="item in 6" :key="item" />
        </div>
        <div class="flex flex-col gap-4">
            <div class="flex justify-between">
                <CustomSectionTitle label="Just For You" />
                <div :handle-click="() => null" class="border border-black flex items-center justify-center px-8 py-2 w-fit cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ease-in-out">
                    <p>See All</p>
                </div>
            </div>
            <div class="flex gap-4">
                <CustomProductCard v-for="item in 6" :key="item" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomProductCard from '../common/CustomProductCard.vue';
import CustomSectionTitle from '../common/CustomSectionTitle.vue';


</script>

<style scoped>

</style>