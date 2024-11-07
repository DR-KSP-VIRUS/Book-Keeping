<template>
  <main class=" min-h-screen">
    <NavBar/>
    <RouterView/>
  </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>