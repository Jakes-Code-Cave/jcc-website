import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../pages/LandingPage.vue'
import About from '../pages/AboutPage.vue'
import Products from '../pages/ProductsPage.vue'
import ProductRoadmap from '../pages/productssubpages/ProductsRoadmap.vue'
import ProductDocs from '../pages/productssubpages/ProductsDocs.vue'


const router = createRouter({
    history: createWebHashHistory('/jcc-website/'),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/about', name: "About", component: About },
        { path: '/products', name: "Products", component: Products },
        { path: '/products/roadmap/:id', name: "Product Roadmap", component: ProductRoadmap },
        { path: '/products/docs/:id', name: "Product Docs", component: ProductDocs }
    ]
})

export default router;