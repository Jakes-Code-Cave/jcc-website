<script setup>
import { RouterLink } from 'vue-router'
function openLink(link) {
    window.open(link, '_blank')
}
</script>

<template>
    <div>
        <div class="navbar border-b-2 border-red-400 w-screen sticky top-0">
            <div class="navbar-center mx-auto">
                <ul class="menu menu-horizontal px-1 text-white">
                    <li><RouterLink to="/" class="hover:text-gray-600">Home</RouterLink></li>
                    <li><RouterLink to="/about" class="hover:text-gray-600">About</RouterLink></li>
                    <li><RouterLink to="/products" class="hover:text-gray-600">Products</RouterLink></li>
                    <li>
                        <details>
                            <summary>Links</summary>
                            <ul class="p-2">
                                <li><a @click="openLink('https://www.youtube.com/@Jake2k4-id9ym')">Youtube</a></li>
                                <li><a @click="openLink('https://github.com/Jakes-Code-Cave')">Github</a></li>
                                <li><a @click="openLink('https://discord.gg/SW2rBydUuu')">Discord</a></li>
                                <li><a @click="openLink('mailto:jakelandrumbe@gmail.com')">Email</a></li>
                                <li><a @click="openLink('https://jcc-scripts.tebex.io/category/2623193')">Tebex</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>