<template>
    <ul class="bg-black text-white z-50 fixed bottom-0 left-0 right-0 w-full flex grow flex-row justify-between space-x-2 py-2 md:flex-col md:space-x-0 md:space-y-8 md:min-h-screen md:w-52 md:pt-14">
        <li>
            <RouterLink to="/dashboard" class="flex items-center justify-start cursor-pointer px-6 gap-3 py-4 my-1 md:hover:bg-gray-700">
                <Icon icon="mdi-light:home" class="text-3xl"/>
                <span class="hidden font-semibold text-xl md:block">Dashboard</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/book" class="flex items-center justify-start cursor-pointer px-6 gap-3 py-4 my-1 md:hover:bg-gray-700">
                <Icon icon="mdi-light:book" class="text-3xl"/>
                <span class="hidden font-semibold text-xl md:block">Book</span>
            </RouterLink>
        </li>
        <li class="hidden h-auto w-full grow rounded-md md:block"></li>
        <li class=" text-red-600 md:border-t" @click="()=>isAuthenticated=false">
            <RouterLink to="/login" class="flex items-center justify-start cursor-pointer px-6 gap-3 py-4 my-1">
                <Icon icon="mdi-light:logout" class="text-3xl"/>
                <span class="hidden font-semibold text-xl md:block">Logout</span>
            </RouterLink>
        </li>
    </ul>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import { Icon } from '@iconify/vue';

const userStore = useUserStore()
const { isAuthenticated } = storeToRefs(userStore)
</script>