<template>
    <ul class="flex justify-between px-10 w-full bg-black text-white py-3" v-if="!isAuthenticated">
        <li>
            <RouterLink to="/">Home</RouterLink>
        </li>
        <ul class="flex space-x-4">
            <li>
                <RouterLink to="/login">login</RouterLink>
            </li>
            <li>
                <RouterLink to="/signup">signup</RouterLink>
            </li>
        </ul>
       
    </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const { isAuthenticated } = storeToRefs(userStore);
</script>