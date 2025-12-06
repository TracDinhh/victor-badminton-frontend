import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/features/home/HomeView.vue'
import ProductList from '@/features/products/ProductList.vue'
import ProductDetail from '@/features/products/ProductDetail.vue'
import SignIn from '@/features/auth/SignIn.vue'
import SignUp from '@/features/auth/SignUp.vue'
import CartView from '@/features/cart/CartView.vue'
import DeFaultLayout from '@/layouts/DeFaultLayout.vue'

// import AdminLayout from '@/layouts/AdminLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardView from '@/features/admin/dashboard/DashboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: DeFaultLayout,
      children:[
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path:'product',
          name:'product',
          component: ProductList,
        },
        {
          path:'products/:id',
          name:'product-detail',
          component: ProductDetail,
        },
        {
          path:'signin',
          name:'signin',
          component: SignIn,
        },
        {
          path:'signup',
          name:'signup',
          component: SignUp,
        },
        {
          path:'cart',
          name:'cart',
          component: CartView,
        }
      ]
    },
    {
      path:'/admin',
      component: AdminLayout,
      children:[
        {
          path:'dashboard',
          name:'dashboard',
          component: DashboardView,
        }
      ]
    }
  ]
})

export default router
