<template>
    <div class="p-16 flex flex-col gap-8">
        <p class="cursor-pointer"><span class="text-gray-400">Home </span>/ Keyboard</p>
        <div class="grid grid-cols-2 w-full gap-16">
            <div class="flex gap-2 w-full">
                <div class="flex flex-col gap-2">
                    <div v-for="item in productOptions.options[selectedOption].imagesUrl" :key="item.id" @click="() => imageToDisplay = item.id" class="bg-gray-300 w-24 h-24 flex items-center justify-center p-2 cursor-pointer">
                        <img :src="item.imageUrl" :alt="item.imageUrl">
                    </div>
                </div>
                <!--  -->
                <div class="w-full flex items-center justify-center bg-gray-300">
                    <img :src="productOptions.options[selectedOption].imagesUrl[imageToDisplay].imageUrl" alt="ps5_controller" class="w-96" />
                </div>
            </div>
            <div class="w-80 flex flex-col gap-4">
                <h2 class="font-semibold text-xl">{{ productOptions.name }}</h2>
                <div class="flex gap-2 items-center">
                    <div class="flex gap-1">
                        <img v-for="star in fillStarNumber" :key="star" src="/icons/star-full-filled.svg" alt="start-full-fill" class="w-4 h-4" />
                        <img v-for="star in halfFillStarNumber" :key="star" src="/icons/star-half-filled.svg" alt="start-half-fill" class="w-4 h-4" />
                        <img v-for="star in emptyStarNumber" :key="star" src="/icons/star-empty.svg" alt="start-empty" class="w-4 h-4" />
                    </div>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400 text-xs">({{ productOptions.reviewNumber }} Reviews)</p> | 
                        <div>
                            <span v-if="productOptions.quantity! > 0" class="text-green-300">In Stock</span>
                            <span v-else class="text-red-500 font-semibold">Out</span>
                        </div>
                    </div>
                </div>
                <!--  -->
                <p>${{ productOptions.price }}</p>
                <!--  -->
                <p class="text-xs">
                    {{ productOptions.description }}
                </p>
                <!--  -->
                <div class="w-full border border-gray-400"></div>
                <!--  -->
                <div class="flex gap-2 pb-4">
                Color :
                    <div v-for="(option, index) in computedOptionList" @click="() => {
                            setSelectedProductOption(index)
                            selectedProductColor = option.color
                        }"
                        class="flex gap-2"
                    >
                        <div :class=" option.isSelected ? 'border-2 w-5 h-5 border-black rounded-full p-1 flex items-center justify-center' : ''">
                            <div :style="{ backgroundColor: option?.color }" :class="option?.isSelected ? 'w-full h-full rounded-full cursor-pointer' : 'w-5 h-5 rounded-full cursor-pointer'"></div>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="flex items-center gap-4">
                    <p>Size : </p>
                    <div v-if="productOptions?.options[selectedOption]?.size" class="flex gap-2">
                        <div
                            v-for="size in productOptions.options[selectedOption].size"
                            :key="size.id"
                            :class="selectedProductSize == size.size
                                ? 'w-5 h-5 cursor-pointer rounded-mr flex items-center justify-center border border-primary bg-primary text-white rounded-sm p-3'
                                : 'w-5 h-5 cursor-pointer rounded-mr flex items-center justify-center border border-gray-400 rounded-sm p-3'"
                            @click="() => {selectedProductSize = size.size}"
                        >{{ size.size }}</div>
                    </div>
                </div>
                <!--  -->
                <div class="flex gap-2 justify-between">
                    <div class="flex border border-gray-400 rounded-sm">
                        <div class="border-r border-gray-400 cursor-pointer px-2 flexClass" @click="() => selectedProductQuantity--" >-</div>
                        <div class=" px-8 flexClass">{{ selectedProductQuantity }}</div>
                        <div class="border-l  px-2 bg-primary text-white cursor-pointer flexClass" @click="() => selectedProductQuantity++" >+</div>
                    </div>
                    <CustomButton :handle-click="() => null" class="w-full">
                        <p class="px-4">Byu Now</p>
                    </CustomButton>
                    <div class="flex border border-gray-400 rounded-sm w-24 cursor-pointer items-center justify-center">
                        <img src="/icons/Wishlist.svg" alt="wishlist" />
                    </div>
                </div>
                <!--  -->
                <CustomButton :handle-click="() => null" class="w-full">
                    <p class="px-4">Add To Card</p>
                </CustomButton>
                <!--  -->
                <div class="border border-gray-400 rounded-sm">
                    <div class="border-b border-gray-400 flex gap-2 px-1 py-2">
                        <img src="/icons/Category-Camera.svg" alt="" class="w-6" />
                        <div class="flex flex-col gap-2">
                            <p class="text-sm">Free Delivery</p>
                            <p class="text-xs">Enter your postal code for Delivery availability</p>
                        </div>
                    </div>
                    <!--  -->
                    <div class="flex gap-2 px-1 py-2">
                        <img src="/icons/Category-Camera.svg" alt="" class="w-6" />
                        <div class="flex flex-col gap-2">
                            <p class="text-sm">Return Delivery</p>
                            <p class="text-xs">Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="flex flex-col gap-4">
            <div class="flex justify-between">
                <CustomSectionTitle label="Just For You" />
                <div :handle-click="() => null" class="border border-gray-400 flex items-center justify-center px-8 py-2 w-fit cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ease-in-out">
                    <p>See All</p>
                </div>
            </div>
            <div class="flex gap-4 flex-wrap">
                <CustomProductCard v-for="item in productData" :key="item.id" :product-specification="item as ProductType" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CustomButton from '../common/CustomButton.vue';
import CustomProductCard from '../common/CustomProductCard.vue';
import CustomSectionTitle from '../common/CustomSectionTitle.vue';
import ProductType from '../../utils/Types/ProductTypes';
import { productData } from '../../utils/FakeData';

const productOptions = ref<ProductType>(productData[0] as ProductType)
const starNumber = ref<number>(productOptions.value.review as number);
const fillStarNumber = ref<number>(0);
const halfFillStarNumber = ref<number>(0);
const emptyStarNumber = ref<number>(0);
const selectedOption = ref<number>(0);
const imageToDisplay = ref<number>(0);

// The data to send for the product to buy
const selectedProductSize = ref<string>("");
const selectedProductColor = ref<string>("");
const selectedProductQuantity = ref<number>(1);

// const isPromotionalPrice: boolean = false;

function SetStarNumber(){
    fillStarNumber.value = Math.floor(starNumber.value);
    halfFillStarNumber.value = starNumber.value - fillStarNumber.value
    halfFillStarNumber.value > 0 ? halfFillStarNumber.value = 1 : halfFillStarNumber.value = 0;
    emptyStarNumber.value = 5 - (fillStarNumber.value + halfFillStarNumber.value);
}
SetStarNumber();

const computedOptionList = computed(() => {
    productOptions.value.options?.map((element, _index) => {
        if(_index == selectedOption.value)  {
            element.isSelected = true;
        } else {
            element.isSelected = false;
        }
    })
    return productOptions.value.options
})

function setSelectedProductOption(optionIndex: number){
    selectedOption.value = optionIndex;
}
</script>

<style scoped>
.flexClass {
    @apply flex items-center justify-center;
}
</style>