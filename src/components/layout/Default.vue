<template>
    <div>
        <Header />
        <RouterView class="min-h-screen" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from '../Footer.vue';
import Header from '../Header.vue';


</script>

<style scoped>

</style>