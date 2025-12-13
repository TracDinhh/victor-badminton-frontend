<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { authStore } from '@/stores/auth'; // IMPORT STORE

const router = useRouter();

// --- STATE ---
const showSearch = ref(false);
const showUserMenu = ref(false);

// --- CLICK OUTSIDE ---
const searchContainer = ref(null);
const userMenuContainer = ref(null);
const searchBtn = ref(null);
const userBtn = ref(null);

const handleClickOutside = (event) => {
  // Chỉ tắt menu User nếu đang mở
  if (showUserMenu.value && userMenuContainer.value && userBtn.value) {
    if (!userMenuContainer.value.contains(event.target) && !userBtn.value.contains(event.target)) {
      showUserMenu.value = false;
    }
  }
  // Chỉ tắt Search nếu đang mở
  if (showSearch.value && searchContainer.value && searchBtn.value) {
    if (!searchContainer.value.contains(event.target) && !searchBtn.value.contains(event.target)) {
      showSearch.value = false;
    }
  }
};

onMounted(() => { window.addEventListener('click', handleClickOutside); });
onUnmounted(() => { window.removeEventListener('click', handleClickOutside); });

// --- ACTIONS ---
const toggleSearch = () => { showSearch.value = !showSearch.value; if(showSearch.value) showUserMenu.value = false; };
const toggleUserMenu = () => { showUserMenu.value = !showUserMenu.value; if(showUserMenu.value) showSearch.value = false; };

const handleLogout = () => {
  authStore.logout(); // Gọi Store để logout
  showUserMenu.value = false;
  router.push('/signin');
};

const goToAdmin = () => { router.push('/admin'); }
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200 font-sans">
    <div class="container mx-auto px-6 h-20 flex justify-between items-center bg-white relative z-20">

      <div class="w-32 cursor-pointer transition hover:opacity-80">
        <RouterLink to="/">
          <img src="/images/logo2.jpg" alt="Victor Logo" class="h-auto w-full" />
        </RouterLink>
      </div>

      <nav class="hidden md:flex gap-8">
        <RouterLink to="/" active-class="text-blue-600" class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition duration-300">Home page</RouterLink>
        <RouterLink to="/product" active-class="text-blue-600" class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition duration-300">Rackets</RouterLink>
        <RouterLink to="/shoes" active-class="text-blue-600" class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition duration-300">Shoes</RouterLink>
      </nav>

      <div class="flex items-center gap-4 text-gray-600">

        <button ref="searchBtn" @click.stop="toggleSearch" class="hover:text-blue-600 transition p-2 rounded-full hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>

        <RouterLink to="/cart" class="hover:text-blue-600 transition relative p-2 rounded-full hover:bg-gray-50 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span class="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">3</span>
        </RouterLink>

        <div v-if="authStore.isAdmin" class="flex items-center gap-2 animate-fade-in-up">
            <span class="text-[10px] font-bold text-red-600 uppercase border border-red-600 px-2 py-1 rounded tracking-wide">Admin</span>

            <button @click="goToAdmin" title="Quản trị hệ thống" class="p-2 hover:bg-gray-100 rounded-full text-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </button>

            <button @click="handleLogout" title="Đăng xuất" class="p-2 hover:bg-red-50 text-red-500 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
            </button>
        </div>

        <div v-else class="relative">
          <button ref="userBtn" @click.stop="toggleUserMenu" class="flex items-center gap-2 hover:text-blue-600 transition p-1 rounded-full border border-transparent hover:bg-gray-50 focus:outline-none">
             <div v-if="authStore.user" class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-200">
               {{ authStore.user.fullname ? authStore.user.fullname.charAt(0).toUpperCase() : 'U' }}
            </div>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>

          <div v-if="showUserMenu" ref="userMenuContainer"
               class="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1 animate-fade-in-up origin-top-right z-50">

            <div v-if="authStore.user">
                <div class="px-5 py-3 border-b border-gray-100 bg-gray-50">
                    <p class="text-sm font-bold text-gray-800 truncate">{{ authStore.user.fullname }}</p>
                    <p class="text-xs text-gray-500 truncate">{{ authStore.user.email }}</p>
                </div>
                <RouterLink to="/profile" class="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Hồ sơ cá nhân</RouterLink>
                <RouterLink to="/orders" class="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Đơn mua</RouterLink>
                <div class="border-t border-gray-100 my-1"></div>
                <button @click="handleLogout" class="w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50">Đăng xuất</button>
            </div>

            <div v-else class="p-4 text-center">
                <p class="text-sm text-gray-500 mb-3">Chào mừng bạn!</p>
                <RouterLink to="/signin" class="block w-full bg-blue-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-blue-700 mb-2">Đăng Nhập</RouterLink>
                <p class="text-xs text-gray-400">Chưa có tài khoản? <RouterLink to="/signup" class="text-blue-600 hover:underline">Đăng ký</RouterLink></p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-if="showSearch" ref="searchContainer" class="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 z-10 animate-slide-down">
       <div class="container mx-auto max-w-3xl flex gap-3">
        <input type="text" placeholder="Tìm kiếm..." class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">Tìm</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fadeInUp 0.2s ease-out; }
@keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
.animate-slide-down { animation: slideDown 0.3s ease-out; }
</style>
