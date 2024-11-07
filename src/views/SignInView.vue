<template>
    <div class="flex bg-gray-100 min-h-screen place-content-center place-items-center px-4">

        <div class="bg-white w-full rounded md:w-[530px]">
            <h1 class="font-bold text-2xl border-b py-2 px-4 text-gray-600">Login</h1>
            <form class="px-4 py-2" @submit.prevent="sumbitForm">
                <div class="flex flex-col my-2">
                    <label for="email" class="font-semibold space-y-1">Email:</label>
                    <input type="email" name="email" id="email" placeholder="tomjerry@gmail.com"
                    class="px-3 py-1 rounded border outline-orange-500"/>
                </div>
                <div class="flex flex-col my-2">
                    <label for="password" class="font-semibold space-y-1">Password:</label>
                    <input type="password" name="password" id="password" placeholder="more than 6 characters"
                    class="px-3 py-1 rounded border outline-orange-500"/>
                </div>
                <div class="flex my-4">
                    <button type="submit" class="bg-black text-white w-full rounded py-2 font-semibold transition-all active:scale-95">Save</button>
                </div>
                <div>
                    <p>Don't have account yet? 
                        <span>
                            <RouterLink to="/signup" class="text-orange-500">Sign Up</RouterLink>
                        </span>
                        to create account
                    </p> 
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const router = useRouter();

const userStore = useUserStore();

const sumbitForm = () => {
    userStore.login();
    router.push('/dashboard');

}
</script>