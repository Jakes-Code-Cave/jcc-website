<script setup>
import products from '../data/products.json'
</script>

<template>
  <p class=" w-screen mx-auto text-center text-white text-4xl font-bold py-10">
    {{ products[$route.params.id].name }} Roadmap
  </p>
  <div class="grid grid-cols-1 lg:grid-cols-3 py-10 gap-20 my-10 mx-8">
    <div v-for="roadmapGoal in products[$route.params.id].roadmapData" class="flex flex-col items-center">
      <div class="card w-96 shadow-xl rounded border-solid border-2 border-red-700">
        <div class="card-body bg-gray-800 rounded">
          <h2 class="card-title bg-gray-800 text-white">{{ roadmapGoal.name }}</h2>
          <p class="bg-gray-800 text-white">{{ roadmapGoal.desc }}</p>
          <div class="card-actions justify-end">
            <ul v-if="roadmapGoal.status == 'Planned'" class="steps bg-gray-800 py-4 h-22">
              <li class="step step-primary bg-gray-800 text-white">Planned</li>
              <li class="step bg-gray-800 text-white mr-8 ml-2">Development</li>
              <li class="step bg-gray-800 text-white">Testing</li>
              <li class="step bg-gray-800 text-white">Published</li>
            </ul>
            <ul v-else-if="roadmapGoal.status == 'Development'" class="steps bg-gray-800 py-4 h-22">
              <li class="step step-primary bg-gray-800 text-white">Planned</li>
              <li class="step step-primary bg-gray-800 text-white mr-8 ml-2">Development</li>
              <li class="step bg-gray-800 text-white">Testing</li>
              <li class="step bg-gray-800 text-white">Published</li>
            </ul>
            <ul v-else-if="roadmapGoal.status == 'Testing'" class="steps bg-gray-800 py-4 h-22">
              <li class="step step-primary bg-gray-800 text-white">Planned</li>
              <li class="step step-primary bg-gray-800 text-white mr-8 ml-2">Development</li>
              <li class="step step-primary bg-gray-800 text-white">Testing</li>
              <li class="step bg-gray-800 text-white">Published</li>
            </ul>
            <ul v-else-if="roadmapGoal.status == 'Published'" class="steps bg-gray-800 py-4 h-22">
              <li class="step step-primary bg-gray-800 text-white">Planned</li>
              <li class="step step-primary bg-gray-800 text-white mr-8 ml-2">Development</li>
              <li class="step step-primary bg-gray-800 text-white">Testing</li>
              <li class="step step-primary bg-gray-800 text-white">Published</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
</style>