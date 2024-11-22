<template>
    <div id="top" class="flex flex-col px-16 gap-32 relative">
        <div class="flex justify-between w-full h-fit">
            <div class="flex flex-col w-2/12 border-r pt-8">
                <div v-for="category in categoriesList" :key="category.id" class="flex items-center justify-between cursor-pointer hover:bg-gray-200 h-10 transition-all duration-200 ease-in-out px-2">
                    <p>{{ category.label }}</p>
                    <!-- <img src="/icons/DropDown.svg" alt="dropdown" /> -->
                </div>
            </div>
            <div class="bg-gray-400 w-full mt-8 ml-8"></div>
        </div>
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="Today's" />
            <!--  -->
            <div class="flex items-center gap-16 titleStyle">
                <h2>Flash Sales</h2>
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
            <!--  -->
            <div class="flex justify-center pt-4">
                <div class="w-48">
                    <CustomButton :handle-click="() => null">
                        <p>View All Products</p>
                    </CustomButton>
                </div>
            </div>
            <!--  -->
            <div class="border-b border-gray-200 py-8"></div>
        </div>
        <div class="flex flex-col gap-4">
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
            <!--  -->
            <div class="border-b border-gray-200 py-8"></div>
        </div>
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="This Month" />
            <h2 class="titleStyle">Best Selling Products</h2>
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
        </div>
        <div>
            <div class="bg-gray-400 h-96"></div>
        </div>
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="Our Products" />
            <h2 class="titleStyle">Explore Our Products</h2>
            <div class="flex gap-4 flex-wrap">
                <div v-for="(element, index) in 8" :key="index" class="bg-gray-400 w-64 h-80 flex items-center justify-center">{{ element }}</div>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="Feature" />
            <h2 class="titleStyle">New Arrival</h2>
            <div class="flex gap-4">
                <div class="bg-black w-full">
                    <img src="/images/ps5-slim.png" alt="" />
                </div>
                <div class="flex flex-col gap-4 w-full">
                    <div class="bg-black w-full">
                        <img src="/images/attractive-woman-wearing-hat-posing-black-background.png" alt="" />
                    </div>
                    <div class="flex gap-4 w-full">
                        <div class="bg-black w-full"><img src="/images/speaker.png" alt="" /></div>
                        <div class="bg-black w-full"><img src="/images/beauty.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-10 justify-around pb-32">
            <div v-for="item in advantagesList" :key="item.id" class="flex flex-col gap-2 w-fit items-center">
                <div class="bg-gray-400 w-fit p-3 rounded-full">
                    <div class="bg-black w-fit rounded-full p-2">
                        <img :src="item.image" :alt="item.image" />
                    </div>
                </div>
                <!-- <div> -->
                    <p class="font-semibold text-xl ">{{ item.label }}</p>
                    <p class="text-sm">{{ item.desciption }}</p>
                <!-- </div> -->
            </div>
        </div>
        <a href="#top" class="bg-gray-200 w-fit p-2 rounded-full absolute bottom-8 right-10">
            <img src="/icons/icons_arrow-up.svg" alt="arrow-up" />
        </a>
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
const advantagesList = [
    {
        id: 1,
        label: "FREE AND FAST DELIVERY",
        desciption: "Free delibery for all order over $140",
        image: "/icons/icon-delivery.svg"
    },
    {
        id: 2,
        label: "24j/7 CUSTOMER SERVICES",
        desciption: "Friendly 24/7 customer support",
        image: "/icons/Icon-Customer service.svg"
    },
    {
        id: 3,
        label: "MONEY BACK GUARANTEE",
        desciption: "We return money within 30 days",
        image: "/icons/Icon-secure.svg"
    },
]
</script>

<style scoped>
.titleStyle {
    @apply text-3xl font-semibold -mt-2;
}
</style>