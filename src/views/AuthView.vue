<template>
    <div class="flex flex-col min-h-screen md:flex-row md:overflow-hidden" v-if="isAuthenticated">
      <div class="w-full flex-none md:w-52">
        <SideBar/>
      </div>
      <div class="flex-grow bg-gray-200 p-4 min-h-screen md:overflow-y-auto md:p-6">
        <RouterView/>
      </div>
    </div>
  </template>
  
<script setup>
  import { onUnmounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/userStore';
  import SideBar from '@/components/SideBar.vue';

  const userStore = useUserStore();
  const { isAuthenticated } = storeToRefs(userStore);
  const router = useRouter();

  onUnmounted(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  });
</script>