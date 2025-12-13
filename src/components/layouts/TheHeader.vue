<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

// --- KHAI BÁO BIẾN ---
const showSearch = ref(false);
const showUserMenu = ref(false);
const currentUser = ref(null);

// Dùng ref để đánh dấu các phần tử HTML (để biết click vào đâu)
const searchContainer = ref(null);
const userMenuContainer = ref(null);
const searchBtn = ref(null);
const userBtn = ref(null);

// --- HÀM CẬP NHẬT USER TỪ LOCAL STORAGE ---
const updateCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    currentUser.value = JSON.parse(userStr);
  } else {
    currentUser.value = null;
  }
};

// --- HÀM XỬ LÝ CLICK RA NGOÀI ---
const handleClickOutside = (event) => {
  // 1. Xử lý User Menu
  if (showUserMenu.value && userMenuContainer.value && userBtn.value) {
    // Nếu click KHÔNG nằm trong Menu VÀ KHÔNG nằm trong nút User -> Tắt
    if (!userMenuContainer.value.contains(event.target) && !userBtn.value.contains(event.target)) {
      showUserMenu.value = false;
    }
  }

  // 2. Xử lý Search
  if (showSearch.value && searchContainer.value && searchBtn.value) {
    // Nếu click KHÔNG nằm trong khung Search VÀ KHÔNG nằm trong nút Search -> Tắt
    if (!searchContainer.value.contains(event.target) && !searchBtn.value.contains(event.target)) {
      showSearch.value = false;
    }
  }
};

// --- LIFECYCLE VUE ---
onMounted(() => {
  updateCurrentUser();
  // Lắng nghe click toàn trang
  window.addEventListener('click', handleClickOutside);
  // Lắng nghe sự kiện login thành công
  window.addEventListener('login-success', updateCurrentUser);
});

onUnmounted(() => {
  // Dọn dẹp khi tắt component
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('login-success', updateCurrentUser);
});

// --- CÁC HÀM TOGGLE ---
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  if (showSearch.value) showUserMenu.value = false;
};

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
  if (showUserMenu.value) showSearch.value = false;
};

// --- ĐĂNG XUẤT ---
const handleLogout = () => {
  localStorage.removeItem('user');
  currentUser.value = null;
  showUserMenu.value = false;
  router.push('/signin');
};
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

        <div class="relative">
          <button ref="userBtn" @click.stop="toggleUserMenu" class="flex items-center gap-2 hover:text-blue-600 transition p-1 rounded-full border border-transparent hover:bg-gray-50 focus:outline-none">
             <div v-if="currentUser" class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-200">
               {{ currentUser.fullname ? currentUser.fullname.charAt(0).toUpperCase() : 'U' }}
            </div>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>

          <div v-if="showUserMenu" ref="userMenuContainer"
               class="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1 animate-fade-in-up origin-top-right">

            <div v-if="currentUser">
                <div class="px-5 py-3 border-b border-gray-100 bg-gray-50">
                    <p class="text-sm font-bold text-gray-800 truncate">{{ currentUser.fullname }}</p>
                    <p class="text-xs text-gray-500 truncate">{{ currentUser.email }}</p>
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
