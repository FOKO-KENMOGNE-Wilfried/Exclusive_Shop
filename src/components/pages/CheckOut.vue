<template>
    <div class="p-16 flex flex-col">
        <p class="cursor-pointer"><span class="text-gray-400">Home / cart </span>/ checkOut</p>
        <div class="flex gap-16 pt-8">
            <form class="flex flex-col gap-4 w-6/12">
                <h2 class="text-2xl font-semibold">Billing Details</h2>
                <div class="flex flex-col gap-2">
                    <CustomGlobalTextInput value="First Name" />
                    <CustomGlobalTextInput value="Category Name" />
                    <CustomGlobalTextInput value="Street Address" />
                    <CustomGlobalTextInput value="Appartment, floor, etc... (optional)" />
                    <CustomGlobalTextInput value="Town/City" />
                    <CustomGlobalTextInput value="Phone Number" />
                    <CustomGlobalTextInput value="Email Address" />
                </div>
            </form>
            <div class="min-w-72 flex flex-col gap-4">
                <div class="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden px-2 h-24">
                    <div v-for="item in 4" :key="item" class="flex justify-between">
                        <div class="flex items-center gap-4">
                            <img src="/images/keyboard.png" alt="keyboard" class="w-10" />
                            <p class="text-xs">Keyboard</p>
                        </div>
                        <p>$650</p>
                    </div>
                    <!--  -->
                </div>
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
                <form id="paymentMethodeForm" class="flex flex-col gap-4">
                    <div class="flex justify-between">
                        <div class="cashMethod">
                            <input type="radio" name="paymentMethod" id="cartPayment" value="cartPayment" />
                            <label for="cartPayment">Bank</label>
                        </div>
                        <div class="flex gap-2 items-center">
                            <img src="/icons/Visa.svg" alt="" />
                            <img src="/icons/Mastercard.svg" alt="" />
                        </div>
                    </div>
                    <div class="cashMethod">
                        <input type="radio" name="paymentMethod" id="cashPayment" value="cashPayment" />
                        <label for="cashPayment">Cash on delivery</label>
                    </div>
                </form>
                <div class="flex flex-col gap-4">
                    <div class="flex items-start h-10 gap-4">
                        <input type="text" placeholder="Coupon Code" class="border w-full border-black outline-none px-4 h-full rounded-sm" />
                        <CustomButton :handle-click="() => null">
                            <p class="px-4 text-nowrap">Apply Coupon</p>
                        </CustomButton>
                    </div>
                    <div class="w-48">
                        <CustomButton :handle-click="() => null">
                            <p>Place Order</p>
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomButton from '../common/CustomButton.vue';
import CustomGlobalTextInput from '../common/CustomGlobalTextInput.vue';


</script>

<style scoped>
.checkOutItemStyle {
    @apply flex justify-between py-2;
}
.cashMethod {
    @apply flex items-center gap-2;
}
</style>