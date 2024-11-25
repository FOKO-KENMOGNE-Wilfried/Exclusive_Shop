<template>
    <div class="p-16 flex flex-col">
        <p class="cursor-pointer"><span class="text-gray-400">Home </span>/ Cart</p>
        <div class="flex flex-col gap-4 pt-8">
            <div class="grid grid-cols-4 border px-8 py-2 shadow-md rounded-sm">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div v-for="item in 4" :key="item" class="grid grid-cols-4 border shadow-md px-8 py-4 cardProductContainer">
                <div class="flex gap-4 items-center relative">
                    <div @click="() => null" class="absolute top-0 left-0 text-white bg-primary rounded-full w-4 h-4 flex items-center justify-center cursor-pointer crossClass">&times;</div>
                    <img src="/public/images/keyboard.png" alt="keyboard" class="w-16" />
                    <p>LCD Monitor</p>
                </div>
                <!--  -->
                <div class="flex items-center"><p>$650</p></div>
                <!--  -->
                <div class="flex items-center justify-between gap-4 border-2 border-gray-300 w-fit px-4 rounded-md">
                    <p>{{ productQuantity }}</p>
                    <div class="flex flex-col py-1">
                        <img @click="() => productQuantity++" src="/icons/Drop-Up-Small.svg" alt="drop-up" class="cursor-pointer hover:bg-gray-200" />
                        <img @click="() => productQuantity--" src="/icons/Drop-Down-Small.svg" alt="drop-down" class="cursor-pointer hover:bg-gray-200" />
                    </div>
                </div>
                <!--  -->
                <div class="flex items-center"><p>$650</p></div>
            </div>
        </div>
        <div class="flex justify-between pt-4">
            <div :handle-click="() => null" class="border border-black flex items-center justify-center px-8 py-1 w-fit cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ease-in-out">
                <p>See All</p>
            </div>
            <div :handle-click="() => null" class="border border-black flex items-center justify-center px-8 py-1 w-fit cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ease-in-out">
                <p>Update Cart</p>
            </div>
        </div>
        <div class="flex justify-between pt-8 gap-4">
            <div class="flex items-start h-10 gap-4">
                <input type="text" placeholder="Coupon Code" class="border border-black outline-none px-4 h-full rounded-sm" />
                <CustomButton :handle-click="() => null">
                    <p class="px-4">Apply Coupon</p>
                </CustomButton>
            </div>
            <div class="border border-black w-96 p-4 flex flex-col gap-2">
                <p class="font-semibold">Cart Total</p>
                <!--  -->
                <div class="flex flex-col text-sm">
                    <div class="checkOutItemStyle border-b border-black">
                        <p>Subtotal</p>
                        <p>$1750</p>
                    </div>
                    <!--  -->
                    <div class="checkOutItemStyle border-b border-black">
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <!--  -->
                    <div class="checkOutItemStyle">
                        <p>Total</p>
                        <p>$1750</p>
                    </div>
                </div>
                <!--  -->
                <CustomButton :handle-click="() => null">
                    <p>Procees to checkout</p>
                </CustomButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../common/CustomButton.vue';

const productQuantity = ref<number>(1);
</script>

<style scoped>
.cardProductContainer:hover .crossClass {
    display: flex;
}
.crossClass {
    display: none;
}

.checkOutItemStyle {
    @apply flex justify-between py-2;
}
</style>