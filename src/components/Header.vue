<template>
    <div class="flex flex-col items-center lg:flex-row lg:items-start gap-y-8 justify-between px-16 border-b border-gray-300 py-6">
        <RouterLink to="/" class="text-2xl font-bold">Exclusive</RouterLink>
        <div class="flex flex-col sm:flex-row gap-8">
            <div class="linkContainer">
                <RouterLink to="/">Home</RouterLink>
                <div></div>
            </div>
            <div class="linkContainer">
                <RouterLink to="/contact">Contact</RouterLink>
                <div></div>
            </div>
            <div class="linkContainer">
                <RouterLink to="/about">About</RouterLink>
                <div></div>
            </div>
            <div class="linkContainer">
                <RouterLink to="/signup">Sign Up</RouterLink>
                <div></div>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="flex items-center gap-4 bg-gray-200 pr-2 rounded-md">
                <input type="text" placeholder="What are you looking for ?" class="bg-transparent outline-none w-full h-full py-2 px-2">
                <img src="/icons/search.svg" alt="search_icon">
            </div>
            <RouterLink  to="/wishlist" class="linkHoverEffect">
                <img src="/icons/Wishlist.svg" alt="wishlist" />
            </RouterLink>
            <RouterLink  to="/cart" class="linkHoverEffect">
                <img src="/icons/cart_balck.svg" alt="cart" />
            </RouterLink>
            <div class="">
                <div @click="() => {
                    isMenuDisplay ? isMenuDisplay = false : isMenuDisplay = true
                }" :class="isMenuDisplay ? 'userLinkHoverEffect bg-primary cursor-pointer transition-all duration-150 ease-in-out' : 'userLinkHoverEffect cursor-pointer transition-all duration-150 ease-in-out'">
                    <img src="/icons/user_black.svg" alt="user" />
                </div>
                <div v-if="isMenuDisplay" class="absolute z-20 right-16 top-20 bg-black/60 backdrop-blur-md p-4 rounded-md flex flex-col">
                    <RouterLink :to="item.url" v-for="item in dropDownList" :key="item.id" class="flex gap-2 bg-transparent cursor-pointer hover:bg-white/20 py-1 px-2 rounded-md text-white transition-all duration-150 ease-in-out">
                        <img :src="item.icon" :alt="item.label" class="w-7" />
                        <p class="text-nowrap">{{ item.label }}</p>
                    </RouterLink>
                    <div class="flex gap-2 cursor-pointer bg-transparent hover:bg-white/20 py-1 px-2 rounded-md text-white transition-all duration-150 ease-in-out">
                        <img src="/icons/Icon-logout.svg" alt="logout" class="w-7" />
                        <p class="text-nowrap">Logout</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const dropDownList = [
    {
        id: 0,
        label: "Manage My Account",
        icon: "/icons/user_white.svg",
        url: "/account"
    },
    {
        id: 2,
        label: "My Order",
        icon: "/icons/icon-mallbag.svg",
        url: "/cart"
    },
    {
        id: 3,
        label: "My Collections",
        icon: "/icons/icon-cancel.svg",
        url: "/wishlist"
    },
    {
        id: 4,
        label: "My Reviews",
        icon: "/icons/Icon-Reviews.svg",
        url: ""
    },
]
const isMenuDisplay = ref<boolean>(false);
</script>

<style scoped>
.linkContainer div {
    width: 0px;
    border-bottom: 2px solid black;
    transition: all 0.2s ease-in-out;
}
.linkContainer:hover div {
    width: 100%;
}
.linkHoverEffect {
    @apply flex p-1 items-center justify-center rounded-full;
}
.linkHoverEffect:hover {
    @apply bg-gray-200 flex items-center justify-center rounded-full;
}
.userLinkHoverEffect {
    @apply flex p-1 items-center justify-center rounded-full;
}
.userLinkHoverEffect:hover {
   @apply bg-primary flex items-center justify-center rounded-full;
}

</style>