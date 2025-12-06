<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'; // Dùng để lấy ID trên thanh địa chỉ
import DefaultLayout from '@/layouts/DeFaultLayout.vue';
import api from '@/services/api';
const route = useRoute();

const product = ref(null);
const currentImage = ref('');
const quantity = ref(1);

// 2. Hàm gọi API lấy dữ liệu sản phẩm theo ID
const fetchProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    product.value = response.data;

    // Khi có dữ liệu rồi mới lấy ảnh đầu tiên làm ảnh chính
    // (Kiểm tra nếu có mảng images thì lấy, không thì lấy ảnh đại diện)
    if (product.value.images && product.value.images.length > 0) {
      currentImage.value = product.value.images[0];
    } else {
      currentImage.value = product.value.image; // Fallback nếu db.json chỉ có 1 ảnh
    }
  } catch (error) {
    console.error("Lỗi tải sản phẩm:", error);
  }
};

const changeImage = (img) => {
  currentImage.value = img;
};

// 3. Gọi hàm khi trang vừa mở
onMounted(() => {
  fetchProduct(route.params.id);
});

// 4. Theo dõi nếu ID thay đổi thì gọi lại (để fix lỗi bấm sản phẩm khác không đổi)
watch(() => route.params.id, (newId) => {
  fetchProduct(newId);
});
</script>

<template>
  <DefaultLayout>

    <div v-if="product" class="container mx-auto px-4 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <div class="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white">
            <img :src="currentImage" class="w-full h-[500px] object-cover" alt="Main Product">
          </div>

          <div v-if="product.images" class="flex gap-4 overflow-x-auto">
            <img v-for="(img, index) in product.images" :key="index" :src="img" @click="changeImage(img)"
              class="w-20 h-20 object-cover border rounded cursor-pointer hover:border-blue-600 transition"
              :class="{ 'border-blue-600 ring-1 ring-blue-600': currentImage === img }" />
          </div>
        </div>

        <div>
          <h1 class="text-3xl font-extrabold text-blue-900 mb-2">{{ product.name }}</h1>

          <div class="flex items-center gap-4 mb-6">
            <span class="text-3xl font-bold text-red-600">
              {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price) }}
            </span>
            <span v-if="product.oldPrice" class="text-lg text-gray-400 line-through">{{ product.oldPrice }}</span>
          </div>

          <p class="text-gray-600 mb-6 leading-relaxed border-b border-gray-200 pb-6">
            {{ product.description }}
          </p>

          <div v-if="product.specs" class="mb-8">
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

    <div v-else class="text-center py-20">
      <p class="text-xl text-gray-500">Đang tải thông tin sản phẩm...</p>
    </div>

  </DefaultLayout>
</template>
