import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/victor/views/HomeView.vue'
import ProductList from '@/victor/product/ProductList.vue'
import ProductDetail from '@/victor/product/ProductDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductList,
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      component: ProductDetail,
    },
  ],
})

export default router
