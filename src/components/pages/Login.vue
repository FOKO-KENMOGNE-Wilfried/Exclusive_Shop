<template>
    <div class="flex md:gap-4 lg:gap-8 xl:gap-32 flex-col gap-y-8 py-8 md:flex-row items-center">
        <img src="/images/login_bg.png" alt="login_background" class="md:w-6/12 lg:w-8/12 xl:w-fit" />
        <div class="flex flex-col gap-8">
            <div>
                <h2 class="text-2xl font-medium">Log in to Exclusive</h2>
                <p>Enter your datails below</p>
            </div>
            <form action="" class="flex flex-col gap-4 w-80">
                <CustomTextInput input-type="text" value="Email" @value="(value) => userEmail = value" />
                <CustomTextInput input-type="password" value="Password" @value="(value) => userPassword = value" />
                <div>
                    <CustomLoader v-if="isDisplayingLoading" />
                    <CustomButton v-else :handle-click="() => handleSubmit()" class="mt-4" >
                        <p>Login</p>
                    </CustomButton>
                </div>
            </form>
            <div class="w-full text-center">
                <p>You don't have account ? <RouterLink to="/signup" class=" underline">Sign up</RouterLink></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../common/CustomButton.vue';
import CustomTextInput from '../common/CustomTextInput.vue'
import CustomLoader from "../common/CustomLoader.vue"
import { router } from '../../routes';
import API from '../../utils/API';
import LocalStorageManager from '../../utils/LocalStorageManager';

const api = new API();
const userEmail = ref<string>("");
const userPassword = ref<string>("");
const isDisplayingLoading = ref<boolean>(false);

async function handleSubmit() {
    isDisplayingLoading.value = true;
    const data = {
        email: userEmail.value,
        password: userPassword.value
    }
    api.postData(api.apiUrl + "/auth/login", JSON.stringify(data), null, false)
        .then((res) => {
            const userData = {
                userId: res.userId,
                cardId: res.cartId,
                token: res.token
            }
            LocalStorageManager.saveData(userData)
            isDisplayingLoading.value = false;
            alert("login successful");
            router.push({path: "/"}).then(() => { router.go(0)} );
        })
        .catch((err) => {
            console.log(err);
            alert("Invalid email or password");
        });
}

</script>

<style scoped>

</style>