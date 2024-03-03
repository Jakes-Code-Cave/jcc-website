<script setup>
import navbar from '../components/navbar.vue'
</script>

<template>
  <navbar />
  <div class="w-3/5 mx-auto text-center text-white text-2xl py-28">
    <h2 class="text-3xl font-extrabold text-blue-400 sm:text-4xl pb-4">About Us</h2>
    <body>
      We are a dedicated RedM Script Studio committed to delivering unparalleled immersion, rich features, modularity, and extensive configurability in our scripts. Our mission is to enhance the RedM experience by offering high-quality, affordable solutions to the community. Our scripts are meticulously crafted to empower players' creativity and provide a seamless, enjoyable gaming experience. Join us on our journey to redefine the possibilities of RedM scripting.
    </body>
  </div>
  <div class="w-screen text-white text-center">
    <div class="grid grid-cols-2">
      <div>
        <img src="../assets/images/myPFP.png" alt="My Profile Picture" class="h-60 mx-auto rounded-lg" />
        <h1 class="text-4xl font-bold py-4">Jake2k4</h1>
        <h2 class="text-1xl">Lead Developer/Founder</h2>
      </div>
      <div>
        <img src="../assets/images/baskinsLogo.png" alt="Baskins Logo" class="h-60 mx-auto rounded-lg" />
        <h1 class="text-4xl font-bold py-4">Baskins</h1>
        <h2 class="text-1xl">Support</h2>
      </div>
    </div>
    <!--May need to move to a json if we gain more members-->
    <!--May also move the team to its own team page in future if we gain more-->
  </div>
</template>

<style scoped>
</style>