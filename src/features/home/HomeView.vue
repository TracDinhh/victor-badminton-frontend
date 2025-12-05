<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import DefaultLayout from '@/layouts/DeFaultLayout.vue';

const banners = ref([
  { id: 1, image: './images/banner-1.webp' },
  { id: 2, image: './images/banner-2.webp' },
]);

const currentIndex = ref(0);
let intervalId;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + banners.value.length) % banners.value.length;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
})

onUnmounted(() => {
  clearInterval(intervalId);
});

</script>
<template>
  <DefaultLayout>
    <div class="relative w-full h-[400px] md:h-[600px] overflow-hidden group bg-gray-100">

      <div class="flex transition-transform duration-500 ease-in-out h-full"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="banner in banners" :key="banner.id" class="min-w-full h-full">
          <img :src="banner.image" class="w-full h-full object-cover" alt="Banner" />
        </div>
      </div>

    </div>

    <button @click="prevSlide" class="absolute left-4 top-1/2 bg-black/50 text-white p-2">Prev</button>
    <button @click="nextSlide" class="absolute right-4 top-1/2 bg-black/50 text-white p-2">Next</button>

  </DefaultLayout>
</template>
