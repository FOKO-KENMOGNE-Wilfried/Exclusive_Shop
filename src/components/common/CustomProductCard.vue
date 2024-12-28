<template>
    <div class="flex flex-col gap-2 hover:shadow-md w-52">
        <div class="flex items-center justify-center overflow-hidden relative w-full px-8 h-56 productCardImage">
            <RouterLink to="/ProductDetail" class="absolute w-full h-full flex items-center justify-center bg-gray-100 cursor-pointer px-4">
            <!-- <div @click="() => console.log('Click to the component')" class="absolute w-full h-full flex items-center justify-center bg-gray-100 cursor-pointer px-4"> -->
                <img :src="productOptions?.[selectedOption].imagesUrl[0].imageUrl" :alt="productSpecification?.name" class=" relative z-10 h-fit" />
            </RouterLink>
            <div class="absolute right-2 top-2 flex flex-col gap-2">
                <!-- <div class="bg-white flex items-center justify-center rounded-full p-1 w-6 h-6 cursor-pointer"><img src="/icons/see.svg" alt="see" /></div> -->
                <div class="bg-white flex items-center justify-center rounded-full p-1 w-6 h-6 cursor-pointer"><img src="/icons/Wishlist.svg" alt="wishlist" /></div>
            </div>
            <div @click="() => console.log('Click to the button')" class="absolute z-10 bg-black w-full bottom-0 text-white flex items-center justify-center py-1 cursor-pointer addToCard">Add to card</div>
            <div class="absolute bg-primary text-white flex items-center justify-center left-2 top-2 px-2 rounded-sm">-40%</div>
        </div>
        <!--  -->
        <div class="flex flex-col items-start px-4">
            <p class="font-semibold text-sm">{{ productSpecification?.name }}</p>
            <p v-if="!isPromotionalPrice" class="text-primary text-sm">${{ productSpecification?.price }}</p>
            <div v-else class="flex gap-4 text-sm">
                <p class="text-primary">$960</p>
                <p class="text-gray-400 line-through">$1160</p>
            </div>
            <div class="flex gap-2 items-center">
                <div class="flex gap-1">
                    <img v-for="star in fillStarNumber" :key="star" src="/icons/star-full-filled.svg" alt="start-full-fill" class="w-4 h-4" />
                    <img v-for="star in halfFillStarNumber" :key="star" src="/icons/star-half-filled.svg" alt="start-half-fill" class="w-4 h-4" />
                    <img v-for="star in emptyStarNumber" :key="star" src="/icons/star-empty.svg" alt="start-empty" class="w-4 h-4" />
                </div>
                <p class="text-gray-400 font-semibold">({{ productSpecification?.reviewNumber }})</p>
            </div>
        </div>
        <!--  -->
        <div class="flex gap-[13px] px-4 pl-[20px]">
            <div
                v-for="(option, index) in computedOptionList"
                @click="() => {
                    setSelectedProductOption(index)
                    selectedProductColor = option.color
                }"
                class="flex gap-2"
            >
                <div :class=" option.isSelected ? 'border-2 w-5 h-5 border-black rounded-full p-1 flex items-center justify-center' : ''">
                    <div :style="{ backgroundColor: option.color }" :class="option.isSelected ? 'w-full h-full rounded-full cursor-pointer' : 'w-5 h-5 rounded-full cursor-pointer'"></div>
                </div>
            </div>
        </div>
        <div v-if="productOptions[selectedOption].size" class="flex gap-2 px-4 pb-4">
            <div
                v-for="size in productOptions[selectedOption].size"
                :key="size.id"
                :class="selectedProductSize == size.size
                    ? 'w-5 h-5 cursor-pointer rounded-mr flex items-center justify-center border border-primary bg-primary text-white rounded-full p-3'
                    : 'w-5 h-5 cursor-pointer rounded-mr flex items-center justify-center border border-gray-400 rounded-full p-3'"
                @click="() => {selectedProductSize = size.size}"
            >{{ size.size }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import ProductType from '../../utils/Types/ProductTypes';

const props = defineProps<{
    productSpecification?: ProductType
}>()

const starNumber = ref<number>(props.productSpecification?.review as number);
const fillStarNumber = ref<number>(0);
const halfFillStarNumber = ref<number>(0);
const emptyStarNumber = ref<number>(0);
const isPromotionalPrice: boolean = false;
const selectedOption = ref<number>(0);
const productOptions = ref(props.productSpecification?.options)

// The data to send for the product to buy
const selectedProductSize = ref<string>("");
const selectedProductColor = ref<string>("");
const selectedProductQuantity = 1;

// The function to return the start number of the product
function SetStarNumber(){
    fillStarNumber.value = Math.floor(starNumber.value);
    halfFillStarNumber.value = starNumber.value - fillStarNumber.value
    halfFillStarNumber.value > 0 ? halfFillStarNumber.value = 1 : halfFillStarNumber.value = 0;
    emptyStarNumber.value = 5 - (fillStarNumber.value + halfFillStarNumber.value);
}

const computedOptionList = computed(() => {
    productOptions.value?.map((element, _index) => {
        if(_index == selectedOption.value)  {
            element.isSelected = true;
        } else {
            element.isSelected = false;
        }
    })
    return productOptions.value
})

function setSelectedProductOption(optionIndex: number){
    selectedOption.value = optionIndex;
}

onMounted(() => {
    SetStarNumber();
})

</script>

<style scoped>
.productCardImage:hover .addToCard {
    transform: translateY(0);
    transition: all .2s ease-out;
}
.addToCard {
    transform: translateY(100%);
    transition: all .2s ease-in;
}
</style>