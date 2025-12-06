<script setup>
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();

// Hàm kiểm tra link đang active để tô màu
const isActive = (path) => route.path.startsWith(path);
</script>

<template>
  <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 z-50 transition-all">

    <div class="h-16 flex items-center justify-center border-b border-slate-700 shadow-sm bg-slate-950">
      <h1 class="text-xl font-bold tracking-wider text-white">
        VICTOR <span class="text-blue-500">ADMIN</span>
      </h1>
    </div>

    <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1">

      <RouterLink to="/admin/dashboard"
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200"
        :class="isActive('/admin/dashboard') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'">
        <span>📊</span>
        <span class="font-medium">Tổng Quan</span>
      </RouterLink>

      <div class="pt-4 pb-2 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Quản Lý Cửa Hàng</div>

      <RouterLink to="/admin/products"
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200"
        :class="isActive('/admin/products') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'">
        <span>📦</span>
        <span class="font-medium">Sản Phẩm</span>
      </RouterLink>

      <RouterLink to="/admin/orders"
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200"
        :class="isActive('/admin/orders') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'">
        <span>🛒</span>
        <span class="font-medium">Đơn Hàng</span>
      </RouterLink>

      <RouterLink to="/admin/customers"
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200"
        :class="isActive('/admin/customers') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'">
        <span>👤</span>
        <span class="font-medium">Khách Hàng</span>
      </RouterLink>

    </nav>

    <div class="p-4 border-t border-slate-800">
      <button class="flex items-center gap-3 text-red-400 hover:text-red-300 transition w-full px-4 py-2 rounded-lg hover:bg-slate-800">
        <span>🚪</span>
        <span class="font-medium">Đăng Xuất</span>
      </button>
    </div>

  </aside>
</template>
