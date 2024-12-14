<template>
    <div class="p-16 flex flex-col gap-32">
        <p class="cursor-pointer"><span class="text-gray-400">Home </span>/ About</p>
        <!--  -->
        <div class="flex items-center justify-between">
            <div class="">
                <h1 class="text-5xl font-semibold text-center pb-8">Our Story</h1>
                <p class="w-10/12 text-xl">
                    Launced in 2015, Exclusive is south Asia's premier online shopping marketplace withe an active presence in bangladesh.
                    Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brand
                    and servess 3 millions customer across the region.
                    <br />
                    <br />
                    Exclusive has more than 1 Millions products to offer, growing at a very fast, Exclusive offers a diverse assotment in categories
                    ranging from consumer.
                </p>
            </div>
            <img src="/images/about_img.png" alt="about-img">
        </div>
        <!--  -->
        <div class="flex justify-center gap-8">
            <CustomCategoryCard v-for="(item, index) in companyInformations" :key="index" category-img="" category-name="" class="hover:shadow-xl px-2">
                <div class="bg-gray-400 rounded-full p-2 relative">
                    <div class="bg-black rounded-full p-1">
                        <img :src="item.icon" :alt="item.icon" />
                    </div>
                </div>
                <div class="flex flex-col items-center pt-4  relative">
                    <p class="font-semibold text-2xl">{{ item.number }}</p>
                    <p class="text-sm text-center">{{ item.description }}</p>
                </div>
            </CustomCategoryCard>
        </div>
        <!--  -->
        <!-- <div class="flex justify-center gap-16">
            <div v-for="(item, index) in companySpecifications" :key="index" class=" flex flex-col items-center">
                <div class="bg-gray-400 rounded-full p-2 relative">
                    <div class="bg-black rounded-full p-1">
                        <img :src="item.icon" :alt="item.icon" />
                    </div>
                </div>
                <div class="flex flex-col items-center pt-4  relative">
                    <p class="font-semibold text-xl">{{ item.title }}</p>
                    <p class="text-base text-center">{{ item.description }}</p>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import CustomCategoryCard from '../common/CustomCategoryCard.vue';

const companyInformations = [
    {
        icon: "/icons/icon_shop.svg",
        number: "10.5k",
        description: "Sallers active our site"
    },
    {
        icon: "/icons/Icon-Sale.svg",
        number: "33k",
        description: "Mopnthly Product Sale"
    },
    {
        icon: "/icons/Icon-Shopping_bag.svg",
        number: "45.5k",
        description: "Customer active in our site"
    },
    {
        icon: "/icons/Icon-Moneybag.svg",
        number: "25k",
        description: "Annual gross sale in our site"
    }
]

// const companySpecifications = [
//     {
//         icon: "/icons/icon-delivery.svg",
//         title: "FREE AND FATS DELIVERY",
//         description: "Free delivery for all order over $140"
//     },
//     {
//         icon: "/icons/Icon-Customer_service.svg",
//         title: "24/7 CUSTOMER SERVICE",
//         description: "Friendly 24/7 customer support"
//     },
//     {
//         icon: "/icons/Icon-secure.svg",
//         title: "MONEY BACK GUARANTEE",
//         description: "We return money within 30 days"
//     }
// ]

</script>

<style scoped>

</style>