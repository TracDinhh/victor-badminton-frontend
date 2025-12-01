<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'; // Nhớ import RouterLink

// 1. Biến điều khiển trạng thái (Tắt/Mở)
const showSearch = ref(false);
const showUserMenu = ref(false);

// Hàm toggle (bấm lần 1 mở, bấm lần 2 tắt)
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  // Nếu mở tìm kiếm thì tắt menu user đi cho đỡ rối
  if (showSearch.value) showUserMenu.value = false;
};

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
  // Nếu mở menu user thì tắt tìm kiếm đi
  if (showUserMenu.value) showSearch.value = false;
};
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200 relative">
    <div class="container mx-auto px-6 h-20 flex justify-between items-center bg-white relative z-20">

      <div class="w-32 cursor-pointer">
        <RouterLink to="/">
          <img src="/images/logo2.jpg" alt="Victor Logo" class="h-auto w-full" />
        </RouterLink>
      </div>

      <nav class="hidden md:flex gap-8">
        <RouterLink to="/"
          class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Home page
        </RouterLink>
        <RouterLink to="/product"
          class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Rackets
        </RouterLink>
        <RouterLink to="/product"
          class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Shoes
        </RouterLink>
        <a href="#" class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Connect
        </a>
      </nav>

      <div class="flex items-center gap-5 text-gray-600">

        <button @click="toggleSearch" class="hover:text-blue-600 transition p-1 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6" :class="{ 'text-blue-600': showSearch }">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>

        <RouterLink to="/cart" class="hover:text-blue-600 transition relative p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span
            class="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">3</span>
        </RouterLink>

        <div class="relative">
          <button @click="toggleUserMenu"
            class="flex items-center gap-2 hover:text-blue-600 transition p-1 rounded-full hover:bg-gray-100 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>

          <div v-if="showUserMenu"
            class="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1 animate-fade-in-up">

            <RouterLink to="/signin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              Đăng Nhập
            </RouterLink>
            <RouterLink to="/signup" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              Đăng Ký Tài Khoản
            </RouterLink>

            <div class="border-t border-gray-100 my-1"></div>

            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              Tra cứu đơn hàng
            </a>
          </div>
        </div>

      </div>
    </div>

    <div v-if="showSearch"
      class="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 p-4 z-10 animate-slide-down">
      <div class="container mx-auto max-w-3xl flex gap-2">
        <input type="text" placeholder="Tìm kiếm vợt, giày, phụ kiện..."
          class="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
        <button class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
          Tìm
        </button>
        <button @click="showSearch = false" class="text-gray-400 hover:text-red-500 p-2">✕</button>
      </div>
    </div>

  </header>
</template>

<style scoped>
/* Hiệu ứng dropdown nhẹ nhàng */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.2s ease-out;
}

/* Hiệu ứng search trượt xuống */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}
</style>
