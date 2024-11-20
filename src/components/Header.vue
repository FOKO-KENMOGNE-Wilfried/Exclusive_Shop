<template>
    <div class="flex flex-col items-center lg:flex-row lg:items-start gap-y-8 justify-between px-16 border-b border-gray-300 py-6">
        <div class="text-2xl font-bold">Exclusive</div>
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
        <div class="flex items-center gap-4 bg-gray-200 pr-2 rounded-md">
            <input type="text" placeholder="What are you looking for ?" class="bg-transparent outline-none w-full h-full py-2 px-2">
            <img src="/icons/search.svg" alt="search_icon">
        </div>
    </div>
</template>

<script setup lang="ts">

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
</style>