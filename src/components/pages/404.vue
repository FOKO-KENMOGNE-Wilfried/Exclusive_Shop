<template>
    <div class="p-16 flex flex-col items-center justify-center h-full relative">
        <div class="absolute top-0 left-0 p-16">
            <p class="cursor-pointer"><span class="text-gray-400">Home </span>/ 404</p>
        </div>
        <div class="h-full flex flex-col items-center justify-center gap-10">
            <p class="text-9xl">404 Not Found</p>
            <p>Your visited page not found. You may go home page</p>
            <RouterLink to="/" class="bg-primary px-4 py-2 text-white hover:bg-primary/90 cursor-pointer">Back to home page</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>