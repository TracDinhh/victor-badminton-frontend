<script setup>
import { ref } from 'vue';
import FilterSidebar from '@/features/products/components/FilterSidebar.vue';
import ProductCard from '@/features/products/components/ProductCard.vue';

// Dữ liệu 3 sản phẩm demo
const products = ref([
  { id: 1, name: 'Vợt Victor Ryuga II Pro', price: '3.400.000đ', image: '/images/product-1.webp' },
  { id: 2, name: 'Giày Victor P9200', price: '1.850.000đ', image: '/images/product-2.webp' },
  { id: 3, name: 'Áo Thi Đấu Victor T-2025', price: '450.000đ', image: '/images/product-3.webp' },
  { id: 4, name: 'Vợt Victor Ryuga II Pro', price: '3.400.000đ', image: '/images/product-1.webp' },
  { id: 5, name: 'Giày Victor P9200', price: '1.850.000đ', image: '/images/product-2.webp' },
  { id: 6, name: 'Áo Thi Đấu Victor T-2025', price: '450.000đ', image: '/images/product-3.webp' },
]);
</script>

<template>

    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

      <aside class="w-full md:w-1/4">
        <FilterSidebar />
      </aside>

      <main class="w-full md:w-3/4">

        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-blue-900">Tất Cả Sản Phẩm</h1>
          <select class="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500">
            <option>Mới nhất</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>

      </main>

    </div>
</template>
