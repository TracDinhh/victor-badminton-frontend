import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/victor/views/HomeView.vue'
import ProductList from '@/victor/product/ProductList.vue'
import ProductDetail from '@/victor/product/ProductDetail.vue'
import SignIn from '@/victor/auth/SignIn.vue'
import SignUp from '@/victor/auth/SignUp.vue'
import CartView from '@/victor/views/CartView.vue'
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
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    }
  ],
})

export default router
