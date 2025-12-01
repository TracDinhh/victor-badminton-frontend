<script setup>
import { ref } from 'vue';
import DeFaultLayout from '../layouts/DeFaultLayout.vue';

const cartItems = ref([
  {
    id: 1,
    name: 'Vợt Cầu Lông Victor Brave Sword 12',
    price: '3.600.000đ',
    quantity: 1,
    image: '/images/product-2.webp'
  },
  {
    id: 2,
    name: 'Vợt Cầu Lông Victor Brave Sword 12',
    price: '3.600.000đ',
    quantity: 1,
    image: '/images/product-3.webp'
  },
  {
    id: 3,
    name: 'Vợt Cầu Lông Victor Brave Sword 12',
    price: '3.600.000đ',
    quantity: 1,
    image: '/images/product-1.webp'
  },
]);
</script>

<template>
  <DeFaultLayout>
    <div class="bg-gray-50 min-h-screen py-10">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">🛒 Your cart
          <span class="text-base font-normal text-gray-500">(3 sản phẩm)</span>
        </h1>

        <div class="flex flex-col lg:flex-row gap-8">
          <div class="lg:w-2/3 space-y-4">
            <div v-for="item in cartItems" :key="item.id"
              class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center">
              <div class="w-24 h-24 flex-shrink-0 border rounded-lg overflow-hidden bg-gray-100">
                <img :src="item.image" class="w-full h-full object-cover" alt="Product">
              </div>

              <div class="flex-grow">
                <h3 class="font-bold text-gray-800 text-lg mb-1">{{ item.name }}</h3>
                <p class="text-red-600 font-bold">{{ item.price }}</p>
                <p class="text-xs text-green-600 mt-1">✔ Còn hàng</p>
              </div>

              <div class="flex flex-col items-end gap-3">
                <div class="flex items-center border border-gray-300 rounded-lg">
                  <button class="px-3 py-1 hover:bg-gray-100 text-gray-600">-</button>
                  <input type="text" :value="item.quantity"
                    class="w-10 text-center text-sm font-bold border-none outline-none" readonly>
                  <button class="px-3 py-1 hover:bg-gray-100 text-gray-600">+</button>
                </div>

                <div class="flex flex-col items-end gap-3">

                  <div class="flex items-center border border-gray-300 rounded-lg">
                    <button class="px-3 py-1 hover:bg-gray-100 text-gray-600">-</button>
                    <input type="text" :value="item.quantity"
                      class="w-10 text-center text-sm font-bold border-none outline-none" readonly>
                    <button class="px-3 py-1 hover:bg-gray-100 text-gray-600">+</button>
                  </div>

                  <button class="text-gray-400 hover:text-red-500 text-sm flex items-center gap-1 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    Delete
                  </button>
                </div>

              </div>

            </div>
            <RouterLink to="/product"
              class="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline mt-4">
              ← Tiếp tục mua sắm
            </RouterLink>
          </div>

          <div class="lg:w-1/3">
            <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <h3 class="text-xl font-bold text-gray-800 mb-6 pb-4 border-b">Thông Tin Đơn Hàng</h3>

              <div class="space-y-3 mb-6">
                <div class="flex justify-between text-gray-600">
                  <span>Tạm tính (3 món):</span>
                  <span class="font-bold">6.150.000đ</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Phí vận chuyển:</span>
                  <span class="text-green-600 font-bold">Miễn phí</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Giảm giá:</span>
                  <span>0đ</span>
                </div>
              </div>

              <div class="border-t pt-4 mb-6 flex justify-between items-center">
                <span class="text-lg font-bold text-gray-800">Tổng cộng:</span>
                <span class="text-2xl font-extrabold text-red-600">6.150.000đ</span>
              </div>

              <button
                class="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-red-700 transition shadow-md active:scale-95">
                Tiến Hành Thanh Toán
              </button>

              <div class="mt-4 flex justify-center gap-4 grayscale opacity-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" class="h-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" class="h-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" class="h-6">
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </DeFaultLayout>
</template>
