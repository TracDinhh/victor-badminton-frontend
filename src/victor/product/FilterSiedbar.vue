<script setup>
import { ref } from 'vue';

const categories = ref(['Vot cau long', 'Giay victor', 'Quan ao', 'Balo & tui', 'Phu kien']);

const prices = ref([
  { label: 'Duoi 1 triu' },
  { label: '1 - 3 trieu' },
  { label: '3 - 5 trieu' },
  { label: 'Trn 5 tieu' },
]);
</script>

<template>
  <div class="bg-white p-4 rounded shadow-sm border border-gray-100">

    <div class="mb-8">
      <h3 class="font-bold text-gray-800 mb-3 uppercase text-sm tracking-wide">Danh Mục</h3>
      <ul class="space-y-2">
        <li v-for="cat in categories" :key="cat" class="flex items-center gap-2">
          <input type="checkbox" :id="cat" class="rounded text-blue-600 focus:ring-blue-500">
          <label :for="cat" class="text-gray-600 cursor-pointer hover:text-blue-600">{{ cat }}</label>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-gray-800 mb-3 uppercase text-sm tracking-wide">Mức Giá</h3>
      <ul class="space-y-2">
        <li v-for="price in prices" :key="price.label" class="flex items-center gap-2">
          <input type="radio" name="price" :id="price.label" class="text-blue-600 focus:ring-blue-500">
          <label :for="price.label" class="text-gray-600 cursor-pointer hover:text-blue-600">{{ price.label }}</label>
        </li>
      </ul>
    </div>

  </div>
</template>
