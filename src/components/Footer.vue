<template>
    <div class="bg-black">
        <div class="flex flex-col lg:flex-row gap-y-8 justify-between px-16 py-8 text-white">
            <div class="flex flex-col gap-4 footer_containner_size">
                <h2 class="footer_title_section">Exclusive</h2>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div class="border-2 w-48 flex pr-2 rounded-md">
                    <input type="text" placeholder="Enter your email" class="bg-transparent outline-none w-full py-2 pl-4" />
                    <img src="/icons/icon-send.svg" alt="send" />
                </div>
            </div>
            <!--  -->
            <div class="flex flex-col gap-4 footer_containner_size">
                <h2 class="footer_title_section">Support</h2>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <!--  -->
            <div class="flex flex-col gap-4 footer_containner_size">
                <h2 class="footer_title_section">Account</h2>
                <div class="linkContainer">
                    <RouterLink to="/account">My Account</RouterLink>
                    <div></div>
                </div>
                <div class="linkContainer">
                    <RouterLink to="/login">Login / Register</RouterLink>
                    <div></div>
                </div>
                <div class="linkContainer">
                    <RouterLink to="/cart">Cart</RouterLink>
                    <div></div>
                </div>
                <div class="linkContainer">
                    <RouterLink to="/wishlist">Whishlist</RouterLink>
                    <div></div>
                </div>
                <div class="linkContainer">
                    <RouterLink to="/">Shop</RouterLink>
                    <div></div>
                </div>
            </div>
            <!--  -->
            <div class="flex flex-col gap-4 footer_containner_size">
                <h2 class="footer_title_section">Quick Link</h2>
                <div class="linkContainer">
                    <RouterLink to="/">Privacy Policy</RouterLink>
                    <div></div>
                </div>
                <div class="linkContainer">
                    <RouterLink to="/">Term of Use</RouterLink>
                    <div></div>
                </div>
                <div class="linkContainer">
                    <RouterLink to="/">FAQ</RouterLink>
                    <div></div>
                </div>
                <div class="linkContainer">
                    <RouterLink to="/contact">Contact</RouterLink>
                    <div></div>
                </div>
            </div>
            <!--  -->
            <div class="flex flex-col gap-4 footer_containner_size">
                <h2 class="footer_title_section">Download App</h2>
                <p>Save $3 with App User Only</p>
                <div class="flex gap-2">
                    <img src="/images/qr_code.png" alt="qr_code" />
                    <div class="flex flex-col justify-between gap-2">
                        <img src="/icons/play_store.svg" alt="play_store" />
                        <img src="/icons/app_store.svg" alt="app_store" />
                    </div>
                </div>
                <div class="flex gap-4">
                    <img src="/icons/Icon-Facebook.svg" alt="facebook" />
                    <img src="/icons/Icon-Twitter.svg" alt="x" />
                    <img src="/icons/icon-instagram.svg" alt="instagramm" />
                    <img src="/icons/Icon-Linkedin.svg" alt="linkedin" />
                </div>
            </div>
        </div>
        <div class="text-center border-t border-white/20 py-4">
            <p class="text-white/50">@ Copiright Rimel 2022. All right reserved</p>
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer_title_section {
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 10px;
}
.linkContainer div {
    width: 0px;
    border-bottom: 2px solid white;
    transition: all 0.2s ease-in-out;
}
.linkContainer:hover div {
    width: 20px;
}
.footer_containner_size {
    width: 200px;
}
</style>