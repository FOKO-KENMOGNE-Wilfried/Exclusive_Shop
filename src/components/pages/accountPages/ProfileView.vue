<template>
    <div class="flex flex-col gap-8">
        <p class="text-primary text-xl font-semibold">Edit Your Profile</p>
        <form action="" class="flex flex-col gap-6">
            <div class="flex gap-4 justify-between">
                <CustomGlobalTextInput class="w-full" value="First Name" @value="(value) => userFirstName = value" />
                <CustomGlobalTextInput class="w-full" value="Last Name" @value="(value) => userLastName = value" />
            </div>
            <div class="flex gap-4 justify-between">
                <CustomGlobalTextInput class="w-full" value="Email" @value="(value) => userEmail = value" />
                <CustomGlobalTextInput class="w-full" value="Address" @value="(value) => userAddress = value" />
            </div>
            <div class="flex flex-col gap-4">
                <CustomGlobalTextInput value="CurrentPassword" @value="(value) => userCurrentPassword = value" />
                <CustomGlobalTextInput :has-no-label="true" value="New Password" @value="(value) => userNewPassword = value" />
                <CustomGlobalTextInput :has-no-label="true" value="Confirm New Password" @value="(value) => userConfirmNewPassword = value" />
            </div>
            <div class="flex justify-end gap-4">
                <div :handle-click="() => null" class="bg-gray-200 flex items-center justify-center cursor-pointer rounded-sm">
                    <p class="px-4">Cancel</p>
                </div>
                <CustomButton :handle-click="() => null">
                    <p class="px-4">Save Change</p>
                </CustomButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomGlobalTextInput from '../../common/CustomGlobalTextInput.vue';
import CustomButton from '../../common/CustomButton.vue';



const userFirstName = ref<string>("");
const userLastName = ref<string>("");
const userEmail = ref<string>("");
const userAddress = ref<string>("");
const userCurrentPassword = ref<string>("");
const userNewPassword = ref<string>("");
const userConfirmNewPassword = ref<string>("");

</script>

<style scoped>

</style>