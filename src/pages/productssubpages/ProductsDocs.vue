<script setup>
import products from '../../data/products.json'

function copyText(text) {
  navigator.clipboard.writeText(text);
}

</script>

<template>
    <div class="container w-screen text-white mx-auto">
        <p class="text-center text-4xl font-bold py-10">
            {{ products[$route.params.id].name }} Documentation
        </p>
        <div class="grid grid-cols-1 mx-auto py-2 gap-24 my-10">
            <div v-for="doc in products[$route.params.id].docsData" :key="doc.id" class="mx-auto w-2/4">
                <h1 class="font-bold text-2xl text-center px-2 pb-2">
                    {{ doc.title }}
                </h1>
                <div class="bg-slate-700 p-8 py-2 rounded-lg overflow-x-auto">
                    <div class="mockup-code bg-slate-700 text-sm overflow-visible">
                        <button class="bg-gray-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded-full my-2" @click="copyText(doc.code)">
                            Copy
                        </button>
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