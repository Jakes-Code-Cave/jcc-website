import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../pages/LandingPage.vue'
import About from '../pages/AboutPage.vue'

const router = createRouter({
    history: createWebHashHistory('/jcc-website/'),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/about', name: "About", component: About }
    ]
})

export default router;