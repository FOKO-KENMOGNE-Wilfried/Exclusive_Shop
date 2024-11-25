<template>
    <div id="top" class="flex flex-col px-16 gap-32 relative">
        <div class="flex justify-between w-full h-fit">
            <div class="flex flex-col w-2/12 border-r pt-8">
                <div v-for="category in categoriesList" :key="category.id" class="flex items-center justify-between cursor-pointer hover:bg-gray-200 h-10 transition-all duration-200 ease-in-out px-2">
                    <p>{{ category.label }}</p>
                    <!-- <img src="/icons/DropDown.svg" alt="dropdown" /> -->
                </div>
            </div>
            <!-- <div class="bg-gray-400 w-full mt-8 ml-8"></div> -->
            <Carousel v-bind="mainCarouselConfig" class="w-full">
                <Slide v-for="slide in 10" :key="slide" class="py-8 h-full">
                    <div class="bg-gray-400 w-full mt-8 ml-8 h-96 flex items-center justify-center">{{ slide }}</div>
                </Slide>

                <template #addons>
                    <Navigation class="bg-black"/>
                    <!-- <Pagination /> -->
                </template>
            </Carousel>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="Today's" />
            <!--  -->
            <div class="flex items-center gap-16 titleStyle">
                <h2>Flash Sales</h2>
                <div id="countDownContainer" class="flex gap-4 items-center">
                    <div class="flex flex-col">
                        <p class="text-xs">Days</p>
                        <p class="text-4xl font-semibold" id="fastSaleCountDownDays">00</p>
                    </div>
                    <p class="text-2xl text-primary font-semibold">:</p>
                    <div class="flex flex-col">
                        <p class="text-xs">Hours</p>
                        <p class="text-4xl font-semibold" id="fastSaleCountDownHours">00</p>
                    </div>
                    <p class="text-2xl text-primary font-semibold">:</p>
                    <div class="flex flex-col">
                        <p class="text-xs">Minutes</p>
                        <p class="text-4xl font-semibold" id="fastSaleCountDownMinutes">00</p>
                    </div>
                    <p class="text-2xl text-primary font-semibold">:</p>
                    <div class="flex flex-col">
                        <p class="text-xs">Seconds</p>
                        <p class="text-4xl font-semibold" id="fastSaleCountDownSeconds">00</p>
                    </div>
                </div>
                <!-- <div id="countDownContainer"></div> -->
            </div>
            <!--  -->
            <Carousel v-bind="config" class="">
                <Slide v-for="slide in 10" :key="slide" class="py-8">
                    <CustomProductCard />
                </Slide>

                <template #addons>
                    <Navigation class="bg-black"/>
                    <!-- <Pagination /> -->
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
        <!--  -->
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="Categories" />
            <h2 class="titleStyle">Browe By Catgory</h2>
         <!--  -->
            <Carousel v-bind="config" class="">
                <Slide v-for="category in categoriesList2" :key="category.id" class="">
                    <CustomCategoryCard :category-img="category.image" :category-name="category.label" />
                </Slide>

                <template #addons>
                    <Navigation class="bg-black"/>
                    <!-- <Pagination /> -->
                </template>
            </Carousel>
            <!--  -->
            <div class="border-b border-gray-200 py-8"></div>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="This Month" />
            <div class="flex items-center justify-between">
                <h2 class="titleStyle">Best Selling Products</h2>
                <div class="w-48">
                    <CustomButton :handle-click="() => null">
                        <p>View All Products</p>
                    </CustomButton>
                </div>
            </div>
            <Carousel v-bind="config" class="">
                <Slide v-for="slide in 10" :key="slide" class="py-8">
                    <CustomProductCard />
                </Slide>

                <template #addons>
                    <Navigation class="bg-black"/>
                    <!-- <Pagination /> -->
                </template>
            </Carousel>
        </div>
        <!--  -->
        <div>
            <div class="bg-black h-96 flex justify-between px-8 py-4">
                <div class="text-white flex flex-col justify-around">
                    <p class="text-green-400 font-semibold">Categories</p>
                    <p class="text-4xl font-semibold w-80">Enhance Your Music Experience</p>
                    <!--  -->
                    <div class="flex items-center gap-4 text-black">
                        <div class="bg-white rounded-full flex flex-col items-center justify-center w-16 h-16">
                            <p id="categoriesCountDownDays" class="font-bold">23</p>
                            <p class="text-xs -mt-1">Days</p>
                        </div>
                        <!--  -->
                        <div class="bg-white rounded-full flex flex-col items-center justify-center w-16 h-16">
                            <p id="categoriesCountDownHour" class="font-bold">23</p>
                            <p class="text-xs -mt-1">Hours</p>
                        </div>
                        <!--  -->
                        <div class="bg-white rounded-full flex flex-col items-center justify-center w-16 h-16">
                            <p id="categoriesCountDownMinutes" class="font-bold">23</p>
                            <p class="text-xs -mt-1">Minutes</p>
                        </div>
                        <!--  -->
                        <div class="bg-white rounded-full flex flex-col items-center justify-center w-16 h-16">
                            <p id="categoriesCountDownSeconds" class="font-bold">23</p>
                            <p class="text-xs -mt-1">Seconds</p>
                        </div>
                    </div>
                    <!--  -->
                    <div class="bg-green-400 rounded-sm font-semibold flex items-center justify-center px-8 cursor-pointer hover:bg-green-400/80 py-2 w-fit"><p>Buy Now</p></div>
                </div>
                <div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-black/10 to-black p-2">
                    <img src="/images/JBL_BOOMBOX_2_HERO_020_x1.png" alt="jbl" class="w-fit" />
                </div>
            </div>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
            <CustomSectionTitle label="Our Products" />
            <h2 class="titleStyle">Explore Our Products</h2>
            <div class="flex gap-4 flex-wrap">
                <CustomProductCard v-for="element in 8" :key="element" />
            </div>
            <div class="flex justify-center pt-4">
                <div class="w-48">
                    <CustomButton :handle-click="() => null">
                        <p>View All Products</p>
                    </CustomButton>
                </div>
            </div>
        </div>
        <!--  -->
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
        <!--  -->
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
        <!--  -->
        <a href="#top" class="bg-gray-200 w-fit p-2 rounded-full absolute bottom-8 right-10">
            <img src="/icons/icons_arrow-up.svg" alt="arrow-up" />
        </a>
    </div>
</template>

<script setup lang="ts">
import CustomSectionTitle from '../common/CustomSectionTitle.vue';
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import CustomButton from '../common/CustomButton.vue';
import CountDown from '../../utils/CountDown';
import CustomProductCard from '../common/CustomProductCard.vue';
import CustomCategoryCard from '../common/CustomCategoryCard.vue';

const config = {
  itemsToShow: 6,
  gap: 16
}
const mainCarouselConfig = {
    itemsToShow: 1,
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
const categoriesList2 = [
    {
        id: 1,
        label: "Gaming",
        image: "/icons/Category-Gamepad.svg"
    },
    {
        id: 2,
        label: "Phones",
        image: "/icons/Category-CellPhone.svg"
    },
    {
        id: 3,
        label: "Computers",
        image: "/icons/Category-Computer.svg"
    },
    {
        id: 4,
        label: "SmartWatch",
        image: "/icons/Category-SmartWatch.svg"
    },
    {
        id: 5,
        label: "Camera",
        image: "/icons/Category-Camera.svg"
    },
    {
        id: 6,
        label: "HeadPhones",
        image: "/icons/Category-Headphone.svg"
    },
]


CountDown("Jan 5, 2030 15:37:25", "fastSaleCountDownDays", "fastSaleCountDownHours", "fastSaleCountDownMinutes", "fastSaleCountDownSeconds");
CountDown("Jan 5, 2030 15:37:25", "categoriesCountDownDays", "categoriesCountDownHour", "categoriesCountDownMinutes", "categoriesCountDownSeconds");
</script>

<style scoped>
.titleStyle {
    @apply text-3xl font-semibold -mt-2;
}
</style>