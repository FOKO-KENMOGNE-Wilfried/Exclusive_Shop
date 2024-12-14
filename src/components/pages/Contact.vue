<template>
    <div class="p-16 flex flex-col gap-24">
        <p class="cursor-pointer"><span class="text-gray-400">Home </span>/ Contact</p>
        <!--  -->
        <div class="flex w-full gap-8">
            <div class="w-5/12 border shadow-md p-8 flex flex-col gap-4 rounded-md">
                <div class="flex items-center gap-4">
                    <div class="bg-primary w-8 h-8 flex items-center justify-center rounded-full p-1">
                        <img src="/icons/icon-phone.svg" alt="phone" />
                    </div>
                    <p>Call To Us</p>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +00000000</p>
                <div class="border-b border-black"></div>
                <div>
                    <div class="flex items-center gap-4">
                        <div class="bg-primary w-8 h-8 flex items-center justify-center rounded-full p-1">
                            <img src="/icons/icon-mail.svg" alt="phone" />
                        </div>
                        <p>Write To Us</p>
                    </div>
                </div>
                <p>Fille out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@example.com</p>
                <p>Emails: support@example.com</p>
            </div>
            <!--  -->
            <div class="w-full shadow-md border rounded-md justify-around p-8 flex gap-8 flex-col">
                <div class="flex gap-4 justify-between">
                    <CustomGlobalTextInput :is-required="true" value="Your Name" />
                    <CustomGlobalTextInput :is-required="true" value="Your Email" />
                    <CustomGlobalTextInput :is-required="true" value="Your Phone" />
                </div>
                <!--  -->
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" class="bg-gray-100 w-full p-4"></textarea>
                <!--  -->
                <div class="flex justify-end">
                    <CustomButton :handle-click="() => null">
                        <p class="px-8">Send Message</p>
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomButton from '../common/CustomButton.vue';
import CustomGlobalTextInput from '../common/CustomGlobalTextInput.vue';


</script>

<style scoped></style>