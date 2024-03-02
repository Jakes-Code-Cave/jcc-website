import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../views/AboutView.vue'
import About from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory('/jcc-website/'),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/about', name: "About", component: About }
    ]
})

export default router;