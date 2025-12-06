<script setup>
</script>

<template>

    <h2 class="text-2xl font-bold text-gray-800 mb-6">Tổng Quan Hôm Nay</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div class="p-3 bg-blue-50 text-blue-600 rounded-lg text-2xl">💰</div>
        <div>
          <p class="text-sm text-gray-500 font-medium">Tổng Doanh Thu</p>
          <p class="text-2xl font-bold text-gray-800">120.5M ₫</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div class="p-3 bg-green-50 text-green-600 rounded-lg text-2xl">📦</div>
        <div>
          <p class="text-sm text-gray-500 font-medium">Đơn Hàng Mới</p>
          <p class="text-2xl font-bold text-gray-800">1,245</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div class="p-3 bg-purple-50 text-purple-600 rounded-lg text-2xl">👥</div>
        <div>
          <p class="text-sm text-gray-500 font-medium">Khách Hàng</p>
          <p class="text-2xl font-bold text-gray-800">890</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div class="p-3 bg-orange-50 text-orange-600 rounded-lg text-2xl">🏸</div>
        <div>
          <p class="text-sm text-gray-500 font-medium">Sản Phẩm</p>
          <p class="text-2xl font-bold text-gray-800">156</p>
        </div>
      </div>

    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 flex items-center justify-center text-gray-400">
      (Khu vực hiển thị Biểu đồ doanh thu - Chart.js)
    </div>

</template>
