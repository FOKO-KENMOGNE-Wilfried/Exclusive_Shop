<template>
    <div class="flex flex-col px-16 gap-32">
        <div class="flex justify-between w-full h-fit">
            <div class="flex flex-col w-2/12 border-r pt-8">
                <div v-for="category in categoriesList" :key="category.id" class="flex items-center justify-between cursor-pointer hover:bg-gray-200 h-10 transition-all duration-200 ease-in-out px-2">
                    <p>{{ category.label }}</p>
                    <!-- <img src="/public/icons/DropDown.svg" alt="dropdown" /> -->
                </div>
            </div>
            <div class="bg-gray-400 w-full mt-8 ml-8"></div>
        </div>
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="Today's" />
            <!--  -->
            <div class="flex items-center gap-16 text-3xl font-semibold">
                <p>Flash Sales</p>
                <div class="flex gap-4 items-center">
                    <div class="flex flex-col">
                        <p class="text-xs">Days</p>
                        <p class="text-4xl font-semibold">03</p>
                    </div>
                    <p class="text-2xl text-primary font-semibold">:</p>
                    <div class="flex flex-col">
                        <p class="text-xs">Hours</p>
                        <p class="text-4xl font-semibold">03</p>
                    </div>
                    <p class="text-2xl text-primary font-semibold">:</p>
                    <div class="flex flex-col">
                        <p class="text-xs">Minutes</p>
                        <p class="text-4xl font-semibold">03</p>
                    </div>
                    <p class="text-2xl text-primary font-semibold">:</p>
                    <div class="flex flex-col">
                        <p class="text-xs">Secondes</p>
                        <p class="text-4xl font-semibold">03</p>
                    </div>
                </div>
            </div>
            <!--  -->
            <Carousel v-bind="config" class="">
                <Slide v-for="slide in 10" :key="slide" class="h-96 bg-gray-400">
                    <div class="text-white">
                        {{ slide }}
                    </div>
                </Slide>

                <template #addons>
                    <Navigation class="bg-black"/>
                    <Pagination />
                </template>
            </Carousel>
            <div class="flex justify-center pt-4">
                <div class="w-48">
                    <CustomButton :handle-click="() => null">
                        <p>View All Products</p>
                    </CustomButton>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-8">
            <CustomSectionTitle label="Categories" />
            <h2 class="titleStyle">Browe By Catgory</h2>
         <!--  -->
            <Carousel v-bind="config" class="">
                <Slide v-for="slide in 10" :key="slide" class="h-48 !w-48 bg-gray-400">
                    <div class="text-white">
                            {{ slide }}
                    </div>
                </Slide>

                <template #addons>
                    <Navigation class="bg-black"/>
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
</template>

<script setup lang="ts">
import CustomSectionTitle from '../common/CustomSectionTitle.vue';
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import CustomButton from '../common/CustomButton.vue';

const config = {
  itemsToShow: 4,
  gap: 16
}
const categoriesList = [
    {
        id: 1,
        label: "Woman's Fashion",
    },
    {
        id: 2,
        label: "Men's Fashion",
    },
    {
        id: 3,
        label: "Electronics",
    },
    {
        id: 4,
        label: "Home & Lifestyle",
    },
    {
        id: 5,
        label: "Medecine",
    },
    {
        id: 6,
        label: "Sports & Outdoor",
    },
    {
        id: 7,
        label: "Baby's Toys",
    },
    {
        id: 8,
        label: "Groceries & Pets",
    },
    {
        id: 9,
        label: "Health & Beauty",
    },
]
</script>

<style scoped>
.titleStyle {
    @apply text-3xl font-semibold;
}
</style>