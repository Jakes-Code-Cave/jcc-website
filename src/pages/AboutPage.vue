<script setup>
import team from '../data/team.json'
</script>

<template>
  <div class="w-3/5 mx-auto text-center text-white text-2xl py-28">
    <h2 class="text-3xl font-extrabold text-blue-400 sm:text-4xl pb-4">About Us</h2>
    <div>
      We are a dedicated RedM Script Studio committed to delivering unparalleled immersion, rich features, modularity, and extensive configurability in our scripts. Our mission is to enhance the RedM experience by offering high-quality, affordable solutions to the community. Our scripts are meticulously crafted to empower players' creativity and provide a seamless, enjoyable gaming experience. Join us on our journey to redefine the possibilities of RedM scripting.
    </div>
  </div>
  <div class="w-screen text-white text-center">
    <h2 class="text-3xl font-extrabold text-blue-400 sm:text-4xl pb-10">Our Team</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div v-for="member in team">
        <img :src="`/jcc-website/images/${member.img}`" alt="profilePicture" class="h-60 mx-auto rounded-lg pointer-events-none" />
        <h1 class="text-4xl font-bold py-4">{{ member.name }}</h1>
        <h2 class="text-1xl">{{ member.role }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>