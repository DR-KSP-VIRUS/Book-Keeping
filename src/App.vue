<template>
  <main class="flex flex-col min-h-screen md:flex-row md:overflow-hidden">
    <div class="w-full flex-none md:w-40">
      <SideBar/>
    </div>
    <div class="flex-grow p-4 md:mb-24 md:overflow-y-auto md:p-6">
      <RouterView/>
    </div>
  </main>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
</script>