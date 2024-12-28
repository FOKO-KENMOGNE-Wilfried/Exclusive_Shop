<template>
    <div class="flex md:gap-4 lg:gap-8 xl:gap-32 flex-col gap-y-8 py-8 md:flex-row items-center">
        <img src="/images/login_bg.png" alt="login_background" class="md:w-6/12 lg:w-8/12 xl:w-fit" />
        <div class="flex flex-col gap-8">
            <div>
                <h2 class="text-2xl font-medium">Create an account</h2>
                <p>Enter your datails below</p>
            </div>
            <form action="" class="flex flex-col gap-4 w-80">
                <CustomTextInput input-type="text" value="Name" @value="(value) => userName = value" />
                <CustomTextInput input-type="text" value="Surname" @value="(value) => userSurName = value" />
                <CustomTextInput input-type="email" value="Email" @value="(value) => userEmail = value" />
                <CustomTextInput input-type="password" value="Password" @value="(value) => userPassword = value" />
                <div>
                    <CustomLoader v-if="isDisplayingLoading" />
                    <CustomButton v-else :handle-click="() => handleSubmit()" class="mt-4" >
                        <p>Create an Account</p>
                    </CustomButton>
                </div>
            </form>
            <div class="w-full text-center">
                <p>Already have account ? <RouterLink to="/login" class=" underline">Log in</RouterLink></p>
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

const api = new API();
const userName = ref<string>("");
const userSurName = ref<string>("");
const userEmail = ref<string>("");
const userPassword = ref<string>("");
const isDisplayingLoading = ref<boolean>(false);

function handleSubmit() {
    isDisplayingLoading.value = true;
    const data = {
        name: userName.value,
        surname: userSurName.value,
        email: userEmail.value,
        password: userPassword.value,
    }
    api.postData(api.apiUrl + "/auth/register", JSON.stringify(data), null, false)
        .then(() => {
            isDisplayingLoading.value = false;
            alert("Account created successfully");
            router.push({path: "/login"});
        })
        .catch((err) => {
            console.log(err);
            alert("Email is already registered");
            router.push({path: "/login"});
        });

}

</script>

<style scoped>

</style>