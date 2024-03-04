<script setup>
import products from '../data/products.json'

function openLink(link) {
  window.open(link, '_blank')
}
</script>

<template>
  <div class="w-screen text-white px-4">
    <div>
      <div class="pageTitle bg-base-200 text-center my-10">
        <h1 class="text-5xl font-bold">RedM Products</h1>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 my-10 mx-8 py-16">
      <div v-for="product in products" class="flex flex-col"> <!--Flex col keeps them same size-->
        <figure><img class="rounded h-60 w-full" :src="product.img" :alt="product.imgAlt" /></figure>
        <div class="card-body bg-gray-800 rounded">
          <h2 class="card-title bg-gray-800 text-center">
            {{ product.name }}!
            <br/>
            {{ product.price }}
            <div v-if="product.newFlag" class="badge badge-secondary bg-gray-800 text-white">New</div>
            <div v-for="tag in product.tags" class="bg-gray-800 card-actions justify-end">
              <div class="bg-gray-800 badge badge-outline">{{ tag }}</div>
            </div>
          </h2>
          <p class="bg-gray-800">{{ product.desc }}</p>
          <div class="bg-gray-800 card-actions justify-end">
            <RouterLink v-if="product.roadmap" :to="product.routeToName" class="btn btn-sm hover:cursor-pointer hover:opacity-80 rounded-md bg-gray-500 border-gray-500 text-white">Roadmap</RouterLink>
            <button class="btn btn-sm bg-gray-500 border-gray-500 rounded-md text-white hover:cursor-pointer hover:opacity-80" @click="openLink(product.url)">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
</style>  