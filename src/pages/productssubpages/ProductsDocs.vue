<script setup>
import products from '../../data/products.json'
</script>

<template>
    <div class="container w-screen">
        <p class="mx-auto text-center text-white text-4xl font-bold py-10">
            {{ products[$route.params.id].name }} Documentation
        </p>
        <div class="grid grid-cols-1 w-2/4 mx-auto py-2 gap-24 my-10">
            <div v-for="doc in products[$route.params.id].docsData" :key="doc.id" class="">
            <h1 class="font-bold text-2xl text-center">
                {{ doc.title }}
            </h1>
            <div class="bg-slate-700 p-8 rounded-lg overflow-hidden">
                <div class="mockup-code bg-slate-700 text-sm sm:overflow-x-scroll lg:overflow-auto">
                    <pre class="bg-slate-700"><code class="bg-slate-700 text-white">{{ doc.code }}</code></pre>
                </div>
            </div>
            <div class="py-2">
                {{ doc.desc }}
            </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
</style>