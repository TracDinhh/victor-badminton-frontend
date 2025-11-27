import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/victor/views/HomeView.vue'
// Sửa dòng 3 thành:
import ProductList from '@/victor/product/ProductList.vue'
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
  ],
})

export default router
