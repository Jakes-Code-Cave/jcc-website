import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../pages/LandingPage.vue'
import About from '../pages/AboutPage.vue'
import Products from '../pages/ProductsPage.vue'
import ProductSubPage from '../pages/ProductsSubPage.vue'


const router = createRouter({
    history: createWebHashHistory('/jcc-website/'),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/about', name: "About", component: About },
        { path: '/products', name: "Products", component: Products },
        { path: '/products/:id', name: "ProductPage", component: ProductSubPage }
    ]
})

export default router;