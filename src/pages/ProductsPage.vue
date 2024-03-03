<script setup>
import navbar from '../components/navbar.vue'
import products from '../data/products.json'

function openLink(link) {
  window.open(link, '_blank')
}
</script>

<template>
  <navbar />
  <div class="w-screen text-white px-4">
    <div>
      <div class="pageTitle bg-base-200 text-center my-10">
        <h1 class="text-5xl font-bold">RedM Products</h1>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 my-10 mx-8 py-16">
      <div v-for="product in products" class="flex flex-col hover:cursor-pointer hover:opacity-80" @click="openLink(product.url)"> <!--Flex col keeps them same size-->
        <figure><img class="rounded h-60 w-full" :src="product.img" :alt="product.imgAlt" /></figure>
        <div class="card-body bg-gray-800 rounded">
          <h2 class="card-title bg-gray-800">
          {{ product.name }}!
          <div v-if="product.newFlag" class="badge badge-secondary bg-gray-800 text-white">New</div>
          </h2>
          <p class="bg-gray-800">{{ product.desc }}</p>
          <div class="bg-gray-800 card-actions justify-end">
            <div v-for="tag in product.tags" class="bg-gray-800 card-actions justify-end">
                <div class="bg-gray-800 badge badge-outline">{{ tag }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
</style>  