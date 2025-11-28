<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'; // Dùng để lấy ID trên thanh địa chỉ
import DefaultLayout from '@/victor/layouts/DeFaultLayout.vue';

// 1. Lấy ID từ URL (Ví dụ: /products/1 -> id = 1)
const route = useRoute();
const productId = route.params.id;


const product = ref({
  id: productId,
  name: 'Vợt Cầu Lông Victor Ryuga II Pro',
  price: '3.400.000đ',
  oldPrice: '4.200.000đ',
  description: 'Siêu phẩm tấn công của Victor, được các vận động viên chuyên nghiệp tin dùng. Khung vợt cứng cáp, hỗ trợ đập cầu uy lực.',
  images: [
    '/images/product-1.webp',
    '/images/product-2.webp',
    '/images/product-3.webp'
  ],
  specs: [
    { label: 'Trọng lượng', value: '3U / 4U' },
    { label: 'Độ cứng', value: 'Cứng' },
    { label: 'Sức căng tối đa', value: '32 LBS' },
    { label: 'Điểm cân bằng', value: 'Nặng đầu' }
  ]
});

// Logic chọn ảnh nhỏ để hiện ảnh to
const currentImage = ref(product.value.images[0]);
const changeImage = (img) => {
  currentImage.value = img;
};

// Logic số lượng
const quantity = ref(1);
</script>

<template>
  <DefaultLayout>

    <div class="container mx-auto px-4 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <div class="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white">
            <img :src="currentImage" class="w-full h-[500px] object-cover" alt="Main Product">
          </div>
          <div class="flex gap-4">
            <img v-for="(img, index) in product.images" :key="index" :src="img" @click="changeImage(img)"
              class="w-20 h-20 object-cover border rounded cursor-pointer hover:border-blue-600 transition"
              :class="{ 'border-blue-600 ring-1 ring-blue-600': currentImage === img }" />
          </div>
        </div>

        <div>
          <h1 class="text-3xl font-extrabold text-blue-900 mb-2">{{ product.name }}</h1>

          <div class="flex items-center gap-4 mb-6">
            <span class="text-3xl font-bold text-red-600">{{ product.price }}</span>
            <span class="text-lg text-gray-400 line-through">{{ product.oldPrice }}</span>
            <span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">-20%</span>
          </div>

          <p class="text-gray-600 mb-6 leading-relaxed border-b border-gray-200 pb-6">
            {{ product.description }}
          </p>

          <div class="mb-8">
            <h3 class="font-bold text-gray-800 mb-3 uppercase text-sm">Thông số kỹ thuật</h3>
            <ul class="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
              <li v-for="spec in product.specs" :key="spec.label">
                <span class="font-medium text-gray-900">{{ spec.label }}:</span> {{ spec.value }}
              </li>
            </ul>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center border border-gray-300 rounded">
              <button @click="quantity > 1 && quantity--" class="px-3 py-2 hover:bg-gray-100">-</button>
              <input type="text" v-model="quantity" class="w-12 text-center border-none outline-none font-bold"
                readonly>
              <button @click="quantity++" class="px-3 py-2 hover:bg-gray-100">+</button>
            </div>
            <button
              class="flex-1 bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition uppercase shadow-lg">
              Thêm vào giỏ hàng
            </button>
          </div>

        </div>

      </div>
    </div>

  </DefaultLayout>
</template>
