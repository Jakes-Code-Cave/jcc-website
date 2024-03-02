<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LandingPage from './pages/LandingPage.vue';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
</style>