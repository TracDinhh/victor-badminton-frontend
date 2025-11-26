<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// 1. Import Layout chính
import DefaultLayout from '@/victor/layouts/DeFaultLayout.vue';

// 2. Cấu hình danh sách Banner (Dùng đúng tên file ảnh bạn đang có)
const banners = ref([
  { id: 1, image: '/images/banner-1.webp', title: 'Victor - Sẵn Sàng Chinh Phục' },
  { id: 2, image: '/images/banner-2.webp', title: 'Bộ Sưu Tập Mới 2025' },
  // Nếu bạn muốn thêm ảnh thì cứ copy dòng trên rồi sửa tên file
]);

// --- LOGIC TRƯỢT BANNER (Slider) ---
const currentIndex = ref(0);
let intervalId;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + banners.value.length) % banners.value.length;
};

// Tự động trượt sau 5 giây
onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
});

// Dọn dẹp khi thoát trang để tránh lỗi
onUnmounted(() => clearInterval(intervalId));
</script>

<template>
  <DefaultLayout>

    <div class="relative w-full h-[400px] md:h-[600px] overflow-hidden group bg-gray-100">

      <div class="flex transition-transform duration-700 ease-in-out h-full"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="banner in banners" :key="banner.id" class="min-w-full h-full relative">
          <img :src="banner.image" class="w-full h-full object-cover" alt="Banner Quảng Cáo" />

          <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2
              class="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest drop-shadow-lg opacity-0 animate-fade-in">
              {{ banner.title }}
            </h2>
          </div>
        </div>
      </div>

      <button @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100 z-10">
        ❮
      </button>

      <button @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100 z-10">
        ❯
      </button>

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        <button v-for="(banner, index) in banners" :key="banner.id" @click="currentIndex = index"
          class="w-3 h-3 rounded-full transition-all duration-300 shadow-sm"
          :class="index === currentIndex ? 'bg-white w-10' : 'bg-white/50 hover:bg-white'"></button>
      </div>

    </div>

    <div class="container mx-auto py-12 text-center">
      <h3 class="text-3xl font-bold text-blue-900 uppercase border-b-4 border-blue-600 inline-block pb-2">
        Sản Phẩm Mới
      </h3>
      <p class="mt-4 text-gray-600">Danh sách sản phẩm sẽ hiển thị ở đây...</p>
    </div>

  </DefaultLayout>
</template>
